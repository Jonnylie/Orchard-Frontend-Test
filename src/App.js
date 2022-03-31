import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Home";
import Article from "./Article/Article";

function App() {
  return (
    <div className="app">
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/article" element={<Article />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
