import React from "react";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
const App=()=>{
    return(
      <Router>
        <Routes>
            <Route path="/" element={<Login/>}/>
            <Route path="/register" element={<Register/>}/>
            <Route path="/home" element={<Home/>}/>
        </Routes>
      </Router>

    )
}
export default App