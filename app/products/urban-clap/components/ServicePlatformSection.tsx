"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import aboutImage from "../images/about-bg.png";

export default function ServicePlatformSection() {
    return (
        <section className="relative w-full bg-[#FFFFFF] pt-12 lg:pt-24 pb-6 lg:pb-8 flex flex-col items-center overflow-hidden shrink-0">

            {/* Ribbon - Desktop Only */}
            <div
                className="hidden lg:flex absolute top-8 lg:top-12 left-0 items-center gap-2 pl-4 pr-12 lg:pr-16 py-2.5 lg:py-3 shadow-md z-10"
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

            <div className="w-full max-w-[1500px] mx-auto px-6 lg:px-12 lg:mt-6 flex flex-col lg:grid lg:grid-cols-2 gap-10 lg:gap-16 lg:items-center">

                {/* TEXT & DESKTOP BUTTON PORTION (Order 1 Mobile, Order 1 Desktop) */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.7 }}
                    className="order-1 flex flex-col items-center lg:items-start text-center lg:text-left"
                >
                    {/* Title */}
                    <h2
                        className="text-[#000000] font-semibold"
                        style={{
                            fontSize: "clamp(35px, 4vw, 50px)",
                            lineHeight: "116%",
                            letterSpacing: "-1.5%"
                        }}
                    >
                        Service Platform
                    </h2>

                    {/* Subtitle (Desktop only) */}
                    <h3
                        className="hidden lg:block text-[#000000] font-medium mt-4 lg:mt-5"
                        style={{
                            fontSize: "30px",
                            lineHeight: "116%",
                            letterSpacing: "-1.5%"
                        }}
                    >
                        Services at Your Fingertips.
                    </h3>

                    {/* Paragraph */}
                    <p
                        className="text-[#000000] mt-6 lg:mt-8 max-w-[650px]"
                        style={{
                            fontSize: "clamp(16px, 2vw, 20px)",
                            lineHeight: "165%",
                            letterSpacing: "2%"
                        }}
                    >
                        The UrbanClap-Style Service App is an upcoming on-demand service marketplace designed to simplify everyday needs. From home cleaning and plumbing to beauty services and appliance repairs, users can instantly book verified professionals through a secure and user-friendly interface.
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

                {/* IMAGE PORTION (Order 2 Mobile, Order 2 Desktop) */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.7, delay: 0.2 }}
                    className="order-2 relative w-full h-[250px] sm:h-[400px] lg:h-[450px] rounded-[16px] overflow-hidden shadow-xl"
                >
                    <Image
                        src={aboutImage}
                        alt="Service Platform Preview"
                        fill
                        className="object-cover"
                    />
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
