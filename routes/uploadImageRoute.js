const express = require('express')
const uploadImageRoute = express.Router()
let streamifier = require('streamifier');
const cloudinaryConnect = require("../libs/cloudiniary");
const { v2: cloudinary } = require("cloudinary");

const multer = require("multer");
const upload = multer({ storage: multer.memoryStorage() });
uploadImageRoute.post("/", upload.single("file"), async(req, res)=>{
  await cloudinaryConnect();
  let cld_upload_stream = await cloudinary.uploader.upload_stream(
    {
      folder: "image",
    },
    function (error, result) {
      if(result){
        res.send({img: result?.secure_url})
      }
    }
  );
  streamifier.createReadStream(req.file.buffer).pipe(cld_upload_stream);
})

module.exports = uploadImageRoute