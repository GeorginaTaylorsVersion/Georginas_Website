# 5. Dimension and Coordinates

## 5.1 Bases and Dimension

**Theorem 5.1.3**
Every subspace S of $\mathbb{R}^{n}$ has a basis.

**Proof:** If $\mathbb{S}=\{\vec{0}\}$ then $\{\}$ is a basis by definition.
So, assume that $\mathbb{S}\ne\{\vec{0}\}$. Hence S contains a vector $\vec{v}{1}\ne\vec{0}$.
If $\mathbb{S}=\text{Span}\{\vec{v}{1}\}$, then we are done: $\mathcal{B}=\{\vec{v}{1}\}$ is a basis for S.
Otherwise, there exists a $\vec{v}{2}\in\mathbb{S}$ with $\vec{v}{2}\notin \text{Span}\{\vec{v}{1}\}$.
By Theorem 1.1.3 (Note: This theorem number is likely from a previous chapter/context), the set $\{\vec{v}{1},\vec{v}{2}\}$ is linearly independent. If $\mathbb{S}=\text{Span}\{\vec{v}{1},\vec{v}{2}\}$ then $\mathcal{B}=\{\vec{v}{1},\vec{v}{2}\}$ is a basis.
Otherwise, there exists a $\vec{v}{3}\in\mathbb{S}$ with $\vec{v}{3}\notin \text{Span}\{\vec{v}{1},\vec{v}{2}\}$ for which we can ask whether $\mathbb{S}=\text{Span}\{\vec{v}{1},\vec{v}{2},\vec{v}{3}\}$.
Repeating this process k times, we can produce a linearly independent set $\{\vec{v}{1},...,\vec{v}{k}\}$ with k vectors.
Since we cannot have more than n linearly independent vectors in $\mathbb{R}^{n}$, this process must terminate after $k\le n$ steps.
When it does terminate, we will have $\mathbb{S}=\text{Span}\{\vec{v}{1},...,\vec{v}{k}\}$, all linearly independent.
In this case, $\mathcal{B}=\{\vec{v}{1},...,\vec{v}_{k}\}$ will be a basis for S.

**Finding the basis for a subspace**
Let S be a subspace of $\mathbb{R}^{n}$.
To find a basis for S:

1. Using the definition of S, find vectors $\vec{v}{1},...,\vec{v}{k}$ in S such that every vector $\vec{x}\in\mathbb{S}$ can be expressed as a linear combination of $\vec{v}{1},...,\vec{v}{k}.$
2. Check if $\mathcal{B}=\{\vec{v}{1},...,\vec{v}{k}\}$ is linearly independent. If it is, then stop as $\mathcal{B}$ is a basis.
3. If $\mathcal{B}$ is linearly dependent, pick some vector $\vec{v}_{i}\in\mathcal{B}$ that can be written as a linear combination of the other vectors in $\mathcal{B}$ and remove it from the set. Repeat this until the set is linearly independent.

