# 4. Inverses and Determinants

## 4.1 Matrix Inverses

Let A be an $m\times n$ matrix. If B is an $n\times m$ matrix such that $AB=I_{m}$, then B is called a right inverse of A. If C is an $n\times m$ matrix such that $CA=I_{n}$ then C is called a left inverse of A.

e.g. If $A=\begin{bmatrix}1&2&2\\ -1&3&1\end{bmatrix}$ and $B=\begin{bmatrix}3/5&-2/5\\ 1/5&1/5\\ 0&0\end{bmatrix}$ then B is a right inverse of A.
$AB=\begin{bmatrix}1&0\\ 0&1\end{bmatrix}$.
A is a left inverse of B.
Is B a left inverse of A?
$BA=\begin{bmatrix}1&0&4/5\\ 0&1&3/5\\ 0&0&0\end{bmatrix}$.
Since $BA \ne I_3$, B is not a left inverse of A.

**Theorem 4.1.3**

If A is an $m\times n$ matrix, then

1. A has a right inverse if and only if $rank(A)=m$.
2. A has a left inverse if and only if $rank(A)=n$.

An $n\times n$ matrix is called a square matrix.

**Theorem 4.1.5**

If A, B, and Care $n\times n$ matrices such that $AB=I=CA$, then $B=C$.

Let A be an $n\times n$ matrix. If B is a matrix such that $AB=I=BA$, then B is called the inverse of A. We write $B=A^{-1}$ and we say that A is invertible.

**Theorem 4.1.7**

An $n\times n$ matrix A is invertible if and only if $rank(A)=n$.

e.g. $\begin{bmatrix}3&-1\\ -2&1\end{bmatrix}$ and $\begin{bmatrix}1&1\\ 2&3\end{bmatrix}$ are invertible matrices, and one is the inverse of the other.
 $\begin{bmatrix}3&-1\\ -2&1\end{bmatrix}\begin{bmatrix}1&1\\ 2&3\end{bmatrix}=\begin{bmatrix}1&0\\ 0&1\end{bmatrix}$ 
 $\begin{bmatrix}1&1\\ 2&3\end{bmatrix}\begin{bmatrix}3&-1\\ -2&1\end{bmatrix}=\begin{bmatrix}1&0\\ 0&1\end{bmatrix}$ 

**Theorem 4.1.10**

If A and B are $n\times n$ matrices such that $AB=I,$ then A and B are invertible. Moreover, $B=A^{-1}$ and $A=B^{-1}$.

**Theorem 4.1.11**

If A and B are invertible matrices and $c\in\mathbb{R}$ with $c\ne0$, then

1. $(cA)^{-1}=\frac{1}{c}A^{-1}.$
2. $(A^{T})^{-1}=(A^{-1})^{T}$
3. $(AB)^{-1}=B^{-1}A^{-1}$.

**How to find the inverse**

Let $A,B\in M_{n\times n}(\mathbb{R})$. We have that B is the inverse of A if $AB=I$.
Think of this matrix multiplication as the individual matrix-vector multiplications of A and the ith column of B, $\vec{b}_{i}$ with $i=1,...,n$.
Then, our goal is to solve the system $A\vec{b}{i}=\vec{e}{i}$.
The initial thought is that we would need to solve n systems like this.
But remember that the elementary row operations needed to get to RREF are motivated by the coefficient matrix, which is constant here.
Basically, the way to solve any of these systems would be identical, with the only difference being the result for the different $\vec{e}_{j}$. Thus, we simplify this problem by row reducing the multiple augmented system $[A|I]$.
In the end, if A is invertible, we will have
 $[A|I]\sim[I|A^{-1}]$ 

e.g. Find the inverse of $A=\begin{bmatrix}1&2\\ 3&7\\ \end{bmatrix}$.
Solution: We row reduce the multiple augmented system $[A|I]$.
$\left[\begin{array}{cc|cc}
1&2&1&0\\
3&7&0&1
\end{array}\right]
\sim
\left[\begin{array}{cc|cc}
1&2&1&0\\
0&1&-3&1
\end{array}\right]
\sim
\left[\begin{array}{cc|cc}
1&0&7&-2\\
0&1&-3&1
\end{array}\right]$
Thus, $A^{-1}=\begin{bmatrix}7&-2\\ -3&1\end{bmatrix}$.

