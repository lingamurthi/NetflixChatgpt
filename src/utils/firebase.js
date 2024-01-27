// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.FIREBASECONFIGAPTKEY,
  authDomain: "netflixgpt-36586.firebaseapp.com",
  projectId: "netflixgpt-36586",
  storageBucket: "netflixgpt-36586.appspot.com",
  messagingSenderId: "409982314618",
  appId: "1:409982314618:web:3cdfe1b6e7616be1d7b3c3",
  measurementId: "G-G01ZK9C4XD",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
