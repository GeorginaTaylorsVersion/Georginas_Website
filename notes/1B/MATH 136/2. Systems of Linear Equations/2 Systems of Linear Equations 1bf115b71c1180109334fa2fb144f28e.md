# 2. Systems of Linear Equations

## 2.1 Basic Terminology

An equation in n variables (unknowns) $x_{1},...,x_{n}$ that can be written in the form
$a_{1}x_{1}+\cdot\cdot\cdot+a_{n}x_{n}=b$ where $a_{1},...,a_{n},b$ are constants is called a linear equation.
The constants $a_{1},...,a_{n},b$ are called the coefficients of the equation and b is called the constant term.

**e.g.** These are linear equations:
$x_{1}+x_{2}+\cdot\cdot\cdot+x_{n}=n$
$7x_{1}-3x_{3}=x_{2}$
$x_{2}+10x_{8}=4$
These are not linear equations:
$x_{1}x_{2}=9$
$x_{1}^{2}+\sqrt{2}x_{2}=0$
$x_{1}+2x_{2}+\cos(x_{3})=-6$

A set of m linear equations in the same variables $x_{1},...,x_{n}$ is called a system of m linear equations in n variables.
A general system of m linear equations in n variables has the form
$$ \begin{matrix} a_{11}x_{1}+a_{12}x_{2}+\cdot\cdot\cdot+a_{1n}x_{n}=b_{1}\\ a_{21}x_{1}+a_{22}x_{2}+\cdot\cdot\cdot+a_{2n}x_{n}=b_{2}\\ \vdots\\ a_{m1}x_{1}+a_{m2}x_{2}+\cdot\cdot\cdot+a_{mn}x_{n}=b_{m} \end{matrix} $$
Observe that the coefficient $a_{ij}$ represents the coefficient of $x_{j}$ in the i-th equation.

A vector $\vec{s}=\begin{bmatrix}s_{1}\\ \vdots\\ s_{n}\end{bmatrix}$ is called a solution of a system of m linear equations in n variables if all m equations are satisfied when we set $x_{i}=s_{i}$ for $1\le i\le n$. The set of all solutions of a system of linear equations is called the solution set of the system.

**Example 2:** The vector $\begin{bmatrix}1\\ -2\\ 1\end{bmatrix}$ is a solution to the system of 2 equations in 3 variables
$x_{1}+x_{2}+x_{3}=0$
$4x_{1}+2x_{2}+x_{3}=1$

If a system of linear equations has at least one solution, then it is said to be consistent.
Otherwise, it is said to be inconsistent.

**e.g.** This system is consistent
$-\pi x_{1}+8x_{2}=0$
$7x_{1}+3x_{2}=0$
but this system is not
$x_{1}+2x_{2}+3x_{3}=0$
$x_{1}+2x_{2}+3x_{3}=1$

**Theorem 2.1.11**
If the system of linear equations
$$ \begin{matrix} a_{11}x_{1}+a_{12}x_{2}+\cdot\cdot\cdot+a_{1n}x_{n}=b_{1}\\ a_{21}x_{1}+a_{22}x_{2}+\cdot\cdot\cdot+a_{2n}x_{n}=b_{2}\\ \vdots\\ a_{m1}x_{1}+a_{m2}x_{2}+\cdot\cdot\cdot+a_{mn}x_{n}=b_{m} \end{matrix} $$
has two distinct solutions
$\vec{s}=\begin{bmatrix}s_{1}\\ \vdots\\ s_{n}\end{bmatrix} \quad \text{and} \quad \vec{t}=\begin{bmatrix}t_{1}\\ \vdots\\ t_{n}\end{bmatrix}$
then for every $c\in\mathbb{R}$, $\vec{s}+c(\vec{s}-\vec{t})$ is a solution, and furthermore these solutions are all distinct.

**Activity 1:** Given a system of 3 equations in two variables, what are the possible number of solutions?

![Screenshot 2025-06-05 at 5.41.34 pm.png](2%20Systems%20of%20Linear%20Equations%201bf115b71c1180109334fa2fb144f28e/Screenshot_2025-06-05_at_5.41.34_pm.png)

## 2.2 Solving Systems of Linear Equations

Two systems of equations which have the same solution set are said to be equivalent.

