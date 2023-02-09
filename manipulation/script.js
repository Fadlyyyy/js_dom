// element.innerHTML
// method yang berfungsi untuk mengubah isi dari sebuah tag yang sudah diseleksi
// bisa mengganti apapun isi pada innerHTML nya
// contoh ingin menjadikan cetak miring dengan menambahkan tag em

// const judul = document.getElementById("judul");
// judul.innerHTML = "<em>Fardli Yansah</em>";

// const sectionA = document.querySelector("section#a");
// sectionA.innerHTML = "Hello World!"; //dia akan mengganti seluruh isinya

// tidak perduli didalamnya ada berapapun baris html

// element.style.<propertycss>

// note : jika menggunakan querySelector wajib menggunakan # untuk membedakan mana id, class dan elemen HTML.

// const judul = document.querySelector("#judul");
// judul.style.color = "lightblue";
// judul.style.backgroundColor = "salmon";

// element.setAttribute atau elemen yang lain seperti :
// element.getAttribute()
// element.setAttribute()
// element.removeAttribute()

// attribute adalah sesuatu yang menempel pada element HTML
// const judul = document.getElementsByTagName("h1")[0];
// judul.setAttribute("name", "fardli");   //sett atribute bisa menambahkan atribute baru apapun attributenya kedalam sebuah element

// const a = document.querySelector("section#a a");

// a.getAttribute("href"); //tulis pada console maka akan mengembalikan nilai isinya

// menghilangkan sebuah attribute
// tulis pada console
// a.removeAttribute("href");

// menambahkan attribute class poda sebuah element
// const p2 = document.querySelector(".p2");
// p2.setAttribute("class", "label"); //class p2nya ilang (menimpa jadi class sebelumnya ilang)\

// supaya bisa menambahkan class baru atau bahkan memanipulasi class yang ada..
// harus menggunakan method lain yang gunanya untuk mengelola class

// element.ClassList (untuk mengelola class)

// ada banyak yang bisa digunakan terhadap class
// element.classList.add() //menambahkan class baru
// element.classList.remove() //menghilangkan class yang ada
// element.classList.toggle() //dengan menggunakan toggle, semisalkan sebuah element tidak mempunyai class tertentu maka ia akan menambahkan, namun jika class tersebut sudah memiliki class maka toggle akan menghilangkan class tersebut
// element.classList.item() //untuk mengetahui class tertentu yang ada didalam disebuah element (misal didalam sebuah element ada 3 class lalu dev ingin melihat class ke 3 nya apa maka dev wajib menggunakan method ini)
// element.classList.contains() //untuk mengecek sebuah class
// element.classList.replace() //untuk mengganti class yang ada dengan class terbaru

const p2 = document.querySelector(".p2");
