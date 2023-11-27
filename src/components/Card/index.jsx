import React from "react";
import "./style.css";

const Card = () => {
  return (
    <div className="card">
      <div className="card__header">
        <img
          src="/icons/profile-image.jpg"
          alt=""
          width={400}
          style={{
            objectFit: "contain",
            borderTopLeftRadius: "0.5rem",
            borderTopRightRadius: "0.5rem",
            pointerEvents: "none",
          }}
        />
        <p>Oliver Maldonado</p>
        <p>Full Stack Developer</p>
        <a href="https://www.olivermorla.com/">https://www.olivermorla.com/</a>
        <div className="card__header-contact">
          <button>Email</button>
          <button>LinkedIn</button>
        </div>
      </div>
      <div className="card__body">
        <div className="card__body-about">
          <h4>About</h4>
          <p>
            I am a Full Stack Developer with a passion for learning and teaching
            others. I have experience working with JavaScript, React, Redux,
            Node.js, Express, SQL, and more. I am also a graduate of the
            University of Texas at Austin with a degree in Economics.
          </p>
        </div>
        <div className="card__body-interest">
          <h4>Interest</h4>
          <p>
            I am interested in learning new technologies and frameworks. I am
            also interested in learning more about the intersection of
            technology and business.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Card;
