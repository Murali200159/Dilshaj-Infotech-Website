"use client";

import { useRef, useEffect } from "react";
import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./ChromaGrid.css";

if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
}

const solutions = [
    {
        title: "Custom AI/ML Development",
        description: "We design and develop tailored AI solutions that automate workflows and improve operational efficiency.",
        img: "/about/advanced/ai1.png",
        color: "#3B82F6", // Blue
    },
    {
        title: "Generative AI & LLM Solutions",
        description: "Building intelligent chatbots, content automation systems, and AI-powered assistants for smarter engagement.",
        img: "/about/advanced/ai2.png",
        color: "#10B981", // Emerald
    },
    {
        title: "Computer Vision Solutions",
        description: "Implementing AI-driven image processing and visual intelligence systems for real-world applications.",
        img: "/about/advanced/ai3.png",
        color: "#F59E0B", // Amber
    },
    {
        title: "AI-Powered App Development",
        description: "Integrating AI into web and mobile applications to deliver smarter user experiences.",
        img: "/about/advanced/ai4.png",
        color: "#EC4899", // Pink
    },
    {
        title: "AI Agents & Process Automation",
        description: "Developing intelligent agents and automation systems to streamline business operations.",
        img: "/about/advanced/ai5.png",
        color: "#8B5CF6", // Violet
    },
    {
        title: "Voice & Speech Solutions",
        description: "Creating speech recognition and voice-enabled applications for interactive digital experiences.",
        img: "/about/advanced/ai6.png",
        color: "#14B8A6", // Teal
    },
    {
        title: "Cloud-Based AI Deployment",
        description: "Deploying secure, scalable AI systems on modern cloud infrastructure.",
        img: "/about/advanced/ai7.png",
        color: "#06B6D4", // Cyan
    },
    {
        title: "AI Strategy & Technology Consulting",
        description: "Helping businesses identify AI opportunities and implement solutions aligned with growth objectives.",
        img: "/about/advanced/ai8.png",
        color: "#F43F5E", // Rose
    },
];

export default function AISolutions() {
    const container = useRef<HTMLDivElement>(null);
    const gridRef = useRef<HTMLDivElement>(null);
    const fadeRef = useRef<HTMLDivElement>(null);
    const setX = useRef<((value: number) => void) | null>(null);
    const setY = useRef<((value: number) => void) | null>(null);
    const pos = useRef({ x: 0, y: 0 });

    const damping = 0.45;
    const fadeOut = 0.6;
    const ease = 'power3.out';

    // Initialize ChromaGrid GSAP QuickSetters
    useEffect(() => {
        const el = gridRef.current;
        if (!el) return;
        setX.current = gsap.quickSetter(el, '--x', 'px') as (value: number) => void;
        setY.current = gsap.quickSetter(el, '--y', 'px') as (value: number) => void;
        const { width, height } = el.getBoundingClientRect();
        pos.current = { x: width / 2, y: height / 2 };
        if (setX.current) setX.current(pos.current.x);
        if (setY.current) setY.current(pos.current.y);
    }, []);

    const moveTo = (x: number, y: number) => {
        gsap.to(pos.current, {
            x,
            y,
            duration: damping,
            ease,
            onUpdate: () => {
                if (setX.current) setX.current(pos.current.x);
                if (setY.current) setY.current(pos.current.y);
            },
            overwrite: true
        });
    };

    const handleGridMove = (e: React.PointerEvent) => {
        if (!gridRef.current) return;
        const r = gridRef.current.getBoundingClientRect();
        moveTo(e.clientX - r.left, e.clientY - r.top);
        if (fadeRef.current) {
            gsap.to(fadeRef.current, { opacity: 0, duration: 0.25, overwrite: true });
        }
    };

    const handleGridLeave = () => {
        if (fadeRef.current) {
            gsap.to(fadeRef.current, {
                opacity: 1,
                duration: fadeOut,
                overwrite: true
            });
        }
    };

    const handleCardMove = (e: React.MouseEvent) => {
        const card = e.currentTarget as HTMLElement;
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        card.style.setProperty('--mouse-x', `${x}px`);
        card.style.setProperty('--mouse-y', `${y}px`);
    };

    useGSAP(() => {
        // Heading animation
        gsap.fromTo(".ai-heading",
            { y: 40, opacity: 0 },
            {
                scrollTrigger: {
                    trigger: container.current,
                    start: "top 85%",
                },
                y: 0,
                opacity: 1,
                duration: 1,
                ease: "power3.out"
            }
        );

        // Solution cards animation
        gsap.fromTo(".ai-solution-card",
            { y: 50, opacity: 0 },
            {
                scrollTrigger: {
                    trigger: container.current,
                    start: "top 80%",
                },
                y: 0,
                opacity: 1,
                stagger: 0.1,
                duration: 0.8,
                ease: "power2.out",
                immediateRender: false
            }
        );
    }, { scope: container });

    return (
        <section ref={container} className="bg-black py-24 px-6 md:px-12 lg:px-10 xl:px-20 border-t border-zinc-800/30">
            <div className="ai-heading max-w-[1550px] mx-auto text-center mb-16 space-y-4 relative z-20">
                <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
                    Advanced AI & Digital Solutions for Business Growth
                </h2>
                <p className="text-gray-400 text-lg max-w-3xl mx-auto leading-relaxed">
                    Delivering intelligent, scalable, and performance-driven technology solutions tailored to modern business needs
                </p>
            </div>

            <div className="max-w-[1550px] mx-auto">
                {/* ChromaGrid container wrapping the cards */}
                <div
                    ref={gridRef}
                    className="chroma-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 justify-items-center"
                    onPointerMove={handleGridMove}
                    onPointerLeave={handleGridLeave}
                >
                    {solutions.map((item, index) => (
                        <div
                            key={index}
                            className="chroma-card ai-solution-card bg-[#111111] border border-zinc-800/50 rounded-[24px] p-8 flex flex-col items-start gap-6 hover:shadow-[0_0_30px_rgba(var(--card-color-rgb),0.1)] transition-all duration-300 w-full max-w-[380px] lg:h-[343px] group"
                            style={{
                                '--card-color': item.color,
                            } as React.CSSProperties}
                            onMouseMove={handleCardMove}
                        >
                            <div className="icon-box w-12 h-12 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center shrink-0 transition-all duration-500 z-10 relative group-hover:bg-[#111111]">
                                <Image
                                    src={item.img}
                                    alt={item.title}
                                    width={24}
                                    height={24}
                                    className="icon-svg object-contain brightness-0 invert transition-all duration-500"
                                />
                            </div>
                            <div className="space-y-4 z-10 relative pointer-events-none">
                                <h3 className="text-xl font-bold text-white leading-tight">
                                    {item.title}
                                </h3>
                                <div className="max-h-[140px] overflow-y-auto pr-1 md:max-h-none md:overflow-visible">
                                    <p className="text-gray-400 text-sm leading-relaxed">
                                        {item.description}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}

                    {/* Global Mask Overlays */}
                    <div className="chroma-overlay rounded-[32px]" />
                    <div ref={fadeRef} className="chroma-fade rounded-[32px]" />
                </div>
            </div>
        </section>
    );
}
