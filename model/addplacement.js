const mongoose=require('mongoose')

const placementSchema=new mongoose.Schema(
    {
        companyName:String,
        driveInfo:{
            type:String,
            required:true
        },
        driveDate:String,
        package:Number,
        address:String,
        contact:Number,
    }
 )
 module.exports=mongoose.model('Addplacement',placementSchema)