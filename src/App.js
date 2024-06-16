import React from "react";
import { Routes, Route  } from "react-router-dom";
import { Signup, Login, NavBar, Footer } from "./components";
import Pages from "./pages/Pages";
import { Toaster } from "sonner";



function App() {
  
  return (
    <div className="">
      
       <Toaster richColors position="top-center"/>
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
