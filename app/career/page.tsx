"use client";

import Image from "next/image";
import { Poppins } from "next/font/google";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaPhone, FaWhatsapp, FaChevronRight } from "react-icons/fa6";
import ContactSection from "../components/ContactSection";
import Footer from "../components/Footer";

import img1 from "./republi.png";
import img2 from "./image copy 2.png";
import img3 from "./image copy 3.png";
import img4 from "./image copy 4.png";
import img5 from "./DSC_0939.jpg";
import img6 from "./image copy.jpeg";

const poppins = Poppins({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
});

const jobsData = {
  Development: [
    {
      title: "SENIOR FRONTEND ENGINEER",
      desc: "Designs And Develops Scalable, Responsive Web Interfaces Using Modern Frontend Technologies While Ensuring Performance, Accessibility, And Seamless User Experience.",
      location: "Vizag",
      experience: "4+ years",
    },
    {
      title: "PRODUCT DESIGNER",
      desc: "Designs User-Centered Digital Products By Combining UX Research, UI Design, And Product Strategy To Create Intuitive And Engaging Experiences.",
      location: "Vizag",
      experience: "2+ Years",
    },
    {
      title: "BACKEND ENGINEER",
      desc: "Builds And Maintains Secure, Scalable Server-Side Systems, APIs, And Databases To Support Reliable Application Performance.",
      location: "Vizag",
      experience: "4+ years",
    },
    {
      title: "FULL STACK DEVELOPER",
      desc: "Builds Complete Web Applications By Handling Both Frontend User Interfaces And Backend Server Logic For Seamless Performance.",
      location: "Vizag",
      experience: "3+ years",
    },
  ],
  Marketing: [
    {
      title: "DIGITAL MARKETING SPECIALIST",
      desc: "Develops and executes digital marketing campaigns, including SEO/SEM, email, social media and display advertising campaigns.",
      location: "Vizag",
      experience: "3+ years",
    },
    {
      title: "CONTENT STRATEGIST",
      desc: "Creates compelling content tailored to various platforms to engage target audiences and drive brand awareness.",
      location: "Vizag",
      experience: "2+ years",
    },
  ],
  Management: [
    {
      title: "PROJECT MANAGER",
      desc: "Leads cross-functional teams to deliver projects on time, within scope, and within budget while managing risk and communication.",
      location: "Vizag",
      experience: "5+ years",
    },
    {
      title: "HR EXECUTIVE",
      desc: "Manages employee relations, talent acquisition, and organizational development to foster a positive workplace culture.",
      location: "Vizag",
      experience: "3+ years",
    },
  ],
};

const icons = {
  Development: (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="16 18 22 12 16 6"></polyline>
      <polyline points="8 6 2 12 8 18"></polyline>
    </svg>
  ),
  Marketing: (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="18" y1="20" x2="18" y2="10"></line>
      <line x1="12" y1="20" x2="12" y2="4"></line>
      <line x1="6" y1="20" x2="6" y2="14"></line>
    </svg>
  ),
  Management: (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
      <circle cx="9" cy="7" r="4"></circle>
      <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
      <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
    </svg>
  ),
};

