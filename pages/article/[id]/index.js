import Link from "next/link";
import React from "react";
import { server } from "../../../config";

const index = ({ article }) => {
  console.log(article);
  return (
    <div>
      <h1>{article.title}</h1>
      <p>{article.body}</p>
      <Link href="/">Go Back</Link>
    </div>
  );
};

export default index;

// export const getServerSideProps = async (context) => {
//   const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${context.params.id}`);
//   const article = await res.json();
//   return {
//     props: {
//       article,
//     },
//   };
// };

export const getStaticPaths = async () => {
  const res = await fetch(`${server}api/articles/`);
  const articles = await res.json();

  const paths = articles.map((article) => {
    return {
      params: {
        id: article.id.toString(),
      },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const res = await fetch(`${server}api/articles/${context.params.id}`);
  const article = await res.json();
  return {
    props: {
      article: article[0],
    },
  };
};
