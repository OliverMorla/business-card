import React from "react";
import "./style.css";

const Header = () => {
  return (
    <header className="header">
      <section
        style={{
          display: "flex",
          alignItems: "center",
          gap: "0.5rem",
        }}
      >
        <img
          className="header__logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1280px-React-icon.svg.png"
          alt="React Logo"
          width={25}
          height={25}
          style={{
            objectFit: "contain",
          }}
        />
        <h1>ReactFacts</h1>
      </section>
      <h4>React Course - Project 1</h4>
    </header>
  );
};

export default Header;
