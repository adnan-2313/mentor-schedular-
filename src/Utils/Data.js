// src/data.js
export const mentors = [
  {
    id: "mentor1",
    name: "John Doe",
    gender: "male",
    area_of_interest: ["React", "Node.js"],
    img: "https://cdn1.iconfinder.com/data/icons/user-pictures/101/malecostume-512.png",
    available_slots: ["18:00-18:30", "18:30-19:00", "19:00-19:30"],
    booked_slots: [],
  },
  {
    id: "mentor2",
    name: "Ayesha Ahmed",
    gender: "female",
    area_of_interest: ["ML", "DL", "AI"],
    img: "https://www.shareicon.net/data/512x512/2016/09/15/829453_user_512x512.png",
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
