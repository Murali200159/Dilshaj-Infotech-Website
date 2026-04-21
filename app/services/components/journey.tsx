"use client";
import React, { useEffect, useRef } from "react";
import { Poppins } from "next/font/google";
import { ChevronRight } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const poppins = Poppins({
    subsets: ["latin"],
    weight: ["300", "400", "500", "600", "700"],
});

export default function Journey() {
    const sectionRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        const ctx = gsap.context(() => {
            gsap.from(".gsap-journey-content", {
                y: 40,
                opacity: 0,
                duration: 1,
                stagger: 0.15,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 92%",
                    onEnter: () => ScrollTrigger.refresh()
                }
            });
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={sectionRef} className={`${poppins.className} w-full bg-white relative overflow-hidden py-16 md:py-20 pb-24 md:pb-32`}>
            <div className="w-full px-[5%] xl:px-[8%] mx-auto">

                {/* ── BANNER CARD ────────────────────────────────────────── */}
                <div
                    className="relative w-full rounded-2xl md:rounded-[36px] min-h-[520px] md:min-h-[380px] lg:min-h-[440px] flex flex-col md:flex-row items-center justify-end md:justify-start shadow-xl mx-auto overflow-hidden bg-[#0B1120]"
                >
                    {/* Background layers wrapper */}
                    <div className="absolute inset-0 pointer-events-none bg-center bg-cover bg-no-repeat z-0 opacity-60"
                        style={{ backgroundImage: "url('/services/technology.png')" }}>
                    </div>

                    {/* Content Component */}
                    <div className="relative z-10 w-full md:w-[60%] lg:w-[50%] p-5 sm:p-12 lg:p-16 flex flex-col items-center text-center md:items-start md:text-left gap-3 md:gap-5 lg:gap-6 mt-auto md:mt-0 pb-10 md:pb-0 pt-8 sm:pt-12">
                        <h2 className="gsap-journey-content text-white text-[24px] sm:text-[40px] lg:text-[44px] xl:text-[48px] font-bold leading-[1.3] md:leading-[1.15] tracking-wide md:pr-4 mx-auto md:mx-0 w-full sm:w-full">
                            Start your journey toward<br className="md:hidden" />
                            smarter technology today
                        </h2>

                        <p className="gsap-journey-content text-[#d8e0ea] text-[13.5px] lg:text-[17px] font-normal leading-[1.65] max-w-[460px] pb-3 mx-auto md:mx-0 px-2 md:px-0 mt-1">
                            Our team is ready to guide you with<br className="md:hidden" /> innovative solutions tailored to your<br className="md:hidden" /> business needs.
                        </p>

                        <button suppressHydrationWarning className="gsap-journey-content flex items-center bg-linear-to-r from-[#6b8bf5] to-[#a06dfa]
                                           rounded-full p-[3.5px] pr-5 hover:shadow-[0_4px_18px_rgba(140,82,234,0.35)]
                                           active:scale-95 transition-all duration-300 w-fit mx-auto md:mx-0 mt-2 md:mt-0">
                            <div className="bg-white rounded-full w-[34px] h-[34px] md:w-[40px] md:h-[40px] mr-3
                                            flex items-center justify-center shrink-0">
                                <ChevronRight className="w-[16px] h-[16px] md:w-[18px] md:h-[18px] text-[#2c2b33] stroke-[3.5]" />
                            </div>
                            <span className="text-white text-[13.5px] md:text-[14px] font-semibold tracking-wide">Contact Now</span>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}
