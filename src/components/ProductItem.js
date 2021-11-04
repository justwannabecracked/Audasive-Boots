import React, { useContext } from "react";
import { FaCartPlus } from "react-icons/fa";
import { Col, Button } from "react-bootstrap";
import ProductContext from "../context/product/productContext";

const ProductItem = ({ product }) => {
  const productContext = useContext(ProductContext);
  const { addProduct } = productContext;
  // console.log(cart);

  const onAdd = () => {
    addProduct(product);
    // console.log(product.name);
  };

  return (
    <Col md={6} className="text-center ">
      <img
        src={product.image}
        alt="Audasive-images"
        className="product-images"
      />
      <h2 className="pd-name">{product.name}</h2>
      <p className="pd-price">₦{product.price}</p>
      <div className="tag-container">
        <div className="pd-tag">Tag :{product.tag}</div>

        <div>
          <Button className="product-btn" onClick={onAdd}>
            <FaCartPlus style={{ fontSize: "30px" }} />
          </Button>
        </div>
      </div>
    </Col>
  );
};

export default ProductItem;
