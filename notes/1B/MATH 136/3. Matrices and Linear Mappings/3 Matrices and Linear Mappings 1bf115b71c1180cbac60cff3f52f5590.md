# 3. Matrices and Linear Mappings

## 3.1 Operations on Matrices

An $m\times n$ matrix A is a rectangular array with m rows and n columns.
We denote the entry in the i-th row and j-th column by $a_{ij}$.
That is,
$$ A=\begin{bmatrix}a_{11}&a_{12}&\cdot\cdot\cdot&a_{1n}\\ a_{21}&a_{22}&\cdot\cdot\cdot&a_{2n}\\ \vdots&\vdots&\vdots&\vdots\\ a_{m1}&a_{m2}&\cdot\cdot\cdot&a_{mn}\end{bmatrix} $$
Two $m\times n$ matrices A and B are equal if $a_{ij}=b_{ij}$ for all $1\le i\le m,1\le j\le n$. The set of all $m\times n$ matrices with real entries is denoted by $M_{m\times n}(\mathbb{R})$.

Let A, $B\in M_{m\times n}(\mathbb{R})$ and $c\in\mathbb{R}$. We define $A+B$ and cA by
$$ (A+B)*{ij}=(A)*{ij}+(B)*{ij} $$
$$ (cA)*{ij}=c(A)_{ij}. $$
Consider $A=\begin{bmatrix}1&2\\ 3&4\end{bmatrix}$ and $B=\begin{bmatrix}1&1\\ 1&1\end{bmatrix}$.
Then
$$ A+B=\begin{bmatrix}1&2\\ 3&4\end{bmatrix}+\begin{bmatrix}1&1\\ 1&1\end{bmatrix}=\begin{bmatrix}1+1&2+1\\ 3+1&4+1\end{bmatrix}=\begin{bmatrix}2&3\\ 4&5\end{bmatrix} $$
and
$$ 2A=2\begin{bmatrix}1&2\\ 3&4\end{bmatrix}=\begin{bmatrix}2\cdot1&2\cdot2\\ 2\cdot3&2\cdot4\end{bmatrix}=\begin{bmatrix}2&4\\ 6&8\end{bmatrix} $$

**Theorem 3.1.4**
If A, B, $C\in M_{m\times n}(\mathbb{R})$ and c, $d\in\mathbb{R}$, then
V1 $A+B\in M_{m\times n}(\mathbb{R})$.
V2 $(A+B)+C=A+(B+C)$.
V3 $A+B=B+A$.
V4 There exists a matrix $O_{m,n}\in M_{m\times n}(\mathbb{R})$, such that $A+O_{m,n}=A$ for all A.
V5 For every $A\in M_{m\times n}(\mathbb{R})$ there exists $(-A)\in M_{m\times n}(\mathbb{R})$ such that $A+(-A)=O_{m,n}$.
V6 $cA\in M_{m\times n}(\mathbb{R})$.
V7 $c(dA)=(cd)A$.
V8 $(c+d)A=cA+dA$.
V9 $c(A+B)=cA+cB$.
V10 $1A=A.$

The transpose of an $m\times n$ matrix A is the $n\times m$ matrix $A^{T}$ whose ij-th entry is the ji-th entry of A. That is, $(A^{T})*{ij}=(A)*{ji}$.
Given $A=\begin{bmatrix}1\\ 2\end{bmatrix}$ and $B=\begin{bmatrix}1&2&3\\ 4&5&6\end{bmatrix}$, we have $A^{T}=\begin{bmatrix}1&2\end{bmatrix}$ and $B^{T}=\begin{bmatrix}1&4\\ 2&5\\ 3&6\end{bmatrix}$.
If A, $B\in M_{m\times n}(\mathbb{R})$ and $c\in\mathbb{R}$, then
(1) $(A^{T})^{T}=A$
(2) $(A+B)^{T}=A^{T}+B^{T}$.
(3) $(cA)^{T}=cA^{T}$.

