"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/**
 * HomeScrollAnimations
 * Mounts GSAP ScrollTrigger animations for every home-page section.
 * Targets section wrapper elements by their `data-section` attribute.
 */
export default function HomeScrollAnimations() {
    useEffect(() => {
        const mm = gsap.matchMedia();

        // ─── Shared Start Points ──────────────────────────────────────────
        const desktopStart = "top 85%";
        const mobileStart = "top 90%";

        mm.add({
            // Desktop and Tablet
            isDesktop: "(min-width: 768px)",
            // Mobile
            isMobile: "(max-width: 767px)",
        }, (context) => {
            const { isMobile } = context.conditions as any;
            const start = isMobile ? mobileStart : desktopStart;

            // ─── Helper ───────────────────────────────────────────────────
            const animateFrom = (
                targets: string | Element | Element[],
                fromVars: gsap.TweenVars,
                toVars: gsap.TweenVars,
                trigger: string | Element,
                customStart?: string
            ) => {
                const els = typeof targets === "string"
                    ? gsap.utils.toArray<Element>(targets)
                    : Array.isArray(targets) ? targets : [targets];

                if (!els.length) return;

                gsap.fromTo(els, fromVars, {
                    ...toVars,
                    scrollTrigger: {
                        trigger,
                        start: customStart || start,
                        toggleActions: "play none none none",
                    },
                });
            };

            // ─── 1. DARK STATS / IMPACT CARD SECTION ──────────────────────
            const statsSection = document.querySelector('[data-section="stats"]');
            if (statsSection) {
                const ribbon = statsSection.querySelector(".ribbon-banner");
                if (ribbon) animateFrom(ribbon, { x: isMobile ? -50 : -80, opacity: 0 }, { x: 0, opacity: 1, duration: 0.7, ease: "power3.out" }, statsSection);

                const impactCard = statsSection.querySelector(".impact-card");
                if (impactCard) animateFrom(impactCard, { y: 60, opacity: 0, scale: isMobile ? 0.98 : 0.97 }, { y: 0, opacity: 1, scale: 1, duration: 0.9, ease: "power3.out" }, statsSection);

                const statItems = gsap.utils.toArray<Element>(statsSection.querySelectorAll(".stat-number-item"));
                if (statItems.length) {
                    gsap.fromTo(statItems, { y: 40, opacity: 0 }, {
                        y: 0, opacity: 1, duration: 0.6, stagger: 0.1, ease: "power3.out",
                        scrollTrigger: { trigger: statsSection, start: isMobile ? "top 88%" : "top 78%", toggleActions: "play none none none" }
                    });
                }

                // Count-up animation for stat values
                const statValues = statsSection.querySelectorAll(".stat-value");
                statValues.forEach((el) => {
                    const targetValue = parseInt(el.getAttribute("data-value") || "0");
                    const originalText = el.textContent || "";
                    const hasPlus = originalText.includes("+");
                    const hasPercent = originalText.includes("%");
                    const hasSlash = originalText.includes("/");

                    if (targetValue > 0) {
                        const counter = { val: 0 };
                        gsap.to(counter, {
                            val: targetValue,
                            duration: 2,
                            ease: "power2.out",
                            scrollTrigger: {
                                trigger: el,
                                start: "top 95%",
                                toggleActions: "play none none none"
                            },
                            onUpdate: () => {
                                let formattedValue = Math.floor(counter.val).toString();
                                if (hasPercent) formattedValue += "%";
                                if (hasPlus) formattedValue += "+";
                                if (hasSlash && targetValue === 24) formattedValue += "/7";
                                el.textContent = formattedValue;
                            }
                        });
                    }
                });
            }

            // ─── 2. SERVICES SECTION ──────────────────────────────────────
            const servicesSection = document.querySelector('[data-section="services"]');
            if (servicesSection) {
                const ribbon = servicesSection.querySelector(".ribbon-banner");
                if (ribbon) animateFrom(ribbon, { x: isMobile ? -50 : -80, opacity: 0 }, { x: 0, opacity: 1, duration: 0.6, ease: "power3.out" }, servicesSection);

                const h2 = servicesSection.querySelector("h2");
                if (h2) animateFrom(h2, { y: 50, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" }, servicesSection);

                const imageCard = servicesSection.querySelector(".services-image-card");
                if (imageCard) animateFrom(imageCard, { x: isMobile ? 0 : -70, y: isMobile ? 40 : 0, opacity: 0 }, { x: 0, y: 0, opacity: 1, duration: 0.9, ease: "power3.out" }, servicesSection, "top 80%");

                const listItems = gsap.utils.toArray<Element>(servicesSection.querySelectorAll(".service-list-item"));
                if (listItems.length) {
                    gsap.fromTo(listItems, { x: isMobile ? 0 : 50, y: isMobile ? 30 : 0, opacity: 0 }, {
                        x: 0, y: 0, opacity: 1, duration: 0.6, stagger: 0.08, ease: "power3.out",
                        scrollTrigger: { trigger: servicesSection, start: "top 80%", toggleActions: "play none none none" }
                    });
                }
            }

            // ─── 3. PRODUCTS SECTION ──────────────────────────────────────
            const productsSection = document.querySelector('[data-section="products"]');
            if (productsSection) {
                const badge = productsSection.querySelector(".products-badge-row");
                if (badge) animateFrom(badge, { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: 0.5, ease: "power3.out" }, productsSection);

                const h2 = productsSection.querySelector("h2");
                if (h2) animateFrom(h2, { y: 50, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8, delay: 0.1, ease: "power3.out" }, productsSection);
            }

            // ─── 4. TECHNOLOGIES SECTION ──────────────────────────────────
            const techSection = document.querySelector('[data-section="technologies"]');
            if (techSection) {
                const ribbon = techSection.querySelector(".ribbon-banner");
                if (ribbon) animateFrom(ribbon, { x: isMobile ? -50 : -80, opacity: 0 }, { x: 0, opacity: 1, duration: 0.6, ease: "power3.out" }, techSection);

                const h2 = techSection.querySelector("h2");
                if (h2) animateFrom(h2, { y: 60, opacity: 0 }, { y: 0, opacity: 1, duration: 0.9, ease: "power3.out" }, techSection);
            }

            // ─── SLIDER PILL TRANSITION LOGIC (Optimized) ────────────────
            const sections = ['product', 'tech'];
            sections.forEach(sectionType => {
                const panels = gsap.utils.toArray<Element>(`.${sectionType}-panel`);
                panels.forEach((panel, i) => {
                    const innerCard = panel.querySelector('.will-change-transform');
                    if (!innerCard) return;

                    // 1. Entrance: Fast & Sharp
                    gsap.fromTo(innerCard, 
                        { y: 150, opacity: 0, scale: 0.95, filter: "blur(6px)" },
                        {
                            y: 0, opacity: 1, scale: 1, filter: "blur(0px)",
                            ease: "power2.out", force3D: true,
                            scrollTrigger: {
                                trigger: panel,
                                start: "top 100%",
                                end: "top 45%",
                                scrub: 2.2, // Silkier, weighted movement
                            }
                        }
                    );

                    // 2. Hide Card: ONLY when the next card is almost fully covering it
                    const nextPanel = i < panels.length - 1 ? panels[i + 1] : null;
                    if (nextPanel) {
                        gsap.to(innerCard, {
                            opacity: 0, scale: 0.93, y: -60,
                            scrollTrigger: {
                                trigger: nextPanel,
                                start: "top 50%", 
                                end: "top 0%",    
                                scrub: 2.2,
                            }
                        });
                    }
                });
            });

            // ─── 5. WHY DILSHAJ / ACCELERATION SECTION ────────────────────
            const accelSection = document.querySelector('[data-section="acceleration"]');
            if (accelSection) {
                const label = accelSection.querySelector(".section-label");
                if (label) animateFrom(label, { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: 0.5, ease: "power3.out" }, accelSection);

                const h2 = accelSection.querySelector("h2");
                if (h2) animateFrom(h2, { y: 50, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8, delay: 0.1, ease: "power3.out" }, accelSection);

                const cards = gsap.utils.toArray<Element>(accelSection.querySelectorAll(".accel-card"));
                if (cards.length) {
                    gsap.fromTo(cards, { y: 60, opacity: 0, scale: 0.97 }, {
                        y: 0, opacity: 1, scale: 1, duration: 0.75, stagger: 0.1, ease: "power3.out",
                        scrollTrigger: { trigger: accelSection, start: "top 80%", toggleActions: "play none none none" }
                    });
                }
            }

            // ─── 6. CAREERS SECTION ───────────────────────────────────────
            const careersSection = document.querySelector('[data-section="careers"]');
            if (careersSection) {
                const label = careersSection.querySelector(".section-label");
                if (label) animateFrom(label, { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: 0.5, ease: "power3.out" }, careersSection);

                const h2 = careersSection.querySelector("h2");
                if (h2) animateFrom(h2, { y: 50, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8, delay: 0.1, ease: "power3.out" }, careersSection);

                const cards = gsap.utils.toArray<Element>(careersSection.querySelectorAll(".career-card"));
                if (cards.length) {
                    gsap.fromTo(cards, { y: 50, opacity: 0, scale: 0.96 }, {
                        y: 0, opacity: 1, scale: 1, duration: 0.7, stagger: 0.08, ease: "back.out(1.2)",
                        scrollTrigger: { trigger: careersSection, start: "top 85%", toggleActions: "play none none none" }
                    });
                }
            }

            // ─── 7. BLOG SECTION ──────────────────────────────────────────
            const blogSection = document.querySelector('[data-section="blog"]');
            if (blogSection) {
                const ribbon = blogSection.querySelector(".ribbon-banner");
                if (ribbon) animateFrom(ribbon, { x: isMobile ? -50 : -70, opacity: 0 }, { x: 0, opacity: 1, duration: 0.6, ease: "power3.out" }, blogSection);

                const h2 = blogSection.querySelector("h2");
                if (h2) animateFrom(h2, { y: 40, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8, delay: 0.1, ease: "power3.out" }, blogSection);

                const cta = blogSection.querySelector(".blog-cta");
                if (cta) animateFrom(cta, { scale: 0.9, opacity: 0 }, { scale: 1, opacity: 1, duration: 0.7, delay: 0.2, ease: "back.out(1.5)" }, blogSection);

                const cards = gsap.utils.toArray<Element>(blogSection.querySelectorAll(".blog-card"));
                if (cards.length) {
                    gsap.fromTo(cards, { y: 50, opacity: 0 }, {
                        y: 0, opacity: 1, duration: 0.7, stagger: 0.1, ease: "power3.out",
                        scrollTrigger: { trigger: blogSection, start: "top 82%", toggleActions: "play none none none" }
                    });
                }
            }

            // ─── 8. TESTIMONIALS SECTION ──────────────────────────────────
            const testimonialsSection = document.querySelector('[data-section="testimonials"]');
            if (testimonialsSection) {
                const ribbon = testimonialsSection.querySelector(".ribbon-banner");
                if (ribbon) animateFrom(ribbon, { x: isMobile ? -50 : -70, opacity: 0 }, { x: 0, opacity: 1, duration: 0.6, ease: "power3.out" }, testimonialsSection);

                const h2 = testimonialsSection.querySelector("h2");
                if (h2) animateFrom(h2, { y: 50, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8, delay: 0.1, ease: "power3.out" }, testimonialsSection);

                const cards = gsap.utils.toArray<Element>(testimonialsSection.querySelectorAll(".testimonial-card"));
                if (cards.length) {
                    gsap.fromTo(cards, { y: 50, opacity: 0, scale: 0.96 }, {
                        y: 0, opacity: 1, scale: 1, duration: 0.7, stagger: 0.1, ease: "power3.out",
                        scrollTrigger: { trigger: testimonialsSection, start: "top 85%", toggleActions: "play none none none" }
                    });
                }
            }

            // ─── 9. FAQ SECTION ───────────────────────────────────────────
            const faqSection = document.querySelector('[data-section="faq"]');
            if (faqSection) {
                const ribbon = faqSection.querySelector(".ribbon-banner");
                if (ribbon) animateFrom(ribbon, { x: isMobile ? -50 : -70, opacity: 0 }, { x: 0, opacity: 1, duration: 0.6, ease: "power3.out" }, faqSection);

                const h2 = faqSection.querySelector("h2");
                if (h2) animateFrom(h2, { y: 40, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8, delay: 0.1, ease: "power3.out" }, faqSection);

                const items = gsap.utils.toArray<Element>(faqSection.querySelectorAll(".faq-item"));
                if (items.length) {
                    gsap.fromTo(items, { x: isMobile ? -30 : -40, opacity: 0 }, {
                        x: 0, opacity: 1, duration: 0.6, stagger: 0.08, ease: "power3.out",
                        scrollTrigger: { trigger: faqSection, start: "top 85%", toggleActions: "play none none none" }
                    });
                }
            }
        });

        // Ensure everything is calculated correctly after a small delay
        const timer = setTimeout(() => {
            ScrollTrigger.refresh();
        }, 500);

        return () => {
            clearTimeout(timer);
            mm.revert();
        };
    }, []);

    return null;
}
