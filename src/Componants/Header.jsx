import React from "react";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <div className="pad-to-header">
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-header">
        <a className="navbar-brand" href="#">
          MiniZomato
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <Link to="/" className="nav-link" href="#">
                Home <span className="sr-only">(current)</span>
              </Link>
            </li>
            <li className="nav-item active">
              <a className="nav-link" href="#">
                Items <span className="sr-only">(current)</span>
              </a>
            </li>
          
          </ul>
          <form className="form-inline my-2 my-lg-0">
      <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
      <button className="btn btn-outline-success my-2 my-sm-0" type="submit" >Search</button>
    </form>
          <form className="form-inline my-2 my-lg-0">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <a className="nav-link" href="#">
                  Contact <span className="sr-only">(current)</span>
                </a>
              </li>
              <li
                className="nav-item"
                style={{ marginLeft: "20px", marginRight: "20px" }}
              >
                <a className="nav-link" href="#">
                  Help
                </a>
              </li>
            </ul>
           

            <Link to="/cartItems">
              <img src="/food/icons8-cart-32.png" alt="Cart" />
            </Link>
          </form>
        </div>
      </nav>
    </div>
  );
};
