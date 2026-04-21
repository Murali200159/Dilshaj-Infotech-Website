"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Poppins } from "next/font/google";
import { ChevronRight, ArrowRight, ChevronsRight } from "lucide-react";
import { FaChevronRight } from "react-icons/fa6";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const poppins = Poppins({
    subsets: ["latin"],
    weight: ["300", "400", "500", "600", "700"],
});

const allCards = [
    {
        num: "01",
        title: "AI & Machine Learning",
        desc: "We design and deploy intelligent AI and ML solutions that automate processes, enhance decision-making, and unlock valuable insights from data. From predictive analytics to smart automation, our solutions help businesses innovate and scale faster.",
        img: "/Home/technologies/aiml.png"
    },
    {
        num: "02",
        title: "Web & App Development",
        desc: "We build high-performance, scalable web and mobile applications tailored to your business needs. Our solutions focus on speed, security, and user experience, ensuring reliable digital products that grow with your business.",
        img: "/Home/technologies/web.png"
    },
    {
        num: "03",
        title: "UI/UX Designing",
        desc: "Our UI/UX design services focus on creating intuitive, engaging, and user-centric experiences. We combine research, creativity, and usability principles to design interfaces that enhance user satisfaction and drive engagement.",
        img: "/services/UI/UX.png"
    },
    {
        num: "04",
        title: "Cloud & Digital Solutions",
        desc: "We deliver cloud-based and digital transformation solutions that improve agility, scalability, and operational efficiency. From cloud migration to system optimization, we help businesses embrace modern digital infrastructure.",
        img: "/Home/technologies/devops.png",
        imgPos: "object-top"
    },
    {
        num: "05",
        title: "Graphic Design",
        desc: "We craft visually captivating designs that communicate your brand's unique identity. From corporate branding to digital assets, we ensure consistency, clarity, and impact across all visual communications.",
        img: "/services/graphic.png"
    },
    {
        num: "06",
        title: "3D Design",
        desc: "From conceptualization to 3D modeling and visualization, we bring your ideas to life with high-quality 3D solutions. Our 3D solutions help product visualization, architectural models, and interactive designs.",
        img: "/services/design-3d.png"
    },
    {
        num: "07",
        title: "PR & Digital Marketing Agency",
        desc: "Our data-driven digital marketing solutions help expand your reach, and drive conversions. We ensure your brand connects with the right audience through strategic SEO, social media marketing, content strategy, and targeted advertising.",
        img: "/services/digital.png"
    },
    {
        num: "08",
        title: "Interior Design & Visualization",
        desc: "Our smart and scalable interior design solutions leverage advanced 3D & VR visualization tools. We help businesses and individuals bring spaces to life before they are built.",
        img: "/services/interior.png"
    },
    {
        num: "09",
        title: "Construction & Design Support",
        desc: "We offer end-to-end construction support services integrating design, planning, and execution. We ensure that structural designs are implemented with efficiency and precision.",
        img: "/services/construction.png"
    }
];

