import React from 'react'
import Header from './Header'
import Breadcrumb from './Breadcrumb'
import ProductDetails from './Breadcrumb'
import Reviews from './Reviews'
import MoreFromShop from './MoreFromShop'


export default function Shops(props) {
  return (
    <div>
     
     
   
  <Breadcrumb map='https://www.google.com/maps/search/handicraft/@27.673706,85.4206856,13.75z?entry=ttu&g_ep=EgoyMDI0MTIwNC4wIKXMDSoASAFQAw%3D%3D'  name="Terracotta decorative bells" />
 
    <Reviews />
<MoreFromShop/>
    
    
    </div>
  )
}
