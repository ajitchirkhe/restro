import React, { useEffect, useState } from "react";
import { navLinks } from "../data/data";
import { MenuIcon, XIcon } from "lucide-react";

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll)
  }, []);

  return (
    <>
      <nav
        className={`fixed top-0 z-20 w-full transition-all duration-300 ${scrolled ? "bg-white/70 backdrop-blur-md" : "bg-transparent"}`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between py-4 font-medium">
          {/* Logo */}
          <a href="/">
            <img src="/assets/logo.svg" alt="logo" />
          </a>

          {/* Desktop navigation links */}
          <div className="hidden items-center gap-10 md:flex">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="transition hover:text-zinc-600"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Booking button */}
          <a
            href="#booking-process"
            className="hidden rounded-full bg-orange-500 px-6 py-3 text-white transition hover:bg-orange-600 md:block"
          >
            Book a table
          </a>

          {/* Mobile menu button */}
          <button
            type="button"
            onClick={() => setMobileOpen(true)}
            className="rounded-md bg-zinc-800 p-2 text-white md:hidden"
            aria-label="Open menu"
          >
            <MenuIcon />
          </button>
        </div>
      </nav>

      {/* Mobile navigation drawer */}
      <div
        className={`fixed inset-0 z-40 flex flex-col items-center justify-center bg-white/90 p-8 backdrop-blur-md transition-transform duration-300 md:hidden ${
          mobileOpen ? "translate-x-0" : "translate-x-full"
        }`}
        aria-hidden={!mobileOpen}
      >
        {/* Close button */}
        <button
          type="button"
          onClick={() => setMobileOpen(false)}
          className="absolute right-6 top-6 rounded-md bg-zinc-800 p-2 text-white"
          aria-label="Close menu"
          tabIndex={mobileOpen ? 0 : -1}
        >
          <XIcon />
        </button>

        {/* Mobile links */}
        <div className="flex flex-col items-center space-y-6 font-medium">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              tabIndex={mobileOpen ? 0 : -1}
              onClick={() => setMobileOpen(false)}
              className="text-2xl text-zinc-800 transition hover:text-orange-500"
            >
              {link.name}
            </a>
          ))}

          <a
            href="#booking-process"
            tabIndex={mobileOpen ? 0 : -1}
            onClick={() => setMobileOpen(false)}
            className="rounded-full bg-orange-500 px-6 py-3 text-white transition hover:bg-orange-600"
          >
            Book a table
          </a>
        </div>
      </div>
    </>
  );
};

export default Navbar;

