
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyDREdSTjrk0nHo7nlZmNXUFPPTokR3bVzY",
  authDomain: "new-home-69b84.firebaseapp.com",
  projectId: "new-home-69b84",
  storageBucket: "new-home-69b84.appspot.com",
  messagingSenderId: "495930988397",
  appId: "1:495930988397:web:b66676f44a2036dcaeac64",
  measurementId: "G-5ZL2L3E67G"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const db = getFirestore(app)

export {db}