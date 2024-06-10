import React from "react";
import { Routes, Route  } from "react-router-dom";
import { Signup, Login, NavBar, Footer, GlobalStyles } from "./Components";
import Pages from "./Pages/Pages";
import { Toaster } from "sonner";



function App() {
  
  return (
    <div className="App">
       <Toaster richColors position="top-center"/>
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
