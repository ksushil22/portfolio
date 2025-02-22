import React, { useEffect } from "react";
import HeroParallax from "@/pages/ui/hero-parallax";
import PerfectScrollbar from 'react-perfect-scrollbar';
import HoverEffect from "@/pages/ui/card-hover-effect";
import TracingBeam from "@/pages/ui/tracing-beam";
import Tabs from "@/pages/ui/tabs";
import {
    CustomHeading,
    EDUCATION_CARDS,
    Highlight,
    PRODUCTS,
    PROFESSIONAL_SUMMARY,
    PROJECTS
} from "@/pages/utils/constants";
import CardsSplitDelay from "@/pages/ui/card-split";

export default function Home() {
    // Force dark mode on mount
    useEffect(() => {
        document.documentElement.classList.add("dark");
        document.documentElement.classList.remove("light"); // Just in case light mode was set

        // Optional: cleanup function to reset modes when component unmounts (if necessary)
        return () => {
            document.documentElement.classList.remove("dark");
        };
    }, []);

    return (
        <PerfectScrollbar options={{ minScrollbarLength: 100 }}>
            <TracingBeam className={"z-50"}>
                <div
                    style={{
                        position: "absolute",
                        top: 20,
                        right: 20,
                        zIndex: 2,
                        display: 'flex',
                        alignItems: 'center'
                    }}>
                    <a href={"/Resume.pdf"} download={"Resume_Sushil_Kainth.pdf"}>
                        <Highlight>Download Resume</Highlight>
                    </a>
                    |
                    <a href={"mailto:kainths.jobs@gmail.com"}>
                        <Highlight>Get in touch!</Highlight>
                    </a>
                    <a href={"https://www.linkedin.com/in/sushil-kainth/"} target={"_blank"}>
                        <img src={"/linkedin.svg"} width={50} height={50} alt={"linkedin"} />
                    </a>
                </div>

                <div className={"no-visible-scrollbar antialiased"}>
                    <HeroParallax products={PRODUCTS} />
                </div>
                <div className="h-[100vh] items-center w-full education">
                    <CustomHeading>Education</CustomHeading>
                    <div style={{ marginTop: 250 }}>
                        <CardsSplitDelay cards={EDUCATION_CARDS} />
                    </div>
                </div>
                <div className={'min-h-[120vh]'}>
                    <CustomHeading>Professional Summary</CustomHeading>
                    <Tabs tabs={PROFESSIONAL_SUMMARY} />
                </div>
                <CustomHeading>Projects</CustomHeading>
                <div className="max-w-5xl mx-auto px-8 m-[30px]">
                    <HoverEffect items={PROJECTS} />
                </div>
            </TracingBeam>
        </PerfectScrollbar>
    );
}
