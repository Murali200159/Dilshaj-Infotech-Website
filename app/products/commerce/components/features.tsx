"use client";

import React from "react";
import Image from "next/image";
import { ChevronRight, ChevronsRight, LayoutGrid, CreditCard, FileText, BarChart2, User, Store } from "lucide-react";
import { Poppins } from "next/font/google";

const poppins = Poppins({
    subsets: ["latin"],
    weight: ["400", "500", "600", "700", "800", "900"],
});

const featuresList = [
    { title: "Smart Product Management", desc: "Manage products, categories, pricing, and inventory from a centralized dashboard designed to simplify operations.", icon: LayoutGrid },
    { title: "Secure Payment Integration", desc: "Offer fast and encrypted checkout through integrated payment gateways for safe transactions.", icon: CreditCard },
    { title: "Real-Time Order Tracking", desc: "Track shipments and manage delivery updates with accurate and transparent order monitoring.", icon: FileText },
    { title: "Advanced Sales Analytics", desc: "Monitor sales performance and customer trends with a clear and easy-to-use analytics dashboard.", icon: BarChart2 },
    { title: "Customer Engagement Tools", desc: "Boost retention with personalized discounts, promotions, and loyalty programs.", icon: User },
    { title: "Multi-Vendor Support", desc: "Enable multiple sellers to manage their stores with dedicated dashboards and streamlined tools.", icon: Store },
];

