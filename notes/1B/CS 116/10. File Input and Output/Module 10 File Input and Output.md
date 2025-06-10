# Module 10: File Input and Output

```python
Template for Reading Files:

fin = open(filename, "r")
## read file using fin.readline() in a loop, 
## or using fin.readlines()
## Note: resulting strings contain newlines
fin.close()

Template for Writing Files:

fout = open(filename, "w")
## write to file usingfout.write(s) 
## in a loop, or fout.writelines(los)
## Note: newlines are written only 
##       if strings include them
fout.close()
```

```python
class Name:
  '''
  Fields: 
     first (Str), 
     last (Str)
  '''
  def __init__(self, fn, ln):
    '''
    Initializes a Name object
    by calling Name(fn, ln).
    
    Effects: Mutates self
    
    __init__: Name Str Str -> None
    '''
    self.first = fn
    self.last = ln
  
  def __eq__(self, other):
    '''
    __eq__: Name Any -> Bool
    '''
    return isinstance(other, Name) and \
          self.first == other.first and \
          self.last == other.last
    
def str_name(s):
  '''
  Returns Name from s, where s has the form 
  first last" or "first last\n"
  but s may include extra whitespaces above
    
  str_name: Str -> Name
  
  Example:
     str_name("Carmen    Bruni  \n") \
           => Name("Carmen", "Bruni")
  '''
  nameslist = s.split()
  return Name(nameslist[0], nameslist[1])
  
check.expect("Test", 
    str_name("Carmen    Bruni  \n"), 
       Name("Carmen", "Bruni"))
```

design recipe:

Purpose: Should include details about what is read from a file or written to a file
Effects: Should mention reading from a file or writing to a file (don't need details here)
Contract: Should mention that file names exist if being read from.
Examples: Should be explicit about what is in the input file and what is in the output file

actual: is the name of file created by program
expected: is the name of file you created in your text editor (or using the 'add file' button in EdX) with the expected output

```python
import check
def file_filter(fname, minimum):
  #
  Opens the file called fname,that contains
  one integer on each line, reads in each 
  integer, and writes each integer>minimum 
  to a new file, "summary.txt". 
    
  Effects: 
     Reads file called fname
     Writes to a file called "summary.txt" 
    
  file_filter: Str Nat -> None
  Requires: 
     0 <= minimum <= 100
     fname file exists
  
  Examples:
     If "empty.txt" is empty, then 
     file_filter("empty.txt", 1) will create an 
     empty file named summary.txt
     
     If "eg2.txt" contains 35, 75, 50, 90 (one per 
     line) then file_filter("eg2.txt", 50) will 
     create a file named "summary.txt" 
     containing 75, 90 (one per line)
  #

  fin = open(fname, "r")
  lst = fin.readlines()
  fin.close()
  fout = open("summary.txt", "w")
  for line in lst:
      if int(line.strip()) > minimum:
          fout.write(line)
  fout.close()

# Test 1: empty file
# q3t1_input.txt contains nothing
# q3t1_expected.txt contains nothing
check.set_file_exact("summary.txt", "q3t1_expected.txt")
check.expect("Q3T1: Empty file", file_filter("q3t1_input.txt", 40), None)

# Test 2: general case
# q3t2_input.txt contains first thirty positive integers, one line each
# q3t2_expected.txt contains the numbers form 16 to 30 one line each
check.set_file_exact("summary.txt", "q3t2_expected.txt")
check.expect("Q3T2: First 30 ints", file_filter("q3t2_input.txt", 15), None)
```