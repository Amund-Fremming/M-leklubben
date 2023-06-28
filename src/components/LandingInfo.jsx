import React from "react";
import "./css/landing.css";
import InfoSeksjon from "./InfoSeksjon";

const LandingInfo = ({ bilde, tekst }) => {

    const hvemervi = "Vi er en gjeng bestående primært av frivillige fra 2. og 3. klasse, samt institutt. Det vi ønsker oss, er at dere som bedrift har lyst til å stille med en landmåler som har ett måleoppdrag å vise studenter. Hvis en student begynner som landmåler hos dere, hva ville vært en typisk halv dag på jobben?";
    const hvagjorvi = "Flere elever forteller at de føler seg lite forberedt på å bruke måleinstrumenter, dette er noe som elever i alle kull og klasser opplever. Tanken at dette kan være en sosial arena, en møteplass hovedsakelig for 1 klasse studenter, det skal bygges relasjoner til medstudenter, linjeforening, institutt og forhåpentligvis arbeidsgivere.";
    const vartformal = "Det vi håper på er at dere bruker denne plattformen til å rekruttere, informere studenter og på ett senere tidspunkt utvikle dette til noe større.";

    return(
        <> 
            {/* white sector */}
            <InfoSeksjon tekst={hvemervi} bilde={require("../images/gruppa/hele-gjengen.jpeg")} bakgrunn={"bg-white"} overskrift={"Hvem er vi?"} />

            {/* TRANSITION */}
            <section className="relative mt-32">
                <div class="custom-shape-divider-bottom-1686061150">
                    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                        <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" class="shape-fill"></path>
                    </svg>
                </div>
            </section>

            {/* Purple sector */}
            <InfoSeksjon tekst={hvagjorvi} bilde={require("../images/gruppa/pres-amund-1.jpeg")} bakgrunn={"bg-[#F9F6EE]"} overskrift={"Hva gjør vi?"} />

            {/* TRANSITION */}
            <section className="relative">
                <div class="custom-shape-divider-bottom-16860611502">
                    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                        <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" class="shape-fill2"></path>
                    </svg>
                </div>
            </section>

            <InfoSeksjon tekst={vartformal} bilde={require("../images/gruppa/crop-maale-ute.jpeg")} bakgrunn={"bg-[#E2DFD2]"} overskrift={"Vårt formål"} />

        </>
    );
}

export default LandingInfo;