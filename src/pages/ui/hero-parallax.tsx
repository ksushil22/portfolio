"use client";
import React from "react";
import {
    motion,
    useScroll,
    useTransform,
    useSpring,
    MotionValue,
} from "framer-motion";
import {Highlight} from "@/pages/utils/constants";
import {Grid} from "antd";
import Image from "next/image";

const {useBreakpoint} = Grid;


const HeroParallax = ({
                                 products,
                             }: {
    products: {
        title: string;
        thumbnail: string;
    }[];
}) => {
    const firstRow = products?.slice(0, 5);
    const secondRow = products?.slice(5, 10);
    const thirdRow = products?.slice(10, 15);
    const ref = React.useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"],
    });

    const springConfig = { stiffness: 300, damping: 30, bounce: 100 };

    const translateX = useSpring(
        useTransform(scrollYProgress, [0, 1], [0, 1000]),
        springConfig
    );
    const translateXReverse = useSpring(
        useTransform(scrollYProgress, [0, 1], [0, -1000]),
        springConfig
    );
    const rotateX = useSpring(
        useTransform(scrollYProgress, [0, 0.2], [15, 0]),
        springConfig
    );
    const opacity = useSpring(
        useTransform(scrollYProgress, [0, 0.2], [0.2, 1]),
        springConfig
    );
    const rotateZ = useSpring(
        useTransform(scrollYProgress, [0, 0.2], [20, 0]),
        springConfig
    );
    const translateY = useSpring(
        useTransform(scrollYProgress, [0, 0.2], [-700, 500]),
        springConfig
    );
    return (
        <div
            ref={ref}
            className="h-[full] py-40 overflow-hidden  antialiased relative flex flex-col self-auto [perspective:1000px] [transform-style:preserve-3d]"
        >
            <Header />
            <motion.div
                style={{
                    rotateX,
                    rotateZ,
                    translateY,
                    opacity,
                }}
            >
                <motion.div className="flex flex-row-reverse space-x-reverse space-x-4 md:space-x-20 mb-10 md:mb-20">
                    {firstRow?.map((product) => (
                        <ProductCard
                            product={product}
                            translate={translateX}
                            key={product.title}
                        />
                    ))}
                </motion.div>
                <motion.div className="flex flex-row mb-10 md:mb-20 space-x-4 md:space-x-20">
                    {secondRow?.map((product) => (
                        <ProductCard
                            product={product}
                            translate={translateXReverse}
                            key={product.title}
                        />
                    ))}
                </motion.div>
                <motion.div className="flex flex-row-reverse space-x-reverse space-x-4 md:space-x-20">
                    {thirdRow?.map((product) => (
                        <ProductCard
                            product={product}
                            translate={translateX}
                            key={product.title}
                        />
                    ))}
                </motion.div>
            </motion.div>
        </div>
    );
};

export const Header = () => {
    const screen = useBreakpoint();
    return (
        <div className="max-w-7xl relative mx-auto py-10 md:py-20 px-4 w-full">
            <h1 className="text-7xl md:text-7xl mt-[200px] md:mt-0">Sushil Kainth</h1>
            {screen.md ?
                <p className="text-lg md:text-2xl">
                    <span className="text_1">
                      <Highlight>Software Engineer</Highlight> | Building Solutions with
                      AI & Cloud
                    </span>
                    <br/>
                    <span className="text_2">
                      <Highlight>Results-Oriented Developer</Highlight> | Delivering
                      Efficiency & Innovation
                    </span>
                </p> : " "
            }
        </div>
    );
};

export const ProductCard = ({
                                product,
                                translate,
                            }: {
    product: {
        title: string;
        thumbnail: string;
    };
    translate: MotionValue<number>;
}) => {
    return (
        <motion.div
            style={{x: translate}}
            whileHover={{y: -10, scale: 1.05}}
            className="group/product relative flex-shrink-0 w-[90%] sm:w-[300px]"
        >
            <h2 className="absolute top-4 left-4 opacity-0 group-hover/product:opacity-100 text-white z-10">
                {product.title}
            </h2>
            <div className="aspect-square overflow-hidden">
                <Image
                    src={product.thumbnail}
                    className="w-full h-full object-contain"
                    alt={product.title}
                />
            </div>
        </motion.div>
    );
};

export default HeroParallax;
