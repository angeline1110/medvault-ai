function LandingPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      {/* Navbar */}
      <nav className="flex items-center justify-between px-8 py-5">
        <h1 className="text-2xl font-bold text-blue-700">
          MedVault AI
        </h1>

        <div className="space-x-4">
          <button className="text-slate-700 hover:text-blue-700 transition">
            Login
          </button>

          <button className="rounded-xl bg-blue-600 px-5 py-2 text-white hover:bg-blue-700 transition">
            Sign Up
          </button>
        </div>
      </nav>

      {/* Hero */}
      <section className="mx-auto flex max-w-7xl flex-col items-center px-8 py-24 text-center">
        <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-700">
          AI Powered Digital Healthcare
        </span>

        <h1 className="mt-8 text-6xl font-extrabold leading-tight text-slate-900">
          Your Health.
          <br />
          Securely Stored.
          <br />
          Instantly Accessible.
        </h1>

        <p className="mt-8 max-w-2xl text-lg text-slate-600">
          Store medical records securely, receive AI-powered health summaries,
          manage medicines, and access emergency information anytime.
        </p>

        <div className="mt-10 flex gap-5">
          <button className="rounded-xl bg-blue-600 px-8 py-4 font-semibold text-white hover:bg-blue-700">
            Get Started
          </button>

          <button className="rounded-xl border border-slate-300 px-8 py-4 font-semibold hover:bg-slate-100">
            Learn More
          </button>
        </div>
      </section>
    </div>
  );
}

export default LandingPage;