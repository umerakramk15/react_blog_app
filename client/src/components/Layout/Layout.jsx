import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

function Layout({ children }) {
  return (
    <div className="">
      <Header></Header>
      {children}
      <Footer></Footer>
    </div>
  );
}

export default Layout;
