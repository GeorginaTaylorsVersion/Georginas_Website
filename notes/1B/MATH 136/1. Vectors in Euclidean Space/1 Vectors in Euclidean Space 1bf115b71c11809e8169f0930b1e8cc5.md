# 1. Vectors in Euclidean Space

## 1.1 Vector Addition and Scalar Multiplication

The set $\mathbb{R}^{n}$ is defined by $\mathbb{R}^{n}=\{\vec{x}=\begin{bmatrix}x_{1}\\ \vdots\\ x_{n}\end{bmatrix}:x_{1},...,x_{n}\in\mathbb{R}\}$ An element $\vec{x}\in\mathbb{R}^{n}$ is called a vector.

Two vectors $\vec{x}=\begin{bmatrix}x_{1}\\ \vdots\\ x_{n}\end{bmatrix}\in\mathbb{R}^{n}$ and $\vec{y}=\begin{bmatrix}y_{1}\\ \vdots\\ y_{m}\end{bmatrix}\in\mathbb{R}^{m}$ are said to be equal if $n=m$ and $x_{i}=y_{i}$ for $1\le i\le n$.

e.g. For $n=2$, we have the set $\mathbb{R}^{2}$, for which a few elements are
$\begin{bmatrix}1\\ 2\end{bmatrix},\begin{bmatrix}\pi\\ 1.2\end{bmatrix} \text{ and } \begin{bmatrix}0\\ -10\end{bmatrix}$ 

The set $\mathbb{R}^{n}$ just defined is also known as the n-dimensional Euclidean space, which you may have already learned as the set of points $(x_{1},...,x_{n})$.
Geometrically, we will often represent the vector $\vec{x}=\begin{bmatrix}x_{1}\\ \vdots\\ x_{n}\end{bmatrix}$ as an arrow with its tail at the origin and its head at its corresponding point, $(x_{1},...,x_{n})$.

Let $\vec{x}=\begin{bmatrix}x_{1}\\ \vdots\\ x_{n}\end{bmatrix}, \quad \vec{y}=\begin{bmatrix}y_{1}\\ \vdots\\ y_{n}\end{bmatrix}\in\mathbb{R}^{n}$ and let $c\in\mathbb{R}$ (called a scalar).
We define addition, $\vec{x}+\vec{y}$, and scalar multiplication, $c\vec{x}$, by  $\vec{x}+\vec{y}=\begin{bmatrix}x_{1}+y_{1}\\ \vdots\\ x_{n}+y_{n}\end{bmatrix} \quad \text{and} \quad c\vec{x}=\begin{bmatrix}cx_{1}\\ \vdots\\ cx_{n}\end{bmatrix}$.

Subtraction of vectors works as expected, but it is a consequence of addition and scalar multiplication. That is, $\vec{x}-\vec{y}=\vec{x}+(-1)\vec{y}$.

e.g. True or False?

1. $\begin{bmatrix}1\\ 2\end{bmatrix}=\begin{bmatrix}1\\ 2\\ 0\end{bmatrix}$
2. For $\vec{x}\in\mathbb{R}^{3}$, $\vec{x}-\vec{x}=0$
3. $\begin{bmatrix}1\\ 2\end{bmatrix}-2\begin{bmatrix}1\\ 1\end{bmatrix}=\begin{bmatrix}-1\\ 0\end{bmatrix}$

Answers:

1. False. A vector from $\mathbb{R}^{2}$ is different from a vector in $\mathbb{R}^{3}$.
2. False. The correct answer is $\begin{bmatrix}0\\ 0\\ 0\end{bmatrix}$, which we can also represent as $\vec{0}$, called the zero vector.
3. True. Here we have both addition and scalar multiplication in our first example of a linear combination, defined formally in the next slide.

For $\vec{v}{1},...,\vec{v}{k}\in\mathbb{R}^{n}$ and $c_{1},...,c_{k}\in\mathbb{R}$ we call the expression $c_{1}\vec{v}_{1}+\cdot\cdot\cdot+c_{k}\vec{v}_{k}$ a linear combination of $\vec{v}_{1},...,\vec{v}_{k}$.

**Theorem 1.1.7**

If $\vec{x}, \vec{y}, \vec{w}\in\mathbb{R}^{n}$ and c, $d\in\mathbb{R}$, then

