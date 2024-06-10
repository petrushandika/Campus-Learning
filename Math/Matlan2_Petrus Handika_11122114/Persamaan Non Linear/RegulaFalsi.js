function f(x) {
  return x ** 2 + 9 * x + 20;
}

let A = 1;
let B = 4;

for (let i = 0; i < 5; i++) {
  let YA = f(A);
  let YB = f(B);

  let C = (A * YB - B * YA) / (YB - YA);
  let YC = f(C);

  console.log(`Iterasi ke-${i + 1}:`);
  console.log(`A = ${A}, B = ${B}`);
  console.log(`C = ${C}`);
  console.log(`Y(A) = ${YA}`);
  console.log(`Y(B) = ${YB}`);
  console.log(`Y(C) = ${YC}\n`);

  if (YA * YC < 0) {
    B = C;
  } else {
    A = C;
  }
}

let akar = (A * f(B) - B * f(A)) / (f(B) - f(A));
console.log(`Akar persamaan: ${akar}`);
