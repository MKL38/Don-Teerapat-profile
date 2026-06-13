import { experiences } from "@/lib/data";
import Reveal from "./Reveal";

export default function Experience() {
  return (
    <section id="experience" className="container-x scroll-mt-24 py-20 md:py-28">
      <Reveal>
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <h2 className="text-3xl font-light uppercase tracking-tighter text-text-ondark md:text-5xl">
            Experience
          </h2>
          <p className="micro-label">[ 001 — 003 ] · 2022 — Present</p>
        </div>
      </Reveal>

      <div className="mt-12 md:mt-16">
        {experiences.map((exp) => (
          <Reveal key={exp.index} as="article" className="group border-t border-divider py-10 md:py-14">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-12">
              {/* Left — index, company, period */}
              <div className="md:col-span-4">
                <span className="section-index">{exp.index}</span>
                <h3 className="mt-4 text-xl font-light uppercase tracking-tight text-text-ondark md:text-2xl">
                  {exp.company}
                </h3>
                <p className="mt-3 text-[11px] uppercase tracking-label text-text-muted">
                  {exp.meta}
                </p>
                <p className="mt-1 text-[11px] uppercase tracking-label text-text-muted">
                  {exp.period}
                </p>
              </div>

              {/* Right — role + responsibilities */}
              <div className="md:col-span-8">
                <p className="text-base font-medium text-text-ondark md:text-lg">
                  {exp.title}
                </p>

                <div className="mt-6 space-y-8">
                  {exp.groups.map((group, gi) => (
                    <div key={gi}>
                      {group.heading && (
                        <p className="mb-3 text-[11px] uppercase tracking-label text-text-muted">
                          — {group.heading}
                        </p>
                      )}
                      <ul className="space-y-3">
                        {group.points.map((point, pi) => (
                          <li
                            key={pi}
                            className="flex gap-4 text-[15px] leading-relaxed text-text-muted"
                          >
                            <span className="mt-2 h-px w-4 flex-none bg-divider" />
                            <span className="transition-colors group-hover:text-text-ondark/90">
                              {point}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        ))}
        <div className="border-t border-divider" />
      </div>
    </section>
  );
}
