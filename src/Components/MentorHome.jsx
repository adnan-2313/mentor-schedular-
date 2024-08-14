// src/components/MentorSchedule.js
import React, { useState } from 'react';
import { mentors } from '../Utils/Data.js';

const MentorHome = ({ onMentorSelect }) => {
  const [selectedMentor, setSelectedMentor] = useState(mentors[0]);

  const handleMentorChange = (event) => {
    const mentor = mentors.find(m => m.id === event.target.value);
    setSelectedMentor(mentor);
    onMentorSelect(mentor);
  };

  return (
    <div className="mb-6">
      <h2 className="text-2xl font-semibold mb-2">Mentor Schedule</h2>
      <select 
        className="border border-gray-300 p-2 rounded" 
        onChange={handleMentorChange}
      >
        {mentors.map(mentor => (
          <option key={mentor.id} value={mentor.id}>
            {mentor.name}
          </option>
        ))}
      </select>
      <div className="mt-4">
        <h3 className="text-xl font-medium mb-2">Available Slots:</h3>
        {selectedMentor.available_slots.map(slot => (
          <p key={slot} className="border-b border-gray-200 py-2">{slot}</p>
        ))}
      </div>
    </div>
  );
};

export default MentorHome;
