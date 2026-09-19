import { ArrowRight } from "lucide-react";
import DashboardPreview from "./DashboardPreview";

function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50 to-white">
      {/* Background Blur Effects */}
      <div className="absolute -left-20 top-20 h-72 w-72 rounded-full bg-blue-200 opacity-30 blur-3xl"></div>
      <div className="absolute right-0 top-0 h-96 w-96 rounded-full bg-cyan-200 opacity-20 blur-3xl"></div>

      <div className="relative z-10 mx-auto flex min-h-[90vh] max-w-7xl flex-col items-center gap-16 px-6 py-20 lg:flex-row">
        {/* Left Section */}
        <div className="flex-1">
          <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
            🚀 AI Powered Healthcare Platform
          </span>

          <h1 className="mt-8 text-5xl font-extrabold leading-tight text-slate-900 lg:text-7xl">
            Secure Your
            <span className="block text-blue-600">
              Medical Records
            </span>
            With AI
          </h1>

          <p className="mt-8 max-w-xl text-lg leading-8 text-slate-600">
            Store your medical reports securely, receive AI-powered health
            summaries, manage medicines, and access emergency information
            anytime, anywhere.
          </p>

          {/* Badges */}
          <div className="mt-8 flex flex-wrap gap-3">
            <span className="rounded-full bg-white px-4 py-2 text-sm font-medium shadow">
              🔒 End-to-End Encryption
            </span>

            <span className="rounded-full bg-white px-4 py-2 text-sm font-medium shadow">
              🤖 AI Powered
            </span>

            <span className="rounded-full bg-white px-4 py-2 text-sm font-medium shadow">
              ☁️ Cloud Sync
            </span>
          </div>

          {/* Buttons */}
          <div className="mt-10 flex flex-wrap gap-5">
            <button className="flex items-center gap-2 rounded-xl bg-blue-600 px-7 py-4 font-semibold text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-blue-700 hover:shadow-2xl">
              Get Started
              <ArrowRight size={18} />
            </button>

            <button className="rounded-xl border border-slate-300 bg-white px-7 py-4 font-semibold text-slate-700 transition-all duration-300 hover:bg-slate-100">
              Watch Demo
            </button>
          </div>
        </div>

        {/* Right Section */}
        <div className="flex flex-1 justify-center">
          <DashboardPreview />
        </div>
      </div>
    </section>
  );
}

export default Hero;