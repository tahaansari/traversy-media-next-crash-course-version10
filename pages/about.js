import Meta from "../Components/Meta";
import aboutStyle from "../styles/About.module.css";

const about = () => {
  return (
    <>
      <Meta title="About Page"></Meta>
      <div className={aboutStyle.bgcolor}>
        <h1>About</h1>
      </div>
    </>
  );
};

export default about;
