import React, { useEffect, useState } from "react";
import {
  UserCog,
  ShieldCheck,
  Mail,
  Phone,
  MapPin,
  Activity,
  Bell,
  Clock,
  CheckCircle2,
  AlertTriangle,
  Settings2,
  LogOut,
  Edit2,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const AdminProfile = () => {
  const navigate = useNavigate();

  // ---------- AVATAR STATE + LOCAL STORAGE ----------
  const defaultAvatar =
    "https://randomuser.me/api/portraits/men/32.jpg"; // default image

  const [avatar, setAvatar] = useState(defaultAvatar);

  useEffect(() => {
    const saved = localStorage.getItem("adminAvatar");
    if (saved) {
      setAvatar(saved);
    }
  }, []);

  const handleAvatarChange = (e) => {
    const file = e.target.files && e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = () => {
      const dataUrl = reader.result;
      setAvatar(dataUrl);
      localStorage.setItem("adminAvatar", dataUrl);
    };
    reader.readAsDataURL(file);
  };
  // ---------------------------------------------------

  const admin = {
    name: "Akash sharma",
    role: "System Administrator",
    level: "Level 3 · Full Access",
    status: "Active",
    email: "akash.admin@example.com",
    phone: "+91 9876543210",
    location: "New Delhi, India",
    department: "Information & Technology",
    joined: "12 March 2023",
    lastLogin: "29 Nov 2025 · 09:24 AM",
  };

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-sky-100 via-white to-indigo-100">
      {/* Background blobs */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 left-1/4 h-52 w-52 rounded-full bg-sky-200/70 blur-3xl animate-pulse" />
        <div className="absolute top-32 right-10 h-60 w-60 rounded-full bg-indigo-200/70 blur-3xl animate-[pulse_5s_ease-in-out_infinite]" />
        <div className="absolute bottom-10 left-8 h-52 w-52 rounded-full bg-cyan-200/70 blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_10%_20%,rgba(255,255,255,0.96)_0,transparent_40%),radial-gradient(circle_at_80%_10%,rgba(191,219,254,0.9)_0,transparent_45%),radial-gradient(circle_at_20%_80%,rgba(221,214,254,0.75)_0,transparent_45%)] opacity-80" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-3 sm:px-4 lg:px-6 pt-4 pb-10">
        {/* Top bar / header */}
        <header className="mb-5 flex items-center justify-between bg-white/80 backdrop-blur-xl border border-white/80 rounded-2xl shadow-[0_14px_45px_rgba(15,23,42,0.16)] px-3 sm:px-4 py-3">
          <div className="flex items-center gap-3 sm:gap-4">
            <div className="h-11 w-11 rounded-2xl bg-gradient-to-br from-sky-500 via-blue-500 to-indigo-500 flex items-center justify-center text-xs font-bold text-white shadow-[0_10px_30px_rgba(59,130,246,0.6)]">
              CMS
            </div>
            <div>
              <h1 className="text-base sm:text-lg font-semibold text-slate-900">
                Admin Profile
              </h1>
              <p className="text-[11px] sm:text-xs text-slate-500">
                Central control panel for your admin identity & security.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2 sm:gap-3">
            <button
              className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 text-[11px] font-medium text-slate-700 border border-slate-200 rounded-full bg-white/80 hover:bg-slate-50 transition"
              onClick={() => navigate("/Admin/Dashboard")}
            >
              <Activity className="w-3.5 h-3.5" />
              Dashboard
            </button>
           
          </div>
        </header>

        {/* Main layout */}
        <div className="grid grid-cols-1 xl:grid-cols-[1.8fr_minmax(0,1.1fr)] gap-4 lg:gap-6">
          {/* LEFT SIDE */}
          <div className="space-y-4 lg:space-y-6">
            {/* 1) PROFILE COVER + PHOTO + BASIC INFO */}
            <section className="relative overflow-hidden rounded-3xl shadow-[0_20px_80px_rgba(15,23,42,0.18)] border border-white/80 bg-white/95 backdrop-blur-xl">
              {/* Cover gradient */}
              <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-r from-sky-500 via-blue-500 to-indigo-500 opacity-95" />

              <div className="relative flex flex-col sm:flex-row items-center sm:items-end gap-4 px-5 sm:px-6 pt-5 pb-4">
                {/* Avatar block */}
                <div className="relative">
                  <div className="h-20 w-20 sm:h-24 sm:w-24 rounded-3xl border-4 border-white shadow-[0_18px_50px_rgba(15,23,42,0.5)] overflow-hidden bg-white">
                    <img
                      src={avatar}
                      alt={admin.name}
                      className="h-full w-full object-cover"
                    />
                  </div>

                  {/* Edit button on avatar */}
                  <label className="absolute -bottom-1 -right-1 flex h-7 w-7 items-center justify-center rounded-full bg-white/95 shadow-md cursor-pointer hover:bg-slate-50 transition">
                    <Edit2 className="w-3.5 h-3.5 text-slate-700" />
                    <input
                      type="file"
                      accept="image/*"
                      className="hidden"
                      onChange={handleAvatarChange}
                    />
                  </label>
                </div>

                {/* Name + role + chips */}
                <div className="flex-1 text-center sm:text-left pb-1">
                  <h2 className="text-lg sm:text-xl font-bold text-white drop-shadow-sm">
                    {admin.name}
                  </h2>
                  <p className="mt-0.5 text-xs sm:text-sm font-medium text-sky-50/90 flex items-center justify-center sm:justify-start gap-1.5">
                    <UserCog className="w-4 h-4" />
                    {admin.role}
                  </p>
                  <p className="mt-0.5 text-[11px] text-sky-50/90">
                    {admin.department}
                  </p>

                  <div className="mt-3 flex flex-wrap justify-center sm:justify-start gap-1.5 text-[11px]">
                    <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-100">
                      <CheckCircle2 className="w-3 h-3" />
                      {admin.level}
                    </span>
                    <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-sky-50 text-sky-700 border border-sky-100">
                      <ShieldCheck className="w-3 h-3" />
                      {admin.status}
                    </span>
                  </div>
                </div>
              </div>
            </section>

            {/* 2) ADMIN DETAILS (CONTACT + JOINED / LAST LOGIN) */}
            <section className="bg-white/95 border border-white/80 rounded-2xl shadow-[0_18px_60px_rgba(15,23,42,0.16)] backdrop-blur-xl px-4 sm:px-5 py-4">
              <h3 className="text-sm sm:text-base font-semibold text-slate-900 mb-3">
                Admin Details
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm text-slate-700">
                <div className="space-y-2">
                  <p className="flex items-center gap-2">
                    <Mail className="w-4 h-4 text-sky-500" />
                    <span>{admin.email}</span>
                  </p>
                  <p className="flex items-center gap-2">
                    <Phone className="w-4 h-4 text-sky-500" />
                    <span>{admin.phone}</span>
                  </p>
                  <p className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-sky-500" />
                    <span>{admin.location}</span>
                  </p>
                </div>
                <div className="space-y-2">
                  <p className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-indigo-500" />
                    <span>
                      Joined:{" "}
                      <span className="font-medium text-slate-800">
                        {admin.joined}
                      </span>
                    </span>
                  </p>
                  <p className="flex items-center gap-2">
                    <Activity className="w-4 h-4 text-indigo-500" />
                    <span>
                      Last login:{" "}
                      <span className="font-medium text-slate-800">
                        {admin.lastLogin}
                      </span>
                    </span>
                  </p>
                </div>
              </div>
            </section>

            {/* 3) METRICS */}
            <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
              {[
                {
                  label: "Complaints Assigned",
                  value: "48",
                  sub: "12 new this week",
                  tone: "from-sky-500/10 to-sky-200/60",
                  icon: Activity,
                },
                {
                  label: "Resolved this week",
                  value: "31",
                  sub: "78% resolution rate",
                  tone: "from-emerald-500/10 to-emerald-200/60",
                  icon: CheckCircle2,
                },
                {
                  label: "Avg. Response Time",
                  value: "1.9h",
                  sub: "Across all open tickets",
                  tone: "from-amber-500/10 to-amber-200/60",
                  icon: Clock,
                },
                {
                  label: "Escalations",
                  value: "3",
                  sub: "Last 7 days",
                  tone: "from-rose-500/10 to-rose-200/60",
                  icon: AlertTriangle,
                },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="relative overflow-hidden rounded-2xl border border-white/80 bg-white/90 shadow-[0_16px_50px_rgba(15,23,42,0.16)] backdrop-blur-xl px-4 py-3 flex items-center justify-between gap-2 transition hover:-translate-y-[2px] hover:shadow-[0_22px_70px_rgba(15,23,42,0.2)]"
                >
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${item.tone} opacity-90 -z-10`}
                  />
                  <div className="relative">
                    <p className="text-[11px] font-semibold uppercase tracking-wide text-slate-700">
                      {item.label}
                    </p>
                    <p className="text-xl font-bold text-slate-900 mt-1">
                      {item.value}
                    </p>
                    <p className="text-[11px] text-slate-600 mt-0.5">
                      {item.sub}
                    </p>
                  </div>
                  <div className="relative p-2.5 rounded-xl bg-white/80 shadow-md">
                    <item.icon className="w-4 h-4 text-slate-800" />
                  </div>
                </div>
              ))}
            </section>

            {/* 4) Responsibilities */}
            <section className="bg-white/95 border border-white/80 rounded-2xl shadow-[0_18px_60px_rgba(15,23,42,0.16)] backdrop-blur-xl px-4 sm:px-5 py-4">
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-sm sm:text-base font-semibold text-slate-900 flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-sky-500" />
                  Admin Scope & Responsibilities
                </h3>
                <span className="hidden sm:inline-flex items-center gap-1 px-2.5 py-1 text-[11px] rounded-full bg-sky-50 text-sky-700 border border-sky-100">
                  <Settings2 className="w-3.5 h-3.5" />
                  Critical access
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm text-slate-700">
                <ul className="space-y-1.5">
                  <li>• Assign and re-route high-priority complaints.</li>
                  <li>• Manage user roles & access permissions.</li>
                  <li>• Configure categories & workflows.</li>
                </ul>
                <ul className="space-y-1.5">
                  <li>• Monitor SLA breaches & escalations.</li>
                  <li>• Oversee audit logs & security alerts.</li>
                  <li>• Maintain data integrity and compliance.</li>
                </ul>
              </div>
            </section>
          </div>

          {/* RIGHT SIDE */}
          <div className="space-y-4 lg:space-y-6">
            {/* Account & security */}
            <section className="bg-white/95 border border-white/80 rounded-2xl shadow-[0_18px_60px_rgba(15,23,42,0.16)] backdrop-blur-xl px-4 sm:px-5 py-4">
              <h3 className="text-sm sm:text-base font-semibold text-slate-900 mb-3 flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-500" />
                Account & Security
              </h3>

              <div className="space-y-3 text-xs sm:text-sm text-slate-700">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium text-slate-800">2FA Status</p>
                    <p className="text-slate-500 text-[11px]">
                      OTP via registered mobile & email
                    </p>
                  </div>
                  <span className="px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-700 text-[11px] border border-emerald-100 inline-flex items-center gap-1">
                    <CheckCircle2 className="w-3 h-3" />
                    Enabled
                  </span>
                </div>

                <div className="flex items-center justify-between pt-1 border-t border-slate-100">
                  <div>
                    <p className="font-medium text-slate-800 text-sm">
                      Last Login
                    </p>
                    <p className="text-slate-500 text-[11px]">
                      {admin.lastLogin}
                    </p>
                  </div>
                  <span className="text-[11px] text-slate-500">
                    Device: Chrome · Windows
                  </span>
                </div>

                <div className="pt-2">
                  <p className="font-medium text-slate-800 text-sm mb-1.5">
                    Active Sessions
                  </p>
                  <div className="space-y-1.5 text-[11px]">
                    <div className="flex items-center justify-between rounded-xl bg-slate-50/80 px-3 py-2">
                      <span>Chrome · Windows · Delhi</span>
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                    </div>
                    <div className="flex items-center justify-between rounded-xl bg-slate-50/60 px-3 py-2">
                      <span>Edge · Windows · Last week</span>
                      <span className="h-1.5 w-1.5 rounded-full bg-slate-300" />
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Notifications / preferences */}
            <section className="bg-white/95 border border-white/80 rounded-2xl shadow-[0_18px_60px_rgba(15,23,42,0.16)] backdrop-blur-xl px-4 sm:px-5 py-4">
              <h3 className="text-sm sm:text-base font-semibold text-slate-900 mb-3 flex items-center gap-2">
                <Bell className="w-4 h-4 text-sky-500" />
                Notification Preferences
              </h3>

              <div className="space-y-2.5 text-xs sm:text-sm text-slate-700">
                {[
                  {
                    label: "High priority complaints",
                    desc: "Immediate alerts for P1 / P2 tickets.",
                    active: true,
                  },
                  {
                    label: "Daily summary",
                    desc: "Overview of new, resolved & escalated complaints.",
                    active: true,
                  },
                  {
                    label: "Weekly performance report",
                    desc: "Resolution rate, SLAs and backlog status.",
                    active: false,
                  },
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-start justify-between gap-3 rounded-xl bg-slate-50/70 px-3 py-2.5"
                  >
                    <div>
                      <p className="font-medium text-slate-800">
                        {item.label}
                      </p>
                      <p className="text-[11px] text-slate-500">
                        {item.desc}
                      </p>
                    </div>
                    <div
                      className={`mt-1 inline-flex h-5 w-9 items-center rounded-full border text-[10px] px-0.5 ${
                        item.active
                          ? "bg-sky-500 border-sky-500 justify-end text-white"
                          : "bg-white border-slate-300 justify-start text-slate-400"
                      }`}
                    >
                      <div className="h-4 w-4 rounded-full bg-white shadow-sm" />
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Quick controls */}
            <section className="bg-white/95 border border-white/80 rounded-2xl shadow-[0_16px_55px_rgba(15,23,42,0.14)] backdrop-blur-xl px-4 sm:px-5 py-4">
              <h3 className="text-sm sm:text-base font-semibold text-slate-900 mb-3 flex items-center gap-2">
                <Settings2 className="w-4 h-4 text-indigo-500" />
                Quick Controls
              </h3>
              <div className="flex flex-wrap gap-1.5 text-[11px] text-slate-700">
                <span className="px-2.5 py-1 rounded-full bg-sky-50 border border-sky-100">
                  Manage roles & permissions
                </span>
                <span className="px-2.5 py-1 rounded-full bg-indigo-50 border border-indigo-100">
                  Configure categories
                </span>
                <span className="px-2.5 py-1 rounded-full bg-emerald-50 border border-emerald-100">
                  SLA & escalation rules
                </span>
                <span className="px-2.5 py-1 rounded-full bg-amber-50 border border-amber-100">
                  Audit logs & activity
                </span>
                <span className="px-2.5 py-1 rounded-full bg-rose-50 border border-rose-100">
                  Security & access review
                </span>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminProfile;
