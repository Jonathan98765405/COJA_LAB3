import { NavLink } from "react-router-dom";

const links = [
  { to: "/", label: "Home" },
  { to: "/students", label: "Students" },
  { to: "/courses", label: "Courses" },
  { to: "/about", label: "About" },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-10 border-b-4 border-amber-400 bg-indigo-950 text-white shadow-lg">
      <nav className="mx-auto flex max-w-6xl flex-row items-center justify-between gap-4 px-4 py-3">
        <NavLink to="/" className="flex shrink-0 items-center gap-3">
          <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-amber-400 text-lg font-extrabold text-indigo-950">
            SP
          </span>
          <span className="hidden text-xl font-bold tracking-tight sm:inline">Student Portal</span>
        </NavLink>
        <ul className="flex flex-row items-center gap-1 rounded-full bg-indigo-900/60 p-1">
          {links.map((link) => (
            <li key={link.to}>
              <NavLink
                to={link.to}
                end={link.to === "/"}
                className={({ isActive }) =>
                  `block whitespace-nowrap rounded-full px-3 py-2 text-sm font-semibold transition sm:px-4 ${
                    isActive
                      ? "bg-amber-400 text-indigo-950 shadow"
                      : "text-indigo-100 hover:bg-indigo-800 hover:text-white"
                  }`
                }
              >
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}