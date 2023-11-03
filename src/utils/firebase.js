// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDEpn_IVqFxuFrkurQwMeGWvIh_UtU4WXU",
  authDomain: "netflix-gpt-a26c0.firebaseapp.com",
  projectId: "netflix-gpt-a26c0",
  storageBucket: "netflix-gpt-a26c0.appspot.com",
  messagingSenderId: "971337097944",
  appId: "1:971337097944:web:04a5c8bf0d151ff0b72dad",
  measurementId: "G-PZKPXTL3BH",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
