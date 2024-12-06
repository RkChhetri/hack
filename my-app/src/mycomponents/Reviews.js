import React from 'react';
import './Reviews.css'; // Import the updated CSS

const Reviews = () => {
  return (
    <section className="reviews-container py-4">
      <div className="container">
        <h3 className="reviews-title text-center">Reviews</h3>
        <div className="review-card">
          <div className="review-content">
            <div className="review-dot"></div>
            <div>
              <p className="mb-1"><strong>Sunil Sah</strong></p>
              <p>Genuine Product!!</p>
            </div>
          </div>
        </div>
        <div className="review-card">
          <div className="review-content">
            <div className="review-dot"></div>
            <div>
              <p className="mb-1"><strong>Sunil Sah</strong></p>
              <p>Genuine Product!!</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
