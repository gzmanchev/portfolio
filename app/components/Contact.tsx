"use client";

import { FiMail, FiLinkedin, FiPhone } from "react-icons/fi";
import AnimatedSection from "./AnimatedSection";

const contacts = [
  { icon: <FiMail size={20} />, label: "Email", value: "gzmanchev@gmail.com", href: "mailto:gzmanchev@gmail.com" },
  { icon: <FiLinkedin size={20} />, label: "LinkedIn", value: "georgi-manchev97", href: "https://linkedin.com/in/georgi-manchev97" },
  { icon: <FiPhone size={20} />, label: "Call me", value: "+359 893 679 751", href: "tel:+359893679751" },
];

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <AnimatedSection>
          <p className="text-sm font-medium tracking-widest uppercase mb-3" style={{ color: "#a855f7" }}>Contact</p>
          <h2 className="text-3xl md:text-4xl font-black mb-4" style={{ color: "var(--text)" }}>
            Got a project in mind?{" "}
            <span className="gradient-text">Let&apos;s talk.</span>
          </h2>
          <p className="mb-12 max-w-md mx-auto text-sm" style={{ color: "var(--muted)" }}>
            New website, a feature, or a full application — I&apos;m open to new opportunities and respond within 24 hours.
          </p>
        </AnimatedSection>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          {contacts.map((contact, i) => (
            <AnimatedSection key={contact.label} delay={i * 0.1}>
              <a
                href={contact.href}
                target={contact.href.startsWith("http") ? "_blank" : undefined}
                rel={contact.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="flex items-center gap-3 px-6 py-4 rounded-xl border transition-all duration-200 hover:scale-105 w-full sm:w-auto"
                style={{ background: "var(--card)", borderColor: "var(--border)" }}
                onMouseEnter={e => (e.currentTarget.style.borderColor = "rgba(168,85,247,0.4)")}
                onMouseLeave={e => (e.currentTarget.style.borderColor = "var(--border)")}
              >
                <span style={{ color: "#a855f7" }}>{contact.icon}</span>
                <div className="text-left">
                  <p className="text-xs" style={{ color: "var(--muted)" }}>{contact.label}</p>
                  <p className="text-sm font-medium" style={{ color: "var(--text)" }}>{contact.value}</p>
                </div>
              </a>
            </AnimatedSection>
          ))}
        </div>
      </div>

      <AnimatedSection delay={0.3}>
        <div className="mt-24 pt-8 border-t text-center" style={{ borderColor: "var(--border)" }}>
          <p className="text-sm" style={{ color: "var(--muted)" }}>
            © {new Date().getFullYear()} Georgi Manchev · Built with Next.js & Tailwind CSS
          </p>
        </div>
      </AnimatedSection>
    </section>
  );
}