export default function Home() {
  const [activeTab, setActiveTab] = useState<keyof typeof jobsData>("Development");

  return (
    <div className={`min-h-screen bg-[#F8F9FB] flex flex-col overflow-x-hidden w-full ${poppins.className}`}>

      {/* --- HERO SECTION --- */}
      <section className="relative min-h-screen w-full flex items-center justify-center overflow-hidden shrink-0">
        {/* Background Image */}
        <div className="absolute inset-0 z-0 bg-black/10">
          <video
            src="/career/new building.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover absolute inset-0"
          />
        </div>

        {/* Floating Side Icons */}
        <div className="fixed right-0 lg:right-1 top-[44%] lg:top-1/2 -translate-y-1/2 z-50 flex flex-col gap-0 lg:gap-5">
          <a href="tel:+918977272783" className="w-[44px] h-[44px] bg-[#00A3FF] flex items-center justify-center text-white shadow-md hover:scale-110 transition-transform">
            <FaPhone className="w-4 h-4" />
          </a>
          <a href="https://wa.me/918977272783?text=Hello%20Dilshaj%20Infotech%20Team" target="_blank" rel="noopener noreferrer" className="w-[44px] h-[44px] bg-[#3BCF52] flex items-center justify-center text-white shadow-md hover:scale-110 transition-transform">
            <FaWhatsapp className="w-6 h-6" />
          </a>
        </div>

        {/* Hero Content */}
        <div className="relative z-20 w-full max-w-[1200px] px-6 mx-auto flex flex-col items-center text-center text-white mt-40 md:mt-[160px]">
          <div className="flex flex-col items-center w-full">
            {/* Desktop Headline */}
            <div className="hidden md:flex flex-col items-center w-full">
              <h1
                className="text-white drop-shadow-sm uppercase md:text-[60px] lg:text-[80px]"
                style={{
                  fontWeight: 600,
                  lineHeight: "100%",
                  letterSpacing: "0%",
                  textTransform: "uppercase",
                }}
              >
                JOIN US! GREAT
              </h1>
              <h1
                className="text-white drop-shadow-sm uppercase md:text-[60px] lg:text-[80px] mt-2"
                style={{
                  fontWeight: 600,
                  lineHeight: "100%",
                  letterSpacing: "0%",
                  textTransform: "uppercase",
                }}
              >
                PLACE!
              </h1>
            </div>

            {/* Mobile Headline */}
            <div className="flex md:hidden flex-col items-center w-full px-2">
              <h1
                className="text-white drop-shadow-md text-[38px] sm:text-[45px] leading-[1.2] text-center"
                style={{
                  fontWeight: 700,
                  letterSpacing: "0%",
                }}
              >
                JOIN US! GREAT<br />PLACE!
              </h1>
            </div>
          </div>

          <p className="mt-6 md:mt-8 max-w-4xl text-[16px] xl:text-[20px] font-normal leading-relaxed md:leading-[1.8] px-2 md:px-0 text-white drop-shadow-sm text-center">
            At Dilshaj Infotech, we&apos;re more than a team — we&apos;re a
            hub of innovation and growth. Driven by creativity,
            powered by collaboration, and supported by strong
            mentorship, our workplace empowers you to design
            impactful digital experiences and build solutions that
            shape the future.
          </p>

          <div className="mt-8 md:mt-10 w-full flex flex-col items-center gap-4 md:gap-5 text-[16px] sm:text-[18px] md:text-[20px] font-bold text-white drop-shadow-md px-4">
            {/* Contact No Row */}
            <div className="flex flex-col sm:flex-row items-center gap-1 sm:gap-3 text-center">
              <span className="opacity-90">Contact No :</span>
              <a href="tel:+918977272783" className="hover:text-blue-200 transition-colors tracking-wide">
                +91 8977272783
              </a>
            </div>

            {/* Email ID Rows */}
            <div className="flex flex-col items-center gap-3 text-[16px] sm:text-[18px] md:text-[20px] font-bold text-white drop-shadow-md">
              <div className="flex flex-col sm:flex-row items-center gap-1 sm:gap-3 text-center">
                <span className="opacity-90">Info Mail ID :</span>
                <a href="mailto:info@dilshajinfotech.tech" className="hover:text-blue-200 transition-colors tracking-wide break-all sm:break-normal">
                  info@dilshajinfotech.tech
                </a>
              </div>
              <div className="flex flex-col sm:flex-row items-center gap-1 sm:gap-3 text-center">
                <span className="opacity-90">Careers Mail ID :</span>
                <a href="mailto:careers@dilshajinfotech.tech" className="hover:text-blue-200 transition-colors tracking-wide break-all sm:break-normal">
                  careers@dilshajinfotech.tech
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- OPEN POSITIONS SECTION --- */}
      <section className="w-full max-w-[1240px] mx-auto py-16 md:py-24 px-6 relative z-10 shrink-0">

        {/* Section Title */}
        <div className="flex items-center justify-center gap-4 mb-12 md:mb-20">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-400 shrink-0">
            <polyline points="13 17 18 12 13 7"></polyline>
            <polyline points="6 17 11 12 6 7"></polyline>
          </svg>
          <h2
            className="text-black uppercase text-center"
            style={{
              fontWeight: 600,
              lineHeight: "100%",
              letterSpacing: "0%",
              fontStyle: "normal"
            }}
          >
            <span className="text-[26px] sm:text-[30px] md:text-[34px]">OPEN POSITION</span>
          </h2>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-400 shrink-0">
            <polyline points="11 17 6 12 11 7"></polyline>
            <polyline points="18 17 13 12 18 7"></polyline>
          </svg>
        </div>

        {/* --- DESKTOP LAYOUT --- */}
        <div className="hidden lg:flex flex-row items-start gap-12 xl:gap-24 relative">

          {/* Sidebar */}
          <div className="w-[307px] flex flex-col gap-6 sticky top-24 shrink-0">
            {(Object.keys(jobsData) as Array<keyof typeof jobsData>).map((tab) => (
              <button
                suppressHydrationWarning
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`relative w-[307px] h-[62px] rounded-[10px] flex items-center justify-center gap-[10px] py-[14px] px-[75px] text-[16px] font-semibold transition-colors duration-300 ${activeTab === tab
                  ? "text-white"
                  : "bg-transparent text-black hover:bg-gray-200/50"
                  }`}
              >
                {activeTab === tab && (
                  <motion.div
                    layoutId="activeTabBackground"
                    className="absolute inset-0 bg-linear-to-r from-[#20B5F9] to-[#A851ED] rounded-[10px] shadow-xl shadow-purple-500/20"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
                <span className="relative z-10 flex items-center gap-[10px]">
                  {icons[tab as keyof typeof icons]} {tab}
                </span>
              </button>
            ))}
          </div>

          {/* Flow Content Area */}
          <div className="flex-1 flex flex-col gap-12">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="flex flex-col gap-12"
              >
                {jobsData[activeTab].map((job, idx) => (
                  <JobCard key={idx} job={job} isDesktop={true} />
                ))}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* --- MOBILE (ACCORDION) LAYOUT --- */}
        <div className="flex lg:hidden flex-col gap-4">
          {(Object.keys(jobsData) as Array<keyof typeof jobsData>).map((tab) => (
            <div key={tab} className="flex flex-col">
              <button
                suppressHydrationWarning
                onClick={() => setActiveTab(tab)}
                className={`relative w-full max-w-[307px] mx-auto min-h-[62px] rounded-[10px] flex items-center justify-center gap-3 py-3 px-6 text-[16px] font-semibold transition-colors duration-300 mb-2 ${activeTab === tab
                  ? "text-white"
                  : "bg-transparent text-black"
                  }`}
              >
                {activeTab === tab && (
                  <motion.div
                    layoutId="activeTabBackgroundMobile"
                    className="absolute inset-0 bg-linear-to-r from-[#20B5F9] to-[#A851ED] rounded-[10px] shadow-md shadow-purple-500/20"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
                <span className="relative z-10 flex items-center gap-3">
                  {icons[tab as keyof typeof icons]} {tab}
                </span>
              </button>

              {/* Render local content only if this tab is active */}
              <AnimatePresence>
                {activeTab === tab && (
                  <motion.div
                    initial={{ opacity: 0, height: 0, scale: 0.95 }}
                    animate={{ opacity: 1, height: "auto", scale: 1 }}
                    exit={{ opacity: 0, height: 0, scale: 0.95 }}
                    transition={{ duration: 0.3 }}
                    className="flex flex-col gap-10 px-1 py-8 max-w-[500px] w-full mx-auto md:max-w-2xl overflow-hidden"
                  >
                    {jobsData[activeTab].map((job, idx) => (
                      <JobCard key={idx} job={job} isDesktop={false} />
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>

      </section>
      {/* --- GALLERY SECTION --- */}
      <section className="w-full mx-auto pb-12 shrink-0 overflow-hidden">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-1 w-full auto-rows-[180px] sm:auto-rows-[220px] md:auto-rows-[260px] lg:auto-rows-[300px]">

          {/* Image 1 (Team Group) - wider span for full photo */}
          <div className="col-span-2 row-span-1 relative overflow-hidden group border-r border-white/5">
            <Image src={img1} alt="Team Group Photo" fill className="object-cover object-center group-hover:scale-105 transition-transform duration-700" />
          </div>

          {/* Image 2 (Team Member) - square-ish */}
          <div className="col-span-1 row-span-1 relative overflow-hidden group">
            <Image src={img2} alt="Team Member" fill className="object-cover object-center group-hover:scale-105 transition-transform duration-700" />
          </div>

          {/* Image 3 (Team outdoors) - Corrected content */}
          <div className="col-span-1 lg:col-span-1 row-span-1 relative overflow-hidden group">
            <Image src={img3} alt="Team outdoors" fill className="object-cover object-center group-hover:scale-105 transition-transform duration-700" />
          </div>

          {/* Image 4 (Field Group) - spans 3 cols in desktop */}
          <div className="col-span-2 lg:col-span-3 row-span-1 relative overflow-hidden group">
            <Image src={img4} alt="Team on field" fill className="object-cover object-center group-hover:scale-105 transition-transform duration-700" />
          </div>

          {/* Image 5 (Conference Table) */}
          <div className="col-span-2 lg:col-span-1 row-span-1 relative overflow-hidden group">
            <Image src={img5} alt="Team at table" fill className="object-cover object-center group-hover:scale-105 transition-transform duration-700" />
          </div>

          {/* Image 6 (Meeting Desk) - taller span and object-top for face visibility */}
          <div className="col-span-2 lg:col-span-4 row-span-2 relative overflow-hidden group">
            <Image src={img6} alt="Team meeting" fill className="object-cover object-center group-hover:scale-105 transition-transform duration-700" />
          </div>
        </div>
      </section>
      {/* --- SHARED CONTACT & FOOTER SECTIONS --- */}
      <ContactSection />
      <Footer />
    </div>
  );
}

// Reusable Job Card matching exact specifications
function JobCard({ job, isDesktop }: { job: any; isDesktop: boolean }) {
  return (
    <div className="flex flex-col gap-3.5 w-full">

      {/* Dynamic Title depending on screen */}
      <h3 className={`text-[17px] md:text-[20px] font-bold uppercase tracking-wide leading-tight ${!isDesktop
        ? "text-transparent bg-clip-text bg-linear-to-r from-[#C36FF9] to-[#9154F7]"
        : "text-[#1B1B1B]"
        }`}>
        {job.title}
      </h3>

      {/* Description text */}
      <p className="text-[#333333] text-[13px] md:text-[14.5px] font-medium leading-[1.6] max-w-2xl">
        {job.desc}
      </p>

      {/* Bottom Row: Icons and Button */}
      <div className="flex flex-wrap items-center justify-between w-full mt-1.5 gap-4">

        {/* Info Tags */}
        <div className="flex items-center gap-5 text-[#424242] text-[12px] md:text-[13.5px] font-semibold">
          <div className="flex items-center gap-1.5">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-black/70">
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
              <circle cx="12" cy="10" r="3"></circle>
            </svg>
            {job.location}
          </div>
          <div className="flex items-center gap-1.5">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-black/70">
              <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
              <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
            </svg>
            {job.experience}
          </div>
        </div>

        {/* Updated Apply Gradient Button matching Get In Touch design */}
        <button 
          suppressHydrationWarning 
          className="group relative h-11 w-full sm:w-fit cursor-pointer overflow-hidden transition-all duration-700 rounded-[28px_28px_0px_28px] hover:rounded-[28px_28px_28px_0px] shadow-lg flex items-center"
        >
          {/* Animated circle toggle */}
          <div className="absolute left-0 w-11 h-11 rounded-full bg-white flex items-center justify-center shadow-md z-20 transition-all duration-700 ease-in-out group-hover:left-[calc(100%-44px)] group-hover:bg-linear-to-r group-hover:from-[#3799FA] group-hover:to-[#9961FB] group-hover:scale-105">
            <FaChevronRight className="w-3.5 h-3.5 text-[#3799FA] transition-all duration-700 ease-in-out group-hover:text-white" />
          </div>
          {/* Button text body */}
          <div className="pl-13 pr-7 h-full flex items-center text-white font-bold text-[14px] transition-all duration-700 ease-in-out bg-linear-to-r from-[#3799FA] to-[#9961FB] group-hover:from-white group-hover:to-white group-hover:text-black group-hover:pl-6 group-hover:pr-13 rounded-[28px_28px_0px_28px] group-hover:rounded-[28px_28px_28px_0px] min-h-[44px]">
            Apply Today
          </div>
        </button>

      </div>
    </div>
  );
}
