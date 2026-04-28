"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaReact, FaNodeJs, FaAws, FaFigma, FaFlutter, FaChartBar, FaJava, FaPython, FaDocker, FaHtml5, FaCss3Alt, FaGraduationCap, FaBriefcase, FaUsers, FaMobileScreenButton, FaAward, FaChalkboardUser, FaLightbulb, FaShieldHalved, FaClock, FaCirclePlay, FaStar, FaPhone, FaWhatsapp, FaPlus, FaMinus, FaCar, FaMotorcycle, FaMapLocationDot, FaCreditCard, FaStore, FaBox, FaCartShopping, FaNewspaper, FaBell, FaGear, FaMagnifyingGlassChart, FaChevronRight } from "react-icons/fa6";
import { SiMongodb, SiNextdotjs } from "react-icons/si";
import { IoMdArrowForward, IoMdArrowBack } from "react-icons/io";
import Lenis from "lenis";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
import HomeScrollAnimations from "./components/HomeScrollAnimations";
import HeroSection from "./components/HeroSection";
import ScrollStack, { ScrollStackItem } from "./components/ScrollStack";
import Carousel from "./components/Carousel";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const products = [
  {
    name: "Ride Booking App",
    desc: "Smart ride-booking solutions built to connect riders and drivers with modern digital platforms.",
    title: "Bike & Car Ride Booking App",
    subtitle: "Delivering smart ride-booking solutions designed to connect riders and drivers seamlessly, providing fast, reliable, and convenient transportation experiences through modern digital platforms.",
    highlights: [
      { label: "Easy Ride Booking Experience", icon: <FaCar className="w-5 h-5 text-blue-500" /> },
      { label: "Smart Driver & Trip Management", icon: <FaGear className="w-5 h-5 text-blue-500" /> },
      { label: "Real-Time Tracking & Secure Payments", icon: <FaMapLocationDot className="w-5 h-5 text-blue-500" /> }
    ],
    features: [
      {
        name: "Bike & Car Ride Booking Platform",
        icon: <FaCar className="w-6 h-6 text-blue-500" />
      },
      {
        name: "Live Location & Route Tracking",
        icon: <FaMapLocationDot className="w-6 h-6 text-blue-500" />
      },
      {
        name: "Online Payment Integration",
        icon: <FaCreditCard className="w-6 h-6 text-blue-500" />
      },
      {
        name: "Mobile-Friendly Ride App",
        icon: <FaMobileScreenButton className="w-6 h-6 text-blue-500" />
      },
      {
        name: "Ride Analytics & Management Dashboard",
        icon: <FaMagnifyingGlassChart className="w-6 h-6 text-blue-500" />
      }
    ]
  },
  {
    name: "E-Commerce",
    desc: "Modern e-commerce platforms designed to help businesses sell online and manage products efficiently.",
    title: "E-Commerce",
    subtitle: "Delivering modern e-commerce platforms designed to help businesses sell online, manage products efficiently, and provide seamless shopping experiences across web and mobile devices.",
    highlights: [
      { label: "Smart Online Store Development", icon: <FaStore className="w-5 h-5 text-blue-500" /> },
      { label: "Product & Order Management", icon: <FaBox className="w-5 h-5 text-blue-500" /> },
      { label: "Seamless Shopping Experience", icon: <FaCartShopping className="w-5 h-5 text-blue-500" /> }
    ],
    features: [
      { name: "Custom E-Commerce Website Development", icon: <FaStore className="w-6 h-6 text-blue-500" /> },
      { name: "Secure Payment Gateway Integration", icon: <FaCreditCard className="w-6 h-6 text-blue-500" /> },
      { name: "Inventory & Order Management Systems", icon: <FaBox className="w-6 h-6 text-blue-500" /> },
      { name: "Mobile-Optimized Shopping Experience", icon: <FaMobileScreenButton className="w-6 h-6 text-blue-500" /> },
      { name: "Sales Analytics & Performance Insights", icon: <FaMagnifyingGlassChart className="w-6 h-6 text-blue-500" /> }
    ]
  },
  {
    name: "Food Delivery App",
    desc: "Smart food delivery solutions built to connect foodies with their favorite restaurants seamlessly.",
    title: "Food Delivery Application",
    subtitle: "Delivering a fast, reliable, and smart food delivery platform designed to connect foodies with their favorite restaurants seamlessly, targetting 15min delivery.",
    highlights: [
      { label: "15min Delivery Target", icon: <FaClock className="w-5 h-5 text-blue-500" /> },
      { label: "Live Order Tracking", icon: <FaMapLocationDot className="w-5 h-5 text-blue-500" /> },
      { label: "Seamless Ordering", icon: <FaCartShopping className="w-5 h-5 text-blue-500" /> }
    ],
    features: [
      { name: "Real-Time Order Tracking", icon: <FaMapLocationDot className="w-6 h-6 text-blue-500" /> },
      { name: "Multiple Payment Options", icon: <FaCreditCard className="w-6 h-6 text-blue-500" /> },
      { name: "Restaurant Partner Dashboard", icon: <FaStore className="w-6 h-6 text-blue-500" /> },
      { name: "Exclusive Offers & Discounts", icon: <FaBox className="w-6 h-6 text-blue-500" /> },
      { name: "Smart Delivery Allocation", icon: <FaMotorcycle className="w-6 h-6 text-blue-500" /> }
    ]
  },
  {
    name: "Digital News",
    desc: "Modern digital news solutions designed to share real-time updates and enhance reader engagement.",
    title: "Digital News",
    subtitle: "Delivering modern digital news solutions designed to share real-time updates, enhance reader engagement, and provide seamless content experiences across web and mobile platforms.",
    highlights: [
      { label: "Real-Time News Publishing", icon: <FaNewspaper className="w-5 h-5 text-blue-500" /> },
      { label: "Smart Content Management", icon: <FaGear className="w-5 h-5 text-blue-500" /> },
      { label: "Engaging Reader Experiences", icon: <FaUsers className="w-5 h-5 text-blue-500" /> }
    ],
    features: [
      { name: "News Portal Development", icon: <FaNewspaper className="w-6 h-6 text-blue-500" /> },
      { name: "Content Management System (CMS)", icon: <FaGear className="w-6 h-6 text-blue-500" /> },
      { name: "Live Updates & Push Notifications", icon: <FaBell className="w-6 h-6 text-blue-500" /> },
      { name: "Mobile-Optimized News Experience", icon: <FaMobileScreenButton className="w-6 h-6 text-blue-500" /> },
      { name: "Analytics & Audience Insights", icon: <FaMagnifyingGlassChart className="w-6 h-6 text-blue-500" /> }
    ]
  }
];

const services = [
  {
    name: "App & Web Development",
    desc: "Modern and secure app & web development solutions built to help businesses grow with confidence.",
    bannerTitle: "Scale Your Vision with Our Tech Solutions.",
    bannerTag: "Ready to scale faster and smarter?",
    image: "/service.png",
    color: "#20B5F9"
  },
  {
    name: "UI/UX Design",
    desc: "Driven by research, creativity, and strategic design thinking to deliver seamless interactions across web and mobile platforms.",
    bannerTitle: "Designing Seamless Digital Experiences",
    bannerTag: "User-centric design that converts.",
    image: "/service.png",
    color: "#A851ED"
  },
  {
    name: "Digital Marketing",
    desc: "Combining creative strategy, performance marketing, and analytics to deliver impactful results across all digital platforms.",
    bannerTitle: "Data-Driven Marketing for Growth",
    bannerTag: "Boost your presence effectively.",
    image: "/service.png",
    color: "#20B5F9"
  },
  {
    name: "Banking software",
    desc: "Built with scalable architecture, strong security, and user-focused design to meet the evolving needs of financial institutions",
    bannerTitle: "Secure and Scalable Fintech Solutions",
    bannerTag: "Powering the future of finance.",
    image: "/service.png",
    color: "#A851ED"
  },
  {
    name: "Data Analyst",
    desc: "Using advanced analytics and visualization tools to uncover insights, improve performance, and drive smarter decisions.",
    bannerTitle: "Insightful Data for Smarter Decisions",
    bannerTag: "Turn data into your strongest asset.",
    image: "/service.png",
    color: "#20B5F9"
  },
  {
    name: "Chat Process",
    desc: "Built with scalable systems and secure communication to deliver fast responses and seamless customer experiences.",
    bannerTitle: "Seamless Customer Communication",
    bannerTag: "Fast, secure, and reliable support.",
    image: "/service.png",
    color: "#A851ED"
  }
];

const technologies = [
  {
    name: "AI & ML",
    desc: "Smart Systems",
    title: "AI & MACHINE LEARNING",
    content: "We build intelligent solutions that automate workflows, enhance decision-making, and create personalized user experiences using advanced AI capabilities.",
    features: ["Predictive Intelligence", "Natural Language Processing", "Computer Vision Solutions"],
    image: "/Home/technologies/aiml.png"
  },
  {
    name: "Cloud & DevOps",
    desc: "Scalable Infra",
    title: "CLOUD & DEVOPS",
    content: "We design and manage cloud-native systems with seamless deployment pipelines, ensuring high performance, scalability, and reliability.",
    features: ["Auto Scaling Systems", "Continuous Integration & Delivery", "High Availability Architecture"],
    image: "/Home/technologies/cloud and dev .png"
  },
  {
    name: "Web Technologies",
    desc: "Modern Apps",
    title: "WEB TECHNOLOGIES",
    content: "We create responsive, fast, and scalable web applications using modern frameworks tailored to deliver seamless user experiences.",
    features: ["Responsive UI Systems", "Fast Load Performance", "Scalable Architecture"],
    image: "/Home/technologies/web technologies.png"
  },
  {
    name: "Mobile Technologies",
    desc: "Seamless Apps",
    title: "MOBILE TECHNOLOGIES",
    content: "We develop intuitive and high-performance mobile applications focused on usability, speed, and engaging user experiences.",
    features: ["Cross-Platform Apps", "Smooth Performance", "User-Centric Design"],
    image: "/Home/technologies/mobile1.png"
  },
  {
    name: "Data & Analytics",
    desc: "Actionable Insights",
    title: "DATA & ANALYTICS",
    content: "We transform raw data into meaningful insights with powerful analytics solutions that help businesses make smarter decisions.",
    features: ["Real-Time Data Processing", "Insightful Dashboards", "Predictive Analytics"],
    image: "/Home/technologies/data analytics.png"
  },
  {
    name: "UI/UX Design",
    desc: "Intuitive Experiences",
    title: "UI/UX DESIGN",
    content: "We design user-focused interfaces that combine aesthetics and functionality, delivering seamless and engaging experiences that enhance usability and strengthen your brand.",
    features: ["User-Centered Design", "Consistent Design Systems", "Intuitive User Journeys"],
    image: "/Home/technologies/UIUX.png"
  }
];

const accelerationFeatures = [
  {
    title: "Innovative Digital Solutions for Modern Businesses",
    desc: "We leverage cutting-edge technology to build tailored digital products that solve complex business challenges.",
    image: "/Home/WHD/digital-solution.png",
    type: "large",
    icon: (
      <div className="w-12 h-12 relative">
        <Image src="/Home/Vector.png" alt="Innovation Icon" fill className="object-contain" />
      </div>
    )
  },
  {
    title: "Built to Scale & Perform",
    desc: "Our solutions are engineered for high performance and seamless scalability as your business grows.",
    type: "small",
    gradient: "radial-gradient(circle at 20% 20%, #03A3FF 0%, #054F91 100%)",
    icon: (
      <div className="w-14 h-14 relative">
        <Image src="/Home/mask_group.png" alt="Scale Icon" fill className="object-contain" />
      </div>
    )
  },
  {
    title: "User-Focused Design",
    desc: "Empowering users with intuitive interfaces and seamless experiences that prioritize user needs.",
    type: "small",
    gradient: "radial-gradient(circle at 80% 80%, #03A3FF 0%, #054F91 100%)",
    icon: (
      <div className="w-12 h-12 rounded-full border-2 border-dashed border-white/40 flex items-center justify-center">
        <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center shadow-lg">
          <Image src="/Home/user.png" alt="User Icon" width={24} height={24} className="object-contain" />
        </div>
      </div>
    )
  },
  {
    title: "End-to-End Development & Support Services",
    desc: "From ideation to deployment and beyond, we provide comprehensive support for your digital journey.",
    image: "/Home/WHD/support-service.png",
    type: "large",
    icon: (
      <div className="w-12 h-12 relative">
        <Image src="/Home/group_dev_icon.png" alt="Dev Icon" fill className="object-contain" />
      </div>
    )
  }
];

const blogPosts = [
  {
    title: "The Future of Digital Transformation...",
    image: "/Blog/blog1.png",
    tag: "BLOG",
    metadata: "3 Mins Read",
    type: "read"
  },
  {
    title: "Web & App Development Trends...",
    image: "/Blog/blog2.png",
    tag: "BLOG",
    metadata: "3 Mins Watch",
    type: "watch"
  },
  {
    title: "Cybersecurity in Modern Business...",
    image: "/Blog/blog3.png",
    tag: "BLOG",
    metadata: "3 Mins Read",
    type: "read"
  }
];

const testimonials = [
  {
    name: "Vikram Reddy",
    role: "Founder & CEO",
    image: "/Testimonials/vikram.png",
    type: "video"
  },
  {
    name: "Neha Singh",
    role: "Managing Director",
    image: "/Testimonials/neha.png",
    type: "message",
    stars: 5,
    message: "Their user-focused approach and expertise helped us build a product our customers love. Dilshaj Infotech delivered a seamless solution with creativity, professionalism, and true commitment to quality."
  },
  {
    name: "Arjun Mehta",
    role: "CTO",
    image: "/Testimonials/arjun.png",
    type: "video"
  },
  {
    name: "Priya Sharma",
    role: "Product Manager",
    image: "/Testimonials/priya.png",
    type: "message",
    stars: 5,
    message: "\"The development process was incredibly smooth. They didn't just write code; they understood our business goals and helped us refine our digital strategy for better user engagement.\""
  },
  {
    name: "Ananya Gupta",
    role: "Co-Founder & CEO",
    image: "/Testimonials/ananya.png",
    type: "video"
  },
  {
    name: "Sonal Varma",
    role: "Head of Operations",
    image: "/Testimonials/sonal.png",
    type: "message",
    stars: 5,
    message: "Dilshaj Infotech transformed our legacy systems into a modern, high-performance platform. Their attention to detail and proactive support made all the difference in our success."
  },
  {
    name: "Karthik Nair",
    role: "Tech Lead",
    image: "/Testimonials/karthik.png",
    type: "video"
  },
  {
    name: "Rahul Sharma",
    role: "CEO",
    image: "/Testimonials/rahul.png",
    type: "message",
    stars: 5,
    message: "\"Dilshaj Infotech exceeded our expectations with their creativity and technical expertise. Their team understood our requirements clearly and delivered a solution that improved our business performance and digital presence.\""
  }
];

