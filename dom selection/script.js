// DOM selection
// document.getElementById() -> element

const judul = document.getElementById("judul");

judul.style.color = "red";
judul.style.backgroundColor = "blue";
judul.innerHTML = "Fardli";

// document.getElementsByTagName() -> HTMLCollections

const p = document.getElementsByTagName("p");
// p[0].style.backgroundColor = "lightblue";
// p[1].style.backgroundColor = "lightblue";
// p[2].style.backgroundColor = "lightblue";
// p[3].style.backgroundColor = "lightblue";

for (let i = 0; i < p.length; i++) {
  p[i].style.backgroundColor = "lightblue";
}

const h1 = document.getElementsByTagName("h1")[0];
h1.style.fontSize = "50px";

// document.getElementsByClassName(); //-> HTMLCollection

const p1 = document.getElementsByClassName("p1")[0];
p1.innerHTML = "ubah dari javascript";

// document.querySelector() -> element

// query selector adalah query = menanyakan
// selector = selektor
// anggap saja ini sebagai selector css

// const p4 = document.querySelector("#b p");
// p4.style.color = "green";
// p4.style.fontSize = "30px";

// const li2 = document.querySelector("section ul li:nth-child(2)");

// li2.style.backgroundColor = "orange";

// const p = document.querySelector("p");
// p.innerHTML = "ini diubah melalui js";

// const p = document.querySelectorAll("p");
// p[2].style.backgroundColor = "lightblue";
// for (let i = 0; i < p.length; i++) {
//   p[i].style.backgroundColor = "lightblue";
// }

// note : getElementById() dan getElementByTagName() adalah method yang paling cepat dibanding method yang lain

// mengubah node root

// const p4 = document.getElementByTagName ('p');
// p4[3].style.backgroundColor = 'lightblue';

// const sectionB = document.querySelector("section#b");
// const p4 = sectionB.getElementsByTagName("p")[0];
// p4.style.backgroundColor = "orange";