1. $\vec{x}+\vec{y}\in\mathbb{R}^{n}$
2. $(\vec{x}+\vec{y})+\vec{w}=\vec{x}+(\vec{y}+\vec{w})$.
3. $\vec{x}+\vec{y}=\vec{y}+\vec{x}$
4. There exists a vector $\vec{0}\in\mathbb{R}^{n}$ such that $\vec{x}+\vec{0}=\vec{x}$ for all $\vec{x}\in\mathbb{R}^{n}$.
5. For $\vec{x}\in R^{n}$ there exists $(-\vec{x})\in\mathbb{R}^{n}$ such that $\vec{x}+(-\vec{x})=\vec{0}$.
6. $c\vec{x}\in\mathbb{R}^{n}$.
7. $c(d\vec{x})=(cd)\vec{x}$
8. $(c+d)\vec{x}=c\vec{x}+d\vec{x}$.
9. $c(\vec{x}+\vec{y})=c\vec{x}+c\vec{y}$.
10. $1\vec{x}=\vec{x}$

## 1.2 Bases

Let $\mathcal{B}=\{\vec{v}{1},...,\vec{v}{k}\}$ be a set of vectors in $\mathbb{R}^{n}$. We define the span of $\mathcal{B}$ by $\text{Span } \mathcal{B}=\{c_{1}\vec{v}{1}+\cdot\cdot\cdot+c{k}\vec{v}{k}|c{1},...,c_{k}\in\mathbb{R}\}.$
We say that the set Span $\mathcal{B}$ is spanned by $\mathcal{B}$ and that $\mathcal{B}$ is a spanning set for Span $\mathcal{B}$.

e.g. Let $\vec{e}_{1}=\begin{bmatrix}1\\ 0\end{bmatrix}$. The set $Span\{\vec{e}_{1}\}$ would contain, for example, the vectors $\begin{bmatrix}0\\ 0\end{bmatrix},\begin{bmatrix}3\\ 0\end{bmatrix} \quad \text{and} \quad \begin{bmatrix}\pi\\ 0\end{bmatrix} \quad \text{but not } \quad \begin{bmatrix}0\\ -1\end{bmatrix}$

e.g. Let $\vec{e}{1}=\begin{bmatrix}1\\ 0\end{bmatrix}$, $\vec{e}{2}=\begin{bmatrix}0\\ 1\end{bmatrix}$, and $\mathcal{B}=\{\vec{e}{1},\vec{e}{2}\}$. How would you describe the set Span $\mathcal{B}$?
Answer: all the vectors in $\mathbb{R}^{2}$. 

e.g. Now, how would you describe the set $\text{Span } \{[\begin{matrix}1\\ 0\end{matrix}],[\begin{matrix}2\\ 0\end{matrix}],[\begin{matrix}0\\ 1\end{matrix}]\}$ 
Answer: all of $\mathbb{R}^{2}$. ( $[\begin{smallmatrix}2\\ 0\end{smallmatrix}]=2[\begin{smallmatrix}1\\ 0\end{smallmatrix}] \rightarrow a[\begin{smallmatrix}1\\ 0\end{smallmatrix}]+G[\begin{smallmatrix}0\\ 1\end{smallmatrix}]$).

**Theorem 1.2.10**

Let $\vec{v}_{1},..., \vec{v}_{k}\in\mathbb{R}^{n}$. Some vector $\vec{v}_{j}$, $1\le j\le k$, can be written as a linear combination of $\vec{v}_{1}$,..., $\vec{v}_{j-1},$ $\vec{v}_{j+1}$,..., $\vec{v}_{k}$ if and only if  $\text{Span}\{\vec{v}_{1},...,\vec{v}_{k}\}=\text{Span}\{\vec{v}_{1},...,\vec{v}_{j-1},\vec{v}_{j+1},...,\vec{v}_{k}\}$. 

Note: A direct application of the theorem above to Activity 2 suggests that $\begin{bmatrix}2\\ 0\end{bmatrix}$ can be written as a linear combination of $\vec{e}_{1}$ and $\vec{e}_{2}$. (Note: The text means $\begin{bmatrix}1\\0\end{bmatrix}$ and $\begin{bmatrix}0\\1\end{bmatrix}$ for $\vec{e}_1, \vec{e}_2$. The vector$\begin{bmatrix}2\\0\end{bmatrix}$ is a linear combination of just$\begin{bmatrix}1\\0\end{bmatrix}$.)
Can$\begin{bmatrix}1\\ 0\end{bmatrix}$ be written as a linear combination of $\begin{bmatrix}2\\ 0\end{bmatrix}$ and $\begin{bmatrix}0\\ 1\end{bmatrix}$? Yes!

