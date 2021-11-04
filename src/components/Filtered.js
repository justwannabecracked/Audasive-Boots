import React, { useContext, useRef, useEffect } from "react";
import ProductContext from "../context/product/productContext";
const Filtered = () => {
  const text = useRef("");

  const productContext = useContext(ProductContext);
  const { filterProduct, clearFilter, filtered } = productContext;

  useEffect(() => {
    if (filtered === []) {
      return text.current.value === "";
    }
  });

  const onChange = (e) => {
    if (text.current.value !== "") {
      filterProduct(e.target.value);
    } else {
      clearFilter();
    }
  };

  return (
    <div>
      <form>
        <input
          ref={text}
          type="text"
          placeholder="Filter Products"
          onChange={onChange}
        />
      </form>
    </div>
  );
};

export default Filtered;
