"use client";
import { motion } from "framer-motion";

export default function CtaSection() {
    return (
        <section className="w-full bg-[#FFFFFF] pb-12 lg:pb-24 px-4 md:px-12 flex justify-center shrink-0">
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6 }}
                className="w-full max-w-[1500px] rounded-[16px] md:rounded-[20px] py-6 px-4 md:py-16 md:px-16 flex flex-row items-center justify-between gap-3 md:gap-8 shadow-2xl relative overflow-hidden"
                style={{ background: "linear-gradient(90deg, #242B9F 0%, #151023 100%)" }}
            >
                <h2 className="text-white font-medium text-[10px] sm:text-[12px] md:text-[18px] lg:text-[26px] xl:text-[34px] leading-[1.4] md:leading-[1.3] text-left max-w-[55%] md:max-w-[60%] lg:max-w-[700px] uppercase tracking-wide z-10">
                    GET READY — THE FUTURE OF<br className="block md:hidden lg:block" /> SERVICES IS ALMOST HERE.
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
