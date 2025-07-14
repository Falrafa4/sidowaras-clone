// localStorage.setItem("bmt", 2608);
const bmt = localStorage.getItem("bmt");
console.log(bmt);
const rentangBmt = document.getElementById("rentang-bmr");
const menuPagi = document.getElementById("pagi");
const menuSiang = document.getElementById("siang");
const menuMalam = document.getElementById("malam");
const menuSnack = document.getElementById("snack");
const menuKesimpulan = document.getElementById("kesimpulan");

function bmtRange(bmt) {
    if (bmt === "null" || bmt === null) return ["Rentang BMR: ", 0];
    if (bmt > 3500) return ["You're too fat. Get a gym membership.", 6];
    if (bmt > 3000) return ["Rentang BMR: 3001 - 3500", 5];
    if (bmt > 2500) return ["Rentang BMR: 2501 - 3000", 4];
    if (bmt > 2000) return ["Rentang BMR: 2001 - 2500", 3];
    if (bmt > 1500) return ["Rentang BMR: 1501 - 2000", 2];
    if (bmt >= 1000) return ["Rentang BMR: 1000 - 1500", 1];
}

rentangBmt.innerHTML = bmtRange(bmt)[0];

const menuHarian = [
  {
    rentang: 1,
    totalKalori: 1150,
    menu: {
        pagi: ["Telur Rebus (2 butir)", "Susu (1 gelas)"],
        siang: ["Nasi (1 ½ gelas)", "Ayam (1 potong sedang)", "Sawi (1 gelas)", "Pisang (1 buah)"],
        malam: ["Nasi (1 ½ gelas)", "Daging Sapi (1 potong sedang)", "Kangkung (1 gelas)"],
        snack: "-",
        kesimpulan: `Menu makanan ini sudah mencukupi kandungan makronutrien yang dibutuhkan per hari. Total kalori dari menu makanan tersebut adalah 1150 kalori`
    }
  },
  {
    rentang: 2,
    totalKalori: 1625,
    menu: {
      pagi: ["Telur Rebus (2 butir)", "Susu (1 gelas)", "Roti (3 iris)"],
      siang: ["Nasi (1 ½ gelas)", "Ayam (1 potong sedang)", "Sawi (2 gelas)", "Pisang (2 buah)"],
      malam: ["Nasi (1 ½ gelas)", "Daging Sapi (1 potong sedang)", "Kangkung (2 gelas)"],
      snack: ["Biskuit (4 buah besar)", "Susu (1 gelas)"],
      kesimpulan: `Menu makanan ini sudah mencukupi kandungan makronutrien yang dibutuhkan per hari. Total kalori dari menu makanan tersebut adalah 1625 kalori`
    }
  },
  {
    rentang: 3,
    totalKalori: 2142,
    menu: {
      pagi: ["Telur Rebus (2 butir)", "Susu (1 gelas)", "Roti (3 iris)"],
      siang: ["Nasi (1 ½ gelas)", "Ayam (1 potong sedang)", "Sawi (2 gelas)", "Pisang (2 buah)"],
      malam: ["Nasi (1 ½ gelas)", "Daging Sapi (1 potong sedang)", "Kangkung (2 gelas)"],
      snack: ["Biskuit (4 buah besar)", "Susu (1 gelas)"],
      kesimpulan: `Menu makanan ini sudah mencukupi kandungan makronutrien yang dibutuhkan per hari. Total kalori dari menu makanan tersebut adalah 2142 kalori`
    }
  },
  {
    rentang: 4,
    totalKalori: 2617,
    menu: {
      pagi: ["Telur Rebus (2 butir)", "Susu (1 gelas)", "Roti (3 iris)"],
      siang: ["Nasi (1 ½ gelas)", "Ayam (1 potong sedang)", "Sawi (2 gelas)", "Pisang (2 buah)"],
      malam: ["Nasi (1 ½ gelas)", "Daging Sapi (1 potong sedang)", "Kangkung (2 gelas)"],
      snack: ["Biskuit (4 buah besar)", "Susu (1 gelas)"],
      kesimpulan: `Menu makanan ini sudah mencukupi kandungan makronutrien yang dibutuhkan per hari. Total kalori dari menu makanan tersebut adalah 2617 kalori`
    }
  },
  {
    rentang: 5,
    totalKalori: 3142,
    menu: {
      pagi: ["Telur Rebus (2 butir)", "Susu (1 gelas)", "Roti (3 iris)"],
      siang: ["Nasi (1 ½ gelas)", "Ayam (1 potong sedang)", "Sawi (2 gelas)", "Pisang (2 buah)"],
      malam: ["Nasi (1 ½ gelas)", "Daging Sapi (1 potong sedang)", "Kangkung (2 gelas)"],
      snack: ["Biskuit (4 buah besar)", "Susu (1 gelas)"],
      kesimpulan: `Menu makanan ini sudah mencukupi kandungan makronutrien yang dibutuhkan per hari. Total kalori dari menu makanan tersebut adalah 3142 kalori`
    }
  },
  {
    rentang: 6,
    totalKalori: 1625,
    menu: {
      pagi: ["Telur Rebus (2 butir)", "Susu (1 gelas)", "Roti (3 iris)"],
      siang: ["Nasi (1 ½ gelas)", "Ayam (1 potong sedang)", "Sawi (2 gelas)", "Pisang (2 buah)"],
      malam: ["Nasi (1 ½ gelas)", "Daging Sapi (1 potong sedang)", "Kangkung (2 gelas)"],
      snack: ["Biskuit (4 buah besar)", "Susu (1 gelas)"],
      kesimpulan: `Menu makanan ini sudah mencukupi kandungan makronutrien yang dibutuhkan per hari. Total kalori dari menu makanan tersebut adalah  kalori`
    }
  },
];

