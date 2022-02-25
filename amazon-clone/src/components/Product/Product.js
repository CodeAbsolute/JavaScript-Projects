import React from "react";
import { useStateValue } from "../../StateProvider";
import "./Product.css";

const Product = ({ id, title, image, price, rating }) => {
  const [{ basket }, dispatch] = useStateValue();
  // console.log("this is the basket: >>>>", basket);
  const addToBasket = () => {
    // dispatch the item into the data layer
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id,
        title,
        price,
        rating,
        image,
      },
    });
  };

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
              <p key={i}>🌟</p>
            ))}
        </div>
      </div>
      {/*  Product Img */}
      <img className="product__image" src={image} alt="product-image" />

      <button onClick={addToBasket}>Add to Basket</button>
    </div>
  );
};

export default Product;
