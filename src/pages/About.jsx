import PageHeader from "../components/PageHeader.jsx";

export default function About() {
  return (
    <section>
      <PageHeader title="About" />
      <div className="max-w-2xl space-y-4 rounded-xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
        <p>
          The Student Portal is a small React app built to practice routing and reusable
          components. Each page is a route, and the student and course listings are built
          from the same card components used repeatedly.
        </p>
        <p className="text-slate-600">
          Built with React, React Router, and Tailwind CSS.
        </p>
      </div>
    </section>
  );
}