import React from 'react'
import icon from './account.png';
import cart from './cart.png';
import './navbar1.css';

function Navbar() {
  return (
    <div className='n-navbar'>
    <div className='n-search'>
    <form>
    <input type="text" className='searchbar' placeholder='search Here' />
    
    </form>
   </div>
    <div className='n-heading'>
    <h1 className='font-bold text-4xl'>FRIENDS ELECTRICAL</h1></div>
    <div className='n-account'>
    <img src={icon} alt=""/></div>
    <div className='n-cart'>
    <img src={cart} alt="" className='s-cart'/>
    </div>
    
    </div>
  )
}

export default Navbar