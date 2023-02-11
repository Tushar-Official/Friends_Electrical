import React from 'react'
import './App.css';
import Navbar from './components/Navbar';
import {Route,Routes} from 'react-router-dom'
import { BrowserRouter } from 'react-router-dom';
import About from './DownNavbar/About'
import Contact from './DownNavbar/Contact'
import Product from './DownNavbar/Products'
import Elec from './DownNavbar/Electrician';

import Account from './DownNavbar/Account';
import Order from './DownNavbar/Order';
import Caraousel from './DownNavbar/Caraousel';
import Products from './DownNavbar/Products';
import Brand from './DownNavbar/Brand';
import Electric from './DownNavbar/Electric';
import Footer from './components/Footer';
//import Display from './DownNavbar/Display';




function App() {
  return (
    <>
    <div className="App">
    <Navbar/>
   <BrowserRouter>
   <Routes>
   <Route path="/About" element={<About/>}/>
   <Route path="/Contact" element={<Contact/>}/>
   <Route path="/products" element={<Product/>}/>
   <Route path="/electrician" element={<Electric/>}/>
   </Routes>
   </BrowserRouter>
   <div className='d-navbar'>
   <Account/>
   <Order/>
   <About/>
   
   <Contact/>
   <Elec/>
   </div>
   <div className='slider'>
   <Caraousel/></div>
   <Products/>
   <Brand/>
   <Electric/>
  <Footer />
 
 
    
    
    </div>
    
    </>
    
  
  );
}

export default App;
