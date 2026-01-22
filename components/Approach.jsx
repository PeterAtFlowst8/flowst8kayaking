"use client";

import { motion } from "framer-motion";
import { CheckCircle2, Bookmark } from "lucide-react";
import clsx from "clsx";

const inclusions = [
    "Comprehensive safety briefing",
    "Video analysis (when conditions allow)",
    "Written progression notes",
    "Recommendations for next steps",
    "Follow-up support via email"
];

const stats = [
    { label: "Years Kayaking", value: "20+" },
    { label: "Students Coached", value: "200+" }
]

export default function Approach() {
    return (
        <section className="py-24 relative overflow-hidden bg-primary text-white">
            {/* Background Texture & Gradients */}
            <div className="absolute inset-0 bg-primary z-0" />
            <div className="absolute top-[-20%] left-[-10%] w-[600px] h-[600px] bg-secondary/10 rounded-full blur-[100px] opacity-60" />
            <div className="absolute bottom-[-20%] right-[-10%] w-[800px] h-[800px] bg-accent/10 rounded-full blur-[120px] opacity-40" />
            <div className="absolute inset-0 bg-[url('/images/noise.png')] opacity-5 mix-blend-overlay z-1" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-center">

                    {/* Left: Philosophy */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="lg:w-1/2"
                    >
                        <div className="flex items-center gap-3 mb-6">
                            <Bookmark className="text-accent" size={32} />
                            <h2 className="font-heading text-4xl md:text-5xl font-bold">
                                My Approach
                            </h2>
                        </div>

                        <div className="space-y-6 text-lg text-white/80 leading-relaxed">
                            <p>
                                As a <span className="text-white font-semibold">British Canoeing qualified coach</span>, I believe in patient, progressive instruction that builds confidence alongside skills. Every paddler learns differently, and I adapt my teaching style to help you achieve your goals safely and enjoyably.
                            </p>
                            <p>
                                Safety is always the top priority. We'll work within your comfort zone while gradually expanding it, ensuring you develop good habits and decision-making skills that will serve you well on any river.
                            </p>
                        </div>

                        <div className="grid grid-cols-2 gap-12 border-t border-white/10 pt-8 mt-12">
                            {stats.map((stat, index) => (
                                <div key={index}>
                                    <h4 className="text-4xl md:text-5xl font-bold text-white mb-2">{stat.value}</h4>
                                    <span className="text-white/60 text-sm uppercase tracking-wider font-medium">{stat.label}</span>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Right: What's Included */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="lg:w-1/2"
                    >
                        <div className="relative">
                            {/* Decorative Glow */}
                            <div className="absolute -inset-1 bg-gradient-to-r from-secondary to-accent opacity-30 blur-2xl rounded-[2rem]" />

                            <div className="relative bg-white/5 backdrop-blur-xl rounded-[2rem] p-8 md:p-12 border border-white/10 shadow-2xl">
                                <h3 className="font-heading text-3xl font-bold mb-8 text-white">What's Included</h3>
                                <ul className="space-y-5">
                                    {inclusions.map((item, index) => (
                                        <motion.li
                                            key={index}
                                            initial={{ opacity: 0, x: 20 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: 0.3 + (index * 0.1) }}
                                            className="flex items-start gap-4 group"
                                        >
                                            <div className="mt-1 p-0.5 rounded-full bg-secondary/20 text-secondary group-hover:bg-secondary group-hover:text-white transition-colors duration-300">
                                                <CheckCircle2 size={20} strokeWidth={2.5} />
                                            </div>
                                            <span className="text-lg text-gray-300 group-hover:text-white transition-colors duration-300">{item}</span>
                                        </motion.li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
