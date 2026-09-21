import PageHeader from "../components/PageHeader.jsx";
import CourseCard from "../components/CourseCard.jsx";
import { courses } from "../data/data.js";

export default function Courses() {
  return (
    <section>
      <PageHeader title="Courses" subtitle="Courses offered this term, with schedules and instructors." />
      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {courses.map((c) => (
          <CourseCard key={c.id} {...c} />
        ))}
      </div>
    </section>
  );
}