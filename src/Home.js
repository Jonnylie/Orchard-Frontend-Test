import React from "react";
import MainSection from "./MainSection/MainSection";
import AllSection from "./AllSection/AllSection";

function Home() {
  return (
    <div className="d-flex flex-column justify-content-center align-items-center py-5">
      <MainSection />
      <AllSection />
    </div>
  );
}

export default Home;
