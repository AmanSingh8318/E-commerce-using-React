import React from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import logoImage from '../Assets/logo_big.png';
import "./Header.css";

function Header({ isLogged, logout }) {
  const navigate = useNavigate();
// console.log("login",isLogged);
// console.log("logout is",logout);


return (
    <header>
      <nav className='nav'>
        <div className='logo'>
          <Link to="#" className='logo1'>
            <img src={logoImage} alt="Shopper" />
            <p>SHOPPER</p>
          </Link>
        </div>
        <ul className='ul'>
          <li>
            <NavLink to="/" className={({ isActive }) => (isActive ? "active" : "deactive")}>
              Shop
            </NavLink>
          </li>
          <li>
            <NavLink to="/Men" className={({ isActive }) => (isActive ? "active" : "deactive")}>
              Men
            </NavLink>
          </li>
          <li>
            <NavLink to="/women" className={({ isActive }) => (isActive ? "active" : "deactive")}>
              Women
            </NavLink>
          </li>
          <li>
            <NavLink to="/Kids" className={({ isActive }) => (isActive ? "active" : "deactive")}>
              Kids
            </NavLink>
          </li>
        </ul>
        <div className='cart'>
          <NavLink to="/cart" className={({ isActive }) => (isActive ? "active" : "deactive")}>
            <i className="fas fa-shopping-cart"></i>
          </NavLink>
                {isLogged ?
                <button className='btn' onClick={logout}>Logout</button>
                : <button className='btn' onClick={()=>navigate("/Login")}>Login</button>
                }
        </div>
      </nav>
    </header>
  );
}
export default Header;