Find a basis for the subspace $S=\{[\begin{matrix}a-b\\ a-c\\ c-b\end{matrix}]|a,b,c\in\mathbb{R}\}$ of $\mathbb{R}^{3}$.
A vector in S can be written as: $\begin{bmatrix}a-b\\ a-c\\ c-b\end{bmatrix} = a\begin{bmatrix}1\\ 1\\ 0\end{bmatrix} + b\begin{bmatrix}-1\\ 0\\ -1\end{bmatrix} + c\begin{bmatrix}0\\ -1\\ 1\end{bmatrix}$.
Let $\vec{v}_1 = \begin{bmatrix}1\\ 1\\ 0\end{bmatrix}$, $\vec{v}_2 = \begin{bmatrix}-1\\ 0\\ -1\end{bmatrix}$, $\vec{v}_3 = \begin{bmatrix}0\\ -1\\ 1\end{bmatrix}$.
So $S = \text{Span}\{\vec{v}_1, \vec{v}_2, \vec{v}_3\}$.
To check for linear independence, form a matrix with these vectors as columns and row reduce:
$ \begin{bmatrix}1&-1&0\\ 1&0&-1\\ 0&-1&1\end{bmatrix} \xrightarrow{R_2-R_1} \begin{bmatrix}1&-1&0\\ 0&1&-1\\ 0&-1&1\end{bmatrix} \xrightarrow{R_1+R_2, R_3+R_2} \begin{bmatrix}1&0&-1\\ 0&1&-1\\ 0&0&0\end{bmatrix} $
The RREF shows that there are two pivot columns (first and second). Thus, $\vec{v}_1$ and $\vec{v}_2$ form a basis for S.
From the RREF, $c_1\vec{v}_1 + c_2\vec{v}_2 + c_3\vec{v}_3 = \vec{0}$ implies $c_1-c_3=0$ and $c_2-c_3=0$. If $c_3=1$, then $c_1=1, c_2=1$. So $1\vec{v}_1+1\vec{v}_2+ (-1)\vec{v}_3 = \vec{0}$ (if we write it as $c_1\vec{v}_1+c_2\vec{v}_2 = \vec{v}_3$).
$\vec{v}_3 = (-1)\vec{v}_1 + (-1)\vec{v}_2$. Checking: $(-1)\begin{bmatrix}1\\1\\0\end{bmatrix} + (-1)\begin{bmatrix}-1\\0\\-1\end{bmatrix} = \begin{bmatrix}-1\\-1\\0\end{bmatrix} + \begin{bmatrix}1\\0\\1\end{bmatrix} = \begin{bmatrix}0\\-1\\1\end{bmatrix} = \vec{v}_3$. This is correct.
So, $\vec{v}_1$ and $\vec{v}_2$ make out the basis for S.
Basis for S: $\{ \begin{bmatrix}1\\ 1\\ 0\end{bmatrix}, \begin{bmatrix}-1\\ 0\\ -1\end{bmatrix} \}$.

**Theorem 5.1.7**
Let S be a subspace of $\mathbb{R}^{n}$. Let $\mathcal{B}=\{\vec{v}{1},...,\vec{v}{k}\}$ be a basis for S and let $\mathcal{C}=\{\vec{w}{1},...,\vec{w}{m}\}$ be a set in S. If $m>k$ then C is linearly dependent.
**Note:** Keep in mind that a basis is a minimal spanning set and a maximal linearly independent set.

**Theorem 5.1.8**
If $\mathcal{B}=\{\vec{v}{1},...,\vec{v}{k}\}$ and $\mathcal{C}=\{\vec{w}{1},...,\vec{w}{m}\}$ are bases for S, then $k=m$.

Let S be a subspace of $\mathbb{R}^{n}$. If $\mathcal{B}=\{\vec{v}{1},...,\vec{v}{k}\}$ is a basis for S, then we say the dimension of S is k and write
$$ \text{dim S}=k. $$
If $\mathbb{S}=\{\vec{0}\}$ is the trivial subspace, then $\text{dim}\mathbb{S}=0$. (Notice that this agrees with the fact that a basis for S is the empty set.)

**Theorem 5.1.12**
If dim S = k, then:
(1) A set of more than k vectors in S must be linearly dependent.
(2) A set of fewer than k vectors in S cannot span S.
(3) A set of k vectors in S is linearly independent if and only if it spans S.

**Theorem 5.1.15**
If S is an k-dimensional subspace of $\mathbb{R}^{n}$ and $\{\vec{v}{1},...,\vec{v}{l}\}$ is a linearly independent set in S with $l<k$, then there exist vectors $\vec{w}{l+1},...,\vec{w}{k}$ in S such that $\{\vec{v}{1},...,\vec{v}{l},\vec{w}{l+1},...,\vec{w}{k}\}$ is a basis for S.

**Theorem 5.1.16**
Let $\mathbb{S}{1}$ and $\mathbb{S}{2}$ be subspaces of $\mathbb{R}^{n}$ such that $\mathbb{S}{1}\subseteq\mathbb{S}{2}$. Then dim $\mathbb{S}{1}\le \text{dim}\mathbb{S}{2}$. Moreover, $\mathbb{S}{1}=\mathbb{S}{2}$ if and only if dim $\mathbb{S}{1}= \text{dim}\mathbb{S}{2}$.
**Warning:** Pay attention to the hypothesis $\mathbb{S}{1}\subseteq\mathbb{S}{2}$. Without it, it is not true that $\mathbb{S}{1}=\mathbb{S}{2}$ if dim $\mathbb{S}{1}=\text{dim}\mathbb{S}{2}.$

