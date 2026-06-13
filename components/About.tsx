import Image from "next/image";
import { profile, facts } from "@/lib/data";
import Reveal from "./Reveal";
import CornerBrackets from "./CornerBrackets";

export default function About() {
  return (
    <section id="profile" className="container-x scroll-mt-24 py-20 md:py-28">
      {/* Two-column split: label left, content right */}
      <div className="grid grid-cols-1 gap-10 md:grid-cols-12">
        <div className="md:col-span-4">
          <Reveal>
            <p className="micro-label">[ 000 ] — Profile</p>
            <h2 className="mt-6 text-3xl font-light uppercase tracking-tighter text-text-ondark md:text-4xl">
              Who I am
            </h2>
          </Reveal>
        </div>

        <div className="md:col-span-8">
          <Reveal>
            <p className="text-xl font-light leading-relaxed text-text-ondark md:text-2xl">
              {profile.intro}
            </p>
          </Reveal>

          <Reveal delay={120}>
            <dl className="mt-12 grid grid-cols-2 gap-x-6 gap-y-8 sm:grid-cols-4">
              {facts.map((f) => (
                <div key={f.label} className="border-t border-divider pt-4">
                  <dt className="text-[10px] uppercase tracking-label text-text-muted">
                    {f.label}
                  </dt>
                  <dd className="mt-2 text-sm text-text-ondark">{f.value}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </div>

      {/* Full-bleed cinematic photo for pacing */}
      <Reveal delay={80} className="mt-20 md:mt-28">
        <figure className="relative aspect-[16/9] w-full overflow-hidden md:aspect-[21/9]">
          <Image
            src="/images/presenting.jpg"
            alt={`${profile.firstName} presenting during a CP leadership session`}
            fill
            sizes="100vw"
            className="object-cover object-center grayscale contrast-[1.05]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-bg-primary/70 via-bg-primary/10 to-transparent" />
          <CornerBrackets />
          <figcaption className="absolute bottom-6 left-6 max-w-md text-[11px] uppercase tracking-label text-text-ondark/85">
            On-ground — leading requirement workshops & stakeholder alignment.
          </figcaption>
        </figure>
      </Reveal>
    </section>
  );
}