e.g. Find the inverse of $A=\begin{bmatrix}3&5\\ 2&3\end{bmatrix}$.
$\left[\begin{array}{cc|cc}
3&5&1&0\\
2&3&0&1
\end{array}\right]
\xrightarrow{\text{RREF}}
\left[\begin{array}{cc|cc}
1&0&-3&5\\
0&1&2&-3
\end{array}\right]$
So $A^{-1}=\begin{bmatrix}-3&5\\ 2&-3\end{bmatrix}$.

**Theorem 4.1.14**

Let $A=\begin{bmatrix}a&b\\ c&d\end{bmatrix}\in M_{2\times2}(\mathbb{R}).$ Then A is invertible if and only if $ad - bc \ne 0$. Moreover, if A is invertible,
 $A^{-1}=\frac{1}{ad-bc}\begin{bmatrix}d&-b\\ -c&a\end{bmatrix}$ 

e.g.  $A=\begin{bmatrix}3&5\\ 2&3\end{bmatrix}$
 $A^{-1}=\frac{1}{(3)(3)-(5)(2)}\begin{bmatrix}3&-5\\ -2&3\end{bmatrix} = \frac{1}{9-10}\begin{bmatrix}3&-5\\ -2&3\end{bmatrix}=\begin{bmatrix}-3&5\\ 2&-3\end{bmatrix}$ 

**Invertible Matrix Theorem**

For any $n\times n$ matrix A, the following are equivalent:

1. A is invertible.
2. The RREF of A is I.
3. rank $A=n$.
4. The system of equations $A\vec{x}=\vec{b}$ is consistent with a unique solution for all $\vec{b}\in\mathbb{R}^{n}$.
5. The nullspace of A is $\{\vec{0}\}$.
6. The columns of A form a basis for $\mathbb{R}^{n}$.
7. The rows of A form a basis for $\mathbb{R}^{n}$.
8. $A^{T}$ is invertible.

## 4.2 Elementary Matrices

An $n\times n$ matrix E is called an elementary matrix if it can be obtained from the $n\times n$ identity matrix by performing exactly one elementary row operation.

e.g. Given the $3\times3$ identity matrix I, the following are elementary matrices:
$5R_{2}: \begin{bmatrix}1&0&0\\ 0&5&0\\ 0&0&1\end{bmatrix}$
$R_{1}\leftrightarrow R_{3}: \begin{bmatrix}0&0&1\\ 0&1&0\\ 1&0&0\end{bmatrix}$
$R_{1}-7R_{2}: \begin{bmatrix}1&-7&0\\ 0&1&0\\ 0&0&1\end{bmatrix}$

**Theorem 4.2.5**

If E is an elementary matrix, then E is invertible and $E^{-1}$ is also an elementary matrix.

e.g. Given the $3\times3$ identity matrix I, the following are elementary matrices and their inverses:
For $E_1$ from $5R_{2}$: $\begin{bmatrix}1&0&0\\ 0&5&0\\ 0&0&1\end{bmatrix}$, $E_1^{-1}$ is from $\frac{1}{5}R_{2}$: $\begin{bmatrix}1&0&0\\ 0&\frac{1}{5}&0\\ 0&0&1\end{bmatrix}$.
For $E_2$ from $R_{1}\leftrightarrow R_{3}$: $\begin{bmatrix}0&0&1\\ 0&1&0\\ 1&0&0\end{bmatrix}$, $E_2^{-1}$ is from $R_{1}\leftrightarrow R_{3}$ (or $R_3 \leftrightarrow R_1$): $\begin{bmatrix}0&0&1\\ 0&1&0\\ 1&0&0\end{bmatrix}$.
For $E_3$ from $R_{1}-7R_{2}$: $\begin{bmatrix}1&-7&0\\ 0&1&0\\ 0&0&1\end{bmatrix}$, $E_3^{-1}$ is from $R_{1}+7R_{2}$: $\begin{bmatrix}1&7&0\\ 0&1&0\\ 0&0&1\end{bmatrix}$.

**Theorem 4.2.8**