**Example 4:** The following systems are all equivalent
$$ \begin{matrix} x_{1}+2x_{2}=0\\ 3x_{1}+7x_{2}=0 \end{matrix} $$
$$ \begin{matrix} 3x_{1}+6x_{2}=0\\ 3x_{1}+7x_{2}=0 \end{matrix} $$
$$ \begin{matrix} 3x_{1}+6x_{2}=0\\ x_{2}=0 \end{matrix} $$

The coefficient matrix for the system of linear equations
$$ \begin{matrix} a_{11}x_{1}+a_{12}x_{2}+\cdot\cdot\cdot+a_{1n}x_{n}=b_{1}\\ a_{21}x_{1}+a_{22}x_{2}+\cdot\cdot\cdot+a_{2n}x_{n}=b_{2}\\ \vdots\\ a_{m1}x_{1}+a_{m2}x_{2}+\cdot\cdot\cdot+a_{mn}x_{n}=b_{m} \end{matrix} $$
is the rectangular array
$$ \begin{bmatrix} a_{11}&a_{12}&\cdot\cdot\cdot&a_{1n}\\ a_{21}&a_{22}&\cdot\cdot\cdot&a_{2n}\\ \vdots&\vdots&\vdots&\vdots\\ a_{m1}&a_{m2}&\cdot\cdot\cdot&a_{mn} \end{bmatrix} $$

The augmented matrix for the system of linear equations
$$ \begin{matrix} a_{11}x_{1}+a_{12}x_{2}+\cdot\cdot\cdot+a_{1n}x_{n}=b_{1}\\ a_{21}x_{1}+a_{22}x_{2}+\cdot\cdot\cdot+a_{2n}x_{n}=b_{2}\\ \vdots\\ a_{m1}x_{1}+a_{m2}x_{2}+\cdot\cdot\cdot+a_{mn}x_{n}=b_{m} \end{matrix} $$
is the rectangular array
$$ \left[\begin{array}{@{}cccc|c@{}} a_{11}&a_{12}&\cdot\cdot\cdot&a_{1n}&b_{1}\\ a_{21}&a_{22}&\cdot\cdot\cdot&a_{2n}&b_{2}\\ \vdots&\vdots&\cdot\cdot\cdot&\vdots&\vdots\\ a_{m1}&a_{m2}&\cdot\cdot\cdot&a_{mn}&b_{m} \end{array}\right] $$

**Example 1:** Given the system of equations
$$ x_{1}+2x_{2}+3x_{3}=4 $$
$$ 5x_{1}+6x_{2}+7x_{3}=8 $$
the coefficient matrix is
$$ \begin{bmatrix}1&2&3\\ 5&6&7\end{bmatrix} $$
and the augmented matrix is
$$ \left[\begin{array}{@{}ccc|c@{}} 1&2&3&4\\ 5&6&7&8 \end{array}\right] $$

**Example 2:** Consider the system below and its variations
$$ x_{1}+2x_{2}=4 $$
$$ 2x_{1}-6x_{2}=-2 $$

1. Multiply the second equation by (-1)
$$ x_{1}+2x_{2}=4 $$
$$ -2x_{1}+6x_{2}=2 $$
2. Add twice the equation 1 to the equation 2
$$ x_{1}+2x_{2}=4 $$
$$ 0x_{1}+10x_{2}=10 $$
3. Swap the equations positions
$$ 0x_{1}+10x_{2}=10 $$
$$ x_{1}+2x_{2}=4 $$

The three elementary row operations (EROs) are:

1. multiplying a row by a non-zero scalar,
2. adding a multiple of one row to another,
3. swapping two rows.

Two matrices A and B are said to be row equivalent if there exists a finite sequence of elementary row operations that transform A into B. We write $A\sim B$.

**Theorem 2.2.11**
If the augmented matrices $[A_{1}|\vec{b}*{1}]$ and $[A*{2}|\vec{b}_{2}]$ are row equivalent, then the systems of linear equations associated with each augmented matrix are equivalent.

A matrix R is said to be in reduced row echelon form (RREF) if:

1. All rows containing a non-zero entry are above all rows which only contains zeros.
2. The first non-zero entry in each non-zero row is 1, called a leading one.
3. The leading one in each non-zero row is to the right of the leading one in any row above it.
4. A leading one is the only non-zero entry in its column.

If A is row equivalent to a matrix R in RREF, then we say that R is the reduced row echelon form of A.

**Theorem 2.2.13**
If A is a matrix, then A has a unique reduced row echelon form R.

**Activity 1:** Identify the matrices that are in reduced row echelon form (RREF):

