"use client";

import React from "react";
import Image from "next/image";
import { ChevronRight, MapPin } from "lucide-react";
import { Poppins } from "next/font/google";

const poppins = Poppins({
    subsets: ["latin"],
    weight: ["400", "500", "600", "700", "800"],
});

/* ── Paper Airplane ──────────────────────────────── */
function PaperAirplane({ className = "" }: { className?: string }) {
    return (
        <svg className={className} viewBox="0 0 52 44" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M1 22L51 2L38 42L23 27L17 35L15 25L1 22Z"
                fill="#bfdbfe"
                stroke="#60a5fa"
                strokeWidth="1.5"
                strokeLinejoin="round"
            />
            <path d="M15 25L51 2" stroke="#3b82f6" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
    );
}

/* ── Flight Path SVG ─────────────────────────────── */
function FlightPath({ className = "" }: { className?: string }) {
    return (
        <svg
            className={className}
            viewBox="0 0 1000 100"
            preserveAspectRatio="none"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            {/* Enters from left → left spiral */}
            <path
                d="M0 55 C25 55, 50 75, 72 62 C90 52, 92 70, 105 60 C118 50, 106 36, 93 44 C80 52, 85 66, 100 64"
                stroke="#1e293b" strokeWidth="1.6" strokeLinecap="round" fill="none"
            />
            {/* Sweep across centre */}
            <path
                d="M100 64 C200 58, 380 62, 500 60 C620 58, 780 60, 900 56"
                stroke="#1e293b" strokeWidth="1.6" strokeLinecap="round" fill="none"
            />
            {/* Right spiral → exits right */}
            <path
                d="M900 56 C918 50, 940 36, 952 48 C964 60, 956 76, 942 74 C928 72, 924 58, 940 54 C954 50, 970 60, 980 53 C990 46, 998 52, 1000 50"
                stroke="#1e293b" strokeWidth="1.6" strokeLinecap="round" fill="none"
            />
        </svg>
    );
}

/* ── Component ───────────────────────────────────── */
export default function Launch() {
    return (
        <section
            className={`
                ${poppins.className}
                w-full
                bg-linear-to-b from-white via-slate-50 to-sky-100/80
                px-2 sm:px-3 lg:px-4
                pt-6 sm:pt-8 lg:pt-10
                pb-8 sm:pb-10 lg:pb-14
            `}
        >
            {/* ── Centred card ── */}
            <div className="w-full max-w-[1400px] mx-auto">

                {/* World map card */}
                <div className="
                    relative w-full overflow-hidden
                    bg-white rounded-xl
                    border border-gray-200
                    shadow-sm
                    h-[130px] sm:h-[160px] lg:h-[190px]
                ">
                    {/* Background image */}
                    <Image
                        src="/products/security/launch.png"
                        alt="World Map"
                        fill
                        className="object-cover object-center"
                        priority
                    />

                    {/* Bottom fade */}
                    <div className="absolute inset-x-0 bottom-0 h-10 bg-linear-to-t from-white/60 to-transparent pointer-events-none" />

                    {/* Red location pins */}
                    <div className="absolute z-10" style={{ top: "25%", left: "15%" }}>
                        <MapPin size={16} fill="#ef4444" className="text-red-500 drop-shadow" strokeWidth={1.5} />
                    </div>
                    <div className="absolute z-10" style={{ top: "20%", left: "40%" }}>
                        <MapPin size={20} fill="#ef4444" className="text-red-500 drop-shadow" strokeWidth={1.5} />
                    </div>
                    <div className="absolute z-10" style={{ top: "22%", left: "64%" }}>
                        <MapPin size={16} fill="#ef4444" className="text-red-500 drop-shadow" strokeWidth={1.5} />
                    </div>

                    {/* Flight path */}
                    <FlightPath className="absolute inset-0 w-full h-full opacity-90" />

                    {/* Left paper airplane */}
                    <div className="absolute z-10 -rotate-6" style={{ top: "44%", left: "22%" }}>
                        <PaperAirplane className="w-9 h-8 sm:w-11 sm:h-10" />
                    </div>

                    {/* Right paper airplane */}
                    <div className="absolute z-10 rotate-3" style={{ top: "40%", left: "64%" }}>
                        <PaperAirplane className="w-9 h-8 sm:w-11 sm:h-10" />
                    </div>
                </div>

                {/* ── Separator ── */}
                <div className="w-full h-px bg-gray-200 mt-0" />

                {/* ── Button below card ── */}
                <div className="flex justify-center pt-6 sm:pt-8">
                        <button
                            suppressHydrationWarning
                            className="flex items-center group relative h-12 w-fit cursor-pointer overflow-hidden transition-all duration-700 rounded-[34px_34px_0px_34px] hover:rounded-[34px_34px_34px_0px]"
                        >
                            <div className="absolute left-0 w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-md z-20 transition-all duration-700 ease-in-out group-hover:left-[calc(100%-48px)] group-hover:bg-linear-to-r group-hover:from-[#3799FA] group-hover:to-[#9961FB] group-hover:scale-105">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#3799FA" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 ml-0.5 transition-all duration-700 ease-in-out group-hover:text-white"><polyline points="9 18 15 12 9 6" /></svg>
                            </div>
                            <div className="pl-14 pr-8 h-full flex items-center text-white font-bold text-[15px] shadow-[0_8px_18px_rgba(55,153,250,0.25)] transition-all duration-700 ease-in-out bg-linear-to-r from-[#3799FA] to-[#9961FB] group-hover:from-white group-hover:to-white group-hover:text-black group-hover:pl-6 group-hover:pr-14 rounded-[34px_34px_0px_34px] group-hover:rounded-[34px_34px_34px_0px]">
                                Notify Me When Live
                            </div>
                        </button>
                </div>

            </div>
        </section>
    );
}
