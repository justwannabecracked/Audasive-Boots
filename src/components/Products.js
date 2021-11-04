import React, { useContext } from "react";
import { Container, Col, Row } from "react-bootstrap";
import ProductItem from "./ProductItem";
import ProductContext from "../context/product/productContext";
const Products = () => {
  const productContext = useContext(ProductContext);

  const { products } = productContext;
  return (
    <Container>
      <Row>
        <Col md={12} className="shop-center">
          {products.map((product) => (
            <ProductItem product={product} key={product.id} />
          ))}
        </Col>
      </Row>
    </Container>
  );
};

export default Products;
