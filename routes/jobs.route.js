const mongoose = require('mongoose')
const { Router } = require('express')
const jobRoute = Router()
const middlewares = require('../middleware/auth.middle')
const Job = require('../model/Job.model')
const User = require('../model/User.model')

jobRoute.get('/', middlewares.authSession, async (req, res) => {
    let randomSkip = Math.ceil(Math.random() * 1000) - 20
    console.log(randomSkip)
    try {
        let data = await Job.find({},{},{limit : 20, skip : randomSkip})
        res.json(data)
    } catch(err) {
        res.send(err)
    }
})

jobRoute.post('/new/job', middlewares.authSession, async (req,res) => {
    
    req.body.posted_by = req.session.user_id
    const job = new Job(req.body)
    const user = await User.findOne({_id : req.session.user_id})
    user.jobsPosted.push(job._id)
    

    // update user's job list and save it
    user.save()
        .then(() => {
            // then save job
            job.save()
                .then(job_doc => {
                    res.send({"job" : job_doc})
                })
                .catch(err =>{
                    res.send({"err_msg" : err})
                })
        })
        .catch(err => {
            res.send({"err_msg" : err})
        }) 
    
})

jobRoute.get('/my-jobs', middlewares.authSession, async(req, res) => {
    const usr_employer = User.findById(req.session.user_id)
                                .populate('jobsPosted')
                                .exec((err, job_docs) => {
                                    if(err) {
                                        res.send({"err_msg" : err})
                                    } else {
                                        console.log(job_docs)
                                        res.send({"jobs" : job_docs['jobsPosted']})
                                    }
                                })
})






module.exports = jobRoute