const faqData = [
  {
    question: "What Services Does Dilshaj Infotech Provide?",
    answer: "We offer a comprehensive range of services including Custom Software Development, Mobile App Development (iOS & Android), Web Application Development, Cloud Solutions, AI & Machine Learning Integration, and Digital Transformation consulting."
  },
  {
    question: "How Much Does a Custom Software Project Cost?",
    answer: "The cost depends on various factors such as project complexity, features, platform (web/mobile), and integration requirements. We provide tailored quotes after a detailed discovery session to understand your specific business needs."
  },
  {
    question: "How Long Does It Take to Develop a Web or Mobile Application?",
    answer: "Development timelines vary based on scope. Typically, a Minimum Viable Product (MVP) takes 2-4 months, while more complex enterprise solutions can take 6 months or longer. We follow agile methodologies to ensure timely delivery."
  },
  {
    question: "Can You Integrate New Solutions Into Existing Systems?",
    answer: "Yes, we specialize in legacy system modernization and third-party API integrations. We ensure that new solutions work seamlessly with your current infrastructure to minimize disruption and maximize efficiency."
  },
  {
    question: "Which Industries Do You Work With?",
    answer: "We work across diverse sectors including Healthcare, Education (EdTech), Finance (FinTech), E-commerce, Real Estate, and Logistics. Our team adapts to the specific compliance and functional needs of each industry."
  },
  {
    question: "Why Choose Dilshaj Infotech as Your Technology Partner?",
    answer: "Clients choose us for our technical excellence, transparent communication, and commitment to delivering user-centric solutions. We don't just build software; we partner with you to drive innovation and business growth."
  }
];

const careerJobs = [
  {
    title: "Senior Frontend Engineer",
    location: "Vizag",
    experience: "4+ years",
    icon: (
      <div className="w-20 h-20 rounded-full bg-white flex items-center justify-center shadow-lg border-4 border-blue-500/20 p-2 overflow-hidden">
        <Image src="https://images.unsplash.com/photo-1593642532842-98d0fd5ebc1a?auto=format&fit=crop&w=200&q=80" alt="Frontend" fill className="object-cover rounded-full p-4" />
      </div>
    )
  },
  {
    title: "Product Designer",
    location: "Vizag",
    experience: "2+ years",
    icon: (
      <div className="w-20 h-20 rounded-full bg-white flex items-center justify-center shadow-lg border-4 border-purple-500/20 p-2 overflow-hidden">
        <Image src="https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg" alt="Design" fill className="object-contain p-4" />
      </div>
    )
  },
  {
    title: "Backend Engineer",
    location: "Vizag",
    experience: "4+ years",
    icon: (
      <div className="w-20 h-20 rounded-full bg-white flex items-center justify-center shadow-lg border-4 border-indigo-500/20 p-2 overflow-hidden">
        <Image src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=200&q=80" alt="Backend" fill className="object-cover rounded-full p-4" />
      </div>
    )
  },
  {
    title: "Full Stack Developer",
    location: "Vizag",
    experience: "4+ years",
    icon: (
      <div className="w-20 h-20 rounded-full bg-white flex items-center justify-center shadow-lg border-4 border-blue-400/20 p-2 overflow-hidden">
        <Image src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=200&q=80" alt="Full Stack" fill className="object-cover rounded-full p-4" />
      </div>
    )
  },
  {
    title: "UI/UX Specialist",
    location: "Remote/Vizag",
    experience: "3+ years",
    icon: (
      <div className="w-20 h-20 rounded-full bg-white flex items-center justify-center shadow-lg border-4 border-pink-500/20 p-2 overflow-hidden">
        <Image src="https://images.unsplash.com/photo-1561070791-36c11767b26a?auto=format&fit=crop&w=200&q=80" alt="UIUX" fill className="object-cover rounded-full p-4" />
      </div>
    )
  },
  {
    title: "Mobile App Developer",
    location: "Vizag",
    experience: "3+ years",
    icon: (
      <div className="w-20 h-20 rounded-full bg-white flex items-center justify-center shadow-lg border-4 border-orange-500/20 p-2 overflow-hidden">
        <Image src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=200&q=80" alt="Mobile" fill className="object-cover rounded-full p-4" />
      </div>
    )
  },
  {
    title: "DevOps Engineer",
    location: "Vizag",
    experience: "5+ years",
    icon: (
      <div className="w-20 h-20 rounded-full bg-white flex items-center justify-center shadow-lg border-4 border-cyan-500/20 p-2 overflow-hidden">
        <Image src="https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?auto=format&fit=crop&w=200&q=80" alt="DevOps" fill className="object-cover rounded-full p-4" />
      </div>
    )
  },
  {
    title: "QA Automation Lead",
    location: "Vizag",
    experience: "6+ years",
    icon: (
      <div className="w-20 h-20 rounded-full bg-white flex items-center justify-center shadow-lg border-4 border-teal-500/20 p-2 overflow-hidden">
        <Image src="https://images.unsplash.com/photo-1516116216624-53e697fedbea?auto=format&fit=crop&w=200&q=80" alt="QA" fill className="object-cover rounded-full p-4" />
      </div>
    )
  }
];

