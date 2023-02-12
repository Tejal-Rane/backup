import React, { useState,useRef } from 'react';
import JoditEditor from 'jodit-react';
import  axios  from 'axios';
import Button from '@mui/material/Button';
import { TextField } from '@mui/material';
// import IconButton from '@mui/material/IconButton';
// import PhotoCamera from '@mui/icons-material/PhotoCamera';
// import Stack from '@mui/material/Stack';

const Addplacement = () => {
  const editor=useRef(null)
    const [details, setDetails] = useState({
      companyName:'',
      driveDate:'',
      driveInfo:editor.value,
      package:'',
      address:'',
      contact:'',
    });

    const handleSubmit=(e)=>{
        e.preventDefault();
        axios.post('/placement/addplacement/',details).then((response)=>{
          console.log(response)
          alert(response.data);
        }).catch((error)=>{
            alert(error);
          })
        console.log(details)
    }
  return (
    <><form onSubmit={handleSubmit}>
    <TextField className=' col-lg-3 col-md-6 col-12 mx-2 my-3 ' required id="outlined-required"  name="Company name" value={details.companyName} onChange={(e)=>setDetails({...details,companyName:e.target.value})} label="Enter company Name" />
    <TextField className=' col-lg-3 col-md-6 col-12 mx-2 my-3 ' type="date" required id="outlined-required" name="Drive date" value={details.driveDate} onChange={(e)=>setDetails({...details,driveDate:e.target.value})} label="Enter drive date" />
    <TextField className=' col-lg-3 col-md-6 col-12 mx-2 my-3 ' required id="outlined-required"  name="Package" value={details.package} onChange={(e)=>setDetails({...details,package:e.target.value})} label="Enter Package" />
    <TextField className=' col-lg-3 col-md-6 col-12 mx-2 my-3 ' required id="outlined-required"  name="Address" value={details.address} onChange={(e)=>setDetails({...details,address:e.target.value})} label="Enter Address" />
    <TextField className=' col-lg-3 col-md-6 col-12 mx-2 my-3 ' required id="outlined-required"  name="Contact Number" value={details.contact} onChange={(e)=>setDetails({...details,contact:e.target.value})} label="Enter Contact" />
    <JoditEditor
        ref={editor}
        value={details.driveInfo}
        onChange={newContent=>setDetails({...details,driveInfo:newContent})}
    />
     {/* <Stack className=' col-lg-6 col-md-6 col-12 my-3' alignItems="center" spacing={2}>
      <Button  variant="contained" component="label">Upload Details <PhotoCamera />
        <input className=' col-lg-4 col-md-6 col-12 mx-5 ' hidden  multiple type="file" />
      </Button>
      <IconButton className=' col-lg-4 col-md-6 col-12 mx-5 ' color="primary" aria-label="upload picture" component="label">
        <input className=' col-lg-4 col-md-6 col-12 mx-5 ' hidden  type="file" />
      </IconButton>
    </Stack> */}
    <Button className="col-6 mx-auto" type='submit' color="primary" variant="contained" >submit</Button>
    </form></>
  )
}
export default Addplacement