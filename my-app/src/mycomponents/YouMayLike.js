import React from "react";
import home1 from './pictures/home1.jpg';
import home2 from './pictures/home2.webp';
import home3 from './pictures/home3.jpg';

const YouMayLike = () => {
  return (
    <div className="container mt-4">
      <h5 className="mb-3">You may like</h5>
      {/* Carousel */}
      <div
        id="youMayLikeCarousel"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        {/* Carousel Items */}
        <div className="carousel-inner">
          {/* First Slide */}
          <div className="carousel-item active">
            <div className="d-flex justify-content-between">
              <div className="card" style={{ width: "18%" }}>
                <img
                  src={home1}
                  className="card-img-top"
                  alt="Item 1"
                />
              </div>
              <div className="card" style={{ width: "18%" }}>
                <img
                  src={home2}
                  className="card-img-top"
                  alt="Item 2"
                />
              </div>
              <div className="card" style={{ width: "18%" }}>
                <img
                  src={home3}
                  className="card-img-top"
                  alt="Item 3"
                />
              </div>
              <div className="card" style={{ width: "18%" }}>
                <img
                  src={home1}
                  className="card-img-top"
                  alt="Item 4"
                />
              </div>
            </div>
          </div>
          {/* Second Slide */}
          <div className="carousel-item">
            <div className="d-flex justify-content-between">
              <div className="card" style={{ width: "18%" }}>
                <img
                  src={home2}
                  className="card-img-top"
                  alt="Item 5"
                />
              </div>
              <div className="card" style={{ width: "18%" }}>
                <img
                  src={home3}
                  className="card-img-top"
                  alt="Item 6"
                />
              </div>
              <div className="card" style={{ width: "18%" }}>
                <img
                  src={home1}
                  className="card-img-top"
                  alt="Item 7"
                />
              </div>
              <div className="card" style={{ width: "18%" }}>
                <img
                 src={home2}
                  className="card-img-top"
                  alt="Item 8"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Carousel Controls */}
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#youMayLikeCarousel"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#youMayLikeCarousel"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};

export default YouMayLike;
