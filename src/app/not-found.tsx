import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center px-6">
      <div className="text-center max-w-4xl mx-auto">
        <h1 className="text-6xl md:text-8xl font-bold mb-4 tracking-tight">404</h1>
        <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-gray-900 dark:text-white">
          Page Not Found
        </h2>
        <p className="text-xl md:text-2xl leading-relaxed text-gray-700 dark:text-gray-300 mb-8">
          Sorry, the page you're looking for doesn't exist.
        </p>
        <Link 
          href="/"
          className="inline-block px-6 py-3 bg-[#FF4A1C] text-white font-semibold rounded-lg hover:bg-[#E03D14] transition-colors"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
}