Let A be an $m\times n$ matrix whose rows are denoted by $\vec{a}*{i}^{T}$ for $1\le i\le m$. ( $\vec{a}j^T$, but uses $i$ in the range, $i$ is conventional for rows).
For $\vec{x}\in\mathbb{R}^{n}$, we define the matrix-vector multiplication $A\vec{x}$ by
$$ A\vec{x}=\begin{bmatrix}\vec{a}{1}\cdot\vec{x}\\ \vdots\\ \vec{a}*{m}\cdot\vec{x}\end{bmatrix} $$
Let $A=\begin{bmatrix}1&2\\ 3&4\end{bmatrix}$ and $\vec{x}=\begin{bmatrix}2\\ -1\end{bmatrix}$, then $A\vec{x}$ is equal to
$$ \begin{bmatrix}1&2\\ 3&4\end{bmatrix}\begin{bmatrix}2\\ -1\end{bmatrix}=\begin{bmatrix}\begin{pmatrix}1\\ 2\end{pmatrix}\cdot\begin{pmatrix}2\\ -1\end{pmatrix}\\ \begin{pmatrix}3\\ 4\end{pmatrix}\cdot\begin{pmatrix}2\\ -1\end{pmatrix}\end{bmatrix}=\begin{bmatrix}1\cdot2+2\cdot(-1)\\ 3\cdot2+4\cdot(-1)\end{bmatrix}=\begin{bmatrix}0\\ 2\end{bmatrix} $$

Let $A=[\vec{a}*{1}\cdot\cdot\cdot\vec{a}*{n}]$ be an $m\times n$ matrix (where $\vec{a}*j$ are columns). For any $\vec{x}=\begin{bmatrix}x*{1}\\ \vdots\\ x_{n}\end{bmatrix}\in\mathbb{R}^{n},$ 
we can also define the matrix-vector multiplication $A\vec{x}$ by
$$ A\vec{x}=x_{1}\vec{a}*{1}+\cdot\cdot\cdot+x*{n}\vec{a}_{n}. $$
Again, for $A=\begin{bmatrix}1&2\\ 3&4\end{bmatrix}$ (interpreted as columns $[\begin{smallmatrix}1\\3\end{smallmatrix}]$ and $[\begin{smallmatrix}2\\4\end{smallmatrix}]$) and $\vec{x}=\begin{bmatrix}2\\ -1\end{bmatrix}$, we have now
$$ A\vec{x}=2\begin{bmatrix}1\\ 3\end{bmatrix}+(-1)\begin{bmatrix}2\\ 4\end{bmatrix}=\begin{bmatrix}2\\ 6\end{bmatrix}+\begin{bmatrix}-2\\ -4\end{bmatrix}=\begin{bmatrix}0\\ 2\end{bmatrix} $$

**Theorem 3.1.19 (Column Extraction Theorem)**
If $\vec{e}*{j}$ is the j-th standard basis vector and $A=[\vec{a}{1}\cdot\cdot\cdot\vec{a}*{n}]$, then
$$ A\vec{e}*{j}=\vec{a}*{j}. $$

**Theorem 3.1.22**
If $A\in M_{m\times n}(\mathbb{R})$, $\vec{x}, \vec{y}\in\mathbb{R}^{n}$ and $c\in\mathbb{R}$, then
(1) $A(\vec{x}+\vec{y})=A\vec{x}+A\vec{y}.$
(2) $A(c\vec{x})=c(A\vec{x})$.

For an $m\times n$ matrix A and an $n\times p$ matrix $B=[\vec{b}*{1}\cdot\cdot\cdot\vec{b}*{p}]$ we define the matrix multiplication AB to be the $m\times p$ matrix
$$ AB=A[\vec{b}*{1}\cdot\cdot\cdot\vec{b}*{p}]=[A\vec{b}*{1}\cdot\cdot\cdot A\vec{b}*{p}] $$
We have that
$$ AB=\begin{bmatrix}1&0&1\\ -1&2&2\end{bmatrix}\begin{bmatrix}0&1\\ 3&2\\ 1&-1\end{bmatrix} $$
$$ =[\begin{matrix}1(0)+0(3)+1(1)&1(1)+0(2)+1(-1)\\ -1(0)+2(3)+2(1)&-1(1)+2(2)+2(-1)\end{matrix}] $$
$$ =\begin{bmatrix}1&0\\ 8&1\end{bmatrix} $$

Compute the product AB where
$$ A=\begin{bmatrix}1&1&2\\ 0&0&1\\ 2&-1&0\\ -2&0&1\end{bmatrix} \quad \text{and} \quad B=\begin{bmatrix}-1&1\\ 1&0\\ 0&-3\end{bmatrix} $$
$$ AB=\begin{bmatrix} 1(-1)+1(1)+2(0) & 1(1)+1(0)+2(-3) \\ 0(-1)+0(1)+1(0) & 0(1)+0(0)+1(-3) \\ 2(-1)+(-1)(1)+0(0) & 2(1)+(-1)(0)+0(-3) \\ -2(-1)+0(1)+1(0) & -2(1)+0(0)+1(-3) \end{bmatrix} $$
$$ =\begin{bmatrix}0&-5\\ 0&-3\\ -3&2\\ 2&-5\end{bmatrix} $$

