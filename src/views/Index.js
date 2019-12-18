import React from "react";

// reactstrap components

// core components

import IndexNavbar from "components/Navbars/IndexNavbar.js";
import IndexHeader from "components/Headers/IndexHeader.js";
import LandingPage from "./Pages/LandingPage";
import SectionDownload from "./index-sections/SectionRegister.js";
import Footer from "components/Footers/Footer.js";



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
      <LandingPage />
      <SectionDownload/>
      <Footer />
    </>
  );
}

export default Index;