If A is an $m\times n$ matrix and E is the $m\times m$ elementary matrix corresponding to the row operation $R_{i}+cR_{j},$ for $i\ne j$, then EA is the matrix obtained from A by performing the row operation $R_{i}+cR_{j}$ on A.

**Theorem 4.2.9**

If A is an $m\times n$ matrix and E is the $m\times m$ elementary matrix corresponding to the row operation $cR_{i}$ then EA is the matrix obtained from A by performing the row operation $cR_{i}$ on A.

**Theorem 4.2.10**
If A is an $m\times n$ matrix and E is the $m\times m$ elementary matrix corresponding to the row operation $R_{i}\leftrightarrow R_{j}$, for $i\ne j$, then EA is the matrix obtained from A by performing the row operation $R_{i}\leftrightarrow R_{j}$ on A.

e.g. From our previous example:
$A=\begin{bmatrix}1&2\\ 3&7\end{bmatrix} \xrightarrow{R_{2}-3R_{1}} \begin{bmatrix}1&2\\ 0&1\end{bmatrix} \xrightarrow{R_{1}-2R_{2}} \begin{bmatrix}1&0\\ 0&1\end{bmatrix}$.
For $R_{2}-3R_{1}$ we have $E_{1}=\begin{bmatrix}1&0\\ -3&1\end{bmatrix}$ and for $R_{1}-2R_{2}$ we have $E_{2}=\begin{bmatrix}1&-2\\ 0&1\end{bmatrix}$. So
 $E_{2}E_{1}A=\begin{bmatrix}1&-2\\ 0&1\end{bmatrix}\begin{bmatrix}1&0\\ -3&1\end{bmatrix}\begin{bmatrix}1&2\\ 3&7\end{bmatrix}$ 
 $=\begin{bmatrix}1&-2\\ 0&1\end{bmatrix}\begin{bmatrix}1&2\\ 0&1\end{bmatrix}$ 
 $=\begin{bmatrix}1&0\\ 0&1\end{bmatrix}$ 

**Corollary 4.2.11**

If A is an $m\times n$ matrix and E is an $m\times m$ elementary matrix, then
 $rank(EA)=rank~A$ 

**Theorem 4.2.12**

If A is an $m\times n$ matrix with reduced row echelon form R, then there exists a sequence $E_{1},...,E_{k}$ of $m\times m$ elementary matrices such that $E_{k}\cdot\cdot\cdot E_{2}E_{1}A=R$. In particular,
 $A=E_{1}^{-1}E_{2}^{-1}\cdot\cdot\cdot E_{k}^{-1}R.$ 

As we saw $E_{2}E_{1}A=I$ with $A=\begin{bmatrix}1&2\\ 3&7\\ \end{bmatrix}$, $E_{1}=\begin{bmatrix}1&0\\ -3&1\end{bmatrix}$, and $E_{2}=\begin{bmatrix}1&-2\\ 0&1\end{bmatrix}$.
Now, note that $E_{1}^{-1}=\begin{bmatrix}1&0\\ 3&1\end{bmatrix}$ and $E_{2}^{-1}=\begin{bmatrix}1&2\\ 0&1\end{bmatrix}$, so
 $E_{1}^{-1}E_{2}^{-1}I=E_{1}^{-1}E_{2}^{-1}=\begin{bmatrix}1&0\\ 3&1\end{bmatrix}\begin{bmatrix}1&2\\ 0&1\end{bmatrix}=\begin{bmatrix}1&2\\ 3&7\end{bmatrix}=A.$ 

**Corollary 4.2.17**

If A is an $n\times n$ invertible matrix, then A and $A^{-1}$ can be written as a product of elementary matrices.

## 4.3 Determinants

Let $A=\begin{bmatrix}a&b\\ c&d\\ \end{bmatrix}.$ The determinant of A is
 $\text{det } A=ad-bc.$ 

Note: Determinants can also be denoted by vertical straight lines, similar to the absolute value. For example: $\begin{vmatrix}a&b\\ c&d\end{vmatrix}$.

This is not the first time that we see this quantity. Last class we had a result about the invertibility of a $2\times2$ matrix. It stated that, if $ad-bc\ne0$, then A is invertible and
 $A^{-1}=\frac{1}{ad-bc}\begin{bmatrix}d&-b\\ -c&a\end{bmatrix}$ 

