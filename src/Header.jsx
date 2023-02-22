import React from "react";
import ReactDOM from "react-dom/client"
import "./App.css"

export default function Header(){
    return(
        <header>
            <nav>
                <div className="logo-container">
                    <img src="../public/react-logo.png" alt="" className="logo-properties"/>
                    <div className="logo-text">ReactFacts</div>
                </div>
                <div className="logo-title">React Course - Project 1</div>                
            </nav>
        </header>
    )
}