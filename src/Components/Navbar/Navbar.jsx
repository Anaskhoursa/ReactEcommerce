import './Navbar.css'
import logo from '../Assets/logo.png' 
import cart_icon from '../Assets/cart_icon.png'
import { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { ShopContext } from '../../Context/ShopContext'
 
const Navbar = () => {
    const [menu, setMenu]= useState('Shop');
    const {getTotalCartItems} = useContext(ShopContext);
    return ( 
        <div className='navbar'>
            <Link to='/ReactEcommerce' style={{color: "white"}}><div className="nav-logo">
                <img src={logo} alt="" />
                <p>SHOPPER</p>

            </div></Link>
            <ul className="nav-menu">
                <li onClick={() => {setMenu('Shop')}}><Link style={{color:"black", textDecoration:'none'}} to='/ReactEcommerce'>Shop</Link>{menu==='Shop'?<hr/>:<></>}</li>
                <li onClick={() => {setMenu('Men')}}><Link style={{color:"black", textDecoration:'none'}} to='/Men'>Men</Link>{menu==='Men'?<hr/>:<></>}</li>
                <li onClick={() => {setMenu('Women')}}><Link style={{color:"black", textDecoration:'none'}} to='/Women'>Women</Link>{menu==='Women'?<hr/>:<></>}</li>
                <li onClick={() => {setMenu('Kids')}}><Link style={{color:"black", textDecoration:'none'}} to='/Kids'>Kids</Link>{menu==='Kids'?<hr/>:<></>}</li>
            </ul>
            <div className="nav-login-cart">
                <Link to='/Login'><button>Login</button></Link>
               <Link to='/cart'><img src={cart_icon} alt="" /></Link>
                <div className="nav-cart-count">{getTotalCartItems()}</div>
            </div>
        </div>
     );
}
 
export default Navbar;