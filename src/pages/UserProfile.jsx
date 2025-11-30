import React, { useState, useEffect } from "react";
import {
  LogOut,
  User,
  LayoutDashboard,
  Mail,
  Calendar,
  Shield,
  Phone,
  MapPin,
  Edit2,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function UserProfile() {
  const navigate = useNavigate();

  // Default cover image (you can replace this URL)
  const defaultCover =
    "https://images.unsplash.com/photo-1470790376778-a9fbc86d70e2?q=80&w=704&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  const defaultProfile = "https://randomuser.me/api/portraits/women/32.jpg";

  const [coverPhoto, setCoverPhoto] = useState(null);
  const [profilePhoto, setProfilePhoto] = useState(null);

  const handleCoverUpload = (e) => {
    const file = e.target.files && e.target.files[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setCoverPhoto(url);
      localStorage.setItem("coverPhoto", url);
    }
  };

  const handleProfileUpload = (e) => {
    const file = e.target.files && e.target.files[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setProfilePhoto(url);
      localStorage.setItem("profilePhoto", url);
    }
  };

  useEffect(() => {
    return () => {
      localStorage.removeItem("coverPhoto");
      localStorage.removeItem("profilePhoto");
    };
  }, []);

  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-sky-100 via-white to-indigo-100 flex flex-col">
      {/* Sparkly background for whole page */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-10 left-1/4 h-44 w-44 rounded-full bg-sky-200/70 blur-3xl animate-pulse" />
        <div className="absolute top-24 right-10 h-52 w-52 rounded-full bg-indigo-200/70 blur-3xl animate-[pulse_5s_ease-in-out_infinite]" />
        <div className="absolute bottom-10 left-10 h-44 w-44 rounded-full bg-cyan-200/70 blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_10%_20%,rgba(255,255,255,0.95)_0,transparent_40%),radial-gradient(circle_at_80%_10%,rgba(191,219,254,0.9)_0,transparent_45%),radial-gradient(circle_at_20%_80%,rgba(221,214,254,0.7)_0,transparent_45%)] opacity-80" />
      </div>

      {/* MAIN CONTAINER WITH SIDE PADDING (includes header + cover + profile + content) */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-10 pb-10 w-full">
        {/* ---------- NEW PAGE HEADER WITH APP ICON ---------- */}
        <div className="flex items-center justify-between mt-8 mb-10">
          <div className="flex items-center gap-3 sm:gap-4">
            <div className="h-11 w-11 rounded-2xl bg-gradient-to-br from-sky-500 via-blue-500 to-indigo-500 flex items-center justify-center text-xs font-bold text-white shadow-[0_10px_30px_rgba(59,130,246,0.6)]">
              CMS
            </div>
            <div className="flex flex-col">
              <h1 className="text-lg sm:text-xl font-semibold text-slate-900">
                User Profile
              </h1>
              <p className="text-xs sm:text-sm text-slate-500">
                Manage your account details and personal information.
              </p>
            </div>
          </div>

          {/* small tag on the right for a bit more life */}
          <div className="hidden sm:flex items-center gap-2 text-[11px] font-medium text-sky-700 bg-sky-50/80 border border-sky-100 rounded-full px-3 py-1 shadow-sm">
            <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
            Profile synced with complaint portal
          </div>
        </div>
        {/* --------------------------------------------------- */}

        {/* COVER + PROFILE */}
        <div className="relative h-[26vh] min-h-[180px]">
          {/* Cover card */}
          <div className="absolute inset-0 rounded-3xl shadow-[0_20px_80px_rgba(15,23,42,0.22)] border border-white/80 bg-slate-200/60 overflow-hidden">
            {/* Cover image */}
            <div
              className="absolute inset-0 rounded-3xl"
              style={{
                backgroundImage: `url(${coverPhoto || defaultCover})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            />
            {/* Soft gradient overlay */}
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-white/80 via-white/35 to-sky-100/50" />

            {/* Quote */}
            <div className="absolute left-4 md:left-8 top-4 md:top-6 max-w-md text-slate-800/85">
              <p className="text-[11px] md:text-sm font-medium italic leading-snug">
                “A good system doesn&apos;t hide complaints, it makes resolving
                them effortless.”
              </p>
            </div>

            {/* Cover edit button */}
            <label className="absolute top-3 right-3 bg-white/80 backdrop-blur-md p-1.5 rounded-full shadow-md cursor-pointer hover:bg-white transition">
              <Edit2 size={16} className="text-slate-700" />
              <input
                type="file"
                accept="image/*"
                className="hidden"
                onChange={handleCoverUpload}
              />
            </label>
          </div>

          {/* PROFILE PHOTO (OVERLAPPING, FULLY VISIBLE) */}
          <div className="absolute left-4 md:left-10 bottom-[-36px] flex items-end gap-3 z-20">
            <div className="relative">
              <img
                src={profilePhoto || defaultProfile}
                alt="Profile"
                className="w-24 h-24 md:w-28 md:h-28 rounded-full border-[4px] border-white shadow-[0_18px_50px_rgba(15,23,42,0.5)] object-cover bg-white ring-2 ring-sky-100"
              />
              {/* Profile edit icon */}
              <label className="absolute right-0 bottom-0 translate-x-1 translate-y-1 bg-white/90 backdrop-blur-md p-1.5 rounded-full shadow-md cursor-pointer hover:bg-white transition">
                <Edit2 size={14} className="text-slate-700" />
                <input
                  type="file"
                  accept="image/*"
                  className="hidden"
                  onChange={handleProfileUpload}
                />
              </label>
            </div>
          </div>
        </div>

        {/* MAIN LAYOUT (SIDEBAR + CONTENT) */}
        <div className="relative flex flex-col-reverse md:flex-row w-full mt-16 gap-4 md:gap-6">
          {/* Sidebar */}
          <div className="w-full md:w-64 bg-white/90 shadow-[0_18px_55px_rgba(15,23,42,0.16)] border border-white/80 rounded-2xl p-4 md:p-5 md:sticky md:top-28 backdrop-blur-xl">
            <ul className="space-y-2 md:space-y-3 text-sm md:text-base font-medium text-slate-700">
              <li
                className="flex items-center gap-2 px-3 py-2 rounded-xl hover:bg-sky-50/80 hover:text-sky-700 cursor-pointer transition"
                onClick={() => navigate("/User/Dashboard")}
              >
                <LayoutDashboard size={20} /> Dashboard
              </li>

              <li
                className="flex items-center gap-2 px-3 py-2 rounded-xl bg-sky-50 text-sky-700 border border-sky-100 shadow-sm cursor-pointer transition hover:bg-sky-100"
                onClick={() => navigate("/User/Profile")}
              >
                <User size={20} /> Profile
              </li>

              <li
                className="flex items-center gap-2 px-3 py-2 rounded-xl hover:bg-rose-50/80 hover:text-rose-500 cursor-pointer transition"
                onClick={() => navigate("/Home")}
              >
                <LogOut size={20} /> Logout
              </li>
            </ul>
          </div>

          {/* Main Content */}
          <div className="flex-1 space-y-5 md:space-y-6">
            {/* User Information */}
            <div className="bg-white/95 shadow-[0_20px_70px_rgba(15,23,42,0.14)] border border-white/80 rounded-2xl p-4 md:p-6 backdrop-blur-xl transition hover:-translate-y-[2px] hover:shadow-[0_26px_80px_rgba(15,23,42,0.16)]">
              <h2 className="text-xl md:text-2xl font-bold mb-3 md:mb-4 flex items-center gap-2 text-slate-900 tracking-tight">
                <User size={22} className="text-sky-500" /> User Information
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4 text-slate-700 text-sm md:text-base">
                <p className="flex items-center gap-2">
                  <User size={18} className="text-sky-500" />
                  <span className="font-semibold text-slate-800">Name:</span>{" "}
                  Nandini Sharma
                </p>

                <p className="flex items-center gap-2">
                  <Shield size={18} className="text-sky-500" />
                  <span className="font-semibold text-slate-800">Role:</span>{" "}
                  Admin
                </p>

                <p className="flex items-center gap-2">
                  <Phone size={18} className="text-sky-500" />
                  <span className="font-semibold text-slate-800">Phone:</span>{" "}
                  +91 9876543210
                </p>

                <p className="flex items-center gap-2">
                  <MapPin size={18} className="text-sky-500" />
                  <span className="font-semibold text-slate-800">
                    Location:
                  </span>{" "}
                  India
                </p>
              </div>
            </div>

            {/* Account Information */}
            <div className="bg-white/95 shadow-[0_20px_70px_rgba(15,23,42,0.14)] border border-white/80 rounded-2xl p-4 md:p-6 backdrop-blur-xl transition hover:-translate-y-[2px] hover:shadow-[0_26px_80px_rgba(15,23,42,0.16)]">
              <h2 className="text-xl md:text-2xl font-bold mb-3 md:mb-4 flex items-center gap-2 text-slate-900 tracking-tight">
                <Mail size={22} className="text-indigo-500" /> Account Information
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4 text-slate-700 text-sm md:text-base">
                <p className="flex items-center gap-2">
                  <Mail size={18} className="text-indigo-500" />
                  <span className="font-semibold text-slate-800">Email:</span>{" "}
                  nandini@example.com
                </p>

                <p className="flex items-center gap-2">
                  <Calendar size={18} className="text-indigo-500" />
                  <span className="font-semibold text-slate-800">Joined:</span>{" "}
                  12 March 2024
                </p>

                <p className="flex items-center gap-2">
                  <Shield size={18} className="text-indigo-500" />
                  <span className="font-semibold text-slate-800">Status:</span>{" "}
                  Active
                </p>

                <p className="flex items-center gap-2">
                  <Calendar size={18} className="text-indigo-500" />
                  <span className="font-semibold text-slate-800">
                    Last Login:
                  </span>{" "}
                  28 Nov 2025
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
