"use client"
import React, { Children } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const page = () => {
  const notify = () =>{
    toast("Login Successfull")
  }
  return (
    <div>
      <button onClick={notify} >Login</button>
      <ToastContainer/>
    </div>
  )
}

export default page
