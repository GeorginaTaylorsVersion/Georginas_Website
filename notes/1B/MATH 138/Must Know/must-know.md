- **Trigonometric Substitution:** Substitutions based on the form of the integrand:

    | Integral contain | Substitution | Domain | Identity |
    |---|---|---|---|
    | $\sqrt{a^2 - x^2}$ | $x = a \sin \theta$ | $\theta \in \left[-\tfrac{\pi}{2}, \tfrac{\pi}{2}\right]$ | $1 - \sin^2\theta = \cos^2\theta$ |
    | $\sqrt{x^2 - a^2}$ | $x = a \sec \theta$ | $\theta \in \left[0, \tfrac{\pi}{2}\right) \cup \left[\pi, \tfrac{3\pi}{2}\right)$ | $\sec^2\theta - 1 = \tan^2\theta$ |
    | $\sqrt{x^2 + a^2}$ | $x = a \tan \theta$ | $\theta \in \left(-\tfrac{\pi}{2}, \tfrac{\pi}{2}\right)$ | $1 + \tan^2\theta = \sec^2\theta$ |

- **Partial Fraction Decomposition (PFD):** Method to decompose rational functions $\frac{P(x)}{Q(x)}$ into simpler fractions based on the factorization of the denominator Q(x). If $\deg P(x) \ge \deg Q(x)$, perform polynomial long division first.
  Examples of forms: $\frac{A}{ax+b}$, $\frac{A}{(ax+b)^n}$, $\frac{Ax+B}{ax^2+bx+c}$ (for irreducible quadratic), $\frac{A_1x+B_1}{ax^2+bx+c} + \dots + \frac{A_nx+B_n}{(ax^2+bx+c)^n}$.
- **Improper Integrals:** Evaluated using limits.
  - **Type 1 (infinite limits):**
  $\int_a^\infty f(x) dx = \lim_{t\to\infty} \int_a^t f(x) dx$
  $\int_{-\infty}^b f(x) dx = \lim_{t\to-\infty} \int_t^b f(x) dx$
  $\int_{-\infty}^\infty f(x) dx = \int_{-\infty}^c f(x) dx + \int_c^\infty f(x) dx$
  - **Type 2 (discontinuities within interval):** Split the integral at the point of discontinuity c.
  $\int_a^b f(x) dx = \lim_{t\to c^-} \int_a^t f(x) dx + \lim_{s\to c^+} \int_s^b f(x) dx$
  - **p-Integral Test (Type 1 at 1):** $\int_1^\infty \frac{1}{x^p} dx$ converges if p > 1, diverges if $p \le 1$.
  - **p-Integral Test (Type 2 at a):** $\int_a^b \frac{1}{(x-a)^p} dx$ converges if p < 1, diverges if $p \ge 1$.

**Area Between Curves:**

- Area between $y=y_{upper}(x)$ and $y=y_{lower}(x)$ for $x \in [a, b]$: $\int_a^b (y_{upper}(x) - y_{lower}(x)) dx$.
- Area between $x=x_{right}(y)$ and $x=x_{left}(y)$ for $y \in [c, d]$: $\int_c^d (x_{right}(y) - x_{left}(y)) dy$.

**Volumes of Solids of Revolution:**

- **Disk Method** (revolution about x-axis): $V = \int_a^b \pi [f(x)]^2 dx$.
- **Washer Method** (revolution about x-axis): $V = \int_a^b \pi ([r_{outer}(x)]^2 - [r_{inner}(x)]^2) dx$.
- **Cylindrical Shells** (revolution about y-axis): $V = \int_a^b 2\pi x f(x) dx$ (for region under f(x)>0 on [a,b] with $a \ge 0$).
General forms depend on the axis of revolution and whether using dx or dy.

---

## Differential Equations 📈

**Separable DEs:** $\frac{dy}{dx} = g(x)h(y)$. Can be rewritten as $\frac{1}{h(y)} dy = g(x) dx$ and integrated: $\int \frac{1}{h(y)} dy = \int g(x) dx$. Remember to check for singular solutions h(y)=0.

**Linear First-Order DEs:** Form y' + P(x)y = Q(x) (standard form).

1. Find the integrating factor $\mu(x) = e^{\int P(x) dx}$.
2. Multiply the standard form DE by $\mu(x)$ to get $(\mu(x)y)' = \mu(x)Q(x)$.
3. Integrate both sides: $\mu(x)y = \int \mu(x)Q(x) dx$.
4. Solve for y: $y = \frac{1}{\mu(x)} \int \mu(x)Q(x) dx$.

**Common Applications:**

- **Newton's Law of Cooling/Heating:** $\frac{dT}{dt} = -k(T - T_a)$, where $T_a$ is the ambient temperature.
- **Logistic Growth:** $\frac{dP}{dt} = kP\left(1 - \frac{P}{M}\right)$, where M is the carrying capacity.

---

## Numerical Series 🔢

**Definition of a Series:** $\sum_{n=1}^\infty a_n = \lim_{m\to\infty} S_m$, where $S_m = \sum_{n=1}^m a_n$ is the m-th partial sum.

**Geometric Series:** $\sum_{n=0}^\infty ar^n = a + ar + ar^2 + \dots$

