import './App.css';
import React, {useState} from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Homepage from "./components/Homepage/Homepage";
import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {
    AOS.init();

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Homepage/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
