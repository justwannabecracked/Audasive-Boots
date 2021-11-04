import React, { useContext } from "react";
import { Link } from "react-router-dom";
// import Filtered from "./Filtered";
import ProductContext from "../context/product/productContext";

import Footer from "./Footer";
import {
  FaShoppingCart,
  FaArrowLeft,
  FaArrowRight,
  FaTrashAlt,
  FaPlusCircle,
  FaMinusCircle,
} from "react-icons/fa";
import { Container, Col, Row, Table, Button } from "react-bootstrap";
const Cart = () => {
  const productContext = useContext(ProductContext);

  const { cart, deleteProduct } = productContext;

  return (
    <Container>
      <Row>
        <Col md={12}>
          <div
            style={{
              margin: "50px 0px",
              background: "#f2f2f2",
              padding: "100px 20px",
              borderRadius: "20px",
            }}
          >
            <h1>
              Cart
              <span className="icons">
                <FaShoppingCart />
              </span>
            </h1>
          </div>
        </Col>
      </Row>
      <Row>
        <Col md={12}>
          <h2>Shopping Cart</h2>
          {/* <Filtered /> */}
        </Col>
      </Row>
      <Row>
        <Col md={12} className="text-center">
          <Table responsive="md" className="text-center">
            <thead>
              <tr>
                <th></th>
                <th></th>
                <th>Product Description</th>
                <th>Quantity</th>
                <th>Price(₦)</th>
                <th></th>
              </tr>
            </thead>
            {cart.length > 0 ? (
              cart.map((item) => (
                <tbody className="text-center" key={item.id}>
                  <tr>
                    <td></td>
                    <td className="text-center">
                      <img
                        src={item.image}
                        alt="Audasive-images"
                        style={{ width: "50px", height: "50px" }}
                      />
                    </td>
                    <td className="text-center">{item.name}</td>
                    <td className="text-center">
                      <div>
                        <Button
                          className="cart-btn"
                          onClick={() => deleteProduct()}
                        >
                          <FaMinusCircle
                            onClick={() =>
                              item.quantity <= 1
                                ? item.quantity
                                : item.quantity--
                            }
                          />
                        </Button>
                        <span className="number">{item.quantity}</span>
                        <Button
                          className="cart-btn"
                          onClick={() => deleteProduct()}
                        >
                          <FaPlusCircle onClick={() => item.quantity++} />
                        </Button>
                      </div>
                    </td>
                    <td className="text-center">
                      {" "}
                      ₦ {item.price * item.quantity}
                    </td>
                    <td className="text-center">
                      <FaTrashAlt onClick={() => deleteProduct(item.id)} />
                    </td>
                  </tr>
                </tbody>
              ))
            ) : (
              <tbody>
                <tr>
                  <td></td>
                  <td></td>
                  <td>
                    <div className="text-center">
                      <h2>No Items In Cart</h2>
                    </div>
                  </td>
                  <td></td>
                  <td></td>
                </tr>
              </tbody>
            )}
          </Table>
        </Col>
      </Row>
      <Row>
        <Col md={12}>
          <div
            style={{
              margin: "50px 0px",
              background: "#f2f2f2",
              padding: "30px 20px",
              borderRadius: "20px",
            }}
          >
            <div>
              <h1>CART TOTAL</h1>
            </div>
            <div
              style={{
                color: "black",
                borderRadius: "5px",
                fontWeight: "600",
                display: "flex",
                justifyContent: "space-between",
                flexWrap: "nowrap",
                flexDirection: "row",
              }}
            >
              <div>SUB-TOTAL</div>
              <div className="sub-total">
                ₦
                {cart.reduce(
                  (accumulate, product) =>
                    accumulate + parseInt(product.price) * product.quantity,
                  0
                )}
              </div>
            </div>
            <hr />

            <div
              style={{
                color: "black",
                borderRadius: "5px",
                fontWeight: "600",
                display: "flex",
                justifyContent: "space-between",
                flexWrap: "nowrap",
                flexDirection: "row",
              }}
            >
              <div>VAT(4.0%)</div>
              <div className="vat">
                ₦
                {cart.reduce(
                  (accumulate, product) =>
                    accumulate + parseInt(product.price) * product.quantity,
                  0
                ) * 0.04}
              </div>
            </div>
            <hr />

            <div
              style={{
                color: "black",
                borderRadius: "5px",
                fontWeight: "600",
                display: "flex",
                justifyContent: "space-between",
                flexWrap: "nowrap",
                flexDirection: "row",
              }}
            >
              <div>TOTAL</div>
              <div className="total">
                ₦
                {cart.reduce(
                  (accumulate, product) =>
                    accumulate + parseInt(product.price) * product.quantity,
                  0
                ) *
                  0.04 +
                  cart.reduce(
                    (accumulate, product) =>
                      accumulate + parseInt(product.price) * product.quantity,
                    0
                  )}
              </div>
            </div>
          </div>
        </Col>
      </Row>
      <Row>
        <Col md={12}>
          <div
            style={{
              margin: "30px 0px",
              background: "#f2f2f2",
              padding: "10px 20px",
              color: "black",
              borderRadius: "5px",
              fontWeight: "600",
              display: "flex",
              justifyContent: "space-between",
              flexWrap: "nowrap",
              flexDirection: "row",
            }}
          >
            <div>
              <Link to="/shop" className="link">
                <span>
                  <FaArrowLeft />
                </span>{" "}
                Continue Shopping
              </Link>
            </div>
            <div>
              {cart.length > null && (
                <Link to="/cart" className="link">
                  Checkout
                  <span>
                    <FaArrowRight />
                  </span>{" "}
                </Link>
              )}
            </div>
          </div>
        </Col>
      </Row>
      <Footer />
    </Container>
  );
};

export default Cart;
