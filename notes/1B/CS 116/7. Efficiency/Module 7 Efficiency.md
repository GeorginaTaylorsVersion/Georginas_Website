# Module 7: Efficiency

**worst run time summary**

O(1):
Basic opertations (+-*/, return)
String operations: len(s), s[k]
List operations: len(L), L[k], L[3:5], L.append(x), range(n)

O(n):
String operations: s + t, count, find, etc, s == t, print(s), s = input(), t in s
List operations: L == M, L + M, L*k, L + [x], sum(L), max(L), L[1:], list(range(n)), [x]*n, count, index, remove, L.extend(M), e in L

other: L.sort () -> O(nlogn)

Abstract List Functions:
map(f, L), filter(f, L) depends on :
- The length of L
- The runtime of f (we apply the runtime of f to a list of len(L))

Loops:
- In general, O(n) time
- code inside the loop that slows down the runtime (e.g. L += x, nested loop, abstract list function)
- how many times the loop executes (e.g. for i in range(5), loop stops before n iterations such as returning inside a loop). These might result in a faster runtime

Recursions:
- look at the return statements, (e.g. return fn(m, L[1:]) takes O(n) + T(n-1), O(n) for slicing and T(n-1) for going through 1 element less)

linear search = O(n)
binary seach = O(logn)
selection sort = O(n^2)
insertion sort = O(n^2) (O(n) on almost sorted lists)
merge sort = O(nlogn)

Dictionaries:
- list(d.keys()) and list(d.values()) = O(n)
- d.pop(k), removes k from d and returns the value at d[k] = O(1)
- index with keys (Any type) = O(1)
- k in d = O(1)

```python
def mult_table(n):
  table = [0]*n #O(n)
  row = 0 #O(1)
  columns = list(range(n)) #O(n)
  while row < n: #O(1) --> while loop tuns n cycles
    this_row = [] #O(1)
    for c in columns: #O(n) --> for loop stays O(n)
      this_row.append((row+1)*(c+1)) #O(1) because append is a constant term
    table[row] = this_row #O(1)
    row = row + 1 #O(1)
  return table #O(1)
  ## O(n) + O(1) + O(n)1+ nO(n) + O(1) = O(n**2)
```

```python
def mult_table(n):
  table = [0]*n #O(n)
  row = 0 #O(1)
  columns = list(range(n)) #O(n)
  while row < n: #O(1) --> while loop tuns n cycles
    this_row = [] #O(1)
    for c in columns: #O(n) --> for loop becomes O(n**2)
      this_row += [(row+1) * (c+1)] #O(n)
    table[row] = this_row #O(1)
    row = row + 1 #O(1)
  return table #O(1)
  ## O(n) + O(1) + O(n)1+ nO(n**2) + O(1) = O(n**3)
```