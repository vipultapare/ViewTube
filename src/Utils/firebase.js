// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAsKZKX26KgFFT4o7Hjq3qUGEGTEKGzmJw",
  authDomain: "viewtube-b8f36.firebaseapp.com",
  projectId: "viewtube-b8f36",
  storageBucket: "viewtube-b8f36.appspot.com",
  messagingSenderId: "747588139145",
  appId: "1:747588139145:web:428eb986f15a3369572e58",
  measurementId: "G-040DN0HXXL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();