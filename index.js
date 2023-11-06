const express = require("express")
const cors = require("cors")
const uploadImageRoute = require("./routes/uploadImageRoute")
const app = express()
const PORT = process.env.PORT || 8888
app.use(cors())

app.use("/upload-image", uploadImageRoute)

app.listen(PORT, ()=>{
  console.log('Server is running with port: ', PORT);
})