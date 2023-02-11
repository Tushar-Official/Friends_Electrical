import React from 'react'

import { useFormik} from "formik"
import * as Yup from "yup";

function Electric() {
  const formik=useFormik({
    initialValues:{
      name:"",
      address:"",
      issue: "",
      number:""
    },
    validationSchema:Yup.object({
      name:Yup.string().max(15,"Maximum 15 characters allowed").required("Required"),
      address:Yup.string().max(30,"Maximum 30 characters allowed").required("Required"),
      issue:Yup.string().max(30,"maximum 30 characters allowed").required("Required"),
      number:Yup.string().max(10,"More than 10 digits").required("Required")

    }),
    onSubmit:(values)=>{
      console.log(values)
    }
  });

console.log(formik.errors)

  return (
    <div className=" ">
    <div className="bg-red-500 flex h-max justify-center h-25">
    <h1 className='font-bold text-2xl text-yellow-200'>GO AHEAD AND USE THE HOME SERVICES AT REASONABLE COST!!</h1></div>
    <h2 className='font-bold text-2xl text-centre pl-96 mt-1 '>FILL THE DETAILS BELOW WE WILL REACH OUT YOU SOON</h2>
    <form onSubmit={formik.handleSubmit} className="pr-50 flex  bg-slate-300  justify-center items-center  ">
    <div className=" w-1/3  flex flex-col mt-20 pr-10 pl-20 pt-8 h-72 text-center border-black border-1 bg-yellow-100 text-black ">
    <input 
    id="name" type="text" placeholder='Your Name' 
    value={formik.values.name} 
    onChange={formik.handleChange} 
    onBlur={formik.handleBlur}
    className="border-black border-2 w-80 text-center rounded"
    />
    {formik.touched.name && formik.errors.name?<p>{formik.errors.name}</p>:null}

    <input 
    id="address" type="text" placeholder='Your address' 
    value={formik.values.address} 
    onChange={formik.handleChange} 
    onBlur={formik.handleBlur}
    className="border-black border-2 w-80 mb-2.3 mt-2 text-center rounded"
    />
    { formik.touched.address && formik.errors.address?<p>{formik.errors.address}</p>:null}

    <input 
     id="issue" type="text" placeholder='Your issue' 
     value={formik.values.issue} 
     onChange={formik.handleChange} 
     onBlur={formik.handleBlur}
     className="border-black border-2 w-80 mb-2 mt-2 text-center rounded"
      />
      {formik.touched.issue && formik.errors.issue?<p>{formik.errors.issue}</p>:null}

    <input 
    id="number" type="text" placeholder='Your Phone number' 
    value={formik.values.number} 
    onChange={formik.handleChange} 
    onBlur={formik.handleBlur}
    className="border-black border-2 w-80 mb-2 mt-2 text-center rounded"
     />
     {formik.touched.number && formik.errors.number?<p>{formik.errors.number}</p>:null}

    <button type="submit" className="border-black border-2  ml-15 w-25 mt-2 bg-red-600 text-white font-bold hover:bg-red-800 rounded">SUBMIT</button>
    </div>
    </form>

    
    </div>
  )
}

export default Electric