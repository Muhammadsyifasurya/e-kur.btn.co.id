import {
  auth,
  database,
  set,
  ref,
  getDatabase,
  onValue,
} from "./scripts/firebase-config.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "https://www.gstatic.com/firebasejs/9.19.1/firebase-auth.js";

const signInButton = document.getElementById("signin-btn");
const signUpButton = document.getElementById("signup-btn");
const signInButtonMove = document.getElementById("sign-in-btn");
const signUpButtonMove = document.getElementById("sign-up-btn");
const container = document.querySelector(".container");

signUpButton.addEventListener("click", (e) => {
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

signInButton.addEventListener("click", (e) => {
  let emailSignin = document.getElementById("email-signin").value;
  let passwordSignin = document.getElementById("pw-signin").value;
  signInWithEmailAndPassword(auth, emailSignin, passwordSignin)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      const userSekarang = auth.currentUser;
      console.log(userSekarang.uid);
      window.location.href = "index.html";
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      alert(errorMessage);
    });
});

signUpButtonMove.addEventListener("click", (e) => {
  container.classList.add("sign-up-mode");
});

signInButtonMove.addEventListener("click", (e) => {
  container.classList.remove("sign-up-mode");
});