1. X $\begin{bmatrix}1&2&3&4\\ 0&6&7&8\\ 0&0&0&0\end{bmatrix}$ (No, leading 6)
2. X $\begin{bmatrix}1&4&9\\ 0&1&1\end{bmatrix}$ (No,4 above leading 1)
3. √ $\begin{bmatrix}1&4&0\\ 0&0&1\end{bmatrix}$
4. √ $\begin{bmatrix}1&0\\ 0&1\end{bmatrix}$ 
5. X $\begin{bmatrix}1&4&0\\ 0&0&0\\ 0&0&1\end{bmatrix}$ (No, zero row not at bottom)

**Example 1:** In the next slide, we will learn about the Gauss-Jordan Elimination algorithm, a series of steps to transform a matrix into RREF.
To see it in practice, we will consider the system
$$ -x_{2}+x_{3}=5 $$
$$ 2x_{1}+4x_{2}-2x_{3}=6 $$
$$ 3x_{1}+7x_{2}-2x_{3}=0 $$
for which the augmented matrix is
$$ \left[\begin{array}{@{}ccc|c@{}} 0&-1&1&5\\ 2&4&-2&6\\ 3&7&-2&0 \end{array}\right] $$
We will use the following notation:
$cR_{i} \rightarrow \text{row } i \text{ is being scaled by c}$
$R_{i}\leftrightarrow R_{j} \rightarrow \text{rows i and j are swapping}$
$R_{i}+cR_{j} \rightarrow \text{we adding c times row j to row i}$

**Gauss-Jordan Elimination**
To row reduce a non-zero matrix into RREF, we

1. Consider the first non-zero column. Use elementary row operations (if necessary) to get a leading one in the top of the column.
2. Use the elementary row operation add a multiple of one row to another to make all entries beneath the leading one into a 0.
3. Consider the submatrix consisting of the columns to the right of the column you just modified and the rows beneath the row that just got a leading one. Use elementary row operations (if necessary) to get a leading one in the top of the first non-zero column of this submatrix.
4. Use the elementary row operation add a multiple of one row to another to make all other entries in the column (for the whole matrix, not just the submatrix) containing the new leading one into a 0.
5. Repeat steps 3 and 4 until the matrix is in RREF.

**Activity 1:** Apply the Gauss-Jordan Elimination algorithm to the augmented matrix of the following system to achieve RREF.
$$ 2x_{1}+x_{2}-x_{3}=3 $$
$$ -x_{1}+2x_{2}+x_{3}=-5 $$
$$ x_{1}-x_{2}+2x_{3}=-2 $$
$$ \left[\begin{array}{@{}ccc|c@{}} 2&1&-1&3\\ -1&2&1&-5\\ 1&-1&2&-2 \end{array}\right] $$
**Answer:**
$$ \left[\begin{array}{@{}ccc|c@{}} 1&0&0&2\\ 0&1&0&-1\\ 0&0&1&-2 \end{array}\right] $$

**Activity 2:** Apply the Gauss-Jordan Elimination algorithm to the augmented matrix below to achieve RREF.
$$ \left[\begin{array}{@{}ccc|c@{}} 1&-1&2&4\\ 2&1&-3&-2\\ 1&-2&4&-5 \end{array}\right] $$
**Answer:**
$$ \left[\begin{array}{@{}ccc|c@{}} 1&0&-1&0\\ 0&1&-2&0\\ 0&0&0&0 \end{array}\right] $$

Let R be the RREF of a coefficient matrix of a consistent system of linear equations.
If the j-th column of R does not contain a leading one, then we call $x_{j}$ a free variable of the system of linear equations.

**Solving a System of Linear Equations**
To solve a system of linear equations:

1. Write the augmented matrix for the system.
2. Use elementary row operations to row reduce the augmented matrix into RREF.
3. Write the system of linear equations corresponding to the RREF.
4. If the system contains an equation of the form $0=1$, the system is inconsistent.
5. Otherwise, move each free variable (if any) to the right hand side of each equation and assign each free variable a parameter.
6. Determine the solution set by using vector operations to write the system as a linear combination of vectors.

**Types of System Solutions**

