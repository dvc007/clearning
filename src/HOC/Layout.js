import React from "react";
import Header from "./../Component/Header/Header";
import Footer from "./../Component/Footer/Footer";

export default function Layout({ children }) {
  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  );
}