When working with a $3\times3$ matrix
 $A=\begin{bmatrix}a_{11}&a_{12}&a_{13}\\ a_{21}&a_{22}&a_{23}\\ a_{31}&a_{32}&a_{33}\end{bmatrix}$ 
we don't find such a simple invertibility criteria. But, after careful computations, we find that A is invertible if and only if,
 $a_{11}a_{22}a_{33}-a_{11}a_{23}a_{32}-a_{12}a_{21}a_{33}+a_{13}a_{21}a_{32}+a_{12}a_{23}a_{31}-a_{13}a_{22}a_{31}\ne0$ 
which is equivalent to
 $a_{11}\begin{vmatrix}a_{22}&a_{23}\\ a_{32}&a_{33}\end{vmatrix}-a_{21}\begin{vmatrix}a_{12}&a_{13}\\ a_{32}&a_{33}\end{vmatrix}+a_{31}\begin{vmatrix}a_{12}&a_{13}\\ a_{22}&a_{23}\end{vmatrix}\ne0.$ 
(This expansion is by the first column. The standard Sarrus rule or cofactor expansion is more common).

e.g. Is $A=\begin{bmatrix}1&2&3\\ 4&5&4\\ 3&2&1\end{bmatrix}$ invertible?
det $A=1\begin{vmatrix}5&4\\ 2&1\end{vmatrix}-4\begin{vmatrix}2&3\\ 2&1\end{vmatrix}+3\begin{vmatrix}2&3\\ 5&4\end{vmatrix}$
 calculation: det $A=1(5-8)-4(2-6)-3(8-15)$ should be for first column expansion: $1\begin{vmatrix}5&4\\2&1\end{vmatrix} - 4\begin{vmatrix}2&3\\2&1\end{vmatrix} + 3\begin{vmatrix}2&3\\5&4\end{vmatrix} = 1(5-8) - 4(2-6) + 3(8-15) = 1(-3) - 4(-4) + 3(-7) = -3+16-21 = -8$.
$(5-8)-4(2-6)-3(8-15) = -3+16+21 = 34 \ne 0$.
A is invertible.

e.g. Let A be an $n\times n$ matrix with $n\ge2$. Let $A(i,j)$ be the $(n-1)\times(n-1)$ matrix obtained from A by deleting the i-th row and the j-th column.
The cofactor of $a_{ij}$ is $C_{ij}(A)=(-1)^{i+j} \text{det } A(i,j)$.
If there is no risk of confusion, we will write $C_{ij}$ instead of $C_{ij}(A)$.
Given $A=\begin{bmatrix}3&7&1\\ 5&4&2\\ 1&2&3\end{bmatrix}$
$C_{13}=(-1)^{1+3} \text{det } A(1,3)=\begin{vmatrix}5&4\\ 1&2\end{vmatrix}=10-4=6$.
$C_{21}=(-1)^{2+1} \text{det } A(2,1)=-\begin{vmatrix}7&1\\ 2&3\end{vmatrix}=-(21-2)=-19$.

e.g. Find the cofactor $C_{22}$ for $A=\begin{bmatrix}2&1&4\\ 1/3&5&10\\ 0&6&5\end{bmatrix}$. 
Assuming $A=\begin{bmatrix}2&1&4\\ \frac{1}{3}&5&10\\ 0&6&5\end{bmatrix}$.
$C_{22}=(-1)^{2+2} \begin{vmatrix}2&4\\ 0&5\end{vmatrix}=2(5)-4(0)=10$.

With the definition of cofactor we can now improve the form for the determinant of $A=\begin{bmatrix}a_{11}&a_{12}&a_{13}\\ a_{21}&a_{22}&a_{23}\\ a_{31}&a_{32}&a_{33}\end{bmatrix}$ from
$a_{11}\begin{vmatrix}a_{22}&a_{23}\\ a_{32}&a_{33}\end{vmatrix}-a_{21}\begin{vmatrix}a_{12}&a_{13}\\ a_{32}&a_{33}\end{vmatrix}+a_{31}\begin{vmatrix}a_{12}&a_{13}\\ a_{22}&a_{23}\end{vmatrix}$
to det $A=a_{11}C_{11}+a_{21}C_{21}+a_{31}C_{31}$. (This is cofactor expansion along the first column).
Let A be an $n\times n$ matrix with $n\ge2$. The determinant of A is defined to be
 $\text{det } A=\sum_{i=1}^{n}a_{i1}C_{i1}.$ 
