import React, { useState } from 'react'
import styled from "styled-components"
import { MdEmail } from 'react-icons/md'
import { FaLock, FaUser } from 'react-icons/fa'
import { Link,useNavigate } from 'react-router-dom'
import axios from "axios"


const Signup = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: ''
})
 const InputHandler = (e) => {
    setFormData({ ...formData,
        [e.target.name]: e.target.value})
 }
 
    const navigate = useNavigate();
    const submitHandler = async (e) =>{
        e.preventDefault();
      try {
        const response = await axios.post('https://shoppers-paradise17.onrender.com/api/v1/auth/register', formData)
        console.log('suceess', response.data)
      } catch (error) {
        console.log("Error signing up",error.message)
      }
    }

    return (
        <Container>
          <div>
            <form action="" onSubmit={submitHandler}>
            <h1>Register</h1>
            <Contents>
              <FaUser/>
              <input onChange={InputHandler}type="text" placeholder='name' name='name' />
              </Contents> 
             <Contents>
              <MdEmail/>
              <input onChange={InputHandler} type="email" placeholder='email'  name='email'/>
              </Contents> 
              <Contents>
                <FaLock/>
                <input onChange={InputHandler} name='password' type="password" placeholder='password' />
              </Contents>
              <button>Sign Up</button>
              <p>already have an account?
                 <Link to='/login'>
              Log in
              </Link></p>
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
          width: 50%;
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
          p {
            margin-top: 1rem;
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

export default Signup