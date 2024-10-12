import { initializeApp } from "firebase/app";
import Constants from 'expo-constants';

// const firebaseConfig = {
//   apiKey: Constants.expoConfig?.extra?.firebaseApiKey,
//   authDomain: Constants.expoConfig?.extra?.firebaseAuthDomain,
//   projectId: Constants.expoConfig?.extra?.firebaseProjectId,
//   storageBucket: Constants.expoConfig?.extra?.firebaseStorageBucket,
//   messagingSenderId: Constants.expoConfig?.extra?.firebaseMessagingSenderId,
//   appId: Constants.expoConfig?.extra?.firebaseAppId,
//   measurementId: Constants.expoConfig?.extra?.firebaseMeasurementId
// };
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
const app = initializeApp(firebaseConfig);

export { app };
