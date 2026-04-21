"use client";
import { motion } from "framer-motion";

export default function CtaSection() {
    return (
        <section className="w-full bg-white pt-16 pb-20 px-4 md:px-12 flex justify-center shrink-0">
            <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 30 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                style={{ willChange: "transform, opacity" }}
                className="w-full max-w-[1100px] bg-[#1a1844] rounded-[20px] py-10 md:py-16 px-6 md:px-16 flex flex-col md:flex-row items-center justify-between gap-8 md:gap-4 shadow-2xl relative overflow-hidden"
            >

                {/* Inner Glow / Gradient Details */}
                <div className="absolute top-0 right-0 w-[50%] h-full bg-linear-to-l from-[#5a8bf5]/10 to-transparent pointer-events-none" />

                <h2 className="text-white font-bold text-[22px] md:text-[28px] lg:text-[34px] leading-[1.4] text-center md:text-left z-10 max-w-[600px] uppercase tracking-wide">
                    LAUNCHING SHORTLY — BUILT TO TRANSFORM YOUR EXPERIENCE.
                </h2>

                <button
                    suppressHydrationWarning
                    className="flex items-center group relative h-12 w-fit cursor-pointer shrink-0 z-10 overflow-hidden transition-all duration-700 rounded-[34px_34px_0px_34px] hover:rounded-[34px_34px_34px_0px]"
                >
                    <div className="absolute left-0 w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-md z-20 transition-all duration-700 ease-in-out group-hover:left-[calc(100%-48px)] group-hover:bg-linear-to-r group-hover:from-[#3799FA] group-hover:to-[#9961FB] group-hover:scale-105">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#3799FA" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 ml-0.5 transition-all duration-700 ease-in-out group-hover:text-white"><polyline points="9 18 15 12 9 6" /></svg>
                    </div>
                    <div className="pl-14 pr-8 h-full flex items-center text-white font-bold text-[15px] shadow-[0_8px_18px_rgba(55,153,250,0.25)] transition-all duration-700 ease-in-out bg-linear-to-r from-[#3799FA] to-[#9961FB] group-hover:from-white group-hover:to-white group-hover:text-black group-hover:pl-6 group-hover:pr-14 rounded-[34px_34px_0px_34px] group-hover:rounded-[34px_34px_34px_0px]">
                        Notify Me When Live
                    </div>
                </button>
            </motion.div>
        </section>
    );
}
