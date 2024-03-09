import { useContext } from "react";
import { ShopContext } from "../Context/ShopContext";
import { useParams } from "react-router-dom";
import Breadcrums from "../Components/Breadcrums/Breadcrums";
import ProductDisplay from "../Components/ProductDisplay/ProductDisplay";
import './CSS/Product.css'
import Item from "../Components/items/items";



const Product = () => {
    const {all_product} = useContext(ShopContext);
    const {productId} = useParams();
    const product = all_product.find((e) => e.id===Number(productId));

    return ( 
        <div>
            <Breadcrums product={product}/>
            <ProductDisplay product={product}/>
        <div className="relatedproducts">
            <h1>Related Products</h1>
            <hr />
            <div className="relatedproducts-item">
            {all_product
                .filter(item => item.category === product.category) 
                .slice(0, 4) 
                .map((item, i) => (
                  <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
            ))}
            </div>

        </div>
        </div>
     );
}
 
export default Product;