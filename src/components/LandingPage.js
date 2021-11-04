import React from "react";
import "react-bootstrap";
import { Link } from "react-router-dom";

import { Col, Row, Button } from "react-bootstrap";
import Footer from "./Footer";

const LandingPage = () => {
  return (
    <div className="container">
      <Row md={12} style={{ margin: "40px 0px" }}>
        <div className="background"></div>
      </Row>
      <Row md={12} style={{ padding: "20px 0px 90px 0px" }}>
        <div className="text-center">
          <h2
            style={{ color: "#929197", padding: "20px 0px", fontWeight: "600" }}
          >
            Audasive
          </h2>
          <p style={{ fontWeight: "600" }}>
            Haven't been thrilled before?? , Get the most reliable and
            affordable sneakers, shoes, broques,etc for that event you've been
            thinking about.{" "}
          </p>
          <Button variant="outline-dark">
            <Link to="/shop" className="link">
              Browse Collections
            </Link>
          </Button>
        </div>
      </Row>
      <Row>
        <Col md={12} style={{ margin: "-70px 0px 120px 0px" }}>
          <h3>GET 20% OFF</h3>{" "}
          <h2 className="logo py-4">TOP TRENDING COLLECTIONS</h2>
        </Col>
        <Col md={6} className="text-center img-center">
          <div className="product-img1">
            <div className="new">NEW</div>
          </div>
        </Col>
        <Col md={6} className="text-center img-center">
          <div className="product-img2">
            <div className="new">NEW</div>
          </div>
        </Col>
        <Col md={6} className="text-center img-center">
          <div className="product-img3">
            <div className="new">NEW</div>
          </div>
        </Col>
        <Col md={6} className="text-center img-center">
          <div className="product-img4">
            <div className="new">NEW</div>
          </div>
        </Col>
      </Row>

      <Footer />
    </div>
  );
};

export default LandingPage;
