import { useNavigate } from 'react-router-dom';

import home1 from './pictures/home1.jpg';
import home2 from './pictures/home2.webp';
import home3 from './pictures/home3.jpg';
import i1 from './pictures/pottery.webp';
import i2 from './pictures/handicraft.webp';
import i3 from './pictures/khana.webp';
import i4 from './pictures/mandala.webp';
import i5 from './pictures/wood.webp';
import i6 from './pictures/PAINTING.webp';
import i7 from './pictures/man1.webp';
import i8 from './pictures/man2.webp';
import i9 from './pictures/man3.webp';


import './Home.css'
import TestimonialCard from './TestimonialCard';
import YouMayLike from './YouMayLike';
import ProductSection from './ProductSection';
import Reviews from './Reviews';
import MoreFromShop from './MoreFromShop';
import Courosel from './Courosel';
import Footer from './Footer';
import Shops from './Shops';
import Places from './Places';

export default function Home() {
  const navigate = useNavigate();



  const handleClick = () => {
    navigate('/Shops');
  };



  return (
    <>
<br/>
<div className='row' >
<div className='col-md-10 mx-auto'>

        <Courosel />
      </div>
      </div>
      <br/>
      <div className='best_place'>
        LOCAL BUSINESS
      </div>
      <div className='row'>
        <div className='col-md-10 mx-auto'>


          <div class="card-group mx-auto">
          
          
            <div class="card">
              <img src={i2} class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title">HANDICRAFT</h5>
                <p class="card-text">
                  The people of Bhaktapur are renowned for their exceptional craftsmanship in wood carving, pottery, and metalwork, with each piece reflecting the region's rich cultural heritage, artistic traditions, and skilled craftsmanship.                                      <br />



                </p>
                <button type="button" className="btn btn-primary" onClick={handleClick}>
                  View Details


                </button>
              </div>
            </div>

            <div class="card">
              <img src={i1} class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title">POTTERY</h5>
                <p class="card-text">
                This handcrafted Bhaktapur clay pot is expertly made using traditional techniques passed down through generations. With its earthy tone and rustic charm, it brings a touch of Nepalese craftsmanship to your home.<br />



                </p>
                <button type="button" className="btn btn-primary" onClick={handleClick}>
                  View Details


                </button>
              </div>
            </div>
            <div class="card">
              <img src={i3} class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title">NEWARI CUISINE</h5>
                <p class="card-text">Newari cuisine of Bhaktapur blends rich flavors with dishes like "king curd" (juju dhau), sel roti, and momo, using locally sourced ingredients, complex spices, and traditional cooking methods to reflect cultural heritage.</p>
                <button type="button" className="btn btn-primary" onClick={handleClick}>
                  View Details


                </button>
              </div>
            </div>
          </div>


          <div class="card-group mx-auto">
            <div class="card">
              <img src={i4} class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title">MANDALA</h5>
                <p class="card-text">
                  Mandala paintings in Bhaktapur are intricate, spiritual artworks representing harmony and balance. These hand-painted masterpieces feature detailed patterns and vibrant colors, reflecting the city's rich cultural heritage and deep-rooted artistic traditions.</p>
                <button type="button" className="btn btn-primary" onClick={handleClick}>
                  View Details


                </button>
              </div>
            </div>
            <div class="card">
              <img src={i5} class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title">WOOD CARVING</h5>
                <p class="card-text">Wood carving in Bhaktapur is a revered art form, with intricate designs adorning temples, doors, and windows. Skilled artisans craft detailed, symbolic patterns, reflecting the region’s rich cultural heritage and craftsmanship.</p>
                <button type="button" className="btn btn-primary" onClick={handleClick}>
                  View Details


                </button>
              </div>
            </div>
            <div class="card">
              <img src={i6} class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title">PAINTINGS</h5>
                <p class="card-text">Paintings in Bhaktapur are vibrant expressions of culture and tradition, showcasing intricate designs, rich colors, and skilled craftsmanship. These artworks reflect the region's history, spirituality, and the talent of local artists.</p>
                <button type="button" className="btn btn-primary" onClick={handleClick}>
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

            <TestimonialCard details1="Rajesh yadav" review="Excellent service! The team was professional, prompt, and exceeded my expectations. Highly recommend for
anyone needing reliable solutions!" image={i7} />
            <TestimonialCard details1=" Ashim Shakya" review=" 
Exceptional product! High quality, reliable, and exceeded all expectations!" image={i8} />
            <TestimonialCard details1="Bina Bhandari" review="This product is outstanding! Exceptional quality, reliable performance, and worth every penny." image={i9} />


          </div>


        </div>

      </div>



      <div>




      </div>
      {/* 
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
 */}

    </>
  )
}