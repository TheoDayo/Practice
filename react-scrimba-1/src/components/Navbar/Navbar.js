import React from "react";
import "./Navbar.css";
import logo from './logo.svg';

export default function Navbar() {
    return (
        <nav>
                <img src={logo} className='logo'></img>
                <h3>ReactFacts</h3>
                <h4>React Course - Project 1</h4>

        </nav>
    )
}