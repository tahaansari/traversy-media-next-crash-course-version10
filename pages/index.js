import Head from "next/head";
import ArticleList from "../Components/ArticleList";
import { server } from "../config";

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
  const res = await fetch(`${server}/api/articles/`);
  const todos = await res.json();
  return {
    props: {
      todos,
    },
  };
};
