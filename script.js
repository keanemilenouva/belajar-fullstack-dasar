// --- 1. SETUP VARIABEL & ELEMEN ---
// Kita tangkap dulu semua elemen yang dibutuhkan di awal
const tombolTema = document.getElementById("btn-tema");
const tombolKirim = document.getElementById("btn-kirim");
const inputNama = document.getElementById("input-nama");
const papanTulis = document.getElementById("teks-konfirmasi");

// --- 2. SETUP EVENT LISTENER (Kabelnya) ---

// A. Untuk Fitur Dark Mode
tombolTema.addEventListener("click", function() {
    document.body.classList.toggle("dark-mode");
});

// B. Untuk Fitur Kirim Pesan
tombolKirim.addEventListener("click", function() {
    let namaUser = inputNama.value;

    if (namaUser === "") {
        papanTulis.innerText = "❌ Ups, nama tidak boleh kosong!";
        papanTulis.style.color = "red";
    } else {
        papanTulis.innerText = "✅ Terima kasih " + namaUser + ", pesan diterima!";
        papanTulis.style.color = "lime"; // Lime lebih terang di dark mode
        inputNama.value = "";
    }
});

// C. Fitur Spesial: Tekan Enter untuk Kirim
inputNama.addEventListener("keypress", function(event) {
    // Cek apakah tombol yang ditekan adalah "Enter"
    if (event.key === "Enter") {
        tombolKirim.click();
    }
});
