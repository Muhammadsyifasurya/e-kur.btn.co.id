// Memilih elemen form dan hasil simulasi
const simulasiForm = document.getElementById("simulasi-form");
const hasilSimulasi = document.getElementById("hasil-simulasi");

// Menambahkan event listener pada form
simulasiForm.addEventListener("submit", function (e) {
  // Mencegah form untuk melakukan pengiriman data
  e.preventDefault();

  // Mendapatkan nilai input dari form
  const jenisKur = document.getElementById("jenis-kur").value;
  const jenisKredit = document.getElementById("jenis-kredit").value;
  const jangkaWaktu = document.getElementById("jangka-waktu").value;
  const plafon = document.getElementById("plafon").value;

  // Menghitung total bunga
  let bunga = 0;
  if (jenisKur === "mikro" && jenisKredit === "modal-kerja") {
    if (jangkaWaktu >= 1 && jangkaWaktu <= 3) {
      bunga = 0.06;
    } else {
      bunga = 0.07;
    }
  } else if (jenisKur === "mikro" && jenisKredit === "investasi") {
    if (jangkaWaktu >= 1 && jangkaWaktu <= 5) {
      bunga = 0.06;
    } else {
      bunga = 0.07;
    }
  } else if (jenisKur === "kecil" && jenisKredit === "modal-kerja") {
    if (jangkaWaktu >= 1 && jangkaWaktu <= 4) {
      bunga = 0.06;
    } else {
      bunga = 0.07;
    }
  } else if (jenisKur === "kecil" && jenisKredit === "investasi") {
    if (jangkaWaktu >= 1 && jangkaWaktu <= 5) {
      bunga = 0.06;
    } else {
      bunga = 0.07;
    }
  }

  // Menghitung cicilan per bulan
  const jmlBulan = jangkaWaktu * 12;

  const cicilanPokok = plafon / jmlBulan;
  const bungaPertahun = (plafon * bunga) / 12;
  const cicilanPerBulan = cicilanPokok + bungaPertahun;

  // Menghitung total bunga dan total pinjaman
  const totalPinjaman = cicilanPerBulan * jmlBulan;
  const totalBunga = totalPinjaman - plafon;

  // Menampilkan hasil simulasi pada halaman
  hasilSimulasi.innerHTML = `
    <h2>Hasil Simulasi</h2>
    <p>Jenis KUR: ${jenisKur === "mikro" ? "KUR Mikro" : "KUR Kecil"}</p>
    <p>Jenis Kredit: ${
      jenisKredit === "modal-kerja" ? "Modal Kerja" : "Investasi"
    }</p>
    <p>Jangka Waktu: ${jangkaWaktu} tahun</p>
    <p>Plafon: Rp${plafon.toLocaleString()}</p>
    <p>Suku Bunga: ${bunga * 100}%</p>
    <h3>Cicilan per Bulan: Rp. ${cicilanPerBulan.toLocaleString()}</h3>
    <p>Total Bunga: Rp${totalBunga.toLocaleString()}</p>
  `;
});