export default function ServicesSection() {
    const sectionRef = useRef<HTMLDivElement>(null);
    const ctxRef = useRef<gsap.Context | null>(null);
    const [showAll, setShowAll] = useState(false);

    // Initial GSAP Context setup
    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        ctxRef.current = gsap.context(() => { }, sectionRef);
        return () => ctxRef.current?.revert();
    }, []);

    // Apply animations to new items when state changes
    useEffect(() => {
        const timer = setTimeout(() => {
            ctxRef.current?.add(() => {
                // Desktop left column animations
                const lefts = gsap.utils.toArray<HTMLElement>(".anim-left").filter(el => !el.dataset.animated);
                lefts.forEach((item) => {
                    item.dataset.animated = "true";
                    gsap.fromTo(item,
                        { opacity: 0, y: 80 },
                        { opacity: 1, y: 0, duration: 1, ease: "power3.out", scrollTrigger: { trigger: item, start: "top 85%", toggleActions: "play none none reverse" } }
                    );
                });

                // Desktop right column animations
                const rights = gsap.utils.toArray<HTMLElement>(".anim-right").filter(el => !el.dataset.animated);
                rights.forEach((item) => {
                    item.dataset.animated = "true";
                    gsap.fromTo(item,
                        { opacity: 0, y: 120 },
                        { opacity: 1, y: 0, duration: 1, ease: "power3.out", scrollTrigger: { trigger: item, start: "top 85%", toggleActions: "play none none reverse" } }
                    );
                });

                // Mobile animations (Parallax effect from bottom)
                const mobiles = gsap.utils.toArray<HTMLElement>(".anim-mobile").filter(el => !el.dataset.animated);
                mobiles.forEach((item) => {
                    item.dataset.animated = "true";
                    gsap.fromTo(item,
                        { opacity: 0, y: 120 },
                        {
                            opacity: 1,
                            y: 0,
                            duration: 1.5,
                            ease: "power2.out",
                            scrollTrigger: {
                                trigger: item,
                                start: "top 95%",
                                end: "top 70%",
                                scrub: 1, // Smooth parallax tie-in 
                            }
                        }
                    );
                });

                ScrollTrigger.refresh();
            });
        }, 50);
        return () => clearTimeout(timer);
    }, [showAll]);

    const visibleCards = showAll ? allCards : allCards.slice(0, 4);

    return (
        <section
            ref={sectionRef}
            className={`${poppins.className} w-full bg-[#f0f4f9] text-[#111] relative overflow-hidden`}
        >
            <div className="w-full px-[5%] xl:px-[8%] mx-auto pt-10 pb-10 lg:pb-20 relative">

                {/* ── "What We Do" absolute ribbon attached to left edge ─── */}
                <div
                    className="absolute left-0 flex items-center gap-2 pl-4 pr-10 py-2.5 shadow-md z-10"
                    style={{
                        background: 'linear-gradient(to right, #029EFA, #0E4E8B)',
                        clipPath: 'polygon(0% 0%, 100% 0%, 88% 50%, 100% 100%, 0% 100%)',
                        top: '15px'
                    }}
                >
                    <div className="flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-white opacity-60" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-white -ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
                    </div>
                    <span className="text-white font-bold text-[18px] tracking-wider pr-4">What We Do</span>
                </div>

                {/* ── HEADER ────────────────────────────────────────────────── */}
                <div className="mb-12 sm:mb-20 mt-16 sm:mt-24">
                    <div className="flex flex-col lg:flex-row lg:items-end">
                        <h1 className="font-medium leading-[0.88] tracking-tight text-[#0a0a0a] shrink-0
                                       text-[42px] min-[360px]:text-[50px] min-[450px]:text-[70px] sm:text-[110px] lg:text-[140px] xl:text-[160px]">
                            Tech
                        </h1>
                        <p className="text-[#3b3a43] font-medium leading-[1.65] lg:ml-[30px] lg:pb-3 mt-4 lg:mt-0
                                      text-[14px] min-[450px]:text-[15px] lg:text-[17px] max-w-[420px]">
                            Crafting high-quality digital experiences that combine performance, innovation, and seamless usability.
                        </p>
                    </div>
                    <div className="flex flex-row items-center gap-2 min-[450px]:gap-4 mt-2 lg:mt-0">
                        <h1 className="font-medium leading-[0.88] tracking-tight text-[#0a0a0a] shrink-0
                                       text-[42px] min-[360px]:text-[50px] min-[450px]:text-[70px] sm:text-[100px] lg:text-[130px] xl:text-[150px]">
                            Innovation
                        </h1>
                        <span className="inline-block bg-[#a55df6] text-white text-[10px] min-[360px]:text-[12px] min-[450px]:text-[13px] lg:text-[14px]
                                         font-medium py-1 px-3 min-[360px]:px-4 min-[450px]:py-1.5 min-[450px]:px-6 rounded-full shadow-md ml-1 min-[450px]:ml-4 shrink-0">
                            Services
                        </span>
                    </div>
                </div>

                {/* ── MOBILE LAYOUT (Stack) ── */}
                <div className="flex flex-col gap-16 lg:hidden">
                    {visibleCards.map((card, i) => (
                        <div key={`mobile-${i}`} className="flex flex-col gap-6 anim-mobile">
                            <ImageBlock src={card.img} alt={card.title} imgPos={card.imgPos} />
                            <ContentBlock number={card.num} title={card.title} description={card.desc} />
                        </div>
                    ))}
                </div>

                {/* 
                  ── DESKTOP MASONRY/STAGGERED LAYOUT ── 
                  Matches Image 2 exactly dynamically based on visibleCards length!
                */}
                <div className="hidden lg:grid grid-cols-2 gap-x-[60px] xl:gap-x-[100px] items-start relative">

                    {/* LEFT COLUMN: Even Index Images, Odd Index Texts */}
                    <div className="flex flex-col gap-y-[120px] xl:gap-y-[150px]">
                        {visibleCards.map((card, i) => {
                            const isEven = i % 2 === 0;
                            return (
                                <div key={`left-${i}`} className={`anim-left ${!isEven ? 'flex items-center h-full' : ''}`}>
                                    {isEven ? (
                                        <ImageBlock src={card.img} alt={card.title} imgPos={card.imgPos} />
                                    ) : (
                                        <ContentBlock number={card.num} title={card.title} description={card.desc} />
                                    )}
                                </div>
                            );
                        })}
                    </div>

                    {/* RIGHT COLUMN: Even Index Texts, Odd Index Images */}
                    <div className="flex flex-col gap-y-[120px] xl:gap-y-[150px] pt-[30px] xl:pt-[50px]">
                        {visibleCards.map((card, i) => {
                            const isEven = i % 2 === 0;
                            return (
                                <div key={`right-${i}`} className={`anim-right ${isEven ? 'flex items-center h-full' : ''}`}>
                                    {isEven ? (
                                        <ContentBlock number={card.num} title={card.title} description={card.desc} />
                                    ) : (
                                        <ImageBlock src={card.img} alt={card.title} imgPos={card.imgPos} />
                                    )}
                                </div>
                            );
                        })}
                    </div>

                </div>

                {/* ── View All / View Less ─────────────────────────────────────────────── */}
                <div className="flex justify-center mt-12 lg:mt-24 mb-4">
                    <button
                        suppressHydrationWarning
                        onClick={() => setShowAll(!showAll)}
                        className="group relative h-12 w-fit cursor-pointer overflow-hidden transition-all duration-700 rounded-[34px_34px_0px_34px] hover:rounded-[34px_34px_34px_0px] shadow-xl"
                    >
                        <div className="absolute left-0 w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-md z-20 transition-all duration-700 ease-in-out group-hover:left-[calc(100%-48px)] group-hover:bg-linear-to-r group-hover:from-[#3799FA] group-hover:to-[#9961FB] group-hover:scale-105">
                            <ArrowRight className={`w-4 h-4 text-[#3799FA] transition-all duration-700 ease-in-out group-hover:text-white ${showAll ? '-rotate-90' : 'rotate-90'}`} />
                        </div>
                        <div className="pl-14 pr-8 h-full py-3 flex items-center text-white font-bold text-[15px] transition-all duration-700 ease-in-out bg-linear-to-r from-[#3799FA] to-[#9961FB] group-hover:from-white group-hover:to-white group-hover:text-black group-hover:pl-6 group-hover:pr-14 rounded-[34px_34px_0px_34px] group-hover:rounded-[34px_34px_34px_0px]">
                            {showAll ? "View Less" : "View All"}
                        </div>
                    </button>
                </div>

            </div>
        </section>
    );
}