A set of vectors $\{\vec{v}_{1},...,\vec{v}_{k}\}$ in $\mathbb{R}^{n}$  is said to be linearly dependent if there exists coefficients $c_{1},...,c_{k}$ not all zero such that $\vec{0}=c_{1}\vec{v}_{1}+\cdot\cdot\cdot+c_{k}\vec{v}_{k}$ 

A set of vectors $\{\vec{v}_{1},...,\vec{v}_{k}\}$ in $\mathbb{R}^{n}$ is said to be linearly independent if the only solution to  $\vec{0}=c_{1}\vec{v}_{1}+\cdot\cdot\cdot+c_{k}\vec{v}_{k}$,  is $c_{1}=\cdot\cdot\cdot=c_{k}=0$ (called the trivial solution).

e.g. $\{\begin{bmatrix}1\\ 0\end{bmatrix},\begin{bmatrix}0\\ 1\end{bmatrix}\}$ is a linearly independent set. But, $\begin{bmatrix}2\\ 0\end{bmatrix}=2\begin{bmatrix}1\\ 0\end{bmatrix}$, so adding it to any set that already contains $\begin{bmatrix}1\\ 0\end{bmatrix}$ makes the set linearly dependent.

e.g. Is $\{[\begin{matrix}1\\ 3\end{matrix}],[\begin{matrix}4\\ -2\end{matrix}],[\begin{matrix}1\\ -11\end{matrix}]\}$ linearly independent?
Answer: No, since $-3\begin{bmatrix}1\\ 3\end{bmatrix}+1\begin{bmatrix}4\\ -2\end{bmatrix}-1\begin{bmatrix}1\\ -11\end{bmatrix}=\begin{bmatrix}0\\ 0\end{bmatrix}$. This is equivalent to $\begin{bmatrix}1\\ -11\end{bmatrix}=-3\begin{bmatrix}1\\ 3\end{bmatrix}+1\begin{bmatrix}4\\ -2\end{bmatrix}$. So, by Theorem 1.2.10, $\text{Span}\{[\begin{matrix}1\\ 3\end{matrix}],[\begin{matrix}4\\ -2\end{matrix}],[\begin{matrix}1\\ -11\end{matrix}]\}=\text{Span}\{[\begin{matrix}1\\ 3\end{matrix}],[\begin{matrix}4\\ -2\end{matrix}]\}$. 

**Theorem 1.2.13**
A set of vectors $\{\vec{v}_{1},...,\vec{v}_{k}\}$ in $\mathbb{R}^{n}$ is said to be linearly dependent if and only if  $\vec{v}_{i}\in \text{Span}\{\vec{v}_{1},...,\vec{v}_{i-1},\vec{v}_{i+1},...,\vec{v}_{k}\}$,  for some i, with $1\le i\le k$.

**Theorem 1.2.20**
If a set of vectors $\{\vec{v}_{1},...,\vec{v}_{k}\}$ contains the zero vector, then it is linearly dependent.

e.g. The set $\mathcal{B}=\{[\begin{matrix}1\\ 0\end{matrix}],[\begin{matrix}0\\ 1\end{matrix}]\}$ is a basis for $\mathbb{R}^{2}$.
First, $c_{1}\begin{bmatrix}1\\ 0\end{bmatrix}+c_{2}\begin{bmatrix}0\\ 1\end{bmatrix}=\begin{bmatrix}c_{1}\\ c_{2}\end{bmatrix}=\begin{bmatrix}0\\ 0\end{bmatrix}$ only if $c_{1}=c_{2}=0$ so $\mathcal{B}$ is linearly independent.
Second, for any vector $\vec{x}=\begin{bmatrix}x\\ y\end{bmatrix}\in\mathbb{R}^{2}$, we have that $\vec{x}$ can be written as a linear combination of the vectors of $\mathcal{B}$ in the form: $\begin{bmatrix}x\\ y\end{bmatrix}=x\begin{bmatrix}1\\ 0\end{bmatrix}+y\begin{bmatrix}0\\ 1\end{bmatrix}$
Thus, $\vec{x}\in \text{Span}\mathcal{B}$  which implies that $\mathbb{R}^{2} \subseteq \text{Span } \mathcal{B}$. Finally, for any $c_{1}, c_{2}\in\mathbb{R}$, the vector $c_{1}\begin{bmatrix}1\\ 0\end{bmatrix}+c_{2}\begin{bmatrix}0\\ 1\end{bmatrix}=\begin{bmatrix}c_{1}\\ c_{2}\end{bmatrix}\in\mathbb{R}^{2}$, so $\text{Span } \mathcal{B}\subseteq\mathbb{R}^{2}$ and $\mathbb{R}^{2}=\text{Span}\mathcal{B}$.

