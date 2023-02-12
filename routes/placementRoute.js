const mongoose=require('mongoose')
const router=require('express').Router()
const Placement=require('../model/addplacement')

router.post(`/addplacement`,(req,res)=>{
    console.log(req.body)
    const placement=new Placement(req.body);
    placement.save()
        .then(placement=>{
            res.status(200).send("placement added successfully");
        })
        .catch(err=>{
            res.status(400).send('adding data failed');
        });
})
router.get("/all-placement/",async(req,res)=>{
    try{
        const allplacements=await Placement.find({});
        console.log(allplacements)
        res.status(200).json(allplacements);
        console.log('data received');
    }catch(error)
    {
        console.log(error);
    }
});
router.get(`/get-placement/:id`,async(req,res)=>{
    try{
        const id=req.params.id;
        const singlePlacement=await Placement.findById(id);
        res.status(200).json(singlePlacement);
        console.log('Data received');
    }catch(error)
    {
        console.log(error);
    }
});
module.exports=router
