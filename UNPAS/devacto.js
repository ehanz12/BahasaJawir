// Array adalah struktur data dalam JavaScript yang digunakan untuk menyimpan sekumpulan elemen dalam satu variabel. Elemen ini bisa berupa angka, string, objek, atau bahkan array lainnya. Setiap elemen dalam array memiliki indeks yang dimulai dari 0

//! Buat sebuah array, Console seluruh data array, console data kedua dari value array, gunakan metode push, unshift, pop, dan shift.
// namaArray.push(ini yang ditambahkan)
// Membuat array sederhana
let buah = ['apel', 'pisang', 'jeruk'];

// Mengakses array dengan indeks
console.log(buah[1]); // Output: pisang

// Mengganti nilai dalam array
buah[1] = 'mangga';
console.log(buah); // Output: ['apel', 'mangga', 'jeruk']



// Menambahkan elemen ke array dengan push
buah.push('anggur');
console.log(buah); // Output: ['apel', 'mangga', 'jeruk', 'anggur']

// // Menambahkan elemen ke array dengan unshift
buah.unshift('stroberi');
console.log(buah); // Output: ['stroberi', 'apel', 'mangga', 'jeruk', 'anggur']

// // Menghapus elemen terakhir dari array dengan pop
buah.pop();
console.log(buah); // Output: ['stroberi', 'apel', 'mangga', 'jeruk']

// // Menghapus elemen pertama dari array dengan shift
buah.shift();
console.log(buah); // Output: ['apel', 'mangga', 'jeruk']

// // Menggabungkan dua array dengan concat
let sayur = ['wortel', 'kubis', 'labu', 'brokoli', 'kangkung'];
let makanan = buah.concat(sayur);
console.log(makanan); // Output: ['apel', 'mangga', 'jeruk', 'wortel', 'kubis']

// Mengambil sebagian elemen dari array dengan slice
let beberapaBuah = buah.slice(2);
console.log(beberapaBuah); // Output: ['mangga', 'jeruk']

// // Mengubah elemen dalam array dengan splice
// buah.splice(1, 1);
// console.log(buah); // Output: ['apel', 'nanas', 'jeruk']

// // Menggunakan forEach untuk iterasi array
buah.forEach(function(item, index) {
    console.log('Buah ke-' + (index + 1) + ': ' + item);
});
// Output:
// Buah ke-1: apel
// Buah ke-2: nanas
// Buah ke-3: jeruk

// FUNCION
// function adalah sebuah block kode yang digunakan untuk melakukan tugas tertentu
// fungsi dijalankan ketika dipanggil

function greet(name) {
    console.log('Hello, ' + name + '!');
}

greet('john'); // Output: Hello, jhon!

function penjumlahan(a,b) {
    return a+b;
}

console.log(penjumlahan(2, 3))