- Converges to $\frac{a}{1-r}$ if $|r| < 1$.
- Diverges if $|r| \ge 1$.

**Tests for Convergence/Divergence:**

- **Divergence Test:** If $\sum a_n$ converges, then $\lim_{n\to\infty} a_n = 0$. Equivalently, if $\lim_{n\to\infty} a_n \ne 0$ or does not exist, then $\sum a_n$ diverges. (Converse is false: $\lim_{n\to\infty} a_n = 0$ does not guarantee convergence).
- **Integral Test:** If f is positive, decreasing, and continuous on $[k, \infty)$, then $\sum_{n=k}^\infty a_n$ converges if and only if $\int_k^\infty f(x) dx$ converges (where $a_n = f(n)$).
- **p-Series:** $\sum_{n=1}^\infty \frac{1}{n^p}$. Converges if p > 1, diverges if $p \le 1$.
- **Comparison Test:** If $0 \le a_n \le b_n$ for $n \ge k$:
    1. If $\sum b_n$ converges, then $\sum a_n$ converges.
    2. If $\sum a_n$ diverges, then $\sum b_n$ diverges.
- **Limit Comparison Test:** If $a_n > 0$, $b_n > 0$, and $\lim_{n\to\infty} \frac{a_n}{b_n} = L$:
    1. If $0 < L < \infty$, then $\sum a_n$ and $\sum b_n$ either both converge or both diverge.
    2. If L = 0 and $\sum b_n$ converges, then $\sum a_n$ converges.
    3. If $L = \infty$ and $\sum b_n$ diverges, then $\sum a_n$ diverges.
- **Alternating Series Test (AST):** For $\sum_{n=1}^\infty (-1)^n a_n$ or $\sum_{n=1}^\infty (-1)^{n+1} a_n$, if $a_n > 0$, $a_n$ is decreasing, and $\lim_{n\to\infty} a_n = 0$, then the series converges.
- **Absolute Convergence:** $\sum a_n$ converges absolutely if $\sum |a_n|$ converges. Absolute convergence implies convergence.
- **Conditional Convergence:** $\sum a_n$ converges conditionally if $\sum a_n$ converges but $\sum |a_n|$ diverges.
- **Ratio Test:** Let $\lim_{n\to\infty} \left|\frac{a_{n+1}}{a_n}\right| = L$.
    - If L < 1, series converges absolutely.
    - If L > 1 or $L=\infty$, series diverges.
    - If L=1, test is inconclusive.
- **Root Test:** Let $\lim_{n\to\infty} \sqrt[n]{|a_n|} = L$.
    - If L < 1, series converges absolutely.
    - If L > 1 or $L=\infty$, series diverges.
    - If L=1, test is inconclusive.
- **Alternating Series Estimation Theorem:** For a convergent alternating series satisfying AST conditions with sum S and partial sum $S_m$, the error $|S - S_m| \le a_{m+1}$.

---

## Power Series 💡

**General Form of a Power Series centered at a:** $\sum_{n=0}^\infty c_n (x-a)^n$.

- **Radius of Convergence (R):** Determined by Ratio or Root Test on the series of absolute values $\sum |c_n (x-a)^n|$. The series converges for $|x-a| < R$.
- **Interval of Convergence (IOC):** Determined by the radius of convergence and checking convergence at the endpoints $x = a \pm R$.

**Power Series Representation from Geometric Series:**
 $\frac{1}{1-r} = \sum_{n=0}^\infty r^n \quad \text{for } |r| < 1$
Substitute expressions for r to find series for other functions.

**Differentiation and Integration of Power Series:** If $f(x) = \sum_{n=0}^\infty c_n (x-a)^n$ has radius of convergence R > 0, then:
$f'(x) = \sum_{n=1}^\infty n c_n (x-a)^{n-1}$
$\int f(x) dx = \sum_{n=0}^\infty c_n \frac{(x-a)^{n+1}}{n+1} + C$
Both resulting series have the same radius of convergence R.

**Taylor Series centered at a:**
$\sum_{n=0}^\infty \frac{f^{(n)}(a)}{n!} (x-a)^n$
**Maclaurin Series:** Taylor series centered at a=0.

**Taylor Polynomial of degree m centered at a:**
$T_{m,a}(x) = \sum_{n=0}^m \frac{f^{(n)}(a)}{n!} (x-a)^n$

**Taylor Remainder (Lagrange Form):** $R_{m,a}(x) = f(x) - T_{m,a}(x)$. For some c between a and x:
$R_{m,a}(x) = \frac{f^{(m+1)}(c)}{(m+1)!} (x-a)^{m+1}$

**Taylor's Inequality:** If $|f^{(m+1)}(x)| \le K$ for x in an interval containing a:
$|R_{m,a}(x)| \le \frac{K|x-a|^{m+1}}{(m+1)!}$

**Binomial Series:** For any real number $\alpha$,
$(1+x)^\alpha = \sum_{n=0}^\infty \binom{\alpha}{n} x^n \quad \text{for } |x| < 1$
where the binomial coefficient is $\binom{\alpha}{n} = \frac{\alpha(\alpha-1)\dots(\alpha-n+1)}{n!}$. 