import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";


import './App.css';

import {
  BrowserRouter ,Route,Routes,
 
  
  
} from "react-router-dom";

import UserLogin from './mycomponents/Login';

import Signup from './mycomponents/Signup';


import Navbar from './mycomponents/Navbar';
import View from './mycomponents/View';
import Home from "./mycomponents/Home";
import Login from "./mycomponents/Login";
import Footer from "./mycomponents/Footer";
import Contact from "./mycomponents/Contact";




function App() {
  return (
    <>
     <BrowserRouter>

     <div className='row'>
   
 
      
  <Navbar title="Local Globe"/>
  

  
    </div>


<div className='row'>


</div>

<Routes>



 <Route path="/signup" element={<Signup/>}/>
 <Route path="/view" element={   <View/>}/>
 <Route path="/contact" element={<Contact/>}/>
   
  


   
   <Route path="/userlogin" element={  <Login  state={"hello"} />} />


   <Route path="/" element={
  <Home/> 
   }/>
   
   

 
  



</Routes>
</BrowserRouter>


<div className='row'>
<Footer/> 
     </div>
    </>
  );
}

export default App;
