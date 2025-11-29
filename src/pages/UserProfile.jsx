import React, { useState } from "react";
import { LogOut, User, LayoutDashboard, Mail, Calendar, Shield, Phone, MapPin, Edit2 } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function UserProfile() {
  const navigate = useNavigate();

  // Default images
  const defaultCover = "radial-gradient(circle at top left, #3b82f6, #1e3a8a)";
  const defaultProfile = "https://randomuser.me/api/portraits/women/32.jpg";

  // State for edited images (only session storage)
  const [coverPhoto, setCoverPhoto] = useState(null);
  const [profilePhoto, setProfilePhoto] = useState(null);

  // Handle cover upload
  const handleCoverUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setCoverPhoto(url);
      localStorage.setItem("coverPhoto", url);
    }
  };

  // Handle profile upload
  const handleProfileUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setProfilePhoto(url);
      localStorage.setItem("profilePhoto", url);
    }
  };

  // Reset localStorage after refresh (default on reload)
  React.useEffect(() => {
    return () => {
      localStorage.removeItem("coverPhoto");
      localStorage.removeItem("profilePhoto");
    };
  }, []);

  return (
    <div className="w-full min-h-screen bg-gray-50 flex flex-col">

      {/* Cover Photo */}
      <div
        className="w-full h-48 relative shadow-md"
        style={{
          background: coverPhoto || defaultCover,
          backgroundSize: coverPhoto ? "cover" : "unset",
        }}
      >
        {/* Cover Edit Icon */}
        <label className="absolute top-2 right-2 bg-gray-300 bg-opacity-40 backdrop-blur-sm p-1 rounded-full shadow cursor-pointer hover:bg-gray-400 transition">
          <Edit2 size={16} />
          <input
            type="file"
            accept="image/*"
            className="hidden"
            onChange={handleCoverUpload}
          />
        </label>

        {/* Profile Photo */}
        <img
          src={profilePhoto || defaultProfile}
          alt="Profile"
          className="w-28 h-28 md:w-32 md:h-32 rounded-full border-4 border-white absolute left-4 md:left-10 -bottom-14 md:-bottom-16 shadow-xl object-cover"
        />

        {/* Profile Edit Icon */}
       <label className="absolute left-24 bottom-2 md:left-33 bottom-0 translate-y-16 bg-gray-300 bg-opacity-40 backdrop-blur-sm p-1 rounded-full shadow cursor-pointer hover:bg-gray-400 transition">
  <Edit2 size={16} />

          <input
            type="file"
            accept="image/*"
            className="hidden"
            onChange={handleProfileUpload}
          />
        </label>
      </div>

      {/* Main Layout */}
      <div className="flex flex-col-reverse md:flex-row w-full mt-20 p-3 md:p-6 gap-4 md:gap-6">

        {/* Sidebar */}
        <div className="w-full md:w-64 bg-white shadow-md rounded-2xl p-4 md:p-5 md:sticky md:top-28">
          <ul className="space-y-3 md:space-y-4 text-base md:text-lg font-medium flex md:block justify-between md:justify-start">
            <li
              className="flex items-center gap-2 hover:text-blue-600 cursor-pointer transition"
              onClick={() => navigate("/User/Dashboard")}
            >
              <LayoutDashboard size={20} /> Dashboard
            </li>

            <li
              className="flex items-center gap-2 hover:text-blue-600 cursor-pointer transition bg-gray-200 rounded"
              onClick={() => navigate("/User/Profile")}
            >
              <User size={20} /> Profile
            </li>

            <li
              className="flex items-center gap-2 hover:text-red-500 cursor-pointer transition"
              onClick={() => navigate("/Login")}
            >
              <LogOut size={20} /> Logout
            </li>
          </ul>
        </div>

        {/* Main Content */}
        <div className="flex-1 space-y-5 md:space-y-6">

          {/* User Information */}
          <div className="bg-white shadow-md rounded-2xl p-4 md:p-6">
            <h2 className="text-xl md:text-2xl font-bold mb-3 md:mb-4 flex items-center gap-2">
              <User size={22} /> User Information
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4 text-gray-700 text-sm md:text-base">
              <p className="flex items-center gap-2">
                <User size={18} className="text-blue-600" />
                <span className="font-semibold">Name:</span> Nandini Sharma
              </p>

              <p className="flex items-center gap-2">
                <Shield size={18} className="text-blue-600" />
                <span className="font-semibold">Role:</span> Admin
              </p>

              <p className="flex items-center gap-2">
                <Phone size={18} className="text-blue-600" />
                <span className="font-semibold">Phone:</span> +91 9876543210
              </p>

              <p className="flex items-center gap-2">
                <MapPin size={18} className="text-blue-600" />
                <span className="font-semibold">Location:</span> India
              </p>
            </div>
          </div>

          {/* Account Information */}
          <div className="bg-white shadow-md rounded-2xl p-4 md:p-6">
            <h2 className="text-xl md:text-2xl font-bold mb-3 md:mb-4 flex items-center gap-2">
              <Mail size={22} /> Account Information
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4 text-gray-700 text-sm md:text-base">
              <p className="flex items-center gap-2">
                <Mail size={18} className="text-indigo-600" />
                <span className="font-semibold">Email:</span> nandini@example.com
              </p>

              <p className="flex items-center gap-2">
                <Calendar size={18} className="text-indigo-600" />
                <span className="font-semibold">Joined:</span> 12 March 2024
              </p>

              <p className="flex items-center gap-2">
                <Shield size={18} className="text-indigo-600" />
                <span className="font-semibold">Status:</span> Active
              </p>

              <p className="flex items-center gap-2">
                <Calendar size={18} className="text-indigo-600" />
                <span className="font-semibold">Last Login:</span> 28 Nov 2025
              </p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
