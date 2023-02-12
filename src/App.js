import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import { Routes,Route } from "react-router-dom";
import Home from "./Home";
import Contact from "./Contact";
import About from "./About";
import  Navbar  from "./Navbar";
import Placement from "./Placement";
import { Createprofile } from "./Createprofile";
import Viewprofile from "./Viewprofile";
import Listalluser from "./Listalluser";
import Addplacement from "./Addplacement";
import Viewplacement from "./Viewplacement";

const App=()=> {
  return (
    <>
  
    
    <Navbar/>
    <Routes>
    <Route exact path="/" element={<Home></Home>}/>
    <Route exact path="/contact" element={<Contact></Contact>}/>
    <Route exact path="/about" element={<About></About>}/>
    <Route exact path="/placement" element={<Placement></Placement>}/>
    <Route exact path="/profile" element={<Createprofile></Createprofile>}/>
    <Route exact path="/vprofile/:id" element={<Viewprofile></Viewprofile>}/>
    <Route  path="/edit-user/vprofile/:id" element={<Createprofile></Createprofile>}/>
    <Route exact path="/listall" element={<Listalluser></Listalluser>}/>
    <Route exact path="/addplace" element={<Addplacement></Addplacement>}/>
    <Route exact path="/vplacement/:id" element={<Viewplacement></Viewplacement>}/>
  
    </Routes>
   
    </>
    );
}

export default App;
