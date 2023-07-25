import Header from "../Components/Header";
import Footer from "../Components/Footer";
import Nav from "../Components/Nav";

const Layout = ({ children }) => {
  return (
    <>
      <Nav></Nav>
      <Header></Header>
      {children}
    </>
  );
};

export default Layout;
