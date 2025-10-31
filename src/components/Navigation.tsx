"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import Image from "next/image";

export default function Navigation() {
    const [isOpen, setIsOpen] = useState(false);
    const [isClosing, setIsClosing] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinks = [
        { href: "/", label: "Ana Sayfa" },
        { href: "/hakkimizda", label: "Hakkımızda" },
        { href: "/hizmetler", label: "Hizmetler" },
        { href: "/projeler", label: "Projeler" },
        { href: "/referanslar", label: "Referanslar" },
        { href: "/iletisim", label: "İletişim" },
    ];

    // Lock scroll on mobile menu open
    useEffect(() => {
        if (isOpen) {
            document.documentElement.classList.add("overflow-hidden");
        } else {
            document.documentElement.classList.remove("overflow-hidden");
        }
        return () => document.documentElement.classList.remove("overflow-hidden");
    }, [isOpen]);

    const openMenu = () => {
        setIsClosing(false);
        setIsOpen(true);
    };

    const closeMenu = () => {
        // play closing animation before unmounting
        setIsClosing(true);
        setTimeout(() => {
            setIsOpen(false);
            setIsClosing(false);
        }, 220); // keep in sync with CSS durations
    };

    return (
        <>
        <nav
            className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled
                ? "bg-black/80 backdrop-blur-md border-b border-primary/20 shadow-2xl"
                : "bg-black/40 backdrop-blur-sm"
                }`}
        >
            <div className="container mx-auto px-4">
                <div className="flex justify-between items-center h-28 md:h-32">
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
                        <Image
                            src="/logo.png"
                            alt="Mustafa Karlı Mühendislik"
                            width={120}
                            height={120}
                            className="h-24 w-auto md:h-28"
                            priority
                        />
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center gap-1">
                        {navLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className="px-4 py-2 text-sm font-medium text-gray-300 hover:text-primary transition-colors duration-200 rounded-md hover:bg-primary/10"
                            >
                                {link.label}
                            </Link>
                        ))}
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => (isOpen ? closeMenu() : openMenu())}
                        className="md:hidden p-2 rounded-md text-gray-300 hover:text-primary hover:bg-primary/10 transition-colors"
                    >
                        {isOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>

                {/* Mobile Navigation */}
                {(isOpen || isClosing) && (
                    <div className={`md:hidden pb-4 border-t border-primary/20 ${isClosing ? "animate-dropdown-out" : "animate-dropdown-in"} backface-hidden will-change-transform`}>
                        {navLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className="block px-4 py-2 text-base font-medium text-gray-300 hover:text-primary hover:bg-primary/10 rounded-md transition-colors"
                                onClick={closeMenu}
                            >
                                {link.label}
                            </Link>
                        ))}
                    </div>
                )}
            </div>
        </nav>
        {(isOpen || isClosing) && (
            <button
                aria-label="Menüyü kapat"
                onClick={closeMenu}
                className={`fixed inset-0 z-40 md:hidden bg-black/40 ${isClosing ? "animate-fade-blur-out" : "animate-fade-blur-in"} backface-hidden`}
                style={{ willChange: 'opacity, backdrop-filter' }}
            />
        )}
        </>
    );
}

