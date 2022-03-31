import React, { useState } from "react";
import Modal from "../Modal";
import data from "../Data/data";
import "./MainSection.css";

function MainSection() {
  const [modal, setModal] = useState(false);
  const [tempdata, setTempdata] = useState([]);

  function getData(img) {
    let tempData = [img];
    setTempdata((item) => [0, ...tempData]);

    return setModal(true);
  }

  return (
    <>
      <section className="row main-section">
        <div className="col-xxl-4 col-md-6 d-flex flex-column main-grid-container">
          <img
            src={data.mainSection.firstImage}
            alt="family"
            className="tall-poster"
            onClick={() => getData(data.mainSection.firstImage)}
          />
        </div>
        <div className="col-xxl-4 col-md-6 d-flex flex-column justify-content-between main-grid-container">
          <img
            src={data.mainSection.secondImage}
            alt="variety of fruits"
            className="base-image"
            onClick={() => getData(data.mainSection.secondImage)}
          />
          <img
            src={data.mainSection.thirdImage}
            alt="asparagus"
            className="base-image"
            onClick={() => getData(data.mainSection.thirdImage)}
          ></img>
        </div>
        <div className="col-xxl-4 col-md-12 d-flex flex-column main-content">
          <h2 className="main-title">ANSWER YOUR BODY NEEDS</h2>
          <hr />
          <p className="first-paragraph">{data.mainSection.firstParagraph}</p>
          <h3 className="h6 text-danger">BE MINDFUL</h3>
          <p className="second-paragraph">{data.mainSection.secondParagraph}</p>
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

export default MainSection;
