import React from "react";
import Draggable from "react-draggable";
import "./style.css";

const Content = ({ showCard, setShowCard }) => {
  return (
    <main className="content">
      <h1 className="content__title">Fun Facts about React</h1>
      <ul className="content__list">
        <li className="content__list-item">Was first released in 2013</li>
        <li className="content__list-item">
          Was originally created by Jordan Walke
        </li>
        <li className="content__list-item">Has well over 100k stars GitHub</li>
        <li className="content__list-item">Is maintained by Facebook</li>
        <li className="content__list-item">
          Powers thousands of enterprise apps, including mobile apps
        </li>
      </ul>
      <button
        className="content__card-button"
        onClick={() => setShowCard(!showCard)}
      >
        Show Bussiness Card
      </button>
    </main>
  );
};

export default Content;
