// src/components/AdminComplaintDetails.jsx

import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { complaints } from "../sapmle_data/adminDash_data";

// Helper component for the back arrow
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

const AdminComplaintDetails = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const complaint = complaints.find((c) => c.id === parseInt(id));

  // 1. State for Admin Actions
  const [newStatus, setNewStatus] = useState(
    complaint ? complaint.status : "open"
  );
  const [adminNote, setAdminNote] = useState("");

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
    title,
    category,
    description,
    date,
    statusLabel,
    employee,
    email,
    lastUpdated,
  } = complaint;

  // 2. Handler for Status Update button
  const handleStatusUpdate = (e) => {
    e.preventDefault();

    console.log(`Updating Complaint #${complaint.id}:`);
    console.log(`New Status: ${newStatus}`);
    console.log(`Admin Note: ${adminNote}`);

    alert(`Status updated to ${newStatus}. Note saved.`);
  };

  // Helper to get status color (kept as in original)
  const getStatusColor = (status) => {
    switch (status.toUpperCase()) {
      case "OPEN":
        return "text-red-600";
      case "RESOLVED":
        return "text-green-600";
      case "CLOSED":
      default:
        return "text-gray-900";
    }
  };

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-sky-100 via-white to-indigo-100">
      {/* pastel blobs like user detail page */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-16 left-1/4 h-40 w-40 rounded-full bg-sky-200/70 blur-3xl animate-pulse" />
        <div className="absolute top-24 right-10 h-48 w-48 rounded-full bg-indigo-200/70 blur-3xl animate-[pulse_5s_ease-in-out_infinite]" />
        <div className="absolute bottom-8 left-8 h-40 w-40 rounded-full bg-cyan-200/70 blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_10%_20%,rgba(255,255,255,0.95)_0,transparent_40%),radial-gradient(circle_at_80%_10%,rgba(191,219,254,0.9)_0,transparent_45%),radial-gradient(circle_at_20%_80%,rgba(221,214,254,0.7)_0,transparent_45%)] opacity-80" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-3 sm:px-4 lg:px-6 pt-4 pb-10">

        {/* Header Bar – same family as user detail header, but admin style */}
        <header className="mb-5 flex items-center justify-between bg-white/80 backdrop-blur-xl border border-white/80 rounded-2xl shadow-[0_14px_45px_rgba(15,23,42,0.16)] px-3 sm:px-4 py-3">

          <button
            className="flex items-center text-slate-700 hover:text-sky-600 text-sm font-medium transition"
            onClick={() => {
              navigate("/Admin/Dashboard");
            }}
          >
            <BackArrow />
            <span>Back</span>
          </button>

          <div className="flex items-center gap-2 sm:gap-3">
            <div className="hidden sm:flex h-9 w-9 rounded-xl bg-gradient-to-br from-sky-500 via-blue-500 to-indigo-500 items-center justify-center text-[10px] font-bold text-white shadow-[0_10px_30px_rgba(59,130,246,0.6)]">
              CMS
            </div>
            <div className="text-center sm:text-left">
              <h1 className="text-sm sm:text-base font-semibold text-slate-900">
                Complaint Details (Admin)
              </h1>
              <p className="hidden sm:block text-[11px] text-slate-500">
                Review, update status and add internal notes.
              </p>
            </div>
          </div>

          <div className="hidden sm:inline-flex items-center px-3 py-1 rounded-full text-[11px] font-medium border shadow-sm bg-sky-50/90 border-sky-100 text-sky-700">
            {statusLabel}
          </div>
        </header>

        {/* Main Content Area */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Left Column */}
          <div className="md:col-span-2 space-y-4">
            {/* Complaint Details Card */}
            <div className="bg-white/95 p-6 rounded-2xl shadow-[0_20px_70px_rgba(15,23,42,0.14)] border border-white/80 backdrop-blur-xl transition hover:-translate-y-[2px] hover:shadow-[0_26px_80px_rgba(15,23,42,0.18)]">
              <h2 className="text-xl font-bold text-slate-900 mb-1">{title}</h2>
              <p className="text-sm font-medium text-slate-700 my-4">
                Category:{" "}
                <span className="font-semibold text-slate-900">
                  {category}
                </span>
              </p>
              <p className="text-sm font-medium mb-4 text-slate-700">
                Submitted on:{" "}
                <span className="font-semibold text-slate-900">{date}</span>
              </p>

              <h3 className="text-md font-semibold text-slate-900">
                Description
              </h3>
              <p className="text-slate-600 whitespace-pre-wrap mt-2 leading-relaxed bg-slate-50/80 border border-slate-100 rounded-xl px-3 py-3">
                {description}
              </p>
            </div>

            {/* Small info card for mobile */}
            <div className="md:hidden bg-white/95 p-6 rounded-2xl shadow-[0_18px_60px_rgba(15,23,42,0.14)] border border-white/80 backdrop-blur-xl">
              <h3 className="text-lg font-semibold text-slate-900 mb-3">
                Information
              </h3>
              <div className="space-y-3 text-sm">
                <div>
                  <p className="text-slate-500">Status</p>
                  <p
                    className={`font-bold ${
                      getStatusColor(statusLabel) || "text-slate-900"
                    }`}
                  >
                    {statusLabel}
                  </p>
                </div>
                <div>
                  <p className="text-slate-500">Submitted By</p>
                  <p className="font-medium text-slate-900">{employee}</p>
                  <p className="text-slate-600">{email}</p>
                </div>
                <div>
                  <p className="text-slate-500">Last Updated</p>
                  <p className="text-slate-900">{lastUpdated}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="md:col-span-1 space-y-4">
            {/* Information Card */}
            <div className="hidden md:block bg-white/95 p-6 rounded-2xl shadow-[0_18px_60px_rgba(15,23,42,0.14)] border border-white/80 backdrop-blur-xl">
              <h3 className="text-lg font-semibold text-slate-900 mb-4">
                Information
              </h3>
              <div className="space-y-3 text-sm">
                <div>
                  <p className="text-slate-500">Status</p>
                  <p
                    className={`text-md font-bold ${
                      getStatusColor(statusLabel) || "text-slate-900"
                    }`}
                  >
                    {statusLabel}
                  </p>
                </div>

                <div>
                  <p className="text-slate-500">Submitted By</p>
                  <p className="text-md font-medium text-slate-900">
                    {employee}
                  </p>
                  <p className="text-sm text-slate-600">{email}</p>
                </div>

                <div>
                  <p className="text-sm text-slate-500">Last Updated</p>
                  <p className="text-md text-slate-900">{lastUpdated}</p>
                </div>
              </div>
            </div>

            {/* Admin Actions Card */}
            <div className="bg-white/95 p-6 rounded-2xl shadow-[0_20px_70px_rgba(15,23,42,0.16)] border border-white/80 backdrop-blur-xl">
              <h3 className="text-lg font-semibold text-slate-900 mb-4 border-b border-slate-100 pb-2">
                Admin Actions
              </h3>

              <form onSubmit={handleStatusUpdate} className="space-y-4">
                {/* Update Status */}
                <div>
                  <label
                    htmlFor="status"
                    className="block text-sm font-medium text-slate-700 mb-1"
                  >
                    Update Status
                  </label>
                  <select
                    id="status"
                    name="status"
                    value={newStatus}
                    onChange={(e) => setNewStatus(e.target.value)}
                    className="block w-full rounded-lg border border-slate-200 bg-white/90 shadow-sm focus:border-sky-500 focus:ring-sky-500 px-3 py-2 text-sm text-slate-800"
                  >
                    <option value="open">Open</option>
                    <option value="in_progress">In Progress</option>
                    <option value="resolved">Resolved</option>
                    <option value="closed">Closed</option>
                  </select>
                </div>

                {/* Add Note */}
                <div>
                  <label
                    htmlFor="note"
                    className="block text-sm font-medium text-slate-700 mb-1"
                  >
                    Add Note (Optional)
                  </label>
                  <textarea
                    id="note"
                    name="note"
                    rows="3"
                    value={adminNote}
                    onChange={(e) => setAdminNote(e.target.value)}
                    placeholder="Add internal note about this update..."
                    className="block w-full rounded-lg border border-slate-200 bg-white/90 shadow-sm focus:border-sky-500 focus:ring-sky-500 px-3 py-2 text-sm text-slate-800"
                  ></textarea>
                </div>

                {/* Submit Button (kept same onClick + type as your code) */}
                <button
                  onClick={() => {
                    navigate("/Admin/Dashboard");
                  }}
                  type="submit"
                  className="w-full justify-center rounded-lg border border-transparent bg-gradient-to-r from-sky-500 via-blue-500 to-indigo-500 py-2 px-4 text-sm font-medium text-white shadow-[0_14px_45px_rgba(37,99,235,0.5)] hover:from-sky-600 hover:via-blue-600 hover:to-indigo-600 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2"
                >
                  Update Status
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminComplaintDetails;
