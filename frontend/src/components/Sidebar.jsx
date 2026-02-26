import { Link, useLocation } from "react-router-dom";

export default function Sidebar() {

  const location = useLocation();

  const linkStyle = (path) =>
    `block px-4 py-3 rounded-lg transition ${
      location.pathname === path
        ? "bg-blue-600 text-white"
        : "text-gray-700 hover:bg-gray-200"
    }`;

  return (
    <div className="w-64 bg-white shadow-lg h-screen p-5">

      {/* Title */}
      <h2 className="text-xl font-semibold mb-6 text-gray-800">
        AI Analyst
      </h2>

      {/* Navigation */}
      <nav className="space-y-2">

        <Link to="/" className={linkStyle("/")}>
          Dashboard
        </Link>

        <Link to="/upload" className={linkStyle("/upload")}>
          Upload CSV
        </Link>

        <Link to="/ask-ai" className={linkStyle("/ask-ai")}>
          Ask AI
        </Link>

      </nav>

    </div>
  );
}