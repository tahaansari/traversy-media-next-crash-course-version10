import Link from "next/link";
const ArticleItem = ({ todo }) => {
  return (
    <Link
      style={{ margin: "1rem", border: "1px solid blue", display: "inline-block", padding: "1rem" }}
      href="/article/[id]"
      as={`/article/${todo.id}`}
    >
      <h3>{todo.title}</h3>
      <p>{todo.body}</p>
    </Link>
  );
};

export default ArticleItem;
