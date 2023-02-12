import React from 'react'
import { DataGrid } from '@material-ui/data-grid';
import { useEffect,useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Listalluser = () => {
    const [details,allDetails]=useState([]);
    useEffect(()=>{
        axios.get("/all-user/").then((response) => {
      allDetails(response.data);
      console.log(details);
    }).catch(()=>{
        alert("error!");
    });
  },[]);
    const columns = [
     { field: '_id', headerName: 'ID', width: 90,
     renderCell: (params) => 
     <Link to={`/vprofile/${params.row._id}`}>${params.row._id}</Link>,},
      {
        field: 'name',
        headerName: 'Full name',
        width: 150,
        editable: true,
      },
      {
        field: 'email',
        headerName: 'Email',
        width: 130,
        editable: true,
      },
      {
        field: 'contact',
        headerName: 'Contact No',
        type: 'number',
        width: 150,
        editable: true,
      },
      {
        field: 'qualification',
        headerName: 'Qualification',
        description: 'This column has a value getter and is not sortable.',
        sortable: false,
        width: 150,
      },
      {
        field: 'cgpa',
        headerName: 'Average cgpa',
        type: 'number',
        width: 110,
        editable: true,
      },
      {
        field: 'tenth',
        headerName: 'Tenth %',
        type: 'number',
        width: 110,
        editable: true,
      },
      {
        field: 'twelveth',
        headerName: 'Twelveth %',
        type: 'number',
        width: 110,
        editable: true,
      },
      {
        field: 'diploma',
        headerName: 'Diploma %',
        type: 'number',
        width: 110,
        editable: true,
      },
      {
        field: 'branch',
        headerName: 'Branch',
        type: 'number',
        width: 110,
        editable: true,
      },
      {
        field: 'dob',
        headerName: 'Date of Birth',
        type: 'number',
        width: 110,
        editable: true,
      },
      {
        field: 'address',
        headerName: 'Address',
        type: 'number',
        width: 110,
        editable: true,
      },

    ];
   
      return (
        <div style={{ height: 400, width: '100%' }}>
          <DataGrid
           getRowId={(row) => row._id}
            rows={details}
            columns={columns}
            pageSize={5}
          />
        </div>
      );
    }

export default Listalluser;