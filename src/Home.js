import React from 'react';
import { NavLink } from 'react-router-dom';
import web from "../src/bg_bggenerator_com.jpg";

const Home = () => {
  return (
    <>
    <div className='back' style={{ backgroundImage: `url(${web})`}}>
      <section id='header'>
      <div>
        <div className='row'> 
        <div className='col-10 mx-auto'>
        <div className='row'>
        <div className='col-md-10 pt-5 pt-lg-5 order-2 order-lg-1 d-flex justify-content-center flex-column'>
        <h1>V.G VAZE COLLEGE OF ARTS,SCIENCE AND <div className='text-center'>COMMERCE</div></h1>
        <h2 className='my-4'>
          PLACEMENT CELL
        </h2>
        <div className='mt-3'>
          <NavLink to="/placement" className='btn'>Get Started</NavLink>
        </div>
        </div>
        </div>
        
       
        
        </div>
        </div>
      </div>
      
      </section>
      </div>
    </>
  )
}

export default Home