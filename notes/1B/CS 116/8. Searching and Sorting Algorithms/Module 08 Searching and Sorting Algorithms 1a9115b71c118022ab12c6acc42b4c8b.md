# Module 08: Searching and Sorting Algorithms

which to use:
Linear Search - when list is unsorted
Binary Search - when list is sorted

```python
##Binary Searching

def binary_search(L, target):
  beginning = 0
  end = len(L)
  while beginning < end:
    mid = (beginning + end)//2
    if L[mid] == target:
      return True
    elif L[mid] > target :
      end = mid
    else:
      beginning = mid + 1
  return False

#check.expect("Test 1", binary_search([], 4), False)
#check.expect("Test 2", binary_search([1, 234, 546], 4), False)
#check.expect("Test 3", binary_search([1, 4, 546], 4), True)
```

```python
#Modified Binary Searching Template
def binary_search(L, target):
  beginning = 0
  end = len(L) - 1 #<-- changed line!
  while beginning > end:
    mid = (beginning + end)//2
    if L[mid] == target:
      return True
    elif L[mid] > target :
      end = mid - 1
    else:
      beginning = mid - 1
  return False
```

```python
##Selection Sort

def swap(L, p1, p2):
  temp = L[p1]
  L[p1] = L[p2]
  L[p2] = temp
  
def find_minimum_pos(L, i):
  return L.index(min(L[i:]),i)

def selection_sort(L):
  n = len(L)
  positions = list(range(n - 1)) #Once we have sorted n-1 elements in an n element list, the nth element is also sorted.
  for i in positions:
    min_pos = find_minimum_pos(L, i)
    swap(L, i, min_pos)
    
L = [5, 8, 2, 4, 3, 1, 9, 6]
#check.expect("Test", selection_sort(L), None)
#check.expect("Test Mutation", L, [1, 2, 3, 4, 5, 6, 8, 9])

'''
L = [4,9,6,2,8,5,7]
first interation: [2,9,6,4,8,5,7]
before the last swap: [2, 4, 5, 6, 7, 9, 8]
'''
```

```python
##Insertion Sort

def swap(L, p1, p2):
  temp = L[p1]
  L[p1] = L[p2]
  L[p2] = temp

def insert(L, pos):
  '''
  Sorts L from 0 to pos inclusive
  
  Mutates L
  
  insert: (listof Int) Nat -> None
  Requires: L from 0 to pos-1 is sorted.
  '''    
  while pos > 0 and L[pos] < L[pos-1]:
    swap(L, pos, pos - 1)
    pos = pos - 1
        
def insertion_sort(L):
  for i in range(1,len(L)):
    insert(L,i)
    
L = [5, 8, 2, 4, 3, 1, 9, 6]
#check.expect("Test", insertion_sort(L), None)
#check.expect("Test Mutation", L, [1, 2, 3, 4, 5, 6, 8, 9])
```

```python
##Merge Sort

def merge(L1,L2,L):
  '''
  Merges L1 and L2 back into L
  
  Effects: Mutates L
  
  merge: (listof Int) (listof Int) (listof Int) -> None
  Requires: 
     L1 and L2 are sorted
     len(L) == len(L1) + len(L2)
  
  Example:
     If L1, L2 and L are all empty, then
     merge(L1, L2, L) => None
     and L is unchanged
  
     If L1 = [2, 4, 5, 8] and L2 = [1, 3, 6, 9] 
       and L = [2, 4, 5, 8, 1, 3, 6, 9]
     merge(L1, L2, L) => None
     and L is mutated to [1, 2, 3, 4, 5, 6, 8, 9]
  '''
  pos1 = 0
  pos2 = 0
  posL = 0 
  while (pos1 < len(L1)) and (pos2 < len(L2)):
    if L1[pos1] < L2[pos2]:
      L[posL] = L1[pos1]
      pos1 += 1
    else:
      L[posL] = L2[pos2]
      pos2 += 1
    posL += 1
  while (pos1 < len(L1)):
    L[posL] = L1[pos1]
    pos1 = pos1 + 1
    posL = posL + 1
  while (pos2 < len(L2)):
    L[posL] = L2[pos2]
    pos2 = pos2 + 1
    posL = posL + 1
        
def merge_sort(L):
  if len(L) >= 2: 
    mid = len(L)//2
    L1 = L[:mid]
    L2 = L[mid:]
    merge_sort(L1)
    merge_sort(L2)
    merge(L1,L2,L)
    
L = [5, 8, 2, 4, 3, 1, 9, 6]
#check.expect("Test", merge_sort(L), None)
#check.expect("Test Mutation", L, [1, 2, 3, 4, 5, 6, 8, 9])
```

Linear Search: Unsorted list → O(n)
Binary Search: Sorted list → O(logn)
Selection Sort: O(n^2)
Insertion Sort: O(n^2)(best case: O(n))
Merge Sort: O(nlogn)

```python
##Built-in Sorting

#sorted does not mutate the list
L = [[3,4] ,[5,2], [0,0], [2,8], [5,0]]
N1 = sorted(L, key = lambda M: M[0] + M[1])

Lcopy = [[3,4] ,[5,2], [0,0], [2,8], [5,0]]
N2 = sorted(Lcopy, key = lambda M: M[1], reverse = True)

#sorted which consumes a list and returns a new list in sorted order
M = ["cs", "116", "1s", "coo1"]
M.sort(key = len)
M.sort(key = lambda s: s.count('1'), reverse = True)

#Handling Ties
L = [[3,4] ,[5,2], [0,0], [2,8], [5,0]]
N1 = sorted(L, key = lambda M: M[0], reverse = True)
N2 = sorted(N1, key = lambda M: M[0] + M[1])
print(L)
print(N1)
print(N2)
```