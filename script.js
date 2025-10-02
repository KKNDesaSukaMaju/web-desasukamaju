// JAM DIGITAL
function updateJam() {
  const sekarang = new Date();
  document.getElementById("jam").innerText = sekarang.toLocaleTimeString();
}
setInterval(updateJam, 1000);

// SLIDER FOTO
let index = 0;
const gambar = ["img/kegiatan1.jpg", "img/kegiatan2.jpg", "img/kegiatan3.jpg"];
function gantiGambar() {
  index = (index + 1) % gambar.length;
  document.getElementById("slider").innerHTML = `<img src="${gambar[index]}" alt="Kegiatan">`;
}
setInterval(gantiGambar, 3000); // ganti tiap 3 detik

// CEK FORM KONTAK
function cekForm() {
  let nama = document.getElementById("nama").value;
  let email = document.getElementById("email").value;
  let pesan = document.getElementById("pesan").value;

  if(nama === "" || email === "" || pesan === "") {
    alert("Semua kolom harus diisi!");
    return false;
  }
  alert("Pesan berhasil dikirim!");
  return true;
}
