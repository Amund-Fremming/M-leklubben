import React, { useEffect } from "react";
import Navbar from "./Navbar";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { styles } from "./styles";
import Footer from "./Footer";
import { AuthContextProvider } from './AuthContext';

const Landmaaling = () => {

   // window.scrollTo(0, 0);
    document.body.style.backgroundColor = "white"

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

    return(
        <>
            <AuthContextProvider>
                <Navbar bg={"[#E09A32]"} />
            </AuthContextProvider>
            <div className="mt-20" />
            <div className="flex justify-center items-center">
                <img
                    alt="landmaaler"
                    src={require("../images/gruppa/front.info.jpeg")}
                    className="h-64 rounded-b-md shadow-2xl shadow-gray-400 flex justify-center items-center object-cover"
                />
            </div>
            
            <div className="pb-64 flex justify-center items-center pt-6 px-[10vw] md:px-[20vw] lg:px-[20vw] xl:px-[25vw] top-10">
                <div className="flex flex-col justify-center items-start">

                    <motion.h1
                        className={`${styles.heroHeadText}`}
                        {...useInViewAnimation(0)}

                    >
                        Landmåler
                    </motion.h1>
                    <motion.h2
                        className={`${styles.heroSubText}`}
                        {...useInViewAnimation(0)}
                    >
                        En landmåler måler opp og markerer grenser i terrenget.
                    </motion.h2>

                    <motion.ul
                        className={`${styles.sectionSubText} flex justify-center items-center space-x-7 pt-10`}
                        {...useInViewAnimation(0)}
                    >
                        <li className="font-medium hover:underline underline cursor-pointer underline-offset-2"><b>Yrke</b></li>
                        <li className="hover:underline cursor-pointer underline-offset-2"><b><a href="#utdanning">Utdanning</a></b></li>
                        <li className="hover:underline cursor-pointer underline-offset-2"><b><a href="#lenker">Lenker</a></b></li>
                    </motion.ul>

                    <motion.p
                        className={`${styles.sectionSubText} pt-6`}
                        {...useInViewAnimation(0)}
                    >
                        Som landmåler måler du terreng, regner ut grenser og setter ut merker for grenser i ulike deler av byggefasen på bygg og anlegg. Dette kan være i forbindelse med deling av eiendom eller bygging av hus, broer, tunneler eller veier. Etter at du har samlet alle nødvendige data, fortsetter du jobben din på kontoret hvor du utarbeider planer, kart og dokumenter.
                        <br/><br/>
                        Det finnes ulike målemetoder, og det er viktig at du velger riktig metode ut ifra kravene på stedet. Landmålingsoppgavene vil variere fra enkle måleoppgaver til svært krevende.
                        <br/><br/>
                        <b>Vanlige arbeidsoppgaver for en landmåler:</b>
                    </motion.p>

                    <motion.ol
                        className={`ml-6 mt-2 list-disc ${styles.sectionSubText}`}
                        {...useInViewAnimation(0)}
                    >
                        <li>plassere og utføre beliggenhetskontroll gjøre anleggsmålinger</li>
                        <li>gjøre anleggsmålinger</li>
                        <li>avklare rettighetsspørsmål</li>
                        <li>oppdatere kart</li>
                    </motion.ol>

                    <motion.p
                        className={`${styles.sectionSubText} pt-6`}
                        {...useInViewAnimation(0)}
                    >
                        Landmålere bruker avanserte oppmålingsinstrumenter og dataprogrammer. Som landmåler leverer du data i digital form. Du må derfor ha innsikt i moderne kartteknikk og geografiske informasjonssystemer.
                        <br/><br/>
                        Landmåler er en ubeskyttet tittel. Det finnes likevel en autorisasjonsordning, og det er viktig at både myndigheter og publikum kan skille mellom landmålere med og uten denne autorisasjonen.
                    </motion.p>

                    <motion.img
                        src={require("../images/gruppa/og-landmaaler.jpeg")}
                        className={`w-[60%] rounded-md shadow-md shadow-gray-500 mt-6`}
                        {...useInViewAnimation(0)}
                    />

                    <br/><br/>

                    <motion.h2
                        className={`${styles.heroSubText}`}
                        {...useInViewAnimation(0)}
                    >
                        Hvor jobber landmålere ?
                    </motion.h2>

                    <motion.p
                        className={`${styles.sectionSubText} pt-6`}
                        {...useInViewAnimation(0)}
                    >
                        Landmålere er ansatt i for eksempel kommuner, Statens vegvesen, Statens kartverk, Jordskifterettene, hos entreprenører, kart- og oppmålingsfirmaer, konsulentfirmaer, private bedrifter, salgsfirmaer eller e-verk (elektrisitetsverk).
                    </motion.p>

                    <br/><br/>

                    <motion.h2
                        className={`${styles.heroSubText}`}
                        {...useInViewAnimation(0)}
                    >
                        Viktige egenskaper
                    </motion.h2>

                    <motion.p
                        className={`${styles.sectionSubText} pt-6`}
                        {...useInViewAnimation(0)}
                        id="utdanning"
                    >
                       Som landmåler bør du ha interesse for teknologi og IKT-verktøy, og kunne sette deg inn i prosjekter med tekniske, naturgeografiske og juridiske problemstillinger. Du bør være nøyaktig, og trives med matematikk. En del jobber foregår til fjells, så du bør like å være ute. 
                    </motion.p>

                    <motion.img
                        src={require("../images/gruppa/og-landmaaler2.jpeg")}
                        className={`rounded-md shadow-md shadow-gray-500 mt-6 w-[60%]`}
                        {...useInViewAnimation(0)}
                    />

                    <br/><br/>

                    <motion.h2
                        className={`${styles.heroSubText}`}
                        {...useInViewAnimation(0)}
                    >
                        Utdanning
                    </motion.h2>

                    <motion.p
                        className={`${styles.sectionSubText} pt-6`}
                        {...useInViewAnimation(0)}
                    >
                        Du kan utdanne deg til landmåler ved universiteter og høgskoler eller fagskoler i Norge. <a className="underline underline-offset-2" href="https://utdanning.no/sok/#hovedfasett=Utdanninger&query_value=Landm%C3%A5ling">Se oversikt her</a>
                        <br/><br/>
                        En ny ordning fra 2021 krever at du må være autorisert som landmåler, hvis du skal måle opp eiendom etter matrikkelloven. Det er kartverket som gir autorisasjonen. Kravet trer ikke i kraft før 1. januar 2024. <a href="https://www.kartverket.no/eiendom/autorisasjon-av-eiendomslandmalere/normalordningen" className="underline underline-offset-2">Les mer om autorisasjonsordningen</a>
                        <br/><br/>
                        For å bli autorisert eiendomslandmåler kreves: 
                    </motion.p>

                    <motion.ol
                        className={`ml-6 mt-2 list-disc ${styles.sectionSubText}`}
                        {...useInViewAnimation(0)}
                    >
                        <li>bachelor- eller mastergrad med et godkjent studieprogram</li>
                        <li>annen oppnådd bachelor- eller mastergrad i kombinasjon med 120 studiepoeng i juridiske, matrikulære og geomatikkfaglige emner, oversikten finner du <a href="https://www.kartverket.no/eiendom/autorisasjon-av-eiendomslandmalere/normalordningen">her</a></li>
                    </motion.ol>

                    <br/><br/>

                    {/*

                    ENDRE H# ELEMENTER TIL Å HA MINDRE SKRIFT!! lage ny underoverskrift i stykles? 
    */}

                    <motion.h3
                        className={`font-medium text-xl`}
                        {...useInViewAnimation(0)}
                    >
                        Etter- og videreutdanning
                    </motion.h3>

                    <motion.p
                        className={`${styles.sectionSubText} pt-6`}
                        {...useInViewAnimation(0)}
                    >
                       Det er flere muligheter for videreutdanning innenfor geomatikk, kartfag, ingeniørfag, teknologistudier og lignende på universiteter og høgskoler.
                    </motion.p>

                    <motion.img
                        src={require("../images/gruppa/og-landmaaler3.jpeg")}
                        className={`rounded-md shadow-md shadow-gray-500 mt-6 w-[60%]`}
                        {...useInViewAnimation(0)}
                    />

                    <br/><br/>
                    
                    <motion.h3
                        className={`font-medium text-xl`}
                        {...useInViewAnimation(0)}
                    >
                        De vanligste jobbene blant landmålerutdannede
                    </motion.h3>

                    <motion.div
                        className={`${styles.sectionSubText} pt-6 w-full`}
                        {...useInViewAnimation(0)}
                    >
                        <div className="w-full pt-4">
                            <div className="flex justify-between align-center">
                                <p>Bygningsingeniør</p>
                                <p>381 personer</p>
                            </div>
                            <div className="h-10 w-full bg-gray-200 rounded-md">
                                <div className="bg-[#E09A32] w-[23%] h-full rounded-l-md">
                                    <p className="right-0 flex pt-1.5 pl-1">23%</p>
                                </div>
                            </div>
                        </div>
                        <div className="w-full pt-4">
                            <div className="flex justify-between align-center">
                                <p>Landmåler, kartograf</p>
                                <p>189 personer</p>
                            </div>
                            <div className="h-10 w-full bg-gray-200 rounded-md">
                                <div className="bg-[#E09A32] w-[12%] h-full rounded-l-md">
                                    <p className="right-0 flex pt-1.5 pl-1">12%</p>
                                </div>
                            </div>
                        </div>
                        <div className="w-full pt-4">
                            <div className="flex justify-between align-center">
                                <p>Sivilingeniør (bygg eller anlegg)</p>
                                <p>151 personer</p>
                            </div>
                            <div className="h-10 w-full bg-gray-200 rounded-md">
                                <div className="bg-[#E09A32] w-[9%] h-full rounded-l-md">
                                    <p className="right-0 flex pt-1.5 pl-1">9%</p>
                                </div>
                            </div>
                        </div>
                        <div className="w-full pt-4">
                            <div className="flex justify-between align-center">
                                <p>Teknisk tegner</p>
                                <p>104 personer</p>
                            </div>
                            <div className="h-10 w-full bg-gray-200 rounded-md">
                                <div className="bg-[#E09A32] w-[6%] h-full rounded-l-md">
                                    <p className="right-0 flex pt-1.5 pl-1">6%</p>
                                </div>
                            </div>
                        </div>
                        <div className="w-full pt-4">
                            <div className="flex justify-between align-center">
                                <p>Annet</p>
                                <p>813 personer</p>
                            </div>
                            <div className="h-10 w-full bg-gray-200 rounded-md">
                                <div className="bg-[#E09A32] w-[50%] h-full rounded-l-md">
                                    <p className="right-0 flex pt-1.5 pl-1">50%</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    <motion.p
                        className={`${styles.sectionSubText} pt-6`}
                        {...useInViewAnimation(0)}
                        id="lenker"
                    >
                        Kilde: Statistisk sentralbyrå 2022. Tall fra høsten 2021.
                    </motion.p>

                    <br/><br/>

                    <motion.h2
                        className={`${styles.heroSubText}`}
                        {...useInViewAnimation(0)}
                    >
                        Lenker
                    </motion.h2>
                    
                    <motion.ol
                        className={`ml-6 mt-2 list-disc ${styles.sectionSubText} underline-offset-2`}
                        {...useInViewAnimation(0)}
                    >
                        <li className="hover:underline"><a href="https://www.hvl.no/studier/studieprogram/landmaling-og-eiendomsdesign/">HVL studieplan</a></li>
                        <li className="hover:underline"><a href="https://snl.no/landm%C3%A5ling">SNL</a></li>
                        <li className="hover:underline"><a href="https://no.wikipedia.org/wiki/Landm%C3%A5ling">Wikipedia</a></li>
                    </motion.ol>

                </div>
            </div>
            <Footer bg={"white"} />
        </>
    );
}

export default Landmaaling;