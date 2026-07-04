export type Filter = 'all' | 'unity' | 'web';

const options: { value: Filter; label: string }[] = [
  { value: 'all', label: 'All' },
  { value: 'unity', label: 'Unity Games' },
  { value: 'web', label: 'Web' },
];

export default function FilterBar({
  active,
  onChange,
  counts,
}: {
  active: Filter;
  onChange: (f: Filter) => void;
  counts: Record<Filter, number>;
}) {
  return (
    <div className="mb-8 flex flex-wrap justify-center gap-2">
      {options.map((opt) => (
        <button
          key={opt.value}
          type="button"
          onClick={() => onChange(opt.value)}
          className={`rounded-full px-4 py-1.5 text-sm font-medium transition-colors ${
            active === opt.value
              ? 'bg-indigo-500 text-white'
              : 'border border-slate-700 text-slate-400 hover:border-slate-500 hover:text-white'
          }`}
        >
          {opt.label}
          <span className="ml-1.5 opacity-60">{counts[opt.value]}</span>
        </button>
      ))}
    </div>
  );
}
