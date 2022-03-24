import React from "react";
import summerLunch from "./images/summer-lunch.jpg";
import christmasEveMenu from "./images/christmas-eve-menu.jpg";
import exclusiveCookbook from "./images/exclusive-cookbook.jpg";

function SecondSection() {
  return (
    <section class="row">
      <div class="col-md-4 d-flex flex-column img-container">
        <img src={summerLunch} className="base-image"></img>
        One of three columns
      </div>
      <div class="col-md-4 d-flex flex-column img-container">
        <img src={christmasEveMenu} className="base-image"></img>
        One of three columns
      </div>
      <div class="col-md-4 d-flex flex-column img-container">
        <img src={exclusiveCookbook} className="base-image"></img>
        One of three columns
      </div>
    </section>
  );
}

export default SecondSection;
