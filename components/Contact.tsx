"use client";

import { useState } from "react";
import { contact, profile } from "@/lib/data";
import CornerBrackets from "./CornerBrackets";

type Copyable = "phone" | "email";

export default function Contact() {
  const [copied, setCopied] = useState<Copyable | null>(null);

  async function copy(key: Copyable, value: string) {
    try {
      if (navigator.clipboard?.writeText) {
        await navigator.clipboard.writeText(value);
      } else {
        // Fallback for non-secure contexts
        const el = document.createElement("textarea");
        el.value = value;
        el.style.position = "fixed";
        el.style.opacity = "0";
        document.body.appendChild(el);
        el.select();
        document.execCommand("copy");
        document.body.removeChild(el);
      }
      setCopied(key);
      window.setTimeout(() => setCopied((c) => (c === key ? null : c)), 2000);
    } catch {
      // Silently ignore — the value is still selectable on the page.
    }
  }

  return (
    <section
      id="contact"
      className="relative scroll-mt-24 border-t border-divider py-20 md:py-32"
    >
      <div className="container-x">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-12">
          {/* Left — heading */}
          <div className="md:col-span-5">
            <p className="micro-label">[ 004 ] — Contact</p>
            <h2 className="mt-6 text-4xl font-light uppercase leading-[0.95] tracking-tightest text-text-ondark md:text-6xl">
              Let&apos;s
              <br />
              work
              <br />
              together
            </h2>
            <p className="mt-8 max-w-sm text-[15px] leading-relaxed text-text-muted">
              Open to project management and business-development roles.
              <br />
              {profile.location}
            </p>
          </div>

          {/* Right — contact channels */}
          <div className="md:col-span-7">
            <div className="border-t border-divider">
              {/* Phone — copy to clipboard */}
              <div className="group flex flex-col gap-4 border-b border-divider py-7 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <p className="text-[10px] uppercase tracking-label text-text-muted">
                    [ 001 ] Mobile
                  </p>
                  <a
                    href={`tel:${contact.phoneIntl}`}
                    className="mt-2 block text-2xl font-light tracking-tight text-text-ondark transition-opacity hover:opacity-70 md:text-3xl"
                  >
                    {contact.phone}
                  </a>
                </div>
                <button
                  type="button"
                  onClick={() => copy("phone", contact.phone)}
                  aria-label="Copy phone number to clipboard"
                  className="link-arrow w-fit border border-divider px-4 py-2 text-[11px] uppercase tracking-label text-text-ondark transition-colors hover:bg-white hover:text-bg-primary"
                >
                  {copied === "phone" ? "[ Copied ✓ ]" : "[ Copy ]"}
                </button>
              </div>

              {/* Email — copy to clipboard */}
              <div className="group flex flex-col gap-4 border-b border-divider py-7 sm:flex-row sm:items-center sm:justify-between">
                <div className="min-w-0">
                  <p className="text-[10px] uppercase tracking-label text-text-muted">
                    [ 002 ] Email
                  </p>
                  <a
                    href={`mailto:${contact.email}`}
                    className="mt-2 block break-all text-2xl font-light tracking-tight text-text-ondark transition-opacity hover:opacity-70 md:text-3xl"
                  >
                    {contact.email}
                  </a>
                </div>
                <button
                  type="button"
                  onClick={() => copy("email", contact.email)}
                  aria-label="Copy email address to clipboard"
                  className="link-arrow w-fit border border-divider px-4 py-2 text-[11px] uppercase tracking-label text-text-ondark transition-colors hover:bg-white hover:text-bg-primary"
                >
                  {copied === "email" ? "[ Copied ✓ ]" : "[ Copy ]"}
                </button>
              </div>

              {/* LinkedIn — external link */}
              <div className="group flex flex-col gap-4 border-b border-divider py-7 sm:flex-row sm:items-center sm:justify-between">
                <div className="min-w-0">
                  <p className="text-[10px] uppercase tracking-label text-text-muted">
                    [ 003 ] LinkedIn
                  </p>
                  <a
                    href={contact.linkedinUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-2 block break-all text-2xl font-light tracking-tight text-text-ondark transition-opacity hover:opacity-70 md:text-3xl"
                  >
                    {contact.linkedin}
                  </a>
                </div>
                <a
                  href={contact.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-arrow w-fit border border-divider px-4 py-2 text-[11px] uppercase tracking-label text-text-ondark transition-colors hover:bg-white hover:text-bg-primary"
                >
                  [ Open ↗ ]
                </a>
              </div>
            </div>

            {/* Primary CTA */}
            <div className="relative mt-10">
              <a
                href={`mailto:${contact.email}`}
                className="link-arrow flex w-full items-center justify-center border border-text-ondark px-6 py-6 text-[13px] uppercase tracking-label text-text-ondark transition-colors hover:bg-white hover:text-bg-primary"
              >
                Send me an email ↗
              </a>
              <CornerBrackets inset={-1} size={16} color="rgba(255,255,255,0.35)" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
