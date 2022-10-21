// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDmcX_BBzlTv_5gm7FdV-VSmVJZImAycPU",
  authDomain: "dts4b-30-final.firebaseapp.com",
  projectId: "dts4b-30-final",
  storageBucket: "dts4b-30-final.appspot.com",
  messagingSenderId: "1096688234355",
  appId: "1:1096688234355:web:de66bdb366e13e9b691f06",
  measurementId: "G-70K7M42T1H",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const auth = getAuth(app);

export { auth };
