import React, { useState } from 'react'
import styled from "styled-components"
import { MdEmail } from 'react-icons/md'
import { FaLock, FaUser } from 'react-icons/fa'
import { Link,useNavigate } from 'react-router-dom'
import axios from "axios"
import { toast } from 'sonner';
//password strength checker
import zxcvbn from "zxcvbn";


const Signup = () => {
  const navigate = useNavigate();
  
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: ''
})
const [passwordStrength, setPasswordStrength] = useState(0)

 const InputHandler = (e) => {
    setFormData({ ...formData,
        [e.target.name]: e.target.value})
        if (e.target.name === 'password') {
          const strongPassword = zxcvbn(e.target.value).score;
          setPasswordStrength(strongPassword)
        }
 }
//get password strength color
const passwordStrengthColor = () => {
  if (passwordStrength === undefined) {
    return 'black'
  }
  switch (passwordStrength) {
    case 0:
      return 'red';
    case 1:
      return 'orange';
    case 2:
      return 'yellow';
    case 3:
      return 'green';
    case 4:
      return 'darkgreen';
    default:
      return 'black';
  }
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
              <PasswordBar 
              passwordstrength={passwordStrength}
              color={passwordStrengthColor()}
              />
              {formData.password && (
            <>
              {passwordStrength >= 3 && (
                <PasswordStrengthMessage color={passwordStrengthColor()}>
                  Password Strength: Strong
                </PasswordStrengthMessage>
              )}
              {passwordStrength < 3 && (
                <PasswordStrengthMessage color={passwordStrengthColor()}>
                  Password Strength: Weak
                </PasswordStrengthMessage>
              )}
            </>
          )}
              <button type='submit'>Sign Up</button>
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
      margin: auto;
      margin-top: 5rem;
      background-color: #fff;
      border-radius: 30px;
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
          @media (max-width: 768px) {
            margin-top: 2rem;
          }
          }
          h1 {
            color: black;
            
          }
          p {
            margin-top: 1rem;
            color: black;
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
      const PasswordBar = styled.div`
        height: 8px;
        width: ${(props) => props.passwordstrength * 25}%; 
        background-color: ${(props) => props.color || 'black'};
        margin-bottom: 10px;
      `
      const PasswordStrengthMessage = styled.div`
      color: ${(props) => props.color || 'black'};
      margin-top: 10px;
      font-size: 12px;
    `;

export default Signup