## 5.2 Coordinates

Without considering other possibilities, we have learned about $\mathbb{R}^{2}$ and its coordinates with the standard basis $\{\vec{e}{1},\vec{e}{2}\}$ as the "natural language".
Could we possibly use another system to represent coordinates for points in $\mathbb{R}^{2}$? Yes!
Consider that in Atlantis their standard grid for $\mathbb{R}^{2}$ is formed from the vectors $\begin{bmatrix}1\\ 1\end{bmatrix}$ and $\begin{bmatrix}1\\ -1\end{bmatrix}$ as seen in the picture below. In this scenario, what would be the coordinates for the point A?

**Theorem 5.2.1**
If $\mathcal{B}=\{\vec{v}{1},...,\vec{v}{k}\}$ is a basis for a subspace S of $\mathbb{R}^{n}$, then every $\vec{v}\in\mathbb{S}$ can be written as a unique linear combination of the vectors in B.

Let $\mathcal{B}=\{\vec{v}{1},...,\vec{v}{k}\}$ be a basis for a subspace S of $\mathbb{R}^{n}$. If $\vec{v}=b_{1}\vec{v}{1}+\cdot\cdot\cdot+b{k}\vec{v}{k}$ then $b{1},...,b_{k}$ are called the B-coordinates of $\vec{v}$, and we define the B-coordinate vector (also called the coordinate vector of $\vec{v}$ with respect to B) by
$$ [\vec{v}]{\mathcal{B}}=\begin{bmatrix}b{1}\\ \vdots\\ b_{k}\end{bmatrix} $$

**Remark**
It is important to notice that the coordinates of a vector are dependent on which basis is being used. Moreover, it is also dependent on the order of vectors in the basis. Thus, to prevent confusion, when we speak of a basis, we mean an ordered basis. For example, $\{[\begin{matrix}1\\ 0\end{matrix}],[\begin{matrix}0\\ 1\end{matrix}]\}$ and $\{[\begin{matrix}0\\ 1\end{matrix}],[\begin{matrix}1\\ 0\end{matrix}]\}$ are different ordered bases for $\mathbb{R}^{2}$, even though they are equal as sets.

**Theorem 5.2.10**
If S is a subspace of $\mathbb{R}^{n}$ with basis $\mathcal{B}=\{\vec{v}{1},...,\vec{v}{k}\}$, then for any $\vec{v}, \vec{w}\in\mathbb{S}$ and s, $t\in\mathbb{R}$ we have
$$ [s\vec{v}+t\vec{w}]{\mathcal{B}}=s[\vec{v}]{\mathcal{B}}+t[\vec{w}]_{\mathcal{B}} $$

