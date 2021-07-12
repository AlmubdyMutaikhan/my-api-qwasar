const mongoose = require('mongoose')
const { Router } = require('express')
const jobRoute = Router()
const middlewares = require('../middleware/auth.middle')
const Job = require('../model/Job.model')

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






module.exports = jobRoute