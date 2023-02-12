const path=require('path')
const express = require('express')
const app  = express()
const profileRoute=require('./routes/profileRoute')
const cors=require('cors')
const mongoose = require('mongoose')
require('dotenv').config
app.use(express.json({limit: '50mb'}))
app.use(cors())
const placementRoute=require('./routes/placementRoute')
const contactRoute=require('./routes/contactRoute')

const url = `mongodb+srv://TejalR:Tejal2806@cluster0.s9wpjms.mongodb.net/PlacementSystem?retryWrites=true&w=majority`;

const connectionParams={
    useNewUrlParser: true,
    useUnifiedTopology: true 
}


app.use('/',profileRoute)
app.use('/placement/',placementRoute)
app.use('/contact/',contactRoute)
app.use(express.static(path.join(__dirname, "./client/build"))); 
app.get("*", (req, res) => { res.sendFile(path.join(__dirname, "./client/build/index.html"));});
const port=8080;
mongoose.connect(url,connectionParams)
.then(()=>
{
    console.log("connection success");
    app.listen(port)
    console.log(`server is running on ${port}`);
})
.catch((err)=>
    {
        console.error(
            {
                message:"connection failed" +err.message
            }
        );
    }
)
