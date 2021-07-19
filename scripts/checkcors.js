const express = require('express')
const app = express()
const axios = require('axios')

app.listen(4000)
app.get('/', async (req, res) => {
    const data = await axios({
        method: 'GET',
        url: 'http://localhost:8080/',
        headers:{
          Accept: 'application/json',
        }
      });
    console.log(data.data)
      res.send("ok")
})
