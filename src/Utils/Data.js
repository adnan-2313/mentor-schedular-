// src/data.js
export const mentors = [
  {
    id: "mentor1",
    name: "John Doe",
    area_of_interest: ["React", "Node.js"],
    available_slots: ["18:00-18:30", "18:30-19:00", "19:00-19:30"],
    booked_slots: [],
  },
  // Add more mentors as needed
];

export const students = [
  {
    id: "student1",
    name: "Jane Smith",
    selected_area_of_interest: "React",
    preferred_mentor: "John Doe",
    selected_duration: "30",
    payment_status: "Pending",
  },
  // Add more students as needed
];
