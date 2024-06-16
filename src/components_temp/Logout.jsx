import React from 'react'
import { useNavigate } from "react-router-dom";
import axios from "axios"
import { RiLogoutCircleLine } from "react-icons/ri";

const Logout = () => {
    //navigate
    const navigate = useNavigate();
    const logOutUser = async () => {
        try {
            const response = await axios.get('https://shoppers-paradise17.onrender.com/api/auth/logout');
            console.log(response.data)
            localStorage.removeItem('token')
            navigate('/login');
            } catch (error) {
            console.error("Error logging out", error.message);
        }
    }
        return (
        <div className="logout">
            <RiLogoutCircleLine onClick={logOutUser}/>
        </div>
    )
    }

export default Logout