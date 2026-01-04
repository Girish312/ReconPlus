import React, { useState, useEffect } from 'react';

export default function ReconnPlusLanding() {
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
    <div className="min-h-screen bg-[#0a0e1a] text-white overflow-x-hidden">
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-200 ${scrolled ? 'bg-[#0a0e1a]/95 backdrop-blur-md shadow-lg shadow-cyan-500/10' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Left side - Logo and Links */}
            <div className="flex items-center space-x-8">
              <div className="flex-shrink-0">
                <img 
                  src="/images/logo.png" 
                  alt="ReconnPlus Logo" 
                  className="h-24 sm:h-40 w-auto"
                />
              </div>
              <div className="hidden md:flex items-center space-x-8">
                <a href="#home" className="text-white hover:text-cyan-400 transition-colors duration-300 text-base font-semibold">
                  Home
                </a>
                <a href="#about" className="text-white hover:text-cyan-400 transition-colors duration-300 text-base font-semibold">
                  About Us
                </a>
              </div>
            </div>
            
            {/* Right side - Auth buttons */}
            <div className="hidden md:flex items-center space-x-4">
              <a href="#signin" className="text-white hover:text-cyan-400 transition-colors duration-300 text-base font-semibold">
                Sign In
              </a>
              <button className="bg-gradient-to-r from-cyan-400 to-blue-500 text-gray-900 px-8 py-2.5 rounded-full font-semibold text-base transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/50">
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

      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden pt-20">
        <div className="absolute inset-0 z-0">
          <img 
            src="/images/hero-background.png" 
            alt="" 
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0a0e1a]/70 via-[#0a0e1a]/50 to-[#0a0e1a]"></div>
        </div>

        {/* Animated particles effect */}
        <div className="absolute inset-0 z-0 opacity-20">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-cyan-400 rounded-full animate-float"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${5 + Math.random() * 10}s`
              }}
            ></div>
          ))}
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 w-full">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-slideInLeft">
              <h1 className="font-bold leading-tight text-[40px] sm:text-[48px] md:text-[56px] lg:text-[64px]">
                <span className="block text-white">Detect threats</span>
                <span className="block text-white">before they detect</span>
                <span className="block text-white">you.</span>
              </h1>
              <p className="text-gray-300 text-base sm:text-lg md:text-xl leading-relaxed max-w-xl text-justify">
                An AI powered reconaissance detection tool that monitors suspicious activity, flags attacker behaviour and help secure your infrastructure proactively
              </p>
            </div>

            <div className="flex justify-center lg:justify-end animate-slideInRight">
              {/* Hero Icon - Replace with your icon */}
              <div className="relative">
                <div className="absolute inset-0 bg-cyan-500/20 rounded-full blur-3xl animate-pulse"></div>
                <img 
                  src="/images/hero-icon.png" 
                  alt="Security Shield" 
                  className="relative w-56 h-56 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-[400px] lg:h-[400px] object-contain drop-shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Problem Section */}
      <section className="relative py-16 sm:py-20 bg-gradient-to-b from-[#0a0e1a] to-[#0f1421]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            {/* Features Grid - Horizontal on mobile, Vertical on tablet+ */}
            <div className="grid grid-cols-3 sm:grid-cols-3 lg:grid-cols-3 gap-4 sm:gap-6 animate-fadeIn">
              {[
                {
                  title: 'Suspecious Request Monitoring',
                  icon: '/images/icons/suspicious-monitoring.png'
                },
                {
                  title: 'Probing Detection',
                  icon: '/images/icons/probing-detection.png'
                },
                {
                  title: 'Early warning alerts',
                  icon: '/images/icons/early-warning.png'
                }
              ].map((feature, index) => (
                <div 
                  key={index}
                  className="relative group h-full"
                  style={{animationDelay: `${index * 0.2}s`}}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-blue-500/5 rounded-2xl sm:rounded-3xl border border-cyan-500/30 transform group-hover:scale-105 transition-all duration-300"></div>
                  <div className="relative p-3 sm:p-6 lg:p-8 flex flex-col items-center text-center space-y-3 sm:space-y-6 min-h-[200px] sm:min-h-[280px] lg:min-h-[320px]">
                    <div className="relative flex-shrink-0">
                      <div className="absolute inset-0 bg-cyan-500/20 rounded-full blur-xl group-hover:blur-2xl transition-all duration-300"></div>
                      <img 
                        src={feature.icon}
                        alt={feature.title}
                        className="relative w-12 h-12 sm:w-20 sm:h-20 lg:w-40 lg:h-40 object-contain"
                      />
                    </div>
                    <h3 className="text-xs sm:text-lg lg:text-xl font-semibold text-white leading-tight">
                      {feature.title}
                    </h3>
                  </div>
                </div>
              ))}
            </div>

            {/* Problem Description */}
            <div className="space-y-6 animate-slideInRight flex flex-col justify-center">
              <h2 className="text-4xl sm:text-5xl font-bold">
                <span className="text-white">The Problem</span>
              </h2>
              <p className="text-gray-300 text-base sm:text-lg leading-relaxed text-justify">
                Attackers begin by probing ports, endpoints, and vulnerabilities long before launching a full attack. Most systems detect threats only after the damage is done — but ReconnPlus identifies these early-stage activities in real time, helping you prevent breaches before they happen.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How ReconnPlus Works Section */}
      <section className="relative py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl sm:text-5xl font-bold text-center mb-12 sm:mb-16 animate-fadeIn">
            How <span className="text-white">ReconnPlus</span> Works
          </h2>
          
          {/* Flowchart - Responsive scaling */}
          <div className="relative w-full animate-slideInUp">
            <div className="w-full flex justify-center items-center">
              <img 
                src="/images/flowchart.png" 
                alt="ReconnPlus Workflow" 
                className="w-full max-w-full h-auto object-contain"
                style={{ maxHeight: '200px' }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Key Features Section */}
      <section className="relative py-16 sm:py-20 bg-gradient-to-b from-[#0a0e1a] to-[#0f1421]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl sm:text-5xl font-bold text-center mb-12 sm:mb-16 animate-fadeIn">
            <span className="text-white">Key Features</span>
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {[
              {
                title: 'Real-time Detection',
                description: 'Get instant alerts when someone scans, probes, or targets your system.',
                icon: '/images/features/realtime-detection.png'
              },
              {
                title: 'AI-Driven Accuracy',
                description: 'Smarter detection with fewer false alarms — learns from real attack patterns.',
                icon: '/images/features/ai-accuracy.png'
              },
              {
                title: 'Visual Dashboard',
                description: 'See all logs, alerts, trends, and activity clearly in a user-friendly UI.',
                icon: '/images/features/dashboard.png'
              },
              {
                title: 'Proactive Protection',
                description: 'Identify threats in their earliest stages and prevent damage before it happens.',
                icon: '/images/features/proactive-protection.png'
              }
            ].map((feature, index) => (
              <div 
                key={index}
                className="group animate-fadeInUp"
                style={{animationDelay: `${index * 0.15}s`}}
              >
                <div className="relative h-full bg-gradient-to-br from-[#0f2f35] to-[#0a1e28] rounded-3xl border border-cyan-500/20 p-8 flex flex-col items-center text-center space-y-6 transform group-hover:scale-105 group-hover:border-cyan-500/40 transition-all duration-300">
                  {/* Icon in circle */}
                  <div className="relative flex-shrink-0">
                    <div className="absolute inset-0 bg-cyan-500/10 rounded-full blur-2xl group-hover:blur-3xl transition-all duration-300"></div>
                    <div className="relative w-28 h-28 sm:w-32 sm:h-32 rounded-full bg-gradient-to-br from-cyan-500/20 to-blue-500/20 flex items-center justify-center border border-cyan-500/30">
                      <img 
                        src={feature.icon}
                        alt={feature.title}
                        className="w-16 h-16 sm:w-20 sm:h-20 object-contain"
                      />
                    </div>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white">
                    {feature.title}
                  </h3>
                  <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative py-8 border-t border-cyan-500/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-gray-400">
            <p className="text-sm">© 2026 ReconnPlus. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Global Styles */}
      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@400;500;600;700;800;900&family=Rajdhani:wght@300;400;500;600;700&display=swap');

        * {
          font-family: 'Rajdhani', sans-serif;
        }

        h1, h2, h3 {
          font-family: 'Orbitron', sans-serif;
        }

        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes slideInUp {
          from {
            opacity: 0;
            transform: translateY(50px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }

        .animate-slideInLeft {
          animation: slideInLeft 0.8s ease-out forwards;
        }

        .animate-slideInRight {
          animation: slideInRight 0.8s ease-out forwards;
        }

        .animate-slideInUp {
          animation: slideInUp 0.8s ease-out forwards;
        }

        .animate-fadeIn {
          animation: fadeIn 0.8s ease-out forwards;
        }

        .animate-fadeInUp {
          animation: fadeInUp 0.8s ease-out forwards;
        }

        .animate-float {
          animation: float infinite ease-in-out;
        }

        /* Smooth scrolling */
        html {
          scroll-behavior: smooth;
        }

        /* Prevent horizontal scroll */
        body {
          overflow-x: hidden;
        }

        /* Custom scrollbar */
        ::-webkit-scrollbar {
          width: 10px;
        }

        ::-webkit-scrollbar-track {
          background: #0a0e1a;
        }

        ::-webkit-scrollbar-thumb {
          background: linear-gradient(180deg, #22d3ee, #3b82f6);
          border-radius: 5px;
        }

        ::-webkit-scrollbar-thumb:hover {
          background: linear-gradient(180deg, #06b6d4, #2563eb);
        }
      `}</style>
    </div>
  );
}