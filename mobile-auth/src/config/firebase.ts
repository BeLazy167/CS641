// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCRacZeezIEP6iu7eorEr5WLMN3eR_n7_0",
  authDomain: "test-auth-a75a5.firebaseapp.com",
  projectId: "test-auth-a75a5",
  storageBucket: "test-auth-a75a5.appspot.com",
  messagingSenderId: "72027010328",
  appId: "1:72027010328:web:1ebe1685442f0fc40bda6d",
  measurementId: "G-RG2VTTM5LF"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);