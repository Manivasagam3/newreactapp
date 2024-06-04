import React from "react";
import{BrowserRouter,Routes,Route,} from "react-router-dom";
import Children from './Login'
import Navbar from "./Navbar";
import "./App.css"
import Hero from "./Hero";
function App() {
  return (
    <>
<div className="app">

<BrowserRouter>

<Navbar/>
  <Routes>
    <Route path="/hero" element={<Hero/>}/>
    <Route path="/login" element={<Children/>}/>


  </Routes>
  </BrowserRouter>
 
</div>

</>
  );
}

export default App;


