import { auth, database } from "./scripts/firebase-config.js";

import {
  getDatabase,
  set,
  ref,
  update,
  onValue,
} from "https://www.gstatic.com/firebasejs/9.19.1/firebase-database.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "https://www.gstatic.com/firebasejs/9.19.1/firebase-auth.js";

let userSekarang = auth.onAuthStateChanged;
const loginBtn = document.getElementById("login-btn");
console.log(userSekarang);

auth.onAuthStateChanged((user) => {
  if (user) {
    // User is signed in
    let uid = user.uid;
    let userRef = ref(database, "users/" + uid + "/nama");

    loginBtn.innerHTML = "Keluar";

    onValue(userRef, (snapshot) => {
      const data = snapshot.val();
      let profileName = document.getElementById("profile-name");
      profileName.innerHTML = data;
    });
  } else {
    // No user is signed in
    alert("Tidak ada user masuk nih bos");
  }
});

loginBtn.addEventListener("click", () => {

  signOut(auth)
    .then(() => {
      // Sign-out successful.
      location.replace("/login.html");
    })
    .catch((error) => {
      // An error happened.
    });
});

const startBtn = document.getElementById("start-btn");
startBtn.addEventListener("click", () => {
  if (localStorage.getItem("isLoggedIn")) {
    console.log("aasdokasodkaoskdoaksdokasd");
    window.location.href = "index2.html";
  } else {
    alert("Silakan login terlebih dahulu!");
  }
});

// userRef.on("value", function (snapshot) {
//   document.getElementById("profile-name").innerHTML = "";
// });
