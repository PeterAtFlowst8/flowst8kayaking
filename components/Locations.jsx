"use client";

import { motion } from "framer-motion";
import { MapPin, Calendar, Waves, ArrowUpRight } from "lucide-react";
import clsx from "clsx";
import Image from "next/image";

const rivers = [
    {
        name: "Soca Valley",
        country: "Slovenia",
        season: "Apr-Oct",
        grade: "Grade II-IV",
        image: "/images/soca.webp",
        description: "The emerald beauty. Crystal clear water and perfect teaching sections.",
        delay: 0.1
    },
    {
        name: "Salza",
        country: "Austria",
        season: "Mar-Nov",
        grade: "Grade II-III+",
        image: "/images/salza.jpg",
        description: "A long, wild classic. Alpine scenery and continuous whitewater.",
        delay: 0.2
    },
    {
        name: "Isar",
        country: "Germany",
        season: "Year-round",
        grade: "Grade II-II+",
        image: "/images/isar.jpg",
        description: "Bavarian wilderness. Ideal for honing fundamentals in a stunning setting.",
        delay: 0.3
    },
    {
        name: "Inn",
        country: "Austria",
        season: "Apr-Oct",
        grade: "Grade II+-III",
        image: "/images/inn.jpg",
        description: "Big volume power. Experience the rush of massive wave trains.",
        delay: 0.4
    }
];

export default function Locations() {
    return (
        <section className="py-32 bg-dark relative overflow-hidden">
            {/* Background Glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-primary/20 blur-[120px] rounded-full pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-20"
                >
                    <span className="text-secondary font-bold tracking-wider uppercase text-sm mb-3 block">
                        Destinations
                    </span>
                    <h2 className="font-heading text-5xl md:text-6xl font-bold text-white mb-6">
                        Beautiful <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-accent">Rivers</span>
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto text-xl font-light leading-relaxed">
                        We coach on the finest whitewater in Europe. From the emerald soca to the glacial Inn.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {rivers.map((river) => (
                        <motion.div
                            key={river.name}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: river.delay, duration: 0.5 }}
                            className="group relative h-[500px] rounded-3xl overflow-hidden cursor-pointer"
                        >
                            {/* Background Image */}
                            <Image
                                src={river.image}
                                alt={river.name}
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-110"
                            />

                            {/* Gradient Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-b from-black/0 via-black/20 to-black/90 transition-opacity duration-300 group-hover:via-black/40 group-hover:to-black" />

                            {/* Content */}
                            <div className="absolute inset-0 p-8 flex flex-col justify-end">

                                {/* Top Badge */}
                                <div className="absolute top-6 right-6 translate-y-[-10px] opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                                    <div className="bg-white/20 backdrop-blur-md p-3 rounded-full text-white">
                                        <ArrowUpRight size={24} />
                                    </div>
                                </div>

                                <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                                    <div className="flex items-center gap-2 mb-3">
                                        <MapPin size={16} className="text-secondary" />
                                        <span className="text-sm font-bold text-secondary uppercase tracking-wider">
                                            {river.country}
                                        </span>
                                    </div>

                                    <h3 className="font-heading text-3xl font-bold text-white mb-2 leading-none">
                                        {river.name}
                                    </h3>

                                    <p className="text-gray-300 text-sm mb-6 line-clamp-2 hover:line-clamp-none transition-all duration-300 opacity-80 group-hover:opacity-100">
                                        {river.description}
                                    </p>

                                    <div className="flex items-center justify-between border-t border-white/20 pt-4">
                                        <div className="flex items-center gap-2 text-white/90">
                                            <Calendar size={16} />
                                            <span className="text-sm font-medium">{river.season}</span>
                                        </div>
                                        <div className="flex items-center gap-2 text-white/90">
                                            <Waves size={16} />
                                            <span className="text-sm font-medium">{river.grade}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
