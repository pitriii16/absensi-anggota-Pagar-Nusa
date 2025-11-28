"app.js"
// LOAD DATA AWAL
document.addEventListener("DOMContentLoaded", loadAbsensi);

// SUBMIT FORM
document.getElementById("absensiForm").addEventListener("submit", function(e){
    e.preventDefault();

    const nama = document.getElementById("nama").value;
    const tingkatan = document.getElementById("tingkatan").value;

    if(nama.trim() === "" || tingkatan === "") return;

    const data = {
        nama: nama,
        tingkatan: tingkatan,
        waktu: new Date().toLocaleString("id-ID")
    };

    tambahKeDaftar(data);
    simpanKeLocalStorage(data);

    document.getElementById("nama").value = "";
    document.getElementById("tingkatan").value = "";
});

// TAMBAH KE LIST
function tambahKeDaftar(data){
    const li = document.createElement("li");
    li.innerHTML = `${data.nama} • ${data.tingkatan} • <small>${data.waktu}</small>`;
    document.getElementById("daftarHadir").appendChild(li);
}

// SIMPAN LOCAL STORAGE
function simpanKeLocalStorage(data){
    let arr = JSON.parse(localStorage.getItem("absensiPN")) || [];
    arr.push(data);
    localStorage.setItem("absensiPN", JSON.stringify(arr));
}

// LOAD LOCAL STORAGE
function loadAbsensi(){
    let arr = JSON.parse(localStorage.getItem("absensiPN")) || [];
    arr.forEach(d => tambahKeDaftar(d));
}
