import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <section className="py-16 text-center">
      <h1 className="text-3xl font-bold">Page not found</h1>
      <p className="mt-2 text-slate-600">That address doesn't match any page in the portal.</p>
      <Link to="/" className="mt-6 inline-block rounded-md bg-indigo-800 px-4 py-2 text-white hover:bg-indigo-700">
        Go to Home
      </Link>
    </section>
  );
}