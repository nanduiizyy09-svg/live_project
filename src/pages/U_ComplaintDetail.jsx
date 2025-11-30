// src/components/ComplaintDetails.jsx
import React from "react";
import { userComplaints } from "../sapmle_data/UserDash_data";
import { useNavigate, useParams } from "react-router-dom";

// Back arrow icon
const BackArrow = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-5 w-5 mr-2"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M10 19l-7-7m0 0l7-7m-7 7h18"
    />
  </svg>
);

const ComplaintDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const complaint = userComplaints.find((c) => c.id === parseInt(id));

  if (!complaint) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-sky-100 via-white to-indigo-100">
        <div className="px-6 py-4 rounded-2xl bg-white/90 shadow-[0_20px_60px_rgba(15,23,42,0.18)] border border-white/80">
          <p className="font-bold text-slate-800 text-xl">
            Complaint not found.
          </p>
        </div>
      </div>
    );
  }

  const {
    category,
    description,
    submittedDate,
    status,
    submittedBy,
    email,
    lastUpdated,
  } = complaint;

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-sky-100 via-white to-indigo-100">
      {/* background blobs */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-16 left-1/4 h-40 w-40 rounded-full bg-sky-200/70 blur-3xl animate-pulse" />
        <div className="absolute top-24 right-10 h-48 w-48 rounded-full bg-indigo-200/70 blur-3xl animate-[pulse_5s_ease-in-out_infinite]" />
        <div className="absolute bottom-8 left-8 h-40 w-40 rounded-full bg-cyan-200/70 blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_10%_20%,rgba(255,255,255,0.95)_0,transparent_40%),radial-gradient(circle_at_80%_10%,rgba(191,219,254,0.9)_0,transparent_45%),radial-gradient(circle_at_20%_80%,rgba(221,214,254,0.7)_0,transparent_45%)] opacity-80" />
      </div>

      {/* added pt-4 here, so we control top spacing */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-4 pb-10">
        {/* Header Bar */}
        {/* removed mt-4 so no extra white band at the top */}
        <header className="mb-5 flex items-center justify-between bg-white/80 backdrop-blur-xl border border-white/80 rounded-2xl shadow-[0_14px_45px_rgba(15,23,42,0.16)] px-4 sm:px-5 py-3">
          <button
            className="flex items-center text-slate-700 hover:text-sky-600 text-sm font-medium transition"
            onClick={() => {
              navigate("/User/Dashboard");
            }}
          >
            <BackArrow />
            <span>Back</span>
          </button>

          {/* Center title */}
          <div className="flex items-center gap-2 sm:gap-3">
            <div className="hidden sm:flex h-9 w-9 rounded-2xl bg-gradient-to-br from-sky-500 via-blue-500 to-indigo-500 items-center justify-center text-[10px] font-bold text-white shadow-[0_10px_30px_rgba(59,130,246,0.6)]">
              CMS
            </div>
            <div className="text-center sm:text-left">
              <h1 className="text-sm sm:text-base font-semibold text-slate-900">
                Complaint Details
              </h1>
              <p className="hidden sm:block text-[11px] text-slate-500">
                View full context and status for the selected complaint.
              </p>
            </div>
          </div>

          {/* Right status pill */}
          <div className="hidden sm:inline-flex items-center px-3 py-1 rounded-full text-[11px] font-medium border shadow-sm bg-sky-50/90 border-sky-100 text-sky-700">
            {status === "IN PROGRESS" ? "In progress" : "Recorded"}
          </div>
        </header>

        {/* Main content cards */}
        <div className="space-y-4 sm:space-y-5">
          {/* Complaint Details Section */}
          <div className="bg-white/95 p-4 sm:p-5 rounded-2xl shadow-[0_18px_60px_rgba(15,23,42,0.14)] border border-white/80 backdrop-blur-xl transition hover:-translate-y-[2px] hover:shadow-[0_24px_75px_rgba(15,23,42,0.18)]">
            <h3 className="text-lg font-semibold text-slate-900 mb-4 flex items-center gap-2">
              <span className="h-8 w-8 rounded-full bg-sky-50 flex items-center justify-center text-sky-500 text-sm">
                i
              </span>
              <span>Information</span>
            </h3>

            <div className="space-y-4 text-sm sm:text-base">
              <div>
                <h4 className="text-sm font-semibold text-slate-800 mb-1">
                  Category
                </h4>
                <p className="text-slate-600 break-words whitespace-pre-wrap px-3 py-2 rounded-xl bg-slate-50/80 border border-slate-100 inline-block">
                  {category}
                </p>
              </div>

              <div>
                <h4 className="text-sm font-semibold text-slate-800 mb-1">
                  Description
                </h4>
                <p className="text-slate-600 break-words whitespace-pre-wrap leading-relaxed bg-slate-50/70 border border-slate-100 rounded-xl px-3 py-3">
                  {description}
                </p>
              </div>

              <p className="text-xs sm:text-sm text-slate-500 mt-2">
                • Submitted on{" "}
                <span className="font-semibold text-slate-800">
                  {submittedDate}
                </span>
              </p>
            </div>
          </div>

          {/* Updates Section */}
          <div className="bg-white/95 p-4 sm:p-5 rounded-2xl shadow-[0_18px_60px_rgba(15,23,42,0.14)] border border-white/80 backdrop-blur-xl transition hover:-translate-y-[2px] hover:shadow-[0_24px_75px_rgba(15,23,42,0.18)]">
            <h3 className="text-lg font-semibold text-slate-900 mb-4 flex items_center gap-2">
              <span className="h-8 w-8 rounded-full bg-indigo-50 flex items-center justify-center text-indigo-500 text-sm">
                ⟳
              </span>
              <span>Updates</span>
            </h3>

            <div className="space-y-4 text-sm sm:text-base">
              <div>
                <p className="text-sm font-medium text-slate-800 mb-0.5">
                  Status
                </p>
                <p
                  className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold border ${
                    status === "IN PROGRESS"
                      ? "bg-amber-50 text-amber-700 border-amber-200"
                      : "bg-emerald-50 text-emerald-700 border-emerald-200"
                  }`}
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-current mr-2" />
                  {status}
                </p>
              </div>

              <div>
                <p className="text-sm font_medium text-slate-800 mb-1">
                  Submitted By
                </p>
                <p className="text-sm text-slate-700">{submittedBy}</p>
                <p className="text-sm text-slate-500">{email}</p>
              </div>

              <div>
                <p className="text-sm font-medium text-slate-800 mb-1">
                  Last Updated
                </p>
                <p className="text-sm text-slate-700">{lastUpdated}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComplaintDetails;
