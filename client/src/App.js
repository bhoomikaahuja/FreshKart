import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "./pages/MainPage";
import HomePage from "./pages/HomePage";
import SetNewPassWordPage from "./pages/SetNewPassWordPage";

function App() {
  

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/homePage" element={<HomePage />} />
        <Route path="/setNewPassWordPage" element={<SetNewPassWordPage/>}/>
        
      </Routes>
    </BrowserRouter>
    
  );
}

export default App;
