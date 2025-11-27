"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Inter, Poppins } from "next/font/google";
import XenithNav from "@/components/XenithNav";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
});

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const CountdownPage = () => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    const targetDate = new Date("2025-12-03T00:00:00").getTime();

    const updateCountdown = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor(
          (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        setTimeLeft({ days, hours, minutes, seconds });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);

    return () => clearInterval(interval);
  }, []);

  const timeUnits = [
    { label: "Days", value: timeLeft.days },
    { label: "Hours", value: timeLeft.hours },
    { label: "Minutes", value: timeLeft.minutes },
    { label: "Seconds", value: timeLeft.seconds },
  ];

  return (
    <div
      className={`${inter.variable} ${poppins.variable} font-sans overflow-x-hidden`}
    >
      <XenithNav />
      <div className="w-full min-h-screen bg-gradient-to-br from-[#293673] via-[#060717] to-[#000000] relative overflow-hidden">
        {/* Animated Background Stars */}
        <div className="absolute inset-0">
          {mounted &&
            Array.from({ length: 200 }).map((_, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-full absolute"
                style={{
                  width: `${Math.random() * 3 + 0.5}px`,
                  height: `${Math.random() * 3 + 0.5}px`,
                  top: `${Math.random() * 100}%`,
                  left: `${Math.random() * 100}%`,
                }}
              />
            ))}
        </div>

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#ba9efe]/10 via-transparent to-[#293673]/20 pointer-events-none"></div>

        {/* Main Content */}
        <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 py-25">
          {/* Logo and Title */}
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-center gap-6 mb-12"
          >
            <div className="flex flex-col md:flex-row items-center gap-4">
              <motion.img
                src="/xenith/logo.png"
                alt="Xenith Logo"
                className="h-24 md:h-32 lg:h-40"
                animate={{
                  rotate: [0, 5, -5, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              <div className="flex flex-col gap-2 items-center md:items-start">
                <img
                  src="/xenith/xenith.png"
                  alt="Xenith"
                  className="h-8 md:h-10"
                />
                <h2 className="text-white text-sm md:text-base font-medium tracking-[0.15em] text-center md:text-left uppercase font-mono opacity-90">
                  Where Innovation Touches Infinity
                </h2>
              </div>
            </div>
          </motion.div>

          {/* Countdown Title */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#ba9efe] via-[#8b7dff] to-[#6366f1] mb-4">
              The Countdown Begins
            </h1>
            <p className="text-gray-300 text-lg md:text-xl font-light tracking-wide">
              December 3, 2025
            </p>
          </motion.div>

          {/* Countdown Timer */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 mb-16">
            {timeUnits.map((unit, index) => (
              <motion.div
                key={unit.label}
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5 + index * 0.1, duration: 0.5 }}
                className="relative group"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#ba9efe]/20 to-[#6366f1]/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
                <div className="relative bg-gradient-to-br from-[#1a1f3a] to-[#0a0d1f] border border-[#ba9efe]/30 rounded-2xl p-6 md:p-8 backdrop-blur-sm hover:border-[#ba9efe]/50 transition-all duration-300">
                  <motion.div
                    key={unit.value}
                    initial={{ scale: 1.2, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.3 }}
                    className="text-5xl md:text-6xl lg:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-[#ba9efe] to-[#6366f1] font-mono"
                  >
                    {String(unit.value).padStart(2, "0")}
                  </motion.div>
                  <div className="text-gray-400 text-sm md:text-base uppercase tracking-wider mt-2 font-medium">
                    {unit.label}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="text-center"
          >
            <motion.div
              animate={{
                boxShadow: [
                  "0 0 20px rgba(186, 158, 254, 0.3)",
                  "0 0 40px rgba(186, 158, 254, 0.5)",
                  "0 0 20px rgba(186, 158, 254, 0.3)",
                ],
              }}
              transition={{ duration: 2, repeat: Infinity }}
              className="inline-block rounded-full"
            >
              <a
                href="/xenith"
                className="inline-block px-8 py-4 bg-gradient-to-r from-[#ba9efe] to-[#6366f1] text-white font-semibold rounded-full hover:scale-105 transition-transform duration-300 shadow-lg"
              >
                Explore Xenith
              </a>
            </motion.div>
            <p className="text-gray-400 mt-6 text-sm md:text-base">
              Get ready for an unforgettable experience
            </p>
          </motion.div>

          {/* Decorative Elements */}
          <div className="absolute bottom-0 left-0 right-0 flex justify-center items-end pointer-events-none select-none opacity-20">
            <img
              src="/xenith/bg-side.png"
              alt=""
              className="h-16 md:h-24 transform scale-x-[-1]"
            />
            <img
              src="/xenith/bg-mid.png"
              alt=""
              className="h-20 md:h-32"
            />
            <img
              src="/xenith/bg-side.png"
              alt=""
              className="h-16 md:h-24"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CountdownPage;
