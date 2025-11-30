import React, { useState } from "react";
import { UserCog, FileText, LogOut } from "lucide-react";
import { complaintStats, complaints } from "../sapmle_data/adminDash_data";
import { useNavigate } from "react-router-dom";

const FILTERS = [
  { id: "all", label: "All" },
  { id: "open", label: "Open" },
  { id: "in_progress", label: "In Progress" },
  { id: "resolved", label: "Resolved" },
  { id: "closed", label: "Closed" },
];

const App = () => {
  const navigate = useNavigate();
  const userName = "Akash sharma";
  const [activeFilter, setActiveFilter] = useState("open");

  const filteredComplaints =
    activeFilter === "all"
      ? complaints
      : complaints.filter((c) => c.status === activeFilter);

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-sky-100 via-white to-indigo-100 font-sans overflow-hidden">
      {/* background blobs */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-16 left-1/4 h-44 w-44 rounded-full bg-sky-200/70 blur-3xl animate-pulse" />
        <div className="absolute top-24 right-10 h-52 w-52 rounded-full bg-indigo-200/70 blur-3xl animate-[pulse_5s_ease-in-out_infinite]" />
        <div className="absolute bottom-8 left-8 h-44 w-44 rounded-full bg-cyan-200/70 blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_10%_20%,rgba(255,255,255,0.96)_0,transparent_40%),radial-gradient(circle_at_80%_10%,rgba(191,219,254,0.9)_0,transparent_45%),radial-gradient(circle_at_20%_80%,rgba(221,214,254,0.75)_0,transparent_45%)] opacity-80" />
      </div>

      <div className="relative z-10">
        {/* Header */}
        <header className="bg-white/80 backdrop-blur-xl border-b border-white/70 shadow-[0_14px_45px_rgba(15,23,42,0.16)]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 sm:py-4 flex flex-col md:flex-row md:items-center md:justify-between gap-3">
            <div className="flex items-center gap-3 sm:gap-4">
              <div className="h-11 w-11 rounded-2xl bg-gradient-to-br from-sky-500 via-blue-500 to-indigo-500 flex items-center justify-center text-xs font-bold text-white shadow-[0_10px_30px_rgba(59,130,246,0.6)]">
                CMS
              </div>
              <div>
                <h1 className="text-xl font-semibold text-slate-900">
                  Admin Dashboard
                </h1>
                <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
                  Welcome, <span className="capitalize">{userName}</span>
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <button
                className="p-2 text-slate-500 hover:text-sky-600 hover:bg-sky-50 border border-transparent hover:border-sky-100 rounded-full transition "
                onClick={() => navigate("/Admin/Profile")}
                aria-label="Admin Profile"
              >
                <UserCog className="w-6 h-6 text-blue-500" />
              </button>
               <button
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-[11px] font-medium text-rose-600 border border-rose-100 rounded-full bg-rose-50/80 hover:bg-rose-100 transition"
              onClick={() => navigate("/Home")}
            >
              <LogOut className="w-3.5 h-3.5" />
              Logout
            </button>
            </div>
          </div>
        </header>

        <main className="max-w-7xl mx-auto p-4 sm:p-6 lg:p-8">
         
<section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 mb-8">
  {complaintStats.map((stat) => (
    <div
      key={stat.id}
      className="relative flex items-center justify-between p-5 rounded-2xl shadow-[0_18px_60px_rgba(15,23,42,0.18)] backdrop-blur-xl transition-all duration-200 hover:-translate-y-[3px] hover:shadow-[0_26px_90px_rgba(15,23,42,0.24)] border border-white/30"
    >
      {/* Darker Matte Background Based on Type */}
      <div
        className={`absolute inset-0 -z-10 rounded-2xl ${
          stat.id === 'all'
            ? 'bg-[rgba(166,201,255,0.85)]'       // richer blue
            : stat.id === 'open'
            ? 'bg-[rgba(135,175,255,0.85)]'      // deep blue pastel
            : stat.id === 'in_progress'
            ? 'bg-[rgba(255,179,133,0.85)]'     // deeper warm orange
            : stat.id === 'resolved'
            ? 'bg-[rgba(165,225,183,0.85)]'     // richer green
            : 'bg-[rgba(186,194,203,0.85)]'     // stronger gray
        }`}
      />

      {/* Title & Value */}
      <div className="relative flex flex-col">
        <span className="text-[11px] font-semibold uppercase tracking-wide text-slate-700">
          {stat.label}
        </span>
        <span className="text-3xl font-extrabold mt-1 text-slate-900">
          {stat.count}
        </span>
      </div>

      {/* Icon Bubble — high contrast */}
      <div
        className={`relative p-3 rounded-xl shadow-md ${
          stat.id === 'all'
            ? 'bg-blue-700'
            : stat.id === 'open'
            ? 'bg-blue-800'
            : stat.id === 'in_progress'
            ? 'bg-orange-600'
            : stat.id === 'resolved'
            ? 'bg-green-600'
            : 'bg-slate-800'
        }`}
      >
        <stat.icon className="w-6 h-6 text-white" />
      </div>
    </div>
  ))}
</section>



          {/* Filters row */}
          <section className="mb-4">
            <div className="inline-flex flex-wrap gap-2 bg-white/85 backdrop-blur-xl border border-white/80 rounded-2xl px-2 py-2 shadow-[0_10px_35px_rgba(15,23,42,0.16)]">
              {FILTERS.map((filter) => (
                <button
                  key={filter.id}
                  className={`px-4 py-1.5 rounded-xl text-xs sm:text-sm font-medium transition border ${
                    activeFilter === filter.id
                      ? "bg-gradient-to-br from-sky-500 to-blue-500 to text-white border-blue-500 shadow-sm"
                      : "bg-white/90 text-slate-700 border-slate-200 hover:bg-slate-50"
                  }`}
                  onClick={() => setActiveFilter(filter.id)}
                >
                  {filter.label}
                </button>
              ))}
            </div>
          </section>

          {/* Complaints list – FUTURISTIC CARDS */}
          <section className="space-y-4">
            {filteredComplaints.length === 0 ? (
              <div className="flex items-center justify-center bg-white/90 border border-white/80 rounded-2xl p-10 shadow-[0_18px_60px_rgba(15,23,42,0.16)] backdrop-blur-xl">
                <div className="text-center">
                  <FileText className="w-16 h-16 mx-auto text-slate-300 mb-4" />
                  <h2 className="text-lg font-semibold text-slate-700 mb-2">
                    No Complaints Found
                  </h2>
                  <p className="text-slate-500 text-sm">
                    No complaints match the current filter.
                  </p>
                </div>
              </div>
            ) : (
              filteredComplaints.map((complaint) => (
                <article
                  key={complaint.id}
                  className="group flex items-start justify-between bg-white/95 border border-white/80 rounded-2xl px-5 sm:px-6 py-4 shadow-[0_14px_45px_rgba(15,23,42,0.16)] backdrop-blur-xl cursor-pointer transition-transform transition-shadow duration-200 hover:-translate-y-[3px] hover:border-sky-100 hover:shadow-[0_24px_80px_rgba(15,23,42,0.22)]"
                  onClick={() => {
                    navigate(`/Admin/ComplainDetail/${complaint.id}`);
                  }}
                >
                  {/* subtle left accent bar */}
                  <div className="absolute left-0 top-3 bottom-3 w-[3px] rounded-full bg-gradient-to-b from-sky-400/70 via-indigo-400/70 to-sky-400/40 opacity-0 group-hover:opacity-100 transition-opacity" />

                  <div className="pr-4 relative">
                    <div className="flex items-center gap-3 mb-1">
                      <h3 className="text-sm sm:text-base font-semibold text-slate-900">
                        {complaint.title}
                      </h3>
                      <span className="px-3 py-1 text-[11px] font-semibold rounded-full bg-sky-50 text-sky-700 uppercase tracking-wide border border-sky-100">
                        {complaint.statusLabel}
                      </span>
                    </div>

                    <p className="text-xs sm:text-sm text-slate-500">
                      <span className="font-medium text-slate-700">
                        Category:
                      </span>{" "}
                      {complaint.category}
                      <span className="mx-3 text-slate-400">•</span>
                      <span className="font-medium text-slate-700">
                        Employee:
                      </span>{" "}
                      {complaint.employee}
                    </p>

                    <p className="mt-2 text-sm text-slate-600">
                      {complaint.description}
                    </p>
                  </div>

                  <div className="pt-1 text-right">
                    <p className="text-[11px] text-slate-400 whitespace-nowrap">
                      {complaint.date}
                    </p>
                  </div>
                </article>
              ))
            )}
          </section>
        </main>
      </div>
    </div>
  );
};

export default App;
