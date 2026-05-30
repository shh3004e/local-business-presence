import { useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const logoPath = "M1.04356 6.35771L13.6437 0.666504L22.9564 6.35771V17.6423L13.6437 23.3335L1.04356 17.6423V6.35771Z";

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "Services", href: "#services", hasDropdown: true },
    { name: "Reviews", href: "#reviews" },
    { name: "Contact us", href: "#contact" },
  ];

  return (
    <div className="relative min-h-screen w-full flex flex-col justify-between overflow-x-hidden select-none bg-[#08060d]">
      {/* HTML5 Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0 pointer-events-none"
      >
        <source
          src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260210_031346_d87182fb-b0af-4273-84d1-c6fd17d6bf0f.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>

      {/* Header / Navbar */}
      <header className="relative z-20 w-full bg-transparent px-6 py-4 md:px-[120px] md:py-[16px]">
        <nav className="flex items-center justify-between h-12 w-full">
          {/* Logo (Left) */}
          <div className="flex items-center gap-3">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-8 h-8 text-white filter drop-shadow-[0_2px_8px_rgba(123,57,252,0.5)]"
            >
              <path d={logoPath} fill="currentColor" />
            </svg>
            <span className="font-manrope font-extrabold text-xl tracking-tight text-white hidden sm:inline">
              DATA<span className="text-[#7b39fc]">CORE</span>
            </span>
          </div>

          {/* Navigation Links (Center-Left, Desktop Only) */}
          <div className="hidden lg:flex items-center gap-8 ml-10 mr-auto">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="font-manrope font-medium text-[14px] text-white flex items-center gap-1 hover:opacity-80 transition-all duration-200 tracking-wide"
              >
                {link.name}
                {link.hasDropdown && (
                  <ChevronDown className="w-4 h-4 text-white opacity-80" />
                )}
              </a>
            ))}
          </div>

          {/* Action Buttons (Right, Desktop Only) */}
          <div className="hidden lg:flex items-center gap-4">
            <button className="bg-white border border-[#d4d4d4] rounded-[8px] px-5 py-2.5 font-manrope font-semibold text-[14px] text-[#171717] hover:bg-neutral-50 active:scale-95 transition-all duration-200 shadow-sm">
              Sign In
            </button>
            <button className="bg-[#7b39fc] rounded-[8px] px-5 py-2.5 font-manrope font-semibold text-[14px] text-[#fafafa] hover:bg-[#8b4ffc] active:scale-95 transition-all duration-200 shadow-[0_4px_14px_rgba(123,57,252,0.4)]">
              Get Started
            </button>
          </div>

          {/* Mobile Menu Trigger (Hamburger) */}
          <button
            onClick={() => setMobileMenuOpen(true)}
            className="lg:hidden p-2 text-white hover:opacity-80 transition-opacity"
            aria-label="Open menu"
          >
            <Menu className="w-6 h-6" />
          </button>
        </nav>
      </header>

      {/* Hero Content (Centered) */}
      <main className="relative z-10 flex-grow flex items-center justify-center px-6 py-12 md:py-24">
        <div className="max-w-4xl mx-auto flex flex-col items-center text-center">
          {/* Tagline Pill */}
          <div className="inline-flex items-center h-[38px] px-3 gap-2 bg-[rgba(85,80,110,0.4)] backdrop-blur-md border border-[rgba(164,132,215,0.5)] rounded-[10px] animate-fade-in">
            <span className="bg-[#7b39fc] rounded-[6px] px-2 py-0.5 text-[10px] font-cabin font-bold text-white uppercase tracking-wider">
              New
            </span>
            <span className="font-cabin font-medium text-[14px] text-white">
              Say Hello to Datacore v3.2
            </span>
          </div>

          {/* Headline */}
          <h1 className="font-instrument font-normal text-white text-5xl md:text-[96px] leading-[1.1] tracking-tight mt-8 mb-6 max-w-4xl select-text filter drop-shadow-[0_4px_12px_rgba(0,0,0,0.6)]">
            Book your perfect stay instantly{" "}
            <span className="italic font-serif px-1.5 md:px-3 text-[#b28cff]">and</span>{" "}
            hassle-free
          </h1>

          {/* Subtext */}
          <p className="font-inter font-normal text-lg md:text-[18px] text-white/70 max-w-[662px] leading-relaxed mb-10 select-text filter drop-shadow-[0_2px_4px_rgba(0,0,0,0.4)]">
            Discover handpicked hotels, resorts, and stays across your favorite
            destinations. Enjoy exclusive deals, fast booking, and 24/7 support.
          </p>

          {/* Call to Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
            <button className="w-full sm:w-auto bg-[#7b39fc] text-white font-cabin font-medium text-[16px] px-8 py-4 rounded-[10px] hover:bg-[#8b4ffc] active:scale-98 transition-all duration-200 shadow-[0_8px_20px_rgba(123,57,252,0.3)]">
              Book a Free Demo
            </button>
            <button className="w-full sm:w-auto bg-[#2b2344] text-[#f6f7f9] font-cabin font-medium text-[16px] px-8 py-4 rounded-[10px] hover:bg-[#392e59] active:scale-98 transition-all duration-200 border border-white/5">
              Get Started Now
            </button>
          </div>
        </div>
      </main>

      {/* Footer Spacer / Decorative Indicator */}
      <footer className="relative z-10 w-full py-6 flex justify-center items-center">
        <div className="flex flex-col items-center gap-2">
          <div className="w-1.5 h-8 bg-white/20 rounded-full overflow-hidden">
            <div className="w-full h-1/2 bg-[#7b39fc] rounded-full animate-bounce"></div>
          </div>
          <span className="font-manrope text-[10px] text-white/40 tracking-widest uppercase">
            Scroll to explore
          </span>
        </div>
      </footer>

      {/* Full-Screen Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 bg-black/95 backdrop-blur-lg z-50 flex flex-col justify-between p-8 animate-fade-in-fast">
          {/* Mobile Header */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-8 h-8 text-white"
              >
                <path d={logoPath} fill="currentColor" />
              </svg>
              <span className="font-manrope font-extrabold text-xl tracking-tight text-white">
                DATA<span className="text-[#7b39fc]">CORE</span>
              </span>
            </div>
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="p-2 text-white hover:opacity-80 transition-opacity"
              aria-label="Close menu"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Mobile Navigation Links */}
          <div className="flex flex-col gap-8 my-auto">
            {navLinks.map((link, idx) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="font-manrope font-semibold text-3xl text-white hover:text-[#7b39fc] transition-colors duration-200 flex items-center gap-2"
                style={{ animationDelay: `${idx * 100}ms` }}
              >
                {link.name}
                {link.hasDropdown && <ChevronDown className="w-6 h-6" />}
              </a>
            ))}
          </div>

          {/* Mobile Action Buttons */}
          <div className="flex flex-col gap-4">
            <button className="w-full bg-white border border-[#d4d4d4] rounded-[8px] py-4 font-manrope font-semibold text-[16px] text-[#171717] hover:bg-neutral-50 active:scale-95 transition-all">
              Sign In
            </button>
            <button className="w-full bg-[#7b39fc] rounded-[8px] py-4 font-manrope font-semibold text-[16px] text-[#fafafa] hover:bg-[#8b4ffc] active:scale-95 transition-all shadow-[0_4px_14px_rgba(123,57,252,0.4)]">
              Get Started
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