e.g. Write down the standard basis for $\mathbb{R}^{4}$.
Answer: $\{\begin{bmatrix}1\\ 0\\ 0\\ 0\end{bmatrix},\begin{bmatrix}0\\ 1\\ 0\\ 0\end{bmatrix},\begin{bmatrix}0\\ 0\\ 1\\ 0\end{bmatrix},\begin{bmatrix}0\\ 0\\ 0\\ 1\end{bmatrix}\}$ 

e.g. Is the set $\mathcal{B}=\{[\begin{matrix}1\\ 0\\ 1\end{matrix}],[\begin{matrix}-2\\ 1\\ 1\end{matrix}]\}$ a basis for $\mathbb{R}^{3}$?
Answer: No, consider the vector $\vec{e}_{1}=\begin{bmatrix}1\\ 0\\ 0\end{bmatrix}\in\mathbb{R}^{3}$ and note that $\vec{e}_{1}\notin \text{Span}\mathcal{B}$.

## 1.3 Subspaces

A subset $\mathbb{S}$ of $\mathbb{R}^{n}$ is called a subspace of $\mathbb{R}^{n}$ if for every $\vec{x}, \vec{y}, \vec{w}\in\mathbb{S}$ and c, $d\in\mathbb{R}$ we have

1. $\vec{x}+\vec{y}\in\mathbb{S}$.
2. $(\vec{x}+\vec{y})+\vec{w}=\vec{x}+(\vec{y}+\vec{w})$
3. $\vec{x}+\vec{y}=\vec{y}+\vec{x}$.
4. There exists a vector $\vec{0}\in\mathbb{S}$ such that $\vec{x}+\vec{0}=\vec{x}$ for all $\vec{x}\in\mathbb{S}$.
5. For every $\vec{x}\in\mathbb{S}$  there exists $(-\vec{x})\in\mathbb{S}$ such that $\vec{x}+(-\vec{x})=\vec{0}$.
6. $c\vec{x}\in\mathbb{S}$
7. $c(d\vec{x})=(cd)\vec{x}$
8. $(c+d)\vec{x}=c\vec{x}+d\vec{x}$
9. $c(\vec{x}+\vec{y})=c\vec{x}+c\vec{y}$.
10. $1\vec{x}=\vec{x}$

**Subspace Test**
Let S be a non-empty subset of $\mathbb{R}^{n}$. If $\vec{x}+\vec{y}\in\mathbb{S}$ and $c\vec{x}\in\mathbb{S}$ for all $\vec{x}, \vec{y}\in\mathbb{S}$ and $c\in\mathbb{R}$, then S is a subspace of $\mathbb{R}^{n}$.

**Subspace Test:**

1. Contains $\vec{0}$
2. Close addition
3. Close scalar multiplication.

e.g. Show that the line L given by Span $\{[\begin{matrix}1\\ 1\end{matrix}]\}$ is a subspace of $\mathbb{R}^{2}$.
Answer: The line L is a non-empty subset of $\mathbb{R}^{2}$, since $0\begin{bmatrix}1\\ 1\end{bmatrix}=\vec{0}\in L$. Let $\vec{x}, \vec{y}\in L$, that is, $\vec{x}=c_{1}\begin{bmatrix}1\\ 1\end{bmatrix}$ and $\vec{y}=c_{2}\begin{bmatrix}1\\ 1\end{bmatrix}$ for some $c_{1}, c_{2}\in\mathbb{R}$. Thus, for any $c\in\mathbb{R}$, $\vec{x}+\vec{y}=(c_{1}+c_{2})\begin{bmatrix}1\\ 1\end{bmatrix}\in L \quad \text{and} \quad c\vec{x}=(cc_{1})\begin{bmatrix}1\\ 1\end{bmatrix}\in L$. 

e.g. Let L be a line in $\mathbb{R}^{n}$ with vector equation $\vec{x}=t\vec{v}+\vec{b},$ $t\in\mathbb{R}$. If $\{\vec{v},\vec{b}\}$ linearly independent, can L be a subspace of $\mathbb{R}^{n}$?
Answer: No. $\vec{b}$ has to equal $\vec{0}$ to contain $\vec{0}$.

