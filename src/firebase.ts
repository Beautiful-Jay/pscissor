import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyACQhvHs13hWWgV3bIAk5srTLBmJRFDwoU",
  authDomain: "scissorsapp-a4df8.firebaseapp.com",
  projectId: "scissorsapp-a4df8",
  storageBucket: "scissorsapp-a4df8.appspot.com",
  messagingSenderId: "911185977906",
  appId: "1:911185977906:web:10de2aa95f5e698fa9122b",
  measurementId: "G-MM5YQCM238"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth(app);
export default app;