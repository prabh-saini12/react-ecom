import Product from "./Product";
import {products} from '../utils/constant'

const ProductCard = () => {


  return (
    <div className="product-card">
     {
        products.map((product,index)=>{
            return <Product key={index} productlist={product}/>
        })
     }
    </div>
  );
};

export default ProductCard;
