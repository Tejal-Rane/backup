import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import "./Viewprofile.css";
import EditIcon from '@mui/icons-material/Edit';
import Button from '@mui/material/Button';

const Viewprofile = () => {
    const [post,setPost]=useState("");
    let {id}=useParams();
    // const editItem=(id)=>{
    //   axios.get(`http://localhost:8080/vprofile`).then((response) => {
    //     console.log(response);
    // }).catch(()=>{
    //     alert("error!");
    // });
    // }
    useEffect(()=>{
        axios.get(`/get-user/${id}`).then((response) => {
      setPost(response.data);
      console.log(post);
    }).catch(()=>{
        alert("error!");
    });
  },[id]);
    
      return (
    <><div className='container'>
    <div className=' text-uppercase border border-warning w-50 p-3 mx-auto'>
    <center><img src={post.image} className=" rounded-circle "></img> <br/></center>
    <center><Link to={`/edit-user/vprofile/${id}`}><Button><EditIcon/></Button></Link></center>
        <h2 className='text-center'>Full Name: {post.name}</h2>
        <p>Email: {post.email}<br/> 
        Qualification: {post.qualification}<br/> 
        Average CGPA: {post.cgpa}<br/>
        Tenth %: {post.tenth}<br/>
        twelveth %: {post.twelveth}<br/>
        Diploma %: {post.diploma}<br/>
        Branch: {post.branch}<br/>
        Date of Birth: {post.dob}<br/>
        Address: {post.address}<br/>
        </p>
        
</div>
</div>
    </>
  )
}

export default Viewprofile