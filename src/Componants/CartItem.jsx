import React, { useEffect, useState } from "react";
import { AddedItems } from "./AddedItems";
import { Link } from "react-router-dom";
import { useDispatch} from "react-redux";
import { addToCart, increment } from "../Redux/Actions";

export const CartItem = (props) => {
  const [quantity, setQuantity] = useState(0);
  const dispatch = useDispatch();
  

  const handleDecrease = () => {
    setQuantity(quantity - 1);
  };
  const handleIncrease = () => {
    setQuantity(quantity + 1);
  };
  const handleAddToCart1 = (products) => {
    dispatch(addToCart({ ...products, quantity: quantity}));
  };
  

  return (
    <div className="col-md-4">
      <div
        className="item-food card"
        style={{ width: "18rem", marginBottom: "15px" }}
      >
        <img
          style={{ height: "200px" }}
          className="card-img-top"
          src={process.env.PUBLIC_URL + props.item.Productimg}
          alt="Card image cap"
        />
        <div className="card-body">
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              marginBottom: "5px",
            }}
          >
            <h5 className="card-title">{props.item.productName}</h5>
            <button
              className="btn btn-primary"
              style={{
                border: "1px solid black",
                backgroundColor: "black",
                color: "white",
              }}
            >
              Price:{props.item.Price}
            </button>{" "}
           </div>

          <div
            className="styled"
            style={{ border: "2px", display: "inline-block" }}
          >
            <button onClick={()=>handleDecrease(props.Id)}>-</button>
            <input
              type="number"
              value={quantity}
              readOnly
              style={{ width: "30px" }}
            />
            <button onClick={()=>handleIncrease(props.Id)}>+</button>
          </div>
          <Link to="/cartItems">
            <button
              className="btn btn-primary"
              style={{ marginLeft: "54px" }}
              onClick={() => handleAddToCart1(props.item)}
            >
              Add To Cart
            </button>
          </Link>
        </div>
      </div>
    </div>

    
  );
};
