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
