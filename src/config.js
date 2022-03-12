import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyARc8dvDfz0WL6OTLzwe8LvWzh99wPrJp8",
  authDomain: "resume-builder-5552b.firebaseapp.com",
  projectId: "resume-builder-5552b",
  storageBucket: "resume-builder-5552b.appspot.com",
  messagingSenderId: "575147562892",
  appId: "1:575147562892:web:ff63781d96058ea8a5e8a9",
  measurementId: "G-62V27C680J"
};
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app);
