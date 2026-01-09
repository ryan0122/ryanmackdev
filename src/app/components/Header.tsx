import { ThemeToggle } from "./ThemeToggle";

export default function Header() {
	return (
	  <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-[#1C1C1C]/80 backdrop-blur-sm border-b border-gray-200 dark:border-gray-800">
		<div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
		  <a href="#hero-section" className="text-xl font-bold hover:opacity-70 transition-opacity focus-visible:outline-[#149eca]">
		  	RM
		  </a>
		  <nav className="flex items-center gap-8">
		  	<a href="#expertise" className="text-sm hover:opacity-70 transition-opacity focus-visible:outline-[#149eca]">ABOUT</a>
		  	<a href="#work" className="text-sm hover:opacity-70 transition-opacity focus-visible:outline-[#149eca]">WORK</a>
		  	<a href="#experience" className="text-sm hover:opacity-70 transition-opacity focus-visible:outline-[#149eca]">EXPERIENCE</a>
		  	<a href="#education" className="text-sm hover:opacity-70 transition-opacity focus-visible:outline-[#149eca]">EDUCATION</a>
		  	<a href="#contact" className="text-sm hover:opacity-70 transition-opacity focus-visible:outline-[#149eca]">CONTACT</a>
		  	<ThemeToggle />
		  </nav>
		</div>
	  </header>
	);
  }