**Theorem 3.1.29**
If A, B, and C are matrices of the correct size so that the required products are defined, and $t\in\mathbb{R}$, then
(1) $A(B+C)=AB+AC.$
(2) $(A+B)C=AC+BC.$
(3) $t(AB)=(tA)B=A(tB).$
(4) $A(BC)=(AB)C$.
(5) $(AB)^{T}=B^{T}A^{T}$.

**3.1.31 (Matrix Equality Theorem)**
If A and B are $m\times n$ matrices such that $A\vec{x}=B\vec{x}$ for every $\vec{x}\in\mathbb{R}^{n}$, then $A=B$.

The $n\times n$ identity matrix, denoted by I or $I_{n}$, is the matrix such that $(I)*{ii}=1$ for $1\le i\le n$ and $(I)*{ij}=0$ whenever $i\ne j$.
That is,
$$ I=[\vec{e}*{1}\cdot\cdot\cdot\vec{e}*{n}]=\begin{bmatrix}1&0&\cdot\cdot\cdot&0\\ 0&1&\cdot\cdot\cdot&0\\ \vdots&\vdots&\cdot\cdot\cdot&\vdots\\ 0&0&\cdot\cdot\cdot&1\end{bmatrix} $$
**Theorem 3.1.32**
If $I=[\begin{matrix}\vec{e}*{1}&\cdot\cdot\cdot&\vec{e}*{n}\end{matrix}]$ , then for any $n\times n$ matrix A we have $AI=A=IA$.

## 3.2 Linear Mappings

Recall that for sets A and B, a function $f:A\rightarrow B$ is a rule that associates with each element $a\in A$ one element $f(a)\in B$ called the image of a under f.
The set A is called the domain of f and the set B is called the codomain of f.
If A is an $m\times n$ matrix, then we can define a function $f:\mathbb{R}^{n}\rightarrow\mathbb{R}^{m}$ by $f(\vec{x})=A\vec{x}$ called a matrix mapping.

A function $L:\mathbb{R}^{n}\rightarrow\mathbb{R}^{m}$ is said to be a linear mapping if for every $\vec{x}, \vec{y}\in\mathbb{R}^{n}$ and b, $c\in\mathbb{R}$ we have
$$ L(b\vec{x}+c\vec{y})=bL(\vec{x})+cL(\vec{y}). $$
Two linear mappings $L:\mathbb{R}^{n}\rightarrow\mathbb{R}^{m}$ and $M:\mathbb{R}^{n}\rightarrow\mathbb{R}^{m}$ are said to be equal if $L(\vec{x})=M(\vec{x})$ for all $\vec{x}\in\mathbb{R}^{n}$.
We write $L=M$.
A linear mapping $L:\mathbb{R}^{n}\rightarrow\mathbb{R}^{n}$ is sometimes called a linear operator. This is often done when we wish to stress the fact that the domain and codomain of the linear mapping are the same.

The function $L_{1}:\mathbb{R}^{3}\rightarrow\mathbb{R}^{2}$ defined by
$$ L_{1}(x_{1},x_{2},x_{3})=(x_{1}+2x_{2},x_{1}-x_{3}) $$
is an example of a linear mapping.
The function $L_{2}:\mathbb{R}^{3}\rightarrow\mathbb{R}^{4}$ defined by
$$ L_{2}(x_{1},x_{2},x_{3})=(x_{2},2x_{1},0,x_{3}+1) $$
is NOT an example of a linear mapping.
Determine if $L:\mathbb{R}^{2}\rightarrow\mathbb{R}^{3}$ defined by $L(x_{1},x_{2})=(x_{1}+x_{2},x_{2}-x_{1},1)$ is a linear mapping.
This is not a linear mapping because $L(\vec{0}) = L(0,0) = (0,0,1) \ne \vec{0}$.

If $L:\mathbb{R}^{n}\rightarrow\mathbb{R}^{m}$ is a linear mapping, then $L(\vec{0})=\vec{0}.$
If A is an $m\times n$ matrix and $f:\mathbb{R}^{n}\rightarrow\mathbb{R}^{m}$ is defined by $f(\vec{x})=A\vec{x},$ then for all $\vec{x}, \vec{y}\in\mathbb{R}^{n}$ and b, $c\in\mathbb{R}$ we have
$$ f(b\vec{x}+c\vec{y})=bf(\vec{x})+cf(\vec{y}). $$
That is, every matrix mapping is a linear mapping.

