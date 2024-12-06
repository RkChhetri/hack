import React from 'react'
import Courosel from './Courosel';
import home1 from './pictures/home1.jpeg';
import home2 from './pictures/home2.jpg';
import home3 from './pictures/home3.jpg';


import './Home.css'
import TestimonialCard from './TestimonialCard';
import YouMayLike from './YouMayLike';
import ProductSection from './ProductSection';
import Reviews from './Reviews';
import MoreFromShop from './MoreFromShop';
export default function Home() {
  return (
    <>


      <div>

        <Courosel />
      </div>
      <div className='best_place'>
    BEST PLACE IN BHAKTAPUR
      </div>
      <div className='row'>
      <div className='col-md-10 mx-auto'>

   
      <div class="card-group mx-auto">
  <div class="card">
    <img src={home1} class="card-img-top" alt="..."/>
    <div class="card-body">
      <h5 class="card-title">Card title</h5>
      <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#Transaction">
               View Details
     
     
     </button>
    </div>
  </div>
  <div class="card">
    <img src={home2} class="card-img-top" alt="..."/>
    <div class="card-body">
      <h5 class="card-title">Card title</h5>
      <p class="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
      <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#Transaction">
               View Details
     
     
     </button>
    </div>
  </div>
  <div class="card">
    <img src={home2} class="card-img-top" alt="..."/>
    <div class="card-body">
      <h5 class="card-title">Card title</h5>
      <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
      <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#Transaction">
               View Details
     
     
     </button>
    </div>
  </div>
</div>


</div>
</div>
<div className='row'>

<div className='col-md-10 mx-auto'>

<div class="card-group ">

<TestimonialCard/>
  

  </div>
<div class="card-group ">

<YouMayLike/>
  

  </div>
  
    
</div>
  
</div>
<div className="container my-5">
  <div className='row'>
  <ProductSection/>
  </div>
     
      
    </div>
<div className="container ">
 <div className='row'>

      <Reviews/>
 </div>
   
    </div>
<div className="container my-5">
     <div className='row'>

    <MoreFromShop/>
     </div>
   
    </div>


    </>
  )
}
