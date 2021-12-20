import React from "react";
import "./Product.css";

const Product = ({ title, image, price, rating }) => {
  return (
    <div className="product">
      {/* Product Info */}
      <div className="product__info">
        <p>{title}</p>
        {/* Price section*/}
        <p className="product__price">
          <small>₹</small>
          <strong>{price}</strong>
        </p>
        <div className="product__rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p>🌟</p>
            ))}
        </div>
      </div>
      {/*  Product Img */}
      <img className="product__image" src={image} alt="product-image" />

      <button>Add to Basket</button>
    </div>
  );
};

export default Product;
