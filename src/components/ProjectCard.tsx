import { ExternalLink, Gamepad2, Globe } from 'lucide-react';
import type { Project } from '../types';

const PLACEHOLDER = `${import.meta.env.BASE_URL}images/placeholder.svg`;

export default function ProjectCard({ project }: { project: Project }) {
  const isUnity = project.type === 'unity';

  return (
    <article className="group flex flex-col overflow-hidden rounded-xl border border-slate-800 bg-slate-900/50 transition-colors hover:border-slate-600">
      {/* Thumbnail */}
      <div className="relative aspect-video overflow-hidden bg-slate-800">
        <img
          src={project.image}
          alt={`${project.title} screenshot`}
          loading="lazy"
          onError={(e) => {
            (e.currentTarget as HTMLImageElement).src = PLACEHOLDER;
          }}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <span className="absolute left-3 top-3 flex items-center gap-1.5 rounded-full bg-slate-950/80 px-2.5 py-1 text-xs font-medium text-slate-200 backdrop-blur">
          {isUnity ? <Gamepad2 size={13} /> : <Globe size={13} />}
          {isUnity ? 'Unity' : 'Web'}
        </span>
      </div>

      {/* Body */}
      <div className="flex flex-1 flex-col p-5">
        <div className="mb-2 flex items-baseline justify-between gap-2">
          <h3 className="text-lg font-semibold text-white">{project.title}</h3>
          {project.year && (
            <span className="shrink-0 text-xs text-slate-500">{project.year}</span>
          )}
        </div>

        <p className="mb-4 flex-1 text-sm leading-relaxed text-slate-400">
          {project.description}
        </p>

        {/* Tags */}
        <div className="mb-4 flex flex-wrap gap-1.5">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-md bg-slate-800 px-2 py-0.5 text-xs font-medium text-slate-300"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex flex-wrap gap-2">
          {project.links.map((link, i) => (
            <a
              key={link.url + i}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-sm font-medium transition-colors ${
                i === 0
                  ? 'bg-indigo-500 text-white hover:bg-indigo-400'
                  : 'border border-slate-700 text-slate-300 hover:border-slate-500 hover:text-white'
              }`}
            >
              {link.label}
              <ExternalLink size={13} />
            </a>
          ))}
        </div>
      </div>
    </article>
  );
}
