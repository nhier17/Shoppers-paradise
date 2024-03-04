import React from 'react'
import { useNavigate } from "react-router-dom";
import axios from "axios"

const Logout = ({setIsLoggedin}) => {
    //navigate
    const navigate = useNavigate();
    const logOutUser = async () => {
        try {
            const response = await axios.get('https://shoppers-paradise17.onrender.com/api/auth/logout');
            console.log(response.data)
            setIsLoggedin(false);
             navigate('/login');
        } catch (error) {
            console.error("Error logging out", error.message);
        }
    }
        return (
        <div className="logout">
            <button onClick={logOutUser}>Logout</button>
        </div>
    )
    }

export default Logout