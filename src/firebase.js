// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC84yEXTvhQD3Ptrvr4UQiXDr3W3ZXWNzU",
  authDomain: "astraordinaryphotography.firebaseapp.com",
  projectId: "astraordinaryphotography",
  storageBucket: "astraordinaryphotography.appspot.com",
  messagingSenderId: "526758067233",
  appId: "1:526758067233:web:1fd56f95a210f203dd3760",
  measurementId: "G-0BJTQ4BKNV",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const db = getFirestore(app);

export { db };
