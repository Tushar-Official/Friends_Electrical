import React from 'react'
import anchor from '../BrandImages/anchor.png'
import bajaj from '../BrandImages/bajaj.jpg'
import cromp from '../BrandImages/crompton.png'
import havel from '../BrandImages/havells.png'
import phil from '../BrandImages/philips.jpg'
//import './Brand.css'

function Brand() {
  return (
    <div className='h-73'>
    <div className='item-centre bg-black  h-10'>
    <h1 className='font-bold text-3xl text-center text-white '>BRANDS ASSOCIATION </h1></div>
    
    <div className='flex pt-20 justify-center bg-slate-300 '>
    <table className='flex h-40'>
    <tr><td className='flex '>
    <img src={anchor} alt="" className='h-28 w-28 ml-10 mr-10' />
    <img src={bajaj} alt="" className='h-28 w-28 ml-10 mr-10' />
    <img src={cromp} alt=""  className='h-28 w-28 ml-10 mr-10'/>
    <img src={havel} alt="" className='h-28 w-28 ml-10 mr-10'/>
    <img src={phil} alt="" className='h-28 w-28 ml-10 mr-10'/><br/>
    
    </td>
    </tr>
    </table>
   
    </div>
    <p className='font-bold text-3l text-right pr-20  bg-slate-300'>And many more.....</p>
    </div>
  )
}

export default Brand