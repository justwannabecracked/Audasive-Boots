import React, { useReducer } from "react";
import { v4 as uuid } from "uuid";
import productContext from "./productContext";
import productReducer from "./productReducer";
import image1 from "./sneaker_images/img1.jpg";
import image2 from "./sneaker_images/img2.jpg";
import image3 from "./sneaker_images/img3.jpg";
import image4 from "./sneaker_images/img4.jpg";
import image5 from "./sneaker_images/img5.jpg";
import image6 from "./sneaker_images/img6.jpg";
import image7 from "./sneaker_images/img7.jpg";
import image8 from "./sneaker_images/img8.jpg";
import image9 from "./sneaker_images/img9.jpg";
import image10 from "./sneaker_images/img10.jpg";
import image11 from "./sneaker_images/img11.jpg";
import image12 from "./sneaker_images/img12.jpg";
import image13 from "./sneaker_images/img13.jpg";
import image14 from "./sneaker_images/img14.jpg";
import image15 from "./sneaker_images/img15.jpg";
import image16 from "./sneaker_images/img16.jpg";
import image17 from "./sneaker_images/img17.jpg";
import image18 from "./sneaker_images/img18.jpg";
import image19 from "./sneaker_images/img19.jpg";
import image20 from "./sneaker_images/img20.jpg";
import image21 from "./sneaker_images/img21.jpg";
import image22 from "./sneaker_images/img22.jpg";
import image23 from "./sneaker_images/img23.jpg";
import image24 from "./sneaker_images/img24.jpg";
import image25 from "./sneaker_images/img25.jpg";
import image26 from "./sneaker_images/img26.jpg";
import image27 from "./sneaker_images/img27.jpg";
import image28 from "./sneaker_images/img28.jpg";
import image29 from "./sneaker_images/img29.jpg";
import image30 from "./sneaker_images/img30.jpg";

import {
  ADD_PRODUCT,
  DELETE_PRODUCT,
  FILTER_PRODUCT,
  CLEAR_FILTER,
} from "../types";

