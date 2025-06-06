# 6. Eigenvectors and Diagonalization

## 6.1 Matrix of a Linear Mapping, Similar Matrices

A linear mapping $L:\mathbb{R}^{n}\rightarrow\mathbb{R}^{n}$ is sometimes called a linear operator. This is often done when we wish to stress the fact that the domain and codomain of the linear mapping are the same.
Let $\mathcal{B}=\{\vec{v}*{1},...,\vec{v}*{n}\}$ be a basis for $\mathbb{R}^{n}$ and let $L:\mathbb{R}^{n}\rightarrow\mathbb{R}^{n}$ be a linear operator. The $\mathcal{B}$-matrix of L is defined to be
$$ [L]*{\mathcal{B}}=[[L(\vec{v}*{1})]*{\mathcal{B}} \cdot\cdot\cdot [L(\vec{v}*{n})]*{\mathcal{B}}] $$
It satisfies $[L(\vec{x})]*{\mathcal{B}}=[L]*{\mathcal{B}}[\vec{x}]*{\mathcal{B}}$.

Let L be a linear mapping with standard matrix $[L]=\begin{bmatrix}3&-1\\ -1&3\end{bmatrix}$ and $\mathcal{B}=\{[\begin{matrix}1\\ 1\end{matrix}],[\begin{matrix}1\\ -1\end{matrix}]\}$. Find the $\mathcal{B}$-matrix of L and use it to determine $[L(\vec{x})]*{\mathcal{B}}$ where $[\vec{x}]*{\mathcal{B}}=\begin{bmatrix}1\\ 1\end{bmatrix}$.
$$ [L]*{\mathcal{B}}=[[L(\begin{bmatrix}1\\ 1\end{bmatrix})]*{\mathcal{B}} [L(\begin{bmatrix}1\\ -1\end{bmatrix})]*{\mathcal{B}}] $$
$L(\begin{bmatrix}1\\ 1\end{bmatrix}) = \begin{bmatrix}3&-1\\ -1&3\end{bmatrix}\begin{bmatrix}1\\ 1\end{bmatrix} = \begin{bmatrix}2\\ 2\end{bmatrix}$.
To find $[\begin{smallmatrix}2\\2\end{smallmatrix}]*{\mathcal{B}}$, we solve $c_1\begin{bmatrix}1\\1\end{bmatrix} + c_2\begin{bmatrix}1\\-1\end{bmatrix} = \begin{bmatrix}2\\2\end{bmatrix}$.
$c_1+c_2=2$
$c_1-c_2=2$
Adding equations: $2c_1=4 \Rightarrow c_1=2$. Then $2+c_2=2 \Rightarrow c_2=0$. So $[L(\begin{smallmatrix}1\\1\end{smallmatrix})]*{\mathcal{B}} = \begin{bmatrix}2\\0\end{bmatrix}$.*

$L(\begin{bmatrix}1\\ -1\end{bmatrix}) = \begin{bmatrix}3&-1\\ -1&3\end{bmatrix}\begin{bmatrix}1\\ -1\end{bmatrix} = \begin{bmatrix}4\\ -4\end{bmatrix}$.
To find $[\begin{smallmatrix}4\\-4\end{smallmatrix}]*{\mathcal{B}}$, we solve $d_1\begin{bmatrix}1\\1\end{bmatrix} + d_2\begin{bmatrix}1\\-1\end{bmatrix} = \begin{bmatrix}4\\-4\end{bmatrix}$.
$d_1+d_2=4$
$d_1-d_2=-4$
Adding equations: $2d_1=0 \Rightarrow d_1=0$. Then $0+d_2=4 \Rightarrow d_2=4$. So $[L(\begin{smallmatrix}1\\-1\end{smallmatrix})]*{\mathcal{B}} = \begin{bmatrix}0\\4\end{bmatrix}$.

So, $[L]*{\mathcal{B}}=\begin{bmatrix}2&0\\ 0&4\end{bmatrix}$.
Then $[L(\vec{x})]*{\mathcal{B}}=[L]*{\mathcal{B}}[\vec{x}]*{\mathcal{B}}=\begin{bmatrix}2&0\\ 0&4\end{bmatrix}\begin{bmatrix}1\\ 1\end{bmatrix}=\begin{bmatrix}2\\ 4\end{bmatrix}$.

Let $L:\mathbb{R}^{2}\rightarrow\mathbb{R}^{2}$ be the linear mapping defined by $L(x_{1},x_{2})=(2x_{1}+3x_{2},4x_{1}-x_{2})$ and $\mathcal{B}=\{[\begin{matrix}1\\ 2\end{matrix}],[\begin{matrix}1\\ -1\end{matrix}]\}$. Find the $\mathcal{B}$-matrix of L and use it to determine $[L(\vec{x})]*{\mathcal{B}}$ where $[\vec{x}]*{\mathcal{B}}=\begin{bmatrix}1\\ 1\end{bmatrix}.$
The standard matrix is $[L]=\begin{bmatrix}2&3\\ 4&-1\end{bmatrix}$.
$L(\begin{bmatrix}1\\ 2\end{bmatrix}) = \begin{bmatrix}2&3\\ 4&-1\end{bmatrix}\begin{bmatrix}1\\ 2\end{bmatrix} = \begin{bmatrix}2+6\\ 4-2\end{bmatrix} = \begin{bmatrix}8\\ 2\end{bmatrix}$.
To find $[\begin{smallmatrix}8\\2\end{smallmatrix}]*{\mathcal{B}}$: $c_1\begin{bmatrix}1\\2\end{bmatrix} + c_2\begin{bmatrix}1\\-1\end{bmatrix} = \begin{bmatrix}8\\2\end{bmatrix}$.
$c_1+c_2=8$
$2c_1-c_2=2$
Adding: $3c_1=10 \Rightarrow c_1=10/3$. Then $10/3+c_2=8 \Rightarrow c_2 = 24/3-10/3 = 14/3$. So $[L(\begin{smallmatrix}1\\2\end{smallmatrix})]*{\mathcal{B}} = \begin{bmatrix}10/3\\ 14/3\end{bmatrix}$. 

$L(\begin{bmatrix}1\\ -1\end{bmatrix}) = \begin{bmatrix}2&3\\ 4&-1\end{bmatrix}\begin{bmatrix}1\\ -1\end{bmatrix} = \begin{bmatrix}2-3\\ 4+1\end{bmatrix} = \begin{bmatrix}-1\\ 5\end{bmatrix}$.
To find $[\begin{smallmatrix}-1\\5\end{smallmatrix}]*{\mathcal{B}}$: $d_1\begin{bmatrix}1\\2\end{bmatrix} + d_2\begin{bmatrix}1\\-1\end{bmatrix} = \begin{bmatrix}-1\\5\end{bmatrix}$.
$d_1+d_2=-1$
$2d_1-d_2=5$
Adding: $3d_1=4 \Rightarrow d_1=4/3$. Then $4/3+d_2=-1 \Rightarrow d_2 = -3/3-4/3 = -7/3$. So $[L(\begin{smallmatrix}1\\-1\end{smallmatrix})]*{\mathcal{B}} = \begin{bmatrix}4/3\\ -7/3\end{bmatrix}$. 
Then $[L]*{\mathcal{B}} = \begin{bmatrix}10/3 & 4/3 \\ 14/3 & -7/3\end{bmatrix}$. (Using my corrected $c_2$)
$[L(\vec{x})]*{\mathcal{B}} = \begin{bmatrix}10/3 & 4/3 \\ 14/3 & -7/3\end{bmatrix} \begin{bmatrix}1\\1\end{bmatrix} = \begin{bmatrix}10/3+4/3 \\ 14/3-7/3\end{bmatrix} = \begin{bmatrix}14/3 \\ 7/3\end{bmatrix}$.

