# Given a function f(x) = e^x + 2x with the values of a and b [1, 0] and a tolerance of 0.05. Find the root of the nonlinear equation using the bisection method.
import numpy as np

print("Result Bisection Method: ")

def function(x):
    return np.exp(x) + 2 * x

def bisectionMethod(a, b, tolerance):
    i = 0
    if function(a) * function(b) > 0 :
        print("Function haven't squared root.")
    else:
        while (abs(b - a)) > tolerance:
            x = (a + b) / 2.0
            i = i + 1
            print('{:2d} {:3.4f} {:3.4f} {:3.4f} {:3.4f} {:3.4f} {:3.4f}'.format (i, a, b, x, function(a), function(b), function(x)))
            
            if function(x) == 0:
                return(x)
            elif function(a) * function(x) < 0:
                b = x
            else:
                a = x
        return(x)

print(" i     a      b       x     f(a)    f(b)   f(x)")
result = bisectionMethod(-1, 0, 0.05)
print("Result squared root is ", result)

# Given a function f(x) = e^x + 2x with the values of a and b [-1, 0] and a tolerance of 0.05. Find the root of the nonlinear equation using the false position method.
import numpy as np

def function(x):
    return np.exp(x) + 2 * x

def regulafalsi(a, b, tol):
    if function(a) * function(b) > 0:
        print("Input not valid")
        return None
    
    i = 1
    while abs(function((a + b) / 2)) > tol:
        x = (a * function(b) - b * function(a)) / (function(b) - function(a))
        print('{:2d}   {:3.4f}   {:3.4f}   {:3.4f}   {:3.4f}   {:3.4f}   {:3.4f}'.format(i, a, b, x, function(a), function(b), function(x)))
        if abs(function(x)) < tol:
            break
        elif function(x) * function(a) < 0:
            b = x
        else:
            a = x
        i += 1
    return x

# Definition variable a, b, tolerance
a = -1
b = 0
tol = 0.05

print(' i      a         b         x       f(a)     f(b)      f(x)')
result = regulafalsi(a, b, tol)
print("Result squared root is ", round(result, 4))