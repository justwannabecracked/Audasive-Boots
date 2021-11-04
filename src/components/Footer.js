import React from "react";
import { Col, Row } from "react-bootstrap";

const Footer = () => {
  const date = new Date().getFullYear();

  return (
    <div>
      <Row
        style={{
          backgroundColor: "#f2f2f2",
          padding: "30px 0px",
          borderRadius: "20px",
        }}
      >
        <Col md={4} className="text-center py-4">
          <h4
            style={{ color: "#929197", padding: "20px 0px", fontWeight: "600" }}
          >
            Customers Services
          </h4>

          <ul>
            <>Help & Contact Us</>
            <li>Returns & Refunds </li>
            <li>Online Stores</li>
            <li> Terms & Conditions </li>
          </ul>
        </Col>
        <Col md={4} className="text-center py-4">
          <h4
            style={{ color: "#929197", padding: "20px 0px", fontWeight: "600" }}
          >
            Company
          </h4>
          <ul>
            <li>Who We Are ?</li>
            <li>Available Services </li>
            <li>Latest Products</li>
            <li> FAQs </li>
          </ul>
        </Col>

        <Col md={4} className="text-center py-4">
          <h4
            style={{ color: "#929197", padding: "20px 0px", fontWeight: "600" }}
          >
            {" "}
            Social Media
          </h4>

          <ul>
            <li>Facebook</li>
            <li>Instagram </li>
            <li>WhatsApp</li>
            <li>Pinterest</li>
          </ul>
        </Col>
      </Row>
      <Row>
        <Col md={12} className="text-center py-4">
          @{date} Audasive Shopping Template made with{" "}
          <span style={{ color: "#929197" }}>ReactJS</span> written by{" "}
          <span style={{ color: "#929197" }}>Femi Obadimu</span>
        </Col>
      </Row>
    </div>
  );
};

export default Footer;
