import React, { useState, useMemo } from "react";
import { User, Plus, FileText } from "lucide-react";
import ComplaintModal from "./CompaintForm";
import { userComplaints } from "../sapmle_data/UserDash_data";
import { useNavigate } from "react-router-dom";

const App = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const userName = "nandini sharma";
  const navigate = useNavigate();

  // Simple stats from complaint data
  const { total, active, resolved } = useMemo(() => {
    const total = userComplaints.length;
    const resolved = userComplaints.filter(
      (c) => c.status?.toLowerCase() === "resolved"
    ).length;
    const active = total - resolved;
    return { total, active, resolved };
  }, []);

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-sky-200 via-white to-indigo-200 font-sans overflow-hidden">
      {/* Background effects */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 -left-20 h-80 w-80 bg-sky-300/80 blur-[90px] rounded-full animate-pulse" />
        <div className="absolute top-40 -right-24 h-96 w-96 bg-indigo-300/80 blur-[100px] rounded-full animate-[pulse_4s_ease-in-out_infinite]" />
        <div className="absolute bottom-[-4rem] left-1/3 h-80 w-80 bg-cyan-200/80 blur-[95px] rounded-full" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.95),_transparent_60%)]" />
      </div>

      <div className="relative z-10">
        {/* Navbar */}
        <header className="sticky top-0 z-30 backdrop-blur-2xl bg-white/70 border-b border-white/60 shadow-[0_10px_40px_rgba(15,23,42,0.12)]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 sm:py-4 flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
            {/* Left: Logo + Branding */}
            <div className="flex items-center gap-3 sm:gap-4">
              <div className="h-11 w-11 rounded-2xl bg-gradient-to-br from-sky-500 via-blue-500 to-indigo-500 flex items-center justify-center text-xs font-bold text-white shadow-[0_10px_30px_rgba(59,130,246,0.6)]">
                CMS
              </div>
              <div className="flex flex-col">
                <p className="text-base sm:text-lg font-semibold text-slate-900">
                  User Dashboard
                </p>
                <p className="text-xs sm:text-sm text-slate-600">
                  Welcome back,{" "}
                  <span className="font-medium capitalize">{userName}</span>
                </p>
              </div>
            </div>

            {/* Right: Actions */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2 sm:gap-3 md:gap-4">
              <button
                className="flex items-center justify-center px-4 py-2 text-sm font-semibold rounded-xl shadow-md bg-gradient-to-r from-sky-500 via-blue-500 to-indigo-500 text-white hover:from-sky-600 hover:via-blue-600 hover:to-indigo-600 transition w-full sm:w-auto"
                onClick={() => setIsModalOpen(true)}
              >
                <Plus className="w-4 h-4 mr-2" />
                New Complaint
              </button>

              <button
                onClick={() => navigate("/User/Profile")}
                className="flex items-center justify-center p-2 text-slate-600 hover:text-sky-600 hover:bg-sky-50 border border-transparent hover:border-sky-100 rounded-full transition w-10 h-10 self-center"
              >
                <User className="w-5 h-5" />
              </button>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 space-y-6 sm:space-y-8">
          {/* Hero / Overview Card */}
          <section className="relative rounded-3xl border border-white/70 bg-gradient-to-r from-sky-50/90 via-white/90 to-indigo-50/90 shadow-[0_20px_70px_rgba(15,23,42,0.18)] backdrop-blur-2xl overflow-hidden p-5 sm:p-6 md:p-7">
            {/* Decorative corner blobs */}
            <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-gradient-to-br from-sky-300/60 to-indigo-300/60 blur-2xl opacity-80" />
            <div className="pointer-events-none absolute -left-20 bottom-0 h-40 w-40 rounded-full bg-gradient-to-tr from-amber-200/70 to-pink-200/70 blur-2xl opacity-80" />

            <div className="relative flex flex-col lg:flex-row gap-6 lg:items-center lg:justify-between">
              {/* Left text */}
              <div className="space-y-3 sm:space-y-4">
                <p className="inline-flex items-center gap-2 rounded-full bg-sky-50 px-3 py-1 text-[11px] font-semibold text-sky-700 border border-sky-100 shadow-sm">
                  <span className="h-2.5 w-2.5 rounded-full bg-emerald-500 animate-pulse" />
                  Your Complaint Overview
                </p>
                <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-slate-900">
                  Track, manage &{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-500 via-blue-500 to-indigo-500">
                    resolve complaints
                  </span>{" "}
                  effortlessly.
                </h1>
                <p className="text-sm sm:text-base text-slate-600 max-w-xl">
                  Raise issues in seconds, monitor progress in real time, and
                  keep everything organized in one clean dashboard.
                </p>
              </div>

              {/* Right stats */}
              <div className="grid grid-cols-3 gap-3 sm:gap-4 min-w-[230px]">
                <div className="rounded-2xl bg-white/90 border border-sky-100 shadow-sm px-3 py-3 flex flex-col items-start">
                  <span className="text-[11px] font-medium text-slate-500">
                    Total
                  </span>
                  <span className="text-xl sm:text-2xl font-bold text-slate-900">
                    {total}
                  </span>
                </div>
                <div className="rounded-2xl bg-sky-50/90 border border-sky-100 shadow-sm px-3 py-3 flex flex-col items-start">
                  <span className="text-[11px] font-medium text-sky-600">
                    Active
                  </span>
                  <span className="text-xl sm:text-2xl font-bold text-sky-700">
                    {active}
                  </span>
                </div>
                <div className="rounded-2xl bg-emerald-50/90 border border-emerald-100 shadow-sm px-3 py-3 flex flex-col items-start">
                  <span className="text-[11px] font-medium text-emerald-600">
                    Resolved
                  </span>
                  <span className="text-xl sm:text-2xl font-bold text-emerald-700">
                    {resolved}
                  </span>
                </div>
              </div>
            </div>
          </section>

          {/* Complaints Section */}
          <section className="space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
              <h2 className="text-lg sm:text-xl font-semibold text-slate-900">
                Your Complaints
              </h2>
              <div className="flex flex-wrap gap-2 text-xs">
                <span className="px-3 py-1 rounded-full bg-white/80 border border-sky-100 text-sky-700 shadow-sm">
                  Total: {total}
                </span>
                <span className="px-3 py-1 rounded-full bg-white/80 border border-emerald-100 text-emerald-700 shadow-sm">
                  Resolved: {resolved}
                </span>
                <span className="px-3 py-1 rounded-full bg-white/80 border border-amber-100 text-amber-700 shadow-sm">
                  Active: {active}
                </span>
              </div>
            </div>

            {userComplaints.length === 0 ? (
              <div className="bg-white/90 border border-white/80 rounded-3xl p-8 sm:p-10 shadow-[0_18px_60px_rgba(15,23,42,0.15)] backdrop-blur-2xl min-h-[260px] flex items-center justify-center">
                <div className="text-center max-w-sm">
                  <FileText className="w-16 h-16 mx-auto text-slate-300 mb-4" />
                  <h3 className="text-lg font-semibold text-slate-700 mb-2">
                    No Complaints Yet
                  </h3>
                  <p className="text-sm text-slate-500 mb-4">
                    You haven&apos;t raised any complaints so far. Start by
                    creating a new one.
                  </p>
                  <button
                    onClick={() => setIsModalOpen(true)}
                    className="inline-flex items-center justify-center px-4 py-2 text-sm font-semibold rounded-xl shadow-md bg-gradient-to-r from-sky-500 via-blue-500 to-indigo-500 text-white hover:from-sky-600 hover:via-blue-600 hover:to-indigo-600 transition"
                  >
                    <Plus className="w-4 h-4 mr-2" />
                    Raise First Complaint
                  </button>
                </div>
              </div>
            ) : (
              <div className="grid gap-4 md:grid-cols-2">
                {userComplaints.map((complaint) => (
                  <div
                    key={complaint.id}
                    className="bg-white/90 border border-white/80 rounded-2xl p-5 shadow-[0_14px_40px_rgba(15,23,42,0.16)] backdrop-blur-xl hover:shadow-[0_20px_55px_rgba(15,23,42,0.2)] hover:-translate-y-[2px] transition cursor-pointer"
                    onClick={() =>
                      navigate(`/User/ComplaintDetail/${complaint.id}`)
                    }
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                      <h3 className="text-base sm:text-lg font-semibold text-slate-900 line-clamp-2">
                        {complaint.title}
                      </h3>

                      <span
                        className={[
                          "inline-flex items-center justify-center px-3 py-1 rounded-full text-[11px] font-semibold border",
                          complaint.status?.toLowerCase() === "resolved"
                            ? "bg-emerald-50 text-emerald-700 border-emerald-100"
                            : "bg-amber-50 text-amber-700 border-amber-100",
                        ].join(" ")}
                      >
                        {complaint.status}
                      </span>
                    </div>

                    <p className="text-slate-600 text-sm mt-2 line-clamp-3">
                      {complaint.description}
                    </p>

                    <div className="mt-3 flex items-center justify-between text-xs text-slate-400">
                      <span>{complaint.date}</span>
                      <span className="italic">Tap to view details</span>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </section>
        </main>

        <ComplaintModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
        />
      </div>
    </div>
  );
};

export default App;
