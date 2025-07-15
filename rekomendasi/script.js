const kategori = localStorage.getItem('kategori');
console.log(kategori);

const outKategori = document.getElementById('kategori');
const card1 = document.getElementById('card1');
const card2 = document.getElementById('card2');
const card3 = document.getElementById('card3');
const deskripsi = document.getElementById('deskripsi');

function bmiCategory(kategori) {
    if (kategori == 'Normal') return ['Normal', 0];
    if (kategori == 'Underweight') return ['Underweight', 1];
    if (kategori == 'Overweight') return ['Overweight', 2];
    if (kategori == 'Obese') return ['Obese', 3];
}

outKategori.innerHTML = bmiCategory(kategori)[0];

const gambar = [
    {
        kategori: 'normal',
        card1: '../../assets/rekomendasi/jogging.webp',
        card2: '../../assets/rekomendasi/jogging.webp',
        card3: '../../assets/rekomendasi/jogging.webp',
        deskripsi: 'Berdasarkan BMI yang di dapat, kamu bisa menjaga kesehatan dengan olahraga seperti jogging, bersepeda, atau senam. Tapi kalau ingin menambah massa otot, kamu bisa coba olahraga beban seperti gym atau calisthenic.'
    }
]

const index = bmiCategory(kategori)[1];
const rekomendasi = gambar[index];

if (rekomendasi) {
    // card1.style.background = `url(${rekomendasi.card1})`;
    // console.log(rekomendasi.card1);
}