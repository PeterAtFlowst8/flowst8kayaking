"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";

import { AuroraText } from "./AuroraText";

export default function Hero() {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"],
    });

    const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
    const yText = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

    return (
        <div
            ref={ref}
            className="relative h-screen w-full flex items-center justify-center overflow-hidden"
        >
            {/* Parallax Background */}
            <motion.div style={{ y: yBg }} className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-gradient-to-b from-primary/30 via-transparent to-primary/60 z-10" />
                <div className="absolute inset-0 bg-black/20 z-10" />
                <Image
                    src="/images/hero1.webp"
                    alt="Kayaker entering flow state"
                    fill
                    priority
                    className="object-cover"
                />
            </motion.div>

            {/* Content */}
            <motion.div
                style={{ y: yText }}
                className="relative z-20 text-center px-4 max-w-5xl mx-auto"
            >
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    <h1 className="font-heading font-extrabold text-6xl md:text-8xl text-white leading-[0.9] tracking-tighter mb-6 drop-shadow-2xl">
                        Stop Fighting <br /> the <AuroraText>River.</AuroraText>
                    </h1>
                </motion.div>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="text-lg md:text-2xl text-white/90 max-w-2xl mx-auto mb-10 font-light"
                >
                    British Canoeing Advanced Whitewater Coach & Leader.
                    <br className="hidden md:block" />
                    <span className="font-semibold text-white">20+ Years Experience.</span> Turn anxiety into precision in one session.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                >
                    <Link
                        href="#book"
                        className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white transition-all duration-300 bg-accent rounded-full hover:bg-[#ff8555] hover:scale-105 shadow-[0_0_40px_-10px_rgba(255,107,53,0.5)] hover:shadow-[0_0_60px_-15px_rgba(255,107,53,0.7)]"
                    >
                        Start Your Evolution
                        <svg
                            className="w-5 h-5 ml-2 -mr-1 transition-transform group-hover:translate-x-1"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M13 7l5 5m0 0l-5 5m5-5H6"
                            ></path>
                        </svg>
                    </Link>
                </motion.div>
            </motion.div>

            {/* Scroll indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 1 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 text-white/50 animate-bounce"
            >
                <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center p-2">
                    <div className="w-1 h-3 bg-white/50 rounded-full animate-scroll" />
                </div>
            </motion.div>
        </div>
    );
}
