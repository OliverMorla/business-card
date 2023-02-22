import React from "react";
import ReactDOM from "react-dom/client"

export default function Intro(){
    const exitBusinessCard = (e) => {
        const businessCardEl = document.querySelector(".pop-up")
        businessCardEl.classList.remove("active")
    }
    return(
        <>
        <img src="../src/business-card/images/profile-image.jpg" alt="" className="img-properties" />
        <div className="text-name">Oliver Maldonado</div>
        <button className="exit" onClick={(e) => {exitBusinessCard(e)}}>X</button>
        </>
    )    
}