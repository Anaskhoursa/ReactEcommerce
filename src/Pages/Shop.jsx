import NewCollections from "../Components/Collections/NewCollections";
import Hero from "../Components/Hero/Hero";
import NewsLetter from "../Components/NewsLetter/NewsLetter";
import Offers from "../Components/Offers/Offers";
import Popular from "../Components/Popular/Popular";

const Shop = () => {
    return ( 
        <div>
            
           <Hero/>
           <Popular/>
           <Offers/>
           <NewCollections/>
           <NewsLetter/>
           
        </div>
     );
}
 
export default Shop;