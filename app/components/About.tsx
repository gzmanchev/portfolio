"use client";

import AnimatedSection from "./AnimatedSection";

const stats = [
  { value: "4+", label: "Years of experience" },
  { value: "3", label: "Companies" },
  { value: "10+", label: "Technologies" },
];

export default function About() {
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <AnimatedSection>
            <p className="text-sm font-medium tracking-widest uppercase mb-3" style={{ color: "#a855f7" }}>About me</p>
            <h2 className="text-3xl md:text-4xl font-black mb-8" style={{ color: "var(--text)" }}>
              I build things that work —{" "}
              <span className="gradient-text">and that people enjoy using</span>
            </h2>
            <div className="grid grid-cols-3 gap-4">
              {stats.map((stat) => (
                <div key={stat.label} className="rounded-xl p-4 text-center border" style={{ background: "var(--card)", borderColor: "var(--border)" }}>
                  <p className="stat-number text-2xl font-black mb-1" style={{ color: "#a855f7" }}>{stat.value}</p>
                  <p className="text-xs" style={{ color: "var(--muted)" }}>{stat.label}</p>
                </div>
              ))}
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.15} className="space-y-5 leading-relaxed text-base" style={{ color: "var(--muted)" }}>
            <p>
              I&apos;m a frontend-focused Software Engineer with a strong foundation in <span style={{ color: "#a855f7" }}>React and TypeScript</span>. I take pride in writing clean, maintainable code and building interfaces that are both functional and a pleasure to use.
            </p>
            <p>
              Most recently at <span style={{ color: "#a855f7" }}>Domotz</span> — an international network monitoring platform — I spent 4 years developing features used by IT professionals worldwide, leading the migration from AngularJS to React and TypeScript, and collaborating directly with the product team in Italy.
            </p>
            <p>
              I communicate clearly, adapt quickly, and take ownership of my work from first line of code to final delivery.
            </p>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
