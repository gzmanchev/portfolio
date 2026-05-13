"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";
import Image from "next/image";

const floatingBadges = [
  { label: "React", left: "5%", top: "38%" },
  { label: "TypeScript", right: "5%", top: "35%" },
  { label: "JavaScript", left: "4%", top: "56%" },
  { label: "Next.js", right: "4%", top: "58%" },
];

export default function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
  const yContent = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <section ref={ref} id="hero" className="min-h-screen flex flex-col items-center justify-center text-center px-6 relative overflow-hidden">

      {/* Background parallax layer */}
      <motion.div style={{ y, opacity }} className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse at center, rgba(124,58,237,0.15) 0%, transparent 60%)" }} />
        <div className="absolute top-1/3 left-1/4 w-96 h-96 rounded-full blur-3xl" style={{ background: "rgba(99,102,241,0.1)" }} />
        <div className="absolute bottom-1/3 right-1/4 w-80 h-80 rounded-full blur-3xl" style={{ background: "rgba(124,58,237,0.08)" }} />
        <div className="absolute top-2/3 left-1/3 w-64 h-64 rounded-full blur-3xl" style={{ background: "rgba(168,85,247,0.06)" }} />
      </motion.div>

      {/* Decorative rings */}
      <div className="absolute hidden md:block pointer-events-none" style={{ width: 520, height: 520, border: "1px solid rgba(124,58,237,0.07)", borderRadius: "50%", top: "50%", left: "50%", transform: "translate(-50%, -50%)" }} />
      <div className="absolute hidden md:block pointer-events-none" style={{ width: 720, height: 720, border: "1px solid rgba(124,58,237,0.04)", borderRadius: "50%", top: "50%", left: "50%", transform: "translate(-50%, -50%)" }} />

      {/* Floating tech badges */}
      <div className="absolute inset-0 pointer-events-none hidden xl:block">
        {floatingBadges.map((badge, i) => (
          <motion.div
            key={badge.label}
            className="absolute"
            style={{ left: (badge as any).left, right: (badge as any).right, top: badge.top }}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.9 + i * 0.15, duration: 0.5 }}
          >
            <motion.div
              className="px-4 py-2 rounded-full text-xs font-semibold border"
              style={{
                background: "var(--badge-bg)",
                borderColor: "var(--badge-border)",
                color: "var(--badge-text)",
                backdropFilter: "blur(8px)",
                whiteSpace: "nowrap",
              }}
              animate={{ y: [0, -7, 0] }}
              transition={{ delay: 1.5 + i * 0.2, duration: 2.5 + i * 0.35, repeat: Infinity, ease: "easeInOut" }}
            >
              {badge.label}
            </motion.div>
          </motion.div>
        ))}
      </div>

      {/* Main content */}
      <motion.div style={{ opacity }} className="relative z-10 max-w-3xl">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="flex justify-center mb-8"
        >
          <div className="relative">
            <Image
              src="/logo.png"
              alt="Georgi Manchev"
              width={200}
              height={200}
              className="rounded-full object-cover"
              style={{ boxShadow: "0 0 50px rgba(124,58,237,0.55), 0 0 100px rgba(124,58,237,0.2)" }}
            />
            <div className="absolute inset-0 rounded-full" style={{ border: "2px solid rgba(168,85,247,0.5)" }} />
          </div>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-sm font-medium tracking-widest uppercase mb-5"
          style={{ color: "#a855f7" }}
        >
          Software Engineer
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="text-5xl md:text-7xl font-black mb-6 tracking-tight"
        >
          <span className="gradient-text">Georgi Manchev</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="max-w-xl mx-auto text-lg md:text-xl leading-relaxed mb-10 font-medium"
          style={{ color: "var(--text)", opacity: 0.75 }}
        >
          Frontend Engineer. Clean code. Sharp UI. Real results.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.45 }}
          className="flex items-center justify-center gap-4 flex-wrap"
        >
          <a href="#contact"
            className="px-6 py-3 text-white text-sm font-semibold rounded-xl transition-all duration-200 hover:opacity-90 hover:scale-105"
            style={{ background: "linear-gradient(135deg, #7c3aed, #6366f1)", boxShadow: "0 0 24px rgba(124,58,237,0.35)" }}
          >
            Start a project
          </a>
          <a href="#experience"
            className="px-6 py-3 text-sm font-medium rounded-xl border transition-all duration-200 hover:scale-105"
            style={{ borderColor: "rgba(124,58,237,0.35)", color: "var(--muted)" }}
          >
            My experience
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex items-center justify-center gap-5 mt-10"
        >
          {[
            { href: "mailto:gzmanchev@gmail.com", icon: <FiMail size={19} />, label: "Email" },
            { href: "https://linkedin.com/in/georgi-manchev97", icon: <FiLinkedin size={19} />, label: "LinkedIn" },
            { href: "https://github.com", icon: <FiGithub size={19} />, label: "GitHub" },
          ].map((item) => (
            <a key={item.label} href={item.href} target="_blank" rel="noopener noreferrer"
              className="p-2 rounded-lg transition-all duration-200 hover:scale-110"
              style={{ color: "var(--muted)" }}
              onMouseEnter={e => (e.currentTarget.style.color = "#a855f7")}
              onMouseLeave={e => (e.currentTarget.style.color = "var(--muted)")}
              aria-label={item.label}
            >
              {item.icon}
            </a>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1 }} style={{ opacity }} className="absolute bottom-10 left-1/2 -translate-x-1/2">
        <motion.div animate={{ y: [0, 8, 0] }} transition={{ repeat: Infinity, duration: 1.5 }}
          className="w-px h-12 mx-auto"
          style={{ background: "linear-gradient(to bottom, #7c3aed, transparent)" }}
        />
      </motion.div>
    </section>
  );
}
