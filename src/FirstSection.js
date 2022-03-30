import React, { useState } from "react";
import Modal from "./Modal";
import "./FirstSection.css";
import familyPhoto from "./images/family.jpg";
import fruits from "./images/fruits.jpg";
import asparagus from "./images/asparagus.jpg";

const firstParagraph =
  "The way ingredients are sourced affects the way we nourish our bodies. Author Mark Schatzer believes our body naturally devolops an appetite for the foods and nutrients it needs to be healthy, but that artificial flavourings are getting in the way. This can be reversed by focusing on high-quality ingredients and being mindful as your appetite guides you to consume according to your body's needs.";

const secondParagraph =
  "Sourcing local or organic food is a good way to start being more mindful about what you're cooking and eating.";

function FirstSection() {
  const [modal, setModal] = useState(false);
  const [tempdata, setTempdata] = useState([]);

  function getData(img) {
    let tempData = [img];
    setTempdata((item) => [0, ...tempData]);

    return setModal(true);
  }

  console.log(modal);

  return (
    <>
      <section className="row first-section">
        <div className="col-xxl-4 col-md-6 d-flex flex-column main-grid-container">
          <img
            src={familyPhoto}
            className="tall-poster"
            onClick={() => getData(familyPhoto)}
          />
        </div>
        <div className="col-xxl-4 col-md-6 d-flex flex-column justify-content-between main-grid-container">
          <img
            src={fruits}
            className="base-image"
            onClick={() => getData(fruits)}
          />
          <img
            src={asparagus}
            className="base-image"
            onClick={() => getData(asparagus)}
          ></img>
        </div>
        <div className="col-xxl-4 col-md-12 d-flex flex-column main-content">
          <h2 className="main-title">ANSWER YOUR BODY NEEDS</h2>
          <hr />
          <p className="first-paragraph">{firstParagraph}</p>
          <text className="text-danger">BE MINDFUL</text>
          <p className="second-paragraph">{secondParagraph}</p>
        </div>
      </section>

      {modal === true ? (
        <Modal img={tempdata[1]} onClose={() => setModal(false)} />
      ) : (
        ""
      )}
    </>
  );
}

export default FirstSection;