If $\vec{v}_{1},...,\vec{v}_{k}\in\mathbb{R}^{n}$, then $\mathbb{S}=\text{Span}\{\vec{v}_{1},...,\vec{v}_{k}\}$ is a subspace of $\mathbb{R}^{n}$.

**About this theorem:**

1. Is $\{\vec{v}_{1},...,\vec{v}_{k}\}$ a basis for the subspace S of $\mathbb{R}^{n}$?
Not necessarily, since a basis has to be linearly independent.
2. If $\{\vec{v}_{1},...,\vec{v}_{k}\}$ is indeed linearly independent, then it would be a basis for S. In that case, we would say that the dimension of S is k according to the definition below.

The dimension of $\mathbb{S}\subseteq\mathbb{R}^{n}$, denoted by dim S, is defined as the number of vectors in any basis for S.

e.g. Find a basis for the subspace $\mathbb{S}{1}=\{[\begin{matrix}x{1}\\ x_{2}\\ x_{3}\end{matrix}]\in\mathbb{R}^{3}|x_{1}-2x_{3}=0,x_{2}+4x_{3}=0\}$ of $\mathbb{R}^{3}$.
Answer: The equations that help define $\mathbb{S}{1}$ imply that
$x{1}-2x_{3}=0\Rightarrow x_{1}=2x_{3}$ 
$x_{2}+4x_{3}=0\Rightarrow x_{2}=-4x_{3}$ 
Thus, for any vector in $\mathbb{S}{1}$ $\begin{bmatrix}x{1}\\ x_{2}\\ x_{3}\end{bmatrix}=\begin{bmatrix}2x_{3}\\ -4x_{3}\\ x_{3}\end{bmatrix}=x_{3}\begin{bmatrix}2\\ -4\\ 1\end{bmatrix}, \text{ let } \vec{v}=\begin{bmatrix}2\\ -4\\ 1\end{bmatrix}$ 
That is, $\mathbb{S}{1}\subseteq \text{Span}\{\vec{v}\}$. We can also check that $\text{Span}\{\vec{v}\}\subseteq\mathbb{S}{1}$, so $\{\vec{v}\}$ is a basis for $\mathbb{S}{1}$. Furthermore, $dim\mathbb{S}{1}=1$.

## 1.4 Dot Product, Cross Product, and Scalar Equations

Let $\vec{x}=\begin{bmatrix}x_{1}\\ \vdots\\ x_{n}\end{bmatrix} \quad \text{and} \quad \vec{y}=\begin{bmatrix}y_{1}\\ \vdots\\ y_{n}\end{bmatrix}$  be vectors in $\mathbb{R}^{n}$.
The dot product of $\vec{x}$ and $\vec{y}$ is $\vec{x}\cdot\vec{y}=\begin{bmatrix}x_{1}\\ \vdots\\ x_{n}\end{bmatrix}\cdot\begin{bmatrix}y_{1}\\ \vdots\\ y_{n}\end{bmatrix}=x_{1}y_{1}+\cdot\cdot\cdot+x_{n}y_{n}=\sum_{i=1}^{n}x_{i}y_{i}$.
In $\mathbb{R}^{2}$ and $\mathbb{R}^{3}$, the dot product is simply $\begin{bmatrix}x_{1}\\ x_{2}\end{bmatrix}\cdot\begin{bmatrix}y_{1}\\ y_{2}\end{bmatrix}=x_{1}y_{1}+x_{2}y_{2}$. 
$\begin{bmatrix}x_{1}\\ x_{2}\\ x_{3}\end{bmatrix}\cdot\begin{bmatrix}y_{1}\\ y_{2}\\ y_{3}\end{bmatrix}=x_{1}y_{1}+x_{2}y_{2}+x_{3}y_{3}$. 

e.g. Consider $\vec{x}=\begin{bmatrix}1\\ 2\\ 3\end{bmatrix}$, $\vec{y}=\begin{bmatrix}2\\ 1\\ 1\end{bmatrix}$, and  $\vec{z}=\begin{bmatrix}10\\ 0\\ 5\end{bmatrix}$, and compute $(\vec{x}\cdot\vec{y})\vec{z}$.
Answer:
 $\vec{x}\cdot\vec{y}=\begin{bmatrix}1\\ 2\\ 3\end{bmatrix}\cdot\begin{bmatrix}2\\ 1\\ 1\end{bmatrix}=2+2+3=7$. 
