"use client";

import Image from "next/image";
import { FiExternalLink } from "react-icons/fi";
import AnimatedSection from "./AnimatedSection";

const projects = [
  {
    title: "AP HOMES",
    category: "Real estate website",
    url: "https://aphomes.bg",
    domain: "aphomes.bg",
    image: "/projects/aphomes.png",
    imageAlt: "AP HOMES real estate website homepage",
    description:
      "A website for a Bulgarian real estate agency, built to help people find properties and help owners sell theirs.",
    bullets: [
      "Property search for sales and rentals, with filters for city, neighbourhood, type, area and price",
      "Free valuation and listing request forms that turn visitors into leads for the agency",
      "Dedicated property pages, plus team and client review sections",
    ],
    stack: ["Next.js", "React", "Tailwind CSS"],
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <AnimatedSection>
          <p className="text-sm font-medium tracking-widest uppercase mb-3" style={{ color: "#a855f7" }}>Projects</p>
          <h2 className="text-3xl md:text-4xl font-black mb-12" style={{ color: "var(--text)" }}>
            Things I&apos;ve <span className="gradient-text">built</span>
          </h2>
        </AnimatedSection>

        <div className="space-y-5">
          {projects.map((project, i) => (
            <AnimatedSection key={project.title} delay={i * 0.15}>
              <div
                className="card-glow rounded-2xl border overflow-hidden grid lg:grid-cols-2 transition-all duration-300 hover:scale-[1.01]"
                style={{ background: "var(--card)", borderColor: "var(--border)" }}
                onMouseEnter={e => (e.currentTarget.style.borderColor = "rgba(168,85,247,0.35)")}
                onMouseLeave={e => (e.currentTarget.style.borderColor = "var(--border)")}
              >
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Visit ${project.title}`}
                  className="relative block aspect-video lg:aspect-auto overflow-hidden"
                >
                  <Image
                    src={project.image}
                    alt={project.imageAlt}
                    fill
                    sizes="(min-width: 1152px) 576px, (min-width: 1024px) 50vw, 100vw"
                    className="object-cover object-top"
                  />
                </a>

                <div className="p-6">
                  <h3 className="font-bold text-lg" style={{ color: "var(--text)" }}>{project.title}</h3>
                  <p className="text-sm font-medium mb-4" style={{ color: "#a855f7" }}>{project.category}</p>
                  <p className="text-sm leading-relaxed mb-4" style={{ color: "var(--muted)" }}>{project.description}</p>

                  <ul className="space-y-2 mb-5">
                    {project.bullets.map((bullet, j) => (
                      <li key={j} className="flex gap-3 text-sm leading-relaxed" style={{ color: "var(--muted)" }}>
                        <span className="mt-1.5 shrink-0" style={{ color: "#a855f7" }}>▸</span>
                        {bullet}
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2 mb-5">
                    {project.stack.map(tech => (
                      <span
                        key={tech}
                        className="px-3 py-1 rounded-full text-xs font-semibold border"
                        style={{ background: "var(--badge-bg)", borderColor: "var(--badge-border)", color: "var(--badge-text)" }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-semibold transition-opacity duration-200 hover:opacity-80"
                    style={{ color: "#a855f7" }}
                  >
                    {project.domain}
                    <FiExternalLink size={15} />
                  </a>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
