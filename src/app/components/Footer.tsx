export default function Footer() {
	return (
	  <footer className="mt-12 py-6 text-center text-slate-500 text-sm">
		© {new Date().getFullYear()} Ryan Mack | <a href="mailto:your.email@example.com" className="text-primary hover:underline">Contact Me</a>
	  </footer>
	);
  }