$(\vec{x}\cdot\vec{y})\vec{z}=7\vec{z}=7\begin{bmatrix}10\\ 0\\ 5\end{bmatrix}=\begin{bmatrix}70\\ 0\\ 35\end{bmatrix}$. 

**Theorem 1.4.8**
If $\vec{x}, \vec{y}, \vec{z}\in\mathbb{R}^{n}$ and $s, t\in\mathbb{R}$, then

1. $\vec{x}\cdot\vec{x}\ge0$, and $\vec{x}\cdot\vec{x}=0$ if and only if $\vec{x}=\vec{0}$.
2. $\vec{x}\cdot\vec{y}=\vec{y}\cdot\vec{x}$.
3. $\vec{x}\cdot(s\vec{y}+t\vec{z})=s(\vec{x}\cdot\vec{y})+t(\vec{x}\cdot\vec{z})$.

Let $\vec{x}\in\mathbb{R}^{n}$. The length or norm of $\vec{x}$ is defined to be $||\vec{x}||=\sqrt{\vec{x}\cdot\vec{x}}$

e.g. Find the length of $\vec{x}=\begin{bmatrix}1\\ 2\end{bmatrix}$ and $\vec{y}=\begin{bmatrix}1\\ 2\\ 2\end{bmatrix}$.
Answer:
$||\vec{x}||=\sqrt{\vec{x}\cdot\vec{x}}=\sqrt{1^{2}+2^{2}}=\sqrt{5}$ 
$||\vec{y}||=\sqrt{\vec{y}\cdot\vec{y}}=\sqrt{1^{2}+2^{2}+2^{2}}=\sqrt{9}=3$

A vector $\vec{x}\in\mathbb{R}^{n}$ such that $||\vec{x}||=1$ is called a unit vector.
Note: All vectors from the standard bases, $\vec{e}_{i}$, are unit vectors.

**Theorem 1.4.8** (Note: Same theorem number as previous, likely continuation of properties)
If $\vec{x}, \vec{y}\in\mathbb{R}^{n}$ and $c\in\mathbb{R}$  then

1. $||\vec{x}||\ge0$, and $||\vec{x}||=0$ if and only if $\vec{x}=\vec{0}$.
2. $||c\vec{x}||=|c|||\vec{x}||$.
3. $|\vec{x}\cdot\vec{y}|\le||\vec{x}||||\vec{y}||$. (Cauchy-Schwarz Inequality)
4. |$|\vec{x}+\vec{y}||\le||\vec{x}||+||\vec{y}||$. (Triangle Inequality)

Let $\vec{x}, \vec{y}\in\mathbb{R}^{n}$. If $\vec{x}\ne\vec{0}$ and $\vec{y}\ne\vec{0}$, we define an angle between $\vec{x}$ and $\vec{y}$ to be any $\theta\in\mathbb{R}$ such that  $\vec{x}\cdot\vec{y}=||\vec{x}||||\vec{y}||\cos\theta$
We do not define an angle between the zero vector and any other vector.

e.g. Determine the angle between the vectors $\vec{v}=\begin{bmatrix}0\\ 1\\ 1\end{bmatrix}$ and $\vec{w}=\begin{bmatrix}0\\ 0\\ 1\end{bmatrix}$.
Answer: The definition of angle states that  $\vec{v}\cdot\vec{w}=||\vec{v}||||\vec{w}||\cos\theta$ 
where $\vec{v}\cdot\vec{w}=0+0+1=1$, $||\vec{v}||=\sqrt{0^{2}+1^{2}+1^{2}}=\sqrt{2}$ and $||\vec{w}||=\sqrt{0^{2}+0^{2}+1^{2}}=1$. Thus, 
$1=\sqrt{2}\cos\theta\Rightarrow \cos\theta=\frac{1}{\sqrt{2}}\Rightarrow\theta=\frac{\pi}{4}$. 

Let $\vec{x}, \vec{y}\in\mathbb{R}^{n}$. If $\vec{x}\cdot\vec{y}=0$, then $\vec{x}$ and $\vec{y}$ are said to be orthogonal.

e.g. The vectors $\begin{bmatrix}1\\ 2\\ 3\end{bmatrix}$ and$\begin{bmatrix}1\\ 1\\ -1\end{bmatrix}$ are orthogonal. (Verification: $1(1)+2(1)+3(-1) = 1+2-3=0$)

