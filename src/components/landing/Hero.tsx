import { ArrowRight } from "lucide-react";

function Hero() {
  return (
    <section className="bg-slate-50">
      <div className="mx-auto flex min-h-[85vh] max-w-7xl flex-col items-center justify-center px-6 text-center">

        <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
          AI Powered Healthcare Platform
        </span>

        <h1 className="mt-8 text-5xl font-extrabold leading-tight text-slate-900 md:text-7xl">
          Secure Your
          <span className="block text-blue-600">
            Medical Records
          </span>
          With AI
        </h1>

        <p className="mt-8 max-w-2xl text-lg leading-8 text-slate-600">
          Store health records securely, receive AI-generated medical summaries,
          manage medicines, and instantly access emergency information from
          anywhere.
        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-5">

          <button className="flex items-center gap-2 rounded-xl bg-blue-600 px-7 py-4 font-semibold text-white transition hover:scale-105 hover:bg-blue-700">
            Get Started
            <ArrowRight size={18} />
          </button>

          <button className="rounded-xl border border-slate-300 px-7 py-4 font-semibold hover:bg-slate-100">
            Watch Demo
          </button>

        </div>

      </div>
    </section>
  );
}

export default Hero;