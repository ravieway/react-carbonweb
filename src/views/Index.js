import React from "react";

// reactstrap components

// core components

import IndexNavbar from "components/Navbars/IndexNavbar.js";
import IndexHeader from "components/Headers/IndexHeader.js";
import SummeryView from "./Pages/SummeryView.js";
import Footer from "components/Footers/Footer.js";
import ProductView from "./Pages/ProductView.js";



function Index() {
  document.documentElement.classList.remove("nav-open");
  React.useEffect(() => {
    document.body.classList.add("index");
    return function cleanup() {
      document.body.classList.remove("index");
    };
  });
  return (
    <>
      <IndexNavbar />
      <IndexHeader />
      <SummeryView />
      <ProductView />
      <Footer />
    </>
  );
}

export default Index;
