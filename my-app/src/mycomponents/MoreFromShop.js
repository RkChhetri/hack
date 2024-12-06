import React from "react";
import home1 from './pictures/home1.jpeg';
import home2 from './pictures/home2.jpg';
import home3 from './pictures/home3.jpg';


function MoreFromShop() {
  return (
    <div className="mt-5">
      <h3 className="mb-4">MORE FROM "THIS SHOP"</h3>
      <div className="row">
        <div className="col-md-3">
          <img
            src={home1} // Replace with actual image URL
            alt="Product 1"
            className="img-fluid rounded"
          />
        </div>
        <div className="col-md-3">
          <img
            src={home2}// Replace with actual image URL
            alt="Product 2"
            className="img-fluid rounded"
          />
        </div>
        <div className="col-md-3">
          <img
            src={home3} // Replace with actual image URL
            alt="Product 3"
            className="img-fluid rounded"
          />
        </div>
        <div className="col-md-3">
          <img
            src={home1} // Replace with actual image URL
            alt="Product 4"
            className="img-fluid rounded"
          />
        </div>
      </div>
    </div>
  );
}

export default MoreFromShop;
