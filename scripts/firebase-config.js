// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.19.1/firebase-app.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "https://www.gstatic.com/firebasejs/9.19.1/firebase-auth.js";
import {
  getDatabase,
  set,
  ref,
  update,
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

const signinButton = document.getElementById("signin-btn");
const signupButton = document.getElementById("signup-btn");

signupButton.addEventListener("click", (e) => {
  let nama = document.getElementById("username-signup").value;
  let emailSignup = document.getElementById("email-signup").value;
  let passwordSignup = document.getElementById("pw-signup").value;

  createUserWithEmailAndPassword(auth, emailSignup, passwordSignup)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      set(ref(database, "users/" + user.uid), {
        nama: nama,
        email: emailSignup,
        password: passwordSignup,
      });
    })
    .then(() => {
      alert("Users Telah Ditambahkan");
    })
    .catch((error) => {
      alert(error);
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      // ..
    });
});

signinButton.addEventListener("click", (e) => {
  let emailSignin = document.getElementById("email-signin").value;
  let passwordSignin = document.getElementById("pw-signin").value;

  signInWithEmailAndPassword(auth, emailSignin, passwordSignin)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      location.href = "http://127.0.0.1:5501/index.html";
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      alert(errorMessage);
    });
});
