import { personalInfo } from "@/lib/data";
import {
  GitHubIcon,
  LinkedInIcon,
  MailIcon,
} from "@/components/ui/Icon";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border">
      <div className="container-content flex flex-col items-start justify-between gap-6 py-10 sm:flex-row sm:items-center">
        <div className="flex flex-col gap-1">
          <span className="font-mono text-sm text-foreground">
            {personalInfo.name}
          </span>
          <span className="font-mono text-2xs uppercase tracking-[0.18em] text-muted">
            © {year} · Backend Developer · Construido con Next.js & Tailwind CSS
          </span>
        </div>

        <div className="flex items-center gap-2">
          <SocialLink
            href={`mailto:${personalInfo.email}`}
            label="Email"
            icon={<MailIcon size={16} />}
          />
          <SocialLink
            href={personalInfo.github}
            label="GitHub"
            external
            icon={<GitHubIcon size={16} />}
          />
          <SocialLink
            href={personalInfo.linkedin}
            label="LinkedIn"
            external
            icon={<LinkedInIcon size={16} />}
          />
        </div>
      </div>
    </footer>
  );
}

type SocialLinkProps = {
  href: string;
  label: string;
  icon: React.ReactNode;
  external?: boolean;
};

function SocialLink({ href, label, icon, external = false }: SocialLinkProps) {
  return (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      aria-label={label}
      className="grid h-9 w-9 place-items-center rounded-md border border-border text-muted transition-colors hover:border-accent/40 hover:text-accent"
    >
      {icon}
    </a>
  );
}
