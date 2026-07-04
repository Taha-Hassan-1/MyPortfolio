import { Mail, FileText, Gamepad2 } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './icons';
import { site } from '../data/site';

export default function Hero() {
  const { links } = site;

  return (
    <section id="top" className="relative overflow-hidden">
      {/* Soft glow background */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-0 h-[400px] w-[700px] -translate-x-1/2 rounded-full bg-indigo-600/20 blur-3xl"
      />
      <div className="mx-auto max-w-5xl px-4 py-24 text-center sm:px-6 sm:py-32">
        <p className="mb-4 text-sm font-medium uppercase tracking-widest text-indigo-400">
          {site.tagline}
        </p>
        <h1 className="mx-auto max-w-3xl text-4xl font-extrabold tracking-tight text-white sm:text-6xl">
          Hi, I’m {site.name}
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-slate-400">
          {site.intro}
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
          <a
            href="#projects"
            className="rounded-lg bg-indigo-500 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-indigo-400"
          >
            View Projects
          </a>

          {links.github && (
            <IconLink href={links.github} label="GitHub">
              <GithubIcon size={18} />
            </IconLink>
          )}
          {links.linkedin && (
            <IconLink href={links.linkedin} label="LinkedIn">
              <LinkedinIcon size={18} />
            </IconLink>
          )}
          {links.itch && (
            <IconLink href={links.itch} label="itch.io">
              <Gamepad2 size={18} />
            </IconLink>
          )}
          {links.email && (
            <IconLink href={`mailto:${links.email}`} label="Email">
              <Mail size={18} />
            </IconLink>
          )}
          {links.resume && (
            <IconLink href={links.resume} label="Resume">
              <FileText size={18} />
            </IconLink>
          )}
        </div>
      </div>
    </section>
  );
}

function IconLink({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
}) {
  const external = href.startsWith('http');
  return (
    <a
      href={href}
      aria-label={label}
      title={label}
      {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
      className="flex h-10 w-10 items-center justify-center rounded-lg border border-slate-700 text-slate-300 transition-colors hover:border-slate-500 hover:text-white"
    >
      {children}
    </a>
  );
}