Let $\mathcal{B}=\{[\begin{matrix}1\\ 1\end{matrix}],[\begin{matrix}1\\ -1\end{matrix}]\}$ and $\mathcal{C}=\{[\begin{matrix}1\\ 1\end{matrix}],[\begin{matrix}0\\ -1\end{matrix}]\}$. Given that $[\vec{x}]{\mathcal{B}}=\begin{bmatrix}2\\ 5\end{bmatrix}$, determine $[\vec{x}]{\mathcal{C}}$.
$\vec{x} = 2\begin{bmatrix}1\\ 1\end{bmatrix} + 5\begin{bmatrix}1\\ -1\end{bmatrix} = \begin{bmatrix}2\\2\end{bmatrix} + \begin{bmatrix}5\\-5\end{bmatrix} = \begin{bmatrix}7\\-3\end{bmatrix}$.
Now we want to find $c_1, c_2$ such that $\begin{bmatrix}7\\-3\end{bmatrix} = c_1\begin{bmatrix}1\\1\end{bmatrix} + c_2\begin{bmatrix}0\\-1\end{bmatrix}$.
$c_1 = 7$.
$c_1 - c_2 = -3 \Rightarrow 7 - c_2 = -3 \Rightarrow c_2 = 10$.
So, $[\vec{x}]{\mathcal{C}} = \begin{bmatrix}7\\10\end{bmatrix}$. $[\vec{x}]{\mathcal{C}} = [2\begin{bmatrix}1\\ 1\end{bmatrix} + 5\begin{bmatrix}1\\ -1\end{bmatrix}]{\mathcal{C}} = 2[\begin{bmatrix}1\\ 1\end{bmatrix}]{\mathcal{C}} + 5[\begin{bmatrix}1\\ -1\end{bmatrix}]{\mathcal{C}}$.
To find $[\begin{smallmatrix}1\\1\end{smallmatrix}]{\mathcal{C}}$: $c_1\begin{bmatrix}1\\1\end{bmatrix} + c_2\begin{bmatrix}0\\-1\end{bmatrix} = \begin{bmatrix}1\\1\end{bmatrix} \Rightarrow c_1=1, c_1-c_2=1 \Rightarrow 1-c_2=1 \Rightarrow c_2=0$. So $[\begin{smallmatrix}1\\1\end{smallmatrix}]{\mathcal{C}} = \begin{bmatrix}1\\0\end{bmatrix}$.
To find $[\begin{smallmatrix}1\\-1\end{smallmatrix}]{\mathcal{C}}$: $c_1\begin{bmatrix}1\\1\end{bmatrix} + c_2\begin{bmatrix}0\\-1\end{bmatrix} = \begin{bmatrix}1\\-1\end{bmatrix} \Rightarrow c_1=1, c_1-c_2=-1 \Rightarrow 1-c_2=-1 \Rightarrow c_2=2$. So $[\begin{smallmatrix}1\\-1\end{smallmatrix}]{\mathcal{C}} = \begin{bmatrix}1\\2\end{bmatrix}$.
Then $[\vec{x}]{\mathcal{C}} = 2\begin{bmatrix}1\\0\end{bmatrix} + 5\begin{bmatrix}1\\2\end{bmatrix} = \begin{bmatrix}2\\0\end{bmatrix} + \begin{bmatrix}5\\10\end{bmatrix} = \begin{bmatrix}7\\10\end{bmatrix}$.

If we now had to repeat the process for $\vec{y}$ such that $[\vec{y}]{\mathcal{B}}=\begin{bmatrix}4\\ -2\end{bmatrix}$, we would have
$$ [\vec{y}]{\mathcal{C}}=[4\begin{bmatrix}1\\ 1\end{bmatrix}-2\begin{bmatrix}1\\ -1\end{bmatrix}]{\mathcal{C}}=4[\begin{bmatrix}1\\ 1\end{bmatrix}]{\mathcal{C}}-2[\begin{bmatrix}1\\ -1\end{bmatrix}]{\mathcal{C}} $$
that is, using the matrix-vector multiplication notation
$$ [\vec{y}]{\mathcal{C}}=\begin{bmatrix}[\begin{smallmatrix}1\\ 1\end{smallmatrix}]{\mathcal{C}}&[\begin{smallmatrix}1\\ -1\end{smallmatrix}]{\mathcal{C}}\end{bmatrix}\begin{bmatrix}4\\ -2\end{bmatrix}=\begin{bmatrix}1&1\\ 0&2\end{bmatrix}\begin{bmatrix}4\\ -2\end{bmatrix} = \begin{bmatrix}4-2\\0-4\end{bmatrix} = \begin{bmatrix}2\\-4\end{bmatrix} $$

Let $\mathcal{B}=\{\vec{v}{1},...,\vec{v}{n}\}$ and $\mathcal{C}$ both be bases for a subspace S. The change of coordinates matrix from $\mathcal{B}$-coordinates to $\mathcal{C}$-coordinates is defined by
$$ {}{\mathcal{C}}P{\mathcal{B}}=[[\vec{v}{1}]{\mathcal{C}}\cdot\cdot\cdot[\vec{v}{n}]{\mathcal{C}}] $$
and for any $\vec{x}\in\mathbb{S}$ we have
$$ [\vec{x}]{\mathcal{C}}={}{\mathcal{C}}P_{\mathcal{B}}[\vec{x}]{\mathcal{B}}. $$
(Annotation: converter $\mathcal{B}\rightarrow \mathcal{C}$)
From previous example: ${}{\mathcal{C}}P_{\mathcal{B}} = \begin{bmatrix} [\begin{smallmatrix}1\\1\end{smallmatrix}]{\mathcal{C}} & [\begin{smallmatrix}1\\-1\end{smallmatrix}]{\mathcal{C}} \end{bmatrix} = \begin{bmatrix}1&1\\0&2\end{bmatrix}$.

