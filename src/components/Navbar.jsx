import logo from "../assets/logo.png";

const Navbar = () => {
    return (
        <nav className="w-full bg-black border-b border-cyan-500/20 h-16">
            <div className="max-w-7xl mx-auto px-6 h-full flex items-center justify-between">

                {/* LEFT SIDE: Logo + Nav Links */}
                <div className="flex items-center gap-6 md:gap-10">

                    {/* Logo (separate) */}
                    <div className="flex items-center">
                        <img
                            src={logo}
                            alt="ReconPlus Logo"
                            className="h-20 md:h-20 object-contain"
                        />
                    </div>

                    {/* Navigation Links (separate) */}
                    <div className="flex items-center gap-4 md:gap-8">
                        <span className="text-white font-semibold text-sm md:text-base cursor-pointer
                     hover:text-cyan-400 transition-colors">
                            Home
                        </span>
                        <span className="text-white font-semibold text-sm md:text-base cursor-pointer
                     hover:text-cyan-400 transition-colors">
                            About Us
                        </span>
                    </div>

                </div>

                {/* Auth Buttons */}
                <div className="flex items-center gap-2 md:gap-4">
                    <button className="font-semibold text-sm md:text-base text-white hover:text-cyan-400 transition-colors">
                        Sign In
                    </button>
                    <button className="font-semibold bg-cyan-400 text-black px-3 md:px-5 py-1.5 md:py-2 rounded-full text-sm md:text-base hover:bg-cyan-600">
                        Sign Up
                    </button>
                </div>

            </div>
        </nav>
    );
};

export default Navbar;
