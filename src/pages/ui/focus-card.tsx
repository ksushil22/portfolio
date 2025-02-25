"use client";
import React, { useEffect, useRef, useState } from "react";
import cn from "../utils/cn";
import {EDUCATION_CARDS} from "@/pages/utils/constants";

// Custom hook to detect visibility
function useVisibility(threshold: number = 0.3) {
    const [isActive, setIsActive] = useState(false);
    const elementRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.intersectionRatio >= threshold) {
                        setIsActive(true);
                    } else {
                        setIsActive(false);
                    }
                });
            },
            { threshold }
        );

        if (elementRef.current) {
            observer.observe(elementRef.current);
        }

        return () => {
            if (elementRef.current) {
                observer.unobserve(elementRef.current);
            }
        };
    }, [threshold]);

    return { elementRef, isActive };
}

// Card component
export const Card = React.memo(
    ({ card }: { card: typeof EDUCATION_CARDS[0]}) => {
        const { elementRef, isActive } = useVisibility(0.8); // Use visibility detection

        return (card &&
            <div
                ref={elementRef}
                className={cn(
                    "rounded-lg relative bg-gray-500 overflow-hidden h-60 md:h-96 w-full max-w-[700px] transition-all duration-300 ease-out",
                    isActive ? "blur-none scale-100" : "blur-sm scale-[0.98]"
                )}
                style={{
                    transformOrigin: "top center",
                    backgroundImage: `url(${card.background})`,
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                }}
            >
                <div
                    className={cn(
                        "absolute inset-0 bg-black/50 flex items-end py-8 px-4 transition-opacity duration-300"
                    )}
                >
                    <div>
                        <p className="font-normal text-neutral-200">{card.duration}</p>
                        <p className="font-normal text-neutral-200">{card.institute}</p>
                        <p className="font-normal text-neutral-200">{card.description}</p>
                        <p className="text-xl md:text-2xl">{card.title}</p>
                    </div>
                </div>
            </div>
        );
    }
);

// FocusCards component
const FocusCards = () => {
    return (
        <div className="flex flex-wrap justify-center gap-10 max-w-5xl mx-auto md:px-8 w-full">
            {EDUCATION_CARDS.map((card) => (
                <Card key={card.id} card={card} />
            ))}
        </div>
    );
}

export default FocusCards;
