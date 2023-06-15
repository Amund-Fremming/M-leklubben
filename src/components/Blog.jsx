import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import { styles } from "./styles";
import Footer from "./Footer";
import { storage } from "../firebase";
import { ref, uploadBytes, listAll, getDownloadURL } from "firebase/storage";
import { v4 } from "uuid";
import Blogbox from "./Blogbox";

document.body.style.backgroundColor = "#1D1E20";
let globalInit = false;

const Blog = () => {

    return(
        <>
            <Navbar bg={"[#E09A32]"} />
            <div className="bg-[#1D1E20] pt-32 flex pb-64">

                {/* Sidebar */}
                <div className="mt-12 hidden md:flex md:flex-col l-0 bg-[#1D1E20] min-h-[100%] w-[20vw]">
                    <div className="absolute min-h-[100%] w-[3px] bg-[#2E2E33] ml-[20vw]" />
                    <h2 className={`${styles.heroSubTextWhite} pt-10 ml-[1vw]`}>Content</h2>
                    <ul className="list-disc ml-12 text-semi-white font-medium cursor-pointer">
                        {/* Her hopper du direkte til #id med <a>, må da lagres id på alle elementer under som itereres fra db */}
                        <li>dag1</li>
                        <li>dag2</li>
                        <li>dag3</li>
                    </ul>
                </div>

                {/* Hovedseksjon */}
                <div className="bg-[#1D1E20] ml-[3px] flex flex-col pl-[10vw] w-full min-h-[100%]">
                    <h1 className={`${styles.heroHeadTextWhite}`}>Aktivitet</h1>
                    <h3 className={`${styles.sectionSubTextWhite}`}>Hva vi har gjort den siste tiden</h3>

                    {/**
                     * 
                     * Når du looper over antall innlegg fra databasen, legg in delay på de 3 /fire første innleggene så de laster pent etter hverandre, resten kan ha delay 0.2
                     * 
                     */}

                    <Blogbox overskrift={"Første innlegg"} dato={"12.02.1999"} bilde={require("../images/gruppa/alle-spiser.jpeg")} tekst={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."} bio={"kort tekst om hvordan vi startet"} delay={0.3} />

                    <Blogbox overskrift={"Første innlegg"} dato={"12.02.1999"} bilde={require("../images/gruppa/alle-spiser.jpeg")} tekst={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."} bio={"kort tekst om hvordan vi startet"} delay={0.6} />

                    <Blogbox overskrift={"Første innlegg"} dato={"12.02.1999"} bilde={require("../images/gruppa/alle-spiser.jpeg")} tekst={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."} bio={"kort tekst om hvordan vi startet"} delay={0.9} />

                    <Blogbox overskrift={"Første innlegg"} dato={"12.02.1999"} bilde={require("../images/gruppa/alle-spiser.jpeg")} tekst={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."} bio={"kort tekst om hvordan vi startet"} delay={0} />

                    <Blogbox overskrift={"Første innlegg"} dato={"12.02.1999"} bilde={require("../images/gruppa/alle-spiser.jpeg")} tekst={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."} bio={"kort tekst om hvordan vi startet"} delay={0} />

                    <Blogbox overskrift={"Første innlegg"} dato={"12.02.1999"} bilde={require("../images/gruppa/alle-spiser.jpeg")} tekst={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."} bio={"kort tekst om hvordan vi startet"} delay={0} />

                </div>

            </div>
            <Footer />
        </>
    );
};

export default Blog;