where the determinant of a $1\times1$ matrix is defined by $det[c]=c$.

e.g. Compute the determinant for $A=\begin{bmatrix}0&1&0&1\\ 1&0&1&0\\ 0&1&0&2\\ 1&0&2&0\end{bmatrix}$.
Using first column expansion:
det A = $0 \cdot C_{11} + 1 \cdot C_{21} + 0 \cdot C_{31} + 1 \cdot C_{41}$
$C_{21} = (-1)^{2+1} \begin{vmatrix}1&0&1\\1&0&2\\0&2&0\end{vmatrix} = -1 [1(0-4) - 0(...) + 1(2-0)] = -1[-4+2] = -1[-2]=2$.
$C_{41} = (-1)^{4+1} \begin{vmatrix}1&0&1\\0&1&0\\1&0&2\end{vmatrix} = -1 [1(2-0) - 0(...) + 1(0-1)] = -1[2-1] = -1[1]=-1$.
det A = $1(2) + 1(-1) = 2-1=1$.

**Theorem 4.3.11**

Let A be an $n\times n$ matrix. For any i with $1\le i\le n$
 $\text{det } A=\sum_{k=1}^{n}a_{ik}C_{ik}$ 
called the cofactor expansion across the i-th row, OR for any j with $1\le j\le n$
 $\text{det } A=\sum_{k=1}^{n}a_{kj}C_{kj}$ 
called the cofactor expansion across the j-th column.

An $m\times n$ matrix U is said to be upper triangular if $u_{ij}=0$ whenever $i>j$.
An $m\times n$ matrix L is said to be lower triangular if $l_{ij}=0$ whenever $i<j$. 

$\begin{bmatrix}1&2\\ 0&3\end{bmatrix}$ is upper triangular.
$\begin{bmatrix}1&0&0\\ 2&3&0\\ 4&5&6\end{bmatrix}$ is lower triangular.
$O_{m\times n}$ and $I_{n}$ are both lower and upper triangular.

**Theorem 4.3.16** If an $n\times n$ matrix A is upper triangular or lower triangular, then  $\text{det } A=a_{11}a_{22}\cdot\cdot\cdot a_{nn}.$ 

**Theorem 4.3.18**

If A is an $n\times n$ matrix and B is the matrix obtained from A by multiplying one row of A by $c\in\mathbb{R}$, then det $B=c \text{ det } A$.

**Theorem 4.3.19**

If A is an $n\times n$ matrix and B is the matrix obtained from A by swapping two rows of A, then det $B= -\text{det } A$. 

**Corollary 4.3.20**

If an $n\times n$ matrix A has two identical rows, then det $A=0$.

**Theorem 4.3.21**

If A is an $n\times n$ matrix and B is the matrix obtained from A by adding a multiple of one row of A to another row, then det $B= \text{det } A$.

e.g. Let $A\in M_{4\times4}$ with det $A=6$. Now consider that B is the resulting matrix after the following row operations are applied to A:
$R_{1}\leftrightarrow R_{2}$ (det becomes -6)
$R_{3}-4R_{1}$ (det remains -6)
$\frac{1}{2}R_{2}$ (det becomes $\frac{1}{2}(-6) = -3$) (Note: this $\frac{1}{2}R_2$ applies to the new $R_2$ after the swap)
$R_{3}+R_{2}$ (det remains -3)
$R_{3}\leftrightarrow R_{4}$ (det becomes $-(-3) = 3$)
What is det B?
Answer: 3. 

