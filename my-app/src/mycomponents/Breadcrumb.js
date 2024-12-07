import React from 'react';
import './ProductDetails.css'; // Include custom CSS for finer adjustments
import vd1 from './pictures/Ghanti.jpg';

const ProductDetails = (props) => {
  return (
    <section className="product-details container py-5">
      <div className="row align-items-center">
        {/* Image Section */}
        <div className="col-md-6 mb-4 mb-md-0">
          <a href={props.map}>
            <img 
              src={vd1}
              alt="Terracotta decorative hanging bells" 
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
          Terracotta ornamental hanging bells are one of the nicest items that you could find in any ceramic exhibition. They are intended to be hung in windows so that the wind could play with them, creating delightful soundscapes. They also come in a variety of forms and colours. Furthermore, the price listed above is for a single bell. You can increase the number of bells as per your will.
          </p>

          <a href='http://localhost/map/'className="btn btn-primary">Locate this</a>
        </div>
      </div>
    </section>
  );
};

export default ProductDetails;
