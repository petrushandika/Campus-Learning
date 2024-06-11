function f(x) {
  return x ** 2 + 9 * x + 20;
}

function fPrime(x) {
  return 2 * x + 9;
}

let x0 = 1;

for (let i = 0; i < 5; i++) {
  let fx0 = f(x0);
  let fxPrime0 = fPrime(x0);

  let x1 = x0 - fx0 / fxPrime0;

  console.log(`Iterasi ke-${i + 1}:`);
  console.log(`x${i} = ${x0}`);
  console.log(`f(x${i}) = ${fx0}`);
  console.log(`f'(x${i}) = ${fxPrime0}`);
  console.log(`x${i + 1} = ${x1}\n`);

  x0 = x1;
}

console.log(`Akar persamaan: ${x0}`);