A set of vectors $\{\vec{v}_{1},...,\vec{v}_{k}\}$ in $\mathbb{R}^{n}$ is called an orthogonal set if $\vec{v}{i}\cdot\vec{v}{j}=0$ for all $i\ne j$.

e.g. The standard basis of $\mathbb{R}^{n}$ is an orthogonal set.

Let $\vec{v}, \vec{w}\in\mathbb{R}^{3}$. The cross product of $\vec{v}=\begin{bmatrix}v_{1}\\ v_{2}\\ v_{3}\end{bmatrix}$ and $\vec{w}=\begin{bmatrix}w_{1}\\ w_{2}\\ w_{3}\end{bmatrix}$ is defined to be $\vec{v}\times\vec{w}=\begin{bmatrix}v_{2}w_{3}-v_{3}w_{2}\\ -(v_{1}w_{3}-v_{3}w_{1})\\ v_{1}w_{2}-v_{2}w_{1}\end{bmatrix}$ 
(Note: The middle component is often written as $v_{3}w_{1}-v_{1}w_{3}$ to avoid the leading negative sign.)

**Theorem 1.4.17** Suppose that $\vec{v}, \vec{w}, \vec{x}\in\mathbb{R}^{3}$ and $c\in\mathbb{R}$.

If $\vec{n}=\vec{v}\times\vec{w}$ then for any $\vec{y}\in \text{Span}\{\vec{v},\vec{w}\}$ we have $\vec{y}\cdot\vec{n}=0$.

1. $\vec{v}\times\vec{w}=-\vec{w}\times\vec{v}$.
2. $\vec{v}\times\vec{v}=\vec{0}$.
3. $\vec{v}\times\vec{w}=\vec{0}$  if and only if either $\vec{v}=\vec{0}$ or $\vec{w}$  is a scalar multiple of $\vec{v}$. 
4. $\vec{v}\times(\vec{w}+\vec{x})=\vec{v}\times\vec{w}+\vec{v}\times\vec{x}$.
5. $(c\vec{v})\times(\vec{w})=c(\vec{v}\times\vec{w})$.
6. $||\vec{v}\times\vec{w}||=||\vec{v}||||\vec{w}||\sin\theta|$ where $\theta$ is the angle between $\vec{v}$ and $\vec{w}$.

**Theorem 1.4.18** Let $\vec{v}, \vec{w}, \vec{b}\in\mathbb{R}^{3}$ with $\{\vec{v},\vec{w}\}$ being linearly independent and let P be a plane in $\mathbb{R}^{3}$ with vector equation $\vec{x}=s\vec{v}+t\vec{w}+\vec{b}$, $s, t\in\mathbb{R}$. If $\vec{n}=\vec{v}\times\vec{w}$, then an equation for the plane is $(\vec{x}-\vec{b})\cdot\vec{n}=0$. 

e.g. Let $\vec{v}=\begin{bmatrix}1\\ 0\\ 0\end{bmatrix}$, $\vec{w}=\begin{bmatrix}0\\ 1\\ 0\end{bmatrix}$ and $\vec{b}=\begin{bmatrix}0\\ 0\\ 0\end{bmatrix}$. Then $\vec{n}=\vec{v}\times\vec{w}=\begin{bmatrix}0\\ 0\\ 1\end{bmatrix}$ as seen in activity 1. If the plane P is given by $\vec{x}=s\vec{v}+t\vec{w}+\vec{b}$, $s, t\in\mathbb{R}$, then an equation for the plane is $(\vec{x}-\vec{b})\cdot\vec{n}=0\Rightarrow\left(\begin{bmatrix}x_{1}\\ x_{2}\\ x_{3}\end{bmatrix}-\begin{bmatrix}0\\ 0\\ 0\end{bmatrix}\right)\cdot\begin{bmatrix}0\\ 0\\ 1\end{bmatrix}=0\Rightarrow x_{3}=0$ 

Let P be a plane in $\mathbb{R}^{3}$ that passes through the point $B(b_{1},b_{2},b_{3})$.
If $\vec{n}=\begin{bmatrix}n_{1}\\ n_{2}\\ n_{3}\end{bmatrix}\in\mathbb{R}^{3}$ is a vector such that $n_{1}x_{1}+n_{2}x_{2}+n_{3}x_{3}=b_{1}n_{1}+b_{2}n_{2}+b_{3}n_{3} \quad (1)$ 
is an equation for P, then $\vec{n}$ is called a normal vector for P. We call equation (1) a scalar equation of P.

