import React from "react";
import { styles } from "./styles";

const Footer = ({ bg }) => {
    return(
        <div className={`bg-${bg} top-0`}>
            <hr class="w-full h-[2px] mx-auto my-4 bg-gray-300 border-0 rounded md:my-10 mt-0 pt-0"/>
            <div className="w-full h-32 px-[10vw] md:px-[20vw] lg:px-[20vw] xl:px-[25vw]">
                <div className={`flex flex-col justify-start items-start ${bg}}`}>
                    <h2 className={`${styles.heroSubText} mb-4`}>Kontakt</h2>
                    <p><b>Leder:</b> Amund Ruud</p>
                    <ul className="list-disc ml-6">
                        <li>476 70 607</li>
                        <li>amundruudsolberg@gmail.com</li>
                    </ul>
                </div>
            </div>
            <div class="inline-flex items-center justify-center w-full">
                <hr class="w-full h-[2px] my-8 bg-gray-300 border-0"/>
                <span class={`absolute px-3 font-medium -translate-x-1/2 bg-${bg} left-1/2`}>Made by</span>
            </div>
            <div className="flex pb-10 justify-center items-center">
                <p className="font-medium"><a className="text-red-600" href="mailto:amund.fremming@gmail.com"><b>Amund Fremming</b></a></p>
            </div>
        </div>
    );
};

export default Footer;