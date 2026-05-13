"use client";

import AnimatedSection from "./AnimatedSection";

const experiences = [
  {
    title: "Software Engineer",
    company: "1-Stream",
    period: "Aug 2025 – Apr 2026",
    location: "Plovdiv",
    bullets: [
      "Delivered responsive, performant web applications using React, JavaScript, and Tailwind CSS",
      "Built a library of reusable UI components that reduced development time across the project",
      "Integrated REST APIs for real-time data handling and state synchronisation",
      "Improved page load speed, accessibility standards, and cross-browser consistency",
    ],
  },
  {
    title: "Software Engineer",
    company: "Domotz Bulgaria LTD",
    period: "Apr 2021 – May 2025",
    location: "",
    bullets: [
      "Contributed to the frontend migration of a large-scale application from AngularJS to React and TypeScript, significantly improving maintainability and developer experience",
      "Developed complex UI features for a network monitoring platform used by IT teams globally, using React, TypeScript, and Redux Toolkit",
      "Built a React + TypeScript backoffice system from the ground up alongside a small cross-functional team",
      "Established testing coverage using Jest for unit tests and Cypress for end-to-end testing",
      "Collaborated directly with the product team in Italy, participating in on-site sprint cycles",
    ],
  },
  {
    title: "Software Engineer Intern",
    company: "Arte Property Ltd.",
    period: "Feb 2020 – Mar 2021",
    location: "",
    bullets: [
      "Developed reusable Angular components and UI libraries used across the platform",
      "Contributed to bug fixes and stability improvements in a production application",
      "Worked within an agile team, attending daily stand-ups and sprint planning sessions",
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <AnimatedSection>
          <p className="text-sm font-medium tracking-widest uppercase mb-3" style={{ color: "#a855f7" }}>Experience</p>
          <h2 className="text-3xl md:text-4xl font-black mb-12" style={{ color: "var(--text)" }}>
            Where I&apos;ve <span className="gradient-text">worked</span>
          </h2>
        </AnimatedSection>

        <div className="space-y-5">
          {experiences.map((exp, i) => (
            <AnimatedSection key={exp.company} delay={i * 0.15}>
              <div
                className="card-glow rounded-2xl p-6 border transition-all duration-300 hover:scale-[1.01]"
                style={{ background: "var(--card)", borderColor: "var(--border)" }}
                onMouseEnter={e => (e.currentTarget.style.borderColor = "rgba(168,85,247,0.35)")}
                onMouseLeave={e => (e.currentTarget.style.borderColor = "var(--border)")}
              >
                <div className="flex flex-wrap items-start justify-between gap-2 mb-4">
                  <div>
                    <h3 className="font-bold text-lg" style={{ color: "var(--text)" }}>{exp.title}</h3>
                    <p className="text-sm font-medium" style={{ color: "#a855f7" }}>{exp.company}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm" style={{ color: "var(--muted)" }}>{exp.period}</p>
                    {exp.location && <p className="text-xs mt-0.5" style={{ color: "var(--muted)" }}>{exp.location}</p>}
                  </div>
                </div>
                <ul className="space-y-2">
                  {exp.bullets.map((bullet, j) => (
                    <li key={j} className="flex gap-3 text-sm leading-relaxed" style={{ color: "var(--muted)" }}>
                      <span className="mt-1.5 shrink-0" style={{ color: "#a855f7" }}>▸</span>
                      {bullet}
                    </li>
                  ))}
                </ul>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
