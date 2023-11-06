const {v2} = require("cloudinary")
require('dotenv').config()         



let isConnected = false;
async function cloudinaryConnect () {
  return new Promise((resolve, reject)=>{
    if(!isConnected){
      console.log('connecting cloudinary');
       v2.config({ 
        cloud_name: process.env.CLOUD_NAME, 
        api_key: process.env.CLOUDINARY_KEY, 
        api_secret: process.env.CLOUDINARY_SECRET 
      });
      isConnected = true
      resolve('Connected')
    }else{
      console.log('already connected cloudinary');
      resolve('Connected')
    }
  })
}

module.exports = cloudinaryConnect