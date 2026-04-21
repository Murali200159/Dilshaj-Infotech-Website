"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import aboutImage from "../images/about-bg.png";

export default function AboutSection() {
    return (
        <section className="relative w-full bg-[#FFFFFF] py-16 lg:py-28 flex flex-col items-center overflow-hidden shrink-0">

            {/* Ribbon */}
            <div
                className="absolute top-8 lg:top-12 left-0 flex items-center gap-2 pl-4 pr-12 lg:pr-16 py-2.5 lg:py-3 shadow-md z-10"
                style={{
                    background: 'linear-gradient(to right, #029EFA, #0E4E8B)',
                    clipPath: 'polygon(0% 0%, 100% 0%, 88% 50%, 100% 100%, 0% 100%)'
                }}
            >
                <div className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-white opacity-60" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-white -ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
                </div>
                <span className="text-white font-bold text-[18px] tracking-wider pr-4">About</span>
            </div>

            <div className="w-full max-w-[1300px] mx-auto px-6 lg:px-12 mt-20 lg:mt-6 flex flex-col lg:grid lg:grid-cols-2 gap-10 lg:gap-16 lg:items-center">

                {/* IMAGE PORTION (Order 2 Mobile, Order 1 Desktop) */}
                <motion.div
                    initial={{ opacity: 0, x: -80 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                    className="order-2 lg:order-1 relative w-full h-[300px] sm:h-[400px] lg:h-[450px]"
                    style={{ clipPath: "polygon(0 0, 100% 0, 85% 100%, 0% 100%)", willChange: "transform, opacity" }}
                >
                    <Image
                        src={aboutImage}
                        alt="City Network Buildings"
                        fill
                        className="object-cover"
                    />
                </motion.div>

                {/* TEXT & DESKTOP BUTTON PORTION (Order 1 Mobile, Order 2 Desktop) */}
                <motion.div
                    initial={{ opacity: 0, x: 80 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
                    style={{ willChange: "transform, opacity" }}
                    className="order-1 lg:order-2 flex flex-col items-center lg:items-start text-center lg:text-left px-2 sm:px-4 lg:px-0 mt-4 lg:mt-0"
                >

                    {/* Title */}
                    <h2
                        className="text-[#000000] font-semibold"
                        style={{
                            fontSize: "clamp(25px, 4vw, 50px)",
                            lineHeight: "116%",
                            letterSpacing: "-1.5%"
                        }}
                    >
                        Architecture &amp; Design Platform
                    </h2>

                    {/* Subtitle (Desktop only, based on designs) */}
                    <h3
                        className="hidden lg:block text-[#000000] font-medium mt-5"
                        style={{
                            fontSize: "30px",
                            lineHeight: "116%",
                            letterSpacing: "-1.5%"
                        }}
                    >
                        Innovating the Future of Design.
                    </h3>

                    {/* Paragraph */}
                    <p
                        className="text-[#000000] mt-6 lg:mt-8 max-w-[650px]"
                        style={{
                            fontSize: "clamp(14px, 2vw, 20px)",
                            lineHeight: "165%",
                            letterSpacing: "2%"
                        }}
                    >
                        The Architecture &amp; Design Platform is an upcoming digital solution designed to modernize architectural planning and structural design processes. By integrating advanced visualization tools, collaborative workflows, and real-time project tracking, the platform empowers architects, engineers, and construction teams to work efficiently and creatively.
                    </p>

                    {/* Desktop Button */}
                    <button
                        suppressHydrationWarning
                        className="hidden lg:flex items-center group relative h-12 w-fit cursor-pointer mt-10 overflow-hidden transition-all duration-700 rounded-[34px_34px_0px_34px] hover:rounded-[34px_34px_34px_0px]"
                    >
                        <div className="absolute left-0 w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-md z-20 transition-all duration-700 ease-in-out group-hover:left-[calc(100%-48px)] group-hover:bg-linear-to-r group-hover:from-[#3799FA] group-hover:to-[#9961FB] group-hover:scale-105">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#3799FA" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 ml-0.5 transition-all duration-700 ease-in-out group-hover:text-white"><polyline points="9 18 15 12 9 6" /></svg>
                        </div>
                        <div className="pl-14 pr-8 h-full flex items-center text-white font-bold text-[15px] shadow-[0_8px_18px_rgba(55,153,250,0.25)] transition-all duration-700 ease-in-out bg-linear-to-r from-[#3799FA] to-[#9961FB] group-hover:from-white group-hover:to-white group-hover:text-black group-hover:pl-6 group-hover:pr-14 rounded-[34px_34px_0px_34px] group-hover:rounded-[34px_34px_34px_0px]">
                            Get Early Access
                        </div>
                    </button>
                </motion.div>

                {/* Mobile Button - Order 3 */}
                <div className="order-3 lg:hidden flex justify-center w-full mt-2">
                    <button
                        suppressHydrationWarning
                        className="flex items-center group relative h-12 w-fit cursor-pointer overflow-hidden transition-all duration-700 rounded-[34px_34px_0px_34px] hover:rounded-[34px_34px_34px_0px]"
                    >
                        <div className="absolute left-0 w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-md z-20 transition-all duration-700 ease-in-out group-hover:left-[calc(100%-48px)] group-hover:bg-linear-to-r group-hover:from-[#3799FA] group-hover:to-[#9961FB] group-hover:scale-105">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#3799FA" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 ml-0.5 transition-all duration-700 ease-in-out group-hover:text-white"><polyline points="9 18 15 12 9 6" /></svg>
                        </div>
                        <div className="pl-14 pr-8 h-full flex items-center text-white font-bold text-[15px] shadow-[0_8px_18px_rgba(55,153,250,0.25)] transition-all duration-700 ease-in-out bg-linear-to-r from-[#3799FA] to-[#9961FB] group-hover:from-white group-hover:to-white group-hover:text-black group-hover:pl-6 group-hover:pr-14 rounded-[34px_34px_0px_34px] group-hover:rounded-[34px_34px_34px_0px]">
                            Get Early Access
                        </div>
                    </button>
                </div>
            </div>

        </section>
    );
}
