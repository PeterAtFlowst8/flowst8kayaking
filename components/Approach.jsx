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

export default function Approach() {
    return (
        <section className="py-24 bg-primary text-white relative overflow-hidden">
            {/* Background Texture */}
            <div className="absolute inset-0 bg-[url('/images/noise.png')] opacity-5 mix-blend-overlay" />
            <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-secondary/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />

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
                    </motion.div>

                    {/* Right: What's Included */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="lg:w-1/2"
                    >
                        <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 md:p-12 border border-white/10 shadow-2xl">
                            <h3 className="font-heading text-3xl font-bold mb-8">What's Included</h3>
                            <ul className="space-y-6">
                                {inclusions.map((item, index) => (
                                    <motion.li
                                        key={index}
                                        initial={{ opacity: 0, x: 20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: 0.3 + (index * 0.1) }}
                                        className="flex items-start gap-4"
                                    >
                                        <CheckCircle2 className="text-secondary shrink-0 mt-1" size={24} />
                                        <span className="text-lg text-white/90">{item}</span>
                                    </motion.li>
                                ))}
                            </ul>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
