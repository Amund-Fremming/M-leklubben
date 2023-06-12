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
      <Footer bg={"bg-[#E2DFD2]"} />
    </>
  );
}

export default App;
