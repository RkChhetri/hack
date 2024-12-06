import React from "react";
import home1 from './pictures/pottery1.jpg';
import home2 from './pictures/pottery2.jpg';
import home3 from './pictures/pottery3.jpg';
import home4 from './pictures/pottery4.jpg';
import './MoreFromShop.css'; // Optional for additional custom styles

function MoreFromShop() {
  return (
    <div className="mt-5 more-from-shop">
      <h3 className="mb-4 text-center">MORE FROM "THIS SHOP"</h3>
      <div className="row g-3">
        <div className="col-6 col-md-3">
          <div className="image-container">
            <img
              src={home1}
              alt="Product 1"
              className="img-fluid rounded shadow-sm"
            />
          </div>
        </div>
        <div className="col-6 col-md-3">
          <div className="image-container">
            <img
              src={home2}
              alt="Product 2"
              className="img-fluid rounded shadow-sm"
            />
          </div>
        </div>
        <div className="col-6 col-md-3">
          <div className="image-container">
            <img
              src={home3}
              alt="Product 3"
              className="img-fluid rounded shadow-sm"
            />
          </div>
        </div>
        <div className="col-6 col-md-3">
          <div className="image-container">
            <img
              src={home4}
              alt="Product 4"
              className="img-fluid rounded shadow-sm"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default MoreFromShop;
