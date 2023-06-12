import React from "react";
import Navbar from "./Navbar";
import { styles } from "./styles";
import Footer from "./Footer";

const Aktivitet = () => {
    return(
        <>
            <Navbar />
            <div className="mt-20" />
            Aktivitet
            <Footer bg={"bg-white"} />
        </>
    );
}

export default Aktivitet;