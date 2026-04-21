"use client";

import React, { useRef, useState } from "react";
import { motion, useAnimationFrame, useMotionValue, useTransform } from "framer-motion";
import Image from "next/image";

// Sample Data using existing project images
const CARDS = [
    { id: 1, title: "Modern Business Architecture", image: "/industry-solutions/business.png" },
    { id: 2, title: "Financial Growth & ROI", image: "/industry-solutions/growth.png" },
    { id: 3, title: "Digital Retail and E-commerce", image: "/industry-solutions/ecommerce.png" },
    { id: 4, title: "Future of Healthcare Technology", image: "/industry-solutions/healthcare.png" },
    { id: 5, title: "Gourmet & Dining Experience", image: "/industry-solutions/food.png" },
    { id: 6, title: "AI and Machine Learning Modeling", image: "/industry-solutions/business.png" },
    { id: 7, title: "Cloud Scale Infrastructure Solutions", image: "/industry-solutions/growth.png" },
    { id: 8, title: "Cybersecurity Ecosystems & Policies", image: "/industry-solutions/ecommerce.png" },
];

const CARD_WIDTH = 320;
const CARD_HEIGHT = 450;
const SPACING = 350; // Distance between cards horizontally
const TRACK_WIDTH = CARDS.length * SPACING;

export default function ConvexCarousel() {
    const scrollX = useMotionValue(0);
    const [isHovered, setIsHovered] = useState(false);

    useAnimationFrame((time, delta) => {
        if (!isHovered) {
            // Speed of scroll (pixels per ms). Adjust for faster/slower scroll.
            scrollX.set(scrollX.get() - (delta * 0.15));
        }
    });

    return (
        <section className="relative w-full py-32 bg-slate-950 overflow-hidden"
            style={{ perspective: "1500px" }}>
            <div className="max-w-[1920px] mx-auto flex flex-col items-center">
                <div className="text-center mb-24 space-y-4">
                    <h2 className="text-4xl md:text-6xl font-bold text-white tracking-tight">
                        Explore Our <span className="text-[#3799FA]">3D Solutions</span>
                    </h2>
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                        Swipe or hover over our interactive curved carousel to discover industry-leading digital products engineered for the future.
                    </p>
                </div>

                <div
                    className="relative w-full h-[500px] flex items-center justify-center pointer-events-auto transform-gpu"
                    style={{ transformStyle: "preserve-3d" }}
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                >
                    {CARDS.map((card, index) => (
                        <CarouselCard
                            key={card.id}
                            card={card}
                            index={index}
                            scrollX={scrollX}
                        />
                    ))}
                </div>
            </div>

            {/* Background radial gradient to give it a cinematic stage feel */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[600px] bg-blue-500/10 rounded-full blur-[120px] pointer-events-none -z-10" />
        </section>
    );
}

function CarouselCard({ card, index, scrollX }: { card: any, index: number, scrollX: any }) {
    const baseX = index * SPACING;

    const xOffset = useTransform(scrollX, (latest: number) => {
        // secure positive modulo equivalent
        const globalX = ((baseX + latest) % TRACK_WIDTH + TRACK_WIDTH) % TRACK_WIDTH;
        return globalX > TRACK_WIDTH / 2 ? globalX - TRACK_WIDTH : globalX;
    });

    // Math mappings for a smooth convex curve
    const halfTrack = TRACK_WIDTH / 2;
    const quarterTrack = TRACK_WIDTH / 4;

    const inRange = [-halfTrack, -quarterTrack, 0, quarterTrack, halfTrack];

    // Scale: 1 at center, ~0.6 at edges
    const scale = useTransform(xOffset, inRange, [0.6, 0.85, 1, 0.85, 0.6]);

    // RotateY: negative on right to face left, positive on left to face right
    const rotateY = useTransform(xOffset, inRange, [60, 30, 0, -30, -60]);

    // translateZ: maximum near center, push back at edges
    const z = useTransform(xOffset, inRange, [-600, -150, 0, -150, -600]);

    // Opacity: fade out completely at the very edges to make looping seamless
    const opacity = useTransform(xOffset,
        [-halfTrack, -halfTrack + 200, 0, halfTrack - 200, halfTrack],
        [0, 1, 1, 1, 0]
    );

    return (
        <motion.div
            className="absolute top-1/2 left-1/2 rounded-[32px] overflow-hidden shadow-2xl group cursor-pointer border border-white/10 bg-black"
            style={{
                width: CARD_WIDTH,
                height: CARD_HEIGHT,
                marginLeft: -CARD_WIDTH / 2, // Centered using absolute positioning
                marginTop: -CARD_HEIGHT / 2,
                x: xOffset,
                scale,
                rotateY,
                z,
                opacity,
            }}
            whileHover={{ scale: 1.05, y: -10 }}
            transition={{ duration: 0.3 }}
        >
            <Image src={card.image} fill className="object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500" alt={card.title} />

            {/* Dark gradient overlay matching standard modern aesthetics */}
            <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/40 to-black/10 transition-opacity duration-500" />

            {/* Glow on hover */}
            <div className="absolute inset-x-0 bottom-0 h-1/2 bg-linear-to-t from-[#3799FA]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-2xl" />

            {/* Text block */}
            <div className="absolute bottom-8 left-8 right-8 z-20">
                <h3 className="text-white text-[22px] font-bold leading-tight mb-2 group-hover:text-[#3799FA] transition-colors">{card.title}</h3>
                <div className="max-h-[120px] overflow-y-auto md:max-h-none md:overflow-visible pr-1">
                    <p className="text-gray-300 text-sm opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-300 line-clamp-none md:line-clamp-2">
                        Discover cutting-edge strategies and innovations optimized perfectly for maximum scalable growth.
                    </p>
                </div>
            </div>

            {/* Frame boundary glow for glassmorphism */}
            <div className="absolute inset-0 rounded-[32px] ring-1 ring-inset ring-white/10 group-hover:ring-[#3799FA]/50 transition-all duration-500" />
        </motion.div>
    );
}