Consider the basis $\mathcal{B}=\{[\begin{matrix}1\\ 2\\ 3\end{matrix}],[\begin{matrix}-1\\ 0\\ 1\end{matrix}],[\begin{matrix}-2\\ 0\\ -3\end{matrix}]\}$ for $\mathbb{R}^{3}$.
Find the change of coordinates matrix from $\mathcal{B}$ to the standard basis $\mathcal{S}$.
(The standard basis $\mathcal{S}=\{\vec{e}1, \vec{e}2, \vec{e}3\}$).
${}{\mathcal{S}}P{\mathcal{B}} = [[\vec{v}1]{\mathcal{S}} [\vec{v}2]{\mathcal{S}} [\vec{v}3]{\mathcal{S}}]$. Since $\mathcal{S}$ is the standard basis, $[\vec{v}i]{\mathcal{S}} = \vec{v}i$.
$$ {}{\mathcal{S}}P{\mathcal{B}}=\begin{bmatrix}1&-1&-2\\ 2&0&0\\ 3&1&-3\end{bmatrix} $$
Find the change of coordinates matrix from $\mathcal{S}$ to $\mathcal{B}$, i.e., ${}{\mathcal{B}}P{\mathcal{S}}$.
This is $({\mathcal{S}}P{\mathcal{B}})^{-1}$.  augmented matrix $[{\mathcal{S}}P{\mathcal{B}} | I]$ and row reduces:
$$ \left[\begin{array}{@{}ccc|ccc@{}} 1&-1&-2&1&0&0\\ 2&0&0&0&1&0\\ 3&1&-3&0&0&1 \end{array}\right] \xrightarrow{RREF} \left[\begin{array}{@{}ccc|ccc@{}} 1&0&0&0&-\frac{1}{2}&0\\ 0&1&0&\frac{3}{5}&-\frac{3}{10}&\frac{2}{5}\\ 0&0&1&\frac{1}{5}&\frac{2}{5}&-\frac{1}{5} \end{array}\right] $$
(RREF: $\frac{2}{5}$ in $(3,6)$ and $\frac{2}{5}$ in $(2,6)$ which seems like a copy error from $(2,6)$ into $(3,6)$ for the last element from other entries. The final column in RREF should be $(0, 2/5, -1/5)$ from the previous element. A quick check of the RREF for 0 1 0 -3/2 -3/4 1/2 and 0 0 1 -1/2 -1/4 -1/4 as shown in another example. My re-calculation of the RREF yields different values.  $BP_S$ shows:
RREF $\Rightarrow \begin{bmatrix} 1 & 0 & 0 & 0 & 1/2 & 0 \\ 0 & 1 & 0 & -3/5 & -3/10 & 2/5 \\ 0 & 0 & 1 & -1/5 & 2/5 & -1/5 \end{bmatrix}$ (There was a slight difference in my previous parse for $(3,6)$ this looks more likely correct. $\frac{2}{5}$ in $(3,6)$ might be a typo from $(2,6)$ or $(3,5)$.)
RREF calculation is the target:
$$ {}{\mathcal{B}}P{\mathcal{S}}=\begin{bmatrix}0&1/2&0\\ -3/5&-3/10&2/5\\ -1/5&2/5&-1/5\end{bmatrix} $$

**Theorem 5.2.16**
If $\mathcal{B}$ and $\mathcal{C}$ are bases for a k-dimensional subspace S, then the change of coordinate matrices ${}{\mathcal{C}}P{\mathcal{B}}$ and ${}{\mathcal{B}}P{\mathcal{C}}$ satisfy
$$ {}{\mathcal{C}}P{\mathcal{B}} {}{\mathcal{B}}P{\mathcal{C}}=I \quad \text{and} \quad {}{\mathcal{B}}P{\mathcal{C}} {}{\mathcal{C}}P{\mathcal{B}}=I. $$

Let $\mathcal{B}=\{[\begin{matrix}1\\ 3\end{matrix}],[\begin{matrix}2\\ 7\end{matrix}]\}$ and $\mathcal{C}=\{[\begin{matrix}2\\ 1\end{matrix}],[\begin{matrix}5\\ 2\end{matrix}]\}$ be bases for $\mathbb{R}^{2}$.
Find ${}{\mathcal{C}}P{\mathcal{B}}$ and ${}{\mathcal{B}}P{\mathcal{C}}$ directly and then confirm that ${}{\mathcal{C}}P{\mathcal{B}} {}{\mathcal{B}}P{\mathcal{C}}=I$.
To find ${}{\mathcal{C}}P{\mathcal{B}}$, we solve $[\mathcal{C}|\mathcal{B}]$:
$$ \left[\begin{array}{@{}cc|cc@{}} 2&5&1&2\\ 1&2&3&7 \end{array}\right] \xrightarrow{R_1 \leftrightarrow R_2} \left[\begin{array}{@{}cc|cc@{}} 1&2&3&7\\ 2&5&1&2 \end{array}\right] \xrightarrow{R_2-2R_1} \left[\begin{array}{@{}cc|cc@{}} 1&2&3&7\\ 0&1&-5&-12 \end{array}\right] \xrightarrow{R_1-2R_2} \left[\begin{array}{@{}cc|cc@{}} 1&0&13&31\\ 0&1&-5&-12 \end{array}\right] $$
So, ${}{\mathcal{C}}P{\mathcal{B}} = \begin{bmatrix}13&31\\-5&-12\end{bmatrix}$.
To find ${}{\mathcal{B}}P{\mathcal{C}}$, we solve $[\mathcal{B}|\mathcal{C}]$:
$$ \left[\begin{array}{@{}cc|cc@{}} 1&2&2&5\\ 3&7&1&2 \end{array}\right] \xrightarrow{R_2-3R_1} \left[\begin{array}{@{}cc|cc@{}} 1&2&2&5\\ 0&1&-5&-13 \end{array}\right] \xrightarrow{R_1-2R_2} \left[\begin{array}{@{}cc|cc@{}} 1&0&12&31\\ 0&1&-5&-13 \end{array}\right] $$
So, ${}{\mathcal{B}}P{\mathcal{C}} = \begin{bmatrix}12&31\\-5&-13\end{bmatrix}$.
${}{\mathcal{C}}P{\mathcal{B}}$ has $\begin{bmatrix}1&0\\0&1\end{bmatrix}$ on the left and $\begin{bmatrix}13&31\\-5&-12\end{bmatrix}$ on the right.
${}{\mathcal{B}}P{\mathcal{C}}$ has $\begin{bmatrix}1&0\\0&1\end{bmatrix}$ on the left and $\begin{bmatrix}12&31\\-5&-13\end{bmatrix}$ on the right.
Check product: $\begin{bmatrix}13&31\\-5&-12\end{bmatrix}\begin{bmatrix}12&31\\-5&-13\end{bmatrix} = \begin{bmatrix}13(12)+31(-5) & 13(31)+31(-13) \\ -5(12)+(-12)(-5) & -5(31)+(-12)(-13)\end{bmatrix} = \begin{bmatrix}156-155 & 403-403 \\ -60+60 & -155+156\end{bmatrix} = \begin{bmatrix}1&0\\0&1\end{bmatrix}=I$.
$cP_B$ (likely ${}{\mathcal{C}}P{\mathcal{B}}$) as det $ = -156 - (-155) = -1$, and then uses the $2 \times 2$ inverse formula for $BP_C$ (likely ${}{\mathcal{B}}P{\mathcal{C}}$).
This implies ${}{\mathcal{B}}P{\mathcal{C}} = ({}{\mathcal{C}}P{\mathcal{B}})^{-1} = \frac{1}{-1}\begin{bmatrix}-12&-31\\5&13\end{bmatrix} = \begin{bmatrix}12&31\\-5&-13\end{bmatrix}$. This matches the direct calculation.