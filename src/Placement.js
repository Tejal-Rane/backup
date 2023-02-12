import React from 'react'
import axios from 'axios';
import { useEffect,useState } from 'react';
import { DataGrid } from '@material-ui/data-grid';
import { Link, Navigate } from 'react-router-dom';
import { Button } from '@material-ui/core';
import './index.css';


const Placement = () => {
  const [details,setDetails]=useState([]);
  //const [counter,setCounter]=useState(1);
  // const navigate= useNavigate();
    useEffect(()=>{
      const getallplacement=async()=>{
        const allplacements=await axios.get("/placement/all-placement/")
        setDetails(allplacements.data)
        // console.log(details)
      }
 getallplacement() },[]);
  const columns = [    
    {
      field:'id',
      headerName: '#',
      // getRowId={(row)=>{row.statId}}
      getRowId:(params)=>params.row.statId
    },
     {
       field: 'companyName',
       headerName: 'Company Name',
       width: 200,
       editable: true,
     },
     {
       field: 'driveDate',
       headerName: 'Drive Date',
       type: 'number',
       width: 200,
       editable: true,
     },
     {
      field: 'action',
       headerName: 'action',
       width: 200,
       renderCell: (params) => 
       <Button to={`/vplacement/${params.row._id}`} component={Link} variant='contained' color='primary' onClick={()=>console.log(params)}>View Drive</Button>,
     }
   ];
   console.log(details);
   
     return (
      <div className='place'>
       <div style={{ height: 600, width: '100%' }}>
         <DataGrid
           getRowId={(row) => row._id}
           rows={details}
           columns={columns}
           pageSize={5} 
         />
       </div></div>
     );
   }

export default Placement;