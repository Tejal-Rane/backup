const mongoose=require('mongoose')

const profileSchema=new mongoose.Schema(
    {
        name:String,
        email:{
            type:String,
            unique:true
        },
        contact:Number,
        qualification:String,
        cgpa:Number,
        tenth:Number,
        twelveth:Number,
        diploma:Number,
        branch:String,
        dob:Date,
        address:String,
        image:String,
      
    }
 )
 module.exports=mongoose.model('ProfileDetails',profileSchema)