import React from "react";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import AddClient from "./pages/AddClient";
const App=()=>{
    return(
      <Router>
        <Routes>
            <Route path="/" element={<Login/>}/>
            <Route path="/register" element={<Register/>}/>
            <Route path="/home" element={<Home/>}/>
            <Route path="/addCostumer" element={<AddClient/>}/>
        </Routes>
      </Router>

    )
}
export default App