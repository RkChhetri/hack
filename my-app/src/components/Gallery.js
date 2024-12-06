import React from "react";
import "./Gallery.css";

function Gallery() {
  return (
    <section className="gallery">
      <h2>Gallery</h2>
      <div className="gallery-slider">
        <div className="gallery-item">Image 1</div>
        <div className="gallery-item">Image 2</div>
        <div className="gallery-item">Image 3</div>
        <div className="gallery-item">Image 4</div>
      </div>
    </section>
  );
}

export default Gallery;
