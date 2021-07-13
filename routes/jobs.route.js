const mongoose = require('mongoose')
const { Router } = require('express')
const jobRoute = Router()
const middlewares = require('../middleware/auth.middle')
const Job = require('../model/Job.model')
const User = require('../model/User.model')
const validator = require('../helper_tools/validate')

jobRoute.get('/', async (req, res) => {
    let randomSkip = Math.ceil(Math.random() * 1000) - 20
    console.log(randomSkip)
    try {
        let data = await Job.find({},{},{limit : 20, skip : randomSkip})
        res.json(data)
    } catch(err) {
        res.send(err)
    }
})


jobRoute.post('/new/job', middlewares.userStatus, async (req,res) => {
    
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

jobRoute.put('/my-jobs/edit/:job_id', middlewares.userStatus, async(req, res) => {
            // TODO : validate update params stronger (e.g check salary type)
            let error = validator.jobDocumentValidation(req.body)
            if(error) {
                return res.send({"err_msg" : error.details[0].message})
            }

            try {
                const job = await Job.findByIdAndUpdate(req.params.job_id,req.body, {new : true})
                res.send({"updated_job_doc" : job})
            }  catch(err) {
                res.send({"err_msg" : err})
            }
})

jobRoute.get('/my-jobs/all', middlewares.userStatus, async(req, res) => {
        User.findById(req.session.user_id)
                        .populate('jobsPosted')
                        .exec((err, job_docs) => {
                                if(err) {
                                    res.send({"err_msg" : err.details[0].message})
                                } else {
                                    console.log(job_docs)
                                    res.send({"jobs" : job_docs['jobsPosted']})
                                }
                        })
})

jobRoute.delete('/my-jobs/delete/:job_id' , middlewares.userStatus, async (req, res) => {
    try {
        const deleting_job = await Job.findByIdAndDelete(req.params.job_id)
        res.send({"deleted_job_data" : deleting_job})
    } catch(err) {
        res.send({"err_msg" : err})
    }
})





module.exports = jobRoute