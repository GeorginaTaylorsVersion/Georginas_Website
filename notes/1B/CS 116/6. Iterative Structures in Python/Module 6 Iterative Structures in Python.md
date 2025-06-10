# Module 6: Iterative Structures in Python

There are 2 main ways to parse through a list, for loop and while loop, where a for loop generally do something for every element of the list whereas a while loop will continuously run so long something is true.

While Loops

```python
def singleton(n):
  answer = []
  if n >= 0:
    answer.append(n)
    n = n - 1 
# after n = n - 1 run return answer
  return answer
```

```python
def singleton2(n):
  answer = [] ## initialize loop variables
  while n >= 0: #'n >= 0' is loop guard
    answer.append(n) #update variables used in loop guard
    n = n - 1 #update value being calculated
# after n = n - 1 run while n >= 0
  return answer 
# return answer is 'out of the loop'
```

Template:

```python
## initialize loop variables
while test: # loop guard
  ## body, including statements to:
  ## - update variables used in loop guard
  ## - update value being calculated
## additional processing
```

### **`while` Loop Basics**

- If the loop guard is `True`, execute the loop body.
- If the loop guard is `False`, do not execute the loop body.
- After completing the loop body, evaluate the loop guard again.

```python
def is_prime(n):
  '''
  Returns True if n is prime and False otherwise
  
  is_prime: Nat -> Bool
  '''    
  if n < 2:
    return False
  test_factor = 2 #define a test_factor to start, not 1 which divides everything
  while test_factor < n: #keep running while as long as test_factor < n
    if n % test_factor == 0: #if n can be divided by any number that is 1 < and < n
      return False # then it is not a prime
    else: #if it can not be divided 
      test_factor = test_factor + 1 #keep checking until test_factor = n
  return True #if exited while loop, then all possible test_factor have been check, is prime
```

```python
##another version
def is_prime(n):
  '''
  Returns True if n is prime and False otherwise
  
  is_prime: Nat -> Bool
  '''    
  if n < 2:
    return False
  test_factor = 2
  while test_factor * test_factor <= n: 
  #f n has any factor greater than its square root, 
	#there must also be a corresponding factor smaller than its square root.
    if n % test_factor == 0:
      return False
    test_factor += 1 #the code increase test_factor by 1
  return True
```

```python
##this is an infinite loop
def loop_forever():
  ''' 
  Tries to count to 10 by counting by twos.
  
  loop_forever: None -> None
  '''
  i = 1
  my_list = []
  while i != 10:
    my_list.append(i)
    i = i + 2
  return

loop_forever()
```

```python
##Factorial Up
def factorial(n):
  '''
  Returns n!
  
  factorial: Nat -> Nat
  
  Examples:
     factorial(0) => 1
     factorial(4) => 24
  '''
  if n <= 1:
    return 1
  test_factor = 2
  final = 1
  while test_factor <= n:
    final = final * test_factor
    test_factor += 1
  return final
```

```python
##Factorial Down
def factorial(n):
  '''
  Returns n!
  
  factorial: Nat -> Nat
  
  Examples:
     factorial(0) => 1
     factorial(4) => 24
  '''
  if n == 0:
    return 1
  final = 1
  while n >= 1:
    final = final * n
    n -= 1
  return final
```

Write the body of a function halve_evens(L) that returns None and mutates L so that all even numbers in L are halved. 
You must use while loops in your solution. Do not use recursion or abstract list functions.

```python
def halve_evens(L):
  '''
  Returns None and mutates L so that all even numbers are halved
  
  Effects: Mutates L
  
  halve_evens: (listof Int) -> None
  
  Examples:
     L = []
     halve_evens(L) => None
     and L is still []
     
     L = [1,3,5,7]
     halve_evens(L) => None
     and L is still [1,3,5,7]
     
     L = [1,2,3,4]
     halve_evens(L) => None
     and L has been mutated to [1,1,3,2]

  #Wrong version:
  if L == []:
    return [] #this is wrong because it returns a list, not None
  list = [] #this is wrong because it initializes a new list, not mutates the original list
  index = 0
  while len(L) > index:
    if L[index] % 2 == 0:
      list.append(L[index] // 2) #this does not mutate L, it creates a new list
    else: list.append(L[index]) 
    index += 1
  return list #this is wrong because it returns a list, not None
  '''
  index = 0
  while index < len(L):
    if L[index] % 2 == 0:
      L[index] = L[index] // 2
    index += 1
```

