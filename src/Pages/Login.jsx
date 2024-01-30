import React from 'react'
import { MdEmail } from "react-icons/md";
import { FaLock } from "react-icons/fa";
import styled from "styled-components"

const Login = () => {
  return (
  <Container>
    <div>
      <form action="">
        <h1>Sign In</h1>
       <Contents>
        <MdEmail/>
        <input type="email" placeholder='email' />
        </Contents> 
        <Contents>
          <FaLock/>
          <input type="password" placeholder='password' />
        </Contents>
        <p>Forgot your password?</p>
        <button>Log In</button>
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