import Image from "next/image";
import { profile } from "@/lib/data";
import CornerBrackets from "./CornerBrackets";
import Reveal from "./Reveal";

// Executive portrait tied to a pull-quote with a large decorative opening quote mark.
export default function PullQuote() {
  return (
    <section className="container-x py-20 md:py-28">
      <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-12">
        <Reveal className="md:col-span-5">
          <figure className="relative aspect-[4/5] w-full overflow-hidden">
            <Image
              src="/images/speaking.jpg"
              alt={`${profile.firstName} speaking with stakeholders`}
              fill
              sizes="(max-width: 768px) 100vw, 40vw"
              className="object-cover grayscale contrast-[1.05]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-bg-primary/40 to-transparent" />
            <CornerBrackets />
          </figure>
        </Reveal>

        <Reveal delay={120} className="md:col-span-7">
          <span
            aria-hidden
            className="block font-light leading-none text-text-muted/40"
            style={{ fontSize: "clamp(5rem, 12vw, 9rem)" }}
          >
            &ldquo;
          </span>
          <blockquote className="-mt-6 text-2xl font-light leading-snug tracking-tight text-text-ondark md:text-4xl md:leading-[1.15]">
            Good projects ship when business intent, vendor reality, and the
            customer journey are translated into one clear plan — and held to an
            SLA everyone agrees on.
          </blockquote>
          <p className="mt-8 micro-label">
            [ {profile.firstName} {profile.lastName} ] — {profile.role}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
