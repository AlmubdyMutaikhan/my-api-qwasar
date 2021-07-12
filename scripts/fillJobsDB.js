const mongoose = require('mongoose')
const csv = require('csvtojson')
const jobModel = require('../model/Job')
const DB_URI = `mongodb+srv://netninja:12345@testdb.ecsaa.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`

const saveJob = async (job) => {
        const jobData = new jobModel(job)
        try {
            let jobSaved = await jobData.save()
        } catch(err) {
            console.log(err)
        }
}

mongoose.connect(DB_URI, {useNewUrlParser : true, useUnifiedTopology : true})
    .then(() => {
        console.log("ok")
        csv().fromFile('./data.csv').then((j) => {
            j.forEach(job => {
                saveJob(job)
                    .then(() => {
                        console.log("saved sucessfully")
                    })
                    .catch((err) => {
                        console.log(err)
                    })    
            })
            
        })
    
    })
    .catch(err => {
        console.log(err)
    })
