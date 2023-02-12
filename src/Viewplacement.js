import React from 'react';
import {useState,useEffect} from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import './index.css';


const Viewplacement=()=>{
    const [post,setPost]=useState("");
    let {id}=useParams();
    useEffect(()=>{
        axios.get(`/placement/get-placement/${id}`).then((response) => {
            setPost(response.data);
            console.log(post);
          }).catch(()=>{
              alert("error!");
          });
        },[id]); 
        return(
            <>
            <div className='box'><div className=' border w-75 p-3 h-75 mx-auto m-5'>               
                <h1 className='text-uppercase text-center'>COMPANY NAME:{post.companyName}</h1>
                <p className='h3'>
                DRIVE DATE:{post.driveDate}<br/>
                PACKAGE:{post.package}<br/>
                ADDRESS:{post.address}<br/>
                CONTACT NO:{post.contact}</p>
                <div dangerouslySetInnerHTML={{__html:post.driveInfo}}/>
                </div></div>
 
            </>
        )
}
export default Viewplacement;