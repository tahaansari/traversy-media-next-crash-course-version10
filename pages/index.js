import ArticleList from "../Components/ArticleList";
import { server } from "../config";
import Meta from "../Components/Meta";

export default function Home({ todos }) {
  console.log(todos);
  return (
    <>
      <Meta title="Index Page"></Meta>
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
