import React, { useEffect, useState } from "react";
import { PiChatDotsBold } from "react-icons/pi";
import { RiMenu4Line, RiCloseLine } from "react-icons/ri";
import { motion, AnimatePresence } from "framer-motion";
import { Dancing_Script } from "next/font/google";
import { Great_Vibes } from "next/font/google";
import Image from "next/image";

// ✅ Inline font export
// const logoFont = Dancing_Script({
//   subsets: ["latin"],
//   weight: ["400", "600", "700"],
// });

// const logoFont = Great_Vibes({
//   subsets: ["latin"],
//   weight: "400",
// });

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const navLinks = [
    { name: "Home", href: "#", id: "home" },
    { name: "Portfolio", href: "#portfolio", id: "portfolio" },
    { name: "About", href: "#about", id: "about" },
    { name: "Resume", href: "#resume", id: "resume" },
    { name: "Contact", href: "#contact", id: "contact" },
  ];

  // Header background on scroll
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 50);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [isMenuOpen]);

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`fixed top-0 left-0 w-full z-50 border-b transition-all duration-500 ease-out ${
        isScrolled
          ? "bg-white/80 backdrop-blur-2xl border-white/60 shadow-[0_8px_30px_rgba(15,23,42,0.12)]"
          : "bg-transparent border-transparent"
      }`}
    >
      <nav className="flex items-center justify-between max-w-6xl mx-auto w-[90%] py-3 md:py-4">
         {/* Logo */}
      {/* <motion.a
        initial={{ x: -20, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        href="#"
        className="relative inline-flex items-center gap-1"
      >
        <span 
          className={`${logoFont.className} drop-shadow-[0_6px_18px_rgba(0,0,0,0.25)]
 text-3xl md:text-4xl font-bold tracking-wide bg-gradient-to-r from-gray-900 via-gray-700 to-gray-500 bg-clip-text text-transparent`}
        >
          om
        </span>

        <span className="text-4xl md:text-5xl text-primary leading-none">.
        </span>
      </motion.a> */}

      {/* Logo */}
      <motion.a
        initial={{ x: -20, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        href="#"
        className="relative inline-flex items-center"
      >
        <div className="relative h-10 w-32 md:h-12 md:w-40">
          <Image
            src="/assets/Logo/logok.png"        // put logo.png in /public
            alt="Om Logo"
            fill                      // makes it responsive inside the div
            className="object-contain"
            priority
          />
        </div>
      </motion.a>

        {/* Desktop Nav Links */}
        <motion.div
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className={`hidden min-[825px]:flex items-center gap-4 rounded-full px-6 py-2.5 text-sm font-medium transition-all duration-300 ${
            isScrolled
              ? "bg-white/40 backdrop-blur-xl border border-white/70 shadow-sm"
              : "bg-white/10 backdrop-blur-2xl border border-white/20 shadow-[0_18px_45px_rgba(15,23,42,0.35)]"
          }`}
        >
          {navLinks.map((link, index) => (
            <motion.a
              key={link.id}
              href={link.href}
              initial={{ y: -10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.15 + index * 0.06 }}
              className="relative px-2 text-[14px] tracking-tight text-gray-700 hover:text-gray-900 transition-colors duration-200 group"
            >
              <span>{link.name}</span>
              {/* <span className="pointer-events-none absolute inset-x-1 -bottom-1 h-[2px] origin-center scale-x-0 rounded-full bg-gradient-to-r from-primary/80 via-primary to-primary/80 opacity-0 transition-all duration-300 group-hover:scale-x-100 group-hover:opacity-100" /> */}

              <span
              className="pointer-events-none absolute inset-x-1 -bottom-1 h-[2px] origin-center scale-x-0 rounded-full opacity-0 transition-all duration-300 group-hover:scale-x-100 group-hover:opacity-100"
              style={{
                background: "linear-gradient(90deg, var(--color-primary), var(--color-secondary))",
              }}
            />
            </motion.a>
          ))}
        </motion.div>

        {/* Desktop "Let's Talk" button */}
        <motion.a
          initial={{ x: 20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.45 }}
          href="#contact"
          className="hidden min-[825px]:inline-flex items-center gap-2 rounded-full custom-gradient px-6 py-2.5 text-[14px] font-semibold text-white shadow-[0_18px_45px_rgba(79,70,229,0.45)] hover:shadow-[0_22px_55px_rgba(79,70,229,0.6)] transition-all duration-200"
        >
          <span>Let&apos;s Talk</span>
          <PiChatDotsBold className="text-lg" />
        </motion.a>

        {/* Mobile menu button */}
        <motion.button
          type="button"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.6 }}
          whileHover={{ scale: 1.06 }}
          whileTap={{ scale: 0.9 }}
          onClick={toggleMenu}
          aria-label="Toggle navigation menu"
          aria-expanded={isMenuOpen}
          aria-controls="mobile-menu"
          className="min-[825px]:hidden inline-flex items-center justify-center rounded-full p-2.5 border border-gray-200 bg-white/80 backdrop-blur-lg shadow-sm text-gray-700 hover:text-gray-900 hover:border-gray-300 transition-colors"
        >
          <AnimatePresence mode="wait">
            {isMenuOpen ? (
              <motion.div
                key="close"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.18 }}
              >
                <RiCloseLine className="text-2xl" />
              </motion.div>
            ) : (
              <motion.div
                key="menu"
                initial={{ rotate: 90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: -90, opacity: 0 }}
                transition={{ duration: 0.18 }}
              >
                <RiMenu4Line className="text-2xl" />
              </motion.div>
            )}
          </AnimatePresence>
        </motion.button>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            id="mobile-menu"
            initial={{ y: -12, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -12, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="min-[825px]:hidden fixed inset-x-0 top-[64px] z-40 px-4 pb-6"
          >
            <div className="rounded-2xl bg-white/95 backdrop-blur-2xl shadow-[0_18px_45px_rgba(15,23,42,0.28)] border border-gray-100">
              <div className="flex flex-col gap-1 p-4">
                {navLinks.map((link, index) => (
                  <motion.a
                    key={link.id}
                    href={link.href}
                    onClick={closeMenu}
                    initial={{ x: -16, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.25, delay: 0.05 + index * 0.06 }}
                    className="flex items-center justify-between py-3 text-[16px] font-semibold text-gray-800 border-b border-gray-100 last:border-none hover:text-primary transition-colors"
                  >
                    <span>{link.name}</span>
                    <span className="h-1.5 w-1.5 rounded-full bg-gray-200 group-hover:bg-primary/70" />
                  </motion.a>
                ))}

                {/* Mobile Let's Talk */}
                <motion.a
                  href="#contact"
                  onClick={closeMenu}
                  initial={{ y: 10, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.25, delay: navLinks.length * 0.06 + 0.05 }}
                  className="mt-3 inline-flex items-center justify-center gap-2 rounded-full custom-gradient px-5 py-3 text-[15px] font-semibold text-white shadow-[0_16px_35px_rgba(79,70,229,0.55)] hover:shadow-[0_20px_45px_rgba(79,70,229,0.7)] transition-all"
                >
                  <span>Let&apos;s Talk</span>
                  <PiChatDotsBold className="text-lg" />
                </motion.a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};
