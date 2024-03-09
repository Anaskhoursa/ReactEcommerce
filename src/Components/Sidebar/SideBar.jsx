import { useState } from 'react';
import './Sidebar.css'

const SideBar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [minValue, setMinValue] = useState('');
    const [maxValue, setMaxValue] = useState('');
    const [nameFilter, setNameFilter] = useState('');
    const toggleSidebar = () => {
      setIsOpen(!isOpen);}
    return ( 
   <div className="app">
    <div className="content">
        <button className="hamburger" onClick={toggleSidebar}>
          ☰
        </button>
      </div>
      <div className={`sidebar ${isOpen ? 'open' : ''}`}>
        <h2>Filters</h2>
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
        <button className="submit">Filter</button>
        
        </div>
      </div>
      
    </div>
     );
}
 
export default SideBar;