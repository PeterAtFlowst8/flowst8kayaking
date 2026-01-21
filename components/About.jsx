"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Droplets, Brain } from "lucide-react";

export default function About() {
    return (
        <section id="about" className="py-24 bg-white relative">
            <div className="container mx-auto px-6">
                <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">

                    {/* Image Side - Magazine Style */}
                    <div className="lg:w-1/2 relative">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="relative z-10 rounded-2xl overflow-hidden shadow-2xl"
                        >
                            <Image
                                src="/images/DSC00663.webp"
                                alt="Coach navigating rapids"
                                width={600}
                                height={800}
                                className="w-full h-auto object-cover"
                            />
                        </motion.div>

                        {/* Profile Pic Overlay */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.5, duration: 0.6 }}
                            className="absolute -bottom-10 -right-5 z-20 w-32 h-32 md:w-40 md:h-40 rounded-full border-4 border-white shadow-xl overflow-hidden"
                        >
                            <Image
                                src="/images/ProfilePic.webp"
                                alt="Head coach profile"
                                fill
                                className="object-cover rotate-90" // Simple rotation class
                            />
                        </motion.div>

                        {/* Decorative Elements */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.4, duration: 0.6 }}
                            className="absolute -bottom-10 -right-10 w-48 h-48 bg-accent rounded-full opacity-10 mix-blend-multiply z-0"
                        />
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2, duration: 0.6 }}
                            className="absolute -top-10 -left-10 w-64 h-64 bg-secondary/20 rounded-full blur-3xl z-0"
                        />
                    </div>

                    {/* Content Side */}
                    <div className="lg:w-1/2 mt-12 lg:mt-0">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <h2 className="font-heading text-4xl md:text-5xl font-bold text-primary mb-6 leading-tight">
                                Why <span className="text-secondary">FlowSt8?</span>
                            </h2>

                            <div className="mb-8 space-y-4">
                                <p className="text-lg text-gray-600 leading-relaxed">
                                    I am a <span className="font-bold text-primary">British Canoeing certified Advanced Whitewater Coach & Leader</span> with over <span className="font-bold text-primary">20 years</span> of experience on the river and 4 years of professional coaching.
                                </p>
                                <p className="text-lg text-gray-600 leading-relaxed">
                                    Most coaching focuses only on the blade. I focus on the pilot. By combining elite technical instruction with flow state psychology, I help you build the mental resilience to match your physical skills.
                                </p>
                            </div>

                            <div className="grid sm:grid-cols-2 gap-8">
                                <motion.div
                                    whileHover={{ y: -5 }}
                                    className="p-6 bg-light rounded-2xl border border-blue-50"
                                >
                                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary mb-4">
                                        <Droplets size={24} />
                                    </div>
                                    <h4 className="font-bold text-xl text-primary mb-2">Technical Mastery</h4>
                                    <p className="text-sm text-gray-600">
                                        Advanced British Canoeing standards to refine your boof, edging, and line choice.
                                    </p>
                                </motion.div>

                                <motion.div
                                    whileHover={{ y: -5 }}
                                    className="p-6 bg-light rounded-2xl border border-blue-50"
                                >
                                    <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center text-accent mb-4">
                                        <Brain size={24} />
                                    </div>
                                    <h4 className="font-bold text-xl text-primary mb-2">Flow State Mindset</h4>
                                    <p className="text-sm text-gray-600">
                                        Proven psychological tools to silence fear and access peak performance on demand.
                                    </p>
                                </motion.div>
                            </div>
                        </motion.div>
                    </div>

                </div>
            </div>
        </section>
    );
}
