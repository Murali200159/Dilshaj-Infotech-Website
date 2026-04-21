"use client";

import Image from "next/image";
import Link from "next/link";
import { FaPhone, FaEnvelope, FaLocationDot, FaWhatsapp, FaInstagram, FaLinkedinIn, FaFacebookF, FaChevronRight } from "react-icons/fa6";
import { useState } from "react";
import CountryCodeSelector from "./CountryCodeSelector";
import { countries } from "../data/countries";

export default function Footer() {
    const [selectedCountry, setSelectedCountry] = useState(countries.find(c => c.code === 'IN') || countries[0]);

    return (
        <footer className="w-full bg-white relative overflow-hidden border-t border-black/5">
            {/* Background Effects */}
            <div className="absolute inset-0 bg-white -z-20" />
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[120px] -translate-y-1/2 pointer-events-none -z-10" />

            {/* SECTION 1: Information and Navigation */}
            <div className="w-full px-6 md:px-12 lg:pl-[105px] lg:pr-20 py-16 md:py-24 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-8">

                    {/* Column 1: Brand & Desc */}
                    <div className="flex flex-col gap-6 md:gap-8 items-center md:items-start text-center md:text-left">
                        <Link href="/" className="flex items-center w-fit">
                            <div className="relative w-40 md:w-48 h-10 md:h-12">
                                <Image
                                    src="/company_logo.png"
                                    alt="Dilshaj Infotech"
                                    fill
                                    className="object-contain"
                                />
                            </div>
                        </Link>
                        <p className="text-gray-600 text-[16px] md:text-[18px] leading-relaxed max-w-sm font-medium">
                            Dilshaj Infotech is a next-generation global technology company building high-performance digital products, intelligent platforms, and scalable solutions. We focus on quality, innovation, and speed to deliver secure, future-ready technology that drives real impact.
                        </p>
                    </div>

                    {/* Column 2: Navigation */}
                    <div className="flex flex-col gap-6 md:gap-8 lg:ml-20 xl:ml-32 items-center md:items-start text-center md:text-left">
                        <h4 className="text-black text-[20px] md:text-[24px] font-bold">Navigation</h4>
                        <ul className="flex flex-col gap-3 md:gap-4">
                            {[
                                { label: 'Home', href: '/' },
                                { label: 'About Us', href: '/about' },
                                { label: 'Services', href: '/services' },
                                { label: 'Projects', href: '/products' },
                                { label: 'Technologies', href: '/#technologies' },
                                { label: 'Social Service', href: '/#social-service' },
                                { label: 'Careers', href: '/careers' },
                            ].map((item) => (
                                <li key={item.label}>
                                    <Link href={item.href} className="text-gray-600 hover:text-black transition-colors text-[16px] md:text-[18px] font-medium">
                                        {item.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Column 3: Products */}
                    <div className="flex flex-col gap-6 md:gap-8 items-center md:items-start text-center md:text-left">
                        <h4 className="text-black text-[20px] md:text-[24px] font-bold">Products</h4>
                        <ul className="flex flex-col gap-3 md:gap-4">
                            {[
                                { label: 'Eduprova', href: '/products/edu-det' },
                                { label: 'Digital News', href: '/products/digital-news' },
                                { label: 'Urban Clap', href: '/products/urban-clap' },
                                { label: 'Bike & Car Rider', href: '/products/bike-rider' },
                                { label: 'E-Commerce', href: '/products/commerce' },
                                { label: 'Interior Design', href: '/products/interior' },
                                { label: 'Food Delivery', href: '/products/Food' },
                                { label: 'Doctor on Click', href: '/products/doctor' },
                                { label: 'Security App', href: '/products/security' },
                            ].map((item) => (
                                <li key={item.label}>
                                    <Link href={item.href} className="text-gray-600 hover:text-black transition-colors text-[16px] md:text-[18px] font-medium">
                                        {item.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>  

                    {/* Column 4: Contact */}
                    <div className="flex flex-col gap-6 md:gap-8 items-center md:items-start text-center md:text-left">
                        <h4 className="text-black text-[20px] md:text-[24px] font-bold">Contact</h4>
                        <ul className="flex flex-col gap-5 md:gap-6">
                            <li className="flex items-center gap-4 group justify-center md:justify-start">
                                <FaPhone className="w-4 h-4 md:w-5 md:h-5 text-gray-800" />
                                <span className="text-gray-700 group-hover:text-black transition-colors text-[15px] md:text-[18px] font-medium">+91 8977272783</span>
                            </li>
                            <li className="flex items-start gap-4 group justify-center md:justify-start">
                                <FaEnvelope className="w-4 h-4 md:w-5 md:h-5 text-gray-800 shrink-0 mt-1" />
                                <div className="flex flex-col gap-1 text-left">
                                    <span className="text-gray-700 group-hover:text-black transition-colors text-[14px] md:text-[18px] font-medium break-all">info@dilshajinfotech.tech</span>
                                    <span className="text-gray-700 group-hover:text-black transition-colors text-[14px] md:text-[18px] font-medium break-all">careers@dilshajinfotech.tech</span>
                                </div>
                            </li>
                            <li className="flex items-center gap-4 group justify-center md:justify-start text-center md:text-left">
                                <FaLocationDot className="w-4 h-4 md:w-5 md:h-5 text-gray-800 shrink-0" />
                                <span className="text-gray-700 group-hover:text-black transition-colors text-[15px] md:text-[18px] leading-relaxed font-medium">
                                    Visakhapatnam, India.
                                </span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* SECTION 2: Socials and WhatsApp Updates */}
            <div className="w-full bg-[#0a0a0a] px-6 md:px-12 lg:pl-[105px] lg:pr-20 py-16 md:py-0 md:h-[300px] flex flex-col justify-center relative z-10 border-t border-black/10">
                {/* Grid Background */}
                <div
                    className="absolute inset-x-0 bottom-0 h-full pointer-events-none -z-10 opacity-70"
                    style={{
                        backgroundImage: "url('/Home/bg_jobs.png')",
                        backgroundSize: 'cover',
                        backgroundPosition: 'bottom center',
                        backgroundRepeat: 'no-repeat',
                    }}
                />
                <style jsx>{`
                    .glass-input {
                        background: rgba(255, 255, 255, 0.03);
                        border: 1px solid rgba(255, 255, 255, 0.1);
                        backdrop-filter: blur(10px);
                    }
                `}</style>
                <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-8">

                    {/* Left: Social Icons */}
                    <div className="flex flex-col gap-6 items-center lg:items-start w-full lg:w-auto">
                        <h4 className="text-white text-[20px] md:text-[24px] font-bold">Follow Us On</h4>
                        <div className="flex gap-4 flex-wrap justify-center lg:justify-start">
                            {[
                                { icon: <FaWhatsapp className="w-6 h-6" />, href: "https://wa.me/918977272783?text=Hello%20Dilshaj%20Infotech%20Team" },
                                { icon: <FaInstagram className="w-6 h-6" />, href: "https://www.instagram.com/dilshaj_infotech?igsh=MTJhYzhkMDIzZWVjdw==" },
                                { icon: <FaLinkedinIn className="w-6 h-6" />, href: "https://www.linkedin.com/company/dilshaj-infotech/" },
                                { icon: <FaFacebookF className="w-6 h-6" />, href: "#" }
                            ].map((social, idx) => (
                                <Link
                                    key={idx}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white/60 hover:text-white hover:bg-white/10 hover:border-white/20 transition-all"
                                >
                                    {social.icon}
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* Right: WhatsApp Updates Box */}
                    <div className="w-full lg:w-auto max-w-full">
                        <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-[24px] md:rounded-[32px] p-6 lg:p-8 flex flex-col sm:flex-row items-center gap-6 lg:min-w-[500px] xl:min-w-[600px] w-full">
                            <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto justify-center sm:justify-start">
                                <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-green-500/20 flex items-center justify-center shrink-0">
                                    <FaWhatsapp className="w-6 h-6 md:w-7 md:h-7 text-green-500" />
                                </div>
                                <div className="flex flex-col text-center sm:text-left">
                                    <h5 className="text-white text-[18px] md:text-[22px] font-semibold whitespace-nowrap">WhatsApp Updates</h5>
                                </div>
                            </div>

                            <div className="flex-1 flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full">
                                <div className="flex w-full gap-2 items-stretch">
                                    <div className="shrink-0">
                                        <CountryCodeSelector
                                            selectedCountry={selectedCountry}
                                            onSelect={setSelectedCountry}
                                        />
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <input
                                            suppressHydrationWarning
                                            type="tel"
                                            placeholder="Phone number"
                                            className="w-full h-full bg-white border-0 rounded-2xl px-4 md:px-6 py-3.5 md:py-4 text-gray-800 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all font-medium text-[15px] md:text-base box-border"
                                        />
                                    </div>
                                </div>
                                <div className="w-full sm:w-fit">
                                    <button
                                        suppressHydrationWarning
                                        className="flex items-center group relative h-12 w-full sm:w-[140px] cursor-pointer overflow-hidden transition-all duration-700 rounded-[34px_34px_0px_34px] hover:rounded-[34px_34px_34px_0px]"
                                    >
                                        <div className="absolute left-0 w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-md z-20 transition-all duration-700 ease-in-out group-hover:left-[calc(100%-48px)] group-hover:bg-linear-to-r group-hover:from-[#3799FA] group-hover:to-[#9961FB] group-hover:scale-105">
                                            <FaChevronRight className="w-4 h-4 text-[#3799FA] transition-all duration-700 ease-in-out group-hover:text-white" />
                                        </div>

                                        <div className="pl-14 pr-6 h-full flex items-center justify-center text-white font-bold text-[15px] shadow-[0_8px_18px_rgba(55,153,250,0.25)] transition-all duration-700 ease-in-out bg-linear-to-r from-[#3799FA] to-[#9961FB] group-hover:from-white group-hover:to-white group-hover:text-black group-hover:pl-6 group-hover:pr-14 rounded-[34px_34px_0px_34px] group-hover:rounded-[34px_34px_34px_0px] w-full">
                                            Submit
                                        </div>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Copyright */}
                <div className="absolute bottom-4 md:bottom-6 inset-x-0 text-center px-4">
                    <p className="text-white/40 text-[14px] md:text-[16px] font-medium">
                        @ Copyright 2026, All Rights Reserved by Dilshaj Infotech
                    </p>
                </div>
            </div>
        </footer>
    );
}
