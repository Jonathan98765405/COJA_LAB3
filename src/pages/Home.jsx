import { Link } from "react-router-dom";
import PageHeader from "../components/PageHeader.jsx";
import { students, courses } from "../data/data.js";

export default function Home() {
  return (
    <section>
      <PageHeader
        title="Welcome to the Student Portal"
        subtitle="Look up classmates, browse the courses on offer this term, and find out more about how the portal works."
      />
      <div className="grid gap-6 sm:grid-cols-2">
        <Link to="/students" className="rounded-xl bg-white p-6 shadow-sm ring-1 ring-slate-200 transition hover:ring-indigo-400">
          <p className="text-4xl font-bold text-indigo-800">{students.length}</p>
          <p className="mt-1 font-medium">Enrolled students</p>
          <p className="mt-2 text-sm text-slate-500">View the student directory</p>
        </Link>
        <Link to="/courses" className="rounded-xl bg-white p-6 shadow-sm ring-1 ring-slate-200 transition hover:ring-indigo-400">
          <p className="text-4xl font-bold text-indigo-800">{courses.length}</p>
          <p className="mt-1 font-medium">Available courses</p>
          <p className="mt-2 text-sm text-slate-500">Browse the course list</p>
        </Link>
      </div>
    </section>
  );
}