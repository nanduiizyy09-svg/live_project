// src/components/ComplaintDetails.jsx
import React from 'react';
import { userComplaints } from '../sapmle_data/UserDash_data'; 
import { useNavigate ,useParams} from 'react-router-dom';

// Helper component to render the back arrow (you might use an actual icon library like Lucide or Heroicons)
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

const ComplaintDetails = () => {

  
  const {id} = useParams()
  const navigate = useNavigate();
  // Get the data for the first complaint (id: 1) to match the UI structure
  const complaint = userComplaints.find(c => c.id === parseInt(id));

  if (!complaint) {
return <div className="p-4 font-bold text-gray-700 text-4xl flex items-center justify-center min-h-screen">Complaint not found.</div>;  }

  // Destructure the data for easier use
  const { category, description, submittedDate, status, submittedBy, email, lastUpdated } = complaint;

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Bar */}
      <header className="flex items-center p-4 bg-white border-b border-gray-200">
        <button className="flex items-center text-gray-700 hover:text-gray-900"
        onClick={()=>{
navigate('/User/Dashboard')
        }}
        
        >
          <BackArrow />
          <span className="font-medium">Back</span>
        </button>
        <h1 className="flex-grow text-center text-lg font-semibold text-gray-900">
          Complaint Details
        </h1>
        {/* Empty space for alignment */}
        <div className="w-16"></div> 
      </header>

      <div className="p-4 space-y-4">
        {/* Complaint Details Section */}
        <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Information</h3>

          <h3 className="text-md font-semibold text-gray-900 ">Category </h3>
          <p className="text-gray-600 break-words whitespace-pre-wrap mb-2">
            {category}
          </p>

        
          
   
          <h3 className="text-md font-semibold text-gray-900 ">Description</h3>
          <p className="text-gray-600 break-words whitespace-pre-wrap mb-3">
            {description}
          </p>
          <p>
          • Submitted on <span className="font-semibold text-gray-900">{submittedDate}</span>
          </p>
        </div>

        {/* Information Section */}
        <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Updates</h3>
          
          <div className="space-y-3">
            <div>
              <p className="text-md font-medium ">Status</p>
              <p className={`text-sm text-gray-500 font-medium  ${status === 'IN PROGRESS' ? 'text-green-600' : 'text-gray-900'}`}>{status}</p>
            </div>
            
            <div>
              <p className="text-md font-medium">Submitted By</p>
              <p className="text-md text-gray-600">{submittedBy}</p>
              <p className="text-md text-gray-600">{email}</p>
            </div>
            
            <div>
              <p className="text-md font-medium">Last Updated</p>
              <p className="text-md text-gray-900">{lastUpdated}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComplaintDetails;