// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBvYvlZAZ7l48WDnebLRZaAaLYsvqzoW1Q",
  authDomain: "fooddemo-d159b.firebaseapp.com",
  projectId: "fooddemo-d159b",
  storageBucket: "fooddemo-d159b.appspot.com",
  messagingSenderId: "613165639379",
  appId: "1:613165639379:web:bd05dbb730795a2c561626",
  measurementId: "G-BHTNMC31XR",
  databaseURL:"https://fooddemo-d159b-default-rtdb.asia-southeast1.firebasedatabase.app/"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export default app;