1. Point
$$ \left[\begin{array}{@{}ccc|c@{}} 1&0&0&2\\ 0&1&0&3\\ 0&0&1&4 \end{array}\right] \rightarrow \begin{cases} x_{1}=2\\ x_{2}=3\\ x_{3}=4 \end{cases} $$
2. Line
$$ \left[\begin{array}{@{}cccc|c@{}} 1&2&0&0&1\\ 0&0&1&0&-2\\ 0&0&0&0&0\\ 0&0&0&0&0 \end{array}\right] \rightarrow \begin{cases} \text{let } x_2 = s \in \mathbb{R} \\ x_1 + 2s = 1 \Rightarrow x_1 = 1-2s \\ x_3 = -2 \\ x_4 = t \in \mathbb{R} \end{cases} $$
$$ \left[\begin{array}{@{}ccc|c@{}} 1&2&0&1\\ 0&0&1&-2\\ 0&0&0&0 \end{array}\right] \rightarrow \begin{cases} \text{let } x_2=s \in \mathbb{R} \\ x_1+2s=1 \Rightarrow x_1=1-2s \\ x_3=-2 \end{cases} $$
$$ \begin{bmatrix}x_{1}\\ x_{2}\\ x_{3}\end{bmatrix}=\begin{bmatrix}1-2s\\ s\\ -2\end{bmatrix}=\begin{bmatrix}1\\0\\-2\end{bmatrix}+s\begin{bmatrix}-2\\1\\0\end{bmatrix} $$
Vector form: $\vec{x} = \vec{p} + s\vec{d}$ (where $\vec{p}$ is a particular solution, $\vec{d}$ is direction vector for the free variable part).
3. Plane
$$ \left[\begin{array}{@{}cccc|c@{}} 1&1&1&0&4\\ 0&0&0&1&3\\ 0&0&0&0&0 \end{array}\right] \rightarrow \begin{cases} \text{let } x_2=s \in \mathbb{R}, x_3=t \in \mathbb{R} \\ x_1+s+t=4 \Rightarrow x_1=4-s-t \\ x_4=3 \end{cases} $$
$$ \begin{bmatrix}x_{1}\\ x_{2}\\ x_{3}\\ x_4\end{bmatrix}=\begin{bmatrix}4-s-t\\ s\\ t \\ 3\end{bmatrix}=\begin{bmatrix}4\\0\\0\\3\end{bmatrix}+s\begin{bmatrix}-1\\1\\0\\0\end{bmatrix}+t\begin{bmatrix}-1\\0\\1\\0\end{bmatrix} $$
4. Inconsistent
$$ \left[\begin{array}{@{}ccc|c@{}} 1&2&0&0\\ 0&0&0&1\\ 0&0&0&0 \end{array}\right] \rightarrow 0x_1+0x_2+0x_3=1 \Rightarrow 0=1 $$

A linear equation in n variables is called homogeneous if the constant term is zero, that is, a homogeneous linear equation is of the form
$$ a_{1}x_{1}+\cdot\cdot\cdot+a_{n}x_{n}=0. $$
A system of linear equations is said to be a homogeneous system if the constant terms are all zero.
That is, if it has the form
$$ [A|\vec{0}] $$
**Theorem 2.2.27**
The solution set of a homogeneous system of m linear equations in n variables is a subspace of $\mathbb{R}^{n}$.

Given a non-homogeneous linear system of equations with augmented matrix $[A|\vec{b}]$ (so $\vec{b}\ne\vec{0})$, the homogeneous system with augmented matrix $[A|\vec{0}]$ is called the associated homogeneous system.

**Theorem 2.2.30**
Let $S_{b}$ be the solution set of the system $[A|\vec{b}]$ and let $S_{0}$ be the solution set of the associated homogeneous system $[A|\vec{0}]$. Then if $\vec{x}*{p}$ is any particular solution in $S*{b}$,
$$ S_{b}=\{\vec{x}*{p}+\vec{s}|\vec{s}\in S*{0}\}. $$

## 2.3 Rank

The rank of a matrix A is the number of leading ones in the RREF of the matrix and is denoted rank A.

**Theorem 2.3.4**
For any $m\times n$ matrix A we have
$$ \text{rank } A\le \min(m,n). $$

**System Rank Theorem**
Let A be the coefficient matrix of a system of m linear equations in n unknowns $[A|\vec{b}]$.
(1) The system $[A|\vec{b}]$ is inconsistent if and only if rank $A < \text{rank } [A|\vec{b}]$.
(2) If the system $[A|\vec{b}]$ is consistent, then the system contains $(n - \text{rank } A)$ free variables (parameters).
rank = how many leading 1s?
e.g.
$$ A=\begin{bmatrix}1&2&0&0\\ 0&0&1&0\\ 0&0&0&1\end{bmatrix}, \quad \text{rank}(A)=3 $$
$$ B=\begin{bmatrix}1&2&0\\ 0&0&1\\ 0&0&0\end{bmatrix}, \quad \text{rank}(B)=2 $$

