// This combines combines all main components together into a single <App /> component

import React from "react";
import ReactDOM from "react-dom/client"
import Header from "./Header";
import Content from "./Content";

export default function App(){
    return(
        <div className="container">
            <Header />
            <Content />
        </div>
    )
}