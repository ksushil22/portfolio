import React, {useEffect} from "react";
import HeroParallax from "@/pages/ui/hero-parallax";
import HoverEffect from "@/pages/ui/card-hover-effect";
import {CustomHeading, EDUCATION_CARDS, Highlight, PRODUCTS, PROJECTS} from "@/pages/utils/constants";
import {Grid} from "antd";
import FocusCards from "@/pages/ui/focus-card";
import ExpandableCards from "@/pages/ui/expandable-cards";
import Image from "next/image";


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
        <>
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
                    <Image src={"/linkedin.svg"} width={50} height={50} alt={"linkedin"}/>
                </a>
            </div>
            <div className={"antialiased"}>
                <HeroParallax products={PRODUCTS}/>
            </div>
            <div className="items-center w-full education"
                 style={{
                     marginTop: 250
                 }}>
                <CustomHeading>Education</CustomHeading>
                <div style={{marginTop: 50}}>
                    <FocusCards/>
                </div>
            </div>
            <div style={{marginTop: 50}}>
                <CustomHeading>Professional Summary</CustomHeading>
                <div style={{marginTop: 50}}>
                    <ExpandableCards/>
                </div>
            </div>
            <div className="max-w-5xl mx-auto px-8 m-[30px]">
                <CustomHeading>Projects</CustomHeading>
                <HoverEffect items={PROJECTS}/>
            </div>
        </>
    );
}