export default function Home() {
  const [hasScrolled, setHasScrolled] = useState(false);
  const [activeServiceIdx, setActiveServiceIdx] = useState(0);

  const handleServiceIndexChange = useCallback((idx: number) => {
    setActiveServiceIdx(idx);
  }, []);
  const [activeProductIdx, setActiveProductIdx] = useState(0);
  const mobileProductScrollRef = useRef<HTMLDivElement>(null);
  const mobilePillScrollRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    // Auto scroll the mobile pills container to keep the active pill centered
    const activePill = document.getElementById(`mobile-pill-product-${activeProductIdx}`);
    const container = mobilePillScrollRef.current;
    if (activePill && container) {
      const scrollPos = activePill.offsetLeft - (container.clientWidth / 2) + (activePill.clientWidth / 2);
      container.scrollTo({ left: scrollPos, behavior: 'smooth' });
    }
  }, [activeProductIdx]);

  const handleProductIndexChange = useCallback((idx: number) => {
    setActiveProductIdx(idx);
    if (mobileProductScrollRef.current) {
      // Smooth scroll to the specific card index
      const cardWidth = mobileProductScrollRef.current.clientWidth;
      mobileProductScrollRef.current.scrollTo({
        left: idx * cardWidth,
        behavior: 'smooth'
      });
    }
  }, []);
  const [activeTechIdx, setActiveTechIdx] = useState(0);
  const handleTechIndexChange = useCallback((idx: number) => {
    setActiveTechIdx(idx);
  }, []);
  const [activeFaqIdx, setActiveFaqIdx] = useState(0);
  const handleFaqIndexChange = useCallback((idx: number) => {
    setActiveFaqIdx(idx);
  }, []);
  const [hoveredServiceIdx, setHoveredServiceIdx] = useState<number | null>(null);
  const [isContactActive, setIsContactActive] = useState(false);

  useEffect(() => {
    // Initialize Lenis for smooth scrolling
    const lenis = new Lenis({
      lerp: 0.08, // Increased smoothing for buttery feel
      duration: 1.5, // Longer, more graceful travel
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      wheelMultiplier: 0.9, // Better control
    });

    const raf = (time: number) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };
    requestAnimationFrame(raf);

    const handleScroll = () => {
      setHasScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);

    // ─── Bi-Directional Scroll Tracking with GSAP ───
    // Using ScrollTrigger for the sidebars is much more reliable than IntersectionObserver
    // for sticky/stacking layouts when scrolling both UP and DOWN.
    const ctx = gsap.context(() => {
      // Products Tracking
      const productPanels = document.querySelectorAll('.product-panel');
      productPanels.forEach((panel, i) => {
        ScrollTrigger.create({
          trigger: panel,
          start: "top 50%",
          end: "bottom 50%",
          onToggle: (self) => {
            if (self.isActive) setActiveProductIdx(i);
          },
          // On leave back (scrolling up), if it's the first card, ensure it stays active
          onLeaveBack: () => {
            if (i === 0) setActiveProductIdx(0);
          }
        });
      });

      // Tech Tracking
      const techPanels = document.querySelectorAll('.tech-panel');
      techPanels.forEach((panel, i) => {
        ScrollTrigger.create({
          trigger: panel,
          start: "top 50%",
          end: "bottom 50%",
          onToggle: (self) => {
            if (self.isActive) setActiveTechIdx(i);
          },
          onLeaveBack: () => {
            if (i === 0) setActiveTechIdx(0);
          }
        });
      });
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      ctx.revert();
      lenis.destroy();
    };
  }, []);

  // ─── Auto-Scroll Sidebars to keep active item in view ───
  useEffect(() => {
    const activeItem = document.getElementById(`product-sidebar-item-${activeProductIdx}`);
    const sidebar = document.getElementById('product-sidebar-container');
    if (activeItem && sidebar) {
      const topPos = activeItem.offsetTop - (sidebar.clientHeight / 2) + (activeItem.clientHeight / 2);
      sidebar.scrollTo({ top: topPos, behavior: 'smooth' });
    }
  }, [activeProductIdx]);

  useEffect(() => {
    const activeItem = document.getElementById(`tech-sidebar-item-${activeTechIdx}`);
    const sidebar = document.getElementById('tech-sidebar-container');
    if (activeItem && sidebar) {
      const topPos = activeItem.offsetTop - (sidebar.clientHeight / 2) + (activeItem.clientHeight / 2);
      sidebar.scrollTo({ top: topPos, behavior: 'smooth' });
    }
  }, [activeTechIdx]);

  return (
    <div className="min-h-screen selection:bg-blue-100 relative overflow-x-clip font-sans bg-linear-to-r from-[#CAD0FF] to-[#E3E3E3]">

      <HeroSection />

      <main className='w-full flex flex-col items-center pt-2 relative'>
        {/* DARK SECTION: Ticker + Impact Card with Overlap */}
        <HomeScrollAnimations />
        <div data-section="stats" className="w-full bg-black pt-10 lg:pt-20 pb-0 overflow-hidden flex flex-col items-center gap-8 lg:gap-20 mt-16 lg:mt-30 relative">
          {/* Animated Background Glows */}
          <div className="hidden lg:block absolute top-0 left-1/4 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px] -translate-y-1/2" />
          <div className="hidden lg:block absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[120px] translate-y-1/2" />


          <div className="w-full max-w-[1700px] px-0 lg:px-20 relative z-10">
            {/* MOBILE TECHNOLOGY GRID (Consolidated into 2 Scrolling Rows) */}
            <div className="flex lg:hidden flex-col items-center w-full px-0 mb-8 mt-2 select-none overflow-hidden relative">
              <style>{`
                @keyframes scroll-ltr { from { transform: translateX(-50%); } to { transform: translateX(0%); } }
                @keyframes scroll-rtl { from { transform: translateX(0%); } to { transform: translateX(-50%); } }
                .animate-scroll-ltr { animation: scroll-ltr 25s linear infinite; width: max-content; }
                .animate-scroll-rtl { animation: scroll-rtl 25s linear infinite; width: max-content; }
              `}</style>

              {/* Top Row: Left to Right Marquee - 7 icons */}
              <div className="w-full flex pb-6 border-b border-white/5 mask-image-fade">
                <div className="flex animate-scroll-ltr">
                  {[...Array(4)].map((_, i) => (
                    <div key={i} className="flex items-center">
                      {[
                        { name: "Node.js", icon: <FaNodeJs className="w-[28px] h-[32px] text-white" /> },
                        { name: "AWS", icon: <FaAws className="w-[38px] h-[28px] text-white mt-1" /> },
                        { name: "React", icon: <FaReact className="w-[28px] h-[28px] text-white" /> },
                        { name: "MongoDB", icon: <SiMongodb className="w-[20px] h-[28px] text-white" /> },
                        { name: "Next.js", icon: <SiNextdotjs className="w-[28px] h-[28px] text-white" /> },
                        { name: "Flutter", icon: <FaFlutter className="w-[28px] h-[28px] text-white" /> },
                        { name: "Figma", icon: <FaFigma className="w-[20px] h-[28px] text-white" /> }
                      ].map((tech, j) => (
                        <div key={j} className="flex items-center justify-center gap-[6px] w-[122px] h-[52px] mr-4">
                          <div className="flex items-center justify-center shrink-0">{tech.icon}</div>
                          <span className="text-white text-[15px] sm:text-[18px] font-medium tracking-wide whitespace-nowrap">{tech.name}</span>
                        </div>
                      ))}
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Row: Right to Left Marquee - 6 icons */}
              <div className="w-full flex pt-6">
                <div className="flex animate-scroll-rtl">
                  {[...Array(4)].map((_, i) => (
                    <div key={i} className="flex items-center">
                      {[
                        { name: "Power BI", icon: <FaChartBar className="w-[28px] h-[28px] text-white" /> },
                        { name: "Java", icon: <FaJava className="w-[28px] h-[28px] text-white" /> },
                        { name: "Python", icon: <FaPython className="w-[28px] h-[28px] text-white" /> },
                        { name: "Docker", icon: <FaDocker className="w-[28px] h-[28px] text-white" /> },
                        { name: "HTML", icon: <FaHtml5 className="w-[28px] h-[28px] text-white" /> },
                        { name: "CSS", icon: <FaCss3Alt className="w-[28px] h-[28px] text-white" /> }
                      ].map((tech, j) => (
                        <div key={j} className="flex items-center justify-center gap-[6px] w-[122px] h-[52px] mr-4">
                          <div className="flex items-center justify-center shrink-0">{tech.icon}</div>
                          <span className="text-white text-[15px] sm:text-[18px] font-medium tracking-wide whitespace-nowrap">{tech.name}</span>
                        </div>
                      ))}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* TECHNOLOGY TICKERS (Desktop Only) */}
            <div className="hidden lg:flex animate-marquee whitespace-nowrap items-center mb-20">
              {[...Array(2)].map((_, i) => (
                <div key={i} className="flex items-center gap-20 pr-20">
                  {[
                    { name: "React", primary: "#61DAFB" },
                    {
                      name: "Node.js", logo: (
                        <svg className="w-8 h-8" fill="#339933" viewBox="0 0 24 24"><path d="M12 21a1 1 0 0 1-1-1v-4a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1h-6zM11 7V3a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1h-6a1 1 0 0 1-1-1zM4 14a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1v1h1a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-4z" /></svg>
                      )
                    },
                    {
                      name: "AWS", logo: (
                        <svg className="w-10 h-10" fill="white" viewBox="0 0 24 24"><path d="M12.5 15.5c-2.3 0-3.8-1.2-3.8-3s1.5-3 3.8-3 3.8 1.2 3.8 3-1.5 3-3.8 3zm0-4.8c-1.5 0-2.4.7-2.4 1.8s.9 1.8 2.4 1.8 2.4-.7 2.4-1.8-.9-1.8-2.4-1.8zm6.5 6.4c0-.6-.3-1.2-1-1.6l-.7-.4c-.5-.3-.7-.6-.7-1 0-.6.5-1.1 1.2-1.1.6 0 1.1.2 1.4.6l1.2-1c-.5-.7-1.4-1.2-2.6-1.2-1.6 0-2.7 1.1-2.7 2.6 0 .9.5 1.7 1.4 2.3l.7.4c.5.3.7.6.7 1 0 .6-.5 1.1-1.2 1.1-.7 0-1.3-.3-1.6-.8l-1.2 1c.5.9 1.6 1.4 2.8 1.4 1.8 0 2.9-1.3 2.9-2.7zM6.5 18c-1.6 0-2.8-1-2.8-2.6S5 12.8 6.5 12.8c1.2 0 2.1.6 2.5 1.3l1.2-.8c-.7-1.1-1.9-2-3.7-2-2.5 0-4.3 1.8-4.3 4.1s1.8 4.1 4.3 4.1c1.8 0 3-.9 3.7-2l-1.2-.8c-.4.7-1.3 1.3-2.5 1.3z" /></svg>
                      )
                    },
                    { name: "MongoDB", primary: "#47A248" },
                    { name: "Next.js", primary: "white" },
                    { name: "Flutter", primary: "#02569B" },
                    { name: "Figma", primary: "#F24E1E" },
                    { name: "Power BI", primary: "#F2C811" },
                    { name: "Java", primary: "#ED8B00" },
                    { name: "Python", primary: "#3776AB" },
                    { name: "Docker", primary: "#2496ED" },
                    { name: "HTML", primary: "#E34F26" },
                    { name: "CSS", primary: "#1572B6" }
                  ].map((tech, idx) => (
                    <div key={idx} className="flex items-center gap-4 group cursor-pointer">
                      <div className="w-10 h-10 flex items-center justify-center group-hover:opacity-100 transition-opacity">
                        {tech.name === "React" && <FaReact className="w-10 h-10 text-white" />}
                        {tech.name === "Node.js" && <FaNodeJs className="w-10 h-10 text-white" />}
                        {tech.name === "AWS" && <FaAws className="w-10 h-10 text-white" />}
                        {tech.name === "MongoDB" && <SiMongodb className="w-10 h-10 text-white" />}
                        {tech.name === "Next.js" && <SiNextdotjs className="w-10 h-10 text-white" />}
                        {tech.name === "Flutter" && <FaFlutter className="w-10 h-10 text-white" />}
                        {tech.name === "Figma" && <FaFigma className="w-10 h-10 text-white" />}
                        {tech.name === "Power BI" && <FaChartBar className="w-10 h-10 text-white" />}
                        {tech.name === "Java" && <FaJava className="w-10 h-10 text-white" />}
                        {tech.name === "Python" && <FaPython className="w-10 h-10 text-white" />}
                        {tech.name === "Docker" && <FaDocker className="w-10 h-10 text-white" />}
                        {tech.name === "HTML" && <FaHtml5 className="w-10 h-10 text-white" />}
                        {tech.name === "CSS" && <FaCss3Alt className="w-10 h-10 text-white" />}
                      </div>
                      <span className="text-white text-[28px] font-bold tracking-tight group-hover:opacity-100 transition-opacity">
                        {tech.name}
                      </span>
                    </div>
                  ))}
                </div>
              ))}
            </div>

            {/* IMPACT SECTION - 4 column stats card */}
            <div className="impact-card bg-white rounded-none lg:rounded-t-[40px] shadow-none lg:shadow-[0_20px_80px_-15px_rgba(255,255,255,0.05)] px-0 pt-10 pb-6 lg:p-16 flex flex-col gap-10 lg:gap-12 border-none lg:border lg:border-gray-100">
              {/* Top row with main headline and primary stat */}
              <div className="flex flex-col lg:flex-row justify-between items-start gap-8 lg:gap-12 px-4 lg:px-0">
                <div className="w-full lg:w-auto flex flex-col items-start px-0 lg:px-0">
                  <h2 className="section-label text-[30px] sm:text-[36px] lg:text-[42px] xl:text-[52px] font-semibold text-[#63666A] leading-[1.15] lg:leading-[1.1] mb-6 font-poppins text-left max-w-[full] lg:max-w-[850px] xl:max-w-[1000px]">
                    Building the Future of Technology<br />
                    <span className="text-slate-500">With </span>
                    <span className="text-[#31B5FE]">Vision, </span>
                    <span className="text-[#AC52F2]">Innovation & Impact</span>
                  </h2>
                </div>

                <div className="stat-number-item hidden lg:flex flex-col gap-4 max-w-[300px] lg:pl-16 lg:border-l border-gray-100 h-full">
                  <span className="stat-value text-[50px] xl:text-[72px] font-semibold text-black leading-none mb-2" data-value="15">15+</span>
                  <div className="flex gap-3 items-start">
                    <div className="w-10 h-10 rounded-full bg-[#0E4E8B] flex items-center justify-center shrink-0 animate-pulse-slow">
                      <Image src="/Home/building/icon1.png" alt="icon1" width={24} height={24} className="object-contain brightness-0 invert" />
                    </div>
                    <p className="text-[17px] font-medium text-gray-600 leading-tight">
                      Innovative and Future-Ready <span className="font-bold text-black">Digital Product Ideas</span>
                    </p>
                  </div>
                </div>
              </div>

              {/* DESKTOP Bottom Row - 4 columns separated by vertical bars */}
              <div className="hidden lg:grid grid-cols-4 gap-6 xl:gap-12 pt-10 border-t border-gray-100">
                {/* 100% Stat */}
                <div className="stat-number-item flex flex-col gap-4">
                  <span className="stat-value text-[50px] xl:text-[72px] font-semibold text-black leading-none mb-2" data-value="100">100%</span>
                  <div className="flex gap-4 items-start">
                    <div className="w-10 h-10 rounded-full bg-[#0E4E8B] flex items-center justify-center shrink-0">
                      <Image src="/Home/building/icon2.png" alt="icon2" width={24} height={24} className="object-contain brightness-0 invert" />
                    </div>
                    <p className="text-[15px] text-gray-500 leading-snug">
                      <span className="font-bold text-black">Commitment to Quality,</span> Integrity, and Long-Term Value Creation
                    </p>
                  </div>
                </div>

                {/* 10+ Techs Stat */}
                <div className="stat-number-item flex flex-col gap-4 lg:pl-8 lg:border-l border-gray-100">
                  <span className="stat-value text-[50px] xl:text-[72px] font-semibold text-black leading-none mb-2" data-value="10">10+</span>
                  <div className="flex gap-4 items-start">
                    <div className="w-10 h-10 rounded-full bg-[#0E4E8B] flex items-center justify-center shrink-0">
                      <Image src="/Home/building/icon3.png" alt="icon3" width={24} height={24} className="object-contain brightness-0 invert" />
                    </div>
                    <p className="text-[15px] text-gray-500 leading-snug">
                      <span className="font-bold text-black">Advanced Technologies</span> Powering Modern Digital Solutions
                    </p>
                  </div>
                </div>

                {/* 5+ Industries Stat */}
                <div className="stat-number-item flex flex-col gap-4 lg:pl-8 lg:border-l border-gray-100">
                  <span className="stat-value text-[50px] xl:text-[72px] font-semibold text-black leading-none mb-2" data-value="5">5+</span>
                  <div className="flex gap-4 items-start">
                    <div className="w-10 h-10 rounded-full bg-[#0E4E8B] flex items-center justify-center shrink-0">
                      <Image src="/Home/building/icon4.png" alt="icon4" width={24} height={24} className="object-contain brightness-0 invert" />
                    </div>
                    <p className="text-[15px] text-gray-500 leading-snug">
                      <span className="font-bold text-black">Industries Transformed</span> Through Smart and Scalable Innovations
                    </p>
                  </div>
                </div>

                {/* 24/7 Stat */}
                <div className="stat-number-item flex flex-col gap-4 lg:pl-8 lg:border-l border-gray-100">
                  <span className="stat-value text-[50px] xl:text-[72px] font-semibold text-black leading-none mb-2" data-value="24">24/7</span>
                  <div className="flex gap-4 items-start">
                    <div className="w-10 h-10 rounded-full bg-[#0E4E8B] flex items-center justify-center shrink-0">
                      <Image src="/Home/building/icon5.png" alt="icon5" width={24} height={24} className="object-contain brightness-0 invert" />
                    </div>
                    <p className="text-[15px] text-gray-500 leading-snug">
                      <span className="font-bold text-black">Continuous Learning,</span> Support, and Innovation Ecosystem
                    </p>
                  </div>
                </div>
              </div>

              {/* MOBILE GRID SECTION */}
              <div className="impact-card flex lg:hidden flex-col w-full mt-[-105px] sm:mt-[-115px] relative z-10">
                {/* 2x2 Grid */}
                <div className="grid grid-cols-2 border-t border-b border-gray-100">
                  <div className="stat-number-item pl-4 pr-1 py-6 border-r border-gray-100 flex flex-col gap-3 bg-white">
                    <span className="stat-value text-[38px] font-semibold text-black leading-none mb-1 font-poppins" data-value="15">15+</span>
                    <div className="flex flex-row items-center gap-2">
                      <div className="w-[42px] h-[42px] rounded-full bg-[#0E4E8B] flex items-center justify-center shrink-0">
                        <Image src="/Home/building/icon1.png" alt="icon1" width={24} height={24} className="object-contain brightness-0 invert" />
                      </div>
                      <p className="font-poppins text-black font-normal text-[10px] sm:text-[11px] leading-[1.3] m-0 flex items-center">
                        Innovative and Future-Ready Digital Product Ideas
                      </p>
                    </div>
                  </div>

                  <div className="stat-number-item pl-4 pr-1 py-6 flex flex-col gap-3 bg-white">
                    <span className="stat-value text-[38px] font-semibold text-black leading-none mb-1 font-poppins tracking-[-1px]" data-value="100">100%</span>
                    <div className="flex flex-row items-center gap-2">
                      <div className="w-[42px] h-[42px] rounded-full bg-[#0E4E8B] flex items-center justify-center shrink-0">
                        <Image src="/Home/building/icon2.png" alt="icon2" width={24} height={24} className="object-contain brightness-0 invert" />
                      </div>
                      <p className="font-poppins text-black font-normal text-[10px] sm:text-[11px] leading-[1.3] m-0 flex items-center">
                        Commitment to Quality, Integrity, and Long-Term Value Creation
                      </p>
                    </div>
                  </div>

                  <div className="stat-number-item pl-4 pr-1 py-6 border-r border-t border-gray-100 flex flex-col gap-3 bg-white">
                    <span className="stat-value text-[38px] font-semibold text-black leading-none mb-1 font-poppins tracking-tight" data-value="10">10+</span>
                    <div className="flex flex-row items-center gap-2">
                      <div className="w-[42px] h-[42px] rounded-full bg-[#0E4E8B] flex items-center justify-center shrink-0">
                        <Image src="/Home/building/icon3.png" alt="icon3" width={24} height={24} className="object-contain brightness-0 invert" />
                      </div>
                      <p className="font-poppins text-black font-normal text-[10px] sm:text-[11px] leading-[1.3] m-0 pr-1 flex items-center">
                        Advanced Technologies Powering Modern Digital Solutions
                      </p>
                    </div>
                  </div>

                  <div className="stat-number-item pl-4 pr-1 py-6 border-t border-gray-100 flex flex-col gap-3 bg-white">
                    <span className="stat-value text-[38px] font-semibold text-black leading-none mb-1 font-poppins tracking-tight" data-value="5">5+</span>
                    <div className="flex flex-row items-center gap-2">
                      <div className="w-[42px] h-[42px] rounded-full bg-[#0E4E8B] flex items-center justify-center shrink-0">
                        <Image src="/Home/building/icon4.png" alt="icon4" width={24} height={24} className="object-contain brightness-0 invert" />
                      </div>
                      <p className="font-poppins text-black font-normal text-[10px] sm:text-[11px] leading-[1.4] m-0 pr-2 flex items-center">
                        Industries Transformed Through Smart and Scalable Innovations
                      </p>
                    </div>
                  </div>
                </div>

                {/* 24/7 Dark Block */}
                <div
                  className="stat-number-item bg-[#2D333A] flex flex-col justify-center items-start pl-6 mt-4 mx-4 sm:mx-6 mb-4 rounded-[12px]"
                  style={{ height: '140px' }}
                >
                  <span className="stat-value text-[42px] font-medium text-white leading-none tracking-tight font-poppins mb-3" data-value="24">24/7</span>
                  <div className="flex gap-4 items-center pr-4">
                    <div className="w-[42px] h-[42px] rounded-full bg-[#0E4E8B] flex items-center justify-center shrink-0 relative">
                      <Image src="/Home/building/icon5.png" alt="icon5" width={24} height={24} className="object-contain brightness-0 invert" />
                    </div>
                    <p className="font-poppins text-white font-normal text-[13px] leading-[1.4] m-0 max-w-[210px]">
                      Continuous Learning, Support, and Innovation Ecosystem
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* SERVICES SECTION */}
        <section data-section="services" className="w-full bg-[#F8F9FA] pb-6 pt-4 lg:py-6 flex flex-col items-center relative z-20">
          <div className="w-full flex justify-start mb-6 lg:mb-8 px-0">
            <div
              className="ribbon-banner relative flex items-center gap-2 lg:gap-3 pl-4 pr-10 lg:px-8 py-2 lg:py-2.5 w-fit"
              style={{
                background: 'linear-gradient(to right, #029EFA, #0E4E8B)',
                clipPath: 'polygon(0% 0%, 100% 0%, 88% 50%, 100% 100%, 0% 100%)'
              }}
            >
              <div className="relative w-6 h-6 lg:w-9 lg:h-9 flex items-center justify-center">
                <Image src="/Home/arrow.png" alt="Arrow" fill className="object-contain" />
              </div>
              <span className="text-white font-semibold lg:font-bold text-[16px] lg:text-[20px] tracking-wider pr-2">Services</span>
            </div>
          </div>

          <div className="w-full max-w-[1700px] lg:pl-[40px] lg:md:pl-[64px] px-0 lg:pr-0">
            {/* --- DESKTOP VIEW --- */}
            <div className="hidden lg:flex flex-row gap-6 xl:gap-10 items-stretch lg:pr-[64px] relative services-desktop-wrapper min-h-[500px]">
              <div className="flex flex-col gap-6 lg:w-[480px] xl:w-[800px] shrink-0">
                <h2 className="text-[20px] md:text-[22px] xl:text-[26px] font-semibold text-[#1F2933] leading-[1.15] lg:mb-1">
                  <span className="text-gray-500 font-semibold inline">We will bring the breathe of our </span>
                  <span className="text-gray-500 font-semibold inline">experience</span> <span className="text-black font-semibold inline">and industry </span><br className="hidden xl:block" />
                  <span className="text-black font-semibold inline">knowledge to help you succeed</span>
                </h2>

                <div className="services-image-card relative w-full h-full rounded-[32px] overflow-hidden group shadow-2xl">
                  <Image
                    src={services[activeServiceIdx].image}
                    alt={services[activeServiceIdx].name}
                    fill
                    className="object-cover transition-transform duration-1000 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent" />

                  {/* Banner Tag */}
                  <div className="absolute top-8 left-8">
                    <div className="bg-black/30 backdrop-blur-md border border-white/20 px-5 py-2.5 rounded-xl">
                      <span className="text-white text-[14px] font-semibold tracking-wide">
                        {services[activeServiceIdx].bannerTag}
                      </span>
                    </div>
                  </div>

                  {/* Banner Title */}
                  <div className="absolute top-1/2 -translate-y-1/2 left-8 max-w-[450px]">
                    <h3 className="text-white text-[38px] lg:text-[44px] font-bold leading-[1.1] mb-6 drop-shadow-lg">
                      {services[activeServiceIdx].bannerTitle}
                    </h3>
                  </div>

                  {/* Updated Bottom Button Desktop */}
                  <div className="absolute bottom-10 left-8">
                    <button
                      suppressHydrationWarning
                      className="flex items-center group/btn relative h-12 w-fit cursor-pointer overflow-hidden transition-all duration-700 rounded-[34px_34px_0px_34px] hover:rounded-[34px_34px_34px_0px] shadow-xl"
                    >
                      <div className="absolute left-0 w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-md z-20 transition-all duration-700 ease-in-out group-hover/btn:left-[calc(100%-48px)] group-hover/btn:bg-linear-to-r group-hover/btn:from-[#3799FA] group-hover/btn:to-[#9961FB] group-hover/btn:scale-105">
                        <FaChevronRight className="w-4 h-4 text-[#3799FA] transition-all duration-700 ease-in-out group-hover/btn:text-white" />
                      </div>
                      <div className="pl-14 pr-8 h-full py-3 flex items-center text-white font-bold text-[15px] transition-all duration-700 ease-in-out bg-linear-to-r from-[#3799FA] to-[#9961FB] group-hover/btn:from-white group-hover/btn:to-white group-hover/btn:text-black group-hover/btn:pl-6 group-hover/btn:pr-14 rounded-[34px_34px_0px_34px] group-hover/btn:rounded-[34px_34px_34px_0px]">
                        Lets Build Together
                      </div>
                    </button>
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-2 xl:gap-2.5 flex-1 h-full py-1 min-w-[340px]">
                {services.map((service, idx) => {
                  const getIcon = (i: number) => {
                    const iconNum = i + 1;
                    return (
                      <div className="relative w-8 h-8">
                        <Image src={`/Home/services/icon${iconNum}.png`} alt={`service icon ${iconNum}`} fill className="object-contain" />
                      </div>
                    );
                  };

                  return (
                    <div
                      key={idx}
                      onClick={() => setActiveServiceIdx(idx)}
                      onMouseEnter={() => setHoveredServiceIdx(idx)}
                      onMouseLeave={() => setHoveredServiceIdx(null)}
                      className={`service-list-item relative p-4 xl:p-5 rounded-2xl transition-all duration-500 border group cursor-pointer overflow-hidden ${activeServiceIdx === idx
                        ? "bg-white border-[#CAD0FF]/50 scale-[1.02] z-10"
                        : "bg-transparent border-transparent hover:bg-white/50 opacity-80 hover:opacity-100"
                        }`}
                    >
                      <div className="flex gap-5 items-start">
                        {/* Icon Square */}
                        <div className={`w-12 h-12 rounded-xl flex items-center justify-center transition-colors duration-500 shrink-0 border p-2 ${activeServiceIdx === idx ? "bg-white border-gray-100 text-black shadow-sm" : "bg-white border-gray-200 text-gray-400"}`}>
                          {getIcon(idx)}
                        </div>

                        <div className="flex flex-col gap-1 flex-1 pr-10">
                          <h4 className={`text-[18px] font-bold transition-all duration-500 ${activeServiceIdx === idx ? "text-black" : "text-gray-800"}`}>
                            {service.name}
                          </h4>
                          <p className={`text-[12px] leading-snug transition-all duration-500 ${activeServiceIdx === idx ? "text-gray-600" : "text-gray-500"}`}>
                            {service.desc}
                          </p>
                        </div>

                        <div className={`absolute right-6 top-1/2 -translate-y-1/2 transition-all duration-500 ${(hoveredServiceIdx !== null && hoveredServiceIdx === idx) || (hoveredServiceIdx === null && activeServiceIdx === idx)
                          ? "opacity-100 translate-x-0"
                          : "opacity-0 translate-x-4"
                          }`}>
                          <div className="w-10 h-10 rounded-full flex items-center justify-center transition-all shadow-md shrink-0"
                            style={{ background: 'linear-gradient(135deg, #31B5FE 0%, #AC52F2 100%)' }}>
                            <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                              <path strokeLinecap="round" strokeLinejoin="round" d="M7 17L17 7M17 7H7M17 7v10" />
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* --- MOBILE VIEW --- */}
            <div className="flex lg:hidden flex-col">
              <h2 className="text-[32px] font-semibold text-gray-500 leading-[1.3] mb-8 font-poppins px-6 sm:px-8">
                We will bring the breathe of our experience <span className="text-black font-bold">and industry knowledge to help you succeed</span>
              </h2>

              <div className="flex flex-col bg-white border-y border-gray-200">
                {services.map((service, idx) => {
                  const getIcon = (i: number) => {
                    const iconNum = i + 1;
                    return (
                      <div className="relative w-6 h-6">
                        <Image src={`/Home/services/icon${iconNum}.png`} alt={`service icon ${iconNum}`} fill className="object-contain" />
                      </div>
                    );
                  };

                  return (
                    <div
                      key={idx}
                      onClick={() => setActiveServiceIdx(idx)}
                      className={`service-list-item flex group justify-between items-start py-6 px-4 cursor-pointer transition-all duration-300 ${activeServiceIdx === idx ? 'bg-blue-50/30' : ''} ${idx !== services.length - 1 ? 'border-b border-gray-100' : ''}`}
                    >
                      <div className="flex gap-4 items-start w-full">
                        {/* Left Icon Square */}
                        <div className="w-[44px] h-[44px] mt-1 rounded-[8px] border border-gray-300 flex items-center justify-center shrink-0 bg-white p-2">
                          {getIcon(idx)}
                        </div>
                        <div className="flex flex-col gap-1.5 flex-1 pr-6">
                          <h4 className="text-[17px] font-bold text-black font-poppins">{service.name}</h4>
                          <p className="text-[11.5px] text-[#4B5563] leading-[1.4] font-poppins">
                            {service.desc}
                          </p>
                        </div>
                      </div>

                      {/* Right active circular arrow (shows on active or hover) */}
                      <div className={`w-[28px] h-[28px] mt-1 rounded-full flex items-center justify-center transition-all shrink-0 ${activeServiceIdx === idx ? "opacity-100 scale-100" : "opacity-0 scale-75 group-hover:opacity-100 group-hover:scale-100"}`}
                        style={{ background: 'linear-gradient(135deg, #31B5FE 0%, #AC52F2 100%)' }}>
                        <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M7 17L17 7M17 7H7M17 7v10" />
                        </svg>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Mobile Banner: Replacing static box with 3D Carousel */}
              <div className="flex w-full px-5 mt-6 mb-6 justify-center">
                <div className="services-image-card relative w-full h-[380px] rounded-[24px] overflow-hidden shadow-xl">
                  <Image
                    src={services[activeServiceIdx].image}
                    alt={services[activeServiceIdx].name}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent" />

                  {/* Banner Tag Mobile */}
                  <div className="absolute top-6 left-6">
                    <div className="bg-black/30 backdrop-blur-md border border-white/20 px-4 py-2 rounded-lg">
                      <span className="text-white text-[13px] font-medium">
                        {services[activeServiceIdx].bannerTag}
                      </span>
                    </div>
                  </div>

                  {/* Banner Title Mobile */}
                  <div className="absolute top-1/2 -translate-y-1/2 left-6 pr-6">
                    <h3 className="text-white text-[32px] font-bold leading-tight">
                      {services[activeServiceIdx].bannerTitle}
                    </h3>
                  </div>

                  {/* Updated Bottom Button Mobile */}
                  <div className="absolute bottom-10 left-6">
                    <button
                      suppressHydrationWarning
                      className="flex items-center group relative h-10 w-fit cursor-pointer overflow-hidden rounded-[28px_28px_0px_28px] shadow-lg"
                    >
                      <div className="absolute left-0 w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-md z-20">
                        <FaChevronRight className="w-3.5 h-3.5 text-[#3799FA]" />
                      </div>
                      <div className="pl-12 pr-6 h-full py-2.5 flex items-center text-white font-bold text-[13px] bg-linear-to-r from-[#3799FA] to-[#9961FB] rounded-[28px_28px_0px_28px]">
                        Lets Build Together
                      </div>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* PRODUCTS SECTION */}
        <section data-section="products" className="w-full bg-white py-12 lg:py-24 flex flex-col items-center relative z-10">
          {/* Products Ribbon */}
          <div className="w-full flex justify-start mb-12 lg:mb-16 px-0 relative z-20">
            <div
              className="ribbon-banner relative flex items-center gap-2 lg:gap-4 pl-4 pr-10 lg:px-10 py-2.5 lg:py-3 w-fit"
              style={{
                background: 'linear-gradient(to right, #029EFA, #0E4E8B)',
                clipPath: 'polygon(0% 0%, 100% 0%, 88% 50%, 100% 100%, 0% 100%)'
              }}
            >
              <div className="relative w-7 h-7 lg:w-12 lg:h-12 flex items-center justify-center">
                <Image src="/Home/arrow.png" alt="Arrow" fill className="object-contain" />
              </div>
              <span className="text-white font-semibold lg:font-bold text-[18px] lg:text-[24px] tracking-wider pr-2">Products</span>
            </div>
          </div>

          {/* --- DESKTOP HEADER --- */}
          <div className="hidden lg:flex flex-col items-center text-center mb-12 xl:mb-20 px-4 md:px-10">
            <div className="products-badge-row flex items-center gap-6 mb-8">
              <div className="relative w-10 h-5 xl:w-14 xl:h-7">
                <Image src="/Home/right_arrow.png" alt="Right Arrow" fill className="object-contain" />
              </div>
              <span className="text-[24px] xl:text-[32px] font-bold text-[#808080]">Products</span>
              <div className="relative w-10 h-5 xl:w-14 xl:h-7">
                <Image src="/Home/left_arrow.png" alt="Left Arrow" fill className="object-contain" />
              </div>
            </div>
            <h2 className="text-[30px] md:text-[36px] lg:text-[42px] xl:text-[48px] font-semibold text-black leading-tight max-w-full lg:max-w-[1300px]">
              <span className="block md:inline-block xl:whitespace-nowrap">Dilshaj Infotech delivers innovative digital solutions</span><br className="hidden xl:block" />
              <span>that drive growth and create real impact.</span>
            </h2>
          </div>

          <div className="w-full max-w-[1700px] px-0 lg:px-10 lg:md:px-20">
            {/* --- DESKTOP VIEW --- */}
            {/* --- DESKTOP VIEW: SCROLLYTELLING LAYOUT --- */}
            <div className="hidden lg:flex gap-0 items-start w-full">
              {/* LEFT: Sticky Sidebar */}
              <div id="product-sidebar-container" className="products-sidebar w-[300px] xl:w-[360px] shrink-0 sticky top-32 max-h-[75vh] flex flex-col gap-3 pr-8 transform-gpu overflow-y-auto scrollbar-none pb-20">
                {products.map((product, idx) => (
                  <div
                    key={idx}
                    id={`product-sidebar-item-${idx}`}
                    onClick={() => {
                      const el = document.getElementById(`product-content-${idx}`);
                      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'center' });
                    }}
                    className={`p-5 xl:p-6 rounded-[24px] cursor-pointer transition-colors duration-300 border-2 ${activeProductIdx === idx
                      ? "bg-white shadow-[0_20px_50px_rgba(49,181,254,0.12)] border-blue-200"
                      : "bg-gray-50/80 border-transparent opacity-50 hover:opacity-85 hover:bg-white hover:border-gray-100"
                      }`}
                  >
                    <h3 className={`text-[17px] xl:text-[19px] font-bold mb-2 transition-colors duration-300 ${activeProductIdx === idx ? "text-blue-600" : "text-black"
                      }`}>
                      {product.name}
                    </h3>
                    <p className="text-[12px] xl:text-[13px] text-gray-500 leading-relaxed font-medium">
                      {product.desc}
                    </p>
                  </div>
                ))}

                {/* See All Products Button */}
                <div className="mt-4">
                  <Link href="/products" className="flex items-center group relative h-12 w-fit cursor-pointer overflow-hidden transition-all duration-700 rounded-[34px_34px_0px_34px] hover:rounded-[34px_34px_34px_0px]">
                    <div className="absolute left-0 w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-md z-20 transition-all duration-700 ease-in-out group-hover:left-[calc(100%-48px)] group-hover:bg-linear-to-r group-hover:from-[#3799FA] group-hover:to-[#9961FB] group-hover:scale-105">
                      <FaChevronRight className="w-4 h-4 text-[#3799FA] transition-all duration-700 ease-in-out group-hover:text-white" />
                    </div>
                    <div className="pl-14 pr-8 h-full flex items-center text-white font-bold text-[14px] shadow-[0_8px_18px_rgba(55,153,250,0.25)] transition-all duration-700 ease-in-out bg-linear-to-r from-[#3799FA] to-[#9961FB] group-hover:from-white group-hover:to-white group-hover:text-black group-hover:pl-6 group-hover:pr-14 rounded-[34px_34px_0px_34px] group-hover:rounded-[34px_34px_34px_0px]">
                      See All Products
                    </div>
                  </Link>
                </div>
              </div>

              {/* RIGHT: Scrollable Product Panels */}
              <div className="flex-1 min-w-0">
                {products.map((product, pIdx) => (
                  <div
                    key={pIdx}
                    id={`product-content-${pIdx}`}
                    data-idx={String(pIdx)}
                    className="product-panel sticky top-0 min-h-screen flex items-center justify-center py-20"
                    style={{ zIndex: pIdx + 10 }}
                  >
                    <div className="w-full bg-white rounded-[40px] shadow-[0_20px_80px_rgba(0,0,0,0.05)] border border-gray-100 overflow-hidden p-6 xl:p-10 group transition-shadow duration-500 hover:shadow-[0_30px_100px_rgba(0,0,0,0.08)] transform-gpu backface-hidden will-change-transform">

                      {/* Header Row */}
                      <div className="flex items-start justify-between mb-6 xl:mb-8">
                        <div className="flex-1 pr-8">
                          <h2 className="text-[28px] xl:text-[42px] font-bold text-black uppercase tracking-tighter leading-none mb-3 xl:mb-4">
                            {product.title}
                          </h2>
                          <p className="text-[15px] xl:text-[18px] text-gray-500 leading-relaxed font-medium max-w-[95%]">
                            {product.subtitle}
                          </p>
                        </div>
                        <div
                          className="w-14 h-14 rounded-full flex items-center justify-center shadow-lg shrink-0 transition-all duration-500 hover:rotate-12 hover:scale-110 cursor-pointer"
                          style={{ background: 'linear-gradient(135deg, #20B5F9 0%, #A851ED 100%)' }}
                        >
                          <svg className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M7 17L17 7M17 7H7M17 7v10" />
                          </svg>
                        </div>
                      </div>

                      {/* Middle: Highlights + Visual */}
                      <div className="grid grid-cols-[1fr_1fr] gap-8 mb-6 xl:mb-8">
                        {/* Highlights */}
                        <div className="flex flex-col justify-center gap-6">
                          {product.highlights.map((item, i) => (
                            <div key={i} className="flex items-center gap-4">
                              <div className="w-10 h-10 xl:w-12 xl:h-12 rounded-xl xl:rounded-2xl bg-blue-50 flex items-center justify-center shrink-0 shadow-sm border border-blue-100 transition-transform duration-500 group-hover:scale-105">
                                {item.icon}
                              </div>
                              <span className="text-[14px] xl:text-[16px] font-bold text-black leading-tight">
                                {item.label}
                              </span>
                            </div>
                          ))}
                        </div>

                        {/* Visual Area */}
                        {pIdx === 0 ? (
                          // Ride Booking App
                          <div className="relative w-full h-[220px] xl:h-[280px] transition-transform duration-700 group-hover:scale-105">
                            <Image
                              src="/products/bike-rider-images/bike.png"
                              alt="Ride Booking"
                              fill
                              className="object-cover rounded-[24px] drop-shadow-2xl"
                            />
                          </div>
                        ) : pIdx === 1 ? (
                          // E-Commerce: show image directly without extra background card
                          <div className="relative w-full h-[220px] xl:h-[280px] transition-transform duration-700 group-hover:scale-105">
                            <Image
                              src="/products/commerce/image1.png"
                              alt="E-Commerce"
                              fill
                              className="object-cover rounded-[24px] drop-shadow-2xl"
                            />
                          </div>
                        ) : pIdx === 2 ? (
                          // Food Delivery App: show image directly without extra background card
                          <div className="relative w-full h-[220px] xl:h-[280px] transition-transform duration-700 group-hover:scale-105">
                            <Image
                              src="/products/food-images/image.png"
                              alt="Food Delivery"
                              fill
                              className="object-cover rounded-[24px] drop-shadow-2xl"
                            />
                          </div>
                        ) : pIdx === 3 ? (
                          // Digital News: show image directly without extra background card
                          <div className="relative w-full h-[220px] xl:h-[280px] transition-transform duration-700 group-hover:scale-105">
                            <Image
                              src="/products/digital news/image.png"
                              alt="Digital News"
                              fill
                              className="object-cover rounded-[24px] drop-shadow-2xl"
                            />
                          </div>
                        ) : (
                          // Default gradient card for any future products
                          <div
                            className="rounded-[32px] flex flex-col items-center justify-center min-h-[220px] xl:min-h-[280px] relative overflow-hidden"
                            style={{ background: 'linear-gradient(135deg, #F0F9FF 0%, #E0F2FE 100%)' }}
                          >
                            <div className="text-blue-200">
                              <FaStore className="w-24 h-24 xl:w-32 xl:h-32 opacity-20" />
                            </div>
                          </div>
                        )}
                      </div>

                      {/* Footer: Features List */}
                      <div className="border-t border-gray-100 pt-6 xl:pt-8 grid grid-cols-2 lg:grid-cols-5 gap-4">
                        {product.features.map((feature, i) => (
                          <div key={i} className="flex flex-col items-center text-center group/feat">
                            <div className="text-blue-500 mb-3 p-2 bg-blue-50 rounded-xl transition-transform duration-500 group-hover/feat:scale-110">
                              {feature.icon}
                            </div>
                            <span className="text-[12px] xl:text-[13px] font-bold text-gray-700 leading-tight">
                              {feature.name}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* --- MOBILE VIEW --- */}
            <div className="flex lg:hidden flex-col items-center w-full pb-8 pt-4 bg-[#F8F9FA]">
              {/* Mobile Header */}
              <div className="flex flex-col items-center text-center w-full mb-8 px-5">
                <div className="flex items-center justify-center gap-2 mb-3">
                  <div className="flex -space-x-[4px] opacity-40">
                    <svg className="w-4 h-4 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M13 5l7 7-7 7M5 5l7 7-7 7" /></svg>
                  </div>
                  <span className="text-[18px] font-semibold text-gray-500 tracking-wide font-poppins">Products</span>
                  <div className="flex -space-x-[4px] opacity-40 rotate-180">
                    <svg className="w-4 h-4 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M13 5l7 7-7 7M5 5l7 7-7 7" /></svg>
                  </div>
                </div>
                <h2 className="text-[22px] font-bold text-black leading-[1.3] font-poppins px-1">
                  Dilshaj Infotech delivers innovative digital solutions that drive growth and create real impact.
                </h2>
              </div>

              {/* Horizontal Scrollable Pills */}
              <div ref={mobilePillScrollRef} className="flex w-full overflow-x-auto gap-3 px-5 pb-6 mb-2 scrollbar-hide relative">
                {products.map((product, idx) => {
                  const isActive = activeProductIdx === idx;
                  return (
                    <button
                      suppressHydrationWarning
                      key={idx}
                      id={`mobile-pill-product-${idx}`}
                      onClick={() => handleProductIndexChange(idx)}
                      className={`relative px-6 py-2.5 rounded-[20px] font-semibold font-poppins text-[14px] whitespace-nowrap transition-colors duration-300 shrink-0 ${isActive ? "text-white" : "bg-[#EAECEF] text-black"}`}
                    >
                      {isActive && (
                        <motion.div
                          layoutId="activePillProduct"
                          className="absolute inset-0 bg-linear-to-r from-[#31B5FE] to-[#AC52F2] rounded-[20px] shadow-md z-0"
                          transition={{ type: "tween", ease: [0.4, 0.0, 0.2, 1], duration: 0.5 }}
                        />
                      )}
                      <span className="relative z-10">{product.name}</span>
                    </button>
                  );
                })}
              </div>

              {/* Mobile Detail Cards Slider */}
              <div 
                ref={mobileProductScrollRef}
                className="flex w-full overflow-x-auto snap-x snap-mandatory scrollbar-hide"
                onScroll={(e) => {
                  const el = e.currentTarget;
                  const newIdx = Math.round(el.scrollLeft / el.clientWidth);
                  if (newIdx !== activeProductIdx) {
                    setActiveProductIdx(newIdx);
                  }
                }}
              >
                {products.map((product, pIdx) => (
                  <div key={pIdx} className="w-full shrink-0 px-5 snap-center">
                    <div className="w-full bg-white rounded-[16px] shadow-[0_5px_15px_rgba(0,0,0,0.05)] border border-gray-100 p-6 sm:p-8 relative flex flex-col">
                      {/* Top Right Background Icon */}
                      <div className="absolute top-6 right-6 w-10 h-10 rounded-full flex items-center justify-center shadow-md bg-linear-to-br from-[#31B5FE] to-[#AC52F2]">
                        <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M7 17L17 7M17 7H7M17 7v10" />
                        </svg>
                      </div>

                      <h2 className="text-[24px] font-bold text-black leading-[1.2] mb-4 font-poppins pr-12">
                        {product.title}
                      </h2>

                      <p className="text-[13px] font-medium text-[#4B5563] leading-[1.6] mb-6 font-poppins pr-2">
                        {product.subtitle}
                      </p>

                      {/* Highlights List */}
                      <div className="flex flex-col gap-4 mb-8">
                        {product.highlights.map((item, i) => (
                          <div key={i} className="flex gap-4 items-center">
                            <div className="w-[28px] h-[28px] rounded-full bg-[#31B5FE] flex items-center justify-center shrink-0 shadow-sm [&_svg]:text-white! [&_svg]:w-[14px] [&_svg]:h-[14px]">
                              {item.icon}
                            </div>
                            <span className="text-[12.5px] font-semibold text-black font-poppins leading-[1.3] flex-1">
                              {item.label}
                            </span>
                          </div>
                        ))}
                      </div>

                      {/* Features Footer Grid */}
                      <div className="flex flex-col border border-gray-100 rounded-[12px] bg-white mt-6">
                        {/* Top Row: First 3 features */}
                        <div className="grid grid-cols-3 border-b border-gray-100">
                          {product.features.slice(0, 3).map((feature, i) => (
                            <div
                              key={i}
                              className={`flex flex-col items-center justify-start text-center gap-3 px-1.5 py-5 ${i !== 2 ? 'border-r border-gray-100' : ''}`}
                            >
                              <div className="text-[#31B5FE] [&_svg]:w-6 [&_svg]:h-6 flex items-center justify-center">
                                {feature.icon}
                              </div>
                              <span className="text-[10px] sm:text-[10.5px] font-semibold text-black leading-[1.3] font-poppins px-0.5 mt-auto">
                                {feature.name}
                              </span>
                            </div>
                          ))}
                        </div>

                        {/* Bottom Row: Remaining features (up to 2) */}
                        {product.features.length > 3 && (
                          <div className="grid grid-cols-2 w-full">
                            {product.features.slice(3, 5).map((feature, i) => (
                              <div
                                key={i + 3}
                                className={`flex flex-col items-center justify-start text-center gap-3 px-1.5 py-5 ${i === 0 ? 'border-r border-gray-100' : ''}`}
                              >
                                <div className="text-[#31B5FE] [&_svg]:w-6 [&_svg]:h-6 flex items-center justify-center">
                                  {feature.icon}
                                </div>
                                <span className="text-[10px] sm:text-[10.5px] font-semibold text-black leading-[1.3] font-poppins px-0.5 mt-auto">
                                  {feature.name}
                                </span>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* TECHNOLOGIES SECTION */}
        <section data-section="technologies" className="w-full bg-black py-24 flex flex-col items-center relative z-20 overflow-x-clip">
          {/* Animated Background Glows */}
          <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px] -translate-y-1/2" />
          <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[120px] translate-y-1/2" />

          {/* Figma Design Diagonal Shape (Right Side) - Widened for better visibility */}
          <div
            className="absolute top-[15%] -right-20 w-[300px] h-[700px] opacity-20 pointer-events-none z-10 hidden lg:block rounded-full"
            style={{
              background: 'linear-gradient(to bottom, #FDC69C, #0BBBFA)',
              transform: 'rotate(-45deg)',
              filter: 'blur(80px)'
            }}
          />

          {/* Figma Design Diagonal Shape (Left/Middle Decorative) - Widened */}
          <div
            className="absolute top-1/2 left-1/4 w-[280px] h-[800px] opacity-15 pointer-events-none z-10 hidden lg:block rounded-full"
            style={{
              background: 'linear-gradient(to bottom, #FDC69C, #0BBBFA)',
              transform: 'translate(-50%, -50%) rotate(-45deg)',
              filter: 'blur(100px)'
            }}
          />

          {/* Section Banner Header */}
          <div className="w-full flex justify-start mb-6 lg:mb-8 px-0">
            <div
              className="ribbon-banner relative flex items-center gap-2 lg:gap-4 pl-4 pr-10 lg:px-10 py-2.5 lg:py-3 w-fit"
              style={{
                background: 'linear-gradient(to right, #029EFA, #0E4E8B)',
                clipPath: 'polygon(0% 0%, 100% 0%, 88% 50%, 100% 100%, 0% 100%)'
              }}
            >
              <div className="relative w-7 h-7 lg:w-12 lg:h-12 flex items-center justify-center">
                <Image src="/Home/arrow.png" alt="Arrow" fill className="object-contain" />
              </div>
              <span className="text-white font-semibold lg:font-bold text-[18px] lg:text-[24px] tracking-wider pr-2">Technologies</span>
            </div>
          </div>

          <div className="w-full max-w-[1700px] px-5 md:px-20 relative z-20">
            <div className="mb-14 md:mb-20">
              <h2 className="text-[28px] md:text-[36px] lg:text-[42px] xl:text-[56px] font-bold text-white leading-tight max-w-[1000px]">
                We build innovative, scalable solutions that drive growth and transform digital experiences.
              </h2>
            </div>

            {/* Desktop Layout */}
            {/* --- DESKTOP VIEW: SCROLLYTELLING LAYOUT --- */}
            <div className="hidden lg:flex gap-0 items-start w-full">
              {/* LEFT: Sticky Sidebar */}
              <div id="tech-sidebar-container" className="w-[300px] xl:w-[360px] shrink-0 sticky top-32 max-h-[75vh] flex flex-col gap-3 pr-8 transform-gpu overflow-y-auto scrollbar-none pb-20">
                {technologies.map((tech, idx) => (
                  <div
                    key={idx}
                    id={`tech-sidebar-item-${idx}`}
                    onClick={() => {
                      const el = document.getElementById(`tech-content-${idx}`);
                      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'center' });
                    }}
                    className={`p-5 xl:p-6 rounded-[24px] cursor-pointer transition-colors duration-300 border-2 ${activeTechIdx === idx
                      ? "bg-white shadow-[0_20px_50px_rgba(255,255,255,0.12)] border-blue-200"
                      : "bg-white/5 border-transparent opacity-50 hover:opacity-85 hover:bg-white/10"
                      }`}
                  >
                    <h3 className={`text-[17px] xl:text-[19px] font-bold mb-2 transition-colors duration-300 ${activeTechIdx === idx ? "text-blue-600" : "text-white"
                      }`}>
                      {tech.name}
                    </h3>
                    <p className={`text-[12px] xl:text-[13px] leading-relaxed font-medium transition-colors ${activeTechIdx === idx ? "text-gray-500" : "text-gray-400"}`}>
                      {tech.desc}
                    </p>
                  </div>
                ))}
              </div>

              {/* RIGHT: Scrollable Tech Panels */}
              <div className="flex-1 min-w-0">
                {technologies.map((tech, tIdx) => (
                  <div
                    key={tIdx}
                    id={`tech-content-${tIdx}`}
                    data-idx={String(tIdx)}
                    className="tech-panel sticky top-0 min-h-screen flex items-center justify-center py-20"
                    style={{ zIndex: tIdx + 10 }}
                  >
                    <div className="w-full bg-white rounded-[40px] shadow-[0_30px_100px_rgba(0,0,0,0.5)] border border-gray-100 overflow-hidden p-6 xl:p-10 group transition-shadow duration-500 hover:shadow-[0_40px_120px_rgba(0,0,0,0.6)] transform-gpu backface-hidden will-change-transform">

                      {/* Header Row */}
                      <div className="flex items-start justify-between mb-6 xl:mb-8">
                        <div className="flex-1 pr-8">
                          <h2 className="text-[28px] xl:text-[42px] font-bold text-black uppercase tracking-tighter leading-none mb-3 xl:mb-4">
                            {tech.title}
                          </h2>
                          <p className="text-[15px] xl:text-[18px] text-gray-500 leading-relaxed font-medium max-w-[95%]">
                            {tech.content}
                          </p>
                        </div>
                        <div
                          className="w-14 h-14 rounded-full flex items-center justify-center shadow-lg shrink-0 transition-all duration-500 hover:rotate-12 hover:scale-110 cursor-pointer"
                          style={{ background: 'linear-gradient(135deg, #20B5F9 0%, #A851ED 100%)' }}
                        >
                          <svg className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M7 17L17 7M17 7H7M17 7v10" />
                          </svg>
                        </div>
                      </div>

                      {/* Middle Row */}
                      <div className="grid grid-cols-[1fr_1fr] gap-8 mb-6 xl:mb-8">
                        {/* Features List */}
                        <div className="flex flex-col justify-center gap-4">
                          {tech.features.map((feature, fIdx) => (
                            <div key={fIdx} className="flex items-center gap-4 group/feat">
                              <div className="w-10 h-10 xl:w-12 xl:h-12 rounded-xl xl:rounded-2xl bg-blue-50 flex items-center justify-center shrink-0 shadow-sm border border-blue-100 transition-transform duration-500 group-hover/feat:scale-110">
                                {tIdx === 0 ? (
                                  <Image src={`/Home/mechine learning/ai${fIdx + 1}.png`} alt="ai" width={24} height={24} />
                                ) : tIdx === 1 ? (
                                  <Image src={`/Home/cloud/icon${fIdx + 1}.png`} alt="cloud" width={24} height={24} />
                                ) : tIdx === 2 ? (
                                  <Image src={`/Home/web technology/icon${fIdx + 1}.png`} alt="web" width={24} height={24} />
                                ) : tIdx === 3 ? (
                                  <Image src={`/Home/mobile/icon${fIdx + 1}.png`} alt="mobile" width={24} height={24} />
                                ) : tIdx === 4 ? (
                                  <Image src={`/Home/data and analytics/icon${fIdx + 1}.png`} alt="data" width={24} height={24} />
                                ) : (
                                  <Image src={`/Home/UI/UX Design/icon${fIdx + 1}.png`} alt="uiux" width={24} height={24} />
                                )}
                              </div>
                              <span className="text-[14px] xl:text-[16px] font-bold text-black group-hover:text-blue-600 transition-colors">
                                {feature}
                              </span>
                            </div>
                          ))}
                        </div>

                        {/* Visual Asset Area */}
                        <div className="flex items-center justify-center min-h-[220px] xl:min-h-[260px] relative">
                          <div className="relative w-full h-[220px] xl:h-[260px] p-8 transition-transform duration-[1.5s] group-hover:scale-110">
                            <Image
                              src={tech.image}
                              alt={tech.title}
                              fill
                              className="object-cover rounded-[24px] drop-shadow-[0_20px_50px_rgba(0,0,0,0.1)]"
                            />
                          </div>
                        </div>
                      </div>

                      {/* Action Button */}
                      <div className="flex justify-start">
                        <button suppressHydrationWarning className="flex items-center group/btn relative h-12 w-fit cursor-pointer overflow-hidden transition-all duration-700 rounded-[34px_34px_0px_34px] hover:rounded-[34px_34px_34px_0px]">
                          <div className="absolute left-0 w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-md z-20 transition-all duration-700 ease-in-out group-hover/btn:left-[calc(100%-48px)] group-hover/btn:bg-linear-to-r group-hover/btn:from-[#3799FA] group-hover/btn:to-[#9961FB] group-hover/btn:scale-105">
                            <FaChevronRight className="w-4 h-4 text-[#3799FA] transition-all duration-700 ease-in-out group-hover/btn:text-white" />
                          </div>
                          <div className="pl-14 pr-8 h-full flex items-center text-white font-bold text-[14px] shadow-[0_8px_18px_rgba(55,153,250,0.25)] transition-all duration-700 ease-in-out bg-linear-to-r from-[#3799FA] to-[#9961FB] group-hover/btn:from-white group-hover/btn:to-white group-hover/btn:text-black group-hover/btn:pl-6 group-hover/btn:pr-14 rounded-[34px_34px_0px_34px] group-hover/btn:rounded-[34px_34px_34px_0px]">
                            Learn More
                          </div>
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* --- MOBILE VIEW --- */}
            <div className="flex lg:hidden flex-col items-center w-full pb-8 pt-0">
              {/* Horizontal Scrollable Pills */}
              <div className="flex w-full overflow-x-auto gap-3 pb-8 mb-4 scrollbar-hide -mx-5 px-5" style={{ width: 'calc(100% + 40px)' }}>
                {technologies.map((tech, idx) => (
                  <button
                    suppressHydrationWarning
                    key={idx}
                    onClick={() => setActiveTechIdx(idx)}
                    className={`px-5 py-2.5 rounded-[20px] font-semibold text-[13px] whitespace-nowrap transition-all shrink-0 border ${activeTechIdx === idx
                      ? "bg-linear-to-r from-[#31B5FE] to-[#AC52F2] text-white shadow-md border-transparent"
                      : "bg-[#2A2A2A] text-gray-300 border-white/10"
                      }`}
                  >
                    {tech.name}
                  </button>
                ))}
              </div>

              {/* Mobile Detail Card */}
              <div className="w-full">
                <div className="w-full bg-white rounded-[24px] shadow-xl p-6 sm:p-8 flex flex-col">
                  <h3 className="text-[26px] font-bold text-black mb-4 uppercase font-poppins">
                    {technologies[activeTechIdx].title}
                  </h3>
                  <p className="text-[14.5px] text-gray-600 leading-relaxed mb-8 font-medium">
                    {technologies[activeTechIdx].content}
                  </p>

                  <div className="flex flex-col gap-5 mb-8">
                    {technologies[activeTechIdx].features.map((feature, fIdx) => (
                      <div key={fIdx} className="flex items-center gap-4">
                        <div className="w-[32px] h-[32px] rounded-full bg-[#0E4E8B] flex items-center justify-center shrink-0 shadow-sm [&_svg]:text-white! [&_svg]:w-[15px] [&_svg]:h-[15px]">
                          {activeTechIdx === 0 ? (
                            <Image
                              src={`/Home/mechine learning/ai${fIdx + 1}.png`}
                              alt="ai icon"
                              width={20}
                              height={20}
                              className="object-contain brightness-0 invert"
                            />
                          ) : activeTechIdx === 1 ? (
                            <Image
                              src={`/Home/cloud/icon${fIdx + 1}.png`}
                              alt="cloud icon"
                              width={20}
                              height={20}
                              className="object-contain brightness-0 invert"
                            />
                          ) : activeTechIdx === 2 ? (
                            <Image
                              src={`/Home/web technology/icon${fIdx + 1}.png`}
                              alt="web icon"
                              width={20}
                              height={20}
                              className="object-contain brightness-0 invert"
                            />
                          ) : activeTechIdx === 3 ? (
                            <Image
                              src={`/Home/mobile/icon${fIdx + 1}.png`}
                              alt="mobile icon"
                              width={20}
                              height={20}
                              className="object-contain brightness-0 invert"
                            />
                          ) : activeTechIdx === 4 ? (
                            <Image
                              src={`/Home/data and analytics/icon${fIdx + 1}.png`}
                              alt="analytics icon"
                              width={20}
                              height={20}
                              className="object-contain brightness-0 invert"
                            />
                          ) : activeTechIdx === 5 ? (
                            <Image
                              src={`/Home/UI/UX Design/icon${fIdx + 1}.png`}
                              alt="ui/ux icon"
                              width={20}
                              height={20}
                              className="object-contain brightness-0 invert"
                            />
                          ) : (
                            <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                              {fIdx === 0 ? <path strokeLinecap="round" strokeLinejoin="round" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                                : fIdx === 1 ? <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                                  : <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />}
                            </svg>
                          )}
                        </div>
                        <span className="text-[13px] font-semibold text-[#1F2933] leading-tight">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Image */}
                  <div className="w-full rounded-[16px] overflow-hidden relative h-[250px] shadow-sm">
                    <Image src={technologies[activeTechIdx].image} alt={technologies[activeTechIdx].title} fill className="object-cover" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ACCELERATION SECTION (Why dilshaj Infotech) */}
        <section data-section="acceleration" className="w-full bg-[#FAFAFA] py-24 flex flex-col items-center">
          <div className="w-full max-w-[1550px] px-6 md:px-12 flex flex-col items-center">
            {/* Section Header */}
            <div className="flex flex-col items-center text-center mb-14">
              <div className="section-label flex items-center gap-3 text-gray-400 mb-6 font-semibold tracking-wide uppercase text-[20px]">
                <span className="text-[18px]">»</span>
                <span>Why dilshaj Infotech</span>
                <span className="text-[18px]">«</span>
              </div>
              <h2 className="text-[36px] md:text-[48px] font-semibold text-black leading-tight max-w-[800px]">
                How We Accelerate Your Business Through Technology?
              </h2>
            </div>

            {/* Custom 4-Card Grid (Asymmetrical Layout) */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
              {/* Card 1: Large (Innovative Digital Solutions) */}
              <div
                className="accel-card md:col-span-2 group relative h-[310px] rounded-[32px] overflow-hidden shadow-lg flex flex-col justify-between p-10 pb-12 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1"
                style={{ background: accelerationFeatures[0].image ? 'transparent' : accelerationFeatures[0].gradient }}
              >
                {accelerationFeatures[0].image && (
                  <>
                    <Image src={accelerationFeatures[0].image} alt={accelerationFeatures[0].title} fill className="object-cover transition-transform duration-700 group-hover:scale-110" />
                    <div className="absolute inset-0 bg-black/40" />
                  </>
                )}
                <div className="relative z-10 flex flex-col h-full justify-between">
                  <div className="flex justify-between items-start">
                    <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-3 border border-white/20 shadow-xl">
                      {accelerationFeatures[0].icon}
                    </div>
                    <div className="w-11 h-11 rounded-full border border-white/40 flex items-center justify-center text-white backdrop-blur-md group-hover:bg-white group-hover:text-black transition-all duration-300 shadow-lg">
                      <svg className="w-5 h-5 transition-transform -rotate-45 group-hover:rotate-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}><path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7-7 7M3 12h18" /></svg>
                    </div>
                  </div>
                  <h3 className="text-white text-[28px] md:text-[34px] font-bold leading-tight max-w-[500px] drop-shadow-lg">
                    {accelerationFeatures[0].title}
                  </h3>
                </div>
              </div>

              {/* Card 2: Small (Built to Scale) */}
              <div
                className="accel-card group relative h-[310px] rounded-[32px] overflow-hidden shadow-lg flex flex-col justify-between p-10 pb-12 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 border border-white/10"
                style={{ background: accelerationFeatures[1].gradient }}
              >
                {/* Mesh Gradient Effect Layer */}
                <div className="absolute inset-0 opacity-40 bg-[radial-gradient(circle_at_50%_0%,#ffffff22_0%,transparent_50%)]" />

                {/* Subtle Dot Pattern Overlay */}
                <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(rgba(255,255,255,0.3) 1px, transparent 1px)', backgroundSize: '24px 24px' }} />

                <div className="relative z-10 flex flex-col h-full justify-between">
                  <div className="flex justify-between items-start">
                    <div className="w-16 h-16 flex items-center justify-center bg-white/10 backdrop-blur-xl rounded-2xl border border-white/20 shadow-xl group-hover:scale-105 transition-transform duration-300">
                      {accelerationFeatures[1].icon}
                    </div>
                    <div className="w-11 h-11 rounded-full border border-white/40 flex items-center justify-center text-white backdrop-blur-md group-hover:bg-white group-hover:text-black transition-all duration-300 shadow-lg">
                      <svg className="w-5 h-5 transition-transform -rotate-45 group-hover:rotate-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}><path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7-7 7M3 12h18" /></svg>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-white text-[26px] font-bold leading-tight tracking-tight drop-shadow-md">
                      {accelerationFeatures[1].title}
                    </h3>
                    <div className="w-12 h-1 bg-white/30 rounded-full mt-4 group-hover:w-20 transition-all duration-500" />
                  </div>
                </div>
              </div>

              {/* Card 3: Small (User-Focused Design) */}
              <div
                className="accel-card group relative h-[310px] rounded-[32px] overflow-hidden shadow-lg flex flex-col justify-between p-10 pb-12 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 border border-white/10"
                style={{ background: accelerationFeatures[2].gradient }}
              >
                {/* Mesh Gradient Effect Layer */}
                <div className="absolute inset-0 opacity-40 bg-[radial-gradient(circle_at_50%_100%,#ffffff22_0%,transparent_50%)]" />

                {/* Subtle Dot Pattern Overlay */}
                <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(rgba(255,255,255,0.3) 1px, transparent 1px)', backgroundSize: '24px 24px' }} />

                <div className="relative z-10 flex flex-col h-full justify-between">
                  <div className="flex justify-between items-start">
                    <div className="w-16 h-16 flex items-center justify-center bg-white/10 backdrop-blur-xl rounded-2xl border border-white/20 shadow-xl group-hover:scale-105 transition-transform duration-300">
                      {accelerationFeatures[2].icon}
                    </div>
                    <div className="w-11 h-11 rounded-full border border-white/40 flex items-center justify-center text-white backdrop-blur-md group-hover:bg-white group-hover:text-black transition-all duration-300 shadow-lg">
                      <svg className="w-5 h-5 transition-transform -rotate-45 group-hover:rotate-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}><path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7-7 7M3 12h18" /></svg>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-white text-[26px] font-bold leading-tight tracking-tight drop-shadow-md">
                      {accelerationFeatures[2].title}
                    </h3>
                    <div className="w-12 h-1 bg-white/30 rounded-full mt-4 group-hover:w-20 transition-all duration-500" />
                  </div>
                </div>
              </div>

              {/* Card 4: Large (End-to-End Development) */}
              <div
                className="accel-card md:col-span-2 group relative h-[310px] rounded-[32px] overflow-hidden shadow-lg flex flex-col justify-between p-10 pb-12 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1"
                style={{ background: accelerationFeatures[3].image ? 'transparent' : accelerationFeatures[3].gradient }}
              >
                {accelerationFeatures[3].image && (
                  <>
                    <Image src={accelerationFeatures[3].image} alt={accelerationFeatures[3].title} fill className="object-cover transition-transform duration-700 group-hover:scale-110" />
                    <div className="absolute inset-0 bg-black/40" />
                  </>
                )}
                <div className="relative z-10 flex flex-col h-full justify-between">
                  <div className="flex justify-between items-start">
                    <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-3 border border-white/20 shadow-xl">
                      {accelerationFeatures[3].icon}
                    </div>
                    <div className="w-11 h-11 rounded-full border border-white/40 flex items-center justify-center text-white backdrop-blur-md group-hover:bg-white group-hover:text-black transition-all duration-300 shadow-lg">
                      <svg className="w-5 h-5 transition-transform -rotate-45 group-hover:rotate-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}><path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7-7 7M3 12h18" /></svg>
                    </div>
                  </div>
                  <h3 className="text-white text-[28px] md:text-[34px] font-bold leading-tight max-w-[550px] drop-shadow-lg">
                    {accelerationFeatures[3].title}
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section data-section="careers" className="w-full bg-black pt-16 pb-20 flex flex-col items-center relative overflow-hidden">
          <style jsx>{`
            .vertical-grid {
              background-image: linear-gradient(to right, rgba(255,255,255,0.05) 1px, transparent 1px);
              background-size: 100px 100%;
            }
          `}</style>

          {/* Section Background Image */}
          <div className="absolute inset-0 z-0 opacity-40">
            <Image src="/Home/bg_jobs.png" alt="Background" fill className="object-cover" priority />
          </div>

          {/* Vertical Grid Background */}
          <div className="absolute inset-0 vertical-grid opacity-30 pointer-events-none z-1" />

          <div className="w-full max-w-[1550px] px-8 md:px-12 flex flex-col items-center relative z-10">
            {/* Section Header */}
            <div className="flex flex-col items-center text-center mb-10 px-4 lg:px-0">
              <div className="section-label flex items-center justify-center gap-3 lg:gap-4 mb-4 lg:mb-0 text-white font-semibold tracking-wide text-[16px]">
                {/* Desktop: left_arrow.png, Mobile: text >> */}
                <span className="block lg:hidden text-[#9A9A9A] font-bold tracking-[-2px] text-[18px]">&gt;&gt;</span>
                <div className="relative w-8 h-8 opacity-60 hidden lg:block">
                  <Image src="/Home/left_arrow.png" alt="Arrow" fill className="object-contain" />
                </div>

                <span className="text-[#9A9A9A] lg:text-white/60 text-[18px] lg:text-[25px] font-bold lg:font-semibold tracking-[0.05em] lg:tracking-wide">
                  <span className="block lg:hidden uppercase tracking-widest text-[#B5B5B5]">Career</span>
                  <span className="hidden lg:block">Careers</span>
                </span>

                <span className="block lg:hidden text-[#9A9A9A] font-bold tracking-[-2px] text-[18px]">&lt;&lt;</span>
                <div className="relative w-8 h-8 opacity-60 hidden lg:block">
                  <Image src="/Home/right_arrow.png" alt="Arrow" fill className="object-contain" />
                </div>
              </div>
              <h2 className="text-[26px] md:text-[48px] font-bold md:font-semibold text-white leading-[1.3] max-w-[1200px] px-2 lg:px-0 mt-0 lg:mt-4">
                Be part of a passionate <br className="block md:hidden" /> team building the future <br className="hidden md:block" /> of technology while <br className="block md:hidden" /> growing your career.
              </h2>
            </div>

            {/* Carousel Container with Side Arrows */}
            <div className="relative w-full mt-6 lg:mt-12 lg:px-12 flex justify-center">
              {/* Left Side Navigation Arrow */}
              <button
                suppressHydrationWarning
                onClick={() => document.getElementById('careers-scroll-area')?.scrollBy({ left: -(document.getElementById('testimonial-scroll')?.clientWidth || 1352), behavior: 'smooth' })}
                className="absolute left-[calc(50%-165px)] lg:-left-2 top-[55%] lg:top-1/2 -translate-y-1/2 z-30 flex w-9 h-9 lg:w-12 lg:h-12 rounded-full border border-white/20 lg:border-white/40 bg-[#161719]/90 lg:bg-transparent items-center justify-center text-white hover:bg-white/10 transition-all backdrop-blur-md shadow-lg"
              >
                <IoMdArrowBack className="w-5 h-5 lg:w-6 lg:h-6" />
              </button>

              {/* Cards Scroll Area */}
              <div id="careers-scroll-area" className="w-full lg:max-w-[1320px] overflow-x-auto scrollbar-none pb-12 pt-4 relative scroll-smooth snap-x snap-mandatory flex">
                <div className="flex gap-4 lg:gap-8 px-[calc(50%-145px)] lg:px-0 w-max mx-auto lg:mx-0">
                  {careerJobs.map((job, idx) => (
                    <div key={idx} className="career-card bg-[#2B2D31] lg:bg-[#1a1c1e] bg-opacity-95 lg:bg-opacity-100 border border-white/10 lg:border-white/5 rounded-[16px] lg:rounded-[24px] p-6 lg:p-6 flex flex-col items-center lg:items-center group hover:bg-[#32353A] lg:hover:bg-[#222528] transition-all duration-500 lg:hover:-translate-y-2 shadow-[0_8px_30px_rgba(0,0,0,0.7)] lg:shadow-2xl w-[290px] lg:w-[306px] h-[420px] lg:h-[343px] shrink-0 overflow-hidden snap-start lg:snap-start backdrop-blur-md">

                      {/* Icon */}
                      <div className="relative mb-5 lg:mb-4 transform group-hover:scale-105 transition-transform duration-500 shrink-0 mx-auto w-[85px] h-[85px] lg:w-auto lg:h-auto [&>div]:border-0! lg:[&>div]:border-4! [&>div]:p-0! lg:[&>div]:p-2! [&>div>img]:scale-[1.25] lg:[&>div>img]:scale-100 flex items-center justify-center mt-6 lg:mt-0">
                        {job.icon}
                      </div>

                      <div className="flex flex-col w-full text-left lg:text-center mt-1">
                        {/* Title */}
                        <h3 className="text-white text-[16px] lg:text-[18px] font-bold mb-4 lg:mb-3 leading-tight min-h-0 lg:min-h-[44px] flex items-center justify-start lg:justify-center">
                          {job.title}
                        </h3>

                        {/* MODERN LINE SEPARATOR */}
                        <div className="w-full h-px bg-white/10 mb-4 hidden lg:block" />

                        {/* Metadata */}
                        <div className="w-full flex flex-col gap-3 lg:gap-3 mb-6 lg:mb-5 text-[#D1D5DB] lg:text-white/70 font-medium text-[13.5px] lg:text-[14px]">
                          <div className="flex items-center gap-3">
                            <div className="text-white lg:text-white/40">
                              <svg className="w-4 h-4 lg:w-5 lg:h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                            </div>
                            <span>{job.location}</span>
                          </div>
                          <div className="flex items-center gap-3">
                            <div className="text-white lg:text-white/40">
                              <svg className="w-4 h-4 lg:w-5 lg:h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                            </div>
                            <span>{job.experience}</span>
                          </div>
                        </div>

                        {/* Button */}
                        <button suppressHydrationWarning className="w-full py-2.5 lg:py-2.5 rounded-[8px] lg:rounded-xl border border-white/30 lg:border-white/20 bg-transparent text-white font-medium flex items-center justify-between lg:justify-center px-4 hover:bg-white hover:text-black transition-all text-[13.5px] mt-auto">
                          Apply Now
                          <svg className="w-[18px] h-[18px] lg:w-5 lg:h-5 lg:ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7-7 7M3 12h18" /></svg>
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Side Navigation Arrow */}
              <button
                suppressHydrationWarning
                onClick={() => document.getElementById('careers-scroll-area')?.scrollBy({ left: (document.getElementById('testimonial-scroll')?.clientWidth || 1352), behavior: 'smooth' })}
                className="absolute right-[calc(50%-165px)] lg:-right-2 top-[55%] lg:top-1/2 -translate-y-1/2 z-30 flex w-9 h-9 lg:w-12 lg:h-12 rounded-full border border-white/20 lg:border-white/40 bg-[#161719]/90 lg:bg-transparent items-center justify-center text-white hover:bg-white/10 transition-all backdrop-blur-md shadow-lg"
              >
                <IoMdArrowForward className="w-5 h-5 lg:w-6 lg:h-6" />
              </button>
            </div>
          </div>
        </section>

        <section data-section="blog" className="w-full bg-[#f8fafc] pt-14 pb-8 md:pt-24 md:pb-12 flex flex-col items-center relative overflow-hidden">
          <div className="w-full flex justify-start mb-6 px-4 md:px-[104px]">
            {/* Desktop Ribbon */}
            <div
              className="relative hidden md:flex items-center gap-4 px-10 py-3 w-fit ml-[-104px]"
              style={{
                background: 'linear-gradient(to right, #029EFA, #0E4E8B)',
                clipPath: 'polygon(0% 0%, 100% 0%, 92% 50%, 100% 100%, 0% 100%)'
              }}
            >
              <div className="relative w-12 h-12">
                <Image src="/Home/arrow.png" alt="Arrow" fill className="object-contain" />
              </div>
              <span className="text-white font-bold text-[24px] tracking-wider pr-4">Blog</span>
            </div>

            {/* Mobile Ribbon */}
            <div
              className="ribbon-banner relative flex md:hidden items-center justify-center gap-2 py-3.5 w-[65%] ml-[-16px]"
              style={{
                background: '#0484D1',
                clipPath: 'polygon(0% 0%, 100% 0%, 88% 50%, 100% 100%, 0% 100%)'
              }}
            >
              <span className="text-white/90 font-bold tracking-[-3px] text-[22px]">&gt;&gt;</span>
              <span className="text-white font-bold text-[22px] pr-6 pl-2 tracking-wide">Blog</span>
            </div>
          </div>

          <div className="w-full max-w-[1700px] px-5 md:px-[104px] flex flex-col relative z-10">
            {/* Section Header */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10 md:mb-16 gap-8">
              <div className="flex flex-col">
                <h2 className="text-[28px] md:text-[36px] lg:text-[40px] xl:text-[44px] font-bold md:font-semibold text-[#1F2933] leading-[1.2] tracking-tight">
                  <span className="md:whitespace-nowrap">Insights, ideas, and <br className="block md:hidden" /> updates from the <br className="block md:hidden" /> world of  <br className="block md:hidden" /> <p className="font-semibold px-0">technology and digital <br className="block md:hidden" /> innovation.</p></span>
                </h2>
              </div>

              {/* More Blogs Button */}
              <div className="shrink-0 mt-2 md:mt-0">
                <button
                  suppressHydrationWarning
                  className="blog-cta flex items-center relative group h-[52px] md:h-12 w-fit cursor-pointer overflow-hidden transition-all duration-700 rounded-[34px_34px_0px_34px] hover:rounded-[34px_34px_34px_0px]"
                >
                  {/* LEFT ICON CIRCLE */}
                  <div
                    className="absolute left-0 w-[52px] h-[52px] md:w-12 md:h-12 rounded-full bg-white flex items-center justify-center shadow-md z-20 transition-all duration-700 ease-in-out group-hover:left-[calc(100%-52px)] md:group-hover:left-[calc(100%-48px)] group-hover:bg-linear-to-r group-hover:from-[#3799FA] group-hover:to-[#9961FB] group-hover:scale-105"
                  >
                    <svg className="w-4 h-4 text-[#3799FA] transition-all duration-700 ease-in-out group-hover:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={4}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                  {/* MAIN BUTTON BODY */}
                  <div
                    className="pl-[68px] md:pl-14 pr-7 md:pr-8 h-full flex items-center text-white font-bold text-[15px] shadow-[0_8px_18px_rgba(55,153,250,0.25)] transition-all duration-700 ease-in-out bg-linear-to-r from-[#3799FA] to-[#9961FB] group-hover:from-white group-hover:to-white group-hover:text-black group-hover:pl-6 group-hover:pr-[68px] md:group-hover:pr-14 rounded-[34px_34px_0px_34px] group-hover:rounded-[34px_34px_34px_0px]"
                  >
                    More Blogs
                  </div>
                </button>
              </div>
            </div>

            {/* Desktop Blog Grid */}
            <div className="hidden md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
              {blogPosts.map((post, idx) => (
                <div key={idx} className="blog-card group cursor-pointer">
                  <div className="relative w-full max-w-[484px] h-[260px] rounded-[24px] overflow-hidden mb-6 shadow-xl border border-black/5">
                    <Image src={post.image} alt={post.title} fill className="object-cover transition-transform duration-700 group-hover:scale-105" />

                    {/* Tag Overlay */}
                    <div className="absolute top-4 left-4">
                      <div className="bg-[#0066cc] text-white px-4 py-1.5 rounded-lg text-[13px] font-bold tracking-wider shadow-md">
                        {post.tag}
                      </div>
                    </div>
                  </div>

                  <h3 className="text-[#1a1c1e] text-[22px] font-semibold mb-4 leading-tight group-hover:text-[#0066cc] transition-colors duration-300 line-clamp-2">
                    {post.title}
                  </h3>

                  <div className="flex items-center gap-3 text-black/40 font-semibold text-[15px]">
                    {post.type === 'watch' ? <FaCirclePlay className="w-5 h-5 opacity-70" /> : <FaClock className="w-5 h-5 opacity-70" />}
                    <span>{post.metadata}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Mobile Blog Carousel */}
            <div className="flex md:hidden overflow-x-auto scrollbar-none gap-5 pb-8 pt-2 snap-x snap-mandatory -mx-5 px-5" style={{ width: 'calc(100% + 40px)' }}>
              {blogPosts.map((post, idx) => (
                <div key={idx} className="blog-card group cursor-pointer shrink-0 w-[290px] snap-start">
                  <div className="relative w-full h-[190px] rounded-[24px] overflow-hidden mb-5 shadow-sm border border-black/5 bg-white">
                    <Image src={post.image} alt={post.title} fill className="object-cover" />

                    {/* Tag Overlay */}
                    <div className="absolute top-4 left-4">
                      <div className="bg-[#0066cc] text-white px-3.5 py-1.5 rounded-[6px] text-[12px] font-bold tracking-widest uppercase shadow-md">
                        {post.tag}
                      </div>
                    </div>
                  </div>

                  <h3 className="text-[#1F2933] text-[20px] font-bold mb-3 leading-tight transition-colors duration-300">
                    {post.title}
                  </h3>

                  <div className="flex items-center gap-2.5 text-[#A1A1AA] text-[14px]">
                    {post.type === 'watch' ? <FaCirclePlay className="w-[18px] h-[18px] opacity-70" /> : <FaClock className="w-[18px] h-[18px] opacity-70" />}
                    <span className="font-semibold">{post.metadata}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

{/* 
        <section id="testimonials" data-section="testimonials" className="w-full bg-[#0a0a0a] flex flex-col items-center relative overflow-hidden h-[896px] py-20">
          <div className="absolute inset-0 z-0">
            <Image
              src="/Home/bg_jobs.png"
              alt="Background"
              fill
              className="object-cover opacity-60 mix-blend-overlay"
              priority
            />
            <div className="absolute inset-0 bg-linear-to-b from-[#0a0a0a] via-transparent to-[#0a0a0a]" />
          </div>

          <div className="w-full flex justify-start mb-6 md:mb-10 px-0 md:px-[104px] relative z-10">
            <div
              className="relative hidden md:flex items-center gap-4 px-10 py-3 w-fit ml-[-104px]"
              style={{
                background: 'linear-gradient(to right, #029EFA, #0E4E8B)',
                clipPath: 'polygon(0% 0%, 100% 0%, 92% 50%, 100% 100%, 0% 100%)'
              }}
            >
              <div className="relative w-12 h-12">
                <Image src="/Home/arrow.png" alt="Arrow" fill className="object-contain" />
              </div>
              <span className="text-white font-bold text-[24px] tracking-wider pr-4">Testimonials</span>
            </div>

            <div
              className="ribbon-banner relative flex md:hidden items-center justify-center gap-2 py-3.5 w-[85%]"
              style={{
                background: '#0484D1',
                clipPath: 'polygon(0% 0%, 100% 0%, 88% 50%, 100% 100%, 0% 100%)'
              }}
            >
              <span className="text-white/90 font-bold tracking-[-3px] text-[22px]">&gt;&gt;</span>
              <span className="text-white font-bold text-[22px] pr-6 pl-2 tracking-wide">Testimonials</span>
            </div>
          </div>

          <div className="w-full max-w-[1700px] px-6 md:px-[104px] flex flex-col relative z-20">
            <h2 className="text-[32px] md:text-[44px] font-bold md:font-semibold text-white leading-tight mb-12 md:mb-20 max-w-[90%] md:max-w-full lg:max-w-[1200px] tracking-tight">
              Real stories from <br className="block md:hidden" /> clients who trust <br className="block md:hidden" /> our technology and <br className="block md:hidden" /> expertise.
            </h2>

            <div className="relative group mx-auto w-full md:w-fit max-w-full">
              <button
                suppressHydrationWarning
                onClick={() => document.getElementById('testimonial-scroll')?.scrollBy({ left: -(document.getElementById('testimonial-scroll')?.clientWidth || 1352), behavior: 'smooth' })}
                className="absolute -left-12 md:-left-24 lg:-left-36 top-1/2 -translate-y-1/2 z-30 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 items-center justify-center backdrop-blur-md transition-all border border-white/20 hidden md:flex"
              >
                <IoMdArrowBack className="w-6 h-6 text-white" />
              </button>

              <button
                suppressHydrationWarning
                onClick={() => document.getElementById('testimonial-scroll')?.scrollBy({ left: (document.getElementById('testimonial-scroll')?.clientWidth || 1352), behavior: 'smooth' })}
                className="absolute -right-12 md:-right-24 lg:-right-36 top-1/2 -translate-y-1/2 z-30 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 items-center justify-center backdrop-blur-md transition-all border border-white/20 hidden md:flex"
              >
                <IoMdArrowForward className="w-6 h-6 text-white" />
              </button>

              <button
                suppressHydrationWarning
                onClick={() => document.getElementById('testimonial-scroll')?.scrollBy({ left: -300, behavior: 'smooth' })}
                className="absolute left-[calc(50%-160px)] top-1/2 -translate-y-1/2 z-30 flex md:hidden w-[42px] h-[42px] rounded-full border border-white/30 bg-black/60 items-center justify-center text-white hover:bg-white/10 transition-all backdrop-blur-md"
              >
                <IoMdArrowBack className="w-5 h-5" />
              </button>

              <div
                id="testimonial-scroll"
                className="flex gap-4 md:gap-8 overflow-x-auto snap-x snap-mandatory py-4 pb-12 w-full max-w-[1320px] scrollbar-none px-[calc(50%-145px)] md:px-0"
              >
                {(testimonials || []).map((t, idx) => (
                  t.type === 'video' ? (
                    <div key={idx} className="testimonial-card shrink-0 w-[280px] md:w-[306px] h-[400px] md:h-[401px] relative rounded-[20px] md:rounded-[24px] overflow-hidden snap-start shadow-2xl border border-white/20 group/card">
                      <Image src={t.image} alt={t.name} fill className="object-cover transition-transform duration-700 group-hover/card:scale-105" />
                      <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/20 to-transparent" />

                      <div className="absolute bottom-5 md:bottom-6 left-4 right-4 md:left-5 md:right-5 flex flex-col gap-2">
                        <div className="bg-white/20 backdrop-blur-xl px-4 py-3 md:py-4 rounded-[16px] md:rounded-[20px] border border-white/30 w-full flex items-center justify-between shadow-xl">
                          <div className="w-[42px] h-[32px] md:w-10 md:h-10 bg-white flex items-center justify-center text-[#3799FA] shadow-lg shrink-0 rounded-[6px] md:rounded-xl">
                            <FaCirclePlay className="w-[18px] h-[18px] md:w-5 md:h-5" />
                          </div>
                          <div className="flex flex-col overflow-hidden text-right">
                            <span className="text-white font-bold text-[15px] md:text-[16px] truncate">{t.name}</span>
                            <span className="text-white/80 text-[11px] md:text-[13px] font-bold truncate uppercase tracking-wider">{t.role}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div key={idx} className="testimonial-card shrink-0 w-[290px] md:w-[306px] h-[420px] md:h-[446px] bg-[#1a1c1e] md:bg-[#1a1c1e]/80 backdrop-blur-xl rounded-[20px] md:rounded-[24px] p-6 md:p-8 snap-start border-t md:border border-white/10 md:border-white/5 flex flex-col justify-between shadow-[0_10px_40px_rgba(0,0,0,0.8)] md:shadow-2xl">
                      <div>
                        <div className="flex gap-1.5 mb-6 md:mb-8">
                          {[...Array(t.stars || 5)].map((_, i) => (
                            <FaStar key={i} className="text-white w-[14px] h-[14px]" />
                          ))}
                        </div>
                        <p className="text-white/90 font-semibold text-[14.5px] md:text-[15px] leading-[1.6] italic pr-2">
                          {t.message}
                        </p>
                      </div>

                      <div className="bg-[#242629] md:bg-white/5 p-3 md:p-4 rounded-[16px] md:rounded-[20px] border md:border border-white/5 md:border-white/5 flex items-center gap-3.5 md:gap-4 hover:bg-white/5 md:hover:bg-white/10 transition-colors duration-300">
                        <div className="relative w-11 h-11 md:w-12 md:h-12 rounded-full overflow-hidden border md:border-2 border-white/20 shrink-0">
                          <Image src={t.image} alt={t.name} fill className="object-cover" />
                        </div>
                        <div className="flex flex-col overflow-hidden">
                          <span className="text-white font-bold text-[14.5px] md:text-[15px] truncate leading-tight">{t.name},</span>
                          <span className="text-white/40 text-[10.5px] md:text-[11px] font-extrabold uppercase tracking-[0.08em] truncate">{t.role}</span>
                        </div>
                      </div>
                    </div>
                  )
                ))}
              </div>

              <button
                suppressHydrationWarning
                onClick={() => document.getElementById('testimonial-scroll')?.scrollBy({ left: 300, behavior: 'smooth' })}
                className="absolute right-[calc(50%-160px)] top-1/2 -translate-y-1/2 z-30 flex md:hidden w-[42px] h-[42px] rounded-full border border-white/30 bg-black/60 items-center justify-center text-white hover:bg-white/10 transition-all backdrop-blur-md"
              >
                <IoMdArrowForward className="w-5 h-5" />
              </button>
            </div>
          </div>

          <div className="absolute bottom-0 left-0 right-0 h-[500px] pointer-events-none opacity-20 z-0"
            style={{
              perspective: '1000px',
              transformStyle: 'preserve-3d'
            }}>
            <div className="absolute inset-0"
              style={{
                backgroundImage: 'linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)',
                backgroundSize: '80px 80px',
                transform: 'rotateX(55deg) translateY(-100px)',
                maskImage: 'linear-gradient(to top, rgba(0,0,0,1), rgba(0,0,0,0))'
              }} />
          </div>
        </section>
        */}

        {/* FAQ Section */}
        <section id="faq" data-section="faq" className="w-full bg-[#f8fafc] pt-8 pb-14 md:pt-12 md:pb-24 flex flex-col items-center relative overflow-hidden">
          <div className="w-full flex justify-start mb-8 md:mb-10 px-0 md:px-[104px] relative z-10">
            {/* Desktop Ribbon */}
            <div
              className="relative hidden md:flex items-center gap-4 px-10 py-3 w-fit ml-[-104px]"
              style={{
                background: 'linear-gradient(to right, #029EFA, #0E4E8B)',
                clipPath: 'polygon(0% 0%, 100% 0%, 92% 50%, 100% 100%, 0% 100%)'
              }}
            >
              <div className="relative w-12 h-12">
                <Image src="/Home/arrow.png" alt="Arrow" fill className="object-contain" />
              </div>
              <span className="text-white font-bold text-[24px] tracking-wider pr-4">FAQs</span>
            </div>

            {/* Mobile Ribbon - small, left-edge hugging */}
            <div
              className="ribbon-banner relative flex md:hidden items-center gap-2 py-2.5 px-5 w-fit"
              style={{
                background: '#0484D1',
                clipPath: 'polygon(0% 0%, 100% 0%, 85% 50%, 100% 100%, 0% 100%)',
                borderRadius: '0 4px 4px 0'
              }}
            >
              <span className="text-white/90 font-bold tracking-[-3px] text-[16px]">&gt;&gt;</span>
              <span className="text-white font-bold text-[16px] pr-5 pl-1 tracking-wide">FAQs</span>
            </div>
          </div>

          <div className="w-full max-w-[1700px] px-5 md:px-[104px] flex flex-col relative z-20">
            <h2 className="text-[30px] md:text-[44px] font-bold text-[#1a1c1e] leading-tight mb-8 md:mb-16">
              Frequently Asked Questions
            </h2>

            <div className="flex flex-col lg:flex-row gap-6 md:gap-8">
              {/* Accordion Column */}
              <div className="flex-1 w-full space-y-3 md:space-y-4">
                {faqData.map((faq, idx) => (
                  <div
                    key={idx}
                    className={`faq-item bg-white rounded-[14px] md:rounded-[20px] transition-all duration-300 border ${activeFaqIdx === idx ? 'border-blue-500/40 shadow-md md:shadow-xl' : 'border-black/5'}`}
                  >
                    <button
                      suppressHydrationWarning
                      onClick={() => setActiveFaqIdx(activeFaqIdx === idx ? -1 : idx)}
                      className="w-full px-4 md:px-8 py-4 md:py-6 flex items-center justify-between text-left group"
                    >
                      <div className="flex items-center gap-4 md:gap-6 flex-1 min-w-0 pr-3">
                        <span className="text-[#1a1c1e]/30 font-bold text-[15px] md:text-[18px] shrink-0">
                          {String(idx + 1).padStart(2, '0')}
                        </span>
                        <span className={`text-[14.5px] md:text-[20px] font-semibold transition-colors leading-snug ${activeFaqIdx === idx ? 'text-blue-600' : 'text-[#1a1c1e] group-hover:text-blue-500'}`}>
                          {faq.question}
                        </span>
                      </div>
                      <div className={`w-7 h-7 md:w-8 md:h-8 rounded-full flex items-center justify-center shrink-0 transition-all ${activeFaqIdx === idx ? 'bg-blue-600 text-white' : 'bg-black/5 text-black/60'}`}>
                        {activeFaqIdx === idx ? <FaMinus className="w-3 h-3 md:w-4 md:h-4" /> : <FaPlus className="w-3 h-3 md:w-4 md:h-4" />}
                      </div>
                    </button>
                    <div
                      className={`overflow-hidden transition-all duration-300 ${activeFaqIdx === idx ? 'max-h-[300px] opacity-100' : 'max-h-0 opacity-0'}`}
                    >
                      <div className="px-4 md:px-8 pb-5 md:pb-8 pl-[54px] md:pl-[84px] text-black/60 text-[13.5px] md:text-[16px] leading-relaxed">
                        {faq.answer}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Contact Card Column */}
              <div className="w-full lg:w-[399px] shrink-0 lg:sticky lg:top-24 mt-4 md:mt-0">
                <div
                  className="rounded-[24px] md:rounded-[32px] p-6 md:p-8 relative overflow-hidden flex flex-col text-left md:text-center shadow-xl md:shadow-2xl"
                  style={{
                    background: 'linear-gradient(to bottom, #0a0f1e, #20B5F9)'
                  }}
                >
                  {/* Floating Question Mark Asset */}
                  <div
                    className="absolute top-0 right-0 opacity-30 pointer-events-none"
                    style={{ width: '220px', height: '240px' }}
                  >
                    <Image src="/Home/question-mark.png" alt="Question Mark" fill className="object-contain object-top-right" />
                  </div>

                  <div className="relative z-10 pt-4 md:pt-16 md:mt-4">
                    <h3 className="text-white text-[22px] md:text-[28px] font-bold mb-4 md:mb-6 leading-tight max-w-[200px] md:max-w-full">
                      Do You Have More Questions?
                    </h3>
                    <p className="text-white/70 text-[13.5px] md:text-[15px] mb-8 md:mb-10 leading-relaxed md:px-4 max-w-[85%] md:max-w-full">
                      We&apos;re here to help. If you didn&apos;t find the answer you&apos;re looking for, feel free to reach out to our team for personalized assistance.
                    </p>

                    <div className="w-full space-y-3 md:space-y-4">
                      {/* Call Button */}
                      <a href="tel:+918977272783" className="w-full py-3.5 md:py-4 rounded-xl flex items-center justify-center gap-3 text-white font-bold transition-transform hover:scale-[1.02] shadow-lg"
                        style={{
                          background: 'linear-gradient(to right, #3799FA, #9961FB)'
                        }}>
                        <FaPhone className="w-4 h-4 md:w-5 md:h-5" />
                        Call Us Now
                      </a>

                      {/* WhatsApp Button */}
                      <a href="https://wa.me/918977272783?text=Hello%20Dilshaj%20Infotech%20Team" target="_blank" rel="noopener noreferrer" className="w-full py-3.5 md:py-4 rounded-xl flex items-center justify-center gap-3 bg-white text-black font-bold transition-transform hover:scale-[1.02] shadow-lg">
                        <FaWhatsapp className="w-5 h-5 md:w-6 md:h-6 text-[#25D366]" />
                        Connect on WhatsApp
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <ContactSection />
        <Footer />
      </main>
    </div>
  );
}


