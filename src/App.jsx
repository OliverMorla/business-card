import React, { useState } from "react";

import Header from "./components/Header";
import Content from "./components/Content";
import Card from "./components/Card";
import Draggable from "react-draggable";

export default function App() {
  const [showCard, setShowCard] = useState(false);

  return (
    <section className="container">
      <div className="modal">
        <Header />
        <Content showCard={showCard} setShowCard={setShowCard} />
      </div>
      {showCard && (
        <Draggable defaultClassName="card fix">
          <div >
            <Card />
          </div>
        </Draggable>
      )}
    </section>
  );
}
