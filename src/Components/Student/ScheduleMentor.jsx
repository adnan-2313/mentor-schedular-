import React, { useState, useEffect } from "react";
import Navbar from "../Navbar";
import { collection, getDocs, doc, updateDoc } from "firebase/firestore";
import { firebase } from "../../Database/Firebase"; // Adjust path as necessary
import { GiBackwardTime } from "react-icons/gi";
import { RiCalendarScheduleLine } from "react-icons/ri";

const menuItems = [
  {
    id: 1,
    icon: <RiCalendarScheduleLine />,
    label: "Mentor",
    link: "/student",
  },
  {
    id: 2,
    icon: <GiBackwardTime />,
    label: "Logout",
    link: "/",
  },
];
const ScheduleMentor = () => {
  const [mentors, setMentors] = useState([]);
  const [selectedMentor, setSelectedMentor] = useState(null);
  const [selectedArea, setSelectedArea] = useState("");
  const [duration, setDuration] = useState(30);
  const [availableSlots, setAvailableSlots] = useState([]);
  const [isPreferred, setIsPreferred] = useState(false);
  const [cost, setCost] = useState(0);
  const [chosenSlot, setChosenSlot] = useState("");

  useEffect(() => {
    const fetchMentors = async () => {
      try {
        const mentorsCollection = collection(firebase, "mentors");
        const mentorSnapshot = await getDocs(mentorsCollection);
        const mentorList = mentorSnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        console.log("Fetched mentors:", mentorList); // Debugging line
        setMentors(mentorList);
      } catch (error) {
        console.error("Error fetching mentors: ", error);
      }
    };

    fetchMentors();
  }, []);

  const handleMentorSelection = (mentor) => {
    console.log("Selected mentor:", mentor);
    setSelectedMentor(mentor);

    // Convert the available_slots string to an array if it is a string
    const slots = mentor.available_slots
      ? mentor.available_slots.split(",") // Change delimiter if needed
      : [];
    console.log("Available slots:", slots);
    setAvailableSlots(slots);
    setChosenSlot(slots.length > 0 ? slots[0] : "");
  };

  const calculateCost = () => {
    const baseCost = duration === 30 ? 2000 : duration === 45 ? 3000 : 4000;
    const premiumCharge = isPreferred ? 1000 : 0;
    setCost(baseCost + premiumCharge);
  };

  const handleAreaSelection = async (area) => {
    setSelectedArea(area);

    // Find the first available mentor from the selected area
    const areaMentors = mentors.filter((mentor) =>
      mentor.area_of_interest.includes(area)
    );

    if (areaMentors.length > 0) {
      const availableMentor = areaMentors[0]; // You can enhance this to handle multiple mentors
      setSelectedMentor(availableMentor);
      setAvailableSlots(
        Array.isArray(availableMentor.available_slots)
          ? availableMentor.available_slots
          : []
      );
      setChosenSlot(
        availableMentor.available_slots &&
          availableMentor.available_slots.length > 0
          ? availableMentor.available_slots[0]
          : ""
      );
    }
  };

  const handleSlotSelection = (slot) => {
    setChosenSlot(slot);
  };

  const handleSchedule = async () => {
    if (!selectedMentor || !chosenSlot) {
      alert("Please select a mentor and slot.");
      return;
    }

    // Simulate scheduling and update mentor's availability
    try {
      const mentorRef = doc(firebase, "mentors", selectedMentor.id);
      const updatedSlots = selectedMentor.available_slots.filter(
        (slot) => slot !== chosenSlot
      );
      await updateDoc(mentorRef, { available_slots: updatedSlots });

      alert("Session scheduled successfully!");
    } catch (error) {
      console.error("Error scheduling session: ", error);
    }
  };

  return (
    <div className="flex flex-row border-2 ">
      <Navbar menuItems={menuItems} />
      <div className="w-full font-DMSANS max-w-[1100px] p-[80px_100px] flex flex-col">
        <h1 className="text-[2rem] font-semibold mb-6">Schedule Your Mentor</h1>

        {/* Area of Interest Selection */}
        <div className="mb-6">
          <label
            htmlFor="area"
            className="block text-[1.3rem] font-medium mb-2"
          >
            Select Area of Interest
          </label>
          <select
            id="area"
            value={selectedArea}
            onChange={(e) => handleAreaSelection(e.target.value)}
            className="shadow-md p-[10px] w-full border-[0.1px] border-gray-400 rounded-[5px] outline-blue-500"
          >
            <option value="" disabled>
              Select Area
            </option>
            {[
              ...new Set(mentors.flatMap((mentor) => mentor.area_of_interest)),
            ].map((area, index) => (
              <option key={index} value={area}>
                {area}
              </option>
            ))}
          </select>
        </div>

        {/* Mentor List */}
        <div className="w-full flex flex-wrap gap-5 mb-6">
          {mentors.map((mentor) => (
            <div
              key={mentor.id}
              className={`w-[16rem] p-[20px] text-[1.3rem] font-[450] shadow-[0px_-2px_10px_rgba(0,0,0,0.2)] flex flex-col items-center ${
                selectedMentor?.id === mentor.id
                  ? "border-blue-500 border-2"
                  : ""
              }`}
              onClick={() => handleMentorSelection(mentor)}
            >
              <img
                src={mentor.img}
                alt="Mentor"
                className="w-[100px] h-[100px] mb-4"
              />
              <span className="text-center">Name: {mentor.name}</span>
              <span className="text-[1.1rem] text-center mb-3">
                Area of Interest: {mentor.area_of_interest.split(" ").join(",")}
              </span>
            </div>
          ))}
        </div>

        {/* Slots Selection */}
        {selectedMentor && (
          <div className="mb-6">
            <label className="block text-[1.3rem] font-medium mb-2">
              Select Slot
            </label>
            <select
              value={chosenSlot}
              onChange={(e) => handleSlotSelection(e.target.value)}
              className="shadow-md p-[10px] w-full border-[0.1px] border-gray-400 rounded-[5px] outline-blue-500"
            >
              {availableSlots.map((slot, index) => (
                <option key={index} value={slot}>
                  {slot}
                </option>
              ))}
            </select>
          </div>
        )}

        {/* Duration Selection */}
        <div className="my-6">
          <label className="block text-[1.3rem] font-medium mb-2">
            Select Duration
          </label>
          <select
            value={duration}
            onChange={(e) => setDuration(Number(e.target.value))}
            className="shadow-md p-[10px] w-full border-[0.1px] border-gray-400 rounded-[5px] outline-blue-500"
          >
            <option value={30}>30 minutes</option>
            <option value={45}>45 minutes</option>
            <option value={60}>60 minutes</option>
          </select>
        </div>

        {/* Preferred Mentor Selection */}
        <div className="mb-6">
          <label className="flex items-center text-[1.3rem] font-medium">
            <input
              type="checkbox"
              checked={isPreferred}
              onChange={(e) => setIsPreferred(e.target.checked)}
              className="mr-2"
            />
            Preferred Mentor (Additional Charge)
          </label>
        </div>

        {/* Calculate Cost Button */}
        <div className="mb-6">
          <button
            onClick={calculateCost}
            className="px-[20px] py-[10px] bg-blue-500 text-white rounded-[5px]"
          >
            Calculate Cost
          </button>
          {cost > 0 && (
            <div className="mt-4 text-[1.5rem] font-semibold">
              Total Cost: ₹{cost}
            </div>
          )}
        </div>

        {/* Schedule Button */}
        <div className="mb-6">
          <button
            onClick={handleSchedule}
            className="px-[20px] py-[10px] bg-green-500 text-white rounded-[5px]"
          >
            Schedule
          </button>
        </div>
      </div>
    </div>
  );
};

export default ScheduleMentor;
