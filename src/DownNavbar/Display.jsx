import React from 'react'
import raw from '../DataFile/Data.json'

function Pdata() {
  return (
    <div className='border-black border-2  h-96 flex flex-wrap'>
    <div className='border-black borer-2 mt-30 font-bold text-4xl'>
    <h1>FRIENDS ELECTRICAL</h1></div>
    {console.log(raw.id)}
    {
      raw.map((item)=>{
        
        return (
          <div key={raw.id} >
          
    <div className='border-blue-600 border-2 w-56 h-56 flex flex-col mt-10 pb-2 pl-1 bg-yellow-100' >
    <img src={item.image} alt="" className='w-full h-32 flex items-centre'/>
    <p className="font-normal text-left pl-1">{item.name}</p>
    <p className="font-normal text-left pl-1">{item.brand}</p>
    <p className="font-normal text-left pl-1">{item.quantity}</p>
    <p className="font-normal text-left pl-1">₹{item.price}</p>
    <button className=' bg-red-600 w-1/2 h-6 text-centre'>ADD TO CART</button>
    </div>
    </div>
        )
      })
    }

</div>
  )
}

const Display=()=>{
  return(
  <div>
  <Pdata/>
  </div>
  )
  

}
export default Display