"use client";

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { HiMenu, HiX } from "react-icons/hi";
import { HiSun, HiMoon } from "react-icons/hi";

const links = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => setMounted(true), []);

  const isDark = !mounted || theme === "dark";

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 backdrop-blur-sm border-b transition-colors duration-300 ${isDark ? "bg-[#080808]/90 border-white/5" : "bg-white/90 border-black/5"}`}>
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between h-16">
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className={`font-bold text-lg tracking-tight cursor-pointer ${isDark ? "text-white" : "text-gray-900"}`}
        >
          GM<span className="text-indigo-400">.</span>
        </button>

        <ul className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <li key={link.href}>
              <a href={link.href} className={`text-sm transition-colors duration-200 ${isDark ? "text-gray-400 hover:text-white" : "text-gray-500 hover:text-gray-900"}`}>
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          {mounted && (
            <button
              onClick={() => setTheme(isDark ? "light" : "dark")}
              className={`p-2 rounded-lg transition-colors duration-200 ${isDark ? "text-gray-400 hover:text-white hover:bg-white/10" : "text-gray-500 hover:text-gray-900 hover:bg-black/5"}`}
              aria-label="Toggle theme"
            >
              {isDark ? <HiSun size={18} /> : <HiMoon size={18} />}
            </button>
          )}
          <button
            className={`md:hidden p-2 rounded-lg transition-colors ${isDark ? "text-gray-400 hover:text-white" : "text-gray-500 hover:text-gray-900"}`}
            onClick={() => setOpen(!open)}
          >
            {open ? <HiX size={22} /> : <HiMenu size={22} />}
          </button>
        </div>
      </div>

      {open && (
        <div className={`md:hidden border-b px-6 pb-4 ${isDark ? "bg-[#0f0f0f] border-white/5" : "bg-white border-black/5"}`}>
          <ul className="flex flex-col gap-4 pt-4">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className={`text-sm transition-colors ${isDark ? "text-gray-400 hover:text-white" : "text-gray-500 hover:text-gray-900"}`}
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}
