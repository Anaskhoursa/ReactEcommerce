import React, { createContext, useState}from "react";
import all_product from '../Components/Assets/all_product'

export const ShopContext= createContext(null);


const getDefaultCart = () => {
    let cart={};
    for (let index=0; index < all_product.length+1; index++) {
        cart[index] =0;
    }
    return cart;
}
const getDefaultSizes = () => {
    let sizes={};
    for (let index=0; index < all_product.length+1; index++) {
        sizes[index] ='';
    }
    return sizes;
}

const ShopContextProvider = (props) => {
    
    const [cartItems, setCartItems] = useState(getDefaultCart());
    const [sizes, setSizes] = useState(getDefaultSizes());

    const [selectedSize, setSelectedSize] = useState('S');
      
       
    const handleSizeChange = (event) => {
         
        setSelectedSize(event.target.value);
    };


    const addToCart= (itemId) => {
        if (!selectedSize) {
            alert('Please select a size.');
            return;
        }
        setCartItems((prev) => ({...prev,[itemId]:prev[itemId]+1}))
        setSizes((prev) => {
            const newSizeArray = prev[itemId] ? [...prev[itemId], selectedSize] : [selectedSize];
            return {...prev, [itemId]: newSizeArray};
        });
        alert('Product added to cart.');
        console.log(sizes);
        console.log(cartItems);

    }

    const RemoveFromCart = (itemId) => {
        setCartItems((prev) => ({...prev,[itemId]: prev[itemId] - 1}));
    
        setSizes((prev) => {
            const updatedSizes = {...prev};
            updatedSizes[itemId] = prev[itemId].slice(0, -1);
            return updatedSizes;
        });
    };
    const getTotalCartAmount = () => {
        let totalAmount = 0;
        for(const item in cartItems) {
            if (cartItems[item]>0){
                let itemInfo = all_product.find((product) => product.id===Number(item));
                totalAmount+= itemInfo.new_price * cartItems[item];
            }
        }
        return totalAmount.toFixed(2);
    }
    const getTotalCartItems = () => {
        let totalItem = 0;
        for(const item in cartItems) {
            if(cartItems[item]>0){
                totalItem+= cartItems[item];
            }
        }
        return totalItem;
    }

    const  contextValue = {all_product, cartItems, addToCart, RemoveFromCart, getTotalCartAmount, getTotalCartItems, selectedSize, handleSizeChange, sizes};

    return (
        <ShopContext.Provider value={contextValue}>
            {props.children}


        </ShopContext.Provider>
    );
}

export default ShopContextProvider;
 
