// f(x) = x^2 - 3x + 2
function bisectionMethod(f, a, b, tol=1e-6, maxIter=100) {
  if (f(a) * f(b) > 0) {
      return null;
  }
  
  let iterasi = 0;
  while (iterasi < maxIter) {
      let c = (a + b) / 2;
      if (Math.abs(f(c)) < tol) {
          return c;
      }
      
      if (f(c) * f(a) < 0) {
          b = c;
      } else {
          a = c;
      }
      
      iterasi++;
  }
  
  return null;
}

// Metode Regula Falsi (False Position Method)
function falsePositionMethod(f, a, b, tol=1e-6, maxIter=100) {
  if (f(a) * f(b) > 0) {
      return null;
  }
  
  let iterasi = 0;
  while (iterasi < maxIter) {
      let c = (a * f(b) - b * f(a)) / (f(b) - f(a));
      if (Math.abs(f(c)) < tol) {
          return c;
      }
      
      if (f(c) * f(a) < 0) {
          b = c;
      } else {
          a = c;
      }
      
      iterasi++;
  }
  
  return null;
}

// Metode Secant
function secantMethod(f, x0, x1, tol=1e-6, maxIter=100) {
  let xNext;
  let iterasi = 0;
  while (iterasi < maxIter) {
      xNext = x1 - f(x1) * (x1 - x0) / (f(x1) - f(x0));
      if (Math.abs(xNext - x1) < tol) {
          return xNext;
      }
      
      x0 = x1;
      x1 = xNext;
      iterasi++;
  }
  
  return null;
}

// Metode Newton-Raphson
function newtonRaphsonMethod(f, df, x0, tol=1e-6, maxIter=100) {
  let iterasi = 0;
  while (iterasi < maxIter) {
      let xNext = x0 - f(x0) / df(x0);
      if (Math.abs(xNext - x0) < tol) {
          return xNext;
      }
      
      x0 = xNext;
      iterasi++;
  }
  
  return null;
}

// Definisikan fungsi kuadrat dan turunannya
function f(x) {
  return x * x - 3 * x + 2;
}

function df(x) {
  return 2 * x - 3;
}

// Coba cari akar dengan masing-masing metode
let akarBisection = bisectionMethod(f, 0, 2);
console.log("Akar dengan metode Bagi Dua:", akarBisection);

let akarFalsePosition = falsePositionMethod(f, 0, 2);
console.log("Akar dengan metode Regula Falsi:", akarFalsePosition);

let akarSecant = secantMethod(f, 0, 2);
console.log("Akar dengan metode Secant:", akarSecant);

let akarNewtonRaphson = newtonRaphsonMethod(f, df, 0);
console.log("Akar dengan metode Newton-Raphson:", akarNewtonRaphson);