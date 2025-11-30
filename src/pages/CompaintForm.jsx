import React, { useState } from "react";
import { X, Paperclip, ChevronDown } from "lucide-react";
import { useNavigate } from "react-router-dom";

const ComplaintModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("Harassment");
  const [description, setDescription] = useState("");
  const [files, setFiles] = useState([]);
  const navigate = useNavigate();

  const handleFileUpload = (e) => {
    setFiles([...e.target.files]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const complaintData = {
      title,
      category,
      description,
      files,
    };

    console.log("Complaint Submitted:", complaintData);

    setTitle("");
    setCategory("Harassment");
    setDescription("");
    setFiles([]);

    onClose();
  };

  const categories = [
    "Harassment",
    "Discrimination",
    "Safety Violation",
    "Fraud",
    "Policy Breach",
    "Other",
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#020617]/40 backdrop-blur-md p-4">
      {/* Outer glow container */}
      <div className="w-full max-w-3xl mx-auto rounded-3xl border border-white/70 bg-gradient-to-br from-sky-50/95 via-white/95 to-indigo-50/95 shadow-[0_20px_70px_rgba(15,23,42,0.25)] overflow-hidden">
        {/* Header */}
        <div className="relative px-6 py-5 border-b border-white/80 bg-gradient-to-r from-sky-500 via-blue-500 to-indigo-500 text-white">
          {/* Soft shapes */}
          <div className="pointer-events-none absolute inset-0 opacity-40">
            <div className="absolute -top-10 -right-10 h-28 w-28 bg-white/25 blur-2xl rounded-full" />
            <div className="absolute bottom-[-18px] left-10 h-20 w-20 bg-sky-200/30 blur-xl rounded-full" />
          </div>

          <div className="relative flex justify-between items-start gap-4">
            <div>
              <h2 className="text-lg sm:text-xl font-semibold tracking-tight">
                Submit New Complaint
              </h2>
              <p className="text-xs sm:text-sm text-sky-50/90 mt-1 max-w-md">
                Provide detailed information about your concern. All submissions
                are kept confidential and reviewed by the authorized team.
              </p>
            </div>
            <button
              onClick={onClose}
              className="p-1.5 rounded-full bg-white/10 hover:bg-white/20 text-sky-50 transition"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="p-6 sm:p-7 space-y-5 bg-gradient-to-b from-white/95 via-white/95 to-sky-50/90"
        >
          {/* Title */}
          <div>
            <label className="block text-sm font-medium text-slate-800 mb-1.5">
              Title
            </label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Brief summary of the issue"
              className="w-full px-4 py-2.5 border border-slate-200 bg-white/90 rounded-xl shadow-sm focus:ring-2 focus:ring-sky-400 focus:border-sky-400 outline-none text-sm text-slate-800 placeholder-slate-400"
              required
            />
          </div>

          {/* Category */}
          <div>
            <label className="block text-sm font-medium text-slate-800 mb-1.5">
              Category
            </label>
            <div className="relative">
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="block appearance-none
 w-full px-4 py-2.5 pr-10 border border-slate-200 bg-white/90 rounded-xl shadow-sm text-sm text-slate-800 focus:ring-2 focus:ring-sky-400 focus:border-sky-400 outline-none cursor-pointer"
              >
                {categories.map((cat) => (
                  <option key={cat} value={cat}>
                    {cat}
                  </option>
                ))}
              </select>
              <ChevronDown className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
            </div>
          </div>

          {/* Description */}
          <div>
            <label className="block text-sm font-medium text-slate-800 mb-1.5">
              Description
            </label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Provide detailed information about the complaint..."
              rows="4"
              className="w-full px-4 py-2.5 border border-slate-200 bg-white/90 rounded-xl shadow-sm focus:ring-2 focus:ring-sky-400 focus:border-sky-400 outline-none text-sm text-slate-800 placeholder-slate-400 resize-y"
              required
            ></textarea>
          </div>

          {/* File Upload */}
          <div>
            <label className="block text-sm font-medium text-slate-800 mb-2">
              Attachments (Optional)
            </label>

            <div
              className="flex flex-col items-center justify-center p-6 sm:p-7 border border-dashed border-slate-300 bg-sky-50/60 hover:bg-sky-50 rounded-2xl text-slate-500 hover:border-sky-400 hover:text-sky-600 transition cursor-pointer min-h-[120px] shadow-sm"
              onClick={() => document.getElementById("file-upload")?.click()}
            >
              <input
                type="file"
                id="file-upload"
                className="hidden"
                multiple
                onChange={handleFileUpload}
              />

              {files.length === 0 ? (
                <>
                  <div className="flex items-center justify-center h-10 w-10 rounded-full bg-white shadow-sm mb-2">
                    <Paperclip className="w-5 h-5" />
                  </div>
                  <p className="text-sm font-medium">
                    Click to upload files or screenshots
                  </p>
                  <p className="text-[11px] text-slate-400 mt-1">
                    You can attach images, PDFs, or documents that support your
                    complaint.
                  </p>
                </>
              ) : (
                <div className="w-full space-y-2">
                  <p className="text-xs font-semibold text-slate-600 mb-1">
                    Selected files:
                  </p>
                  <ul className="text-sm text-slate-700 w-full space-y-1 max-h-24 overflow-y-auto">
                    {files.map((file, index) => (
                      <li
                        key={index}
                        className="truncate flex items-center gap-1.5 text-xs bg-white/80 border border-slate-200 rounded-lg px-2 py-1"
                      >
                        <span>📄</span>
                        <span className="truncate">{file.name}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>

          {/* Footer Buttons */}
          <div className="pt-4 flex flex-col sm:flex-row sm:justify-end gap-2 sm:gap-3 border-t border-slate-100 mt-2">
            <button
              type="button"
              onClick={onClose}
              className="px-5 py-2.5 text-sm font-semibold text-slate-600 bg-slate-100 rounded-xl hover:bg-slate-200 border border-slate-200 shadow-sm transition"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-5 py-2.5 text-sm font-semibold text-white rounded-xl bg-gradient-to-r from-sky-500 via-blue-500 to-indigo-500 hover:from-sky-600 hover:via-blue-600 hover:to-indigo-600 shadow-[0_10px_30px_rgba(37,99,235,0.5)] transition"
              onClick={() => {
                navigate("/User/Dashboard");
              }}
            >
              Submit Complaint
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ComplaintModal;
