"use client";

import { useState } from "react";
import { ThemeToggle } from "./ThemeToggle";

export default function Header() {
	const [menuOpen, setMenuOpen] = useState(false);
	return (
		<header className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-[#1C1C1C]/80 backdrop-blur-sm border-b border-gray-200 dark:border-gray-800">
			<div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
				<a href="#hero-section" className="text-xl font-bold hover:opacity-70 transition-opacity focus-visible:outline-[#149eca] text-[#FF4A1C]">
					RM
				</a>
				{/* Desktop Nav */}
				<nav className="hidden md:flex items-center gap-8">
					<a href="#expertise" className="text-sm hover:opacity-70 transition-opacity focus-visible:outline-[#149eca]">ABOUT</a>
					<a href="#work" className="text-sm hover:opacity-70 transition-opacity focus-visible:outline-[#149eca]">WORK</a>
					<a href="#experience" className="text-sm hover:opacity-70 transition-opacity focus-visible:outline-[#149eca]">EXPERIENCE</a>
					<a href="#education" className="text-sm hover:opacity-70 transition-opacity focus-visible:outline-[#149eca]">EDUCATION</a>
					<a href="#contact" className="text-sm hover:opacity-70 transition-opacity focus-visible:outline-[#149eca]">CONTACT</a>
					<ThemeToggle />
				</nav>
				{/* Hamburger Button */}
				<button
					className="md:hidden flex items-center justify-center w-10 h-10 rounded focus-visible:outline-[#149eca] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#149eca] focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-offset-[#1C1C1C]"
					aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
					aria-expanded={menuOpen}
					aria-controls="mobile-nav"
					onClick={() => setMenuOpen((open) => !open)}
				>
					<span className="sr-only">{menuOpen ? 'Close menu' : 'Open menu'}</span>
					<svg
						className="w-7 h-7 text-[#FF4A1C]"
						fill="none"
						stroke="currentColor"
						viewBox="0 0 24 24"
						xmlns="http://www.w3.org/2000/svg"
						aria-hidden="true"
					>
						{menuOpen ? (
							<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
						) : (
							<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 8h16M4 16h16" />
						)}
					</svg>
				</button>
			</div>
			{/* Mobile Nav Overlay */}
			{menuOpen && (
				<nav
					id="mobile-nav"
					className="md:hidden fixed left-0 right-0 top-0 bottom-0 z-40 bg-white/95 dark:bg-[#1C1C1C]/95 flex flex-col items-center pt-[72px] gap-8 text-xl font-semibold transition-all min-h-screen"
					role="dialog"
					aria-modal="true"
				>
					{/* Close Button */}
					<button
						className="absolute top-6 right-6 w-10 h-10 flex items-center justify-center rounded focus-visible:outline-[#149eca] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#149eca] focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-offset-[#1C1C1C]"
						aria-label="Close navigation menu"
						onClick={() => setMenuOpen(false)}
					>
						<svg className="w-7 h-7 text-[#FF4A1C]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
							<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
						</svg>
						<span className="sr-only">Close menu</span>
					</button>
					<a href="#expertise" className="hover:opacity-70 transition-opacity focus-visible:outline-[#149eca]" onClick={() => setMenuOpen(false)}>ABOUT</a>
					<a href="#work" className="hover:opacity-70 transition-opacity focus-visible:outline-[#149eca]" onClick={() => setMenuOpen(false)}>WORK</a>
					<a href="#experience" className="hover:opacity-70 transition-opacity focus-visible:outline-[#149eca]" onClick={() => setMenuOpen(false)}>EXPERIENCE</a>
					<a href="#education" className="hover:opacity-70 transition-opacity focus-visible:outline-[#149eca]" onClick={() => setMenuOpen(false)}>EDUCATION</a>
					<a href="#contact" className="hover:opacity-70 transition-opacity focus-visible:outline-[#149eca]" onClick={() => setMenuOpen(false)}>CONTACT</a>
					<ThemeToggle />
				</nav>
			)}
		</header>
	);
  }