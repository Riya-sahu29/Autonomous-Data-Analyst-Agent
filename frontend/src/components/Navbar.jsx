import { Link, useLocation } from "react-router-dom";

export default function Navbar() {

  const location = useLocation();

  const linkStyle = (path) =>
    `transition duration-200 hover:text-blue-200 ${
      location.pathname === path ? "text-blue-200 font-semibold" : ""
    }`;

  return (
    <nav className="bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow-lg">

      <div className="max-w-7xl mx-auto px-8 py-4 flex justify-between items-center">

        {/* Logo */}
        <Link to="/" className="text-2xl font-semibold tracking-wide hover:text-blue-200">
          Autonomous Data Analyst
        </Link>

        {/* Navigation Links */}
        <div className="flex space-x-8 text-sm font-medium">

          <Link to="/" className={linkStyle("/")}>
            Dashboard
          </Link>

          <Link to="/upload" className={linkStyle("/upload")}>
            Upload
          </Link>

          <Link to="/ask-ai" className={linkStyle("/ask-ai")}>
            Ask AI
          </Link>

        </div>

      </div>

    </nav>
  );
}