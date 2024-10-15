import Product from "./Product";
import { useEffect, useState } from "react";

const ProductCard = () => {
  const [listOfProduct, setListOfProduct] = useState([]);

  const fetchData = async () => {
    const response = await fetch("https://fakestoreapi.com/products");
    const json = await response.json();
    setListOfProduct(json);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <button
        className="button"
        onClick={() => {
          const filterProduct = listOfProduct.filter(
            (product) => product.rating.rate >= 4
          );
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
