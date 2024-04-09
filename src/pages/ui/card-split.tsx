import React, {useState, useRef, useEffect} from 'react';

type Card = {
    institute: string;
    id: number;
    title: string;
    duration: string;
    description: any;
    background: string;
};

const CardsSplitDelay = ({
                              cards
                          }: {
    cards: Card[];
}) => {
    const [transition, setTransition] = useState(false);
    const cardsRef = useRef<HTMLUListElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.intersectionRatio >= 0.3) {
                    setTransition(true);
                } else {
                    setTransition(false);
                }
            },
            {
                root: null,
                threshold: 0.3
            }
        );

        if (cardsRef.current) {
            observer.observe(cardsRef.current);
        }

        return () => {
            if (cardsRef.current) {
                observer.unobserve(cardsRef.current);
            }
        };
    }, []);

    return (
        <ul
            ref={cardsRef}
            className={`items-center justify-center cards-split-delay ${transition ? 'transition' : ''}`}
            onClick={() => setTransition(!transition)}
        >
            {cards?.map((card, index) => {
                return (
                    <li
                        key={card.id}
                        className={`absolute bg-black h-80 w-1  md:h-80 md:w-96 rounded-3xl p-4 shadow-xl border border-neutral-200 dark:border-white/[0.1] shadow-white/[0.05] flex flex-col justify-between card card-${card.id}`}
                        style={{
                            transformOrigin: "top center",
                            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.8)), url(${card.background})`,
                            backgroundPosition: "center",
                            backgroundRepeat: 'no-repeat',
                            backgroundSize: 'cover'
                        }}
                    >
                        <div className="font-normal text-neutral-200">
                            {card.description}
                        </div>
                        <div>
                            <p className="text-neutral-500 font-medium">
                                {card.title}
                            </p>
                            <p className=" font-normal text-neutral-200">
                                {card.duration}
                            </p>
                            <p className=" font-normal text-neutral-200">
                                {card.institute}
                            </p>
                        </div>
                    </li>
                );
            })}
        </ul>
    );
};

export default CardsSplitDelay;
