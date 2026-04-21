"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { FaPhone, FaEnvelope, FaLocationDot, FaChevronRight } from "react-icons/fa6";
import CountryCodeSelector from "./CountryCodeSelector";
import { countries, Country } from "../data/countries";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function ContactSection() {
    const sectionRef = useRef<HTMLElement>(null);
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        phoneNumber: "",
        email: "",
        message: ""
    });

    const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
    const [selectedCountry, setSelectedCountry] = useState<Country>(countries.find(c => c.code === "IN") || countries[0]);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Left Content Animations
            gsap.from(".gsap-contact-left-item", {
                x: -50,
                opacity: 0,
                duration: 1,
                stagger: 0.2,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 75%",
                }
            });

            // Form Animation
            gsap.from(".gsap-contact-form", {
                x: 50,
                opacity: 0,
                duration: 1,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: ".gsap-contact-form",
                    start: "top 80%",
                }
            });
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        // Basic validation
        if (!formData.firstName || !formData.lastName || !formData.email || !formData.message) {
            alert("Please fill in all required fields.");
            return;
        }

        setStatus("loading");

        const { firstName, lastName, phoneNumber, email, message } = formData;

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    firstName,
                    lastName,
                    phoneNumber,
                    email,
                    message,
                    selectedCountry
                }),
            });

            if (response.ok) {
                setStatus("success");
                setFormData({
                    firstName: "",
                    lastName: "",
                    phoneNumber: "",
                    email: "",
                    message: ""
                });
                setTimeout(() => setStatus("idle"), 5000);
            } else {
                const data = await response.json();
                alert(data.error || "Failed to send message. Please try again.");
                setStatus("error");
            }
        } catch (error) {
            console.error("Submission Error:", error);
            alert("An error occurred. Please try again later.");
            setStatus("error");
        }
    };

    return (
        <section ref={sectionRef} id="contact" className="w-full bg-black pt-12 md:pt-22 pb-16 md:pb-24 relative overflow-hidden">
            {/* Background Glows */}
            <div className="absolute top-1/4 -left-1/4 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute bottom-1/4 -right-1/4 w-[600px] h-[600px] bg-purple-600/10 rounded-full blur-[120px] pointer-events-none" />

            {/* Grid Floor Background */}
            <div
                className="absolute inset-x-0 bottom-0 h-full pointer-events-none -z-10 opacity-60"
                style={{
                    backgroundImage: "url('/Home/bg_jobs.png')",
                    backgroundSize: 'cover',
                    backgroundPosition: 'bottom center',
                    backgroundRepeat: 'no-repeat',
                }}
            />

            <div className="w-full px-6 md:px-12 lg:pl-[105px] lg:pr-20 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">

                    {/* LEFT SIDE CONTENT */}
                    <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
                        {/* Ribbon Badge */}
                        <div className="gsap-contact-left-item mb-10 w-full flex justify-start">
                            <div
                                className="relative flex items-center gap-2 lg:gap-4 pl-4 pr-10 lg:px-10 py-2.5 lg:py-3 w-fit ml-[-24px] md:ml-[-48px] lg:ml-[-105px]"
                                style={{
                                    background: 'linear-gradient(to right, #029EFA, #0E4E8B)',
                                    clipPath: 'polygon(0% 0%, 100% 0%, 88% 50%, 100% 100%, 0% 100%)'
                                }}
                            >
                                <div className="flex items-center gap-2">
                                    <div className="relative w-7 h-7 lg:w-12 lg:h-12 flex items-center justify-center">
                                        <Image src="/Home/arrow.png" alt="Arrow" fill className="object-contain" />
                                    </div>
                                    <span className="text-white font-bold text-[20px] tracking-wider pr-4">Contact us</span>
                                </div>
                            </div>
                        </div>

                        <h2 className="gsap-contact-left-item text-[32px] sm:text-[40px] md:text-[56px] lg:text-[50px] font-semibold text-white leading-[1.3] lg:leading-[1.1] mb-8 md:mb-12 max-w-2xl px-2 lg:px-0">
                            We help transform your ideas into{" "}
                            <span className="bg-linear-to-r from-[#3799FA] to-[#9961FB] bg-clip-text text-transparent">
                                successful digital solutions.
                            </span>
                        </h2>

                        {/* Contact Info */}
                        <div className="gsap-contact-left-item space-y-8 w-full max-w-md">
                            <div className="flex items-center gap-4 lg:gap-6 group">
                                <div className="w-10 h-10 lg:w-12 lg:h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center transition-all group-hover:bg-[#3799FA]/20 group-hover:border-[#3799FA]/30">
                                    <FaPhone className="w-4 h-4 lg:w-5 lg:h-5 text-white" />
                                </div>
                                <span className="text-white/80 text-[15px] lg:text-[18px] font-medium tracking-tight">089772 72783</span>
                            </div>

                            <div className="flex items-start gap-4 lg:gap-6 group">
                                <div className="w-10 h-10 lg:w-12 lg:h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center shrink-0 transition-all group-hover:bg-[#3799FA]/20 group-hover:border-[#3799FA]/30 mt-1">
                                    <FaEnvelope className="w-4 h-4 lg:w-5 lg:h-5 text-white" />
                                </div>
                                <div className="flex flex-col gap-1 text-left">
                                    <span className="text-white/80 text-[14px] lg:text-[18px] font-medium tracking-tight break-all">info@dilshajinfotech.tech</span>
                                    <span className="text-white/80 text-[14px] lg:text-[18px] font-medium tracking-tight break-all">careers@dilshajinfotech.tech</span>
                                </div>
                            </div>

                            <div className="flex items-center gap-4 lg:gap-6 group">
                                <div className="w-10 h-10 lg:w-12 lg:h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center shrink-0 transition-all group-hover:bg-[#3799FA]/20 group-hover:border-[#3799FA]/30">
                                    <FaLocationDot className="w-4 h-4 lg:w-5 lg:h-5 text-white" />
                                </div>
                                <span className="text-white/80 text-[15px] lg:text-[18px] font-medium tracking-tight leading-relaxed text-left">
                                    Visakhapatnam, India.
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* RIGHT SIDE – GLASS FORM */}
                    <div className="relative">
                        <div className="absolute inset-0 bg-linear-to-br from-[#3799FA]/20 to-[#9961FB]/20 blur-[100px] -z-10" />

                        <div className="gsap-contact-form bg-white/8 backdrop-blur-2xl border border-white/20 rounded-[24px] md:rounded-[40px] p-6 md:p-10 shadow-2xl relative overflow-hidden">
                            <h3 className="text-white text-[18px] md:text-[22px] font-medium mb-8 md:mb-10 leading-relaxed text-center lg:text-left">
                                Partner With Experts Who Leverage AI & Tech To Transform Ideas Into Market-Leading Solutions.
                            </h3>

                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <input
                                            suppressHydrationWarning
                                            type="text"
                                            name="firstName"
                                            value={formData.firstName}
                                            onChange={handleChange}
                                            placeholder="First Name"
                                            className="w-full bg-white/5 border border-white/20 rounded-2xl px-6 py-4 text-white placeholder:text-white/40 focus:outline-none focus:border-[#3799FA] focus:ring-1 focus:ring-[#3799FA] transition-all"
                                            required
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <input
                                            suppressHydrationWarning
                                            type="text"
                                            name="lastName"
                                            value={formData.lastName}
                                            onChange={handleChange}
                                            placeholder="Last Name"
                                            className="w-full bg-white/5 border border-white/20 rounded-2xl px-6 py-4 text-white placeholder:text-white/40 focus:outline-none focus:border-[#3799FA] focus:ring-1 focus:ring-[#3799FA] transition-all"
                                            required
                                        />
                                    </div>
                                </div>

                                <div className="flex flex-col md:flex-row gap-4">
                                    <CountryCodeSelector
                                        selectedCountry={selectedCountry}
                                        onSelect={setSelectedCountry}
                                    />
                                    <input
                                        suppressHydrationWarning
                                        type="tel"
                                        name="phoneNumber"
                                        value={formData.phoneNumber}
                                        onChange={handleChange}
                                        placeholder="Phone Number"
                                        className="flex-1 bg-white/5 border border-white/20 rounded-2xl px-6 py-4 text-white placeholder:text-white/40 focus:outline-none focus:border-[#3799FA] focus:ring-1 focus:ring-[#3799FA] transition-all"
                                    />
                                </div>

                                <input
                                    suppressHydrationWarning
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    placeholder="Email ID"
                                    className="w-full bg-white/5 border border-white/20 rounded-2xl px-6 py-4 text-white placeholder:text-white/40 focus:outline-none focus:border-[#3799FA] focus:ring-1 focus:ring-[#3799FA] transition-all"
                                    required
                                />

                                <textarea
                                    suppressHydrationWarning
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    placeholder="Message"
                                    rows={4}
                                    className="w-full bg-white/5 border border-white/20 rounded-2xl px-6 py-4 text-white placeholder:text-white/40 focus:outline-none focus:border-[#3799FA] focus:ring-1 focus:ring-[#3799FA] transition-all resize-none"
                                    required
                                />

                                <button
                                    suppressHydrationWarning
                                    type="submit"
                                    disabled={status === "loading"}
                                    className="flex items-center group relative h-12 w-full cursor-pointer overflow-hidden transition-all duration-700 rounded-[34px_34px_0px_34px] hover:rounded-[34px_34px_34px_0px]"
                                >
                                    <div className="absolute left-0 w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-md z-20 transition-all duration-700 ease-in-out group-hover:left-[calc(100%-48px)] group-hover:bg-linear-to-r group-hover:from-[#3799FA] group-hover:to-[#9961FB] group-hover:scale-105">
                                        <FaChevronRight className="w-4 h-4 text-[#3799FA] transition-all duration-700 ease-in-out group-hover:text-white" />
                                    </div>

                                    <div className="pl-14 pr-8 h-full w-full flex items-center justify-center text-white font-bold text-[15px] shadow-[0_8px_18px_rgba(55,153,250,0.25)] transition-all duration-700 ease-in-out bg-linear-to-r from-[#3799FA] to-[#9961FB] group-hover:from-white group-hover:to-white group-hover:text-black group-hover:pl-6 group-hover:pr-14 rounded-[34px_34px_0px_34px] group-hover:rounded-[34px_34px_34px_0px]">
                                        {status === "loading" ? "Sending..." : "Lets Connect"}
                                    </div>
                                </button>

                                {status === "success" && (
                                    <p className="text-green-400 text-center mt-4 bg-green-400/10 py-3 rounded-xl border border-green-400/20">
                                        Message sent successfully! We'll get back to you soon.
                                    </p>
                                )}
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
