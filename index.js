const express = require("express")
const cors = require("cors")
const bodyparser = require('body-parser')
const uploadImageRoute = require("./routes/uploadImageRoute")
const generateImageRoute = require("./routes/generateImageRoute")
const checkImageRoute = require("./routes/checkImageRoute")
const app = express()
const PORT = process.env.PORT || 8888
app.use(cors())
app.use(bodyparser.json())

app.use("/upload-image", uploadImageRoute)
app.use("/generate-image", generateImageRoute)
app.use("/check-image", checkImageRoute)

app.listen(PORT, ()=>{
  console.log('Server is running with port: ', PORT);
})