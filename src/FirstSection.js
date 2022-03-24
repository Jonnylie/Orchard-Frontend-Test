import React from "react";
import "./FirstSection.css";
import familyPhoto from "./images/family.jpg";
import fruits from "./images/fruits.jpg";
import asparagus from "./images/asparagus.jpg";

function FirstSection() {
  return (
    <section className="row">
      <div className="col-md-4 d-flex flex-column img-container">
        <img src={familyPhoto} className="tall-poster"></img>
      </div>
      <div className="col-md-4 d-flex flex-column img-container">
        <img src={fruits} className="base-image"></img>
        <img src={asparagus} className="base-image"></img>
      </div>
      <div className="col-md-4 d-flex flex-column img-container">
        <h2>ANSWER YOUR BODY NEEDS</h2>
        <hr />
        <p>The way ingredients</p>
        <text className="text-danger">BE MINDFUL</text>
        <p>
          <b>Sourcing local or organic food</b>
        </p>
      </div>
    </section>
  );
}

export default FirstSection;
