import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyAOcdhLrFFYgeCxGVY2hkrv842HfJQrclQ",
  authDomain: "mentor-schedule-app.firebaseapp.com",
  projectId: "mentor-schedule-app",
  storageBucket: "mentor-schedule-app.appspot.com",
  messagingSenderId: "413960154726",
  appId: "1:413960154726:web:35a331291b67f3df2847a7",
  measurementId: "G-XGFQ9RFZLD",
};

const app = initializeApp(firebaseConfig);
export const firebase = getFirestore(app)



