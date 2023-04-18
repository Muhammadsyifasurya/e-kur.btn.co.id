import { auth, database } from "./scripts/firebase-config.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "https://www.gstatic.com/firebasejs/9.19.1/firebase-auth.js";

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
      const userSekarang = auth.currentUser;
      console.log(userSekarang.uid);
      location.href = "http://127.0.0.1:5501/index.html";
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      alert(errorMessage);
    });
});
