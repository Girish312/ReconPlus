import { useState, useEffect } from "react";

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav
            className={`fixed w-full z-50 transition-all duration-200 ${scrolled
                ? "bg-[#0a0e1a]/95 backdrop-blur-md shadow-lg shadow-cyan-500/10"
                : "bg-transparent"
                }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-20">
                    {/* Left */}
                    <div className="flex items-center space-x-8">
                        <img
                            src="/images/logo.png"
                            alt="ReconnPlus Logo"
                            className="h-24 w-auto sm:h-32 lg:h-40"
                        />
                        <div className="hidden md:flex items-center space-x-8">
                            <a href="#home" className="font-semibold hover:text-cyan-400">Home</a>
                            <a href="#about" className="font-semibold hover:text-cyan-400">About Us</a>
                        </div>
                    </div>

                    {/* Right */}
                    <div className="hidden md:flex items-center space-x-4">
                        <a href="#signin" className="font-semibold hover:text-cyan-400">Sign In</a>
                        <button className="bg-gradient-to-r from-cyan-400 to-blue-500 px-8 py-2.5 rounded-full font-semibold text-gray-900">
                            Sign Up
                        </button>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        className="md:hidden text-cyan-400 focus:outline-none"
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            {mobileMenuOpen ? (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            ) : (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            )}
                        </svg>
                    </button>
                </div>

                {/* Mobile Menu Sidebar */}
                <div className={`fixed top-0 right-0 h-full w-64 bg-[#0a0e1a] border-l border-cyan-500/30 transform transition-transform duration-300 ease-in-out z-50 ${mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'} md:hidden`}>
                    <div className="flex flex-col h-full">
                        {/* Close button */}
                        <div className="flex justify-end p-4">
                            <button
                                onClick={() => setMobileMenuOpen(false)}
                                className="text-cyan-400 focus:outline-none"
                            >
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>

                        {/* Menu items */}
                        <nav className="flex flex-col space-y-6 px-8 py-4">
                            <a
                                href="#home"
                                onClick={() => setMobileMenuOpen(false)}
                                className="text-white hover:text-cyan-400 transition-colors duration-300 text-lg font-semibold"
                            >
                                Home
                            </a>
                            <a
                                href="#about"
                                onClick={() => setMobileMenuOpen(false)}
                                className="text-white hover:text-cyan-400 transition-colors duration-300 text-lg font-semibold"
                            >
                                About Us
                            </a>
                            <a
                                href="#signin"
                                onClick={() => setMobileMenuOpen(false)}
                                className="text-white hover:text-cyan-400 transition-colors duration-300 text-lg font-semibold"
                            >
                                Sign In
                            </a>
                            <button
                                onClick={() => setMobileMenuOpen(false)}
                                className="bg-gradient-to-r from-cyan-400 to-blue-500 text-gray-900 px-6 py-2.5 rounded-full font-semibold text-base transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/50 text-center"
                            >
                                Sign Up
                            </button>
                        </nav>
                    </div>
                </div>

                {/* Overlay when mobile menu is open */}
                {mobileMenuOpen && (
                    <div
                        onClick={() => setMobileMenuOpen(false)}
                        className="fixed inset-0 bg-black/50 z-40 md:hidden"
                    ></div>
                )}
            </div>
        </nav>
    );
}
