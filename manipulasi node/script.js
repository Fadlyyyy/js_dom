// DOM manipulation

// inti dari manipulasi pada dom ini adalah kita bisa membuat,
// mengubah, dan menghapus elemen2 yang ada pada dom.

// buat element baru
// document.create.Element()

const pBaru = document.createElement("p");
const teksPBaru = document.createTextNode("paragraf baru");

// simpan tulisan kedalam paragraf
pBaru.appendChild(teksPBaru);

// simpan pBaru diakhir section a

const sectionA = document.getElementById("a");
sectionA.appendChild(pBaru);

// document.insertBefore()

const liBaru = document.createElement("li");
const teksLiBaru = document.createTextNode("item baru");

liBaru.appendChild(teksLiBaru);

const ul = document.querySelector("section#b ul");
const li2 = ul.querySelector("li:nth-child(2)");

ul.insertBefore(liBaru, li2);

// parentNode.removeChild()
// const sectionA = document.getElementById("a");
const link = document.getElementsByTagName("a")[0];
sectionA.removeChild(link);

// parentNode.replaceChild()
const sectionB = document.getElementById("b");
const p4 = sectionB.querySelector("p");

const h2Baru = document.createElement("h2");
const teksH2Baru = document.createTextNode("judul baru!");

h2Baru.appendChild(teksH2Baru);
sectionB.replaceChild(h2Baru, p4);

pBaru.style.backgroundColor = "lightgreen";
liBaru.style.backgroundColor = "lightgreen";
h2Baru.style.backgroundColor = "lightgreen";
