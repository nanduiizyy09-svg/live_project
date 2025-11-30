import React, { useState } from "react";

const AuthForm = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [department, setDepartment] = useState("");
  const [country, setCountry] = useState("");
  const [countryCode, setCountryCode] = useState("+91");
  const [customDepartment, setCustomDepartment] = useState("");
  const [customCountry, setCustomCountry] = useState("");

  const buttonActiveClasses =
    "w-1/2 py-2.5 px-4 rounded-lg text-sm font-semibold text-sky-800 bg-white shadow-md ring-1 ring-sky-300 transition-all";
  const buttonInactiveClasses =
    "w-1/2 py-2.5 px-4 rounded-lg text-sm font-medium text-sky-900/80 bg-sky-50 hover:bg-sky-100 transition-all";
  const inputClasses =
    "appearance-none block w-full px-3 py-2 border border-slate-200 bg-white/90 rounded-lg shadow-sm placeholder-slate-400 text-slate-700 focus:outline-none focus:ring-2 focus:ring-sky-400 focus:border-sky-400 sm:text-sm";
  const labelClasses =
    "block text-sm font-medium text-slate-700 text-left";
  const primaryButtonClasses =
    "w-full flex justify-center py-2.5 px-4 border border-transparent rounded-xl shadow-md text-sm font-semibold text-white bg-gradient-to-r from-sky-500 via-blue-500 to-indigo-500 hover:from-sky-600 hover:via-blue-600 hover:to-indigo-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-400 focus:ring-offset-sky-50";

  const Header = () => (
    <div>
      <h2 className="mt-1 text-left text-3xl font-extrabold text-slate-900 tracking-tight">
        {isLogin ? "Welcome Back 👋" : "Let’s Get You Started"}
      </h2>
      <p className="mt-2 text-left text-sm text-slate-600">
        {isLogin
          ? "Sign in to access and track your complaints effortlessly."
          : "Create your account to submit and manage complaints smoothly."}
      </p>
    </div>
  );

  const LoginView = () => (
    <>
      <div>
        <label htmlFor="login-email" className={labelClasses}>
          Email
        </label>
        <div className="mt-1">
          <input
            id="login-email"
            name="email"
            type="email"
            autoComplete="email"
            required
            className={inputClasses}
            placeholder="you@gmail.com"
          />
        </div>
      </div>

      <div>
        <label htmlFor="login-password" className={labelClasses}>
          Password
        </label>
        <div className="mt-1">
          <input
            id="login-password"
            name="password"
            type="password"
            autoComplete="current-password"
            required
            className={inputClasses}
            placeholder="••••••••"
          />
        </div>
      </div>

      <div>
        <button type="submit" className={primaryButtonClasses}>
          Sign In
        </button>
      </div>
    </>
  );

 const RegisterView = () => (
  <>
    {/* Full Name */}
    <div>
      <label className={labelClasses}>Full Name</label>
      <input
        type="text"
        required
        className={inputClasses}
        placeholder="Your Name"
      />
    </div>

    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

      <div>
        <label className={labelClasses}>Email</label>
        <input
          type="email"
          required
          className={inputClasses}
          placeholder="you@gmail.com"
        />
      </div>

      {/* Phone */}
      {/* Phone Number */}
<div>
  <label htmlFor="phone" className={labelClasses}>
    Contact Number
  </label>
  <div className="mt-1 flex flex-col sm:flex-row gap-2 sm:gap-3">
    
    {/* Small Country Code box */}
    <input
      type="text"
      required
      className={`${inputClasses} sm:w-24 lg:w-10 lg:px-0 w-full text-center`}
      placeholder="+91"
      defaultValue={"+91"}
    />

    {/* Large Number box */}
    <input
      id="phone"
      name="phone"
      type="tel"
      required
      className={`${inputClasses} flex-1 lg:w-20 lg:px-1 xl:px-3  `}
      placeholder="Mobile Number"
    />
    
  </div>
</div>

    </div>

    {/* Password */}
    <div>
      <label className={labelClasses}>Password</label>
      <input
        type="password"
        required
        className={inputClasses}
        placeholder="••••••••"
      />
    </div>

    {/* Country + Department */}
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      
      {/* Type Country */}
      <div>
        <label className={labelClasses}>Country</label>
        <input
          type="text"
          required
          className={inputClasses}
          placeholder="India, USA, etc."
        />
      </div>

      {/* Type Department */}
      <div>
        <label className={labelClasses}>Department</label>
        <input
          type="text"
          required
          className={inputClasses}
          placeholder="IT, Management, HR, etc."
        />
      </div>
    </div>

    <button type="submit" className={primaryButtonClasses}>
      Create Account
    </button>
  </>
);


  return (
    <div className="relative min-h-screen bg-gradient-to-br from-sky-200 via-white to-indigo-200 flex items-center justify-center px-4 sm:px-6 lg:px-10 overflow-hidden">
      {/* Strong gradient + blur effects */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-28 -left-16 h-72 w-72 bg-sky-300/70 blur-[80px] rounded-full animate-pulse" />
        <div className="absolute top-32 -right-20 h-80 w-80 bg-indigo-300/70 blur-[90px] rounded-full animate-[pulse_4s_ease-in-out_infinite]" />
        <div className="absolute bottom-[-3rem] left-1/4 h-72 w-72 bg-cyan-200/70 blur-[85px] rounded-full" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.9),_transparent_60%)]" />
      </div>

      <div className="relative z-10 max-w-6xl w-full grid grid-cols-1 lg:grid-cols-[1.15fr_minmax(0,1fr)] gap-10 items-stretch">
        {/* Left Info Panel */}
        <div className="hidden lg:flex">
          <div className="w-full h-full bg-white/90 border border-white/80 rounded-3xl shadow-[0_20px_70px_rgba(15,23,42,0.15)] backdrop-blur-2xl p-8 flex flex-col justify-between gap-6 relative overflow-hidden">
            <div className="absolute -right-10 -top-10 h-44 w-44 bg-gradient-to-br from-sky-300 to-indigo-300 rounded-full blur-2xl opacity-80" />
            <div className="absolute -left-20 bottom-0 h-40 w-40 bg-gradient-to-tr from-amber-200 to-pink-200 rounded-full blur-2xl opacity-80" />

            <div className="space-y-5 relative">
              <div className="inline-flex items-center gap-2 rounded-full bg-sky-50 px-3 py-1 text-xs font-semibold text-sky-700 border border-sky-100 shadow-sm">
                <span className="h-2.5 w-2.5 rounded-full bg-emerald-500 animate-pulse" />
                Complaint Management System
              </div>

              <div>
                <h1 className="text-3xl xl:text-4xl font-bold tracking-tight text-slate-900">
                  Make complaints
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-500 via-blue-500 to-indigo-500">
                    {" "}
                    clear & actionable.
                  </span>
                </h1>
                <p className="mt-3 text-sm text-slate-600 max-w-md">
                  A centralized portal to submit, assign, and track complaints for your
                  institute or organization with full visibility and accountability.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4 text-sm mt-4">
                <div className="rounded-2xl bg-sky-50 border border-sky-100 p-4 shadow-sm">
                  <p className="text-[11px] uppercase tracking-wide text-sky-500 font-semibold mb-1">
                    For Users
                  </p>
                  <p className="font-medium text-slate-800">
                    Raise issues in under a minute and see their status live.
                  </p>
                </div>
                <div className="rounded-2xl bg-indigo-50 border border-indigo-100 p-4 shadow-sm">
                  <p className="text-[11px] uppercase tracking-wide text-indigo-500 font-semibold mb-1">
                    For Admins
                  </p>
                  <p className="font-medium text-slate-800">
                    Prioritize, assign, and resolve complaints with ease.
                  </p>
                </div>
              </div>

              <div className="mt-3 flex flex-wrap gap-2 text-[11px] text-slate-500">
                <span className="px-2.5 py-1 rounded-full bg-slate-100 border border-slate-200">
                  Role-based access
                </span>
                <span className="px-2.5 py-1 rounded-full bg-slate-100 border border-slate-200">
                  Real-time tracking
                </span>
                <span className="px-2.5 py-1 rounded-full bg-slate-100 border border-slate-200">
                  Email notifications
                </span>
              </div>
            </div>

            <div className="flex items-center justify-between text-xs text-slate-500 relative">
              <div className="flex items-center gap-3">
                <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-sky-400 to-indigo-500 flex items-center justify-center text-xs font-bold text-white shadow-md">
                  CMS
                </div>
                <div>
                  <p className="font-semibold text-slate-800">
                    Smart Complaint Portal
                  </p>
                  <p className="text-[11px]">
                    Built for colleges, offices & organizations.
                  </p>
                </div>
              </div>
              <p className="text-[10px]">
                © {new Date().getFullYear()} CMS Portal. All rights reserved.
              </p>
            </div>
          </div>
        </div>

        {/* Right Form Panel */}
        <div className="flex items-center">
          <div className="w-full bg-white/95 border border-white/90 rounded-3xl shadow-[0_20px_70px_rgba(15,23,42,0.16)] backdrop-blur-2xl p-7 sm:p-8">
            <Header />

            <div className="mt-6 ">
              <div className="flex bg-sky-50 p-1.5 rounded-2xl mb-7 border border-sky-100 shadow-sm gap-1">
                <button
                  type="button"
                  onClick={() => setIsLogin(true)}
                  className={isLogin ? buttonActiveClasses : buttonInactiveClasses}
                >
                  Login
                </button>
                <button
                  type="button"
                  onClick={() => setIsLogin(false)}
                  className={!isLogin ? buttonActiveClasses : buttonInactiveClasses}
                >
                  Register
                </button>
              </div>

              <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
                {isLogin ? <LoginView /> : <RegisterView />}
              </form>

              <div className="mt-5 text-[11px] text-slate-500 text-center">
                By continuing, you agree to our{" "}
                <span className="text-sky-500 font-medium hover:underline cursor-pointer">
                  Terms of Service
                </span>{" "}
                and{" "}
                <span className="text-sky-500 font-medium hover:underline cursor-pointer">
                  Privacy Policy
                </span>
                .
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthForm;
