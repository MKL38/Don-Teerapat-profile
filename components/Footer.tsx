import { profile, contact } from "@/lib/data";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-divider">
      <div className="container-x flex flex-col gap-6 py-10 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-[11px] uppercase tracking-label text-text-muted">
          © {year} {profile.name}
        </p>
        <div className="flex flex-wrap gap-x-8 gap-y-3 text-[11px] uppercase tracking-label text-text-muted">
          <a href={`tel:${contact.phoneIntl}`} className="hover:text-text-ondark">
            {contact.phone}
          </a>
          <a href={`mailto:${contact.email}`} className="hover:text-text-ondark">
            Email
          </a>
          <a
            href={contact.linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="link-arrow hover:text-text-ondark"
          >
            LinkedIn ↗
          </a>
          <a href="#top" className="hover:text-text-ondark">
            Back to top ↑
          </a>
        </div>
      </div>
    </footer>
  );
}
