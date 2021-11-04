import React from "react";
import Footer from "./Footer";
import { Container, Col, Row } from "react-bootstrap";
import Products from "./Products";

const Shop = () => {
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
            <h1>Shop New Collections</h1>
          </div>
        </Col>
      </Row>
      <Row>
        <Products />
      </Row>
      <Row>
        <h2
          style={{
            padding: "30px 20px",
          }}
        >
          Categories
        </h2>
      </Row>
      <Row>
        <Col md={12}>
          <div
            style={{
              background: "#f2f2f2",
              padding: "10px 20px",
              color: "black",
              borderRadius: "5px",
              fontWeight: "600",
            }}
          >
            <h4>AMAZING BROQUES</h4>
          </div>

          <ul>
            <li className="links">Men's Standard</li>
            <li className="links">Women's Suede</li>
            <li className="links">Bata Nation</li>
            <li className="links">Clarks</li>
          </ul>
        </Col>
      </Row>
      <Row>
        <Col md={12}>
          <div
            style={{
              background: "#f2f2f2",
              padding: "10px 20px",
              color: "black",
              borderRadius: "5px",
              fontWeight: "600",
            }}
          >
            <h4>AWESOME SNEAKERS</h4>
          </div>

          <ul>
            <li className="links">Mabble</li>
            <li className="links">Adidas</li>
            <li className="links">AirMax</li>
            <li className="links">Nike Hit Productions</li>
            <li className="links">New Balance</li>
          </ul>
        </Col>
      </Row>
      <Row>
        <Col md={12}>
          <div
            style={{
              background: "#f2f2f2",
              padding: "10px 20px",
              color: "black",
              borderRadius: "5px",
              fontWeight: "600",
            }}
          >
            <h4>COOL BOOTS</h4>
          </div>

          <ul>
            <li className="links">Long Black Knee-Boots</li>
            <li className="links">CaveMen</li>
            <li className="links">Ariaos Slim</li>
            <li className="links">Saints Shoes</li>
          </ul>
        </Col>
      </Row>
      <Footer />
    </Container>
  );
};

export default Shop;
