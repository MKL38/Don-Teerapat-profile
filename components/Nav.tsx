"use client";

import { useEffect, useState } from "react";
import { profile } from "@/lib/data";

const links = [
  { href: "#profile", label: "Profile" },
  { href: "#experience", label: "Experience" },
  { href: "#expertise", label: "Expertise" },
  { href: "#contact", label: "Contact" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-500 ${
        scrolled ? "bg-bg-primary/85 backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <div className="container-x flex h-16 items-center justify-between md:h-20">
        <a
          href="#top"
          className="text-[13px] uppercase tracking-label text-text-ondark transition-opacity hover:opacity-60"
        >
          {profile.firstName}{" "}
          <span className="text-text-muted">{profile.lastName}</span>
        </a>

        <nav className="hidden items-center gap-9 md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-[11px] uppercase tracking-label text-text-muted transition-colors hover:text-text-ondark"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            className="link-arrow border border-divider px-4 py-2 text-[11px] uppercase tracking-label text-text-ondark hover:bg-white hover:text-bg-primary"
          >
            Get in touch ↗
          </a>
        </nav>

        <button
          type="button"
          aria-label="Toggle navigation"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="text-[11px] uppercase tracking-label text-text-ondark md:hidden"
        >
          {open ? "[ Close ]" : "[ Menu ]"}
        </button>
      </div>

      {open && (
        <nav className="border-t border-divider bg-bg-primary/95 backdrop-blur-md md:hidden">
          <div className="container-x flex flex-col py-4">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="py-3 text-[12px] uppercase tracking-label text-text-muted transition-colors hover:text-text-ondark"
              >
                {link.label}
              </a>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}
