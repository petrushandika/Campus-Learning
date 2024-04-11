import numpy as np

def dx(func, x):
    return abs(0 - func(x))

def func(x):
    return np.exp(x) + 2 * x

def dfunc(x):
    return np.exp(x) + 2

def newtonraphson(func, dfunc, x0, e):
    i = 0
    delta = dx(func, x0)
    while delta >= e:
        x0 = x0 - func(x0) / dfunc(x0)
        delta = dx(func, x0)
        i += 1
        print(f'{i:2d} {x0:3.4f} {func(x0):3.4f} {dfunc(x0):3.4f} {func(x0) / dfunc(x0):3.4f}')
        
    print("Result squared root:", round(x0, 4))
    
x0 = 0.025
eps = 0.00001

print("Result newton raphson method:")
print(" i    x0    f(x0) f'(x0)  f(x0)  / f'(x0)")

newtonraphson(func, dfunc, x0, eps)
