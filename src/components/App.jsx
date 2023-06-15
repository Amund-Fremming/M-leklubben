import React from "react";
import Parallax from "./Parallax";
import LandingInfo from "./LandingInfo";
import Navbar from "./Navbar";
import Footer from "./Footer";

const App = () => {

  return(
    <>
      <Navbar bg={"[#E09A32]"} />
      <Parallax />
      <LandingInfo />
      <Footer />
    </>
  );
}

export default App;
