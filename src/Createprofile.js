import React, { useState,useEffect } from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import Stack from '@mui/material/Stack';
import "./Createprofile.css";
import AppRegistrationIcon from '@mui/material/IconButton';
import axios from 'axios';
import FileBase64 from 'react-file-base64';
import { useParams } from 'react-router-dom';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';


export const Createprofile = () => {
  const [file, setFile] = useState({
        name:"",
        email:"",
        contact:"",
        qualification:"",
        cgpa:"",
        tenth:"",
        twelveth:"",
        diploma:"",
        branch:"",
        dob:"",
        address:"",
        resume:"",
        image:"",
        
  });
  let {id}=useParams();
 useEffect(()=>{
  axios.get(`/get-user/${id}`).then((response) => {
      setFile(response.data)
    }).catch(()=>{
        alert("error!");
    });
 },[id])
  const handleSubmit=(e)=>{
    //e.preventDefault();
    if(id){
      axios.put(`/edit-user/${id}`,file).then((response) => {
       alert(response.data.message);
       }).catch(()=>{
           alert("error!");
       })
    }
    else{
      file.image && axios.post('/profile/',file).then((response)=>{
      console.log(response)
      alert(response.data);
    }).catch((error)=>{
        alert(error);
      });
    }
}

  return (
    <>
    <form className='col-md-10 col-11 mx-auto d-flex flex-column justify-content-center' onSubmit={handleSubmit}>
    <div className=' col-12 ' >
   
    {/* <input type="file" onChange={handleChange} /> */}
   
    <TextField className=' col-lg-3 col-md-6 col-12 mx-2 my-3 ' required id="outlined-required" value={file.name} onChange={(e)=>setFile({...file,name:e.target.value})} name="name" label="Enter Full Name" />
    <TextField className=' col-lg-3 col-md-6 col-12 mx-2 my-3 ' type="email" required id="outlined-required" value={file.email} onChange={(e)=>setFile({...file,email:e.target.value})} name="email" label="Enter Email" />
    <TextField className=' col-lg-3 col-md-6 col-12 mx-2 my-3 ' required id="outlined-required" value={file.contact} onChange={(e)=>setFile({...file,contact:e.target.value})} name="contact" label="Enter Contact" />
    <TextField className=' col-lg-3 col-md-6 col-12 mx-2 my-3 ' required id="outlined-required" value={file.qualification} onChange={(e)=>setFile({...file,qualification:e.target.value})} name="qualification" label="Enter Qualification" />
    <TextField className=' col-lg-3 col-md-6 col-12 mx-2 my-3 ' required id="outlined-required" value={file.cgpa} onChange={(e)=>setFile({...file,cgpa:e.target.value})} name="cgpa" label="Enter Average CGPA" />
    <TextField className=' col-lg-3 col-md-6 col-12 mx-2 my-3 ' type="number" required id="outlined-required" value={file.tenth} onChange={(e)=>setFile({...file,tenth:e.target.value})} name="tenth" label="Enter 10th %" />
    <TextField className=' col-lg-3 col-md-6 col-12 mx-2 my-3 ' type="number" value={file.twelveth} onChange={(e)=>setFile({...file,twelveth:e.target.value})} name="twelveth" label="Enter 12th %" />
    <TextField className=' col-lg-3 col-md-6 col-12 mx-2 my-3 ' type="number"  value={file.diploma} onChange={(e)=>setFile({...file,diploma:e.target.value})} name="diploma" label="Enter Diploma %" />
    {/* <TextField className=' col-lg-3 col-md-6 col-12 mx-2 my-3 ' required id="outlined-required" value={file.branch} onChange={(e)=>setFile({...file,branch:e.target.value})} name="branch" label="Enter Branch" /> */}
     <Select className='col-lg-3 col-md-6 col-12 mx-2 my-3 '
    labelId="select branch"
    id="demo-simple-select"
    value={file.branch}
    label="Branch"
    onChange={(e)=>setFile({...file,branch:e.target.value})}
  >
    <MenuItem value='INFORMATION TECHNOLOGY'>INFORMATION TECHNOLOGY</MenuItem>
    <MenuItem value='BSC'>BSC</MenuItem>
    <MenuItem value='BCOM'>BCOM</MenuItem>
  </Select>
    <TextField className=' col-lg-3 col-md-6 col-12 mx-2 my-3 ' type="date" required id="outlined-required" value={file.dob} onChange={(e)=>setFile({...file,dob:e.target.value})} name="dob" label="Enter Date of birth" />
    <TextField className=' col-lg-3 col-md-6 col-12 mx-2 my-3 '  id="outlined-multiline-flexible" value={file.address} onChange={(e)=>setFile({...file,address:e.target.value})} name="address" label="Enter Address" multiline minRows={4}/>
    <Stack className=' col-lg-6 col-md-6 col-12' alignItems="center" spacing={2}>
      <Button  variant="contained" component="label">Upload Resume <PhotoCamera />
        <input className=' col-lg-4 col-md-6 col-12 mx-5 ' hidden accept="image/*" multiple type="file" />
      </Button>
      <IconButton className=' col-lg-4 col-md-6 col-12 mx-5 ' color="primary" aria-label="upload picture" component="label">
        <input className=' col-lg-4 col-md-6 col-12 mx-5 ' hidden accept="image/*" type="file" />
      </IconButton>
    </Stack>
    <FileBase64  className='col-lg-6 col-md-6 col-12'
        multiple={ false }
        onDone={({base64})=> setFile({...file,image:base64})} />
</div><br/>
 {id?<Button className="col-3 mx-auto" color="primary" variant="contained"  onClick={()=>handleSubmit()} >EDIT</Button>:<Button className="col-3 mx-auto" color="primary" variant="contained" onClick={()=>handleSubmit()}>SUBMIT</Button>}<AppRegistrationIcon/>
</form>
    </>
  )
}
