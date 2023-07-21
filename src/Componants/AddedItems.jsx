import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { increment, removeFromCart } from "../Redux/Actions";

export const AddedItems = () => {
  const cartItems = useSelector((state) => state.cart);
  
  const dispatch=useDispatch()

  //to update quantity in same row for same product
  const summedItems = cartItems.reduce((accumulator, item) => {
    const existingItem = accumulator.find(
      (accItem) => accItem.productName === item.productName
    );

    if (existingItem) {
      existingItem.quantity += item.quantity;
      existingItem.total = existingItem.quantity * existingItem.Price;
    } else {
      accumulator.push({ ...item, total: item.quantity * item.Price });
    }

    return accumulator;
  }, []);

  //calculate Total

  const totalSum = summedItems.reduce(
    (accumulator, item) => accumulator + item.total,
    0
  );
  
const deletehandler=(ItemId)=>{
 dispatch(removeFromCart(ItemId))
 
}
  return (
    // <div>
    <div
      className="container"
      style={{
        border: "2px solid white",
        marginTop: "10px",
        marginBottom: "10px",
        width: "60%",
        borderRadius: "2rem",
      }}
    >
      <h3 style={{ textAlign: "center", color: "aquamarine" }}>
        Your Total Bill
      </h3>
      <hr style={{ border: "1px solid white" }}></hr>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginTop: "40PX",
          marginBottom: "40px",
        }}
      >
        <p className="s">Product name</p>
        <p className="s">Qauntity </p>
        <p className="s">Price</p>
        <p className="s">Total</p>
        <p>Remove</p>
      </div>
      {/* props.cartItems.map((item, index)--->Intially we did this */}
      {summedItems.map((item, index) => (
        <div
          key={index}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            marginBottom: "5px",
            // border: "2px solid white",
          }}
        >
          <p className="r">{item.productName}</p>
          <p className="r">{item.quantity}</p>
          <p className="r">{item.Price}</p>
          <p className="r">{item.quantity * item.Price}</p>
          <p><button className="btn btn-primary" onClick={() => deletehandler(item.Id)}>Remove</button></p>
        </div>
      ))}
      <hr style={{ border: "1px solid white" }}></hr>
      <div
        style={{
          display: "flex",
          justifyContent: "flex-end",
          marginTop: "10px",
          fontWeight: "bold",
        }}
      >
        <p style={{ textDecoration: "underline" }}>Total Sum: {totalSum}</p>
      </div>
    </div>
    // </div>
  );
};
