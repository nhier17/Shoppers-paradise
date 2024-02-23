import React from "react"
import NavBar from "./NavBar/NavBar";
import GlobalStyles from "./Components/GlobalStyles";
import { Routes, Route  } from "react-router-dom"

import Signup from "./Pages/Signup"
import Login from "./Pages/Login"
import Pages from "./Pages/Pages"
import Footer from "./Components/Footer"

function App() {
  return (
    <div className="App">
       <GlobalStyles/>
       
      <NavBar/>
      
      <Routes>
        <Route path="/register" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/*" element={<Pages />} />
         </Routes>
        
      <Footer/>
    </div>
  );
}

export default App;
