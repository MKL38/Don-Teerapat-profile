import { skillGroups, education } from "@/lib/data";
import Reveal from "./Reveal";

export default function Expertise() {
  return (
    <section
      id="expertise"
      className="scroll-mt-24 border-t border-divider bg-bg-elevated py-20 md:py-28"
    >
      <div className="container-x">
        <Reveal>
          <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <h2 className="text-3xl font-light uppercase tracking-tighter text-text-ondark md:text-5xl">
              Expertise
            </h2>
            <p className="micro-label">[ Skills & Education ]</p>
          </div>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-px overflow-hidden border border-divider bg-divider md:mt-16 md:grid-cols-3">
          {skillGroups.map((group) => (
            <Reveal key={group.index} className="bg-bg-primary p-7 md:p-9">
              <div className="flex items-baseline justify-between">
                <h3 className="text-sm uppercase tracking-label text-text-ondark">
                  {group.title}
                </h3>
                <span className="section-index">{group.index}</span>
              </div>
              <ul className="mt-7 space-y-4">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="flex gap-3 text-[15px] leading-relaxed text-text-muted"
                  >
                    <span className="mt-2 h-px w-3 flex-none bg-divider" />
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>

        {/* Education row */}
        <Reveal delay={80}>
          <div className="mt-12 grid grid-cols-1 gap-8 border-t border-divider pt-10 md:grid-cols-12">
            <div className="md:col-span-4">
              <p className="micro-label">[ Education ]</p>
            </div>
            <div className="md:col-span-8">
              <h3 className="text-xl font-light uppercase tracking-tight text-text-ondark md:text-2xl">
                {education.institution}
              </h3>
              <p className="mt-3 text-[15px] text-text-muted">{education.degree}</p>
              <p className="mt-1 text-[15px] text-text-muted">{education.school}</p>
              <p className="mt-3 text-[11px] uppercase tracking-label text-text-muted">
                {education.period}
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