e.g. Compute the determinant of $A=\begin{bmatrix}1&2&-1&3\\ 0&7&5&4\\ 2&-3&-7&2\\ 0&9&3&6\end{bmatrix}$.
$R_3 \rightarrow R_3 - 2R_1$: $\begin{vmatrix}1&2&-1&3\\ 0&7&5&4\\ 0&-7&-5&-4\\ 0&9&3&6\end{vmatrix}$.
Since Row 2 = -1 * Row 3, the rows are linearly dependent (or Row 2 + Row 3 = Row of zeros if expanded that way after an operation).
$R_2 = -R_3 \rightarrow \text{two identical rows}$. This implies det A = 0.

**Corollary 4.3.24**

If A is an $n\times n$ matrix and E is an $n\times n$ elementary matrix, then
 $\text{det } EA=\text{det } E \text{ det } A$ 

**Theorem 4.3.25**

An $n\times n$ matrix A is invertible if and only if det $A\ne0$.

**Theorem 4.3.26**

If A and B are $n\times n$ matrices, then det(AB) = det A det B.

**Corollary 4.3.27**

If A is an invertible matrix, then det $A^{-1}=\frac{1}{\text{det }A}.$

**Theorem 4.3.28**

If A is an $n\times n$ matrix, then det $A=\text{det }A^{T}$.

## 4.4 Determinants and Systems of Equations

**Theorem 4.4.2**

If A is an invertible $n\times n$ matrix, then $(A^{-1}){ij}=\frac{1}{\text{det }A}C{ji}.$
Given $A=\begin{bmatrix}a&b\\ c&d\\ \end{bmatrix}$, det $A=ad-bc$.
Cofactors: $C_{11}=d, C_{12}=-c, C_{21}=-b, C_{22}=a$.
So, $A^{-1}=\begin{bmatrix}\frac{1}{\text{det }A}C_{11}&\frac{1}{\text{det }A}C_{21}\\ \frac{1}{\text{det }A}C_{12}&\frac{1}{\text{det }A}C_{22}\end{bmatrix}=\frac{1}{ad-bc}\begin{bmatrix}d&-b\\ -c&a\end{bmatrix}$.

Let A be an $n\times n$ matrix. The cofactor matrix, cof A, of A is the matrix whose ij-th entry is the ij-th cofactor of A. That is, $(\text{cof }A){ij}=C{ij}$.
Let A be an $n\times n$ matrix. The adjugate of A is the matrix defined by $(\text{adj }A){ij}=C{ji}$. 
In particular, adj $A=(\text{cof }A)^{T}$.
Note: These two definitions help us better understand Theorem 4.4.2 as $A^{-1}=\frac{1}{\text{det }A}\text{adj }A$.

e.g. Determine the inverse of $A=\begin{bmatrix}1&-2&3\\ 0&1&-1\\ 2&0&1\end{bmatrix}$ using the adjugate.
$A^{-1}=\frac{1}{\text{det }A}\text{adj }A$.
Cofactor calculations, with $C_{ij}$ values:
$C_{11}=(1)(1)=1$
$C_{12}=(-1)(0-(-2))=-2$ 
$C_{13}=(1)(0-2)=-2$
$C_{21}=(-1)(-2-0)=2$
$C_{22}=(1)(1-6)=-5$
$C_{23}=(-1)(0-(-4))=-4$ 
$C_{31}=(1)(2-3)=-1$
$C_{32}=(-1)(-1-0)=1$
$C_{33}=(1)(1-0)=1$
cof(A) = $\begin{bmatrix}1&-2&-2\\ 2&-5&-4\\ -1&1&1\end{bmatrix}$.
adj A = $(cof A)^T = \begin{bmatrix}1&2&-1\\ -2&-5&1\\ -2&-4&1\end{bmatrix}$.
det A (expanding along first column): $1 C_{11} + 0 C_{21} + 2 C_{31} = 1(1) + 2(-1) = 1-2 = -1$.
$A^{-1}=\frac{1}{-1}\begin{bmatrix}1&2&-1\\ -2&-5&1\\ -2&-4&1\end{bmatrix} = \begin{bmatrix}-1&-2&1\\ 2&5&-1\\ 2&4&-1\end{bmatrix}$.

