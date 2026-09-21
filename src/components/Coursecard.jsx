export default function CourseCard({ code, title, instructor, units, schedule }) {
  return (
    <article className="flex flex-col rounded-xl border border-slate-200 border-t-4 border-t-indigo-700 bg-white p-5 shadow-sm">
      <div className="flex items-center justify-between">
        <span className="rounded bg-indigo-50 px-2 py-1 text-xs font-semibold text-indigo-800">
          {code}
        </span>
        <span className="text-sm text-slate-500">
          {units} {units === 1 ? "unit" : "units"}
        </span>
      </div>
      <h3 className="mt-3 text-lg font-semibold text-slate-900">{title}</h3>
      <p className="mt-1 text-sm text-slate-600">{instructor}</p>
      <p className="mt-3 text-sm text-slate-500">{schedule}</p>
    </article>
  );
}