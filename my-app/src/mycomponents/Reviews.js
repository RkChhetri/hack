import React from "react";
import "./Reviews.css"; // Create this CSS file for custom styles.

function Reviews() {
  return (
    <div className="reviews-container">
      <h3 className="reviews-title">REVIEWS</h3>
      <div className="review-card">
        <div className="review-content">
          <div className="review-dot"></div>
          <div>
            <strong>Sunil Sah</strong>
            <p>Genuine product!</p>
          </div>
        </div>
      </div>
      <div className="review-card">
        <div className="review-content">
          <div className="review-dot"></div>
          <div>
            <strong>Sunil Sah</strong>
            <p>Genuine product!</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Reviews;
