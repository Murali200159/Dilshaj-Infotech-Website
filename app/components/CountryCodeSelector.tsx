"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { ChevronDown, Search, Check } from "lucide-react";
import { countries, Country } from "../data/countries";

interface CountryCodeSelectorProps {
    selectedCountry: Country;
    onSelect: (country: Country) => void;
}

export default function CountryCodeSelector({ selectedCountry, onSelect }: CountryCodeSelectorProps) {
    const [isOpen, setIsOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState("");
    const dropdownRef = useRef<HTMLDivElement>(null);

    const filteredCountries = countries.filter(c =>
        c.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        c.dialCode.includes(searchQuery)
    );

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    return (
        <div className="relative" ref={dropdownRef}>
            {/* Trigger */}
            <button
                suppressHydrationWarning
                type="button"
                onClick={() => setIsOpen(!isOpen)}
                className="flex items-center gap-2 px-4 py-4 rounded-2xl bg-white/5 border border-white/20 hover:border-white/40 transition-all text-white focus:outline-none min-w-[100px]"
            >
                <div className="flex items-center gap-2 shrink-0">
                    <Image
                        src={`https://flagcdn.com/${selectedCountry.code.toLowerCase()}.svg`}
                        alt={selectedCountry.name}
                        width={20}
                        height={15}
                        className="rounded-sm"
                    />
                    <span className="text-white/90 font-medium">{selectedCountry.dialCode}</span>
                </div>
                <ChevronDown className={`w-4 h-4 text-white/40 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
            </button>

            {/* Dropdown Menu */}
            {isOpen && (
                <div className="absolute bottom-full left-0 mb-2 w-[280px] max-h-[400px] overflow-hidden bg-[#1A1F2C]/95 backdrop-blur-xl border border-white/20 rounded-2xl shadow-2xl z-50 flex flex-col">
                    {/* Search Input */}
                    <div className="p-3 border-b border-white/10 relative">
                        <Search className="absolute left-6 top-1/2 -translate-y-1/2 w-4 h-4 text-white/40" />
                        <input
                            suppressHydrationWarning
                            type="text"
                            placeholder="Search countries..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full bg-white/5 border border-white/10 rounded-xl pl-10 pr-4 py-2 text-white text-sm placeholder:text-white/30 focus:outline-none focus:border-[#3799FA]/50"
                        />
                    </div>

                    {/* List */}
                    <div
                        className="overflow-y-auto flex-1 scrollbar-none overscroll-contain"
                        data-lenis-prevent
                    >
                        {filteredCountries.length > 0 ? (
                            filteredCountries.map((country) => (
                                <button
                                    suppressHydrationWarning
                                    key={country.code}
                                    type="button"
                                    onClick={() => {
                                        onSelect(country);
                                        setIsOpen(false);
                                        setSearchQuery("");
                                    }}
                                    className={`w-full flex items-center justify-between px-4 py-3 hover:bg-white/10 transition-colors ${selectedCountry.code === country.code ? 'bg-[#3799FA]/20' : ''}`}
                                >
                                    <div className="flex items-center gap-3">
                                        <div className="w-6 shrink-0">
                                            <Image
                                                src={`https://flagcdn.com/${country.code.toLowerCase()}.svg`}
                                                alt={country.name}
                                                width={20}
                                                height={15}
                                                className="rounded-sm"
                                            />
                                        </div>
                                        <span className="text-white text-sm font-medium truncate max-w-[140px] text-left">{country.name}</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <span className="text-white/40 text-xs">{country.dialCode}</span>
                                        {selectedCountry.code === country.code && (
                                            <Check className="w-3.5 h-3.5 text-[#3799FA]" />
                                        )}
                                    </div>
                                </button>
                            ))
                        ) : (
                            <div className="p-8 text-center text-white/40 text-sm">
                                No countries found
                            </div>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
}
