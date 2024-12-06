// src/components/Reviews.js
import React from 'react';
import './Reviews.css';

export default function Reviews() {
  return (
    <div className="reviews-container">
      <h3 className="reviews-title">Reviews</h3>
      <section className="reviews-section">
        <div className="review-card">
          <div className="review-content">
            <div className="review-dot"></div>
            <div>
              <p className="mb-1"><strong>Sunil Sah</strong></p>
              <p>This product has exceeded all my expectations. The build quality is excellent, the features are versatile, and it works seamlessly without any issues. Highly recommend it to anyone looking for a reliable product.</p>
            </div>
          </div>
        </div>
        <div className="review-card">
          <div className="review-content">
            <div className="review-dot"></div>
            <div>
              <p className="mb-1"><strong>Rita Sharma</strong></p>
              <p>I have been using this product for a few weeks now, and I must say it has significantly improved my daily routine. It's user-friendly, efficient, and comes with a lot of handy features that I find very useful. Definitely worth the investment.</p>
            </div>
          </div>
        </div>
        
        
        
      </section>
    </div>
  )
}
