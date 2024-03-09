import { ShopContext } from '../Context/ShopContext';
import './CSS/ShopCategory.css'
import { useContext, useState } from 'react';
import arrow_icon from '../Components/Assets/breadcrum_arrow.png'
import Item from '../Components/items/items'

const ShopCategory = (props) => {
    const {all_product} = useContext(ShopContext)
    const [isOpen, setIsOpen] = useState(false);
    const [minValue, setMinValue] = useState('0');
    const [maxValue, setMaxValue] = useState('1000');
    const [nameFilter, setNameFilter] = useState('');
    const toggleSidebar = () => {
      setIsOpen(!isOpen);}
      let itmcnt=0;
     let Itemcount = () => {
        if (itmcnt===0) {
          return <h1>No Results, adjust your filters</h1>
        }
      }
    return ( 
        
            
            <div className="shop-category">
              <div >
                 <img src={props.banner} alt="" className='shopcategory-banner'/>
                 <div className="app">
                     
                       <div className={`sidebar ${isOpen ? 'open' : ''}`}>
                         <h2>Filters</h2>
                         <div className="filtercontentwarrow">
                         <img src={arrow_icon} alt="" className={`arrowicon ${isOpen ? 'open' : ''}`} onClick={toggleSidebar}/>
                         <div className={`filtercontent ${isOpen ? 'open' : ''}`}>
                            
                         <div className="filter">
                           <label htmlFor="name">Search For a Product:</label>
                           <input id="name" type="text" value={nameFilter} onChange={(e) => setNameFilter(e.target.value)} />
                         </div>
                         <div className="filter">
                           <label htmlFor="min">Min Price:</label>
                           <input id="min" type="number" value={minValue} onChange={(e) => setMinValue(e.target.value)} />
                         </div>
                         <div className="filter">
                           <label htmlFor="max">Max Price:</label>
                           <input id="max" type="number" value={maxValue} onChange={(e) => setMaxValue(e.target.value)} />
                         </div> 
                         <div className="buttons">
                         <button className="reset" onClick={() => {setMaxValue(1000);setMinValue(0);setNameFilter('')}}>Reset</button>
                         
                         
                         </div>
                         </div>
                         </div>
                       </div>
                       
                    </div>
             </div>
            <div className="shopcategory-indexSort">
                <p>
                    <span>Showing 1-12</span> out of 36 Products
                </p>
                
            </div>
            <div className="shopcategory-products">
                {
                 all_product.map((item,i) => {
                   
                        if (props.category===item.category && (minValue <= Number(item.new_price)) && (maxValue>= Number(item.new_price)) && (String(item.name).toLowerCase().includes(nameFilter.toLowerCase()))){
                            
                          itmcnt++;  
                          return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>

                        }
                        else {
                          return null ;
                        }
                  }
                    
                ) 
                
                
                
              }
              
              </div>
            
            
        </div>
     );
}
 
export default ShopCategory;