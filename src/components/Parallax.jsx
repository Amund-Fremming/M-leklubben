import React from "react";
import Typewriter from "typewriter-effect";

const Parallax = () => {

    window.onload = () => {
        window.addEventListener("scroll", () => {
            let value = window.scrollY;

            /* For md -> xl */
            let background = document.getElementById("bg");
            let stonehill = document.getElementById("stone-hill");
            let snowhill = document.getElementById("snow-hill");
            let lakehill = document.getElementById("lake-hill");
            let text = document.getElementById("text");
    
            text.style.marginTop = value * 2.3 + "px";
            stonehill.style.left = (55 + (value/10)) + "em";
            snowhill.style.right = (660 + (value * 1.5)) + "px";
            background.style.top = (-50 - (value * 2)) + "px";
            lakehill.style.top = (300 - (value * 1.5)) + "px";

            /* For sm / mobile */
            let lakehillmobile = document.getElementById("lake-hill-mobile");
            let backgroundmobile = document.getElementById("bg-mobile");
            let clouds = document.getElementById("clouds");

            clouds.style.left = (value * 1.3) + "px";
            backgroundmobile.style.top = (200 - (value * 1)) + "px";
            lakehillmobile.style.top = (315 - (value * 0.8)) + "px";
        });
    };

    return(
        <div className="w-full pt-20">
            {/* Denne delen vises fra md -> xl */}
            <section className='bg-[#007B8E] sm:hidden overflow-hidden z-10 relative md:flex lg:flex xl:flex justify-center items-center h-screen hidden w-full'>
                <img
                    className='absolute top-[-50px] left-0 w-[100%] pointer-events-none'
                    src={require("../images/background.jpeg")}
                    alt="backgrond"
                    id="bg"
                />
                <img
                    className="absolute md:top-[300px] lg:top-[300px] xl:top-[300px] left-0 w-[100%] pointer-events-none"
                    src={require("../images/nylake-mountain.png")}
                    alt="lake"
                    id="lake-hill"
                />  
                <h2 id="text" className="absolute text-7xl font-bold text-white font-mono mb-20">
                    <Typewriter 
                        options = {{
                            strings: ["Måleklubben"],
                            autoStart: true,
                            loop: true,
                            cursor: "_",
                            pauseFor: 10000,
                        }}
                    />
                </h2>
                <img
                    className='absolute lg:flex sm:top-[600px] md:top-[600px] lg:top-[500px] xl:top-[410px] md:left-[40em] lg:left-[40em] xl:left-[55em] pointer-events-none w-[140%]'
                    src={require("../images/mountain2.png")}
                    alt="stonehill"
                    id="stone-hill"
                />
                <img
                    className='absolute md:flex xl:flex md:top-[450px] lg:top-[350px] right-[660px] w-[100%] pointer-events-none'
                    src={require("../images/mountain3.png")}
                    alt="snowhill"
                    id="snow-hill"
                />
                <img
                    className='absolute md:top-[715px] lg:top-[650px] xl:top-[600px] pointer-events-none'
                    src={require("../images/snow.png")}
                    alt="snow"
                    id="snow"
                />
                <img
                    className='absolute top-[740px] sm:top-[740px] md:top-[780px] lg:top-[730px] xl:top-[700px] pointer-events-none'
                    src={require("../images/snow.png")}
                    alt="snow"
                    id="snow"
                    />
            </section>
            {/* Denne delen vises fra sm/mobile */}
            <section className="overflow-hidden top-0 relative md:hidden lg:hidden xl:hidden xxl:hidden sm:flex xs:flex h-screen flex justify-center items-center w-full">
                <div className="bg-[#E09A32] h-[300px] w-full absolute top-0 left-0" />
                <img
                    className='absolute top-[200px] left-0 w-[100%] pointer-events-none'
                    src={require("../images/background.jpeg")}
                    alt="backgrond"
                    id="bg-mobile"
                />
                <img 
                    className="absolute pointer-events-none top-[315px]"
                    src={require("../images/crop-lake-mountain.png")}
                    alt="lake"
                    id="lake-hill-mobile"
                />
                <img 
                    className="absolute pointer-events-none top-[85px]"
                    src={require("../images/clouds.png")}
                    alt="clouds"
                    id="clouds"
                />
                <h2 id="text" className="absolute text-5xl font-bold text-white font-mono top-[340px]">
                    <Typewriter 
                        options = {{
                            strings: ["Måleklubben"],
                            autoStart: true,
                            loop: true,
                            cursor: "_",
                            pauseFor: 10000,
                        }}
                    />
                </h2>
            </section>

            <div />
        </div>
    );
}

export default Parallax;