import React from "react";
import home3 from './pictures/home3.jpg';

function ProductSection() {
  return (
    <div className="row">
      <div className="col-md-6">
        <img
          src={home3} // Replace with actual image URL
          alt="Wooden Window"
          className="img-fluid rounded"
        />
      </div>
      <div className="col-md-6">
        <h2>WOODEN WINDOW</h2>
        <h4 className="text-primary">$1200</h4>
        <p>
          Wooden sash windows are typically crafted using high-quality timber
          from sustainable sources. They are prized for their traditional
          appeal but also provide durability and longevity. This crafted
          product showcases excellent artistry and preferences, with options
          for different finishes, glazing, and hardware.
        </p>
        <button className="btn btn-primary">SHOP THIS</button>
      </div>
    </div>
  );
}

export default ProductSection;