An $n\times n$ matrix D is said to be a diagonal matrix if $d_{ij}=0$ for all $i\ne j$. We denote a diagonal matrix by $diag(d_{11},d_{22},...,d_{nn})$.
The matrix $\begin{bmatrix}2&0\\ 0&4\end{bmatrix}$ is a diagonal matrix.

**Theorem 6.1.7**
If A and B are $n\times n$ matrices such that $P^{-1}AP=B$ for some invertible matrix P, then
(1) rank $A=$ rank B.
(2) det $A=$ det B.
(3) tr $A=\text{tr }B$ where tr A is defined by $\text{tr }A=\sum_{i=1}^{n}a_{ii}$ and is called the trace of a matrix.

If A and B be $n\times n$ matrices such that $P^{-1}AP=B$ for some invertible matrix P, then A is said to be similar to B.
If A is similar to B, prove that $A^{n}$ is similar to $B^{n}$.
*Proof Idea:* $B = P^{-1}AP$. Then $B^n = (P^{-1}AP)(P^{-1}AP)\cdot\cdot\cdot(P^{-1}AP) = P^{-1}A(PP^{-1})A(PP^{-1})\cdot\cdot\cdot A P = P^{-1}A^n P$. So $A^n$ is similar to $B^n$.

## 6.2 Eigenvalues and Eigenvectors

Let A be an $n\times n$ matrix. If there exists a vector $\vec{v}\ne\vec{0}$ such that $A\vec{v}=\lambda\vec{v}$, then the scalar $\lambda$ is called an eigenvalue of A and $\vec{v}$ called an eigenvector of A corresponding to $\lambda$. The pair $(\lambda,\vec{v})$ is called an eigenpair.

