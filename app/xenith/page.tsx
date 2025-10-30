"use client";
import React, { useState, useEffect } from "react";
import XenithNav from "@/components/XenithNav";
import { motion, useScroll, useTransform } from "framer-motion";
import { AnimatePresence } from "framer-motion";
import { Calendar } from "lucide-react";

interface Event {
    _id: string;
    title: string;
    content: string;
    imageUrl?: string;
    eventDate: string;
    club: string;
    isImportant: boolean;
}

const Page = () => {
    const { scrollYProgress } = useScroll();
    const translateY = useTransform(scrollYProgress, [0, 0.3], ["0%", "100%"]);
    const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

    const [events, setEvents] = useState<Event[]>([]);
    const [loadingEvents, setLoadingEvents] = useState(true);

    useEffect(() => {
        fetchEvents();
    }, []);

    const fetchEvents = async () => {
        try {
            const response = await fetch('/api/admin/events');
            if (response.ok) {
                const data = await response.json();
                const upcoming = data.filter((event: Event) => {
                    const eventDate = new Date(event.eventDate);
                    return eventDate > new Date();
                });
                upcoming.sort((a: Event, b: Event) => 
                    new Date(a.eventDate).getTime() - new Date(b.eventDate).getTime()
                );
                setEvents(upcoming);
            }
        } catch (error) {
            console.error('Error fetching events:', error);
        } finally {
            setLoadingEvents(false);
        }
    };

    const formatEventDate = (dateString: string) => {
        return new Date(dateString).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'short',
            day: 'numeric'
        });
    };

    return (
        <>
            <AnimatePresence>
                <XenithNav />

                <section style={{ fontFamily: "'Stalinist One', sans-serif" }} className="cursor-custom">
                    {/* Hero Section */}
                    <div
                        className="w-full h-screen bg-radial from-[#293673] to-[#060717] overflow-hidden relative"
                        id="main"
                    >
                        <div className="absolute inset-0 flex flex-wrap justify-center items-center">
                            {Array.from({ length: 200 }).map((_, index) => (
                                <div
                                    key={index}
                                    className="bg-white rounded-full"
                                    style={{
                                        width: `${Math.random() * 2 + 0.5}px`,
                                        height: `${Math.random() * 2 + 0.5}px`,
                                        position: "absolute",
                                        top: `${Math.random() * 100}%`,
                                        left: `${Math.random() * 100}%`,
                                        opacity: Math.random(),
                                    }}
                                ></div>
                            ))}

                            {/* hero section content */}
                            <div className="flex flex-col justify-center items-center gap-4 mb-10 md:mb-20 px-4">
                                <span className="pointer-events-none select-none flex flex-col md:flex-row justify-center items-center gap-2 md:gap-0">
                                    <img src="/xenith/logo.png" alt="" className="h-24 md:h-32 lg:h-40" />
                                    <span className="flex flex-col gap-1 md:gap-2 items-center md:items-start">
                                        <img src="/xenith/xenith.png" alt="" className="h-6 md:h-8" />
                                        <h2 className="text-white text-xs md:text-sm font-semibold text-center md:text-left">Where Innovation Touches Infinity</h2>
                                    </span>
                                </span>
                            </div>


                            {/* Structures image on bottom */}
                            <motion.div
                                style={{ y: translateY, opacity }}
                                className="absolute bottom-0 w-full flex justify-center items-end pointer-events-none select-none"
                            >
                                <img
                                    src="/xenith/bg-side.png"
                                    alt="structure left"
                                    className="h-20 md:h-32 lg:h-40 transform scale-x-[-1] opacity-50"
                                />
                                <img
                                    src="/xenith/bg-mid.png"
                                    alt="structure mid"
                                    className="h-24 md:h-40 lg:h-50 opacity-50"
                                />
                                <img
                                    src="/xenith/bg-side.png"
                                    alt="structure right"
                                    className="h-20 md:h-32 lg:h-40 opacity-50"
                                />
                            </motion.div>
                        </div>
                    </div>

                    {/* About Section */}
                    <div
                        className="w-full h-screen bg-gradient-to-b from-[#0C0F29] to-[#000000] overflow-hidden relative"
                        id="about"
                    >
                        <div className="absolute inset-0 flex flex-wrap justify-center items-center">
                            {Array.from({ length: 200 }).map((_, index) => (
                                <div
                                    key={index}
                                    className="bg-white rounded-full"
                                    style={{
                                        width: `${Math.random() * 2 + 0.5}px`,
                                        height: `${Math.random() * 2 + 0.5}px`,
                                        position: "absolute",
                                        top: `${Math.random() * 100}%`,
                                        left: `${Math.random() * 100}%`,
                                        opacity: Math.random(),
                                    }}
                                ></div>
                            ))}
                        </div>

                        {/* about zenith, kya hai zenith */}
                        <div className="absolute inset-0 flex flex-col justify-center items-center px-4 md:px-6 lg:px-10">
                            <div className="border-1 flex flex-col lg:flex-row justify-between items-center border-dashed border-gray-500 max-w-6xl">
                                <span className="border-b-1 lg:border-b-0 lg:border-r-1 border-dashed border-gray-500">
                                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#ba9efe] p-3 md:p-4 text-center lg:text-left">About Xenith 2025</h2>
                                    <p className="text-white text-xs md:text-sm max-w-2xl border-t-1 border-dashed border-gray-500 p-3 md:p-4 leading-relaxed text-justify">
                                        Xenith is the definitive convergence of human potential and technological frontier. The name itself signifies the Extreme Peak of innovation—the moment where imagination becomes reality and engineering brilliance is unbound.
                                        This year, the festival is a celebration of creators who defy convention and ideas that transcend human limits. Xenith envisions a revolutionary future shaped by Artificial Intelligence, Quantum Frontiers, and Human-Machine Symbiosis.
                                        We are exploring a world where innovation isn't merely discovered; it is actively designed. From intelligent systems that learn and adapt, to immersive realities that blur the lines of perception, Xenith stands as the testament to humanity's power to push toward its next great evolution.
                                        Join us as we ascend beyond the known limits—to the very Xenith of innovation.
                                    </p>
                                </span>
                                <img src="/xenith/logo.png" alt="" className="w-32 h-32 md:w-48 md:h-48 lg:w-60 lg:h-60 m-4 md:m-6 lg:m-10"/>
                            </div>
                        </div>
                    </div>

                    {/* Events section */}
                    <div className="min-h-screen w-full bg-black relative overflow-hidden py-20" id="events">
                        <div className="absolute inset-0">
                            {Array.from({ length: 200 }).map((_, index) => (
                                <div
                                    key={index}
                                    className="bg-white rounded-full"
                                    style={{
                                        width: `${Math.random() * 2 + 0.5}px`,
                                        height: `${Math.random() * 2 + 0.5}px`,
                                        position: "absolute",
                                        top: `${Math.random() * 100}%`,
                                        left: `${Math.random() * 100}%`,
                                        opacity: Math.random(),
                                    }}
                                ></div>
                            ))}
                        </div>

                        <div className="relative z-10 container mx-auto px-4 md:px-6 pt-4">
                            <div className="text-center mb-12 md:mb-16">
                                <motion.h2
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6 }}
                                    className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#ba9efe] mb-3 md:mb-4"
                                >
                                    Featured Events
                                </motion.h2>
                                <motion.p
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6, delay: 0.2 }}
                                    className="text-gray-400 text-base md:text-lg max-w-2xl mx-auto px-4"
                                >
                                    Explore the cutting-edge competitions and workshops at Xenith 2025
                                </motion.p>
                            </div>

                            {/* Events Grid */}
                            {loadingEvents ? (
                                <div className="text-center text-white py-20">
                                    <div className="inline-block animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#ba9efe]"></div>
                                    <p className="mt-4 text-gray-400">Loading events...</p>
                                </div>
                            ) : events.length === 0 ? (
                                <div className="text-center text-gray-400 py-20">
                                    <p className="text-xl">No upcoming events at the moment</p>
                                    <p className="mt-2">Stay tuned for exciting announcements!</p>
                                </div>
                            ) : (
                                <div className="grid grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                                    {events.map((event, index) => (
                                        <motion.div
                                            key={index}
                                            initial={{ opacity: 0, y: 30 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            transition={{ duration: 0.5, delay: index * 0.1 }}
                                            className="group relative"
                                        >
                                            <div className="relative h-[380px] md:h-[400px] bg-gradient-to-br from-[#1a1a2e] to-[#0f0f1e] rounded-lg overflow-hidden border border-[#ba9efe]/20 transition-all duration-300 hover:border-[#ba9efe] hover:shadow-2xl hover:shadow-[#ba9efe]/20">
                                                <div className="relative h-48 overflow-hidden">
                                                    {event.imageUrl ? (
                                                        <img
                                                            src={event.imageUrl}
                                                            alt={event.title}
                                                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                                        />
                                                    ) : (
                                                        <div className="w-full h-full bg-gradient-to-br from-[#ba9efe]/30 to-[#293673]/30 flex items-center justify-center">
                                                            <Calendar className="w-16 h-16 text-[#ba9efe]/50" />
                                                        </div>
                                                    )}
                                                    <div className="absolute inset-0 bg-gradient-to-t from-[#0f0f1e] via-transparent to-transparent"></div>
                                                    
                                                    {/* Important Badge as featured*/}
                                                    {event.isImportant && (
                                                        <div className="absolute top-3 right-3 bg-red-500 text-white px-3 py-1 rounded-full text-xs font-semibold animate-pulse">
                                                            Featured
                                                        </div>
                                                    )}
                                                </div>

                                                <div className="p-4 md:p-6 relative">
                                                    <div className="inline-block bg-[#ba9efe]/10 text-[#ba9efe] px-2 md:px-3 py-1 rounded-full text-xs font-semibold mb-2 md:mb-3 border border-[#ba9efe]/30">
                                                        {event.club}
                                                    </div>
                                                    <h3 className="text-lg md:text-xl font-bold text-white mb-2 line-clamp-2 group-hover:text-[#ba9efe] transition-colors duration-300">
                                                        {event.title}
                                                    </h3>
                                                    <div className="flex items-center text-gray-400 text-xs md:text-sm mb-2 md:mb-3">
                                                        <Calendar className="w-3 md:w-4 h-3 md:h-4 mr-2" />
                                                        {formatEventDate(event.eventDate)}
                                                    </div>

                                                    {/* Preview */}
                                                    <p className="text-gray-400 text-xs md:text-sm line-clamp-2 group-hover:opacity-0 transition-opacity duration-300">
                                                        {event.content.substring(0, 80)}...
                                                    </p>
                                                </div>

                                                <div className="absolute inset-0 bg-gradient-to-br from-[#ba9efe]/70 to-[#293673]/70 backdrop-blur-sm p-4 md:p-6 flex flex-col justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0">
                                                    <h3 className="text-xl md:text-2xl font-bold text-white mb-3 md:mb-4">
                                                        {event.title}
                                                    </h3>
                                                    
                                                    <div className="flex items-center text-white/90 text-xs md:text-sm mb-3 md:mb-4">
                                                        <Calendar className="w-3 md:w-4 h-3 md:h-4 mr-2" />
                                                        {formatEventDate(event.eventDate)}
                                                    </div>

                                                    <div className="overflow-y-auto max-h-[200px] md:max-h-[250px] scrollbar-thin scrollbar-thumb-white/30 scrollbar-track-transparent">
                                                        <p className="text-white/90 text-xs md:text-sm leading-relaxed">
                                                            {event.content}
                                                        </p>
                                                    </div>
                                                    <div className="mt-3 md:mt-4 pt-3 md:pt-4 border-t border-white/20 text-white/90 text-xs md:text-sm flex items-center">
                                                        At IITP Campus
                                                    </div>
                                                </div>
                                            </div>
                                        </motion.div>
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Sponsors Section */}
                    <div className="min-h-screen w-full bg-gradient-to-b from-[#000000] to-[#0C0F29] relative overflow-hidden py-20" id="sponsors">
                        <div className="absolute inset-0">
                            {Array.from({ length: 200 }).map((_, index) => (
                                <div
                                    key={index}
                                    className="bg-white rounded-full"
                                    style={{
                                        width: `${Math.random() * 2 + 0.5}px`,
                                        height: `${Math.random() * 2 + 0.5}px`,
                                        position: "absolute",
                                        top: `${Math.random() * 100}%`,
                                        left: `${Math.random() * 100}%`,
                                        opacity: Math.random(),
                                    }}
                                ></div>
                            ))}
                        </div>

                        <div className="relative z-10 container mx-auto px-4 md:px-6">
                            <div className="text-center mb-12 md:mb-16 pt-4">
                                <motion.h2
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6 }}
                                    className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#ba9efe] mb-3 md:mb-4"
                                >
                                    Our Sponsors
                                </motion.h2>
                                <motion.p
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6, delay: 0.2 }}
                                    className="text-gray-400 text-base md:text-lg max-w-2xl mx-auto px-4"
                                >
                                    Powered by industry leaders who believe in innovation
                                </motion.p>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
                                {/* TATA */}
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    transition={{ duration: 0.5, delay: 0.1 }}
                                    className="group relative"
                                >
                                    <div className="relative h-[250px] md:h-[280px] bg-gradient-to-br from-[#1a1a2e]/80 to-[#0f0f1e]/80 backdrop-blur-sm rounded-xl overflow-hidden border-2 border-[#ba9efe]/30 transition-all duration-300 hover:border-[#ba9efe] hover:shadow-2xl hover:shadow-[#ba9efe]/30 hover:scale-105">
                                        <div className="absolute inset-0 bg-gradient-to-br from-[#ba9efe]/0 via-[#ba9efe]/0 to-[#ba9efe]/0 group-hover:from-[#ba9efe]/10 group-hover:via-[#ba9efe]/5 group-hover:to-transparent transition-all duration-500"></div>
                                        <div className="relative h-full flex flex-col items-center justify-center p-6 md:p-8">
                                            <div className="w-24 h-24 md:w-32 md:h-32 bg-white/10 rounded-lg flex items-center justify-center mb-3 md:mb-4 backdrop-blur-sm border border-white/20">
                                                <span className="text-4xl md:text-6xl font-bold text-white">TATA</span>
                                            </div>
                                            <h3 className="text-lg md:text-xl font-bold text-white mb-1 md:mb-2">TATA Group</h3>
                                            <p className="text-gray-400 text-xs md:text-sm text-center">Title Sponsor</p>
                                            <div className="mt-3 md:mt-4 px-3 md:px-4 py-1 bg-[#ba9efe]/20 rounded-full border border-[#ba9efe]/40">
                                                <span className="text-[#ba9efe] text-xs font-semibold">Platinum Partner</span>
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>

                                {/* Infosys */}
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    transition={{ duration: 0.5, delay: 0.2 }}
                                    className="group relative"
                                >
                                    <div className="relative h-[250px] md:h-[280px] bg-gradient-to-br from-[#1a1a2e]/80 to-[#0f0f1e]/80 backdrop-blur-sm rounded-xl overflow-hidden border-2 border-[#ba9efe]/30 transition-all duration-300 hover:border-[#ba9efe] hover:shadow-2xl hover:shadow-[#ba9efe]/30 hover:scale-105">
                                        <div className="absolute inset-0 bg-gradient-to-br from-[#ba9efe]/0 via-[#ba9efe]/0 to-[#ba9efe]/0 group-hover:from-[#ba9efe]/10 group-hover:via-[#ba9efe]/5 group-hover:to-transparent transition-all duration-500"></div>
                                        
                                        <div className="relative h-full flex flex-col items-center justify-center p-6 md:p-8">
                                            <div className="w-24 h-24 md:w-32 md:h-32 bg-white/10 rounded-lg flex items-center justify-center mb-3 md:mb-4 backdrop-blur-sm border border-white/20">
                                                <span className="text-3xl md:text-4xl font-bold text-blue-400">Infosys</span>
                                            </div>
                                            <h3 className="text-lg md:text-xl font-bold text-white mb-1 md:mb-2">Infosys</h3>
                                            <p className="text-gray-400 text-xs md:text-sm text-center">Innovation Partner</p>
                                            <div className="mt-3 md:mt-4 px-3 md:px-4 py-1 bg-blue-500/20 rounded-full border border-blue-400/40">
                                                <span className="text-blue-400 text-xs font-semibold">Gold Partner</span>
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>

                                {/* Amazon */}
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    transition={{ duration: 0.5, delay: 0.3 }}
                                    className="group relative"
                                >
                                    <div className="relative h-[250px] md:h-[280px] bg-gradient-to-br from-[#1a1a2e]/80 to-[#0f0f1e]/80 backdrop-blur-sm rounded-xl overflow-hidden border-2 border-[#ba9efe]/30 transition-all duration-300 hover:border-[#ba9efe] hover:shadow-2xl hover:shadow-[#ba9efe]/30 hover:scale-105">
                                        <div className="absolute inset-0 bg-gradient-to-br from-[#ba9efe]/0 via-[#ba9efe]/0 to-[#ba9efe]/0 group-hover:from-[#ba9efe]/10 group-hover:via-[#ba9efe]/5 group-hover:to-transparent transition-all duration-500"></div>
                                        
                                        <div className="relative h-full flex flex-col items-center justify-center p-6 md:p-8">
                                            <div className="w-24 h-24 md:w-32 md:h-32 bg-white/10 rounded-lg flex items-center justify-center mb-3 md:mb-4 backdrop-blur-sm border border-white/20">
                                                <span className="text-4xl md:text-5xl font-bold text-orange-400">amazon</span>
                                            </div>
                                            <h3 className="text-lg md:text-xl font-bold text-white mb-1 md:mb-2">Amazon</h3>
                                            <p className="text-gray-400 text-xs md:text-sm text-center">Cloud Partner</p>
                                            <div className="mt-3 md:mt-4 px-3 md:px-4 py-1 bg-orange-500/20 rounded-full border border-orange-400/40">
                                                <span className="text-orange-400 text-xs font-semibold">Silver Partner</span>
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>

                                {/* Microsoft */}
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    transition={{ duration: 0.5, delay: 0.4 }}
                                    className="group relative"
                                >
                                    <div className="relative h-[250px] md:h-[280px] bg-gradient-to-br from-[#1a1a2e]/80 to-[#0f0f1e]/80 backdrop-blur-sm rounded-xl overflow-hidden border-2 border-[#ba9efe]/30 transition-all duration-300 hover:border-[#ba9efe] hover:shadow-2xl hover:shadow-[#ba9efe]/30 hover:scale-105">
                                        <div className="absolute inset-0 bg-gradient-to-br from-[#ba9efe]/0 via-[#ba9efe]/0 to-[#ba9efe]/0 group-hover:from-[#ba9efe]/10 group-hover:via-[#ba9efe]/5 group-hover:to-transparent transition-all duration-500"></div>
                                        
                                        <div className="relative h-full flex flex-col items-center justify-center p-6 md:p-8">
                                            <div className="w-24 h-24 md:w-32 md:h-32 bg-white/10 rounded-lg flex items-center justify-center mb-3 md:mb-4 backdrop-blur-sm border border-white/20">
                                                <span className="text-3xl md:text-4xl font-bold text-red-400">Microsoft</span>
                                            </div>
                                            <h3 className="text-lg md:text-xl font-bold text-white mb-1 md:mb-2">Microsoft</h3>
                                            <p className="text-gray-400 text-xs md:text-sm text-center">Technology Partner</p>
                                            <div className="mt-3 md:mt-4 px-3 md:px-4 py-1 bg-cyan-500/20 rounded-full border border-cyan-400/40">
                                                <span className="text-cyan-400 text-xs font-semibold">Gold Partner</span>
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>

                                {/* Your Sponsor */}
                                <motion.a
                                    href="#contact"
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    transition={{ duration: 0.5, delay: 0.5 }}
                                    className="group relative md:col-span-2 lg:col-span-1 cursor-pointer"
                                >
                                    <div className="relative h-[250px] md:h-[280px] bg-gradient-to-br from-[#ba9efe]/20 to-[#293673]/20 backdrop-blur-sm rounded-xl overflow-hidden border-2 border-[#ba9efe] transition-all duration-300 hover:shadow-2xl hover:shadow-[#ba9efe]/50 hover:scale-105 animate-pulse-glow">
                                        <div className="absolute inset-0 bg-gradient-to-br from-[#ba9efe]/30 via-[#293673]/30 to-[#ba9efe]/30 group-hover:from-[#ba9efe]/50 group-hover:via-[#293673]/50 group-hover:to-[#ba9efe]/50 transition-all duration-500"></div>
                                        
                                        <div className="relative h-full flex flex-col items-center justify-center p-6 md:p-8">
                                            <h3 className="text-xl md:text-2xl font-bold text-center text-white mb-2 group-hover:text-[#ba9efe] transition-colors">Your Brand Here</h3>
                                            <p className="text-gray-300 text-xs md:text-sm text-center mb-3 md:mb-4 max-w-[220px] md:max-w-[250px]">
                                                Be part of the xenith. Add yourself as a sponsor and empower the next generation of tech leaders.
                                            </p>
                                            <div className="flex items-center gap-2 text-[#ba9efe] font-semibold text-sm md:text-base transition-all">
                                                <span>Become a Sponsor</span>
                                                <svg className="w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                                </svg>
                                            </div>
                                        </div>

                                        <div className="absolute top-2 left-2 w-3 h-3 md:w-4 md:h-4 border-t-2 border-l-2 border-[#ba9efe]"></div>
                                        <div className="absolute top-2 right-2 w-3 h-3 md:w-4 md:h-4 border-t-2 border-r-2 border-[#ba9efe]"></div>
                                        <div className="absolute bottom-2 left-2 w-3 h-3 md:w-4 md:h-4 border-b-2 border-l-2 border-[#ba9efe]"></div>
                                        <div className="absolute bottom-2 right-2 w-3 h-3 md:w-4 md:h-4 border-b-2 border-r-2 border-[#ba9efe]"></div>
                                    </div>
                                </motion.a>
                            </div>

                            <motion.div
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                transition={{ duration: 0.6, delay: 0.6 }}
                                className="text-center mt-12 md:mt-16"
                            >
                                <p className="text-gray-400 text-base md:text-lg mb-4 px-4">Join us in shaping the future of technology</p>
                                <a 
                                    href="#contact"
                                    className="inline-block bg-gradient-to-r from-[#ba9efe] to-[#293673] text-white font-semibold py-2 md:py-3 px-6 md:px-8 rounded-full hover:shadow-lg hover:shadow-[#ba9efe]/50 transition-all duration-300 transform hover:scale-105 text-sm md:text-base"
                                >
                                    Contact Us for Sponsorship
                                </a>
                            </motion.div>
                        </div>
                    </div>

                    {/* Contact Section */}
                    <div className="min-h-screen w-full bg-gradient-to-b from-[#0C0F29] to-[#000000] relative overflow-hidden py-20" id="contact">
                        <div className="absolute inset-0">
                            {Array.from({ length: 200 }).map((_, index) => (
                                <div
                                    key={index}
                                    className="bg-white rounded-full"
                                    style={{
                                        width: `${Math.random() * 2 + 0.5}px`,
                                        height: `${Math.random() * 2 + 0.5}px`,
                                        position: "absolute",
                                        top: `${Math.random() * 100}%`,
                                        left: `${Math.random() * 100}%`,
                                        opacity: Math.random(),
                                    }}
                                ></div>
                            ))}
                        </div>

                        <div className="relative z-10 container mx-auto px-4 md:px-6">
                            <div className="text-center mb-12 md:mb-16 pt-4">
                                <motion.h2
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6 }}
                                    className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#ba9efe] mb-3 md:mb-4"
                                >
                                    Get In Touch
                                </motion.h2>
                                <motion.p
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6, delay: 0.2 }}
                                    className="text-gray-400 text-base md:text-lg max-w-2xl mx-auto px-4"
                                >
                                    Have questions about sponsorship or participation? We'd love to hear from you!
                                </motion.p>
                            </div>

                            <div className="max-w-4xl mx-auto">
                                <motion.div
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6 }}
                                    className="bg-gradient-to-br from-[#1a1a2e]/80 to-[#0f0f1e]/80 backdrop-blur-sm rounded-2xl border-2 border-[#ba9efe]/30 p-6 md:p-8 lg:p-12"
                                >
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                                        <div>
                                            <h3 className="text-xl md:text-2xl font-bold text-white mb-4 md:mb-6">Contact Information</h3>
                                            <div className="space-y-3 md:space-y-4">
                                                <div className="flex items-start gap-3 md:gap-4">
                                                    <div className="w-10 h-10 md:w-12 md:h-12 bg-[#ba9efe]/20 rounded-lg flex items-center justify-center flex-shrink-0">
                                                        <svg className="w-5 h-5 md:w-6 md:h-6 text-[#ba9efe]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                                        </svg>
                                                    </div>
                                                    <div>
                                                        <p className="text-gray-400 text-xs md:text-sm">Email</p>
                                                        <p className="text-white font-semibold text-sm md:text-base break-all">stc_iitp@iitp.ac.in</p>
                                                    </div>
                                                </div>
                                                <div className="flex items-start gap-3 md:gap-4">
                                                    <div className="w-10 h-10 md:w-12 md:h-12 bg-[#ba9efe]/20 rounded-lg flex items-center justify-center flex-shrink-0">
                                                        <svg className="w-5 h-5 md:w-6 md:h-6 text-[#ba9efe]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                                        </svg>
                                                    </div>
                                                    <div>
                                                        <p className="text-gray-400 text-xs md:text-sm">Phone</p>
                                                        <p className="text-white font-semibold text-sm md:text-base">+91 1234567890</p>
                                                    </div>
                                                </div>
                                                <div className="flex items-start gap-3 md:gap-4">
                                                    <div className="w-10 h-10 md:w-12 md:h-12 bg-[#ba9efe]/20 rounded-lg flex items-center justify-center flex-shrink-0">
                                                        <svg className="w-5 h-5 md:w-6 md:h-6 text-[#ba9efe]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                                        </svg>
                                                    </div>
                                                    <div>
                                                        <p className="text-gray-400 text-xs md:text-sm">Location</p>
                                                        <p className="text-white font-semibold text-sm md:text-base">IIT Patna, Bihar</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div>
                                            <h3 className="text-xl md:text-2xl font-bold text-white mb-4 md:mb-6">Quick Message</h3>
                                            <p className="text-gray-400 text-sm md:text-base mb-4 md:mb-6">
                                                For sponsorship, events or participation inquiries, please reach out via email or phone. We'll get back to you ASAP.
                                            </p>
                                            <a
                                                href="mailto:stc_iitp@iitp.ac.in"
                                                className="inline-flex items-center gap-2 bg-gradient-to-r from-[#ba9efe] to-[#293673] text-white font-semibold py-2 md:py-3 px-4 md:px-6 rounded-lg hover:shadow-lg hover:shadow-[#ba9efe]/50 transition-all duration-300 transform hover:scale-105 text-sm md:text-base"
                                            >
                                                <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                                </svg>
                                                Send Email
                                            </a>
                                        </div>
                                    </div>
                                </motion.div>
                            </div>
                        </div>
                    </div>
                </section>
            </AnimatePresence>
        </>
    );
};

export default Page;
