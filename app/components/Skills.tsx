"use client";

import AnimatedSection from "./AnimatedSection";

const skillGroups = [
  { category: "Frontend", skills: ["React", "TypeScript", "JavaScript", "AngularJS", "HTML", "CSS", "SASS"] },
  { category: "Styling", skills: ["Tailwind CSS", "MUI", "Bootstrap"] },
  { category: "State Management", skills: ["Redux", "Redux Toolkit"] },
  { category: "Testing", skills: ["Jest", "Cypress"] },
  { category: "Tools & Libraries", skills: ["Git", "REST APIs", "Next.js", "Webpack", "React Hook Form"] },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6" style={{ background: "var(--bg-alt)" }}>
      <div className="max-w-6xl mx-auto">
        <AnimatedSection>
          <p className="text-sm font-medium tracking-widest uppercase mb-3" style={{ color: "#a855f7" }}>Skills</p>
          <h2 className="text-3xl md:text-4xl font-black mb-12" style={{ color: "var(--text)" }}>
            Technical <span className="gradient-text">expertise</span>
          </h2>
        </AnimatedSection>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {skillGroups.map((group, i) => (
            <AnimatedSection key={group.category} delay={i * 0.1}>
              <div
                className="card-glow rounded-xl p-6 border h-full transition-all duration-300 hover:scale-[1.02]"
                style={{ background: "var(--card)", borderColor: "var(--border)" }}
                onMouseEnter={e => (e.currentTarget.style.borderColor = "rgba(168,85,247,0.4)")}
                onMouseLeave={e => (e.currentTarget.style.borderColor = "var(--border)")}
              >
                <h3 className="font-bold mb-4 text-xs uppercase tracking-widest" style={{ color: "#a855f7" }}>
                  {group.category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <span key={skill} className="px-3 py-1 text-xs font-medium rounded-full" style={{ background: "rgba(124,58,237,0.12)", color: "#c4b5fd", border: "1px solid rgba(124,58,237,0.25)" }}>
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
