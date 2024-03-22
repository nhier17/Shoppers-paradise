import React from "react";
import { RiLogoutCircleLine, RiLockPasswordFill } from "react-icons/ri";
import { CiSettings } from "react-icons/ci";
import { CiLogin } from "react-icons/ci";
import styled from "styled-components";
import { motion } from "framer-motion";
import { Link } from "react-router-dom"
import store from "../Images/store.png"

const Dashboard = () => {
  return (
    <ContactStyle>
      <Wrapper>
        <Social>
          <Container>
            <Vcard
             whileHover={{ scale: 1.1, color: "#ED4C07" }}
             whileTap={{ scale: 0.9 }}
            >
               <StyledLink to="/login">
              <div className="icon">
                <CiLogin />
                <p>Login</p>
              </div>
              </StyledLink>
            </Vcard>
          </Container>
        </Social>
        <Social>
          <Container>
            <Vcard
             whileHover={{ scale: 1.1, color: "#ED4C07" }}
             whileTap={{ scale: 0.9 }}
            >
              <div className="icon">
           <CiSettings />
           <p>Update Profile</p>
         </div>
       </Vcard>
          </Container>
        </Social>
        <Social>
          <Container>
            <Vcard
             whileHover={{ scale: 1.1, color: "#ED4C07" }}
             whileTap={{ scale: 0.9 }} 
            >
              <div className="icon">
                <RiLockPasswordFill />
                <p>Change Password</p>
              </div>
            </Vcard>
          </Container>
        </Social>
        <Social>
          <Container>
            <Vcard 
             whileHover={{ scale: 1.1, color: "#ED4C07" }}
             whileTap={{ scale: 0.9 }}
            >
                <StyledLink to="/logout">
              <div className="icon">
                <RiLogoutCircleLine />
                <p>Logout</p>
              </div>
              </StyledLink>
            </Vcard>
          </Container>
        </Social>
        </Wrapper>
        <Details>
          <Contents>  
            <h3>Still looking for the best <span>Online Shopping Store</span></h3>
            <p>
             Shoppers paradise is the best online shopping service. We have a wide range of products; from fashion to electronics, 
             You can find anything you want on our online store. We offer the best prices and we deliver to your doorstep. Happy shopping!!      
            </p>
            <Link to="/register">
              <button>Get Started</button>
            </Link>
            <img src={store} alt="store" />
            </Contents>
        </Details>
      
    </ContactStyle>
  );
};
const ContactStyle = styled(motion.div)`
  padding: 5rem 10rem;
  height: 90vh;
  margin-top: 10rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

   @media (max-width: 768px) {
    padding: 2rem;
    font-size: 0.1rem;
    align-items: flex-start;
    height: 40vh;
  }
`;
const Wrapper = styled(motion.div)`
   width: 100%;
   height: auto;
  padding: 2rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.08);
  background: white; 
  border-radius: 10px;
`
const Social = styled(motion.div)`
  display: flex;
  align-items: center;
  gap: 1rem;
  p {
    font-size: 1.5rem; 
    margin: 1rem;
     }
`;
const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  svg {
    font-size: 2rem;
    font-weight: bold;
  }
`;
const Vcard = styled(motion.div)`
  flex-basis: 20rem;
  cursor: pointer;
  .icon {
    display: flex;
    align-items: center;
    gap: 1rem;
    p {
      margin-left: 0.1rem;
      padding: 0.1rem;
    }
  
  }
`;
const StyledLink = styled(Link)`
    text-decoration: none;
    color: black;
`
const Details = styled.div`
margin-top: 2rem;
 width: 100%;
   height: auto;
  padding: 2rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.08);
  background: #FCE6DD; 
  border-radius: 10px;   
  img {
    width: 100%;
    height: auto;
    max-height: 40vh;
    object-fit: cover;
    border-radius: 10px;
  } 
  @media (max-width: 768px) {
display: none;
  }
`
const Contents = styled.div`
 height: 60vh;  
 padding-bottom: 2rem; 
  button {
    margin-top: 1rem;
    margin-bottom: 1rem;
    padding: 1rem 3rem;
    font-size: 16px;
    font-weight: 600;
    background: #e07e1b;
    color: white;
    border: none;
    border-radius: 8px;
    outline: none;
    cursor: pointer;
 } 
 h3 {
    padding: 1rem;
 }
`
export default Dashboard;
