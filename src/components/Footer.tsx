import { Mail, Gamepad2 } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './icons';
import { site } from '../data/site';

export default function Footer() {
  const { links } = site;
  return (
    <footer className="border-t border-slate-800/60">
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-4 px-4 py-10 sm:flex-row sm:justify-between sm:px-6">
        <p className="text-sm text-slate-500">
          © {new Date().getFullYear()} {site.name}. Built with React, Vite &amp; Tailwind.
        </p>
        <div className="flex gap-4 text-slate-400">
          {links.github && (
            <a href={links.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="hover:text-white">
              <GithubIcon size={18} />
            </a>
          )}
          {links.linkedin && (
            <a href={links.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="hover:text-white">
              <LinkedinIcon size={18} />
            </a>
          )}
          {links.itch && (
            <a href={links.itch} target="_blank" rel="noopener noreferrer" aria-label="itch.io" className="hover:text-white">
              <Gamepad2 size={18} />
            </a>
          )}
          {links.email && (
            <a href={`mailto:${links.email}`} aria-label="Email" className="hover:text-white">
              <Mail size={18} />
            </a>
          )}
        </div>
      </div>
    </footer>
  );
}
