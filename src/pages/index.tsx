import {HeroParallax} from "@/pages/ui/hero-parallax";
import PerfectScrollbar from 'react-perfect-scrollbar';
import {HoverEffect} from "@/pages/ui/card-hover-effect";
import {TracingBeam} from "@/pages/ui/tracing-beam";
import {cn} from "@/pages/utils/cn";
import React from "react";
import {CardsSplitDelay} from "@/pages/ui/card-split";
import {Tabs} from "@/pages/ui/tabs";
import {EDUCATION_CARDS, Highlight, PRODUCTS, PROFESSIONAL_SUMMARY, PROJECTS} from "@/pages/utils/constants";
import Image from "next/image";


export default function Home() {
    return (
        <PerfectScrollbar options={{minScrollbarLength: 100}}>
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
                    <a href={"/Resume.pdf"} download={"Resume.pdf"}><Highlight>Download Resume</Highlight></a> |
                    <a href={"mailto:kainths.2206@gmail.com"}><Highlight>Get in touch!</Highlight></a>
                    <a href={"https://www.linkedin.com/in/sushil-kainth/"} target={"_blank"}><img src={"/linkedin.svg"} width={50} height={50} alt={"linkedin"} /></a>

                </div>

                <div
                    className={"no-visible-scrollbar antialiased"}
                    style={{
                        backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.8)), url(/background.png)',
                        backgroundSize: '50% 25%',
                        backgroundRepeat: 'no-repeat',
                        backgroundPosition: 'right'
                    }}>
                    <HeroParallax products={PRODUCTS}/>
                </div>
                <div className="h-[100vh] items-center w-full education">
                    <h1 className={"text-center text-7xl top-0"}>Education</h1>
                    <div style={{
                        marginTop: 250
                    }}>
                        <CardsSplitDelay cards={EDUCATION_CARDS}/>
                    </div>
                </div>
                <div className={'min-h-[120vh]'}>
                    <h1 className={"text-center text-7xl top-0"}>Professional Summary</h1>
                    <Tabs tabs={PROFESSIONAL_SUMMARY}/>

                </div>
                <h1 className={"text-center text-7xl top-0"}>Projects</h1>
                <div className="max-w-5xl mx-auto px-8 m-[30px]">
                    <HoverEffect items={PROJECTS}/>
                </div>
            </TracingBeam>
        </PerfectScrollbar>

    )
}
