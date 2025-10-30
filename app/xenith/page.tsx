"use client";
import React from "react";
import XenithNav from "@/components/XenithNav";
import { motion, useScroll, useTransform } from "framer-motion";
import { AnimatePresence } from "framer-motion";
import {MoveDown} from "lucide-react";

const Page = () => {
    const { scrollYProgress } = useScroll();
    const translateY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
    const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

    return (
        <>
            <AnimatePresence>
                <XenithNav />

                {/* Hero Section */}
                <div
                    className="w-full h-screen bg-radial from-[#293673] to-[#060717] overflow-hidden relative"
                    id="main"
                    style={{ fontFamily: "'Stalinist One', sans-serif" }}
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
                        <div className="flex flex-col justify-center items-center gap-4 mb-20">
                            {/* <h2 className="font-semibold text-white text-xl">IIT Patna & STC Presents</h2> */}
                            <span className="pointer-events-none select-none flex justify-center items-center">
                                <img src="/xenith/logo.png" alt="" className="h-40 " />
                                <span className="flex flex-col gap-2 ">
                                    <img src="/xenith/xenith.png" alt="" className="h-8" />
                                    <h2 className="text-white text-xs font-semibold">Where Innovation Touches Infinity</h2>
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
                                className="h-40 transform scale-x-[-1] opacity-50"
                            />
                            <img
                                src="/xenith/bg-mid.png"
                                alt="structure mid"
                                className="h-50 opacity-50"
                            />
                            <img
                                src="/xenith/bg-side.png"
                                alt="structure right"
                                className="h-40 opacity-50"
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
                </div>
            </AnimatePresence>
        </>
    );
};

export default Page;
