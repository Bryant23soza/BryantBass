// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD9SIIGKwu_bf0wNJw7BCBxsVTdApHsT2I",
  authDomain: "bryantbass.firebaseapp.com",
  projectId: "bryantbass",
  storageBucket: "bryantbass.appspot.com",
  messagingSenderId: "904422458636",
  appId: "1:904422458636:web:621be569c4b10970493529",
  measurementId: "G-KCB2NTNXGX",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const storage = getStorage(app);