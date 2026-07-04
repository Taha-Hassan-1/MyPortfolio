import { useMemo, useState } from 'react';
import { projects } from '../data/projects';
import ProjectCard from './ProjectCard';
import FilterBar, { type Filter } from './FilterBar';

export default function ProjectGrid() {
  const [filter, setFilter] = useState<Filter>('all');

  const counts = useMemo(
    () => ({
      all: projects.length,
      unity: projects.filter((p) => p.type === 'unity').length,
      web: projects.filter((p) => p.type === 'web').length,
    }),
    [],
  );

  const visible = useMemo(
    () =>
      filter === 'all' ? projects : projects.filter((p) => p.type === filter),
    [filter],
  );

  return (
    <section id="projects" className="border-t border-slate-800/60">
      <div className="mx-auto max-w-5xl px-4 py-20 sm:px-6">
        <div className="mb-8 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white">Projects</h2>
          <p className="mt-2 text-slate-400">
            A selection of games and web apps I’ve built.
          </p>
        </div>

        <FilterBar active={filter} onChange={setFilter} counts={counts} />

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {visible.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>

        {visible.length === 0 && (
          <p className="py-12 text-center text-slate-500">No projects here yet.</p>
        )}
      </div>
    </section>
  );
}
