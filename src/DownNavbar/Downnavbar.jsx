import React from 'react'
import {Route,Routes} from 'react-router-dom'
import About from './About'
function Downnavbar() {
  return (
    <div>
    <Routes>
    <Route path='/About' element={<About/>}/>
    </Routes>
    </div>
  )
}

export default Downnavbar