const express = require("express")
const cors = require("cors")
const app = express()
const PORT = process.env.PORT || 8888
app.use(cors())

app.listen(PORT, ()=>{
  console.log('Server is running with port: ', PORT);
})