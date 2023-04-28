// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.19.1/firebase-app.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "https://www.gstatic.com/firebasejs/9.19.1/firebase-auth.js";

//Realtime
import {
  getDatabase,
  set,
  ref,
  update,
  onValue,
} from "https://www.gstatic.com/firebasejs/9.19.1/firebase-database.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAwOSVzfC7nxyovwnK_9QrmB7Bm7_lnKUE",
  authDomain: "e-kur-btn.firebaseapp.com",
  databaseURL: "https://e-kur-btn-default-rtdb.firebaseio.com",
  projectId: "e-kur-btn",
  storageBucket: "e-kur-btn.appspot.com",
  messagingSenderId: "85750033274",
  appId: "1:85750033274:web:05d839612d523a060d04c3",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
const auth = getAuth(app);

export { auth, database, ref, set, onValue, getDatabase };
