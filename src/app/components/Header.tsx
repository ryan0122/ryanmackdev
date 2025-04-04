import { ThemeToggle } from "./ThemeToggle";

export default function Header() {
	return (
	  <header className="shadow-sm mb-8">
		<div className="max-w-4xl mx-auto p-6 flex justify-between items-center">
		  <div className="text-2xl font-bold text-primary">Ryan Mack</div>
		  <nav>
		  	<ThemeToggle />
		  </nav>
		</div>
	  </header>
	);
  }