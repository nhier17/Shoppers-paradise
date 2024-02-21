import React from 'react'
import logo from "../Images/logo_big.png"
import { FaInstagram,FaWhatsapp, FaPinterest } from "react-icons/fa";
import styled from "styled-components"

const Footer = () => {
  return (
    <Container>
        <FooterLogo>
           <img src={logo} alt="" /> 
           <p>SHOPPER</p>
        </FooterLogo>
        <FooterLinks>
            <li>
                Company
            </li>
            <li>
                Products
            </li>
            <li>
                Offices
            </li>
            <li>
                About
            </li>
            <li>
                Contacts
            </li>
        </FooterLinks>
        <SocialIcons>
         <Icons>
            <FaInstagram />
           </Icons>   
           <Icons>
            <FaWhatsapp />
           </Icons>  
           <Icons>
            <FaPinterest />
            </Icons>
        </SocialIcons>
        <Copyright>
            <p>Copyright @2024 - All rights reserved</p>
            <hr/>
        </Copyright>
    </Container>
  )
}
const Container = styled.div`
 display: flex;
 flex-direction: column;
 align-items: center;
 gap: 50px;
 justify-content: center;

`
const FooterLogo = styled.div`
    display: flex;
    align-items: center;
    gap: 20px;
    p {
        color: #383838;
        font-size: 46px;
        font-weight: 600;
    }
`
const FooterLinks = styled.ul`
    display: flex;
    gap: 50px;
    list-style: none;
    color: #252525;
    font-size: 18px;
    li {
      cursor: pointer;           
    }
`
const SocialIcons = styled.div`
    display: flex;
     gap: 20px;
  
`
const Icons = styled.div`
padding: 10px;
padding-bottom: 6px;
background: #fbfbfb;
border: 1px solid #ebebeb;
`
const Copyright = styled.div`
    display: flex;
    align-items: center;
    gap: 20px;
    flex-direction: column;
    width: 100%;
    margin-bottom: 30px;
    color: #1a1a1a;
    font-size: 20px;
    hr {
        width: 80%;
       border: none;
       border-radius: 10px;
       height: 3px;
       background: #c7c7c7;
    }
`

export default Footer