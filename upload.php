<?php
if (isset($_FILES['foto-ktp']) && isset($_FILES['foto-npwp']) && isset($_FILES['foto-usaha'])) {
    // Mendapatkan informasi file
    $file_ktp = $_FILES['foto-ktp'];
    $file_npwp = $_FILES['foto-npwp'];
    $file_usaha = $_FILES['foto-usaha'];

    // Mendapatkan nama file
    $nama_file_ktp = $file_ktp['name'];
    $nama_file_npwp = $file_npwp['name'];
    $nama_file_usaha = $file_usaha['name'];

    // Mendapatkan ukuran file
    $ukuran_file_ktp = $file_ktp['size'];
    $ukuran_file_npwp = $file_npwp['size'];
    $ukuran_file_usaha = $file_usaha['size'];

    // Mendapatkan tipe file
    $tipe_file_ktp = $file_ktp['type'];
    $tipe_file_npwp = $file_npwp['type'];
    $tipe_file_usaha = $file_usaha['type'];

    // Mendapatkan nama sementara file
    $tmp_file_ktp = $file_ktp['tmp_name'];
    $tmp_file_npwp = $file_npwp['tmp_name'];
    $tmp_file_usaha = $file_usaha['tmp_name'];

    // Memindahkan file ke direktori yang diinginkan
    $lokasi_upload = "uploads/";

    if (move_uploaded_file($tmp_file_ktp, $lokasi_upload . $nama_file_ktp) && move_uploaded_file($tmp_file_npwp, $lokasi_upload . $nama_file_npwp) && move_uploaded_file($tmp_file_usaha, $lokasi_upload . $nama_file_usaha)) {
        // Jika upload berhasil
        echo "File berhasil diupload.";
    } else {
        // Jika upload gagal
        echo "File gagal diupload.";
    }
}
