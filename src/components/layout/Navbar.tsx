import { ShieldCheck, Menu } from "lucide-react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="sticky top-0 z-50 border-b border-slate-200/50 bg-white/80 backdrop-blur-lg">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3">
          <div className="rounded-xl bg-blue-600 p-2 text-white shadow-md">
            <ShieldCheck size={24} />
          </div>

          <div>
            <h1 className="text-xl font-bold text-slate-900">
              MedVault AI
            </h1>
            <p className="text-xs text-slate-500">
              Secure Healthcare
            </p>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-8 md:flex">
          <a
            href="#features"
            className="font-medium text-slate-600 transition hover:text-blue-600"
          >
            Features
          </a>

          <a
            href="#about"
            className="font-medium text-slate-600 transition hover:text-blue-600"
          >
            About
          </a>

          <a
            href="#contact"
            className="font-medium text-slate-600 transition hover:text-blue-600"
          >
            Contact
          </a>
        </div>

        {/* Right Buttons */}
        <div className="hidden items-center gap-3 md:flex">
          <Link
            to="/login"
            className="rounded-xl px-5 py-2 font-medium text-slate-700 transition hover:bg-slate-100"
          >
            Login
          </Link>

          <Link
            to="/register"
            className="rounded-xl bg-blue-600 px-5 py-2 font-medium text-white shadow transition hover:bg-blue-700"
          >
            Sign Up
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button className="rounded-lg p-2 transition hover:bg-slate-100 md:hidden">
          <Menu size={24} />
        </button>
      </div>
    </nav>
  );
}

export default Navbar;