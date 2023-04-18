import { auth, database } from "./scripts/firebase-config.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "https://www.gstatic.com/firebasejs/9.19.1/firebase-auth.js";

let logoutButton = document.getElementById("logout-btn");

logoutButton.addEventListener("click", (e) => {
  signOut(auth)
    .then(() => {
      // Sign-out successful.
      alert("sukses logout");
      window.location.href = "index.html";
    })
    .catch((error) => {
      // An error happened.
    });
});