Every linear mapping $L:\mathbb{R}^{n}\rightarrow\mathbb{R}^{m}$ can be represented as a matrix mapping with matrix whose i-th column is the image of the i-th standard basis vector of $\mathbb{R}^{n}$ under L for all $1\le i\le n$.
That is, $L(\vec{x})=[L]\vec{x}$ where
$$ [L]=[\begin{matrix}L(\vec{e}*{1})&\cdot\cdot\cdot&L(\vec{e}*{n})\end{matrix}]. $$
Let $L:\mathbb{R}^{n}\rightarrow\mathbb{R}^{m}$ be a linear mapping. The matrix $[L]=[L(\vec{e}*{1}) \cdot\cdot\cdot L(\vec{e}*{n})]$ is called the standard matrix of L. It satisfies $L(\vec{x})=[L]\vec{x}$.

Going back to our previous example, $L_{1}:\mathbb{R}^{3}\rightarrow\mathbb{R}^{2}$ defined by
$$ L_{1}(x_{1},x_{2},x_{3})=(x_{1}+2x_{2},x_{1}-x_{3}) $$
we have the standard matrix $[L_1]=[\begin{matrix}L_1(\vec{e}*{1})&L_1(\vec{e}*{2})&L_1(\vec{e}_{3})\end{matrix}]$.
That is,
$$ L_1(1,0,0)=(1+2\cdot0,1-0)=(1,1) $$
$$ L_1(0,1,0)=(0+2\cdot1,0-0)=(2,0) $$
$$ L_1(0,0,1)=(0+2\cdot0,0-1)=(0,-1) $$
and
$$ [L_1]=\begin{bmatrix}1&2&0\\ 1&0&-1\end{bmatrix} $$

Determine the standard matrix of the linear mapping.
$$ L(x_{1},x_{2},x_{3})=(x_{2}+2x_{3},2x_{1}-x_{3},-x_{1}+3x_{2}) $$
$$ L(1,0,0)=(0+2\cdot0,2(1)-0,-1+3\cdot0)=(0,2,-1) $$
$$ L(0,1,0)=(1+2\cdot0,2(0)-0,0+3\cdot1)=(1,0,3) $$
$$ L(0,0,1)=(0+2\cdot1,2(0)-1,-0+3\cdot0)=(2,-1,0) $$
$$ [L]=\begin{bmatrix}0&1&2\\ 2&0&-1\\ -1&3&0\end{bmatrix} $$

**Rotations in $\mathbb{R}^{2}$**

![Screenshot 2025-06-05 at 5.54.22 pm.png](3%20Matrices%20and%20Linear%20Mappings%201bf115b71c1180cbac60cff3f52f5590/Screenshot_2025-06-05_at_5.54.22_pm.png)

Let $R_{\theta}:\mathbb{R}^{2}\rightarrow\mathbb{R}^{2}$ denote the function that rotates a vector $\vec{x}\in\mathbb{R}^{2}$ about the origin through an angle $\theta$.
Using basic trigonometric identities, we can show that $R_{\theta}$ is linear, and that the standard matrix of $R_{\theta}$ is
$$ [R_{\theta}]=\begin{bmatrix}\cos\theta&-\sin\theta\\ \sin\theta&\cos\theta\end{bmatrix} $$
If $R_{\theta}:\mathbb{R}^{2}\rightarrow\mathbb{R}^{2}$ is a rotation with rotation matrix $A=[R_{\theta}]$, then the columns of A are orthogonal unit vectors.

Determine the standard matrix of $R_{\pi/3}$.
$$ [R_{\pi/3}]=\begin{bmatrix}\cos(\pi/3)&-\sin(\pi/3)\\ \sin(\pi/3)&\cos(\pi/3)\end{bmatrix}=\begin{bmatrix}1/2&-\sqrt{3}/2\\ \sqrt{3}/2&1/2\end{bmatrix} $$
Is the following matrix associated to a rotation?
$$ A=\begin{bmatrix}0&1\\ -1&0\end{bmatrix} $$
Yes, when $\theta=\frac{3}{2}\pi$.
$\cos(3\pi/2)=0$, $\sin(3\pi/2)=-1$. So $[R_{3\pi/2}] = \begin{bmatrix}0&-(-1)\\ -1&0\end{bmatrix} = \begin{bmatrix}0&1\\ -1&0\end{bmatrix}$.

**Reflections**

![Screenshot 2025-06-05 at 5.54.49 pm.png](3%20Matrices%20and%20Linear%20Mappings%201bf115b71c1180cbac60cff3f52f5590/Screenshot_2025-06-05_at_5.54.49_pm.png)

