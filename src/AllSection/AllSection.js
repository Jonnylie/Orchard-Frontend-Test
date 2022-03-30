import React from "react";
import { Link, useNavigate } from "react-router-dom";
import data from "../Data/data";
import "./AllSection.css";

function AllSection() {
  return (
    <section className="row all-section">
      <h1 className="mb-5 text-center">{data.allSection.title}</h1>
      <div className="col-xxl-4 col-md-12 d-flex flex-column grid-container">
        <img src={data.allSection.firstImage} className="all-base-image"></img>
        <h3 className="article-title">{data.allSection.firstArticleTitle}</h3>
        <p className="all-paragraph">{data.allSection.firstArticleContent}</p>
        <div className="button-container">
          <Link to="/article">{data.allSection.readMore}</Link>
        </div>
      </div>
      <div className="col-xxl-4 col-md-12 d-flex flex-column grid-container">
        <img src={data.allSection.secondImage} className="all-base-image"></img>
        <h3 className="article-title">{data.allSection.secondArticleTitle}</h3>
        <p className="all-paragraph">{data.allSection.secondArticleContent}</p>
        <div className="button-container">
          <text>{data.allSection.readMore}</text>
        </div>
      </div>
      <div className="col-xxl-4 col-md-12 d-flex flex-column grid-container">
        <img src={data.allSection.thirdImage} className="all-base-image"></img>
        <h3 className="article-title">{data.allSection.thirdArticleTitle}</h3>
        <p className="all-paragraph">{data.allSection.thirdArticleContent}</p>
        <div className="button-container">
          <text>{data.allSection.readMore}</text>
        </div>
      </div>
    </section>
  );
}

export default AllSection;
