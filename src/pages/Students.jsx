import PageHeader from "../components/PageHeader.jsx";
import StudentCard from "../components/StudentCard.jsx";
import { students } from "../data/data.js";

export default function Students() {
  return (
    <section>
      <PageHeader title="Students" subtitle="Everyone currently enrolled in the portal." />
      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {students.map((s) => (
          <StudentCard key={s.id} {...s} />
        ))}
      </div>
    </section>
  );
}