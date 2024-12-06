import React from 'react';
import './ProductDetails.css'; // Include custom CSS for finer adjustments
import vd1 from './pictures/vd1.jpg';

const ProductDetails = (props) => {
  return (
    <section className="product-details container py-5">
      <div className="row align-items-center">
        {/* Image Section */}
        <div className="col-md-6 mb-4 mb-md-0">
          <a href={props.map}>
            <img 
              src={vd1}
              alt="Wooden Window" 
              className="img-fluid rounded shadow-sm product-image"
            />
          </a>
        </div>

        {/* Text Section */}
        <div className="col-md-6">
          <h2 className="product-title">{props.name}</h2>
          <p className="text-warning mb-2">★★★★★</p>
          <h3 className="product-price">RS 1200</h3>
          <p className="product-description">
            Wooden sash windows are typically crafted using high-quality timber sections, 
            combining tradition with durability and longevity.
          </p>

          <a href={props.map} className="btn btn-primary">Locate this</a>
        </div>
      </div>
    </section>
  );
};

export default ProductDetails;
