const express = require('express')
const generateImageRoute = express.Router()
const axios = require('axios')
generateImageRoute.post("/", async(req, res)=>{
  const response = await axios.post(
    "https://api.thenextleg.io/v2/imagine",
    {
      msg: req.body.prompt || "Generate a random image",
      ref: "",
      webhookOverride: "",
    },
    {
      headers: {
        Authorization: process.env.NEXT_LEG,
        "Content-Type": "application/json",
      },
    }
  );

  res.send(response.data);
})

module.exports = generateImageRoute