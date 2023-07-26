import { articles } from "../../../data";
export default function handler({ query: { id } }, res) {
  const article = articles.filter((article) => article.id == id);
  if (article.length > 0) {
    res.status(200).json(article);
  } else {
    res.status(404).json({ message: `The Article for ID ${id} not found` });
  }
}
