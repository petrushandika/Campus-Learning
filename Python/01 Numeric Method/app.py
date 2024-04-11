# Find value f(1) for f(x) = e**x+3 for x0 = 0 to 5 iteration
import math

def calculateFactorial(x):
    if x < 2:
        return 1
    else:
        return x * calculateFactorial(x - 1)
    
def iteration(n, x):
    it = math.exp(3)
    
    for i in range(1, n):
        it = it + (math.exp(3) * x ** i) / calculateFactorial(i)
        return it
    
print("Iteration 5 is ", iteration(5, 1))