// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"; // ✅ Add this
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyDU8eJawC2AprH8wCVIZsniGqRRQXSUgsw",
  authDomain: "movierecommendationapp-4268c.firebaseapp.com",
  projectId: "movierecommendationapp-4268c",
  storageBucket: "movierecommendationapp-4268c.appspot.com",
  messagingSenderId: "845417063751",
  appId: "1:845417063751:web:11fc709549d3917fa21862",
  measurementId: "G-YN6681SPFZ"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app); // ✅ Export auth
const analytics = getAnalytics(app);