Let $refl_{P}:\mathbb{R}^{n}\rightarrow\mathbb{R}^{n}$ denote the mapping that sends a vector $\vec{x}$ to its mirror image in the hyperplane P with normal vector $\vec{n}$. The figure shows a reflection over a line in $\mathbb{R}^{2}$ with normal vector $\vec{n}$.
From the figure, we see that the reflection of $\vec{x}$ over the line with normal vector $\vec{n}$ is given by
$$ refl_{P}(\vec{x})=\vec{x}-2 proj_{\vec{n}}(\vec{x}). $$
We extend this formula directly to the n-dimensional case.

## 3.3 Special Subspaces

Let $L:\mathbb{R}^{n}\rightarrow\mathbb{R}^{m}$ be a linear mapping. The range of L is defined by
$$ Range(L)=\{L(\vec{x})\in\mathbb{R}^{m}|\vec{x}\in\mathbb{R}^{n}\}. $$
Given $L:\mathbb{R}^{2}\rightarrow\mathbb{R}^{3}$ defined by $L(x_{1},x_{2})=(x_{1}+x_{2},x_{2},x_{1}-x_{2}),$ determine which of the following vectors belong to Range(L):

1. $\vec{y}_{1}=\begin{bmatrix}0\\ 0\\ 0\end{bmatrix}$ Yes. $(0+0,0,0-0)=(0,0,0)$.
2. $\vec{y}_{2}=\begin{bmatrix}1\\ 2\\ 3\end{bmatrix}$ No. (System $x_1+x_2=1, x_2=2, x_1-x_2=3$. From first two, $x_1=-1, x_2=2$. Then $x_1-x_2 = -1-2 = -3 \ne 3$.)

If $L:\mathbb{R}^{n}\rightarrow\mathbb{R}^{m}$ is a linear mapping, then $Range(L)$ is a subspace of $\mathbb{R}^{m}$.

A linear mapping $L:\mathbb{R}^{n}\rightarrow\mathbb{R}^{m}$ is called onto (or surjective) if $Range(L)=\mathbb{R}^{m}.$
Determine if the linear mapping $L:\mathbb{R}^{3}\rightarrow\mathbb{R}^{2}$ defined by $L(x_{1},x_{2},x_{3})=(x_{1}-x_{2},x_{1}-2x_{3})$ is onto.
The standard matrix is $[L]=\begin{bmatrix}1&-1&0\\ 1&0&-2\end{bmatrix}$. To check if it's onto, we see if for any $\begin{bmatrix}y_1\\y_2\end{bmatrix} \in \mathbb{R}^2$, the system $L(\vec{x})=\vec{y}$ is consistent.
Augmented matrix: $\left[\begin{array}{@{}ccc|c@{}} 1&-1&0&y_{1}\\ 1&0&-2&y_{2} \end{array}\right]$.
$R_2-R_1 \rightarrow R_2$: $\left[\begin{array}{@{}ccc|c@{}} 1&-1&0&y_{1}\\ 0&1&-2&y_{2}-y_{1} \end{array}\right]$.
This system is always consistent (rank of coefficient matrix is 2, rank of augmented matrix is 2, which is dimension of codomain $\mathbb{R}^2$).
Consistent with all $y_1$ and $y_2$, onto.

Let $L:\mathbb{R}^{n}\rightarrow\mathbb{R}^{m}$ be a linear mapping. The kernel (nullspace) of L is the set of all vectors in the domain which are mapped to the zero vector in the codomain. That is,
$$ Ker(L)=\{\vec{x}\in\mathbb{R}^{n}|L(\vec{x})=\vec{0}\}. $$
Find a basis for the kernel of $L(x_{1},x_{2},x_{3})=(x_{1}-x_{2},x_{1}-2x_{3}).$
We need to solve $x_1-x_2=0$ and $x_1-2x_3=0$. So $x_1=x_2$ and $x_1=2x_3$.
Let $x_3=t$. Then $x_1=2t$ and $x_2=2t$.
So $\vec{x} = \begin{bmatrix}2t\\ 2t\\ t\end{bmatrix} = t\begin{bmatrix}2\\ 2\\ 1\end{bmatrix}$.
A basis for Ker(L) is $\{ \begin{bmatrix}2\\ 2\\ 1\end{bmatrix} \}$.
 RREF: $[L]=\begin{bmatrix}1&-1&0\\ 1&0&-2\end{bmatrix} \xrightarrow{RREF} \begin{bmatrix}1&0&-2\\ 0&1&-2\end{bmatrix}$.
So $x_1-2x_3=0 \Rightarrow x_1=2x_3$. And $x_2-2x_3=0 \Rightarrow x_2=2x_3$.
If $x_3=t$, then $x_1=2t, x_2=2t$. This is consistent.

