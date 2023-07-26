import Head from "next/head";
import ArticleList from "../Components/ArticleList";

export default function Home({ todos }) {
  console.log(todos);
  return (
    <>
      <Head>
        <title>Index Page</title>
      </Head>
      <div>
        <h1>Welcome to Next</h1>
        <ArticleList todos={todos} />
      </div>
    </>
  );
}

export const getStaticProps = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const todos = await res.json();
  return {
    props: {
      todos,
    },
  };
};