const ProductState = (props) => {
  const initialState = {
    products: [
      {
        id: 1,
        name: "Nike AirForce TrailBlaze",
        description:
          "libero ab vitae nulla rerum pariatur! Quo quis consequuntur sunt ullam facilis eos unde libero voluptate alias qui quisquam in omnis, ipsam repellat esse reiciendis vero quae nemo itaque, placeat atque. Ipsum autem modi nisi labore, voluptate vel.",
        price: "22000",
        tag: "Balance Like Never Before",
        category: "",
        image: image1,
        quantity: 1,
      },
      {
        id: 2,
        name: "AirForce F1 PRO",
        description:
          "libero ab vitae nulla rerum pariatur! Quo quis consequuntur sunt ullam facilis eos unde libero voluptate alias qui quisquam in omnis, ipsam repellat esse reiciendis vero quae nemo itaque, placeat atque. Ipsum autem modi nisi labore, voluptate vel.",
        price: "19000",
        tag: "Serving You Audasively",
        category: "",
        image: image2,
        quantity: 1,
      },
      {
        id: 3,
        name: "Adidas Mount5tops",
        description:
          "libero ab vitae nulla rerum pariatur! Quo quis consequuntur sunt ullam facilis eos unde libero voluptate alias qui quisquam in omnis, ipsam repellat esse reiciendis vero quae nemo itaque, placeat atque. Ipsum autem modi nisi labore, voluptate vel.",
        price: "20000",
        tag: "Strong as Ever",
        category: "",
        image: image3,
        quantity: 1,
      },
      {
        id: 4,
        name: "Draaibbe Adidas Slice",
        description: "",
        price: "28000",
        tag: "Smooth ,Sleek ,Awesome",
        category: "",
        image: image4,
        quantity: 1,
      },
      {
        id: 5,
        name: "GUC Symphony Air",
        description:
          "libero ab vitae nulla rerum pariatur! Quo quis consequuntur sunt ullam facilis eos unde libero voluptate alias qui quisquam in omnis, ipsam repellat esse reiciendis vero quae nemo itaque, placeat atque. Ipsum autem modi nisi labore, voluptate vel.",
        price: "21000",
        tag: "Free, Soft , Cool",
        category: "",
        image: image5,
        quantity: 1,
      },
      {
        id: 6,
        name: "GR_3 Airforce Swiss",
        description: "",
        price: "23000",
        tag: "Balancing Mights ",
        category: "",
        image: image6,
        quantity: 1,
      },
      {
        id: 7,
        name: "A1droid New Balance",
        description:
          "libero ab vitae nulla rerum pariatur! Quo quis consequuntur sunt ullam facilis eos unde libero voluptate alias qui quisquam in omnis, ipsam repellat esse reiciendis vero quae nemo itaque, placeat atque. Ipsum autem modi nisi labore, voluptate vel.",
        price: "23000",
        tag: "Dream Came Live",
        category: "",
        image: image7,
        quantity: 1,
      },
      {
        id: 8,
        name: "FreeSol Airmax",
        description:
          "libero ab vitae nulla rerum pariatur! Quo quis consequuntur sunt ullam facilis eos unde libero voluptate alias qui quisquam in omnis, ipsam repellat esse reiciendis vero quae nemo itaque, placeat atque. Ipsum autem modi nisi labore, voluptate vel.",
        price: "22000",
        tag: "Beyond Limitations",
        category: "",
        image: image8,
        quantity: 1,
      },
      {
        id: 9,
        name: "Similitude Spark",
        description:
          "libero ab vitae nulla rerum pariatur! Quo quis consequuntur sunt ullam facilis eos unde libero voluptate alias qui quisquam in omnis, ipsam repellat esse reiciendis vero quae nemo itaque, placeat atque. Ipsum autem modi nisi labore, voluptate vel.",
        price: "26000",
        tag: "No Boundaries All-Round",
        category: "",
        image: image9,
        quantity: 1,
      },
      {
        id: 10,
        name: "UNI-FORCE NIKE",
        description:
          "libero ab vitae nulla rerum pariatur! Quo quis consequuntur sunt ullam facilis eos unde libero voluptate alias qui quisquam in omnis, ipsam repellat esse reiciendis vero quae nemo itaque, placeat atque. Ipsum autem modi nisi labore, voluptate vel.",
        price: "20000",
        tag: "Light Weight, Smooth",
        category: "",
        image: image10,
        quantity: 1,
      },
      {
        id: 11,
        name: "Amazon Casuals",
        description:
          "libero ab vitae nulla rerum pariatur! Quo quis consequuntur sunt ullam facilis eos unde libero voluptate alias qui quisquam in omnis, ipsam repellat esse reiciendis vero quae nemo itaque, placeat atque. Ipsum autem modi nisi labore, voluptate vel.",
        price: "27000",
        tag: "Balance Like Never Before",
        category: "",
        image: image11,
        quantity: 1,
      },
      {
        id: 12,
        name: "Lions AirForce Trailz",
        description:
          "libero ab vitae nulla rerum pariatur! Quo quis consequuntur sunt ullam facilis eos unde libero voluptate alias qui quisquam in omnis, ipsam repellat esse reiciendis vero quae nemo itaque, placeat atque. Ipsum autem modi nisi labore, voluptate vel.",
        price: "26000",
        tag: "i know, You Haven't tried this",
        category: "",
        image: image12,
        quantity: 1,
      },
      {
        id: 13,
        name: "Adidas Spark",
        description:
          "libero ab vitae nulla rerum pariatur! Quo quis consequuntur sunt ullam facilis eos unde libero voluptate alias qui quisquam in omnis, ipsam repellat esse reiciendis vero quae nemo itaque, placeat atque. Ipsum autem modi nisi labore, voluptate vel.",
        price: "24000",
        tag: "Balance Like Never Before",
        category: "",
        image: image13,
        quantity: 1,
      },
      {
        id: 14,
        name: "AREIES_TRADS AirMax",
        description:
          "libero ab vitae nulla rerum pariatur! Quo quis consequuntur sunt ullam facilis eos unde libero voluptate alias qui quisquam in omnis, ipsam repellat esse reiciendis vero quae nemo itaque, placeat atque. Ipsum autem modi nisi labore, voluptate vel.",
        price: "19000",
        tag: "Greatness like Never Before",
        category: "",
        image: image14,
        quantity: 1,
      },
      {
        id: 15,
        name: "Swiss AirMax FO1",
        description:
          "libero ab vitae nulla rerum pariatur! Quo quis consequuntur sunt ullam facilis eos unde libero voluptate alias qui quisquam in omnis, ipsam repellat esse reiciendis vero quae nemo itaque, placeat atque. Ipsum autem modi nisi labore, voluptate vel.",
        price: "24000",
        tag: "Balance Like Never Before",
        category: "",
        image: image15,
        quantity: 1,
      },
      {
        id: 16,
        name: "AirForce DODDLE ",
        description:
          "libero ab vitae nulla rerum pariatur! Quo quis consequuntur sunt ullam facilis eos unde libero voluptate alias qui quisquam in omnis, ipsam repellat esse reiciendis vero quae nemo itaque, placeat atque. Ipsum autem modi nisi labore, voluptate vel.",
        price: "22000",
        tag: "Balance Like Never Before",
        category: "",
        image: image16,
        quantity: 1,
      },
      {
        id: 17,
        name: "Audasive Spotless",
        description:
          "libero ab vitae nulla rerum pariatur! Quo quis consequuntur sunt ullam facilis eos unde libero voluptate alias qui quisquam in omnis, ipsam repellat esse reiciendis vero quae nemo itaque, placeat atque. Ipsum autem modi nisi labore, voluptate vel.",
        price: "22000",
        tag: "Light Sounds",
        category: "",
        image: image17,
        quantity: 1,
      },
      {
        id: 18,
        name: "Nike AirForce TrailBlaze",
        description:
          "amet consectetur adipisicing elit. Ab repudiandae, ipsa officia quidem aut fugiat eaque, odio vel, illum dolorem quam? Voluptates soluta et officia magni corporis architecto odio sequi.",
        price: "22000",
        tag: "Balance Like Never Before",
        category: "",
        image: image18,
        quantity: 1,
      },
      {
        id: 19,
        name: "Nike AirForce TrailBlaze",
        description:
          "amet consectetur adipisicing elit. Ab repudiandae, ipsa officia quidem aut fugiat eaque, odio vel, illum dolorem quam? Voluptates soluta et officia magni corporis architecto odio sequi.",
        price: "22000",
        tag: "Balance Like Never Before",
        category: "",
        image: image19,
        quantity: 1,
      },
      {
        id: 20,
        name: "Nike AirForce TrailBlaze",
        description:
          "amet consectetur adipisicing elit. Ab repudiandae, ipsa officia quidem aut fugiat eaque, odio vel, illum dolorem quam? Voluptates soluta et officia magni corporis architecto odio sequi.",
        price: "22000",
        tag: "Balance Like Never Before",
        category: "",
        image: image20,
        quantity: 1,
      },
      {
        id: 21,
        name: "Nuller AirMax",
        description:
          "amet consectetur adipisicing elit. Ab repudiandae, ipsa officia quidem aut fugiat eaque, odio vel, illum dolorem quam? Voluptates soluta et officia magni corporis architecto odio sequi.",
        price: "23000",
        tag: "Balance Like Never Before",
        category: "",
        image: image21,
        quantity: 1,
      },
      {
        id: 22,
        name: "AirMax B1 Pro",
        description:
          "amet consectetur adipisicing elit. Ab repudiandae, ipsa officia quidem aut fugiat eaque, odio vel, illum dolorem quam? Voluptates soluta et officia magni corporis architecto odio sequi.",
        price: "22500",
        tag: "Stand Strong",
        category: "",
        image: image22,
        quantity: 1,
      },
      {
        id: 23,
        name: "Nike BOOTS",
        description: "d",
        price: "22000",
        tag: "Balance Like Never Before",
        category: "",
        image: image23,
        quantity: 1,
      },
      {
        id: 24,
        name: "Nike AirForce TrailBlaze",
        description: "",
        price: "23000",
        tag: "Balance Like Never Before",
        category: "",
        image: image24,
        quantity: 1,
      },
      {
        id: 25,
        name: "Nike AirForce TrailBlaze",
        description: "",
        price: "20000",
        tag: "Finding your own Paths",
        category: "",
        image: image25,
        quantity: 1,
      },
      {
        id: 26,
        name: "Nike AirMax DD",
        description:
          "libero ab vitae nulla rerum pariatur! Quo quis consequuntur sunt ullam facilis eos unde libero voluptate alias qui quisquam in omnis, ipsam repellat esse reiciendis vero quae nemo itaque, placeat atque. Ipsum autem modi nisi labore, voluptate vel.",
        price: "26000",
        tag: "Balancing Smiles",
        category: "",
        image: image26,
        quantity: 1,
      },
      {
        id: 27,
        name: "Airforce F1 Pathfinder",
        description:
          "libero ab vitae nulla rerum pariatur! Quo quis consequuntur sunt ullam facilis eos unde libero voluptate alias qui quisquam in omnis, ipsam repellat esse reiciendis vero quae nemo itaque, placeat atque. Ipsum autem modi nisi labore, voluptate vel.",
        price: "27000",
        tag: "Balance Like Never Before !!",
        category: "",
        image: image27,
        quantity: 1,
      },
      {
        id: 28,
        name: "BackTrailer Symphony",
        description:
          "libero ab vitae nulla rerum pariatur! Quo quis consequuntur sunt ullam facilis eos unde libero voluptate alias qui quisquam in omnis, ipsam repellat esse reiciendis vero quae nemo itaque, placeat atque. Ipsum autem modi nisi labore, voluptate vel.",
        price: "21000",
        tag: "Pathfinder Soothing",
        category: "",
        image: image28,
        quantity: 1,
      },
      {
        id: 29,
        name: "Airforce Smile Pro",
        description:
          "libero ab vitae nulla rerum pariatur! Quo quis consequuntur sunt ullam facilis eos unde libero voluptate alias qui quisquam in omnis, ipsam repellat esse reiciendis vero quae nemo itaque, placeat atque. Ipsum autem modi nisi labore, voluptate vel.",
        price: "24000",
        tag: "Balance Like Never Before",
        category: "",
        image: image29,
        quantity: 1,
      },
      {
        id: 30,
        name: "Pizzani Symphony",
        description:
          "libero ab vitae nulla rerum pariatur! Quo quis consequuntur sunt ullam facilis eos unde libero voluptate alias qui quisquam in omnis, ipsam repellat esse reiciendis vero quae nemo itaque, placeat atque. Ipsum autem modi nisi labore, voluptate vel.",
        price: "23000",
        tag: "Awesome Fitness",
        category: "",
        image: image30,
        quantity: 1,
      },
    ],
    cart: [],
    filtered: [],
  };

  const [state, dispatch] = useReducer(productReducer, initialState);

  // ADD_PRODUCT

  const addProduct = (product) => {
    product.id = uuid();
    dispatch({ type: ADD_PRODUCT, payload: product });
  };

  // DELETE_PRODUCT

  const deleteProduct = (id) => {
    dispatch({ type: DELETE_PRODUCT, payload: id });
  };
  // FILTER_PRODUCT

  const filterProduct = (text) => {
    dispatch({ type: FILTER_PRODUCT, payload: text });
  };

  // CLEAR_FILTER
  const clearFilter = () => {
    dispatch({ type: CLEAR_FILTER });
  };

  return (
    <productContext.Provider
      value={{
        products: state.products,
        cart: state.cart,
        filtered: state.filtered,
        addProduct,
        deleteProduct,
        filterProduct,
        clearFilter,
      }}
    >
      {props.children}
    </productContext.Provider>
  );
};

export default ProductState;
