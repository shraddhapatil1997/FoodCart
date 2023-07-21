import React, { useEffect, useState } from "react";
import { CartItem } from "./CartItem";
import { AddedItems } from "./AddedItems";
import { Route, Routes } from "react-router-dom";
import { Home } from "./Home";
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from "../Redux/Actions";
// import { BrowserRouter as Router,Routes, Route, Link } from 'react-router-dom';

export const Cart = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products);
   useEffect(() => {
     dispatch(fetchProducts());
  }, [dispatch]);

    return (
    <div>
      <div className="container">
        <div className="d-flex flex-wrap">
          {products.map((products) => (
            <CartItem item={products}  />
          ))}
        </div>
      </div>
    </div>
  );
};
