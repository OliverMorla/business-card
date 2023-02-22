import React from "react";
import ReactDOM from "react-dom/client"
import Intro from "./business-card/Intro"
import Socials from "./business-card/Socials";
import About from "./business-card/About";
import Footer from "./business-card/Footer";
import "./App.css"
import "./business-card/Card.css"

export default function Content(){
    const businessCard = (e) =>{
        const businessCardEl = document.querySelector(".pop-up")
        businessCardEl.classList.toggle("active")
    }
    const script = document.createElement("script");
    script.src = "src/script.js";
    script.async = true;
    document.body.appendChild(script);
    return(
        <main>
            <div className="content-title">Fun facts about React</div>
            <div className="list-container">
                <ul>
                    <li> Was first released in 2013 </li>
                    <li> Was originally created by Jordan Walke </li>
                    <li> Has well over 100k stars GitHub </li>
                    <li> Is maintained by Facebook </li>
                    <li> Powers thousands of enterprise apps, including mobile apps </li>
                </ul>
                <div>
                    <button id="btn" onClick={(e) => {businessCard(e)}}>Digital Business Card</button>
                </div>
            </div>
            <div className="pop-up" id="pop-up">
                <Intro />
                <Socials />
                <About />
                <Footer />
            </div>
        </main>
    )
}
