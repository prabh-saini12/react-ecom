import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";

const ProductDetails = () => {
  const [product, setProduct] = useState(null);
  const {id}  = useParams();
  const fetchData = async () => {
    const response = await fetch(`https://fakestoreapi.com/products/${id}`);
    const data = await response.json();
    console.log(data);
    setProduct(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return product === null ? (
    <Shimmer />
  ) : (
    <div className="product-details">
    <img className="product-image" src={product.image} alt={product.title} />
    <div className="product-info">
      <h1 className="product-title">{product.title}</h1>
      <p className="product-description">{product.description}</p>
      <p className="product-price">Price: ${product.price}</p>
      <p className="product-category">Category: {product.category}</p>
      <p className="product-rating">Rating: {product.rating.rate}</p>
      <button className="add-to-cart-btn">Add to Cart</button>
    </div>
  </div>
  );
};

export default ProductDetails;
