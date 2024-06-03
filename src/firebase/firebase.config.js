import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyAY1w_1LLg8-XFEuXnKJurodR5EWIQQKLw",
    authDomain: "stride-practice-d655b.firebaseapp.com",
    projectId: "stride-practice-d655b",
    storageBucket: "stride-practice-d655b.appspot.com",
    messagingSenderId: "995672820857",
    appId: "1:995672820857:web:585be0abe93fd49fd418a8"
  };

// Initialize Firebase
export const app = initializeApp(firebaseConfig);