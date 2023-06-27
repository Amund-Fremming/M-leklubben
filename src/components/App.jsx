import React from "react";
import Parallax from "./Parallax";
import LandingInfo from "./LandingInfo";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { AuthContextProvider } from './AuthContext';

const App = () => {

  document.body.style.backgroundColor = "white";

  return(
    <>
    <AuthContextProvider>
      <Navbar bg={"[#E09A32]"} />
    </AuthContextProvider>
      <Parallax />
      <LandingInfo />
      <Footer />
    </>
  );
}

export default App;
