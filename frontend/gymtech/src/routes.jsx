import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./pages/login";
import Home from "./pages/Home";

export default function Routers() {
    <Router>
        <Routes>
            <Route path='/login' Component={Login}/>
            <Route path='/home' Component={Home}/>
        </Routes>
    </Router>
}