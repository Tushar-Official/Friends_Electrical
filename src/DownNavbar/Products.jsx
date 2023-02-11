import React from 'react'
import anchor from '../images/anchor.jpg'
import white from '../images/greatwhite.jpg'
import havel from '../images/havell.jpg'
import phil from '../images/philips.jpg'
import comb from '../images/cromp.jpeg'
import orient from '../images/orient.webp'
import aboard from '../images/anchorsw.webp'
import gold from '../images/gold.png'
import havellsw from '../images/havellsw.jpg'
import rfan from '../images/roxyfan.jpg'
import havfan from '../images/havfan.webp'
import vguard from '../images/vguardfan.webp'
import './products.css'
import {Route,Routes} from 'react-router-dom'
import Display  from './Display'



function Products() {
  
  function handleClick(){
    <Routes>
    <Route path="/Display" element={<Display/>}/>
  </Routes>
  
  }
  return (
    <div className='products'>
    <div className='p-head'>
    <h1 className='font-bold text-4xl pt-2'>PRODUCTS</h1>
    </div>
    <div className='p-items'>
    <table>
    <tr>
    
    <th><img src={anchor} alt="" onClick={()=>handleClick()}  /><br/>
    <div className='name'  ><p>Anchor Wire</p></div></th>
    <th><img src={white} alt=""/><br/>
    <div className='name'><p>GreatWhite Wire</p></div></th>
    <th><img src={havel} alt=""/><br/>
    <div className='name'><p>Havells Wire</p></div></th>
    
    </tr>
    <tr>
    
    <th><img src={phil} alt=""/><br/>
    <div className='name'><p>Philips LED </p></div></th>
    <th><img src={orient} alt=""/><br/>
    <div className='name'><p>Orient LED</p></div></th>
    <th><img src={comb} alt=""/><br/>
    <div className='name'><p>Crompton LED</p></div></th>
    
    </tr>
    <tr>
    
    <th><img src={aboard} alt=""/><br/>
    <div className='name'><p>Anchor Modular Board</p></div></th>
    <th><img src={gold} alt=""/><br/>
    <div className='name'><p>Goldmedal Modular board</p></div></th>
    <th><img src={havellsw} alt=""/><br/>
    <div className='name'><p>Havells Modular Board</p></div></th>
    </tr>
    <tr>
    
    <th><img src={rfan} alt=""/><br/>
    <div className='name'><p>Roxy Fan</p></div></th>
    <th><img src={havfan} alt=""/><br/>
    <div className='name'><p>Havells Fan</p></div></th>
    <th><img src={vguard} alt=""/><br/>
    <div className='name'><p>VGuard Fan</p></div></th>
    
    </tr>
    </table>
    </div>
    </div>
  )
}

export default Products