// Separate beautifully styled div for Image Block to match exact dimensions
function ImageBlock({ src, alt, imgPos = "object-center" }: { src: string; alt: string; imgPos?: string }) {
    return (
        <div className="relative w-full aspect-660/640 rounded-[16px] overflow-hidden shadow-2xl">
            <Image src={src} alt={alt} fill className={`object-cover transition-transform duration-700 hover:scale-105 ${imgPos}`} sizes="(min-width: 1024px) 50vw, 100vw" />
        </div>
    );
}

// Separate perfectly structured Content Block div
function ContentBlock({ number, title, description }: { number: string; title: string; description: string; }) {
    return (
        <div className="flex flex-col items-start w-full pr-4 pb-10">
            <div className="flex items-center gap-4 mb-6">
                <div className="shrink-0 w-11 h-11 rounded-full bg-[#418cf5]
                                flex items-center justify-center shadow-lg">
                    <span className="text-white font-bold text-[15px] leading-none">{number}</span>
                </div>
                <h2 className="text-[26px] xl:text-[32px] font-bold text-[#0d0d0d] leading-tight">
                    {title}
                </h2>
            </div>

            <p className="text-[#4b4a53] text-[15.5px] font-normal leading-[1.85] mb-8">
                {description}
            </p>

            <button
                suppressHydrationWarning
                className="group relative h-12 w-fit cursor-pointer overflow-hidden transition-all duration-700 rounded-[34px_34px_0px_34px] hover:rounded-[34px_34px_34px_0px] shadow-xl"
            >
                <div className="absolute left-0 w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-md z-20 transition-all duration-700 ease-in-out group-hover:left-[calc(100%-48px)] group-hover:bg-linear-to-r group-hover:from-[#3799FA] group-hover:to-[#9961FB] group-hover:scale-105">
                    <FaChevronRight className="w-4 h-4 text-[#3799FA] transition-all duration-700 ease-in-out group-hover:text-white" />
                </div>
                <div className="pl-14 pr-8 h-full py-3 flex items-center text-white font-bold text-[15px] transition-all duration-700 ease-in-out bg-linear-to-r from-[#3799FA] to-[#9961FB] group-hover:from-white group-hover:to-white group-hover:text-black group-hover:pl-6 group-hover:pr-14 rounded-[34px_34px_0px_34px] group-hover:rounded-[34px_34px_34px_0px]">
                    Know More
                </div>
            </button>
        </div>
    );
}
