import React from "react";
import "./ProductSuggestions.css";

function ProductSuggestions() {
  return (
    <section className="product-suggestions">
      <h2>You May Like</h2>
      <div className="products">
        <div className="product">Product 1</div>
        <div className="product">Product 2</div>
        <div className="product">Product 3</div>
        <div className="product">Product 4</div>
      </div>
    </section>
  );
}

export default ProductSuggestions;
