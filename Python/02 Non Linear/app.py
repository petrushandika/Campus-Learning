import numpy as np

print("Result Bisection Method: ")

def function (x):
    return np.exp (x) + 2 * x

def bisectionMethod (a, b, tolerance):
    i = 0
    if function (a) * function (b) > 0 :
        print("Function haven't squared root.")
    else:
        while (abs (b - a)) > tolerance:
            x = (a + b) / 2.0
            i = i + 1
            print('{:2d} {:3.4f} {:3.4f} {:3.4f} {:3.4f} {:3.4f} {:3.4f}'.format (i, a, b, x, function(a), function(b), function(x)))
            
            if function (x) == 0:
                return(x)
            elif function (a) * function (x) < 0:
                b = x
            else:
                a = x
        return (x)

print(" i     a      b       x     f(a)    f(b)   f(x)")
result = bisectionMethod(-1, 0, 0.05)
print("Result squared root is ", result)