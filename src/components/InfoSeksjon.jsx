import React, { useEffect } from "react";
import "./landing.css";
import "./landing2.css"
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { styles } from "./styles";

const InfoSeksjon = ({ bilde, tekst, bakgrunn, overskrift }) => {

    const control = useAnimation();
    const control2 = useAnimation();
    const [ref, inView] = useInView();
    const [ref2, inView2] = useInView();

    const boxVariants = (delay) => {
        return{
            hidden: {
                x: -200,
                opacity: 0,
            },
            visible: {
                x: 0,
                opacity: 1,
                transition: {
                    duration: 0.8,
                    delay: delay,
                }
            }
        }
    }

    useEffect(() => {
        if(inView) {
            control.start("visible");
        } else {
            control.start("hidden");
        }
        if(inView2) {
            control2.start("visible");
        } else {
            control2.start("hidden");
        }
    }, [control, inView, control2, inView2]);

    return(
        <>
            <section className={`${bakgrunn} sm:pt-10 md:pt-10 lg:pt-10 xl:pt-10 w-full flex`}>
                
                <div className="flex align-center justify-around flex-wrap w-full h-screen sm:mb-[600px] mb-[100px] md:mb-[200px] lg:mb-0 xl:mb-0">

                    <div className="pt-[100px] flex flex-col sm:m-4 md:ml-2 lg:ml-[1vw] xl:ml-[1vw] md:w-[400px] xl:w-[40vw] m-4">
                        <motion.h2
                            ref={ref}
                            initial="hidden"
                            variants={boxVariants(0)}
                            animate={control}
                            className={`${styles.heroHeadText} xs:pt-8 sm:pt-8 md:mt-32  xs:text-5xl sm:text-5xl md:text-5xl lg:text-6xl xl:text-7xl pb-4 font-bold font-ac w-full text-4xl`}
                        >
                            {overskrift}
                        </motion.h2>

                        <motion.p
                            ref={ref}
                            variants={boxVariants(0.8)}
                            initial="hidden"
                            animate={control}
                            className={`${styles.sectionSubText}`}
                        >
                            {tekst}
                        </motion.p>
                    </div>

                    <div className="w-full m-4 flex sm:w-[850px] md:w-[350px] lg:w-[35vw] xl:w-[25vw] justify-center items-center hover:scale-110 duration-200">
                        <motion.img
                            ref={ref2}
                            variants={boxVariants(1.2)}
                            initial="hidden"
                            animate={control2}
                            className="object-cover rounded-xl md:w-[500px] shadow-slate-800 shadow-2xl"
                            src={bilde}
                        />
                    </div>

                </div>

            </section>
        </>
    );
}

export default InfoSeksjon;