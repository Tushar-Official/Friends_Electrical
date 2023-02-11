import React from 'react'
import './Footer.css';
import fb from '../images/fb.png'
import insta from '../images/insta.jpg'
import twt from '../images/twitter.png'




function Footer() {
  return (
    <div className=' h-60 flex bg-black' >
    <div className=" h-40 text-left  pt-10 pl-5 w-1/3">
    <h1 className='font-bold text-xl text-white text-left'>SHOP ADDRESS</h1>
    <p className='font-normal text-l text-white text-left'>Vaishali More Sector-9/D Street-35 Near DurgaPuja Field</p>
    <p className='font-normal text-l text-white text-left'>Contact No.-9973550874</p>
    <p className='font-normal text-l text-white text-left'>Boakro Steel City  Jharkhand 827009</p>
    </div>
    <div className="w-1/3 h-40 flex justify-center pt-10">
    <img src={fb} alt="" className=" border-black border-2 h-20 w-20 rounded-sm ml-5 mr-5 opacity-0.5"/>
    <img src={insta} alt="" className=" border-black border-2 h-20 w-20 rounded-sm ml-5 mr-5"/>
    <img src={twt} alt="" className=" border-black border-2 h-20 w-20 rounded-sm ml-5 mr-5"/>
    <br/>
    
    </div>
    <div className='w-1/3 h-40 font-bold  pt-10'>
    <p className=' text-white text-lg'>FRIENDS ELECTRICAL</p>
    <p className=' text-white text-lg'>OUR FIRST PRIORITY IS CUSTOMER </p>
    <p className='text-white font-normal text-m'>Copyright@2001</p></div>
    
    
    

    </div>
  )
}

export default Footer