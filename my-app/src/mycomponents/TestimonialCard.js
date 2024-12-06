import React from "react";


const TestimonialCard = (props) => {
  return (
    <div>
        <div className="col-md-4">
          <div
            className="card p-4"
            style={{
              backgroundColor: "#dfe3d6", // Light olive color
              borderRadius: "8px",
            }}
          >
            <h5 className="card-title text-uppercase" style={{ fontFamily: "serif" }}>
              Customers Testimonial
            </h5>
            <p className="card-text" style={{ fontStyle: "italic" }}>
             {props.review}
            </p>
            <div className="d-flex align-items-center mt-4">
              <img
                src={ props.image }
                alt="Customer"
                className="rounded-circle"
                style={{
                  width: "80px",
                  height: "80px",
                  objectFit: "cover",
                }}
              />
              <div className="ms-3">
                <p className="mb-0">{props.details1}</p>
              </div>
            </div>
            <div className="mt-3">
              <span className="text-warning">
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
              </span>
            </div>
          </div>
          </div>

    </div>
  );
};

export default TestimonialCard;


