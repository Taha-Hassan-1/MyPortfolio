import { site } from '../data/site';

export default function About() {
  return (
    <section id="about" className="border-t border-slate-800/60">
      <div className="mx-auto max-w-3xl px-4 py-20 sm:px-6">
        <h2 className="text-3xl font-bold tracking-tight text-white">About</h2>
        <p className="mt-6 text-lg leading-relaxed text-slate-400">{site.about}</p>

        <h3 className="mt-10 text-sm font-semibold uppercase tracking-widest text-slate-500">
          Skills &amp; Tools
        </h3>
        <div className="mt-4 flex flex-wrap gap-2">
          {site.skills.map((skill) => (
            <span
              key={skill}
              className="rounded-lg border border-slate-700 bg-slate-900/50 px-3 py-1.5 text-sm font-medium text-slate-300"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