e.g. Find a scalar equation of the plane through $B(0,-1,1)$ with normal vector $\vec{n}=\begin{bmatrix}1\\ 2\\ 3\end{bmatrix}$.
By definition a scalar equation of the plane is
 $n_{1}x_{1}+n_{2}x_{2}+n_{3}x_{3}=b_{1}n_{1}+b_{2}n_{2}+b_{3}n_{3}$ 
$1x_{1}+2x_{2}+3x_{3}=1(0)+2(-1)+3(1)=1$. 

Let $\vec{u}, \vec{v}\in\mathbb{R}^{n}$ with $\vec{v}\ne\vec{0}$. The projection of $\vec{u}$ onto $\vec{v}$ is defined by $proj_{\vec{v}}(\vec{u})=\frac{\vec{u}\cdot\vec{v}}{||\vec{v}||^{2}}\vec{v}$. 

Let $\vec{u},\vec{v}\in\mathbb{R}^{n}$ with $\vec{v}\ne\vec{0}$. The perpendicular of $\vec{u}$ onto $\vec{v}$ is defined by $perp_{\vec{v}}(\vec{u})=\vec{u}-proj_{\vec{v}}(\vec{u})$ 

e.g. Let $\vec{u}=\begin{bmatrix}-1\\ -3\end{bmatrix}$ and $\vec{v}=\begin{bmatrix}1\\ 1\end{bmatrix}$. Find $proj_{\vec{v}}(\vec{u})$  and $perp_{\vec{v}}(\vec{u})$.
Answer:
 $proj_{\vec{v}}(\vec{u})=\frac{\vec{u}\cdot\vec{v}}{||\vec{v}||^{2}}\vec{v}=\frac{-4}{2}\begin{bmatrix}1\\ 1\end{bmatrix}=\begin{bmatrix}-2\\ -2\end{bmatrix}$ 
$perp_{\vec{v}}(\vec{u})=\vec{u}-proj_{\vec{v}}(\vec{u})=\begin{bmatrix}-1\\ -3\end{bmatrix}-\begin{bmatrix}-2\\ -2\end{bmatrix}=\begin{bmatrix}1\\ -1\end{bmatrix}$

Let P be a plane in $\mathbb{R}^{3}$ that passes through the origin and has normal vector $\vec{n}$.
The projection of $\vec{x}\in\mathbb{R}^{3}$ onto P is defined by  $proj_{P}(\vec{x})=perp_{\vec{n}}(\vec{x})$. 
The perpendicular of $\vec{x}$ onto P is defined by $perp_{P}(\vec{x})=proj_{\vec{n}}(\vec{x})$. 

e.g.  Find the projection of $\vec{v}=\begin{bmatrix}1\\ 2\\ 3\end{bmatrix}$ onto the plane P given by $-2x_{1}+x_{2}+4x_{3}=0$.
Answer: Let $\vec{n}=\begin{bmatrix}-2\\ 1\\ 4\end{bmatrix}$ be a normal vector to the plane.
Then $proj_{\vec{n}}(\vec{v})=\frac{\vec{v}\cdot\vec{n}}{||\vec{n}||^2}\vec{n} = \frac{1(-2)+2(1)+3(4)}{(-2)^2+1^2+4^2}\begin{bmatrix}-2\\ 1\\ 4\end{bmatrix} = \frac{-2+2+12}{4+1+16}\begin{bmatrix}-2\\ 1\\ 4\end{bmatrix} = \frac{12}{21}\begin{bmatrix}-2\\ 1\\ 4\end{bmatrix}=\begin{bmatrix}-24/21\\ 12/21\\ 48/21\end{bmatrix}=\begin{bmatrix}-8/7\\ 4/7\\ 16/7\end{bmatrix}$ 
and $proj_{P}(\vec{v})=perp_{\vec{n}}(\vec{v})=\vec{v}-proj_{\vec{n}}(\vec{v})=\begin{bmatrix}1\\ 2\\ 3\end{bmatrix}-\begin{bmatrix}-8/7\\ 4/7\\ 16/7\end{bmatrix}=\begin{bmatrix}7/7+8/7\\ 14/7-4/7\\ 21/7-16/7\end{bmatrix}=\begin{bmatrix}15/7\\ 10/7\\ 5/7\end{bmatrix}$ .