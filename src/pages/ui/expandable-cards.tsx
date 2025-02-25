"use client";
import Image from "next/image";
import React, {useEffect, useId, useRef, useState} from "react";
import {AnimatePresence, motion} from "framer-motion";
import useOutsideClick from "../utils/use-outside-click";
import {PROFESSIONAL_SUMMARY_CARDS} from "@/pages/utils/constants";
import {Grid} from "antd";

const {useBreakpoint} = Grid;

export default function ExpandableCards() {
    const [active, setActive] = useState<(typeof PROFESSIONAL_SUMMARY_CARDS)[number] | boolean | null>(
        null
    );
    const ref = useRef<HTMLDivElement>(null);
    const id = useId();

    useEffect(() => {
        function onKeyDown(event: KeyboardEvent) {
            if (event.key === "Escape") {
                setActive(false);
            }
        }

        if (active && typeof active === "object") {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }

        window.addEventListener("keydown", onKeyDown);
        return () => window.removeEventListener("keydown", onKeyDown);
    }, [active]);

    useOutsideClick(ref, () => setActive(null));
    const screen = useBreakpoint();
    return (
        <>
            <AnimatePresence>
                {active && typeof active === "object" ? (
                    <div className="fixed overflow-hidden inset-0 grid place-items-center z-[100]">
                        <motion.button
                            key={`button-${active.title}-${id}`}
                            layout
                            initial={{opacity: 0}}
                            animate={{opacity: 1}}
                            exit={{opacity: 0, transition: {duration: 0.05}}}
                            className="flex absolute top-2 right-2 lg:hidden items-center justify-center bg-white rounded-full h-6 w-6"
                            onClick={() => setActive(null)}
                        >
                            <CloseIcon/>
                        </motion.button>

                        <motion.div
                            layoutId={`card-${active.title}-${id}`}
                            ref={ref}
                            className="w-full max-w-[500px] h-full md:[85vh] md:max-h-[90%] flex flex-col bg-neutral-900 sm:rounded-3xl"
                        >
                            <motion.div layoutId={`image-${active.title}-${id}`}>
                                <div className="flex justify-evenly items-start p-4 h-[140px]">
                                    <Image
                                        priority
                                        width={100}
                                        height={100}
                                        src={active.src}
                                        alt={active.title}
                                        className="w-[100px] sm:rounded-tr-lg sm:rounded-tl-lg mix-blend-lighten object-contain"
                                    />
                                    <div>
                                        <motion.h3
                                            layoutId={`title-${active.title}-${id}`}
                                            className="font-bold text-neutral-700 dark:text-neutral-200"
                                        >
                                            {active.title}
                                        </motion.h3>
                                        <motion.p
                                            layoutId={`description-${active.heading}-${id}`}
                                            className="text-neutral-600 dark:text-neutral-400"
                                        >
                                            {active.heading}
                                        </motion.p>
                                    </div>
                                </div>
                            </motion.div>

                            {/* Scrollable Content */}
                            <div className="flex-1 overflow-y-auto max-h-[70vh] p-4 [scrollbar-width:none]">
                                <motion.div
                                    layout
                                    initial={{opacity: 0}}
                                    animate={{opacity: 1}}
                                    exit={{opacity: 0}}
                                >
                                    {active.content}
                                </motion.div>
                            </div>
                        </motion.div>
                    </div>
                ) : null}
            </AnimatePresence>

            <ul className="max-w-2xl mx-auto w-full gap-4">
                {PROFESSIONAL_SUMMARY_CARDS.map((card, index) => (
                    <motion.div
                        layoutId={`card-${card.title}-${id}`}
                        key={`card-${card.title}-${id}`}
                        onClick={() => setActive(card)}
                        className="p-4 flex flex-col md:flex-row justify-between items-center hover:bg-neutral-50 dark:hover:bg-neutral-800 rounded-xl cursor-pointer"
                    >
                        <div className="flex gap-4 flex-col md:flex-row ">
                            <motion.div layoutId={`image-${card.title}-${id}`}>
                                <Image
                                    width={100}
                                    height={100}
                                    src={card.src}
                                    alt={card.title}
                                    className="h-40 w-40 md:h-14 md:w-14 rounded-lg mix-blend-lighten object-contain"
                                />
                            </motion.div>
                            <div className="">
                                <motion.h3
                                    layoutId={`title-${card.title}-${id}`}
                                    className="font-medium text-neutral-800 dark:text-neutral-200 text-center md:text-left"
                                >
                                    {card.title}
                                </motion.h3>
                                <motion.p
                                    layoutId={`description-${card.heading}-${id}`}
                                    className="text-neutral-600 dark:text-neutral-400 text-center md:text-left"
                                >
                                    {card.heading}
                                </motion.p>
                            </div>
                        </div>
                        {screen.md ? <h1
                            id={`button-${card.title}-${id}`}
                        >
                            {"+"}
                        </h1> : ""}
                    </motion.div>
                ))}
            </ul>
        </>
    );
}

export const CloseIcon = () => {
    return (
        <motion.svg
            initial={{
                opacity: 0,
            }}
            animate={{
                opacity: 1,
            }}
            exit={{
                opacity: 0,
                transition: {
                    duration: 0.05,
                },
            }}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-4 w-4 text-black"
        >
            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
            <path d="M18 6l-12 12"/>
            <path d="M6 6l12 12"/>
        </motion.svg>
    );
};
