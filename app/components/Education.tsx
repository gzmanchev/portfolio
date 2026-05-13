"use client";

import AnimatedSection from "./AnimatedSection";

const education = [
  {
    degree: "BSc Automation, Information And Control Engineering",
    school: "Technical University Sofia",
    period: "2020 – Present",
  },
  {
    degree: "Alpha JavaScript Track",
    school: "Telerik Academy",
    period: "",
  },
  {
    degree: "Mathematics and English",
    school: "High School Of Mathematics \"Akademik Kiril Popov\"",
    period: "",
  },
];

export default function Education() {
  return (
    <section id="education" className="py-24 px-6" style={{ background: "var(--bg-alt)" }}>
      <div className="max-w-6xl mx-auto">
        <AnimatedSection>
          <p className="text-sm font-medium tracking-widest uppercase mb-3" style={{ color: "#a855f7" }}>Education</p>
          <h2 className="text-3xl md:text-4xl font-black mb-12" style={{ color: "var(--text)" }}>
            <span className="gradient-text">Background</span>
          </h2>
        </AnimatedSection>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {education.map((edu, i) => (
            <AnimatedSection key={edu.school} delay={i * 0.1}>
              <div
                className="card-glow rounded-xl p-6 border h-full transition-all duration-300 hover:scale-[1.02]"
                style={{ background: "var(--card)", borderColor: "var(--border)" }}
                onMouseEnter={e => (e.currentTarget.style.borderColor = "rgba(168,85,247,0.35)")}
                onMouseLeave={e => (e.currentTarget.style.borderColor = "var(--border)")}
              >
                <h3 className="font-bold mb-1 leading-snug" style={{ color: "var(--text)" }}>{edu.degree}</h3>
                <p className="text-sm font-medium mt-2" style={{ color: "#a855f7" }}>{edu.school}</p>
                {edu.period && <p className="text-xs mt-1" style={{ color: "var(--muted)" }}>{edu.period}</p>}
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
