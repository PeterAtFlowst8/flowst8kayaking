"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { Menu, X } from "lucide-react";
import clsx from "clsx";

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const { scrollY } = useScroll();

    useMotionValueEvent(scrollY, "change", (latest) => {
        setIsScrolled(latest > 50);
    });

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className={clsx(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
                isScrolled
                    ? "bg-white/80 backdrop-blur-md border-b border-primary/10 shadow-sm py-4"
                    : "bg-transparent py-6"
            )}
        >
            <div className="container mx-auto px-6 flex justify-between items-center">
                {/* Animated Logo */}
                <Link href="/" className="group flex items-center gap-2">
                    <div className={clsx(
                        "relative w-12 h-12 rounded-full overflow-hidden border transition-colors duration-300",
                        isScrolled ? "border-primary/20 group-hover:border-secondary" : "border-white/20 group-hover:border-secondary"
                    )}>
                        <img
                            src="/images/logo-icon.jpeg"
                            alt="FlowSt8 Logo"
                            className="w-full h-full object-cover"
                        />
                    </div>
                    <span className={clsx(
                        "font-heading text-2xl font-bold tracking-tight transition-colors duration-300",
                        isScrolled ? "text-primary" : "text-white"
                    )}>
                        FlowSt
                        <span className="text-secondary inline-block transition-transform duration-300 group-hover:rotate-180">
                            8
                        </span>
                    </span>
                </Link>

                {/* Desktop Links */}
                <div className="hidden md:flex items-center gap-8">
                    {["Coaching", "About", "Stories", "Contact"].map((item) => (
                        <Link
                            key={item}
                            href={`#${item.toLowerCase()}`}
                            className={clsx(
                                "font-medium transition-colors relative group",
                                isScrolled ? "text-primary/80 hover:text-secondary" : "text-white/90 hover:text-secondary"
                            )}
                        >
                            {item}
                            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-secondary transition-all duration-300 group-hover:w-full" />
                        </Link>
                    ))}
                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <Link
                            href="#book"
                            className="bg-accent text-white px-6 py-2.5 rounded-full font-bold shadow-lg shadow-accent/30 hover:shadow-accent/50 transition-all"
                        >
                            Book Session
                        </Link>
                    </motion.div>
                </div>

                {/* Mobile Menu Toggle */}
                <button
                    className={clsx(
                        "md:hidden transition-colors duration-300",
                        isScrolled ? "text-primary" : "text-white"
                    )}
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    className="md:hidden bg-primary/95 backdrop-blur-xl border-t border-white/10"
                >
                    <div className="flex flex-col p-6 gap-4">
                        {["Coaching", "About", "Stories", "Contact"].map((item) => (
                            <Link
                                key={item}
                                href={`#${item.toLowerCase()}`}
                                className="text-white text-lg font-medium"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                {item}
                            </Link>
                        ))}
                        <Link
                            href="#book"
                            className="bg-accent text-white text-center py-3 rounded-xl font-bold mt-2"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            Book Session
                        </Link>
                    </div>
                </motion.div>
            )}
        </motion.nav>
    );
}
