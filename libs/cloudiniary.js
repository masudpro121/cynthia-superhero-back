const {v2} = require("cloudinary")
require('dotenv').config()         



let isConnected = false;
async function cloudinaryConnect () {
  return new Promise((resolve, reject)=>{
    if(!isConnected){
      console.log('connecting cloudinary');
       v2.config({ 
        cloud_name: 'dxsxymimb', 
        api_key: '714768195618313', 
        api_secret: 'vljMxTE4j6hmSkDFYouuuAIbXPQ' 
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