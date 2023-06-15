import React,{ useState, useEffect } from "react";
import 'tailwindcss/tailwind.css';
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Blogbox = ({ overskrift, dato, bilde, tekst, bio, delay }) => {

    const useInViewAnimation = (delay) => {
        const control = useAnimation();
        const [ref, inView] = useInView();
      
        const boxVariants = {
          hidden: {
            opacity: 0,
            y: 45
          },
          visible: {
            opacity: 1,
            y: 0,
            transition: {
              duration: 0.8,
              delay: delay,
              typeof: "spring"
            }
          }
        };
      
        useEffect(() => {
          if(inView) {
            control.start("visible");
          }
        }, [control, inView]);
      
        return { ref, variants: boxVariants, initial: 'hidden', animate: control };
    }

    const [bgLesMer, setBgLesMer] = useState(false);
    const [tekstVisibility, setTekstVisibility] = useState(false);
    const [minibildeVisibility, setMinibildeVisibility] = useState(true);
    const [stortbildeVisibility, setStortbildeVisibility] = useState(false);
    const [knappTekst, setKnappTekst] = useState("Les mer");

    const handleMouseOver = () => {
        setBgLesMer(!bgLesMer);
    }

    const handleLes = () => {
        if(knappTekst === "Les mer") {
            // gjøre minibilde hidden
            // sette inn stort bilde
            // Sette inn blog tekst
            setKnappTekst("Les mindre");
            setMinibildeVisibility(false);
            setTekstVisibility(true);
            setStortbildeVisibility(true);
        } else {
            // fjerne stort bilde
            // sette visible til lite bilde
            // sette blog tekst til hidden
            setKnappTekst("Les mer");
            setMinibildeVisibility(true);
            setTekstVisibility(false);
            setStortbildeVisibility(false);
        }
    } 

    return(
        <motion.div
            {...useInViewAnimation(delay)}
            onMouseEnter={handleMouseOver}
            onMouseLeave={handleMouseOver}
            className="block bg-ggg my-5 p-6 w-[90%] rounded-xl"
        >
                <h1 className="font-medium text-white text-xl">{overskrift}</h1>
            <div className="flex justify-between text-white w-full">
                <div className="flex flex-col h-full">
                    <p>{dato}</p>
                    <p className=" text-[#DADADB] text-">"<i>{bio}"</i></p>

                    <div className="flex flex-wrap">
                        {/* Når les mer trykkes */}
                        <p className={`mt-6 ${tekstVisibility === true ? "flex" : "hidden"} w-full lg:w-[60%] xl:w-[60%] mr-6`}>{tekst}</p>
                        <img src={bilde} className={`${stortbildeVisibility === true ? "flex" : "hidden"} object-cover w-[250px] lg:w-[300px] xl:w-[300px] rounded-md m-2 mt-8`} />
                    </div>


                    <input onClick={handleLes} className={`${bgLesMer ? "bg-ocean-blue" : "bg-ggg" } rounded-xl h-8 w-24 mt-12 px-2 cursor-pointer`} type="button" value={knappTekst} />
                </div>
                <img src={bilde} className={`${minibildeVisibility === true ? "flex" : "hidden"} w-[100px] object-cover rounded-md mr-3`} />
            </div>
        </motion.div>
    );
};

export default Blogbox;