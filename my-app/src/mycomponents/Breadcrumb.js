components/ProductDetails.js
import React from 'react';

const ProductDetails = () => {
  return (
    <section className="container py-4">
      <div className="row">
        <div className="col-md-6">
          <img 
            src="https://via.placeholder.com/500" 
            alt="Wooden Window" 
            className="img-fluid rounded" 
          />
        </div>
        <div className="col-md-6">
          <h2>WOODEN WINDOW</h2>
          <p className="text-warning">★★★★★</p>
          <h3>$1200</h3>
          <p>
            Wooden sash windows are typically crafted using high-quality timber sections, 
            combining tradition with durability and longevity.
          </p>
          <button className="btn btn-primary">Shop This</button>
        </div>
      </div>
    </section>
  );
};

export default ProductDetails;