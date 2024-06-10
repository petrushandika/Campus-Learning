/*
Soal: 

Tentukan bentuk system persamaan linier dari kasus berikut dan cari solusinya dengan
menggunakan metode  Eliminasi Gauss Naif sebanyak 5 iterasi

Sebuah studio film ingin memproduksi tiga film berbeda: Film X, Film Y, dan Film Z. Untuk setiap film, mereka memerlukan tim produksi dengan spesifikasi yang berbeda:

- Untuk Film X, diperlukan 5 sutradara, 8 penulis naskah, dan 10 kru produksi.
- Untuk Film Y, diperlukan 7 sutradara, 6 penulis naskah, dan 9 kru produksi.
- Untuk Film Z, diperlukan 4 sutradara, 7 penulis naskah, dan 12 kru produksi.

Namun, studio hanya memiliki sumber daya manusia sebagai berikut: 50 sutradara, 60 penulis naskah, dan 80 kru produksi.

Berapa jumlah Film X, Y, dan Z yang dapat diproduksi berdasarkan ketersediaan sumber daya manusia tersebut?

*/

const coefficients = [
  [5, 7, 4],
  [8, 6, 7],
  [10, 9, 12],
];

const constants = [50, 60, 80];

for (let k = 0; k < 3; k++) {
  const pivot = coefficients[k][k];
  for (let j = k; j < 3; j++) {
    coefficients[k][j] /= pivot;
  }
  constants[k] /= pivot;

  for (let i = k + 1; i < 3; i++) {
    const factor = coefficients[i][k];
    for (let j = k; j < 3; j++) {
      coefficients[i][j] -= factor * coefficients[k][j];
    }
    constants[i] -= factor * constants[k];
  }
}

const solutions = [0, 0, 0];
for (let i = 2; i >= 0; i--) {
  let sum = 0;
  for (let j = i + 1; j < 3; j++) {
    sum += coefficients[i][j] * solutions[j];
  }
  solutions[i] = constants[i] - sum;
}

console.log(`Jumlah Film X: ${solutions[0]}`);
console.log(`Jumlah Film Y: ${solutions[1]}`);
console.log(`Jumlah Film Z: ${solutions[2]}`);