export default function Features() {
    return (
        <section className={`${poppins.className} relative w-full bg-[#ffffff] overflow-hidden`}>

            {/* Features Ribbon */}
            <div className="absolute left-0 top-[30px] lg:top-[40px] z-20">
                <div
                    className="relative flex items-center gap-2 pl-4 pr-10 py-2.5 w-fit"
                    style={{
                        background: 'linear-gradient(to right, #029EFA, #0E4E8B)',
                        clipPath: 'polygon(0% 0%, 100% 0%, 88% 50%, 100% 100%, 0% 100%)'
                    }}
                >
                    <div className="flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-white opacity-60" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-white -ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
                    </div>
                    <span className="text-white font-bold text-[18px] lg:text-[22px] tracking-wider pr-4">Features</span>
                </div>
            </div>

            <div className="relative w-full max-w-[1700px] mx-auto px-5 sm:px-8 lg:px-14 pt-[90px] lg:pt-[110px] pb-[60px] lg:pb-[100px]">

                {/* Main Grid: Headline, Features, Dark Card */}
                <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-x-8 lg:gap-x-12 gap-y-8 lg:gap-y-10">

                    {/* Headline (Order 1) */}
                    <div className="order-1 lg:col-start-1 lg:row-start-1 flex flex-col justify-start lg:pt-4">
                        <h2 className="text-[28px] sm:text-[36px] lg:text-[42px] font-bold text-[#000000] leading-[1.2] tracking-tight">
                            Everything You Need to Build, Manage, <span className="text-[#888888] font-semibold">and Scale Your Online Store</span>
                        </h2>
                    </div>

                    {/* Features List (Order 2 on mobile, Right column on desktop text-left) */}
                    <div className="order-2 lg:col-start-2 lg:row-start-1 lg:row-span-2 flex flex-col w-full h-full lg:-mt-2">
                        {featuresList.map((item, idx) => (
                            <div key={idx} className="flex flex-col justify-center border-b border-[#e5e7eb] py-5 lg:py-[22px] last:border-b-0">
                                <div className="flex items-start gap-4 sm:gap-6">
                                    <div className="w-[40px] h-[40px] sm:w-[46px] sm:h-[46px] shrink-0 border border-[#d1d5db] rounded-[8px] flex items-center justify-center bg-[#f9fafb] shadow-sm mt-1">
                                        <item.icon size={20} className="text-[#374151]" strokeWidth={1.5} />
                                    </div>
                                    <div className="flex flex-col flex-1 pl-1">
                                        <h4 className="text-[16px] sm:text-[18px] font-bold text-[#111827] mb-[4px]">{item.title}</h4>
                                        <p className="text-[#4b5563] text-[13px] sm:text-[15px] font-medium leading-[1.6] max-w-[480px]">
                                            {item.desc}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Dark Card (Order 3 on mobile, Below Headline on desktop) */}
                    <div className="order-3 lg:col-start-1 lg:row-start-2 lg:mt-[-40px]">
                        <div className="relative w-full aspect-[0.84] sm:aspect-[0.95] lg:aspect-[0.88] xl:aspect-[1.05] rounded-[20px] overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.2)] flex flex-col justify-between p-6 sm:p-8">
                            <div className="absolute inset-0 z-0">
                                <Image src="/products-images/e-card4.png" alt="Card Background" fill className="object-cover object-center" />
                                <div className="absolute inset-0 bg-linear-to-t from-[#0e172a] via-[#0e172a]/70 to-[#0e172a]/20"></div>
                            </div>

                            <div className="relative z-10 w-full flex flex-col items-start h-full justify-between">
                                <div className="border border-white/40 px-[16px] py-[6px] rounded-[6px] backdrop-blur-md bg-white/10">
                                    <span className="text-white font-semibold text-[13px] sm:text-[14px] tracking-wide">Ready to launch your online store?</span>
                                </div>

                                <div className="flex flex-col items-start gap-4 w-full">
                                    <h3 className="text-white text-[26px] sm:text-[32px] lg:text-[36px] font-bold leading-[1.2] tracking-tight max-w-[360px]">
                                        Scale Your Business <br className="hidden sm:block" /> with Our Smart <br className="hidden sm:block" /> Commerce Platform.
                                    </h3>

                                    <button
                                        suppressHydrationWarning
                                        className="flex items-center group relative h-12 w-fit cursor-pointer overflow-hidden transition-all duration-700 rounded-[34px_34px_0px_34px] hover:rounded-[34px_34px_34px_0px]"
                                    >
                                        <div className="absolute left-0 w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-md z-20 transition-all duration-700 ease-in-out group-hover:left-[calc(100%-48px)] group-hover:bg-linear-to-r group-hover:from-[#3799FA] group-hover:to-[#9961FB] group-hover:scale-105">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#3799FA" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 ml-0.5 transition-all duration-700 ease-in-out group-hover:text-white"><polyline points="9 18 15 12 9 6" /></svg>
                                        </div>
                                        <div className="pl-14 pr-8 h-full flex items-center text-white font-bold text-[15px] shadow-[0_8px_18px_rgba(55,153,250,0.25)] transition-all duration-700 ease-in-out bg-linear-to-r from-[#3799FA] to-[#9961FB] group-hover:from-white group-hover:to-white group-hover:text-black group-hover:pl-6 group-hover:pr-14 rounded-[34px_34px_0px_34px] group-hover:rounded-[34px_34px_34px_0px]">
                                            Lets Build Together
                                        </div>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

                {/* Bottom Banner */}
                <div className="mt-10 lg:mt-16 w-full bg-linear-to-r from-[#3b82f6] via-[#1e1b4b] to-[#0f172a] rounded-[18px] px-8 lg:px-12 py-8 lg:py-10 flex flex-col md:flex-row items-center justify-between gap-6 md:gap-8 shadow-[0_10px_30px_rgba(59,130,246,0.25)] relative overflow-hidden">
                    <div className="absolute inset-0 bg-black/10 pointer-events-none"></div>
                    <div className="relative z-10 w-full flex flex-col md:flex-row items-center justify-between gap-6 md:gap-12">
                        <h3 className="text-white text-[20px] sm:text-[24px] lg:text-[32px] font-bold max-w-[650px] leading-[1.3] text-center md:text-left tracking-tight">
                            Build the Future of E-Commerce with Us for a Smarter Shopping Experience.
                        </h3>
                        <button
                            suppressHydrationWarning
                            className="shrink-0 flex items-center group relative h-12 w-fit cursor-pointer overflow-hidden transition-all duration-700 rounded-[34px_34px_0px_34px] hover:rounded-[34px_34px_34px_0px]"
                        >
                            <div className="absolute left-0 w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-md z-20 transition-all duration-700 ease-in-out group-hover:left-[calc(100%-48px)] group-hover:bg-linear-to-r group-hover:from-[#3799FA] group-hover:to-[#9961FB] group-hover:scale-105">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#3799FA" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 ml-0.5 transition-all duration-700 ease-in-out group-hover:text-white"><polyline points="9 18 15 12 9 6" /></svg>
                            </div>
                            <div className="pl-14 pr-8 h-full flex items-center text-white font-bold text-[15px] shadow-[0_8px_18px_rgba(55,153,250,0.25)] transition-all duration-700 ease-in-out bg-linear-to-r from-[#3799FA] to-[#9961FB] group-hover:from-white group-hover:to-white group-hover:text-black group-hover:pl-6 group-hover:pr-14 rounded-[34px_34px_0px_34px] group-hover:rounded-[34px_34px_34px_0px]">
                                Get Updates
                            </div>
                        </button>
                    </div>
                </div>

            </div>
        </section>
    );
}
