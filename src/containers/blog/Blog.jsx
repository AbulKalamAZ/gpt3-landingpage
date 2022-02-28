import React from "react";
import Article from "../../components/article/Article";
import "./blog.css";
import { blogFive, blogFour, blogOne, blogThree, blogTwo } from "./import.js";

const articleData = [
  {
    date: "Sep 26, 2021",
    title: "GPT-3 and Open  AI is the future. Let us exlore how it is?",
    image: blogOne,
  },
  {
    date: "Sep 26, 2021",
    title: "GPT-3 and Open  AI is the future. Let us exlore how it is?",
    image: blogTwo,
  },
  {
    date: "Sep 26, 2021",
    title: "GPT-3 and Open  AI is the future. Let us exlore how it is?",
    image: blogThree,
  },
  {
    date: "Sep 26, 2021",
    title: "GPT-3 and Open  AI is the future. Let us exlore how it is?",
    image: blogFour,
  },
  {
    date: "Sep 26, 2021",
    title: "GPT-3 and Open  AI is the future. Let us exlore how it is?",
    image: blogFive,
  },
];

const Blog = () => {
  return (
    <div className="gpt3__blog section__padding" id="blog">
      <div className="gpt3__blog-heading">
        <h1 className="gradient__text">
          A lot is happening, <br /> We are blogging about it.
        </h1>
      </div>

      <div className="gpt3__blog-container">
        {articleData.map((article, index) => {
          return (
            <Article
              key={index}
              date={article.date}
              title={article.title}
              image={article.image}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Blog;
