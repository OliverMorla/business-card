import React from "react";
import ReactDOM from "react-dom/client"

export default function About(){
    return(
        <div className="details-wrapper">
            <div className="about-wrapper">
                <div className="about-title">About</div>
                <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae repudiandae iusto possimus aliquid, deleniti molestiae totam quasi cum aperiam, ex qui praesentium ad voluptas magni velit veritatis accusamus excepturi aspernatur.</div>
            </div>
            <div className="interest-wrapper">
                <div className="interest-title">Interest</div>
                <div>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa magni voluptate dolore repellendus reprehenderit nam architecto, dignissimos, voluptatibus distinctio, laboriosam recusandae natus. Beatae, rem magnam quasi quae ad facere harum.</div>
            </div>
        </div>
    )    
}