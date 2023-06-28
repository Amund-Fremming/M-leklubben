import React, { useEffect } from "react";
import "./css/landing.css";
import "./css/landing2.css";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { styles } from "../util/styles";

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
            <section className={`${bakgrunn} sm:pt-10 md:pt-0 lg:pt-2 xl:pt-10 w-full flex bottom-0`}>
                
                <div className="pt-[10vh] pb-[10vh] lg:pb-[40vh] xl:pb-[40vh] flex align-center justify-around flex-wrap w-full sm:mb-[400px] mb-[100px] md:mb-[200px] lg:mb-0 xl:mb-0">

                    <div className="pt-[100px] flex flex-col sm:m-4 md:ml-2 lg:ml-[1vw] xl:ml-[1vw] md:w-[400px] xl:w-[40vw] m-4">
                        <motion.h2
                            ref={ref}
                            initial="hidden"
                            variants={boxVariants(0)}
                            animate={control}
                            className={`${styles.heroHeadText}  pb-4 font-bold font-ac w-full text-4xl `}
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

                    <div className="pt-20 m-4 flex w-[300px]  sm:w-[400px] md:w-[350px] lg:w-[450px] xl:w-[33vw] justify-center items-center hover:scale-110 duration-200">
                        <motion.img
                            ref={ref2}
                            variants={boxVariants(1.2)}
                            initial="hidden"
                            animate={control2}
                            className="object-cover rounded-xl md:w-[500px] lg:w-[700px] xl:w-[700px] shadow-slate-800 shadow-2xl w-[90%]"
                            src={bilde}
                        />
                    </div>

                </div>

            </section>
        </>
    );
}

export default InfoSeksjon;