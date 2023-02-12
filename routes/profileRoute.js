const mongoose=require('mongoose')
const router=require('express').Router()
const User=require('../model/profile')


router.post(`/profile`,(req,res)=>{
    console.log(req.body)
    const user=new User(req.body);
    user.save()
        .then(user=>{
            res.status(200).send("user register successfully");
        })
        .catch(err=>{
            res.status(400).send('adding data failed');
        });
})
router.get("/get-user/:id",async(req,res)=>{
    try{
        const id=req.params.id;
        const allprofile=await User.findById(id);
        res.status(200).json(allprofile);
        console.log('data received');
    }catch(error)
    {
        console.log(error);
    }
});
router.get("/all-user/",async(req,res)=>{
    try{
        const alluser=await User.find();
        res.status(200).json(alluser);
        console.log('data received');
    }catch(error)
    {
        console.log(error);
    }
});
router.put("/edit-user/:id",async(req,res)=>{
    try{
        const id=req.params.id;
        const edit=await User.findByIdAndUpdate({_id:id},req.body);
        edit.save().then((exp)=>{
            res.status(200).json({message:"expense edited"});
        })
    }
    catch(error){
        console.log(error);
    }
});
module.exports=router