Find bases for the range and kernel of $L:\mathbb{R}^{3}\rightarrow\mathbb{R}^{3}$ defined by $L(\vec{x})=proj_{\vec{e}_{1}}(\vec{x})$.
$L(\vec{x}) = \frac{\vec{x}\cdot\vec{e}_1}{||\vec{e}_1||^2}\vec{e}_1 = (x_1)\vec{e}_1 = \begin{bmatrix}x_1\\0\\0\end{bmatrix}$.
$Range(L) = \{ \begin{bmatrix}x_1\\0\\0\end{bmatrix} | x_1 \in \mathbb{R} \} = Span\{ \begin{bmatrix}1\\0\\0\end{bmatrix} \}$. Basis for Range(L) is $\{ \begin{bmatrix}1\\0\\0\end{bmatrix} \}$.
$Ker(L) = \{ \vec{x} \in \mathbb{R}^3 | L(\vec{x})=\vec{0} \} = \{ \vec{x} \in \mathbb{R}^3 | \begin{bmatrix}x_1\\0\\0\end{bmatrix}=\begin{bmatrix}0\\0\\0\end{bmatrix} \}$.
This means $x_1=0$. $x_2, x_3$ can be any real numbers.
So $\vec{x} = \begin{bmatrix}0\\x_2\\x_3\end{bmatrix} = x_2\begin{bmatrix}0\\1\\0\end{bmatrix} + x_3\begin{bmatrix}0\\0\\1\end{bmatrix}$.
Basis for Ker(L) is $\{ \begin{bmatrix}0\\1\\0\end{bmatrix}, \begin{bmatrix}0\\0\\1\end{bmatrix} \}$.

If $L:\mathbb{R}^{n}\rightarrow\mathbb{R}^{m}$ is a linear mapping, then $Ker(L)$ is a subspace of $\mathbb{R}^{n}$.

A linear mapping $L:\mathbb{R}^{n}\rightarrow\mathbb{R}^{m}$ is called one-to-one (or injective) if $Ker(L)=\{\vec{0}\}$.
Let $L:\mathbb{R}^{n}\rightarrow\mathbb{R}^{m}$ be a linear mapping. L is one-to-one if and only if for every $\vec{u}, \vec{v}\in\mathbb{R}^{n}$ such that $L(\vec{u})=L(\vec{v})$ we must have $\vec{u}=\vec{v}$.

Determine if $L(x_{1},x_{2})=(x_{1}+x_{2},x_{1}-x_{2},x_{2},x_{1})$ is one-to-one and/or onto.
The standard matrix is $[L]=\begin{bmatrix}1&1\\ 1&-1\\ 0&1\\ 1&0\end{bmatrix}$.
RREF of $[L]$:
$\begin{bmatrix}1&1\\ 1&-1\\ 0&1\\ 1&0\end{bmatrix} \xrightarrow{R_2-R_1, R_4-R_1} \begin{bmatrix}1&1\\ 0&-2\\ 0&1\\ 0&-1\end{bmatrix} \xrightarrow{R_2/(-2)} \begin{bmatrix}1&1\\ 0&1\\ 0&1\\ 0&-1\end{bmatrix} \xrightarrow{R_1-R_2, R_3-R_2, R_4+R_2} \begin{bmatrix}1&0\\ 0&1\\ 0&0\\ 0&0\end{bmatrix}$.
Rank is 2. Codomain is $\mathbb{R}^4$. Since rank (2) < dim(codomain) (4), L is not onto.
For one-to-one, check $Ker(L)$. System $A\vec{x}=\vec{0}$: $\begin{bmatrix}1&0\\0&1\\0&0\\0&0\end{bmatrix}\begin{bmatrix}x_1\\x_2\end{bmatrix}=\begin{bmatrix}0\\0\end{bmatrix} \Rightarrow x_1=0, x_2=0$.
So $Ker(L)=\{\vec{0}\}$. Thus, L is one-to-one.

Let $A\in M_{m\times n}(\mathbb{R})$. The set $\{\vec{x}\in\mathbb{R}^{n}|A\vec{x}=\vec{0}\}$ is a subspace of $\mathbb{R}^{n}$.
Let A be an $m\times n$ matrix. The nullspace (kernel) of A is defined by
$$ Null(A)=\{\vec{x}\in\mathbb{R}^{n}|A\vec{x}=\vec{0}\}. $$
Is $\vec{x}=\begin{bmatrix}1\\ -2\end{bmatrix}$ in the nullspace of $A=\begin{bmatrix}6&3\\ 2&-1\end{bmatrix}$?
$$ A\vec{x}=\begin{bmatrix}6&3\\ 2&-1\end{bmatrix}\begin{bmatrix}1\\ -2\end{bmatrix}=\begin{bmatrix}6(1)+3(-2)\\ 2(1)+(-1)(-2)\end{bmatrix}=\begin{bmatrix}6-6\\ 2+2\end{bmatrix}=\begin{bmatrix}0\\ 4\end{bmatrix} \ne \vec{0}. $$
So $\vec{x}$ is not in the nullspace of A.

