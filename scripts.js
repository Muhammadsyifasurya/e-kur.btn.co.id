// Tombol "Mulai"
const startBtn = document.querySelector("#start-btn");
startBtn.addEventListener("click", () => {
  if (localStorage.getItem("isLoggedIn")) {
    // Jika sudah login, pindah ke halaman formpermohonan.html
    window.location.href = "index2.html";
  } else {
    // Jika belum login, tampilkan pesan error
    alert("Silakan login terlebih dahulu!");
  }
});

// Tombol "Masuk"
const loginBtn = document.querySelector("#login-btn");
loginBtn.addEventListener("click", () => {
  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);
  const user = auth.currentUser;

  if (user) {
    // Jika sudah login, keluar dari akun
    signOut(auth)
      .then(() => {
        // Setelah logout berhasil, refresh halaman
        location.reload();
      })
      .catch((error) => {
        console.log(error.message);
      });
  } else {
    // Jika belum login, tampilkan popup login
    const provider = new firebase.auth.GoogleAuthProvider();
    auth
      .signInWithPopup(provider)
      .then(() => {
        // Setelah login berhasil, ubah teks tombol menjadi "Keluar"
        loginBtn.innerHTML = "Keluar";

        // Tambahkan event listener baru untuk menangani logout
        loginBtn.addEventListener("click", () => {
          signOut(auth)
            .then(() => {
              // Setelah logout berhasil, refresh halaman
              location.reload();
            })
            .catch((error) => {
              console.log(error.message);
            });
        });

        // Set localStorage untuk menandakan bahwa pengguna sudah login
        localStorage.setItem("isLoggedIn", "true");

        // Pindah ke halaman formpermohonan.html
        window.location.href = "index2.html";
      })
      .catch((error) => {
        console.log(error.message);
      });
  }
});
