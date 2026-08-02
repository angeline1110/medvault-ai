import { ShieldPlus } from "lucide-react";

function Navbar() {
  return (
    <nav className="sticky top-0 z-50 border-b border-slate-200 bg-white/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">

        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="rounded-xl bg-blue-600 p-2 text-white">
            <ShieldPlus size={24} />
          </div>

          <div>
            <h1 className="text-xl font-bold text-slate-900">
              MedVault AI
            </h1>

            <p className="text-xs text-slate-500">
              Secure Healthcare Platform
            </p>
          </div>
        </div>

        {/* Navigation */}
        <div className="hidden items-center gap-8 font-medium text-slate-600 md:flex">
          <a href="#" className="hover:text-blue-600">
            Features
          </a>

          <a href="#" className="hover:text-blue-600">
            About
          </a>

          <a href="#" className="hover:text-blue-600">
            Contact
          </a>
        </div>

        {/* Buttons */}
        <div className="flex gap-3">
          <button className="rounded-lg px-5 py-2 hover:bg-slate-100">
            Login
          </button>

          <button className="rounded-xl bg-blue-600 px-5 py-2 text-white transition hover:bg-blue-700">
            Get Started
          </button>
        </div>

      </div>
    </nav>
  );
}

export default Navbar;