
import { initializeApp } from "firebase/app";
import { getAuth} from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
const firebaseConfig = {
  apiKey: "AIzaSyC2RLZr8ModZjLofHwI6154FJ9DCvucb9U",
  authDomain: "chatapp-live-7ea34.firebaseapp.com",
  projectId: "chatapp-live-7ea34",
  storageBucket: "chatapp-live-7ea34.appspot.com",
  messagingSenderId: "21208294432",
  appId: "1:21208294432:web:8ea1785aa38dcbdb004845"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();