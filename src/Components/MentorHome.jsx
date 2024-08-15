import { useState } from "react";
import { doc, setDoc, updateDoc, getDoc } from "firebase/firestore";
import { firebase } from "../Database/Firebase"; // Import Firestore instance
import Navbar from "../Components/Navbar";
import { GiBackwardTime } from "react-icons/gi";
import { AiOutlineHome } from "react-icons/ai";
const menuItems = [
  {
    id: 1,
    icon: <AiOutlineHome/>,
    label: "Dashboard",
    link: "/mentor",
  },
  {
    id: 2,
    icon: <GiBackwardTime/>,
    label: "Logout",
    link: "/",
  },
];

const MentorDetails = () => {
  const [showForm, setShowForm] = useState(false);
  const [showOldForm, setShowOldForm] = useState(false);
  const [mentorId, setMentorId] = useState(""); // Mentor ID input
  const [mentorData, setMentorData] = useState({
    name: "",
    area_of_interest: "",
    available_slots: "",
    img: "",
  });

  // Fetch mentor data based on mentor ID
  const fetchMentorData = async () => {
    if (!mentorId) return;

    const mentorRef = doc(firebase, "mentors", mentorId);
    const mentorSnap = await getDoc(mentorRef);

    if (mentorSnap.exists()) {
      setMentorData(mentorSnap.data());
      setShowForm(true); // Show form to update mentor details
      setShowOldForm(false); // Hide "Fetch By ID" form
    } else {
      console.log("No such document!");
      alert("Mentor ID not found. Please check the ID or add a new mentor.");
    }
  };

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setMentorData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const mentorRef = doc(firebase, "mentors", mentorId);

      // Update existing document or create new one
      await setDoc(mentorRef, mentorData, { merge: true });

      alert("Mentor details saved successfully!");
      // Reset form after successful submission
      setMentorData({
        name: "",
        area_of_interest: "",
        available_slots: "",
        img: "",
      });
      setMentorId("");
    } catch (error) {
      console.error("Error writing document: ", error);
    }
  };

  return (
    <div className="flex flex-row">
      <Navbar menuItems={menuItems} />

      <div className="w-full p-[50px_80px] flex flex-col gap-2  border-2 items-center">
        <h1 className="font-montserrat text-center mb-[50px] text-3xl font-[450] text-blue-500">
          Add/Update Mentor Details
        </h1>
        <div>
          <button
            type="button"
            onClick={() => {
              setShowOldForm(true); // Show the form for fetching by ID
              setShowForm(false); // Hide the new mentor form
              setMentorData({
                name: "",
                area_of_interest: "",
                available_slots: "",
                img: "",
              });
            }}
            className="w-[8rem] mx-[10px] p-[10px] bg-blue-400 text-white rounded-md"
          >
            Fetch By ID
          </button>
          <button
            type="button"
            onClick={() => {
              setShowForm(true); // Show the form for adding a new mentor
              setShowOldForm(false); // Hide the fetch by ID form
              setMentorData({
                name: "",
                area_of_interest: "",
                available_slots: "",
                img: "",
              });
            }}
            className="w-[10rem] p-[10px] bg-blue-400 text-white rounded-md"
          >
            Add New Mentor
          </button>
        </div>

        <div className="w-[30rem]">
          <form
            className="w-full max-w-[800px] font-DMSANS mt-[30px] p-[40px] shadow-md rounded-lg"
            onSubmit={handleSubmit}
          >
            {showOldForm && (
              <>
                <h2 className="text-2xl w-full font-semibold mb-4">
                  Fetch Mentor Details by ID
                </h2>
                <div className="mb-4">
                  <label className="block text-gray-700">Mentor ID:</label>
                  <input
                    type="text"
                    name="mentorId"
                    value={mentorId}
                    onChange={(e) => setMentorId(e.target.value)}
                    className="w-full px-3 py-2 border rounded-md"
                    placeholder="Enter unique mentor ID"
                  />
                  <button
                    type="button"
                    onClick={fetchMentorData}
                    className="mt-2 px-4 py-2 bg-blue-400 text-white rounded-md"
                  >
                    Load Mentor Data
                  </button>
                </div>
              </>
            )}
            {showForm && (
              <>
                <div className="mb-4">
                  <label className="block text-gray-700">Name:</label>
                  <input
                    type="text"
                    name="name"
                    value={mentorData.name}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border rounded-md"
                    placeholder="Enter mentor's name"
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700">
                    Area of Interest:
                  </label>
                  <input
                    type="text"
                    name="area_of_interest"
                    value={mentorData.area_of_interest}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border rounded-md"
                    placeholder="Enter area of interest (comma-separated)"
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700">
                    Available Slots:
                  </label>
                  <input
                    type="text"
                    name="available_slots"
                    value={mentorData.available_slots}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border rounded-md"
                    placeholder="Enter available slots (comma-separated)"
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700">Image URL:</label>
                  <input
                    type="text"
                    name="img"
                    value={mentorData.img}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border rounded-md"
                    placeholder="Enter image URL"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-2 bg-green-500 text-white rounded-md"
                >
                  Save Details
                </button>
              </>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default MentorDetails;
