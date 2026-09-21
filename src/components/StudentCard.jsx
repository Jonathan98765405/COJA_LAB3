export default function StudentCard({ name, program, year, email }) {
  const initials = name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2);

  return (
    <article className="flex items-start gap-4 rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-indigo-100 text-lg font-semibold text-indigo-800">
        {initials}
      </div>
      <div className="min-w-0">
        <h3 className="text-lg font-semibold text-slate-900">{name}</h3>
        <p className="text-sm text-slate-600">{program}</p>
        <p className="mt-1 text-sm font-medium text-amber-700">{year}</p>
        <p className="mt-2 truncate text-sm text-slate-500">{email}</p>
      </div>
    </article>
  );
}