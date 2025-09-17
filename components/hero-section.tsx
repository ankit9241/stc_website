"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, ArrowRight, Users, Award, TrendingUp } from "lucide-react"
import Link from "next/link"

const slides = [
	{
		image: "/07.jpg?height=600&width=1200",
		title: "IIT Patna Campus",
		description: "State-of-the-art facilities fostering innovation and excellence",
	},
	{
		image: "/07.jpg?height=600&width=1200",
		title: "IIT Patna Campus",
		description: "State-of-the-art facilities fostering innovation and excellence",
	},
]

export function HeroSection() {
	const [currentSlide, setCurrentSlide] = useState(0)
	const [isLoaded, setIsLoaded] = useState(false)

	useEffect(() => {
		setIsLoaded(true)
		const timer = setInterval(() => {
			setCurrentSlide((prev) => (prev + 1) % slides.length)
		}, 5000)
		return () => clearInterval(timer)
	}, [])

	const nextSlide = () => {
		setCurrentSlide((prev) => (prev + 1) % slides.length)
	}

	const prevSlide = () => {
		setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
	}

	return (
		<section className="relative min-h-screen flex items-center justify-center overflow-hidden px-2 sm:px-4">
			{/* Background Video/Image Slideshow */}
			<div className="absolute inset-0 z-10">
				{slides.map((slide, index) => (
					<div
						key={index}
						className={`absolute inset-0 transition-all duration-500 ${
							index === currentSlide ? "opacity-20" : "opacity-0"
						}`}
					>
						<div
							className="w-full h-full bg-cover bg-center"
							style={{ backgroundImage: `url(${slide.image})` }}
						/>
					</div>
				))}
			</div>

			{/* Navigation Arrows */}
			<button
				onClick={prevSlide}
				className="absolute left-2 sm:left-6 top-1/2 transform -translate-y-1/2 z-20 p-2 sm:p-3 rounded-3xl bg-[#453CD5]/20 backdrop-blur-sm hover:bg-[#453CD5]/30 transition-all duration-200 group"
			>
				<ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 text-[#453CD5] group-hover:text-blue-700" />
			</button>
			<button
				onClick={nextSlide}
				className="absolute right-2 sm:right-6 top-1/2 transform -translate-y-1/2 z-20 p-2 sm:p-3 rounded-3xl bg-[#453CD5]/20 backdrop-blur-sm hover:bg-[#453CD5]/30 transition-all duration-200 group"
			>
				<ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 text-[#453CD5] group-hover:text-blue-700" />
			</button>

			{/* Main Content */}
			<div
				className={`relative z-20 text-center w-full max-w-5xl mx-auto px-2 sm:px-4 transition-all duration-1000 ${
					isLoaded ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
				}`}
			>
				{/* Animated Logo/Badge */}
				<div className="mb-6 sm:mb-8 flex justify-center">
					<div className="relative">
						<div className="w-14 h-14 sm:w-20 sm:h-20 bg-gradient-to-br from-blue-400 to-[#453CD5] rounded-3xl flex items-center justify-center shadow-2xl animate-pulse">
							<span className="text-white font-bold text-xl sm:text-2xl">SS</span>
						</div>
						<div className="absolute -top-2 -right-2 w-4 h-4 sm:w-6 sm:h-6 bg-gradient-to-br from-orange-400 to-orange-500 rounded-3xl animate-bounce"></div>
					</div>
				</div>

				<h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold mb-3 sm:mb-4 bg-gradient-to-r from-gray-800 via-[#453CD5] to-gray-800 bg-clip-text text-transparent">
					Student  Technical Council 
				</h1>
				<h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-medium mb-3 sm:mb-4 text-[#453CD5]">IIT Patna Hybrid Programs</h2>
				<p className="text-lg sm:text-2xl md:text-3xl lg:text-4xl mb-6 sm:mb-8 font-semibold bg-gradient-to-r from-black via-[#453CD5] to-black bg-clip-text text-transparent">
					Empowering Students Through Innovation
				</p>
				<p className="text-base sm:text-lg md:text-xl mb-8 sm:mb-12 max-w-3xl mx-auto text-gray-600 leading-relaxed">
					A reimagined platform with three specialized wings -  <span className="bg-gradient-to-r from-[#453CD5] via-blue-700 to-[#453CD5] bg-clip-text text-transparent font-semibold text-lg sm:text-2xl">DISHA, ARTHNITI, and TATVA </span> -  fostering career
					development, entrepreneurship, and technological innovation at IIT Patna.
				</p>

				{/* CTA Buttons */}
				<div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mb-10 sm:mb-16">
					<button
						className="bg-[#453CD5] py-3 sm:py-4 rounded-lg text-white px-6 sm:px-10 flex items-center gap-2"
						onClick={() => {
							window.scrollBy({ top: window.innerHeight, left: 0, behavior: "smooth" })
						}}
					>
						Learn More
						<svg
							xmlns="http://www.w3.org/2000/svg"
							className="w-5 h-5 ml-2"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth={2}
								d="M19 9l-7 7-7-7"
							/>
						</svg>
					</button>
				</div>

				{/* Quick Info Cards */}
				<div className="grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-6 max-w-4xl mx-auto">
					{[
						{ label: "Active Wings", value: "3", icon: "" },
						{ label: "Sub-Clubs", value: "24+", icon: "" },
						{ label: "Launch Year", value: "2025", icon: "" },
					].map((stat, index) => (
						<div
							key={index}
							className={`relative rounded-3xl bg-white/50 p-3 sm:p-4 shadow-lg transform transition-all duration-500 hover:scale-105 ${
								isLoaded ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
							} group`}
							style={{ transitionDelay: `${index * 200}ms` }}
						>
							{/* Glowing background effect on hover */}
							<div
								className="pointer-events-none z-2 absolute inset-0 border-2 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0"
								style={{
									background:
										"radial-gradient(circle at 50% 50%, rgba(69,60,213,0.25) 0%, rgba(69,60,213,0.10) 60%, transparent 100%)",
									filter: "blur(30px)",
								}}
							/>
							<div className="relative z-10 bg-white/10 rounded-3xl backdrop-blur-sm">
								<div className="z-9 text-xl sm:text-2xl mb-2">{stat.icon}</div>
								<div className="z-9 text-xl sm:text-2xl md:text-3xl font-bold text-[#453CD5] mb-1">
									{stat.value}
								</div>
								<div className="z-9 text-xs sm:text-sm text-gray-600 font-semibold">
									{stat.label}
								</div>
							</div>
						</div>
					))}
				</div>
			</div>

			{/* Slide Indicators */}
			<div className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2 sm:space-x-3 z-20">
				{slides.map((_, index) => (
					<button
						key={index}
						onClick={() => setCurrentSlide(index)}
						className={`w-2 h-2 sm:w-3 sm:h-3 rounded-3xl transition-all duration-200 ${
							index === currentSlide ? "bg-[#453CD5] scale-125" : "bg-blue-300 hover:bg-[#453CD5]"
						}`}
					/>
				))}
			</div>

			{/* Scroll Indicator */}
			<div className="absolute bottom-2 sm:bottom-4 right-4 sm:right-10 transform -translate-x-1/2 z-20 animate-bounce">
				<div className="w-4 h-8 sm:w-6 sm:h-10 border-2 border-[#453CD5] rounded-full flex justify-center">
					<div className="w-1 h-2 sm:w-1 sm:h-3 bg-[#453CD5] rounded-full mt-1 sm:mt-2 animate-pulse"></div>
				</div>
			</div>
		</section>
	)
}
