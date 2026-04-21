"use client";

import Image from "next/image";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
}
import {
    Zap,
    ShieldCheck,
    Layers,
    TrendingUp,
    Link,
    BarChart3
} from "lucide-react";

const features = [
    {
        title: "Strong Engineering Foundation",
        description: "Modern and secure app & web development solutions built to help businesses grow with confidence.",
        img: "/about/growing/engineering.png",
    },
    {
        title: "Agile & Adaptive Execution",
        description: "We move fast without compromising quality — delivering efficient solutions tailored to evolving business needs.",
        img: "/about/growing/alige.png",
    },
    {
        title: "End-to-End Development Approach",
        description: "From strategy and design to deployment and support, we manage the complete digital journey.",
        img: "/about/growing/approach.png",
    },
    {
        title: "Solutions Built to Scale",
        description: "Our systems are designed to grow with your business — adaptable, flexible, and future-ready.",
        img: "/about/growing/scale-up.png",
    },
    {
        title: "Seamless System Integration",
        description: "We ensure smooth integration with your existing tools, platforms, and workflows.",
        img: "/about/growing/integration.png",
    },
    {
        title: "Results That Matter",
        description: "Every solution is built with measurable performance, user experience, and business impact in mind.",
        img: "/about/growing/result.png",
    },
];

export default function WhyChooseUs() {
    const container = useRef(null);

    useGSAP(() => {
        // Left Content (Text)
        gsap.fromTo(".why-choose-left",
            { x: -60, opacity: 0 },
            {
                scrollTrigger: {
                    trigger: container.current,
                    start: "top 85%",
                },
                x: 0,
                opacity: 1,
                duration: 1,
                ease: "power3.out"
            }
        );

        // Image animation
        gsap.fromTo(".why-choose-image",
            { scale: 0.9, opacity: 0 },
            {
                scrollTrigger: {
                    trigger: container.current,
                    start: "top 80%",
                },
                scale: 1,
                opacity: 1,
                duration: 1.2,
                ease: "expo.out",
                immediateRender: false
            }
        );

        // Feature list items animation
        gsap.fromTo(".feature-list-item",
            { y: 40, opacity: 0 },
            {
                scrollTrigger: {
                    trigger: container.current,
                    start: "top 85%",
                },
                y: 0,
                opacity: 1,
                stagger: 0.15,
                duration: 0.8,
                ease: "power2.out",
                immediateRender: false
            }
        );
    }, { scope: container });

    return (
        <section ref={container} className="bg-black py-24 px-6 md:px12 lg:px-20 overflow-hidden">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">

                    {/* Left Column: Heading, Text, Visual */}
                    <div className="why-choose-left space-y-12">
                        <div className="max-w-2xl text-center lg:text-left mx-auto lg:mx-0">
                            <h2 className="text-4xl md:text-3xl font-semibold text-white leading-tight">
                                Why Growing Businesses Choose <br className="hidden lg:block" />
                                us for Digital Innovation?
                            </h2>
                            <p className="text-gray-400 text-lg mt-6 leading-relaxed">
                                Combining modern technology expertise with practical business understanding to deliver scalable, secure, and performance-driven digital solutions.
                            </p>
                        </div>

                        {/* Visual Asset Section */}
                        <div className="why-choose-image relative group rounded-[27px] overflow-hidden border border-zinc-800/50 aspect-4/3">
                            <Image
                                src="/about/innovation.png"
                                alt="AI Innovation"
                                fill
                                className="object-cover"
                                priority
                            />
                        </div>
                    </div>

                    {/* Right Column: Feature List */}
                    <div className="space-y-10 lg:pt-4">
                        {features.map((feature, index) => (
                            <div
                                key={index}
                                className="feature-list-item flex items-start gap-6 group transition-all duration-300"
                            >
                                <div className="w-12 h-12 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center shrink-0 group-hover:bg-zinc-800 group-hover:border-zinc-700 transition-colors">
                                    <Image
                                        src={feature.img}
                                        alt={feature.title}
                                        width={24}
                                        height={24}
                                        className="object-contain brightness-0 invert"
                                    />
                                </div>
                                <div>
                                    <h3 className="text-xl font-semibold text-white group-hover:text-blue-400 transition-colors">
                                        {feature.title}
                                    </h3>
                                    <p className="text-gray-400 mt-2 leading-relaxed">
                                        {feature.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>

                </div>
            </div>
        </section>
    );
}
