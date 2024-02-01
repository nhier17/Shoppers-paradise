import React, { useState } from 'react'
import { MdEmail } from "react-icons/md";
import { FaLock } from "react-icons/fa";
import styled from "styled-components"
import { Link,useNavigate } from 'react-router-dom';
import axios from "axios"

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
      const response = await axios.post('http://localhost:5000/api/v1/auth/login', formData)
      console.log("suceess",response.data)
     } catch (error) {
      console.log("Error loging in", error.message)
     }
     navigate('/')
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
        <p>Forgot your password?</p>
        <button>Log In</button>
        <p>Don't have an account? <Link to="/register">Sign up</Link></p>
      </form>
    </div>
  </Container>
  )
}
const Container = styled.div`
margin-left: 3rem;
margin-top: 5rem;
   background-color: #fff;
    border-radius: 30px;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.35);
    position: relative;
    overflow: hidden;
    width: 768px;
    max-width: 100%;
    min-height: 480px;
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
    }
   P{
    margin-top: 1rem;
    font-size: 1rem;
   }
 
`

const Contents = styled.div`
position: relative;
width: 50%;
  input {
      color: black;
     background: linear-gradient(35deg, #e9e4e4,#7e7979);
    border: none;
    margin: 8px 0;
    padding: 1rem 3rem;
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