Let A be an $m\times n$ matrix. Suppose that the vector equation of the solution set of $A\vec{x}=\vec{0}$ as determined by the Gauss-Jordan algorithm is given by
$$ \vec{x}=t_{1}\vec{v}*{1}+t*{2}\vec{v}*{2}+\cdot\cdot\cdot+t*{k}\vec{v}*{k}, \quad t*{1},...,t_{k}\in\mathbb{R} $$
Then $\{\vec{v}*{1},...,\vec{v}*{k}\}$ is a basis for Null(A).
Find a basis for the nullspace of $A=\begin{bmatrix}2&4&4&4\\ 1&2&3&4\end{bmatrix}$.
RREF of A : $\begin{bmatrix}1&2&0&-2\\ 0&0&1&2\end{bmatrix}$.
System:
$$ x_1+2x_2-2x_4=0 $$
$$ x_3+2x_4=0 $$
Let $x_2=t \in \mathbb{R}$ and $x_4=s \in \mathbb{R}$ (free variables).
Then $x_1 = -2t+2s$ and $x_3 = -2s$.
$$ \vec{x}=\begin{bmatrix}-2t+2s\\ t\\ -2s\\ s\end{bmatrix}=t\begin{bmatrix}-2\\ 1\\ 0\\ 0\end{bmatrix}+s\begin{bmatrix}2\\ 0\\ -2\\ 1\end{bmatrix} $$
Basis for Null(A) is $\{ \begin{bmatrix}-2\\ 1\\ 0\\ 0\end{bmatrix}, \begin{bmatrix}2\\ 0\\ -2\\ 1\end{bmatrix} \}$.

Let A be an $m\times n$ matrix. The nullity of A is defined by
$$ \text{nullity } A=\text{dim } Null(A). $$
Back to the previous example, where $A=\begin{bmatrix}2&4&4&4\\ 1&2&3&4\end{bmatrix}$, determine nullity A.
Basis for $Null(A)$ is $\{ \begin{bmatrix}-2\\ 1\\ 0\\ 0\end{bmatrix}, \begin{bmatrix}2\\ 0\\ -2\\ 1\end{bmatrix} \}$.
nullity(A) = dim Null(A) = 2.

**Theorem 3.3.27**
If $L:\mathbb{R}^{n}\rightarrow\mathbb{R}^{m}$ is a linear mapping with standard matrix $[L]=A=[\begin{matrix}\vec{a}*{1}&\cdot\cdot\cdot&\vec{a}*{n}\end{matrix}]$ then
$$ Range(L)=Span\{\vec{a}*{1},...,\vec{a}*{n}\}. $$
Let $A=[\begin{matrix}\vec{a}*{1}&\cdot\cdot\cdot&\vec{a}*{n}\end{matrix}]\in M_{m\times n}(\mathbb{R})$ . ($M_{m \times n}$)
The column space of A, denoted by $Col(A)$, is the subspace of $\mathbb{R}^{m}$ spanned by the columns of A. That is,
$$ Col(A)=Span\{\vec{a}*{1},...,\vec{a}*{n}\}. $$

If $A=\begin{bmatrix}1&2&1&0\\ 1&1&-1&1\end{bmatrix}$ then $Col(A)=Span\{[\begin{matrix}1\\ 1\end{matrix}],[\begin{matrix}2\\ 1\end{matrix}],[\begin{matrix}1\\ -1\end{matrix}],[\begin{matrix}0\\ 1\end{matrix}]\}$.

**Theorem 3.3.30**
If $L:\mathbb{R}^{n}\rightarrow\mathbb{R}^{m}$ is a linear mapping with standard matrix $[L]=A=[\begin{matrix}\vec{a}*{1}&\cdot\cdot\cdot&\vec{a}*{n}\end{matrix}]$ , then
$$ Range(L)=Col([L]). $$

