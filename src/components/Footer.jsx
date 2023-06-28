import React from "react";
import { styles } from "../util/styles";
import "./css/footer.css";

const Footer = ({ bg }) => {
    return(
        <div className="absolute left-0 right-0 ">
            <section className="relative">
                <div class="custom-shape-divider-bottom-16860611505">
                    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                        <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" class="shape-fill5"></path>
                    </svg>
                </div>
            </section>

            <div className="w-full bg-[#9097f5] h-32 px-[10vw] md:px-[20vw] lg:px-[20vw] xl:px-[25vw]">
                <div className={`flex flex-col justify-start items-start bg-[#9097f5]`}>
                    <h2 className={`${styles.heroSubText} mb-4`}>Kontakt</h2>
                    <p><b>Leder:</b> Amund Ruud</p>
                    <ul className="list-disc ml-6">
                        <li>476 70 607</li>
                        <li>amundruudsolberg@gmail.com</li>
                    </ul>
                </div>
            </div>
            <div class="bg-[#9097f5] inline-flex items-center justify-center w-full">
                <hr class="w-[80%] h-[2px] my-8 bg-black border-0"/>
                <span class={`absolute px-3 font-medium -translate-x-1/2 bg-[#9097f5] left-1/2`}>Made by</span>
            </div>
            <div className="flex bg-[#9097f5] pb-10 justify-center items-center">
                <p className="font-medium"><a className="text-red-600" href="mailto:amund.fremming@gmail.com"><b>Amund Fremming</b></a></p>
            </div>
        </div>
    );
};

export default Footer;