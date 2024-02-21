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
      
      <NavBar/>
      <GlobalStyles/>
      <Pages/>
      <Routes>
        <Route path="/register" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
