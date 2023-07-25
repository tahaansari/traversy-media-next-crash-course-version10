import Head from "next/head";

export default function Home({ todos }) {
  console.log(todos);
  return (
    <>
      <Head>
        <title>Index Page</title>
      </Head>
      <div>
        <h1>Welcome to Next</h1>
        {todos.map((todo) => {
          return <p style={{ marginBottom: "1rem" }}>{todo.title}</p>;
        })}
      </div>
    </>
  );
}

export const getStaticProps = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos");
  const todos = await res.json();
  return {
    props: {
      todos,
    },
  };
};
