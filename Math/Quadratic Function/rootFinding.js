// Fungsi kuadrat
function f(x) {
  // Contoh fungsi kuadrat: f(x) = x^2 - 5x + 6
  return x * x - 5 * x + 6;
}

// Metode Bagi-2
function bisection(a, b, tol = 1e-6) {
  if (f(a) * f(b) >= 0) {
    throw new Error(
      "Metode Bagi-2 memerlukan dua titik dengan nilai fungsi yang berbeda tanda."
    );
  }

  while ((b - a) / 2 > tol) {
    const c = (a + b) / 2;
    if (f(c) === 0) {
      return c;
    }
    if (f(a) * f(c) < 0) {
      b = c;
    } else {
      a = c;
    }
  }
  return (a + b) / 2; // nilai mendekati akar
}

// Metode Regula Falsi
function regulaFalsi(a, b, tol = 1e-6) {
  if (f(a) * f(b) >= 0) {
    throw new Error(
      "Metode Regula Falsi memerlukan dua titik dengan nilai fungsi yang berbeda tanda."
    );
  }

  let c = a;
  while (Math.abs(f(c)) > tol) {
    c = b - (f(b) * (b - a)) / (f(b) - f(a));
    if (f(c) === 0) {
      return c;
    }
    if (f(a) * f(c) < 0) {
      b = c;
    } else {
      a = c;
    }
  }
  return c;
}

// Metode Secan
function secant(x0, x1, tol = 1e-6) {
  let x2;
  while (Math.abs(x1 - x0) > tol) {
    x2 = x1 - (f(x1) * (x1 - x0)) / (f(x1) - f(x0));
    x0 = x1;
    x1 = x2;
  }
  return x2;
}

// Metode Newton-Raphson
function fPrime(x) {
  return 2 * x - 5;
}

function newtonRaphson(x0, tol = 1e-6) {
  let x1 = x0;
  while (Math.abs(f(x1)) > tol) {
    x1 = x1 - f(x1) / fPrime(x1);
  }
  return x1;
}

// Fungsi untuk mencari dua titik dengan tanda yang berbeda
function findSignChange(start, end, step = 0.1) {
  let prev = start;
  for (let x = start + step; x <= end; x += step) {
    if (f(x) * f(prev) < 0) {
      return [prev, x];
    }
    prev = x;
  }
  throw new Error(
    "Tidak ditemukan dua titik dengan tanda yang berbeda dalam rentang yang diberikan."
  );
}

// Gunakan metode findSignChange untuk menemukan dua titik dengan tanda berbeda
try {
  const [a, b] = findSignChange(1, 4); // mencari dua titik dengan tanda berbeda
  console.log("Akar Bagi-2:", bisection(a, b));
  console.log("Akar Regula Falsi:", regulaFalsi(a, b));
  console.log("Akar Secan:", secant(2, 3));
  console.log("Akar Newton-Raphson:", newtonRaphson(3));
} catch (e) {
  console.error("Error:", e.message);
}
