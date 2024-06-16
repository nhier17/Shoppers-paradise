import React, { useState } from 'react'
import { MdEmail } from "react-icons/md";
import { FaLock, FaEye, FaEyeSlash } from "react-icons/fa";
import { Link,useNavigate } from 'react-router-dom';
import axios from "axios"
import { toast }  from 'sonner';
import ecom from '../images/ecom.jpg'

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: "",
  })
  const InputHandler = (e) => {
    setFormData({...formData,
      [e.target.name]: e.target.value
    })
  }
    

    const submitHandler = async (e) =>{
      e.preventDefault();
    
     try {
      const response = await axios.post('https://shoppers-paradise17.onrender.com/api/auth/login', formData)
        if (response.data) {
          const userName = response.data.user.name
          localStorage.setItem('token', userName)
          navigate('/')
         toast.success(`Happy shopping, ${userName}`)
         setFormData({ email: '', password: '' });
      } 
     } catch (error) {
      toast.error(error.response.data.msg)
      
     }
    
  }
    //toggle password
    const togglePasswordVisibility = () => {
      setFormData((prevState) => ({
        ...prevState,
         showPassword:!prevState.showPassword
      }))
    }

  return (
<div
 className="container mx-auto mt-10 rounded-lg relative overflow-hidden w-full max-w-screen-md min-h-[480px] px-4 py-8"
 style={{ 
  backgroundImage: `url(${ecom})`, 
  backgroundPosition: 'center', 
  backgroundSize: 'cover', 
  backgroundRepeat: 'no-repeat',
  width: '100%',
}}
 >
    <form className="mt-8 flex items-center justify-center flex-col" onSubmit={submitHandler}>
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
        className="text-black  bg-gradient-to-br from-gray-200 to-gray-400 border-none my-2 px-12 py-4 text-sm rounded-lg w-full focus:outline-none"
         type={formData.showPassword ? 'text' : 'password'} 
         placeholder="password"
         name="password"
           />
            <div className="absolute top-1/2 right-4 transform -translate-y-1/2 cursor-pointer"
             onClick={togglePasswordVisibility}
              >
                  {formData.showPassword ? <FaEyeSlash className="text-black text-lg" /> : <FaEye className="text-black text-lg" />}
              </div>
     </div>
     <button
     className="bg-purple-700 hover:bg-orange-500 border-none my-2 px-12 py-4 text-white text-xs sm:text-sm rounded-lg w-1/2 focus:outline-none font-semibold tracking-wide uppercase cursor-pointer mt-6"
     type="submit">
        Login
        </button>
     <p className="m-6 text-gray-600">Don't have an account?
        <Link
         className="text-blue-500 mx-2"
         to="/register">
            Sign up
        </Link>
     </p>
        </form> 
</div>
  )
}

export default Login