Let $L:\mathbb{R}^{n}\rightarrow\mathbb{R}^{n}$ be a linear operator. If there exists a vector $\vec{v}\ne\vec{0}$ such that $L(\vec{v})=\lambda\vec{v}$ then $\lambda$ is called an eigenvalue of L and $\vec{v}$ is called an eigenvector of L corresponding to $\lambda$.
Why do you think we have the $\vec{v}\ne\vec{0}$ condition? (If $\vec{v}=\vec{0}$, then $A\vec{0}=\lambda\vec{0}$ becomes $\vec{0}=\vec{0}$ for any $\lambda$, which is trivial and doesn't define unique eigenvalues.)

Consider again the linear mapping $L:\mathbb{R}^{2}\rightarrow\mathbb{R}^{2}$ with standard matrix $[L]=\begin{bmatrix}3&-1\\ -1&3\end{bmatrix}$. As we saw:
$$ L(1,1)=[L]\begin{bmatrix}1\\ 1\end{bmatrix}=\begin{bmatrix}3&-1\\ -1&3\end{bmatrix}\begin{bmatrix}1\\ 1\end{bmatrix}=\begin{bmatrix}2\\ 2\end{bmatrix}=2\begin{bmatrix}1\\ 1\end{bmatrix} $$
$$ L(1,-1)=[L]\begin{bmatrix}1\\ -1\end{bmatrix}=\begin{bmatrix}3&-1\\ -1&3\end{bmatrix}\begin{bmatrix}1\\ -1\end{bmatrix}=\begin{bmatrix}4\\ -4\end{bmatrix}=4\begin{bmatrix}1\\ -1\end{bmatrix} $$
Thus, $(2,\begin{bmatrix}1\\ 1\end{bmatrix})$ and $(4,\begin{bmatrix}1\\ -1\end{bmatrix})$ are eigenpairs of [L].
Also, 2 is an eigenvalue of L with eigenvector $\begin{bmatrix}1\\ 1\end{bmatrix}$, while 4 is another eigenvalue with corresponding eigenvector $\begin{bmatrix}1\\ -1\end{bmatrix}$.

Determine which of the following vectors are eigenvectors of $A=\begin{bmatrix}2&1&1\\ -3&-2&-3\\ -1&-1&0\end{bmatrix}$.
(a) $\vec{v}*{1}=\begin{bmatrix}1\\ 1\\ 1\end{bmatrix}$. $A\vec{v}*{1}=\begin{bmatrix}2+1+1\\ -3-2-3\\ -1-1+0\end{bmatrix}=\begin{bmatrix}4\\ -8\\ -2\end{bmatrix}$. This is not $\lambda\vec{v}*1$. No
(b) $\vec{v}*{2}=\begin{bmatrix}-1\\ 3\\ 1\end{bmatrix}$. $A\vec{v}_{2}=\begin{bmatrix}2(-1)+1(3)+1(1)\\ -3(-1)+(-2)(3)+(-3)(1)\\ -1(-1)+(-1)(3)+0(1)\end{bmatrix}=\begin{bmatrix}-2+3+1\\ 3-6-3\\ 1-3+0\end{bmatrix}=\begin{bmatrix}2\\ -6\\ -2\end{bmatrix}$.
This is $(-2)\begin{bmatrix}-1\\3\\1\end{bmatrix} = (-2)\vec{v}*2$. So $\vec{v}2$ is an eigenvector with eigenvalue $\lambda=-2$. Yes
(c) $\vec{v}{3}=\begin{bmatrix}1\\ 0\\ -1\end{bmatrix}$. $A\vec{v}*{3}=\begin{bmatrix}2(1)+1(0)+1(-1)\\ -3(1)+(-2)(0)+(-3)(-1)\\ -1(1)+(-1)(0)+0(-1)\end{bmatrix}=\begin{bmatrix}2-1\\ -3+3\\ -1\end{bmatrix}=\begin{bmatrix}1\\ 0\\ -1\end{bmatrix}$.
This is $(1)\begin{bmatrix}1\\0\\-1\end{bmatrix} = (1)\vec{v}_3$. So $\vec{v}_3$ is an eigenvector with eigenvalue $\lambda=1$. Yes

If $(\lambda,\vec{v})$ is an eigenpair of A, then is $(2\lambda,2\vec{v})$ another eigenpair of A? No.
$A(2\vec{v}) = 2(A\vec{v}) = 2(\lambda\vec{v}) = (2\lambda)\vec{v}$. For $(2\lambda, 2\vec{v})$ to be an eigenpair, we would need $A(2\vec{v}) = (2\lambda)(2\vec{v}) = 4\lambda\vec{v}$. This means $2\lambda\vec{v} = 4\lambda\vec{v}$, which implies $2\lambda\vec{v}=\vec{0}$. Since $\vec{v}\ne\vec{0}$, then $2\lambda=0 \Rightarrow \lambda=0$. So only if $\lambda=0$.  No, only true when $\lambda=0$ or $\vec{v}=0$. Since $\vec{v} \ne \vec{0}$, only when $\lambda=0$.

Can you imagine a scenario where $(\lambda,\vec{v}*{1})$ and $(\lambda,\vec{v}*{2})$ are eigenpairs of A, with $\vec{v}*{1}\ne\vec{v}*{2}$? Yes. For example, $A=\begin{bmatrix}3&0\\ 0&3\end{bmatrix}$, $\lambda=3$. $\vec{v}*{1}=\begin{bmatrix}1\\ 0\end{bmatrix}$ and $\vec{v}*{2}=\begin{bmatrix}0\\ 1\end{bmatrix}$.

From the definition, an eigenpair of A, $(\lambda,\vec{v})$, requires $\vec{v}\ne\vec{0}$ with $A\vec{v}=\lambda\vec{v}$.
$A\vec{v}-\lambda\vec{v}=\vec{0}$
$A\vec{v}-\lambda I\vec{v}=\vec{0}$
$(A-\lambda I)\vec{v}=\vec{0}$
where $\vec{v}$ is a solution to the homogeneous system $[A-\lambda I|\vec{0}]$.
Since we need $\vec{v}\ne\vec{0}$ the eigenvalue $\lambda$ exists if and only if this system has infinitely many solutions (i.e., non-trivial solutions).
In turn, this means $A-\lambda I$ is not invertible, or, $det(A-\lambda I)=0.$
Once such a $\lambda$ has been found, we can determine its associated eigenvectors by solving the homogeneous system $(A-\lambda I)\vec{v}=\vec{0}$.

Find all the eigenvalues of $A=\begin{bmatrix}0&1\\ 1&0\end{bmatrix}$. Determine all eigenvectors associated with each eigenvalue.
$det(A-\lambda I)=\begin{vmatrix}-\lambda&1\\ 1&-\lambda\end{vmatrix}=(-\lambda)(-\lambda)-(1)(1)=\lambda^{2}-1$.
Set $\lambda^{2}-1=0 \Rightarrow (\lambda-1)(\lambda+1)=0$.
So, $\lambda_{1}=1, \lambda_{2}=-1$.

For $\lambda_{1}=1: (A-I)\vec{v}=\vec{0}$
$A-I=\begin{bmatrix}-1&1\\ 1&-1\end{bmatrix}$. RREF is $\begin{bmatrix}1&-1\\ 0&0\end{bmatrix}$.
So $x_1-x_2=0 \Rightarrow x_1=x_2$. Let $x_2=s$. Then $\vec{v}=s\begin{bmatrix}1\\ 1\end{bmatrix}$. Eigenvectors are $s\begin{bmatrix}1\\1\end{bmatrix}$ for $s \ne 0$.

For $\lambda_{2}=-1: (A-(-1)I)\vec{v}=(A+I)\vec{v}=\vec{0}$
$A+I=\begin{bmatrix}1&1\\ 1&1\end{bmatrix}$. RREF is $\begin{bmatrix}1&1\\ 0&0\end{bmatrix}$.
So $x_1+x_2=0 \Rightarrow x_1=-x_2$. Let $x_2=s$. Then $\vec{v}=s\begin{bmatrix}-1\\ 1\end{bmatrix}$. Eigenvectors are $s\begin{bmatrix}-1\\1\end{bmatrix}$ for $s \ne 0$. 

Let A be an $n\times n$ matrix. The characteristic polynomial of A is the n-th degree polynomial $C_{A}(\lambda)=det(A-\lambda I)$.
If there is no risk of confusion, we will sometimes write $C(\lambda)$ instead of $C_{A}(\lambda)$.

**Theorem 6.2.8**
A scalar $\lambda$ is an eigenvalue of an $n\times n$ matrix A if and only if $C_{A}(\lambda)=0$.

Let A be an $n\times n$ matrix with eigenvalue $\lambda$. We call the nullspace of $A-\lambda I$ the eigenspace of A corresponding to $\lambda$. The eigenspace is denoted $E_{\lambda}$.

Find all eigenvalues and a basis for each eigenspace for $A=\begin{bmatrix}1&2&1\\ 0&1&2\\ 0&0&-2\end{bmatrix}$.
$C_{A}(\lambda)=det(A-\lambda I)=\begin{vmatrix}1-\lambda&2&1\\ 0&1-\lambda&2\\ 0&0&-2-\lambda\end{vmatrix}$.
Since A is upper triangular, the determinant is the product of the diagonal entries:
$C_{A}(\lambda)=(1-\lambda)(1-\lambda)(-2-\lambda)=(1-\lambda)^{2}(-2-\lambda)$.
Set $C_{A}(\lambda)=0 \Rightarrow (1-\lambda)^{2}(-2-\lambda)=0$.
Eigenvalues are $\lambda_{1}=1$ (with algebraic multiplicity 2) and $\lambda_{2}=-2$ (with algebraic multiplicity 1).

For $\lambda_{1}=1: (A-I)\vec{v}=\vec{0}$
$A-I = \begin{bmatrix}1-1&2&1\\ 0&1-1&2\\ 0&0&-2-1\end{bmatrix} = \begin{bmatrix}0&2&1\\ 0&0&2\\ 0&0&-3\end{bmatrix}$.
RREF: $\begin{bmatrix}0&2&1\\ 0&0&2\\ 0&0&-3\end{bmatrix} \xrightarrow{R_2/2} \begin{bmatrix}0&2&1\\ 0&0&1\\ 0&0&-3\end{bmatrix} \xrightarrow{R_1-R_2, R_3+3R_2} \begin{bmatrix}0&2&0\\ 0&0&1\\ 0&0&0\end{bmatrix} \xrightarrow{R_1/2} \begin{bmatrix}0&1&0\\ 0&0&1\\ 0&0&0\end{bmatrix}$.
So $x_2=0, x_3=0$. $x_1$ is free. Let $x_1=t$.
Eigenvectors $\vec{v}=t\begin{bmatrix}1\\0\\0\end{bmatrix}$. Basis for $E_{\lambda_1}$ is $\{ \begin{bmatrix}1\\0\\0\end{bmatrix} \}$.

For $\lambda_{2}=-2: (A-(-2)I)\vec{v}=(A+2I)\vec{v}=\vec{0}$
$A+2I = \begin{bmatrix}1+2&2&1\\ 0&1+2&2\\ 0&0&-2+2\end{bmatrix} = \begin{bmatrix}3&2&1\\ 0&3&2\\ 0&0&0\end{bmatrix}$.
RREF: $\begin{bmatrix}3&2&1\\ 0&3&2\\ 0&0&0\end{bmatrix} \xrightarrow{R_2/3} \begin{bmatrix}3&2&1\\ 0&1&2/3\\ 0&0&0\end{bmatrix} \xrightarrow{R_1-2R_2} \begin{bmatrix}3&0&1-4/3\\ 0&1&2/3\\ 0&0&0\end{bmatrix} = \begin{bmatrix}3&0&-1/3\\ 0&1&2/3\\ 0&0&0\end{bmatrix} \xrightarrow{R_1/3} \begin{bmatrix}1&0&-1/9\\ 0&1&2/3\\ 0&0&0\end{bmatrix}$.
So $x_1 - \frac{1}{9}x_3=0 \Rightarrow x_1 = \frac{1}{9}x_3$.
$x_2 + \frac{2}{3}x_3=0 \Rightarrow x_2 = -\frac{2}{3}x_3$. Let $x_3=t$.
Eigenvectors $\vec{v}=t\begin{bmatrix}1/9\\ -2/3\\ 1\end{bmatrix}$. Basis for $E_{\lambda_2}$ is $\{ \begin{bmatrix}1/9\\ -2/3\\ 1\end{bmatrix} \}$.

**Theorem 6.2.13**
If A is an $n\times n$ upper or lower triangular matrix, then the eigenvalues of A are the diagonal entries of A.

Let A be an $n\times n$ matrix with eigenvalue $\lambda_{1}$. The algebraic multiplicity of $\lambda_{1}$, denoted $a_{\lambda_{1}}$, is the number of times that $\lambda_{1}$ is a root of the characteristic polynomial $C(\lambda)$. That is, if $C(\lambda)=(\lambda-\lambda_{1})^{k}C_{1}(\lambda)$, where $C_{1}(\lambda_{1})\ne0$, then $a_{\lambda_{1}}=k.$ The geometric multiplicity of $\lambda_1$, denoted $g_{\lambda_{1}}$, is the dimension of its eigenspace. So, $g_{\lambda_{1}}=dim(E_{\lambda_{1}})$.

(Page 20 has handwritten notes: $a=$ Algebraic Multiplicity = # of times an eigenvalue appears as a root in the $det(A-\lambda I)=0$. $g=$ Geometric Multiplicity = the dimension of corresponding $E_\lambda$ = # of vectors in span of $E_\lambda$)

For the matrix $A=\begin{bmatrix}1&2&1\\ 0&1&2\\ 0&0&-2\end{bmatrix}$, which is upper triangular, we have $\lambda_{1}=1$ and $\lambda_{2}=-2,$ with algebraic multiplicities $a_{\lambda_{1}}=2$ and $a_{\lambda_{2}}=1$.
Since $E_{\lambda_{1}}=\text{Span}\{[\begin{smallmatrix}1\\ 0\\ 0\end{smallmatrix}]\}$ and $E_{\lambda_{2}}=\text{Span}\{[\begin{smallmatrix}1/9\\ -2/3\\ 1\end{smallmatrix}]\}$, the geometric multiplicities are $g_{\lambda_{1}}=\text{dim }E_{\lambda_{1}}=1$ and $g_{\lambda_{2}}=\text{dim }E_{\lambda_{2}}=1.$

Find the geometric and algebraic multiplicity of all eigenvalues of $A = \begin{bmatrix}-1&6&3\\ 1&-0&-1\\ -3&6&5\end{bmatrix}$. (Middle row has $-0$, assuming it's $0$). So $A = \begin{bmatrix}-1&6&3\\ 1&0&-1\\ -3&6&5\end{bmatrix}$.
$C_A(\lambda) = \text{det}(A-\lambda I) = \begin{vmatrix}-1-\lambda&6&3\\ 1&-\lambda&-1\\ -3&6&5-\lambda\end{vmatrix}$.
$C_A(\lambda) = (-1-\lambda)[-\lambda(5-\lambda)+6] - 1[6(5-\lambda)-18] + (-3)[-6 - (-3\lambda)]$ (expansion along first column).
$= (-1-\lambda)(-5\lambda+\lambda^2+6) - (30-6\lambda-18) - (-3)(-6+3\lambda)$
$= (-1-\lambda)(\lambda^2-5\lambda+6) - (12-6\lambda) + 18-9\lambda$
$= (-1-\lambda)(\lambda-2)(\lambda-3) -12+6\lambda+18-9\lambda$
$= (-1-\lambda)(\lambda-2)(\lambda-3) +6-3\lambda$
$= (-1-\lambda)(\lambda^2-5\lambda+6) -3(\lambda-2)$
$= -\lambda^3+5\lambda^2-6\lambda-\lambda^2+5\lambda-6 -3\lambda+6$
$= -\lambda^3+4\lambda^2-4\lambda = -\lambda(\lambda^2-4\lambda+4) = -\lambda(\lambda-2)^2$.
So eigenvalues are $\lambda_1=0$ (algebraic multiplicity $a_{\lambda_1}=1$) and $\lambda_2=2$ (algebraic multiplicity $a_{\lambda_2}=2$).

For $\lambda_1=0: (A-0I)\vec{v} = A\vec{v}=\vec{0}$.
$\begin{bmatrix}-1&6&3\\ 1&0&-1\\ -3&6&5\end{bmatrix} \xrightarrow{RREF} \begin{bmatrix}1&0&-1\\ 0&1&1/3\\ 0&0&0\end{bmatrix}$. RREF is $\begin{bmatrix}1&0&-1\\0&1&1/3\\0&0&0\end{bmatrix}$
$x_1-x_3=0 \Rightarrow x_1=x_3$.
$x_2+1/3 x_3=0 \Rightarrow x_2=-1/3 x_3$. Let $x_3=t$.
$\vec{v}=t\begin{bmatrix}1\\-1/3\\1\end{bmatrix}$. $E_{\lambda_1} = \text{Span}\{ \begin{bmatrix}1\\-1/3\\1\end{bmatrix} \}$. So $g_{\lambda_1}=1$.

For $\lambda_2=2: (A-2I)\vec{v}=\vec{0}$.
$A-2I = \begin{bmatrix}-1-2&6&3\\ 1&0-2&-1\\ -3&6&5-2\end{bmatrix} = \begin{bmatrix}-3&6&3\\ 1&-2&-1\\ -3&6&3\end{bmatrix}$.
RREF: $\begin{bmatrix}-3&6&3\\ 1&-2&-1\\ -3&6&3\end{bmatrix} \xrightarrow{R_1/(-3)} \begin{bmatrix}1&-2&-1\\ 1&-2&-1\\ -3&6&3\end{bmatrix} \xrightarrow{R_2-R_1, R_3+3R_1} \begin{bmatrix}1&-2&-1\\ 0&0&0\\ 0&0&0\end{bmatrix}$.
$x_1-2x_2-x_3=0 \Rightarrow x_1=2x_2+x_3$. Let $x_2=s, x_3=t$.
$\vec{v}=\begin{bmatrix}2s+t\\s\\t\end{bmatrix} = s\begin{bmatrix}2\\1\\0\end{bmatrix} + t\begin{bmatrix}1\\0\\1\end{bmatrix}$.
$E_{\lambda_2} = \text{Span}\{ \begin{bmatrix}2\\1\\0\end{bmatrix}, \begin{bmatrix}1\\0\\1\end{bmatrix} \}$. So $g_{\lambda_2}=2$.

**Lemma 6.2.20**
Let A and B be similar matrices, then A and B have the same characteristic polynomial, and hence the same eigenvalues.

**Theorem 6.2.21**
If A is an $n\times n$ matrix with eigenvalue $\lambda_{1}$, then $1\le g_{\lambda_{1}}\le a_{\lambda_{1}}$.

## 6.3 Diagonalization

An $n\times n$ matrix $A\in M_{n\times n}(\mathbb{R})$ is said to be diagonalizable if A is similar to a diagonal matrix $D\in M_{n\times n}(\mathbb{R})$. If $P^{-1}AP=D$, then we say that P diagonalizes A.

**Remark:** For now, we will restrict ourselves to diagonalizing real matrices with real eigenvalues. That is, if A has a non-real eigenvalue, then we will say that A is not diagonalizable over $\mathbb{R}$. In Section 6.5, we will look at diagonalizing matrices over the complex numbers.

**Theorem 6.3.2**
An $n\times n$ matrix A is diagonalizable (over $\mathbb{R}$) if and only if there exists a basis $\{\vec{v}*{1},...,\vec{v}*{n}\}$ for $\mathbb{R}^{n}$ of eigenvectors of A.

Consider the mapping $L:\mathbb{R}^{2}\rightarrow\mathbb{R}^{2}$ that rotates vectors about the diagonal $y=x$. (This is reflection across $y=x$).
Its standard matrix $[L]=\begin{bmatrix}0&1\\ 1&0\end{bmatrix}$ as explored on a previous example, where we found the eigenpairs $(\lambda_{1},\vec{v}*{1})$ and $(\lambda*{2},\vec{v}*{2})$, with $\lambda*{1}=1,\lambda_{2}=-1$ and $\vec{v}*{1}=\begin{bmatrix}1\\ 1\end{bmatrix}, \vec{v}*{2}=\begin{bmatrix}1\\ -1\end{bmatrix}.$
Since we have got 2 eigenvectors, we can write a basis of eigenvectors $\mathcal{B}=\{\vec{v}*{1},\vec{v}*{2}\}$.
What is then the $\mathcal{B}$-matrix of L?
Well, $L(\vec{v}*{1})=\lambda*{1}\vec{v}*{1}$ and $L(\vec{v}*{2})=\lambda_{2}\vec{v}*{2}$, so
$[L(\vec{v}*{1})]*{\mathcal{B}}=\begin{bmatrix}\lambda*{1}\\ 0\end{bmatrix}$ and $[L(\vec{v}*{2})]*{\mathcal{B}}=\begin{bmatrix}0\\ \lambda_{2}\end{bmatrix}\Rightarrow[L]*{\mathcal{B}}=\begin{bmatrix}\lambda*{1}&0\\ 0&\lambda_{2}\end{bmatrix} = \begin{bmatrix}1&0\\0&-1\end{bmatrix}$.
Let $\mathcal{S}$ be the standard basis. We have $[L]*{\mathcal{S}} = {}*{\mathcal{S}}P_{\mathcal{B}} [L]*{\mathcal{B}} {}*{\mathcal{B}}P_{\mathcal{S}}$.
Here ${}*{\mathcal{S}}P*{\mathcal{B}} = P = [\vec{v}*1 \vec{v}2] = \begin{bmatrix}1&1\\1&-1\end{bmatrix}$.
Then ${}{\mathcal{B}}P*{\mathcal{S}} = P^{-1} = \frac{1}{1(-1)-1(1)}\begin{bmatrix}-1&-1\\-1&1\end{bmatrix} = \frac{1}{-2}\begin{bmatrix}-1&-1\\-1&1\end{bmatrix} = \begin{bmatrix}1/2&1/2\\1/2&-1/2\end{bmatrix}$.
So $\begin{bmatrix}0&1\\ 1&0\end{bmatrix}=\begin{bmatrix}1&1\\ 1&-1\end{bmatrix}\begin{bmatrix}1&0\\ 0&-1\end{bmatrix}\begin{bmatrix}1/2&1/2\\ 1/2&-1/2\end{bmatrix}$.
And $[L]$ is diagonalizable.

**Lemma 6.3.3**
If A is an $n\times n$ matrix with eigenpairs $(\lambda_{1},\vec{v}*{1}), (\lambda*{2},\vec{v}*{2}),..., (\lambda*{k},\vec{v}*{k})$ where $\lambda*{i}\ne\lambda_{j}$ for $i\ne j$, then $\{\vec{v}*{1},...,\vec{v}*{k}\}$ is linearly independent.

**Theorem 6.3.4**
If A is an $n\times n$ matrix with distinct eigenvalues $\lambda_{1},...,\lambda_{k}$ and $\mathcal{B}*{i}=\{\vec{v}*{i,1},...,\vec{v}*{i,g*{\lambda_{i}}}\}$ is a basis for the eigenspace of $\lambda_{i}$  for $1\le i\le k$, then $\mathcal{B}*{1}\cup\mathcal{B}*{2}\cup...\cup\mathcal{B}_{k}$ is a linearly independent set.

**Diagonalizability Test**
If A is an $n\times n$ matrix whose characteristic polynomial factors as $C_{A}(\lambda)=(\lambda-\lambda_{1})^{a_{\lambda_{1}}}\cdot\cdot\cdot(\lambda-\lambda_{k})^{a_{\lambda_{k}}}$ where $\lambda_{1},...,\lambda_{k}$ are the distinct eigenvalues of A, then A is diagonalizable if and only if $g_{\lambda_{i}}=a_{\lambda_{i}}$ for $1\le i\le k$.

**Corollary 6.3.6**
If A is an $n\times n$ matrix with n distinct eigenvalues, then A is diagonalizable.

**Algorithm**
To diagonalize an $n\times n$ matrix A, or show that A is not diagonalizable:

1. Find and factor the characteristic polynomial $C(\lambda)=det(A-\lambda I)$.
2. Let $\lambda_{1},...,\lambda_{n}$ denote the n roots of $C(\lambda)$ (repeated according to multiplicity).
3. If any of the eigenvalues $\lambda_{i}$ are not real, then A is not diagonalizable over $\mathbb{R}$. 
4. Find a basis for the eigenspace of each distinct eigenvalue $\lambda_{j}$ by finding a basis for the nullspace of $A-\lambda_{j}I$. 
5. If $g_{\lambda_{j}}<a_{\lambda_{j}}$ for any $\lambda_{j}$, then A is not diagonalizable. 
6. Otherwise, form a basis $\{\vec{v}*{1},...,\vec{v}*{n}\}$ for $\mathbb{R}^{n}$ of eigenvectors of A by using Theorem 6.3.4. Let $P=[\begin{matrix}\vec{v}*{1}&\cdot\cdot\cdot&\vec{v}*{n}\end{matrix}]$. 
7. Then, $P^{-1}AP=diag(\lambda_{1},...,\lambda_{n})$ where $\lambda_{i}$ is an eigenvalue corresponding to the eigenvector $\vec{v}_{i}$ for $1\le i\le n$. 

Show that $A=\begin{bmatrix}-1&6&3\\ 1&0&-1\\ -3&6&5\end{bmatrix}$ is diagonalizable and find an invertible matrix P and a diagonal matrix D such that $P^{-1}AP=D$.
From earlier (page 22-23), $C_{A}(\lambda)=-\lambda(\lambda-2)^{2}$.
Eigenvalues: $\lambda_{1}=0$ ($a_{\lambda_{1}}=1$) and $\lambda_{2}=2$ ($a_{\lambda_{2}}=2$).
For $\lambda_1=0$, $E_{\lambda_1} = \text{Span}\{ \begin{bmatrix}1\\-1/3\\1\end{bmatrix} \}$. So $g_{\lambda_1}=1$. Since $a_{\lambda_1}=g_{\lambda_1}=1$.
For $\lambda_2=2$, $E_{\lambda_2} = \text{Span}\{ \begin{bmatrix}2\\1\\0\end{bmatrix}, \begin{bmatrix}1\\0\\1\end{bmatrix} \}$. So $g_{\lambda_2}=2$. Since $a_{\lambda_2}=g_{\lambda_2}=2$.
Since algebraic and geometric multiplicities match for all eigenvalues, A is diagonalizable.
$P=\begin{bmatrix}1&2&1\\ -1/3&1&0\\ 1&0&1\end{bmatrix}$. $D=\begin{bmatrix}0&0&0\\ 0&2&0\\ 0&0&2\end{bmatrix}$.

Show that $A=\begin{bmatrix}1&1\\ 0&1\end{bmatrix}$ is not diagonalizable.
$C_{A}(\lambda)=\begin{vmatrix}1-\lambda&1\\ 0&1-\lambda\end{vmatrix}=(1-\lambda)^{2}=0$.
Eigenvalue $\lambda=1$ with $a_{\lambda}=2$.
For $\lambda=1: (A-I)\vec{v}=\vec{0} \Rightarrow \begin{bmatrix}0&1\\0&0\end{bmatrix}\begin{bmatrix}x_1\\x_2\end{bmatrix}=\begin{bmatrix}0\\0\end{bmatrix}$.
This gives $x_2=0$. $x_1$ is free. Let $x_1=t$. Eigenvectors are $t\begin{bmatrix}1\\0\end{bmatrix}$.
$E_{\lambda} = \text{Span}\{ \begin{bmatrix}1\\0\end{bmatrix} \}$. So $g_{\lambda}=1$.
Since $g_{\lambda}=1 < a_{\lambda}=2$, A is not diagonalizable.

Show that $A=\begin{bmatrix}0&-1\\ 1&0\end{bmatrix}$ is not diagonalizable over $\mathbb{R}$.
$C_{A}(\lambda)=\begin{vmatrix}-\lambda&-1\\ 1&-\lambda\end{vmatrix}=\lambda^{2}+1=0$.
$\lambda^{2}=-1 \Rightarrow \lambda=\pm i$.
Since eigenvalues are not real numbers, A is not diagonalizable over $\mathbb{R}$.
 $P^{-1}AP=\begin{bmatrix}i&0\\0&-i\end{bmatrix}$ complex diagonalization.

**Theorem 6.3.13**
If $\lambda_{1},...,\lambda_{n}$ are all the n eigenvalues of an $n\times n$ matrix A (repeated according to algebraic multiplicity), then
det $A=\lambda_{1}\cdot\cdot\cdot\lambda_{n}$ and trA $A=\lambda_{1}+\cdot\cdot\cdot+\lambda_{n}$.

Find all eigenvalues of $A=\begin{bmatrix}1&0&0\\ 0&0&-1\\ 0&1&0\end{bmatrix}$ and verify that det $A=\lambda_{1}\lambda_{2}\lambda_{3}$ and trA $A=\lambda_{1}+\lambda_{2}+\lambda_{3}$.
$C_A(\lambda) = \text{det}(A-\lambda I) = \begin{vmatrix}1-\lambda&0&0\\ 0&-\lambda&-1\\ 0&1&-\lambda\end{vmatrix} = (1-\lambda)((-\lambda)(-\lambda) - (-1)(1)) = (1-\lambda)(\lambda^2+1)$.
Eigenvalues are $\lambda_1=1, \lambda_2=i, \lambda_3=-i$.
det A = $1(0-(-1)) - 0 + 0 = 1$.
$\lambda_1\lambda_2\lambda_3 = 1 \cdot i \cdot (-i) = -i^2 = -(-1) = 1$. Verified.
tr A = $1+0+0=1$.
$\lambda_1+\lambda_2+\lambda_3 = 1+i+(-i)=1$. 

## 6.4 Powers of Matrices

**Theorem 6.4.1**
Let A be an $n\times n$ matrix. If there exists a matrix P and diagonal matrix D such that $P^{-1}AP=D$, then
$$ A^{k}=PD^{k}P^{-1} $$
Let $A=\begin{bmatrix}1&2\\ -1&4\end{bmatrix}$. Show that $A^{1000}=P D^{1000} P^{-1} = \begin{bmatrix}2^{1001}-3^{1000} & -2^{1001}+2 \cdot 3^{1000} \\ 2^{1000}-3^{1000} & -2^{1000}+2 \cdot 3^{1000}\end{bmatrix}$.
(This requires finding P and D for A first.)
$C_A(\lambda) = \begin{vmatrix}1-\lambda&2\\-1&4-\lambda\end{vmatrix} = (1-\lambda)(4-\lambda) - (2)(-1) = 4-\lambda-4\lambda+\lambda^2+2 = \lambda^2-5\lambda+6 = (\lambda-2)(\lambda-3)$.
Eigenvalues $\lambda_1=2, \lambda_2=3$.
For $\lambda_1=2: A-2I = \begin{bmatrix}-1&2\\-1&2\end{bmatrix} \rightarrow \begin{bmatrix}1&-2\\0&0\end{bmatrix}x_1-2x_2=0 \Rightarrow \vec{v}_1 = \begin{bmatrix}2\\1\end{bmatrix}$.
For $\lambda_2=3: A-3I = \begin{bmatrix}-2&2\\-1&1\end{bmatrix} \rightarrow \begin{bmatrix}1&-1\\0&0\end{bmatrix}x_1-x_2=0 \Rightarrow \vec{v}_2 = \begin{bmatrix}1\\1\end{bmatrix}$.
$P=\begin{bmatrix}2&1\\1&1\end{bmatrix}$, $D=\begin{bmatrix}2&0\\0&3\end{bmatrix}$.
$P^{-1} = \frac{1}{2-1}\begin{bmatrix}1&-1\\-1&2\end{bmatrix} = \begin{bmatrix}1&-1\\-1&2\end{bmatrix}$.
$D^{1000} = \begin{bmatrix}2^{1000}&0\\0&3^{1000}\end{bmatrix}$.
$A^{1000} = PD^{1000}P^{-1} = \begin{bmatrix}2&1\\1&1\end{bmatrix} \begin{bmatrix}2^{1000}&0\\0&3^{1000}\end{bmatrix} \begin{bmatrix}1&-1\\-1&2\end{bmatrix}$
$= \begin{bmatrix}2 \cdot 2^{1000}&1 \cdot 3^{1000}\\1 \cdot 2^{1000}&1 \cdot 3^{1000}\end{bmatrix} \begin{bmatrix}1&-1\\-1&2\end{bmatrix} = \begin{bmatrix}2^{1001}&3^{1000}\\2^{1000}&3^{1000}\end{bmatrix} \begin{bmatrix}1&-1\\-1&2\end{bmatrix}$
$= \begin{bmatrix}2^{1001}(1)+3^{1000}(-1) & 2^{1001}(-1)+3^{1000}(2) \\ 2^{1000}(1)+3^{1000}(-1) & 2^{1000}(-1)+3^{1000}(2)\end{bmatrix} = \begin{bmatrix}2^{1001}-3^{1000} & -2^{1001}+2 \cdot 3^{1000}\\ 2^{1000}-3^{1000} & -2^{1000}+2 \cdot 3^{1000}\end{bmatrix}$. 

## 6.5 Complex Diagonalization

Consider the standard matrix of the rotation mapping $R_{\theta}:\mathbb{R}^{2}\rightarrow\mathbb{R}^{2}$:
$$ [R_{\theta}]=\begin{bmatrix}\cos\theta&-\sin\theta\\ \sin\theta&\cos\theta\end{bmatrix} \quad (0\le\theta<2\pi) $$
(a) Thinking geometrically, should this matrix have any real eigenvalues? (Generally no, unless $\theta=0$ or $\theta=\pi$. A rotation changes the direction of every vector, unless the rotation is by 0 or $\pi$ radians.)
(b) Can you confirm your answer to (a) by studying the roots of $C(\lambda)$?
$C(\lambda) = \begin{vmatrix}\cos\theta-\lambda&-\sin\theta\\ \sin\theta&\cos\theta-\lambda\end{vmatrix} = (\cos\theta-\lambda)^2 - (-\sin\theta)(\sin\theta)$
$= \cos^2\theta - 2\lambda\cos\theta + \lambda^2 + \sin^2\theta = \lambda^2 - 2\lambda\cos\theta + 1 = 0$.
Roots: $\lambda = \frac{2\cos\theta \pm \sqrt{4\cos^2\theta - 4}}{2} = \frac{2\cos\theta \pm \sqrt{4(\cos^2\theta - 1)}}{2} = \frac{2\cos\theta \pm \sqrt{-4\sin^2\theta}}{2}$
$= \frac{2\cos\theta \pm 2i|\sin\theta|}{2} = \cos\theta \pm i|\sin\theta|$.
Real if $\sin\theta=0$, which means $\theta=0$ or $\theta=\pi$.
If $\theta=0: R_0 = \begin{bmatrix}1&0\\0&1\end{bmatrix}$. Eigenvalue $\lambda=1$. $E_{\lambda_1}=\text{Span}\{[\begin{smallmatrix}1\\0\end{smallmatrix}],[\begin{smallmatrix}0\\1\end{smallmatrix}]\}$.
If $\theta=\pi: R_{\pi} = \begin{bmatrix}-1&0\\0&-1\end{bmatrix}$. Eigenvalue $\lambda=-1$. $E_{\lambda_2}=\text{Span}\{[\begin{smallmatrix}1\\0\end{smallmatrix}],[\begin{smallmatrix}0\\1\end{smallmatrix}]\}$ (eigenvectors are any non-zero vectors).  $E_{\lambda_2}=span\{[\begin{smallmatrix}-1\\0\end{smallmatrix}],[\begin{smallmatrix}0\\-1\end{smallmatrix}]\}$.

What if $\theta=\pi/2: \lambda = \cos(\pi/2) \pm i\sin(\pi/2) = 0 \pm i(1) = \pm i$.
For $\lambda=i$: $(A-iI)\vec{v} = \begin{bmatrix}-i&-1\\1&-i\end{bmatrix}\vec{v}=\vec{0}$. $\begin{bmatrix}-i&-1\\1&-i\end{bmatrix} \xrightarrow{R_2 \leftrightarrow R_1} \begin{bmatrix}1&-i\\-i&-1\end{bmatrix} \xrightarrow{R_2+iR_1} \begin{bmatrix}1&-i\\0&0\end{bmatrix}$.
$x_1-ix_2=0 \Rightarrow x_1=ix_2$. Let $x_2=t$. $\vec{v}=t\begin{bmatrix}i\\1\end{bmatrix}$. 
For $A=\begin{bmatrix}0&-1\\1&0\end{bmatrix}$, for $\lambda=i$: $(A-iI) = \begin{bmatrix}-i&-1\\1&-i\end{bmatrix}$. RREF $\begin{bmatrix}1&-i\\0&0\end{bmatrix}$. $x_1-ix_2=0 \Rightarrow x_1=ix_2$. Eigenvector $\begin{bmatrix}i\\1\end{bmatrix}$.

The set $M_{2\times2}(\mathbb{C})$ is defined by $M_{2\times2}(\mathbb{C})=\{A=\begin{bmatrix}a_{11}&a_{12}\\ a_{21}&a_{22}\end{bmatrix}|a_{11},a_{12},a_{21},a_{22}\in\mathbb{C}\}$. An element A of $M_{2\times2}(\mathbb{C})$ is called a (complex) matrix.
In $M_{2\times2}(\mathbb{C})$, matrix addition and scalar multiplication follow as expected. Given $A=\begin{bmatrix}a_{11}&a_{12}\\ a_{21}&a_{22}\end{bmatrix}, B=\begin{bmatrix}b_{11}&b_{12}\\ b_{21}&b_{22}\end{bmatrix}$ and $\alpha\in\mathbb{C}$

1. vector addition: $A+B=\begin{bmatrix}a_{11}+b_{11}&a_{12}+b_{12}\\ a_{21}+b_{21}&a_{22}+b_{22}\end{bmatrix}\in M_{2\times2}(\mathbb{C})$ 
2. scalar multiplication: $\alpha A=\begin{bmatrix}\alpha a_{11}&\alpha a_{12}\\ \alpha a_{21}&\alpha a_{22}\end{bmatrix}\in M_{2\times2}(\mathbb{C})$ 
Matrix-vector and matrix-matrix products for complex matrices and vectors also follow as we did for $\mathbb{R}^{2}$ and $M_{2\times2}(\mathbb{R})$. 

**Theorem 1.6.3** (This theorem number is from Chapter 1, likely reused here for properties in $\mathbb{C}^n$)
If $\vec{x}, \vec{y}, \vec{w}\in\mathbb{C}^{n}$ and c, $d\in\mathbb{C}$, then
V1 $\vec{x}+\vec{y}\in\mathbb{C}^{n}$.
V2 $(\vec{x}+\vec{y})+\vec{w}=\vec{x}+(\vec{y}+\vec{w})$.
V3 $\vec{x}+\vec{y}=\vec{y}+\vec{x}$.
V4 There exists a vector $\vec{0}\in\mathbb{C}^{n}$ such that $\vec{x}+\vec{0}=\vec{x}$ for all $\vec{x}\in\mathbb{C}^{n}$.
V5 For $\vec{x}\in\mathbb{C}^{n}$ there exists $(-\vec{x})\in\mathbb{C}^{n}$ such that $\vec{x}+(-\vec{x})=\vec{0}$.
V6 $c\vec{x}\in\mathbb{C}^{n}$.
V7 $c(d\vec{x})=(cd)\vec{x}$.
V8 $(c+d)\vec{x}=c\vec{x}+d\vec{x}$.
V9 $c(\vec{x}+\vec{y})=c\vec{x}+c\vec{y}$.
V10 $1\vec{x}=\vec{x}$.

The matrix $A=\begin{bmatrix}1&-1\\ 1&1\end{bmatrix}$ has no real eigenvalues. We will view this as a matrix in $M_{2\times2}(\mathbb{C})$ and search for complex eigenvalues and eigenvectors just as we did over $\mathbb{R}$.
(a) Show that the two complex roots of $C(\lambda)$ are $\lambda_{1}=1+i$ and $\lambda_{2}=1-i$.
$C(\lambda) = \text{det}(A-\lambda I) = \begin{vmatrix}1-\lambda&-1\\1&1-\lambda\end{vmatrix} = (1-\lambda)^2 - (-1)(1) = (1-\lambda)^2+1$.
Set $(1-\lambda)^2+1=0 \Rightarrow (1-\lambda)^2=-1 \Rightarrow 1-\lambda = \pm i$.
So $\lambda = 1 \mp i$. Thus $\lambda_1 = 1-i, \lambda_2 = 1+i$ (or vice versa).
(b) Determine all $\vec{z}\in\mathbb{C}^{2}$ such that $A\vec{z}=(1+i)\vec{z}$.
$(A-(1+i)I)\vec{z}=\vec{0}$. $A-(1+i)I = \begin{bmatrix}1-(1+i)&-1\\1&1-(1+i)\end{bmatrix} = \begin{bmatrix}-i&-1\\1&-i\end{bmatrix}$.
$\begin{bmatrix}-i&-1\\1&-i\end{bmatrix} \xrightarrow{R_1 \leftrightarrow R_2} \begin{bmatrix}1&-i\\-i&-1\end{bmatrix} \xrightarrow{R_2+iR_1} \begin{bmatrix}1&-i\\0&0\end{bmatrix}$.
$z_1 - iz_2 = 0 \Rightarrow z_1=iz_2$. Let $z_2=t$. $\vec{z}=t\begin{bmatrix}i\\1\end{bmatrix}$.
(c) Determine all $\vec{w}\in\mathbb{C}^{2}$ such that $A\vec{w}=(1-i)\vec{w}$.
$(A-(1-i)I)\vec{w}=\vec{0}$. $A-(1-i)I = \begin{bmatrix}1-(1-i)&-1\\1&1-(1-i)\end{bmatrix} = \begin{bmatrix}i&-1\\1&i\end{bmatrix}$.
$\begin{bmatrix}i&-1\\1&i\end{bmatrix} \xrightarrow{R_1 \leftrightarrow R_2} \begin{bmatrix}1&i\\i&-1\end{bmatrix} \xrightarrow{R_2-iR_1} \begin{bmatrix}1&i\\0&0\end{bmatrix}$.
$w_1 + iw_2 = 0 \Rightarrow w_1=-iw_2$. Let $w_2=t$. $\vec{w}=t\begin{bmatrix}-i\\1\end{bmatrix}$.
(d) Construct a matrix $P=[\vec{z}\vec{w}]$ such that $\vec{z}$ is a nonzero solution from (b) and $\vec{w}$ is a nonzero solution from (c).
Let $t=1$ for both. $P=\begin{bmatrix}i&-i\\1&1\end{bmatrix}$.
(e) Determine a matrix $P^{-1}$ such that $PP^{-1}=I=P^{-1}P$.
det P = $i(1) - (-i)(1) = i+i=2i$.
$P^{-1} = \frac{1}{2i}\begin{bmatrix}1&i\\-1&i\end{bmatrix} = \frac{-i}{2}\begin{bmatrix}1&i\\-1&i\end{bmatrix} = \begin{bmatrix}-i/2 & -i^2/2 \\ i/2 & -i^2/2\end{bmatrix} = \begin{bmatrix}-i/2 & 1/2 \\ i/2 & 1/2\end{bmatrix}$.
(f) Calculate matrix $P^{-1}AP$.
This should be $D=\begin{bmatrix}1+i&0\\0&1-i\end{bmatrix}$.
(g) Can you use your work in (a) - (f) to calculate $A^{100}$?
Yes. $A=PDP^{-1}$. So $A^{100}=PD^{100}P^{-1}$.
$D^{100} = \begin{bmatrix}(1+i)^{100}&0\\0&(1-i)^{100}\end{bmatrix}$.
$1+i = \sqrt{2}(\cos(\pi/4)+i\sin(\pi/4)) = \sqrt{2}e^{i\pi/4}$.
$(1+i)^{100} = (\sqrt{2})^{100} e^{i100\pi/4} = 2^{50} e^{i25\pi} = 2^{50} (\cos(25\pi)+i\sin(25\pi)) = 2^{50}(-1) = -2^{50}$.
$1-i = \sqrt{2}(\cos(-\pi/4)+i\sin(-\pi/4)) = \sqrt{2}e^{-i\pi/4}$.
$(1-i)^{100} = (\sqrt{2})^{100} e^{-i100\pi/4} = 2^{50} e^{-i25\pi} = 2^{50} (\cos(-25\pi)+i\sin(-25\pi)) = 2^{50}(-1) = -2^{50}$.
So $D^{100} = \begin{bmatrix}-2^{50}&0\\0&-2^{50}\end{bmatrix} = -2^{50}I$.
$A^{100} = P(-2^{50}I)P^{-1} = -2^{50}PIP^{-1} = -2^{50}I = \begin{bmatrix}-2^{50}&0\\0&-2^{50}\end{bmatrix}$.