Given the system $A\vec{x}=\vec{b}$ where A is an invertible $n\times n$ matrix, then
 $\vec{x}=A^{-1}\vec{b}=\frac{1}{\text{det }A}(\text{adj }A)\vec{b}=\frac{1}{\text{det }A}\begin{bmatrix}C_{11}&...&C_{n1}\\ \vdots&&\vdots\\ C_{1n}&...&C_{nn}\end{bmatrix}\begin{bmatrix}b_{1}\\ \vdots\\ b_{n}\end{bmatrix}$ 
Moreover, we can find that the i-th component of $\vec{x}$ is
 $x_{i}=\frac{b_{1}C_{1i}+\cdot\cdot\cdot+b_{n}C_{ni}}{\text{det }A}$ 
Observe that the quantity $b_{1}C_{1i}+\cdot\cdot\cdot+b_{n}C_{ni}$ is the determinant of the matrix where we have replaced the i-th column of A by $\vec{b}$.
If we let $A_{i}$ denote the matrix where the i-th column of A is replaced by $\vec{b}$
 $A_i = \begin{bmatrix} a_{11} & \dots & a_{1(i-1)} & b_1 & a_{1(i+1)} & \dots & a_{1n} \\ \vdots & & \vdots & \vdots & \vdots & & \vdots \\ a_{n1} & \dots & a_{n(i-1)} & b_n & a_{n(i+1)} & \dots & a_{nn} \end{bmatrix}$ 
then we get $x_{i}=\frac{\text{det }A_{i}}{\text{det }A}$.

**Cramer's Rule**

If A is an $n\times n$ invertible matrix, then the solution of $A\vec{x}=\vec{b}$ is given by
 $x_{i}=\frac{\text{det }A_{i}}{\text{det }A}, \quad 1\le i\le n$ 
where $A_{i}$ is the matrix obtained from A by replacing the i-th column of A by $\vec{b}$.

e.g. Determine the value of $x_{2}$ for the system below
 $x_{1}-2x_{2}+3x_{3}=0$ 
 $x_{2}-x_{3}=3$ 
 $2x_{1}+x_{3}=1$ 
$A=\begin{bmatrix}1&-2&3\\ 0&1&-1\\ 2&0&1\end{bmatrix}$. Using $x_2-x_3=3 \Rightarrow A=\begin{bmatrix}1&-2&3\\ 0&1&-1\\ 2&0&1\end{bmatrix}$.
det A (from previous similar matrix, which was $A=\begin{bmatrix}1&-2&3\\ 0&1&-1\\ 2&0&1\end{bmatrix}$): det A = -1.
$A_{2}=\begin{bmatrix}1&0&3\\ 0&3&-1\\ 2&1&1\end{bmatrix}$.
det($A_{2}$): Expand by first column: $1 \begin{vmatrix}3&-1\\1&1\end{vmatrix} - 0 \begin{vmatrix}0&3\\1&1\end{vmatrix} + 2 \begin{vmatrix}0&3\\3&-1\end{vmatrix}$
$= 1(3 - (-1)) + 2(0 - 9) = 1(4) + 2(-9) = 4 - 18 = -14$.
(calculation: det($A_{2}$)=$(1)(-1)^{2}(3+1)+2(-1)^{4}(-9) = 4-18=-14$. This is $1 C_{11}(A_2) + 2 C_{31}(A_2)$ an expansion along 1st column for $A_2$ where $b_2$ is in col 2, not $b_1$. det $A_2$ for $x_2$ is $\begin{vmatrix}1&0&3 \\ 0&3&-1 \\ 2&1&1 \end{vmatrix}$.
$x_{2}=\frac{\text{det }A_{2}}{\text{det }A}=\frac{-14}{-1}=14$.

If $\vec{u}$ and $\vec{v}$ are two non-zero vectors in $\mathbb{R}^{2}$, the parallelogram formed by these vectors has area given by
 $\text{Area}(\vec{u},\vec{v})=|\text{det}[\begin{matrix}\vec{u}&\vec{v}\end{matrix}]|.$ 
If $\vec{u}, \vec{v}$ and $\vec{w}$ are three non-zero vectors in $\mathbb{R}^{3}$, the parallelepiped formed by these vectors has volume given by
 $\text{Volume}(\vec{u},\vec{v},\vec{w})=|\text{det}[\begin{matrix}\vec{u}&\vec{v}&\vec{w}\end{matrix}]|.$