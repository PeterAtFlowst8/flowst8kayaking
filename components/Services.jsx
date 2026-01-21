"use client";

import { motion } from "framer-motion";
import { Check, ArrowRight } from "lucide-react";
import clsx from "clsx";
import Image from "next/image";

const tiers = [
    {
        name: "Discover Flow",
        level: "Beginner",
        price: "€80",
        features: ["Safety Basics", "Paddle Strokes 101", "Calm Water Practice", "Gear Included"],
        color: "bg-secondary",
        delay: 0.2
    },
    {
        name: "Rapid Progress",
        level: "Intermediate",
        price: "€120",
        features: ["Whitewater Class II-III", "Rolling Technique", "Edging & Bracing", "Video Analysis"],
        color: "bg-primary",
        featured: true,
        delay: 0.4
    },
    {
        name: "Master Class",
        level: "Advanced",
        price: "€150",
        features: ["Class IV Strategy", "Boofing & Drops", "Rescue Scenarios", "Flow State Psychology"],
        color: "bg-accent",
        delay: 0.6
    }
];

export default function Services() {
    return (
        <section id="services" className="py-24 bg-light relative overflow-hidden">
            {/* Background Decorative Blobs */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-secondary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

            <div className="container mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <span className="text-accent font-bold tracking-wider uppercase text-sm mb-2 block">
                        Coaching Programs
                    </span>
                    <h2 className="font-heading text-4xl md:text-5xl font-bold text-primary mb-4">
                        Choose Your Path
                    </h2>
                    <p className="text-gray-600 max-w-2xl mx-auto text-lg">
                        From your first paddle stroke to mastering the steepest drops, we have a program designed to help you find your flow.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {[
                        {
                            name: "Confidence",
                            level: "The Basics",
                            price: "€80",
                            features: ["Safety & Rescue Basics", "Solid Paddle Strokes", "Calm Water Confidence", "Gear Included"],
                            color: "bg-secondary",
                            cta: "Start Here",
                            delay: 0.2
                        },
                        {
                            name: "Control",
                            level: "Intermediate",
                            price: "€120",
                            features: ["Whitewater Class II-III", "Bombproof Roll", "Edging & Line Choice", "Video Analysis"],
                            color: "bg-primary",
                            featured: true,
                            cta: "Level Up",
                            delay: 0.4
                        },
                        {
                            name: "Mastery",
                            level: "Advanced",
                            price: "€150",
                            features: ["Class IV Strategy", "Boofing & Drops", "Dynamic Leadership", "Flow State Psychology"],
                            color: "bg-accent",
                            cta: "Go Pro",
                            delay: 0.6
                        }
                    ].map((tier) => (
                        <motion.div
                            key={tier.name}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: tier.delay, duration: 0.5 }}
                            whileHover={{ y: -10 }}
                            className={clsx(
                                "relative rounded-3xl p-8 flex flex-col h-full transition-all duration-300 group",
                                tier.featured
                                    ? "bg-white shadow-2xl scale-105 z-10 border-2 border-primary/10"
                                    : "bg-white/50 backdrop-blur-sm border border-white/50 shadow-xl hover:bg-white hover:shadow-2xl"
                            )}
                        >
                            {tier.featured && (
                                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-accent text-white px-4 py-1 rounded-full text-sm font-bold shadow-lg">
                                    Most Popular
                                </div>
                            )}

                            <div className="mb-6">
                                <h3 className="text-xl font-bold text-gray-900 mb-1">{tier.name}</h3>
                                <p className="text-sm font-medium text-gray-500 uppercase tracking-wide">{tier.level}</p>
                            </div>

                            <div className="mb-8">
                                <span className="text-4xl font-extrabold text-primary">{tier.price}</span>
                                <span className="text-gray-500">/session</span>
                            </div>

                            <ul className="mb-8 space-y-4 flex-1">
                                {tier.features.map((feature) => (
                                    <li key={feature} className="flex items-start gap-3 text-gray-600">
                                        <div className={clsx("mt-1 p-0.5 rounded-full text-white", tier.color)}>
                                            <Check size={12} strokeWidth={3} />
                                        </div>
                                        <span>{feature}</span>
                                    </li>
                                ))}
                            </ul>

                            <button className={clsx(
                                "w-full py-4 rounded-xl font-bold flex items-center justify-center gap-2 transition-all duration-300",
                                tier.featured
                                    ? "bg-primary text-white hover:bg-primary/90 shadow-lg shadow-primary/30"
                                    : "bg-gray-100 text-gray-900 hover:bg-gray-200"
                            )}>
                                {tier.cta}
                                <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
                            </button>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
