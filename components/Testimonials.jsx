"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const reviews = [
    {
        text: "I was terrified of rolling, but after one weekend with FlowSt8, I'm rolling in Class III without thinking!",
        name: "Sarah Jenkins",
        level: "Intermediate Paddler",
        image: null // Placeholder for avatar if needed
    },
    {
        text: "The mindfulness approach is a game changer. It's not just about kayaking; it's about life.",
        name: "Marc Davies",
        level: "Advanced Paddler",
        image: null
    },
    {
        text: "Fun, safe, and incredibly educational. The best instruction I've ever received.",
        name: "Elena Rodriguez",
        level: "Beginner",
        image: null
    },
    {
        text: "FlowSt8 helped me conquer my fear of drops. The psychological coaching is top tier.",
        name: "Tom H.",
        level: "Class IV Kayaker",
        image: null
    }
];

// Duplicate reviews to create seamless loop
const duplicatedReviews = [...reviews, ...reviews];

export default function Testimonials() {
    return (
        <section id="stories" className="py-24 bg-primary text-white overflow-hidden relative">
            <div className="absolute inset-0 bg-[url('/images/noise.png')] opacity-5 mix-blend-overlay pointer-events-none" />

            <div className="container mx-auto px-6 mb-16 text-center relative z-10">
                <h2 className="font-heading text-4xl md:text-5xl font-bold mb-4">
                    Stories from the River
                </h2>
                <p className="text-blue-200 text-lg max-w-2xl mx-auto">
                    Hear from paddlers who have found their flow.
                </p>
            </div>

            <div className="relative w-full overflow-hidden">
                {/* Gradients for smooth fade out at edges */}
                <div className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-primary to-transparent z-10 pointer-events-none" />
                <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-primary to-transparent z-10 pointer-events-none" />

                <motion.div
                    className="flex gap-8 w-max"
                    animate={{ x: "-50%" }}
                    transition={{
                        duration: 30,
                        repeat: Infinity,
                        ease: "linear",
                        repeatType: "loop"
                    }}
                >
                    {duplicatedReviews.map((review, index) => (
                        <div
                            key={index}
                            className="w-[350px] md:w-[450px] bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/10 relative group hover:bg-white/15 transition-colors"
                        >
                            <Quote className="absolute top-6 right-6 text-secondary/30 w-10 h-10" />

                            <p className="text-lg md:text-xl font-medium leading-relaxed mb-6 italic">
                                "{review.text}"
                            </p>

                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-secondary to-accent flex items-center justify-center font-bold text-xl">
                                    {review.name.charAt(0)}
                                </div>
                                <div>
                                    <h4 className="font-bold text-white">{review.name}</h4>
                                    <p className="text-sm text-blue-200 uppercase tracking-wide">{review.level}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
