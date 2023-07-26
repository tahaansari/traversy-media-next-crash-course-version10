import React from "react";
import ArticleItem from "./ArticleItem";

const ArticleList = ({ todos }) => {
  return (
    <div>
      {todos.map((todo) => {
        return <ArticleItem key={todo.id} todo={todo} />;
      })}
    </div>
  );
};

export default ArticleList;