---

For Loops

### **Compare and Contrast `while` and `for` Loops**

| **Function** | **`while` Loop** | **`for` Loop** |
| --- | --- | --- |
| Initialization | Loop counter should be initialized outside loop | Loop counter initialized automatically |
| Continuation | Includes continuation test before body | Continues while more elements in the collection |
| Updates | Should update loop variables in body of loop | Loop variable updated automaticallyDoes not update in loop |
| Repetition | Body contains steps to repeat | Body contains steps to repeat |

Template to iterate over a collection via for loops

```python
for item in collection: 
	#loop_body: some operations involving item
```

```python
## Sum of Squares
def sum_squares(a, b):
  '''
  Returns the sum of squares from a to b inclusive.
  
  sum_squares: Nat Nat -> Nat
  
  Examples:
     sum_squares(2, 1) => 0
     sum_squares(1, 2) => 5
  '''
  sum_all = 0
  for i in range(a,b + 1):
    sq = i*i
    sum_all = sum_all + sq
  return sum_all

check.expect("Test 1", sum_squares(2,1), 0)
check.expect("Test 2", sum_squares(1,2), 5)
check.expect("Test 3", sum_squares(2,5), 54)
```

```python
#mutation
def multiply_by(values, factor):
  '''
  Returns None and mutates values so that each entry
  is multiplied by factor
  
  Effects: Mutates values
  
  multiply_by: (listof Int) Int -> None
  
  Examples:
     L = []
     multiply_by(L, 14) => None
     and L is still []
     
     L = [1, 2, 3]
     multiply_by(L, 4) => None
     and L is [4, 8, 12]
     
     L = [1, 22]
     multiply_by(L, 0) => None
     and L is [0, 0]
  '''
  for pos in range(len(values)):
    values[pos] = values[pos] * factor #make sure to check its values[pos] not values
```

```python
def halve_evens_ret(L):
  '''
  Returns a copy of L with all even numbers divided by 2
  
  halve_evens_ret: (listof Int) -> (listof Int)
  
  Examples:
     halve_evens_ret([]) => []
     halve_evens_ret([1,3,5,7]) => [1,3,5,7]
     halve_evens_ret([1,2,3,4]) => [1,1,3,2]
  '''
  new_list = []
  for x in L:
      if x % 2 == 0:
          # Even, so append its half
          new_list.append(x // 2)
      else:
          # Odd, so append as is
          new_list.append(x)
  
  # Return the fully built list
  return new_list
```

```python
def halve_evens(L):
  '''
  Returns None and mutates L so that all even numbers are halved
  
  Effects: Mutates L
  
  halve_evens: (listof Int) -> None
  
  Examples:
     L = []
     halve_evens(L) => None
     and L is still []
     
     L = [1,3,5,7]
     halve_evens(L) => None
     and L is still [1,3,5,7]
     
     L = [1,2,3,4]
     halve_evens(L) => None
     and L has been mutated to [1,1,3,2]
  '''
  for i in range(len(L)):
    if L[i] % 2 == 0:
      L[i] = L[i] /2
    else: L[i] = L[i]
```

---

Looping over Nested Lists

```python
def negate_first(L, val):
  '''
  Mutates the list so the first occurrence of val is negated
  
  Effects: Mutates L
  
  negate_first: (listof (listof Int)) -> None
  Requires: 
     val occurs in L
  
  Examples:
     L = []
     negate_first(L, 10) => None
     and L is not mutated
     
     L = [[0], [3,2,1], [] ,[17,1,9,10], [1, 2]]
     negate_first(L, 1) => None
     and L is mutated to:
     [[0], [3,2,-1], [] ,[17,1,9,10], [1, 2]]
  '''
  for sublist in L:
    for i in range(len(sublist)):
      if sublist[i] == val:
        sublist[i] = -val
        return
```

```python
def column(grid, col_num):
  '''
  Returns the col_num column of grid
  
  column: Grid Nat -> (listof Nat)
  Requires: 
     grid is not empty
     col_num <= len(grid)-1
  
  Examples:
     column([[1]], 0) => [1]
     column([[10,2],[20,1]], 1) => [2, 1]
  '''
  result = []
  for sublist in grid:
    for i in sublist:
      col = sublist[col_num]
    result.append(col)
  return result
```