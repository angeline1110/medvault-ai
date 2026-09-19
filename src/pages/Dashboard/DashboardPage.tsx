import {
  Activity,
  CalendarDays,
  FileText,
  HeartPulse,
  Home,
  LogOut,
  Pill,
  ShieldAlert,
  UserRound,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

function DashboardPage() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("access_token");
    navigate("/login");
  };

  return (
    <div className="min-h-screen bg-slate-50">

      {/* Sidebar */}
      <aside className="fixed left-0 top-0 hidden h-screen w-64 border-r border-slate-200 bg-white lg:flex lg:flex-col">

        {/* Logo */}
        <div className="flex h-20 items-center border-b border-slate-100 px-6">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-600 text-white">
              <HeartPulse size={22} />
            </div>

            <div>
              <h1 className="text-lg font-bold text-slate-900">
                MedVault
              </h1>

              <p className="text-xs text-slate-400">
                AI Health Platform
              </p>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex-1 space-y-2 p-4">

          <button className="flex w-full items-center gap-3 rounded-xl bg-blue-50 px-4 py-3 font-medium text-blue-600">
            <Home size={20} />
            Dashboard
          </button>

          <button className="flex w-full items-center gap-3 rounded-xl px-4 py-3 text-slate-600 transition hover:bg-slate-50">
            <FileText size={20} />
            Medical Records
          </button>

          <button className="flex w-full items-center gap-3 rounded-xl px-4 py-3 text-slate-600 transition hover:bg-slate-50">
            <Pill size={20} />
            Medications
          </button>

          <button className="flex w-full items-center gap-3 rounded-xl px-4 py-3 text-slate-600 transition hover:bg-slate-50">
            <CalendarDays size={20} />
            Appointments
          </button>

          <button className="flex w-full items-center gap-3 rounded-xl px-4 py-3 text-slate-600 transition hover:bg-slate-50">
            <Activity size={20} />
            AI Health Insights
          </button>

          <button className="flex w-full items-center gap-3 rounded-xl px-4 py-3 text-slate-600 transition hover:bg-slate-50">
            <UserRound size={20} />
            My Profile
          </button>

        </nav>

        {/* Logout */}
        <div className="border-t border-slate-100 p-4">
          <button
            onClick={handleLogout}
            className="flex w-full items-center gap-3 rounded-xl px-4 py-3 text-slate-600 transition hover:bg-red-50 hover:text-red-600"
          >
            <LogOut size={20} />
            Logout
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="lg:ml-64">

        {/* Top bar */}
        <header className="flex h-20 items-center justify-between border-b border-slate-200 bg-white px-6 lg:px-10">

          <div>
            <p className="text-sm text-slate-500">
              Patient Dashboard
            </p>

            <h2 className="font-semibold text-slate-900">
              My Health
            </h2>
          </div>

          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-100 font-semibold text-blue-600">
            AS
          </div>

        </header>

        {/* Dashboard content */}
        <div className="mx-auto max-w-7xl p-6 lg:p-10">

          {/* Welcome */}
          <section>
            <h1 className="text-3xl font-bold tracking-tight text-slate-900 lg:text-4xl">
              Welcome back, Angeline 👋
            </h1>

            <p className="mt-2 text-slate-500">
              Here's an overview of your health records and upcoming activities.
            </p>
          </section>

          {/* Health Cards */}
          <section className="mt-8 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">

            <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-100">
              <div className="flex items-center justify-between">
                <div className="rounded-xl bg-blue-50 p-3 text-blue-600">
                  <FileText size={22} />
                </div>

                <span className="text-sm text-slate-400">
                  Total
                </span>
              </div>

              <p className="mt-5 text-sm text-slate-500">
                Medical Reports
              </p>

              <p className="mt-1 text-3xl font-bold text-slate-900">
                18
              </p>
            </div>

            <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-100">
              <div className="flex items-center justify-between">
                <div className="rounded-xl bg-emerald-50 p-3 text-emerald-600">
                  <Pill size={22} />
                </div>

                <span className="text-sm text-slate-400">
                  Active
                </span>
              </div>

              <p className="mt-5 text-sm text-slate-500">
                Medications
              </p>

              <p className="mt-1 text-3xl font-bold text-slate-900">
                3
              </p>
            </div>

            <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-100">
              <div className="flex items-center justify-between">
                <div className="rounded-xl bg-purple-50 p-3 text-purple-600">
                  <CalendarDays size={22} />
                </div>

                <span className="text-sm text-slate-400">
                  Upcoming
                </span>
              </div>

              <p className="mt-5 text-sm text-slate-500">
                Appointments
              </p>

              <p className="mt-1 text-3xl font-bold text-slate-900">
                2
              </p>
            </div>

            <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-100">
              <div className="flex items-center justify-between">
                <div className="rounded-xl bg-red-50 p-3 text-red-600">
                  <Activity size={22} />
                </div>

                <span className="text-sm text-slate-400">
                  Status
                </span>
              </div>

              <p className="mt-5 text-sm text-slate-500">
                Health Score
              </p>

              <p className="mt-1 text-3xl font-bold text-slate-900">
                92%
              </p>
            </div>

          </section>

          {/* Main grid */}
          <section className="mt-8 grid gap-6 xl:grid-cols-3">

            {/* Medical Records */}
            <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-100 xl:col-span-2">

              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-lg font-semibold text-slate-900">
                    Recent Medical Records
                  </h2>

                  <p className="mt-1 text-sm text-slate-500">
                    Your latest uploaded health documents
                  </p>
                </div>

                <button className="text-sm font-semibold text-blue-600 hover:text-blue-700">
                  View all
                </button>
              </div>

              <div className="mt-6 space-y-4">

                <div className="flex items-center justify-between rounded-xl bg-slate-50 p-4">
                  <div className="flex items-center gap-4">
                    <div className="rounded-xl bg-blue-100 p-3 text-blue-600">
                      <FileText size={20} />
                    </div>

                    <div>
                      <p className="font-medium text-slate-900">
                        Complete Blood Count
                      </p>

                      <p className="text-sm text-slate-500">
                        Blood Test • July 28, 2026
                      </p>
                    </div>
                  </div>

                  <span className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-medium text-emerald-600">
                    Normal
                  </span>
                </div>

                <div className="flex items-center justify-between rounded-xl bg-slate-50 p-4">
                  <div className="flex items-center gap-4">
                    <div className="rounded-xl bg-purple-100 p-3 text-purple-600">
                      <FileText size={20} />
                    </div>

                    <div>
                      <p className="font-medium text-slate-900">
                        General Health Checkup
                      </p>

                      <p className="text-sm text-slate-500">
                        Consultation • July 15, 2026
                      </p>
                    </div>
                  </div>

                  <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-medium text-blue-600">
                    Reviewed
                  </span>
                </div>

                <div className="flex items-center justify-between rounded-xl bg-slate-50 p-4">
                  <div className="flex items-center gap-4">
                    <div className="rounded-xl bg-amber-100 p-3 text-amber-600">
                      <FileText size={20} />
                    </div>

                    <div>
                      <p className="font-medium text-slate-900">
                        Lipid Profile
                      </p>

                      <p className="text-sm text-slate-500">
                        Blood Test • June 30, 2026
                      </p>
                    </div>
                  </div>

                  <span className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-medium text-emerald-600">
                    Normal
                  </span>
                </div>

              </div>
            </div>

            {/* Upcoming Appointments */}
            <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-100">

              <h2 className="text-lg font-semibold text-slate-900">
                Upcoming Appointments
              </h2>

              <p className="mt-1 text-sm text-slate-500">
                Your next scheduled visits
              </p>

              <div className="mt-6 space-y-4">

                <div className="rounded-xl border border-slate-100 p-4">
                  <div className="flex items-center gap-3">
                    <div className="rounded-lg bg-blue-50 p-2 text-blue-600">
                      <CalendarDays size={18} />
                    </div>

                    <div>
                      <p className="font-medium text-slate-900">
                        General Physician
                      </p>

                      <p className="text-sm text-slate-500">
                        Aug 12 • 10:30 AM
                      </p>
                    </div>
                  </div>
                </div>

                <div className="rounded-xl border border-slate-100 p-4">
                  <div className="flex items-center gap-3">
                    <div className="rounded-lg bg-purple-50 p-2 text-purple-600">
                      <CalendarDays size={18} />
                    </div>

                    <div>
                      <p className="font-medium text-slate-900">
                        Dental Checkup
                      </p>

                      <p className="text-sm text-slate-500">
                        Aug 20 • 3:00 PM
                      </p>
                    </div>
                  </div>
                </div>

              </div>

              <button className="mt-5 w-full rounded-xl border border-slate-200 py-2.5 text-sm font-semibold text-slate-700 transition hover:bg-slate-50">
                View Calendar
              </button>

            </div>

          </section>

          {/* Bottom section */}
          <section className="mt-6 grid gap-6 md:grid-cols-2">

            {/* Medications */}
            <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-100">

              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-lg font-semibold text-slate-900">
                    Current Medications
                  </h2>

                  <p className="mt-1 text-sm text-slate-500">
                    Your active prescriptions
                  </p>
                </div>

                <Pill className="text-emerald-500" size={22} />
              </div>

              <div className="mt-6 space-y-3">

                <div className="flex items-center justify-between rounded-xl bg-slate-50 p-4">
                  <div>
                    <p className="font-medium text-slate-900">
                      Vitamin D3
                    </p>

                    <p className="text-sm text-slate-500">
                      Once daily
                    </p>
                  </div>

                  <span className="text-sm font-medium text-slate-600">
                    Morning
                  </span>
                </div>

                <div className="flex items-center justify-between rounded-xl bg-slate-50 p-4">
                  <div>
                    <p className="font-medium text-slate-900">
                      Omega-3
                    </p>

                    <p className="text-sm text-slate-500">
                      Once daily
                    </p>
                  </div>

                  <span className="text-sm font-medium text-slate-600">
                    Evening
                  </span>
                </div>

              </div>

            </div>

            {/* Emergency Access */}
            <div className="rounded-2xl bg-gradient-to-br from-red-500 to-rose-600 p-6 text-white shadow-sm">

              <div className="flex items-center gap-3">
                <div className="rounded-xl bg-white/20 p-3">
                  <ShieldAlert size={24} />
                </div>

                <div>
                  <h2 className="text-lg font-semibold">
                    Emergency Access
                  </h2>

                  <p className="text-sm text-red-100">
                    Quickly share critical health information
                  </p>
                </div>
              </div>

              <p className="mt-6 text-sm leading-6 text-red-50">
                Generate a secure emergency QR code containing
                your essential medical information for authorized
                healthcare professionals.
              </p>

              <button className="mt-5 rounded-xl bg-white px-5 py-2.5 text-sm font-semibold text-red-600 transition hover:bg-red-50">
                Generate Emergency QR
              </button>

            </div>

          </section>

        </div>
      </main>
    </div>
  );
}

export default DashboardPage;