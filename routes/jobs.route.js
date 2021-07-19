const mongoose = require('mongoose')
const { Router } = require('express')
const jobRoute = Router()
const middlewares = require('../middleware/auth.middle')
const Job = require('../model/Job.model')
const User = require('../model/User.model')
const validator = require('../helper_tools/validate')
const helpers = require('../helper_tools/hf')
const googleUser = require('../model/googleUser.model')

jobRoute.get('/', async (req, res) => {
    // page size is constant
    const PAGE_SIZE = 20  
    const page = req.query.page ? req.query.page : 1
    const skip = (page - 1) * PAGE_SIZE
    try {
        let data = await Job.find({},{},{limit : PAGE_SIZE, skip : skip})
        res.json(data)
    } catch(err) {
        res.send(err)
    }
})

jobRoute.get('/specific/', async (req, res) => {
      // get the filters
      const filter = helpers.setFilter(req.query) 
      try {
        const docs = await Job.find(filter)
        res.json(docs)
    } catch(err) {
        res.send(err)
      }
})



jobRoute.post('/new/job', async (req,res) => {
    
    req.body.posted_by = req.session.user_id
    const job = new Job(req.body)
    let user = null
    if(req.session.user_type === "origin") {
       user = await User.findById(req.session.user_id)
    } else {
        user = await googleUser.findOne({googleId : req.session.user_id})
    }

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

jobRoute.put('/my-jobs/edit/:job_id', async(req, res) => {
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

jobRoute.get('/my-jobs/all', async(req, res) => {
        let user = null
        if(req.session.user_type === "origin") {
            user = User.findById(req.session.user_id)
        } else if(req.session.user_type === "google") {
            user =  googleUser.findOne({googleId : req.session.user_id})
        }
       
        user
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

jobRoute.delete('/my-jobs/delete/:job_id',  async (req, res) => {
    try {
        const deleting_job = await Job.findByIdAndDelete(req.params.job_id)
        res.send({"deleted_job_data" : deleting_job})
    } catch(err) {
        res.send({"err_msg" : err})
    }
})





module.exports = jobRoute