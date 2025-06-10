# Module 9: Additional Options for Organizing Data

**Keys** describe something basic and unique about an object

**Values** describe a property of a key

**Dictionaries** are collections of these key-value pairs

In Python, we store these in dictionaries which we document by writing **`(dictof key_type value_type)`**. As examples:

- `student_id:major` and `social_insurance_number:name` pairs could be stored in a `(dictof Nat Str)`.
- `dna_signature:organism_type` and `word:definition` pairs could be stored in a `(dictof Str Str)`.

To initialize a dictionary, we can use either `d = {}` or we can initialize some pairs in `d` using the syntax `d = {key1:value1, ... , keyn:valuen}`

```python
design recipe: (dictof key_type value_type)

To initialize a dictionary, we can use either d = {} or we can initialize some pairs in d using the syntax: d = {key1:value1, ... , keyn:valuen}

d[k] which retrieves the value associated with the key k
d[k] = v which assigns the value v to the key k
k in d which determines whether or not k is a key in d. 
(Compare this to the situation in lists when asking if k in L which takes O(n) time!)

len(d) which returns the number of key:value pairs in the dictionary in O(1) time.
list(d.keys()) which returns a list of the keys in d in O(n) time.
list(d.values()) which returns a list of the values in d in O(n) time.
d.pop(k) which returns the value d[k] and mutates the dictionary by removing the key-value pair k:d[k] in O(1) time.
```

```python
## Example: Counting number of times distinct 
## characters occur in a string
def character_count (sentence):
  '''
  Returns a dictionary that consists of a character
  and count of each character in the string sentence.
  
  character_count: Str->(dictof Str Nat)
  
  Examples:
     character_count("") => {}
     character_count("banana") => {'a':3, 'b': 1, 'n':2}
  '''
  
  ##Initialize an empty dictionary
  characters = {}
  for char in sentence:
    ##Notice the special case if char not in characters
    if char in characters:
      characters[char] += 1
    else:
      characters[char] = 1
  return characters

#check.expect("Test Empty", character_count(""), {})

## Notice in the test the order of key-value pairs in
## the dictionary do not matter for testing purposes.
#check.expect("Test", character_count("banana"), {'b':1, 'a':3, 'n':2})

## Next, find the most common character in a string
def most_common_character (sentence):
  '''
  Returns the most common character in the string sentence.
  If there is a tie, returns any of the most common characters.
   
  most_common_character: Str -> Str
  Requires: 
     len(sentence) > 0
     
  Examples: 
    most_common_character("c") => "c"
    most_common_character("banana") => "a"
  '''

  ##Use the previous function as a helper
  chars = character_count(sentence)
  most_common = ""
  max_times = 0
  
  ##Loop through the keys in a dictionary chars
  for curr_char in chars:  
    if chars[curr_char] > max_times:
      most_common = curr_char
      max_times = chars[curr_char]
  return most_common

#check.expect("Test 1", most_common_character("c"), "c")
#check.expect("Test 2", most_common_character("banana"), "a")
```

class Country:
  Fields:
     continent (Str),
     leader (Str),
     population (Nat)

When a class is defined like above, Python sets up a collection of magic methods, which start and end with two underscores, for the user to be able to use without defining them. Here is a small collection of what is defined:

__init__: Used to give a more meaningful initialization of an object.
__repr__ or __str__: Used to give a more user friendly representation of a printed object.
__eq__ (and other comparison operators like __gt__): Used to redefine the comparison operator == (and likewise for others).
The class docstring can be accessed by the magic method __doc__. Once you've defined the Country class, try the following: Country.__doc__

```python

class Country: 
	def __init__(self, cont, lead, pop):
		self.continent = cont
		self.leader = lead
		self.population = pop
	
	def __repr__(self):
		s = "CNT: {0.continent}; L: {0.leader}; POP: {0.population}"
		return s.format(self)
	
	def __eq__(self, other):
		return isinstance(other, Country) and\
		       self.continent == other.continent and\
		       self.leader == other.leader and\
		       self.population == other.population

##Testing __init__
canada = Country("North America", "Trudeau", 37742157)

check.expect("Testing Canada field continent", 
   canada.continent, "North America")
check.expect("Testing Canada field leader", canada.leader, "Trudeau")
check.expect("Testing Canada field pop", canada.population, 37742157)

##Testing __repr__

check.set_print_exact("CNT: North America; L: Trudeau; POP: 37742157")
check.expect("Testing Canada print", print(canada), None)
  
##OR
  
check.expect("Testing Canada print", str(canada), 
  "CNT: North America; L: Trudeau; POP: 37742157")

##Testing __eq__

india = Country("Asia", "Modi", 1380004385)
india_copy = Country(india.continent, india.leader, india.population)

check.expect("Testing == False", india == canada, False)
check.expect("Testing == True", india == india_copy, True)
check.expect("Testing is False", india is india_copy, False)
```

```python
def election(self, winner):
    '''
    Updates leader to winner, and prints a 
    message about the winner
  
    Effects: 
       Mutates self
       Prints two lines

    election: Country Str -> None

    Example: 
       If c = Country("US", "Trump", 331002647)
       calling, c.election("Biden"), mutates c to
       Country("US", "Biden", 331002647) and prints
       Election Results:
       Biden replaces Trump as leader
    '''
    print("Election Results:")
    if self.leader == winner:
      print("{0} re-elected".format(self.leader))
    else:
      print("{0} replaces {1} as leader".format(winner, self.leader))
      self.leader = winner
```

```python
class Country: 
  def __init__(self, cont, lead, pop):
    self.continent = cont
    self.leader = lead
    self.population = pop

  def __repr__(self):
    s = "CNT: {0.continent}; L: {0.leader}; POP: {0.population}"
    return s.format(self)
    
canada = Country("North America", "Trudeau", 37742157)
print(canada.__repr__()) ##DO NOT DO THIS!!!
print(canada) ##This is how you should print a country!
```