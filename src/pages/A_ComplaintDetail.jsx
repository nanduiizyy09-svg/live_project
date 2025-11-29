// src/components/AdminComplaintDetails.jsx

import React, { useState } from 'react';
import { useNavigate ,useParams } from 'react-router-dom';
import { complaints } from '../sapmle_data/adminDash_data';
// Assuming this component is used on the route: /admin/complaintdetail/:id
// We use id=5 for the demo data, but in a real app, you would use useParams()

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
        <path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
    </svg>
);

const AdminComplaintDetails = () => {
    const navigate = useNavigate();
     const {id} = useParams();
    // DEMO: Fetch the complaint with id 5 to match the UI image content
    // In a real app: const { id } = useParams(); const complaint = complaints.find(c => c.id === parseInt(id));
    const complaint = complaints.find(c => c.id === parseInt(id)); 

    // 1. State for Admin Actions
    const [newStatus, setNewStatus] = useState(complaint ? complaint.status : 'open');
    const [adminNote, setAdminNote] = useState('');

    if (!complaint) {
        return <div className="p-8 text-center text-xl text-gray-700 min-h-screen flex items-center justify-center">Complaint not found.</div>;
    }

    const { title, category, description, date, statusLabel, employee, email, lastUpdated } = complaint;

    // 2. Handler for Status Update button
    const handleStatusUpdate = (e) => {
        e.preventDefault();
        // In a real application, you would send this data to a backend API:
        // axios.post('/api/admin/update-complaint', { id: complaint.id, newStatus, adminNote })
        // .then(...)

        console.log(`Updating Complaint #${complaint.id}:`);
        console.log(`New Status: ${newStatus}`);
        console.log(`Admin Note: ${adminNote}`);
        
        alert(`Status updated to ${newStatus}. Note saved.`);

        // Optionally navigate back or refresh data
    };

    // Helper to get status color
    const getStatusColor = (status) => {
        switch (status.toUpperCase()) {
            case 'OPEN': return 'text-red-600';
            case 'RESOLVED': return 'text-green-600';
            case 'CLOSED': 
            default: return 'text-gray-900';
        }
    };

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Header Bar */}
            <header className="flex items-center p-4 bg-white border-b border-gray-200">
                <button 
                    className="flex items-center text-gray-700 hover:text-gray-900"
                    onClick={() => { navigate('/Admin/Dashboard') }} // Navigate back to the admin dashboard
                >
                    <BackArrow />
                    <span className="font-medium">Back</span>
                </button>
                <h1 className="flex-grow text-center text-lg font-semibold text-gray-900">
                    Complaint Details
                </h1>
                <div className="w-16"></div>
            </header>

            {/* Main Content Area */}
            <div className="p-4 grid grid-cols-1 md:grid-cols-3 gap-4">
                
                {/* Left Column: Complaint Details and Information */}
                <div className="md:col-span-2 space-y-4">
                    
                    {/* Complaint Details Card */}
                    <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                        <h2 className="text-xl font-bold text-gray-900 mb-1">{title}</h2>
                        <p className="text-sm font-medium text-gray-700 my-4">
                            Category: <span className="font-semibold text-gray-900">{category}</span> 
                        </p>
                        <p className="text-sm font-medium  mb-4">
                            Submitted on: <span className="font-semibold text-gray-900">{date}</span> 
                        </p>

   
                        
                        <h3 className="text-md font-semibold text-gray-900 ">Description</h3>
                        <p className="text-gray-600 whitespace-pre-wrap">
                            {description}
                        </p>
                    </div>

                    {/* Information (Small Card on the Left for smaller screens) */}
                    <div className="md:hidden bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                        <h3 className="text-lg font-dark  mb-4">Information</h3>
                        {/* Information content here (same as right side) */}
                    </div>

                </div>

                {/* Right Column: Information and Admin Actions */}
                <div className="md:col-span-1 space-y-4">
                    
                    {/* Information Card */}
                    <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                        <h3 className="text-lg font-semibold text-gray-900 mb-4">Information</h3>
                        <div className="space-y-3">
                            <div>
                                <p className="text-sm text-gray-500">Status</p>
                                <p className="text-md font-bold text-green-600">{statusLabel}</p>
                            </div>
                            
                            <div>
                                <p className="text-sm text-gray-500">Submitted By</p>
                                <p className="text-md font-medium text-gray-900">{employee}</p>
                                <p className="text-sm text-gray-600">{email}</p>
                            </div>
                            
                            <div>
                                <p className="text-sm text-gray-500">Last Updated</p>
                                <p className="text-md text-gray-900">{lastUpdated}</p>
                            </div>
                        </div>
                    </div>

                    {/* Admin Actions Card */}
                    <div className="bg-white p-6 rounded-lg shadow-lg">
                        <h3 className="text-lg font-semibold text-gray-900 mb-4 border-b pb-2">Admin Actions</h3>
                        
                        <form onSubmit={handleStatusUpdate} className="space-y-4">
                            
                            {/* Update Status */}
                            <div>
                                <label htmlFor="status" className="block text-sm font-medium text-gray-700 mb-1">
                                    Update Status
                                </label>
                                <select
                                    id="status"
                                    name="status"
                                    value={newStatus}
                                    onChange={(e) => setNewStatus(e.target.value)}
                                    className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 p-2 border"
                                >
                                    <option value="open">Open</option>
                                    <option value="in_progress">In Progress</option>
                                    <option value="resolved">Resolved</option>
                                    <option value="closed">Closed</option>
                                </select>
                            </div>

                            {/* Add Note (Optional) */}
                            <div>
                                <label htmlFor="note" className="block text-sm font-medium text-gray-700 mb-1">
                                    Add Note (Optional)
                                </label>
                                <textarea
                                    id="note"
                                    name="note"
                                    rows="3"
                                    value={adminNote}
                                    onChange={(e) => setAdminNote(e.target.value)}
                                    placeholder="Add internal note about this update..."
                                    className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 p-2 border"
                                ></textarea>
                            </div>

                            {/* Submit Button */}
                            <button
onClick={()=>{
  navigate('/Admin/Dashboard')
}}

                                  type="submit"
                                className="w-full justify-center rounded-md border border-transparent bg-blue-500 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                            >
                                Update Status
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdminComplaintDetails;