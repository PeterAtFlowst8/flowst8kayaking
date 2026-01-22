"use client";

import { motion } from "framer-motion";
import { MapPin, Calendar, Waves } from "lucide-react";
import clsx from "clsx";

const rivers = [
    {
        name: "Soca Valley",
        country: "Slovenia",
        season: "Apr-Oct",
        grade: "Grade II-III",
        color: "bg-emerald-100 text-emerald-800",
        iconColor: "text-emerald-500",
        delay: 0.1
    },
    {
        name: "Salza",
        country: "Austria",
        season: "Mar-Nov",
        grade: "Grade II-III+",
        color: "bg-cyan-100 text-cyan-800",
        iconColor: "text-cyan-500",
        delay: 0.2
    },
    {
        name: "Isar",
        country: "Germany",
        season: "Year-round",
        grade: "Grade II-II+",
        color: "bg-blue-100 text-blue-800",
        iconColor: "text-blue-500",
        delay: 0.3
    },
    {
        name: "Inn",
        country: "Austria",
        season: "Apr-Oct",
        grade: "Grade II+-III",
        color: "bg-indigo-100 text-indigo-800",
        iconColor: "text-indigo-500",
        delay: 0.4
    }
];

export default function Locations() {
    return (
        <section className="py-24 bg-white relative">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <span className="text-secondary font-bold tracking-wider uppercase text-sm mb-2 block">
                        Destinations
                    </span>
                    <h2 className="font-heading text-4xl md:text-5xl font-bold text-primary mb-4">
                        Beautiful Rivers
                    </h2>
                    <p className="text-gray-600 max-w-2xl mx-auto text-lg">
                        Coaching locations across South Germany, Austria & Slovenia
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 hover:cursor-default">
                    {rivers.map((river) => (
                        <motion.div
                            key={river.name}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            whileHover={{ y: -5 }}
                            transition={{ delay: river.delay, duration: 0.4 }}
                            className={clsx(
                                "p-6 rounded-2xl transition-all duration-300",
                                river.color
                            )}
                        >
                            <div className="flex items-start justify-between mb-4">
                                <div className="p-2 bg-white/50 rounded-lg">
                                    <MapPin className={river.iconColor} size={24} />
                                </div>
                                <span className="text-xs font-bold uppercase tracking-wider bg-white/40 px-2 py-1 rounded-full">
                                    {river.country}
                                </span>
                            </div>

                            <h3 className="font-heading text-2xl font-bold mb-6">{river.name}</h3>

                            <div className="space-y-3">
                                <div className="flex items-center gap-3 text-sm font-medium opacity-80">
                                    <Calendar size={18} />
                                    <span>{river.season}</span>
                                </div>
                                <div className="flex items-center gap-3 text-sm font-medium opacity-80">
                                    <Waves size={18} />
                                    <span>{river.grade}</span>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
