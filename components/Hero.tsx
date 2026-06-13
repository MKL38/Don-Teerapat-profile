import Image from "next/image";
import { profile } from "@/lib/data";
import CornerBrackets from "./CornerBrackets";

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div className="container-x grid min-h-[100svh] grid-cols-1 items-center gap-12 pb-16 pt-28 md:pt-32 lg:grid-cols-12 lg:gap-8">
        {/* Left — type block */}
        <div className="lg:col-span-7">
          <p className="micro-label animate-fade-in">
            <span>[ Profile ]</span>
            <span className="h-px w-10 bg-divider" />
            <span>{profile.currentPosition}</span>
          </p>

          <h1 className="mt-8 font-light uppercase leading-[0.92] tracking-tightest text-[#1e3a8a] animate-fade-up">
            <span className="block text-[clamp(2.75rem,9vw,7rem)]">
              {profile.firstName}
            </span>
            <span className="block text-[clamp(2.75rem,9vw,7rem)] text-text-muted">
              {profile.lastName}
            </span>
          </h1>

          <p
            className="mt-8 max-w-xl text-base leading-relaxed text-text-muted md:text-lg animate-fade-up"
            style={{ animationDelay: "120ms" }}
          >
            {profile.tagline}
          </p>

          <div
            className="mt-10 flex flex-wrap items-center gap-4 animate-fade-up"
            style={{ animationDelay: "220ms" }}
          >
            <a
              href="#contact"
              className="link-arrow border border-text-ondark px-6 py-3 text-[12px] uppercase tracking-label text-text-ondark transition-colors hover:bg-white hover:text-bg-primary"
            >
              Get in touch ↗
            </a>
            <a
              href="#experience"
              className="link-arrow px-2 py-3 text-[12px] uppercase tracking-label text-text-muted hover:text-text-ondark"
            >
              View experience ↓
            </a>
          </div>
        </div>

        {/* Right — framed portrait */}
        <div className="lg:col-span-5">
          <div
            className="relative aspect-[4/5] w-full animate-fade-in"
            style={{ animationDelay: "200ms" }}
          >
            <Image
              src="/images/blue-dry.png"
              alt={`${profile.name}, ${profile.role}`}
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 40vw"
              className="object-cover contrast-[1.05]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-bg-primary/40 via-transparent to-transparent" />
            <CornerBrackets />
            <span className="absolute bottom-5 left-5 text-[10px] uppercase tracking-label text-text-ondark/80">
              [ BKK · 2025 ]
            </span>
          </div>
        </div>
      </div>

      {/* Scroll cue */}
      <div className="container-x">
        <div className="rule flex items-center justify-between py-5">
          <span className="section-index">001 — 003 · Career Record</span>
          <span className="hidden text-[11px] uppercase tracking-label text-text-muted sm:block">
            Scroll to explore ↓
          </span>
        </div>
      </div>
    </section>
  );
}
