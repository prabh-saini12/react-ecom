const Product = ({productlist}) => {
  const { title, price, rating, image } = productlist;
  return (
    <div className="product">
      <img className="product-img" src={image} />
      <h1>{title}</h1>
      <p>price {price}</p>
      <p>rating {rating.rate}</p>
      <button>Add to cart</button>
    </div>
  );
};

export default Product;
