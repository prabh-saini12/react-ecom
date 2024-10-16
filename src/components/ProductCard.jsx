import { useEffect, useState } from "react";
import Product from "./Product";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

const ProductCard = () => {
  const [listOfProduct, setListOfProduct] = useState([]);
  const [filterProduct, setFilterProduct] = useState([]);
  const [searchText, setSearchText] = useState("");

  const fetchData = async () => {
    const response = await fetch("https://fakestoreapi.com/products");
    const json = await response.json();
    setListOfProduct(json);
    setFilterProduct(json);
  };

  useEffect(() => {
    fetchData();
  }, []);

  // conditional rendering

  return listOfProduct.length === 0 ? (
    <Shimmer />
  ) : (
    <div>
      <div style={{ marginTop: "10px" }}>
        <input
          type="text"
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
          value={searchText}
        />
        <button
          onClick={() => {
            const filteredData = listOfProduct.filter((product) => {
              return product.title
                .toLowerCase()
                .includes(searchText.toLowerCase());
            });
            setFilterProduct(filteredData);
          }}
        >
          Search
        </button>
      </div>
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
        {filterProduct.map((product) => {
          return (
            <Link key={product.id} to={`/product/${product.id}`} >
              <Product productlist={product} />
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default ProductCard;