const rentang = bmtRange(bmt)[1]-1;
const menu = menuHarian[rentang];

// Kode berotak senku START
if (menu) {
  for (let i = 0; i < menu.menu.pagi.length; i++) {
    const li = document.createElement('li');
    li.innerHTML = menu.menu.pagi[i];
    menuPagi.appendChild(li);
  }

  for (let i = 0; i < menu.menu.siang.length; i++) {
    const li = document.createElement('li');
    li.innerHTML = menu.menu.siang[i];
    menuSiang.appendChild(li);
  }

  for (let i = 0; i < menu.menu.malam.length; i++) {
    const li = document.createElement('li');
    li.innerHTML = menu.menu.malam[i];
    menuMalam.appendChild(li);
  }

  for (let i = 0; i < menu.menu.malam.length; i++) {
    const li = document.createElement('li');
    li.innerHTML = menu.menu.malam[i];
    menuMalam.appendChild(li);
  }

  for (let i = 0; i < menu.menu.snack.length; i++) {
    const li = document.createElement('li');
    li.innerHTML = menu.menu.snack[i];
    menuSnack.appendChild(li);
  }

  // menuPagi.innerHTML = menu.menu.pagi;
  // menuSiang.innerHTML = menu.menu.siang;
  // menuMalam.innerHTML = menu.menu.malam;
  // menuSnack.innerHTML = menu.menu.snack;
  menuKesimpulan.innerHTML = menu.menu.kesimpulan;
} else {
  alert("We have no idea.");
}
// Kode berotak senku END

// GPT START
function tampilkanMenu(waktu, elemen) {
  const items = menu.menu[waktu];
  
  // Jika hanya "-" atau kosong, tampilkan sebagai 1 list item
  if (typeof items === "string") {
    const li = document.createElement('li');
    li.innerHTML = items;
    elemen.appendChild(li);
    return;
  }

  for (let i = 0; i < items.length; i++) {
    const li = document.createElement('li');
    li.innerHTML = items[i];
    elemen.appendChild(li);
  }
}

if (menu) {
  tampilkanMenu("pagi", menuPagi);
  tampilkanMenu("siang", menuSiang);
  tampilkanMenu("malam", menuMalam);
  tampilkanMenu("snack", menuSnack);

  menuKesimpulan.innerHTML = menu.menu.kesimpulan;
} else {
  alert("We have no idea.");
}
// GPT END

// CARA PANJANG WOII
// if (bmtRange(bmt)[1] === 5) {
//     menuPagi.innerHTML = `
//     <ul>
//         <li>Telur Rebus (2 butir)</li>
//         <li>Susu (1 gelas)</li>
//     </ul>`;

//     menuSiang.innerHTML = `
//     <ul>
//         <li>Nasi (1 ½ gelas)</li>
//         <li>Ayam (1 potong sedang)</li>
//         <li>Sawi (1 gelas)</li>
//         <li>Pisang (1 buah)</li>
//     </ul>`;

//     menuMalam.innerHTML = `
//     <ul>
//         <li>Nasi (1 ½ gelas)</li>
//         <li>Daging Sapi (1 potong sedang)</li>
//         <li>Kangkung (1 gelas)</li>
//     </ul>`;

//     menuSnack.innerHTML = `-`;
//     menuKesimpulan.innerHTML = `Menu makanan ini sudah mencukupi kandungan makronutrien yang dibutuhkan per hari. Total kalori dari menu makanan tersebut adalah 1150 kalori.`
// } else if (bmtRange(bmt)[1] === 2) {
    
// } else if (bmtRange(bmt)[1] === 3) {

// } else if (bmtRange(bmt)[1] === 4) {

// } else if (bmtRange(bmt)[1] === 5) {

// } else {
//     alert('We have no idea.');
// }

switch (bmtRange(bmt)[1]) {
  case 1:
    menuPagi.innerHTML = `
    <ul>
        <li>Telur Rebus (2 butir)</li>
        <li>Susu (1 gelas)</li>
    </ul>`;

    menuSiang.innerHTML = `
    <ul>
        <li>Nasi (1 ½ gelas)</li>
        <li>Ayam (1 potong sedang)</li>
        <li>Sawi (1 gelas)</li>
        <li>Pisang (1 buah)</li>
    </ul>`;

    menuMalam.innerHTML = `
    <ul>
        <li>Nasi (1 ½ gelas)</li>
        <li>Daging Sapi (1 potong sedang)</li>
        <li>Kangkung (1 gelas)</li>
    </ul>`;

    menuSnack.innerHTML = `-`;
    menuKesimpulan.innerHTML = `Menu makanan ini sudah mencukupi kandungan makronutrien yang dibutuhkan per hari. Total kalori dari menu makanan tersebut adalah 1150 kalori.`
    break;

  case 2:

    break;

  case 3:
    break;

  case 4:
    break;

  case 5:
    break;

  default:
    break;
}