**Theorem 3.3.32**
Let A be an $m\times n$ matrix and let $\vec{b}\in\mathbb{R}^{m}$. Then $\vec{b}\in Col(A)$ if and only if the system $[A|\vec{b}]$ is consistent.
Let $A=\begin{bmatrix}1&2\\ 2&5\end{bmatrix}$ and $\vec{b}=\begin{bmatrix}-7\\ 4\end{bmatrix}.$ Show that $\vec{b}\in Col(A).$
$$
\left[\begin{array}{@{}cc|c@{}} 1&2&-7\\ 2&5&4 \end{array}\right] \xrightarrow{RREF} \left[\begin{array}{@{}cc|c@{}} 1&0&-43\\ 0&1&18 \end{array}\right]
$$
Since $[A|\vec{b}]$ is consistent (unique solution $x_1=-43, x_2=18$), $\vec{b}\in Col(A)$.

**Theorem 3.3.34**
Let $A=[\begin{matrix}\vec{a}*{1}&\cdot\cdot\cdot&\vec{a}*{n}\end{matrix}]$ be an $m\times n$ matrix. Suppose that rank $A=r$ and that the RREF of A has leading ones in columns $j_{1},...,j_{r}.$ Then $\{\vec{a}*{j*{1}},\cdot\cdot\cdot,\vec{a}*{j*{r}}\}$ is a basis for $Col(A)$.
In particular,
$$ \text{dim } Col(A)=\text{rank } A. $$
Let $A=\begin{bmatrix}1&2&-1\\ 1&1&2\\ 1&0&5\end{bmatrix}$. RREF of A $\begin{bmatrix}1&0&5\\ 0&1&-3\\ 0&0&0\end{bmatrix}$.
Rank(A) = 2. Leading ones are in columns 1 and 2.
Find a basis for $Col(A)$. Basis for $Col(A)$ is $\{ \begin{bmatrix}1\\ 1\\ 1\end{bmatrix}, \begin{bmatrix}2\\ 1\\ 0\end{bmatrix} \}$. (Using original columns corresponding to pivot columns in RREF).

**Rank-Nullity Theorem**
If A is an $m\times n$ matrix, then
$$ \text{rank } A + \text{nullity } A = n. $$

## 3.4 Operations on Linear Mappings

Let $L:\mathbb{R}^{n}\rightarrow\mathbb{R}^{m}$ and $M:\mathbb{R}^{m}\rightarrow\mathbb{R}^{p}$ be linear mappings. The composition of M and L is the function $M\circ L:\mathbb{R}^{n}\rightarrow\mathbb{R}^{p}$ defined by
$$ (M\circ L)(\vec{x})=M(L(\vec{x})). $$
**Theorem 3.4.9**
If $L:\mathbb{R}^{n}\rightarrow\mathbb{R}^{m}$ and $M:\mathbb{R}^{m}\rightarrow\mathbb{R}^{p}$ are linear mappings, then $M\circ L:\mathbb{R}^{n}\rightarrow\mathbb{R}^{p}$ is a linear mapping and
$$ [M\circ L]=[M][L]. $$
Let $L:\mathbb{R}^{2}\rightarrow\mathbb{R}^{3}$ and $M:\mathbb{R}^{3}\rightarrow\mathbb{R}^{2}$ be the linear mappings defined by $L(x_{1},x_{2})=(x_{1},x_{2},x_{1}+x_{2})$ and $M(x_{1},x_{2},x_{3})=(x_{1}+x_{2},x_{2}+x_{3}).$ Determine $[M\circ L]$.
Standard matrix for L: $[L]=\begin{bmatrix}1&0\\0&1\\1&1\end{bmatrix}$.
Standard matrix for M: $[M]=\begin{bmatrix}1&1&0\\0&1&1\end{bmatrix}$.
$$ [M\circ L]=[M][L]=\begin{bmatrix}1&1&0\\ 0&1&1\end{bmatrix}\begin{bmatrix}1&0\\ 0&1\\ 1&1\end{bmatrix} $$
$$ =\begin{bmatrix}1(1)+1(0)+0(1)&1(0)+1(1)+0(1)\\ 0(1)+1(0)+1(1)&0(0)+1(1)+1(1)\end{bmatrix} = \begin{bmatrix}1&1\\ 1&2\end{bmatrix}. $$
Alternatively,
$$ (M\circ L)(\vec{x})=M(L(x_{1},x_{2})) = M(x_{1},x_{2},x_{1}+x_{2}) $$
$$ = (x_{1}+x_{2}, x_{2}+(x_{1}+x_{2})) = (x_{1}+x_{2}, x_{1}+2x_{2}). $$
The standard matrix for $(M\circ L)(x_1,x_2)=(x_1+x_2, x_1+2x_2)$ is $\begin{bmatrix}1&1\\1&2\end{bmatrix}$.