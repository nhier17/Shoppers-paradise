import React from "react"
import NavBar from "./NavBar/NavBar";
import GlobalStyles from "./Components/GlobalStyles";
import { Routes, Route  } from "react-router-dom"

import Signup from "./Pages/Signup"
import Login from "./Pages/Login"
import Home from "./Pages/Home"

function App() {
  return (
    <div className="App">
      
      <NavBar/>
      <GlobalStyles/>
      <Routes>
      <Route path="/register" element={<Signup/>} />
      <Route path="/login" element={<Login/>} />
      <Route path="/" element={<Home />} />
      </Routes>
      
    </div>
  );
}

export default App;
