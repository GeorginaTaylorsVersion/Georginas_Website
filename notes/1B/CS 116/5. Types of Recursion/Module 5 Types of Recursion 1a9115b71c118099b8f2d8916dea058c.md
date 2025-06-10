# Module 5: Types of Recursion

Accumulative Approach to Recursion (structural recursion with an accumulator)

- A helper function is required
    - helper function requires at least two parameters
    - One to keep track of what has been done on previous recursive calls (the "accumulator")
    - One to keep track of what remaining to be processed (used to identify the base or stopping cases)
- The main function is a wrapper function that sets the initial value of the accumulator(s).
- The main function may also handle special cases.

Template:

```python
def acc_template(acc, remaining, *args):
    # if at stopping case of remaining:
    #    return (answer using acc)
    # else:
    #    return acc_template(updated-acc,
    #                       updated-remaining, *args)
    pass

def fn(*args):
    # process result of calling
    #     acc_template(initial-acc,
    #                 initial-remaining, *args)
    # Note: consider special cases, as needed
    pass
```

e.g. Fibonacci Sequence:

Original:

```python
def fib(n):
    '''returns nth Fibonacci number
    fib: Nat -> Nat
    Example: fib(1) => 1,
            fib(10) => 55
    '''
    if n == 0: return 0
    elif n == 1: return 1
    else:
        return fib(n-1) + fib(n-2)
```

New:

```python
def fib_acc(n, n0, fibs):
    if n0 >= n: # fib(n) is last list element!
        return fibs[-1] 
    else:
        fibs.append(fibs[-1] + fibs[-2]) # fib(n-1) + fib(n-2)
        return fib_acc(n, n0+1, fibs)

def fib2(n):
    if n == 0:
        return 0
    else:
        return fib_acc(n, 1, [0, 1])  # Start with fib(0) and fib(1)
```

Generative Recursion

- no standard template
- Break the problem into any subproblem(s) that seem natural for the problem
- Determine the base case(s)
- Solve the subproblems, recursively if necessary
- Determine how to combine subproblem solutions to solve the original problem
- TEST! TEST! TEST!

e.g. gcd

```python
def gcd(m, n):
    if m == 0: return n
    elif n == 0: return m
    else: return gcd(n, m % n)
```

 e.g. 

Write the body of a function `mult_table(n)` that consumes a natural number `n` and returns the `n+1` by `n+1` multiplication table (where each entry in the inner list is equal to the product of which list it is and the inner list position number, or in other words, the product of the row and column numbers). Do not use abstract list functions (you solved this problem with abstract list functions in a previous module). Use accumulative recursion.

```python
def build_row_acc(row_num, col_so_far, n, acc):
    # Base case: if we've processed all columns (0 to n), return completed row
    if col_so_far > n:
        return acc
    else:
        # Add product of current row and column to the row
        acc.append(row_num * col_so_far)
        # Recursively build rest of row, moving to next column
        return build_row_acc(row_num, col_so_far + 1, n, acc)

def build_table_acc(row_so_far, n, acc):
    # Base case: if we've processed all rows (0 to n), return completed table
    if row_so_far > n:
        return acc
    else:
        # Build a new row starting from column 0 and add it to table
        acc.append(build_row_acc(row_so_far, 0, n, []))
        # Recursively build rest of table, moving to next row
        return build_table_acc(row_so_far + 1, n, acc)

def mult_table(n):
    '''Returns an (n+1) by (n+1) multiplication table where each entry
    is the product of its row and column numbers.
    
    mult_table: Nat => (listof (listof Nat))
    Example: mult_table(2) => [[0,0,0], 
                                [0,1,2], 
                                [0,2,4]]
    
    Strategy:
    1. Start with row 0, building table row by row
    2. For each row, build it column by column
    3. Each entry is product of row number and column number
    '''
    # Start building table from row 0 with empty accumulator
    return build_table_acc(0, n, [])
```

### **Reversing a List: Sample Trace**

If you coded the above problem correctly, the following gives a trace of how your code likely worked assuming your accumulative helper function is called `build_reverse`:

```
reverse([1,2,3,4])
=> build_reverse([1, 2, 3, 4], [])
=> build_reverse([2, 3, 4], [1])
=> build_reverse([3, 4], [2, 1])
=> build_reverse([4], [3, 2, 1])
=> build_reverse([], [4, 3, 2, 1])
=> [4, 3, 2, 1]
```

```python
def build_reverse(lst, acc):
    # Base case: if list is empty, return accumulated result
    if len(lst) == 0:
        return acc # this means recursion is done, produce the newest "acc"
    else:
        # Take rest of list and add current first element to end of accumulator
        return build_reverse(lst[1:], [lst[0]] + acc) 
        # instead of "new_lst = lst[0] + build_reverse(lst[1], new_lst)" do not define new list! "[lst[0]] + acc" is going to be recursed as the new list
        # this means: calling build_reverse, old list is now updated to list after the first element, 
		    # new list is updated to list.append the first element of old list.

def reverse(L):
    '''Returns a new list with elements of L in reverse order
    reverse: (listof X) -> (listof X)
    Example: reverse([1,2,3,4]) => [4,3,2,1]
    '''
    # Start with empty accumulator
    return build_reverse(L, [])
    # this calling build_reverse helper function, defining: lst = L, acc(new list) = [] (empty)
```