## 2.4 Linear Independence, Spanning and Bases

**Theorem 2.4.3**
Let $\{\vec{v}*{1},...,\vec{v}*{k}\}$ be a set of vectors in $\mathbb{R}^{n}$ and let $A=[\vec{v}*{1}\cdot\cdot\cdot\vec{v}*{k}]$.
Then $\{\vec{v}*{1},...,\vec{v}*{k}\}$ is linearly independent if and only if rank $A=k$.

**Example 1:** Determine if $S=\{[\begin{matrix}0\\ 2\\ 1\end{matrix}],[\begin{matrix}-1\\ 0\\ 1\end{matrix}]\}$ spans $\mathbb{R}^{3}$.
Let $\vec{x}=\begin{bmatrix}x_{1}\\ x_{2}\\ x_{3}\end{bmatrix}\in\mathbb{R}^{3}$. Can we find $c_{1}, c_{2}\in R$ such that
$$ c_{1}\begin{bmatrix}0\\ 2\\ 1\end{bmatrix}+c_{2}\begin{bmatrix}-1\\ 0\\ 1\end{bmatrix}=\begin{bmatrix}x_{1}\\ x_{2}\\ x_{3}\end{bmatrix} ? $$
Augmented matrix and its RREF:
$$ \left[\begin{array}{@{}cc|c@{}} 0&-1&x_{1}\\ 2&0&x_{2}\\ 1&1&x_{3} \end{array}\right] \xrightarrow{\text{RREF}} \left[\begin{array}{@{}cc|c@{}} 1&0& (x_2)/2 \\ 0&1& -x_{1} \\ 0&0& x_1 - (x_2)/2 + x_3 \end{array}\right] $$
S does not span $\mathbb{R}^{3}$.

**Example 2:** Determine if $S=\{[\begin{matrix}1\\ 0\\ 1\end{matrix}],[\begin{matrix}1\\ 1\\ 2\end{matrix}],[\begin{matrix}1\\ -1\\ 1\end{matrix}],[\begin{matrix}3\\ 1\\ 1\end{matrix}]\}$ spans $\mathbb{R}^{3}$.
Augmented Matrix:
$$ \left[\begin{array}{@{}cccc|c@{}} 1&1&1&3&x_{1}\\ 0&1&-1&1&x_{2}\\ 1&2&1&1&x_{3} \end{array}\right] $$
RREF:
$$ \left[\begin{array}{@{}cccc|c@{}} 1&0&0&8& 3x_{1}+x_{2}-2x_{3}\\ 0&1&0&-2& -x_{1}+x_{3}\\ 0&0&1&-6& -x_{1}-x_{2}+x_{3} \end{array}\right] $$
Since rank of coefficient matrix is 3 (number of rows in RREF with leading ones), which is equal to dimension of $\mathbb{R}^3$, it spans $\mathbb{R}^3$.

**Theorem 2.4.8**
Let $\{\vec{v}*{1},...,\vec{v}*{k}\}$ be a set of vectors in $\mathbb{R}^{n}$ and let $A=[\vec{v}*{1}\cdot\cdot\cdot\vec{v}*{k}]$.
Then $\{\vec{v}*{1},...,\vec{v}*{k}\}$ spans $\mathbb{R}^{n}$ if and only if rank $A=n$.

**Theorem 2.4.11**
A set of n vectors $\{\vec{v}*{1},...,\vec{v}*{n}\}$ in $\mathbb{R}^{n}$ is linearly independent if and only if it spans $\mathbb{R}^{n}$.

**Activity 1:** Is the set
$$ S=\{[\begin{matrix}1\\ 1\\ 0\\ -1\end{matrix}],[\begin{matrix}-1\\ 1\\ 2\\ 1\end{matrix}],[\begin{matrix}-3\\ 1\\ 4\\ 3\end{matrix}],[\begin{matrix}1\\ 0\\ -1\\ 1\end{matrix}]\} $$
a basis for $\mathbb{R}^{4}$?
To be a basis for $\mathbb{R}^4$, the set must contain 4 linearly independent vectors that span $\mathbb{R}^4$. By Theorem 2.4.11, if these 4 vectors in $\mathbb{R}^4$ are linearly independent, they also span $\mathbb{R}^4$ (and vice-versa). So we check for linear independence (or if rank A = 4).