import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { FaShoppingCart, FaArrowRight } from "react-icons/fa";
import ProductContext from "../context/product/productContext";

const SideNav = () => {
  const [active, setActive] = useState(false);
  const productContext = useContext(ProductContext);
  const { cart } = productContext;

  return (
    <div className="container">
      <div className="navbar">
        <div className="logo">Audasive</div>
        <div className="nave">
          <ul
            className="navlinks"
            style={{
              transform: active ? "translateX(0px)" : "",
            }}
          >
            <span className="close-nav" onClick={() => setActive()}>
              <FaArrowRight />
            </span>
            <li className="nav-li">
              <Link className="link" to="/">
                Home
              </Link>
            </li>

            <li className="nav-li">
              <Link className="link" to="/shop">
                Shop
              </Link>
            </li>
            <li className="nav-li">
              <Link className="link" to="/cart">
                Cart
                <span className="icons">
                  <FaShoppingCart />
                  <span className="clr">({cart.length})</span>
                </span>
              </Link>
            </li>
          </ul>
          <p onClick={() => setActive(!active)} className="sidemenu-toggler">
            <span></span>
            <span></span>
            <span></span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SideNav;
