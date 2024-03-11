import React, { useState } from 'react'
import { MdEmail } from "react-icons/md";
import { FaLock } from "react-icons/fa";
import styled from "styled-components"
import { Link,useNavigate } from 'react-router-dom';
import axios from "axios"
import toast from 'react-hot-toast';

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
      console.log(response.data)
        if (response.data) {
        const userName = response.data.user.name
         navigate('/')
         toast.success(`Welcome, ${userName}`)
         
      } 
     } catch (error) {
      toast.error("Error loging in", error.message)
      
     }
    
  }
  return (
  <Container>
     <div>
      <form action="" onSubmit={submitHandler}>
        <h1>Sign In</h1>
       <Contents>
        <MdEmail/>
        <input onChange={InputHandler} name='email' type="email" placeholder='email'  />
        </Contents> 
        <Contents>
          <FaLock/>
          <input onChange={InputHandler} name='password' type="password" placeholder='password' />
        </Contents>
       <button type="submit">Log In</button>
       <p>Forgot your password?</p>
        <p>Don't have an account? <Link to="/register">Sign up</Link></p>
      </form>
    </div>
  </Container>
  )
}
const Container = styled.div`
margin: auto;
margin-top: 5rem;
   background: #fff;
    border-radius: 30px;
    position: relative;
    overflow: hidden;
    width: 768px;
    max-width: 100%;
    min-height: 480px;
    h1 {
      color: black;
      @media (max-width: 768px) {
        color: #fff;
      }
      
    }

    @media (max-width: 768px) {
    width: 100%;
    margin: 2rem auto;
    background: black;
  }
    button{
    background-color: #512da8;
    color: #fff;
    font-size: 12px;
    padding: 10px 45px;
    border: 1px solid transparent;
    border-radius: 8px;
    font-weight: 600;
    letter-spacing: 0.5px;
    text-transform: uppercase;
    margin-top: 10px;
    cursor: pointer;
    @media (max-width: 768px) {
    font-size: 10px;
    padding: 8px 30px;
  }
    }
    form {
      margin-top: 5rem;
      background-color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 0 40px;
    height: 100%;  
    @media (max-width: 768px) {
      margin-top: 2rem;
      background-color: black;
      color: #fff;
    }
    }
   P{
    margin-top: 1rem;
    font-size: 1rem;
    color: black;
    @media (max-width: 768px) {
      margin-top: 0.5rem;
      color: #fff;
    }
   }
 
`

const Contents = styled.div`
position: relative;
width: 80%;
margin: 1rem 0;
  input {
      color: black;
     background: linear-gradient(35deg, #e9e4e4,#7e7979);
    border: none;
    margin: 8px 0;
    padding: 1rem 2rem;
    font-size: 13px;
    border-radius: 8px;
    width: 100%;
    outline: none;
    } 
    svg {
      position: absolute;
    top: 50%;
    left: 0%;
    transform: translate(100%, -50%);
    color: black; 
    }
`
export default Login