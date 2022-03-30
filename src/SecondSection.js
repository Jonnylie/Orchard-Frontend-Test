import React from "react";
import "./SecondSection.css";
import summerLunch from "./images/summer-lunch.jpg";
import christmasEveMenu from "./images/christmas-eve-menu.jpg";
import exclusiveCookbook from "./images/exclusive-cookbook.jpg";

const title = "ALL THE LATEST FROM AEG";
const firstArticleTitle = "Summer Lunch Menu by Mark Best";
const secondArticleTitle = "A Traditional Christmas Eve, Mark Best Style";
const thirdArticleTitle = "Taking Taste Further";
const firstArticleContent =
  "AEG ambassador Mark Best’s summer eats are guaranteed to help you make the most of the warmer weather and entertaining at home.";
const secondArticleContent =
  "One of Australia's best chefs and AEG ambassador, Mark Best, shares his favourite Christmas Eve menu which is sure to impress your guests.";
const thirdArticleContent =
  "This exclusive cookbook gives you all the know‑how you need. We’ve designed it to make sure you get the most out of our products – and the best out of your food.";
const readMore = "READ MORE";

function SecondSection() {
  return (
    <section className="row second-section">
      <h1 className="mb-5 text-center">{title}</h1>
      <div className="col-xxl-4 col-md-12 d-flex flex-column grid-container">
        <img src={summerLunch} className="latest-base-image"></img>
        <h3 className="article-title">{firstArticleTitle}</h3>
        <p className="latest-paragraph">{firstArticleContent}</p>
        <div className="button-container">
          <text>{readMore}</text>
        </div>
      </div>
      <div className="col-xxl-4 col-md-12 d-flex flex-column grid-container">
        <img src={christmasEveMenu} className="latest-base-image"></img>
        <h3 className="article-title">{secondArticleTitle}</h3>
        <p className="latest-paragraph">{secondArticleContent}</p>
        <div className="button-container">
          <text>{readMore}</text>
        </div>
      </div>
      <div className="col-xxl-4 col-md-12 d-flex flex-column grid-container">
        <img src={exclusiveCookbook} className="latest-base-image"></img>
        <h3 className="article-title">{thirdArticleTitle}</h3>
        <p className="latest-paragraph">{thirdArticleContent}</p>
        <div className="button-container">
          <text>{readMore}</text>
        </div>
      </div>
    </section>
  );
}

export default SecondSection;
