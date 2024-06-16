import React, { useState } from 'react'
import { MdEmail } from 'react-icons/md'
import { FaLock, FaUser } from 'react-icons/fa'
import { Link,useNavigate } from 'react-router-dom'
import axios from "axios"
import { toast } from 'sonner';
import ecom from '../images/ecom.jpg';


const Signup = () => {
  const navigate = useNavigate();
  
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: ''
})

 const InputHandler = (e) => {
    setFormData({ ...formData,
        [e.target.name]: e.target.value})
 }
    
    const submitHandler = async (e) =>{
        e.preventDefault();
      try {
        const response = await axios.post('https://shoppers-paradise17.onrender.com/api/auth/register', formData)
        if (response.data) {
          const userName = response.data.user.name
           toast.success(`Welcome, ${userName}`)
           navigate('/')
           }
      
      } catch (error) {
        toast.error(error.response.data.msg)
        
      }
    }

    return (
      <div className="container mx-auto mt-10 rounded-lg relative overflow-hidden w-full max-w-screen-md min-h-[480px] px-4 py-8"
      style={{ backgroundImage: `url(${ecom})`, backgroundPosition: 'center', backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}
      >
         <form className="flex flex-col items-center justify-center space-y-4" onSubmit={submitHandler}>
       <h1 id="title" className="text-3xl font-semibold text-gray-500 opacity-0 transalte-y-20">
        Welcome To Shoppers Paradise 💪
        </h1>
       <div className="relative w-full">
          <FaUser className="absolute top-[50%] left-0 translate-x-full -translate-y-1/2 text-black" />
          <input
          onChange={InputHandler}
          className="text-black bg-gradient-to-br from-gray-200 to-gray-400 border-none my-2 px-12 py-4 text-sm rounded-lg w-full focus:outline-none"
           type="text" placeholder="name" name="name" />
       </div>
       <div className="relative w-full">
          <MdEmail className="absolute top-[50%] left-0 translate-x-full -translate-y-1/2 text-black" />
          <input
          onChange={InputHandler}
          className="text-black bg-gradient-to-br from-gray-200 to-gray-400 border-none my-2 px-12 py-4 text-sm rounded-lg w-full focus:outline-none"
           type="email" placeholder="email" name="email" />
       </div>
       <div className="relative w-full">
          <FaLock className="absolute top-[50%] left-0 translate-x-full -translate-y-1/2 text-black" />
          <input
          onChange={InputHandler}
          className="text-black bg-gradient-to-br from-gray-200 to-gray-400 border-none my-2 px-12 py-4 text-sm rounded-lg w-full focus:outline-none"
           type="password" placeholder="password" name="password" />
       </div>
       <button
       className="bg-purple-700 border-none my-2 px-12 py-4 text-white text-xs sm:text-sm rounded-lg w-1/2 focus:outline-none font-semibold tracking-wide uppercase cursor-pointer mt-6"
       type="submit">
          Register
          </button>
       <p className="m-6 text-gray-500">Aleady have an account?
          <Link
           className="text-blue-500 mx-2"
           to="/login">
              Login
          </Link>
       </p>
          </form> 
      </div>
        )
      }

export default Signup