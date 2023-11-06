const express = require('express')
const checkImageRoute = express.Router()
const axios = require("axios")
checkImageRoute.get("/", async(req, res)=>{
  const response = await axios.get("https://api.thenextleg.io/v2/message/"+req.query.id,{
      headers:  {
        Authorization : process.env.NEXT_LEG,
        'Content-Type': 'application/json'
      }
    })
    
  res.send(response.data)
})

module.exports = checkImageRoute


