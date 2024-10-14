import Product from "./Product";
import { products } from "../utils/constant";
import { useState } from "react";

const ProductCard = () => {
  const [listOfProduct, setListOfProduct] = useState(products);

  return (
    <div>
      <button
        className="button"
        onClick={() => {
          console.log("Before", listOfProduct);
          const filterProduct = listOfProduct.filter(
            (product) => product.rating.rate >= 4
          );
          console.log("after", filterProduct);
          setListOfProduct(filterProduct);
        }}
      >
        Top Rated Product
      </button>
      <div className="product-card">
        {listOfProduct.map((product, index) => {
          return <Product key={index} productlist={product} />;
        })}
      </div>
    </div>
  );
};

export default ProductCard;
