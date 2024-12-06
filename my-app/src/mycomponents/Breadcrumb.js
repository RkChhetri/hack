import React from 'react';
import './ProductDetails.css'; // Include custom CSS for finer adjustments

const ProductDetails = () => {
  return (
    <section className="container py-4 product-details">
      <div className="row align-items-center">
        {/* Image Section */}
        <div className="col-md-6 mb-3 mb-md-0">
          <img 
            src="https://via.placeholder.com/500" 
            alt="Wooden Window" 
            className="img-fluid rounded shadow-sm" 
          />
        </div>

        {/* Text Section */}
        <div className="col-md-6">
          <h2 className="product-title">WOODEN WINDOW</h2>
          <p className="text-warning mb-2">★★★★★</p>
          <h3 className="product-price">$1200</h3>
          <p className="product-description">
            Wooden sash windows are typically crafted using high-quality timber sections, 
            combining tradition with durability and longevity.
          </p>
          <button className="btn btn-primary btn-lg">Shop This</button>
        </div>
      </div>
    </section>
  );
};

export default ProductDetails;
