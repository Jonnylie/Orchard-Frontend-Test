import React from "react";
import { Link } from "react-router-dom";
import data from "../Data/data";
import "./AllSection.css";

function AllSection() {
  function onClick(element) {
    console.log(element + " has been clicked");
  }

  return (
    <section className="row all-section">
      <h1 className="mb-5 text-center all-section-title">
        {data.allSection.title}
      </h1>
      <div className="col-xxl-4 col-md-12 d-flex flex-column grid-container">
        <img
          src={data.allSection.articles[0].image}
          alt="summer lunch menu"
          className="all-base-image"
        ></img>
        <h3 className="article-title">{data.allSection.articles[0].title}</h3>
        <p className="all-paragraph">{data.allSection.articles[0].content}</p>
        <div className="button-container">
          <Link
            to={"/article?number=1"}
            className="text-decoration-none text-white"
            onClick={() => onClick("article-1")}
          >
            {data.allSection.readMore}
          </Link>
        </div>
      </div>
      <div className="col-xxl-4 col-md-12 d-flex flex-column grid-container">
        <img
          src={data.allSection.articles[1].image}
          alt="christmas eve menu"
          className="all-base-image"
        ></img>
        <h3 className="article-title">{data.allSection.articles[1].title}</h3>
        <p className="all-paragraph">{data.allSection.articles[1].content}</p>
        <div className="button-container">
          <Link
            to={"/article?number=2"}
            className="text-decoration-none text-white"
            onClick={() => onClick("article-2")}
          >
            {data.allSection.readMore}
          </Link>
        </div>
      </div>
      <div className="col-xxl-4 col-md-12 d-flex flex-column grid-container">
        <img
          src={data.allSection.articles[2].image}
          alt="exclusive cookbook"
          className="all-base-image"
        ></img>
        <h3 className="article-title">{data.allSection.articles[2].title}</h3>
        <p className="all-paragraph">{data.allSection.articles[2].content}</p>
        <div className="button-container">
          <Link
            to={"/article?number=3"}
            className="text-decoration-none text-white"
            onClick={() => onClick("article-3")}
          >
            {data.allSection.readMore}
          </Link>
        </div>
      </div>
    </section>
  );
}

export default AllSection;
