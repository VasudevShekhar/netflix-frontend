import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBQ_F0tUXUWkQvezhdKyGaCSNj7AmBz8eg",
  authDomain: "chatmobile-d86ca.firebaseapp.com",
  projectId: "chatmobile-d86ca",
  storageBucket: "chatmobile-d86ca.appspot.com",
  messagingSenderId: "839836237702",
  appId: "1:839836237702:web:68a2bf37df60cbd047b607",
  measurementId: "G-DTEB7RLL8W",
};

const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);
