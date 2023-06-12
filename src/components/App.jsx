import React from "react";
import Parallax from "./Parallax";
import LandingInfo from "./LandingInfo";
import Navbar from "./Navbar";
import Footer from "./Footer";

const App = () => {

  return(
    <>
      <Navbar />
      <Parallax />
      <LandingInfo />
      <Footer bg={"white"} />
    </>
  );
}

export default App;
