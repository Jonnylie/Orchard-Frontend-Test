import React from "react";
import { useLocation } from "react-router-dom";
import data from "../Data/data";
import "./Article.css";

// A custom hook that builds on useLocation to parse
function useQuery() {
  const { search } = useLocation();

  return React.useMemo(() => new URLSearchParams(search), [search]);
}

function Article(props) {
  let query = useQuery();
  const articleNumber = parseInt(query.get("number")) - 1;

  return (
    <div className="py-5 mx-5">
      <div className="d-flex flex-column justify-content-center align-items-center article-container">
        <h1 className="mb-3">
          {data.allSection.articles[articleNumber].title}
        </h1>
        <div className="mb-5">
          <img src={data.allSection.articles[articleNumber].image} />
        </div>
        <div className="paragraph-container">
          <p className="text-center">
            {data.allSection.articles[articleNumber].content}
          </p>
          <p className="text-center">
            {data.allSection.randomParagraphs[0].data}
          </p>
          <p className="text-center">
            {data.allSection.randomParagraphs[1].data}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Article;
