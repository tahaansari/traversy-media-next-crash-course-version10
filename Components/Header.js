import headerStyles from "../styles/Header.module.css";

const Header = () => {
  const x = 3;
  return (
    <div className={headerStyles.header}>
      <h1 className="title">WebDev News</h1>
      <p>Keep up to date with the latest web dev news</p>
      <style jsx>{`
        .title {
          color: ${x == 2 ? "red" : "blue"};
        }
      `}</style>
    </div>
  );
};

export default Header;
