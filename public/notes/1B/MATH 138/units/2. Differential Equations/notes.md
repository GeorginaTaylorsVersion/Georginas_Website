# 2. Differential Equations

### **2.1 Introduction to Differential Equations**

**2.1.1 Differential Equation**

Differential equation (DE) - an equation involving an unknown function and its derivatives. 

Ordinary differential equation (ODE) - a differential equation involving single-variable functions,

Partial differential equation (PDE) - a differential equation involving multivariable functions (i.e., functions with multiple inputs).

$F\left(x,y,y^\prime ,y^{\prime \prime },\ldots , y^{(n)}\right)=0$ 

**2.1.2 Order of a DE** 

The order of a DE is the order of the highest derivative that appears in the equation.

**2.1.8 General Solution, Particular Solution**

General solution - the complete collection of solutions to a DE, including any arbitrary constants (+C)

Particular solution - all arbitrary constants have been specified

e.g. the general solution to the DE $y^\prime =y$ is $y=Ce^{x}$, $C\in \mathbb {R}$.  By selecting a value of C, we obtain a particular solution to the DE. (for instance, $y=\pi e^ x$ is a particular solution to the DE obtained by setting $C=\pi$)

**2.1.9 Initial Value Problem**

A differential equation together with one or more initial conditions is known as an initial value problem or IVP. (Solve for C)

**Direction Fields**

The specific first-order DEs we will consider can all be expressed in the form $\frac{dy}{dx}=F(x,y)$. The DE tells us the slope of the tangent line to its solution curves at each point (x,y). We can visualize these slopes in a 2D plot known as a direction field.

trick: is the value of $y^\prime$ dependent on the value of x? If no, eliminate all equations with x, and vice versa.

e.g. Consider the DE $\frac{dy}{dx}=x^2y^2+1$. The DE may not appear to be *too* complicated (after all, it only involves positive integer powers of x and y), but it turns out this DE cannot be solved analytically for exact solutions. Still, we can plot its direction field to get an idea of what the solution curves would need to look like.

![image1.png](/notes/1B/MATH 138/units/2. Differential Equations/image1.png)

From the direction field, it appears that all the solution curves are increasing functions of x. We can see from the DE that this must be the case. Indeed, if $y=y(x)$ is a solution, then the derivative of y is equal to $x^2y^2+1$, which is positive. Since $y^\prime (x) \gt 0$ for all x, it follows that y is an increasing function.

### 2.2 Separable Differential Equations

**2.2.1 Separable DE**

A first-order differential equation is said to be separable if it can be written in the form $\frac{dy}{dx} = g(x)h(y)$

**Method: Solving a Separable DE** 

Below we present the steps to solve a separable differential equation, $\frac{dy}{dx} = g(x)h(y)$. This method is known as separation of variables.

1. Determine any solutions $y$ with $h(y) = 0$.
2. Find the solutions $y$ where $h(y) \neq 0$ by evaluating the integrals $\int \frac{1}{h(y)} \, dy = \int g(x) \, dx$. 
If possible, isolate $y$ as a function of $x$ in the resulting equation.

The general solution is the collection of all solutions obtained in Step 1 together with all solutions obtained in Step 2.

**Remark**: An easy way to remember the process for solving $\frac{dy}{dx}=g(x)h(y)$ is to think of the derivative notation $\frac{dy}{dx}$ like a fraction. If we divide both sides of $\frac{dy}{dx}=g(x)h(y)$ by $h(y)$ and imagine multiplying by the differential $dx$, we obtain $\frac{1}{h(y)}\, dy=g(x)\, dx$. Once we have all y terms on the left-hand side and all x terms of the right-hand side, we can integrate to obtain the solutions in step 2.

e.g. Solve the initial value problem $y^\prime =4x(y-1), y(0)=3$

$\begin{aligned} \int \frac{1}{y-1}\, dy=\int 4x\, dx & \quad \Longrightarrow \quad \ln |y-1|=2x^2+C\\ & \quad \Longrightarrow \quad |y-1|=e^{2x^2+C}=e^ Ce^{2x^2}\\ & \quad \Longrightarrow \quad y-1 = \pm e^ Ce^{2x^2}\\ & \quad \Longrightarrow \quad y=1+De^{2x^2} \end{aligned}$

e.g. Find the general solution to the non-separable DE $\frac{dy}{dx}=(x+y)^2-1$ using the substitution $v=x+y$. 

With $v=x+y$, we have $y=v-x$, and hence $\displaystyle \frac{dy}{dx}=\frac{d}{dx}\left(v-x\right)=\frac{dv}{dx}-1$. 
The DE can therefore be rewritten as 
$\begin{aligned} \frac{dy}{dx}=(x+y)^2-1 & \quad \Longrightarrow \quad \frac{dv}{dx}-1=v^2-1 \\ & \quad \Longrightarrow \quad \frac{dv}{dx}=v^2, \end{aligned}$

which is a separable DE in terms of $x$ and v. One solution is $v\equiv 0$. For $v\not\equiv 0$,  we have
$\begin{aligned} \int \frac{1}{v^2}\, dv = \int 1\, dx & \quad \Longrightarrow \quad \frac{-1}{v} = x+C\\ & \quad \Longrightarrow \quad v=\frac{-1}{x+C}\end{aligned}$
Of course, we are ultimately interested in the functions $y$ that satisfy the original DE. We can obtain these functions from the solutions $v$ found above using the relationship $y=v-x$. Specifically,
$\begin{array}{rcl} \displaystyle v\equiv 0& \quad \Longrightarrow \quad & \displaystyle y=v-x=-x, \\ \displaystyle v=\frac{-1}{x+C}& \quad \Longrightarrow \quad & \displaystyle y=v-x=\frac{-1}{x+C}-x \end{array}$
Thus, the general solution to $\frac{dy}{dx}=(x^2+y^2)-1$ is $y=-x$ or $\quad y=\frac{-1}{x+C}-x$, $C\in \mathbb {R}$. 
Note that $y=-x$ is a singular solution, as it is not among the solutions $y=\frac{-1}{x+C}-x$ for any $C\in \mathbb {R}$. 

**2.2.7 Singular Solution to a DE**

A solution to a DE that is separate from a family of solutions to the DE is called a singular solution.

**2.2.3 An Application: Mixing Problems**

Imagine a tank filled with a thoroughly-mixed solution (e.g., brine, sugar water, etc.) at some initial level of concentration. The solution drains from the tank at a certain rate and, at the same time, more of the solution is pumped into the tank at a certain (possibly different) rate. The incoming solution may have a different concentration than the solution in the tank initially.

![image1.png](/notes/1B/MATH 138/units/2. Differential Equations/image1.png)

If $A(t)$ denotes the amount of solute (e.g, salt, sugar, etc.) present in the tank at time $t$, then the rate of change of $A(t)$ with respect to $t$ is equal to the rate at which the substance enters the tank minus the rate at which the substance leaves the tank. This observation can be used to construct a separable DE to model the scenario: $\frac{dA}{dt}=\left(\begin{array}{c} \text {rate of}\\ \text {substance in} \end{array}\right)-\left(\begin{array}{c} \text {rate of}\\ \text {substance out} \end{array}\right)$. 

### 2.3 Linear First-Order Differential Equations

**2.3.1 Linear DE**

A linear differential equation of order n has the form 
$A_n(x)\,y^{(n)} + A_{n-1}(x)\,y^{(n-1)} + \cdots + A_1(x)\,y' + A_0(x)\,y = B(x)$ where $A_n(x) \neq 0$.

**2.3.4 Standard Form** 

A first-order linear DE of the form $y' + P(x)\,y = Q(x)$is said to be in standard form.

**2.3.6 Integrating Factor** 

Given a DE of the form $y' + P(x)\,y = Q(x)$, the function $\mu(x) = e^{\int P(x)\,dx}$ is called an integrating factor for the DE.

**Method**: Solving a First Order Linear DE

To solve a first-order linear DE, $A_1(x)y' + A_0(x)y = B(x)$:

1. Divide by $A_1(x)$ to write the DE in standard form: $y' + P(x)\,y = Q(x)$.
2. Multiply both sides of the equation by the integrating factor $\mu(x) = e^{\int P(x)\,dx}$.
3. Rewrite the left-hand side of the resulting equation as $\bigl(\mu(x)\,y\bigr)'$.
4. Integrate both sides of the equation with respect to $x$.
5. Isolate $y$.

### 2.4 Applications of Differential Equations

**2.4.1 The Newton's Law of Heating/Cooling DE and its Solution**

If $T = T(t)$ denotes the temperature of an object as a function of time and $T$ varies according to Newton's Law of Cooling, then 
$\frac{dT}{dt} = -k\bigl(T - T_s\bigr)$, where $T_s$ is the temperature of the object's surroundings. The solutions to this DE are $T(t) = T_s + A\,e^{-kt}$ where $A$ is a constant.

e.g. A bowl of curry is heated to $45^\circ \mathrm{C}$ and placed into a $25^\circ \mathrm{C}$ room to cool. After $t=1$ hour, the curry has cooled to $35^\circ \mathrm{C}$. Determine the temperature of the curry at $t=2$ hours.

Let $T(t)$ denote the temperature of the curry at time t hours. Assuming that the temperature varies according to Newton's Law of Cooling, we must solve the initial value problem $\frac{dT}{dt}=-k(T-25),\quad T(0)=45,\quad T(1)=35.$

From Theorem 2.4.1, the solutions to the DE will have the form $T(t)=25+Ae^{-kt}$.

In order to calculate $T(2)$ – the temperature after $t=2$ hours – we must first determine the constants A and k using the initial conditions. Using $T(0)=45$, we have $45=25+Ae^{-k(0)}=25+A$, hence $A=20$. Using $T(1)=35$, we find that $35=25+20e^{-k(1)}$, and hence $e^{-k}=\frac{35-25}{20}=\frac{1}{2}$. It follows that $k=-\ln \left(\frac{1}{2}\right)$. 

Therefore, the temperature of the curry at time t is $T(t)=25+20e^{\ln \left(\frac{1}{2}\right)t}$, or, equivalently, $T(t)=25+20\left(\frac{1}{2}\right)^ t$. 

Thus, at $t=2$ hours, the temperature of the curry will be $T(2)=25+20\left(\frac{1}{2}\right)^2=25+20\left(\frac{1}{4}\right)=30^\circ \mathrm{C}$. 

**2.4.3 The Exponential Growth/Decay DE and its Solutions**

The solutions to the exponential growth DE $\frac{dP}{dt} = kP$ are given by $P(t) = A e^{kt}$, where $A = P(0)$.

e.g. Carbon-14 is a radioactive compound that exists in all living organisms. It decays exponentially with a half life of around 5730 years, meaning that after this amount of time, half of the atoms in a carbon-14 sample will have decayed.

An organism's carbon-14 supply is constantly renewed while the organism is living, but no new carbon-14 is created after its death. Scientists can therefore use the amount of carbon-14 present in a deceased organism to estimate the amount time since its death. This process is known as carbon dating.

Given that an animal bone contains 20% of a normal supply of carbon-14, approximately how old is the bone?

Let $P(t)$ denote the percentage of carbon-14 remaining in the bone after t years. At $t = 0$, the bone contains $P(0)=100$ percent of its carbon-14 content; and since $P(t)$ exhibits exponential decay, it follows that $P(t)=100e^{kt}$for some constant k.

Since carbon-14 has a half-life of 5730 years, $P(5730)=50$ percent. We may use this condition to solve for k:

$\begin{aligned} P(5730)=50& \quad \Longrightarrow \quad 50=100e^{k(5730)}\\ & \quad \Longrightarrow \quad e^{5730k}=\frac{50}{100}=\frac{1}{2}\\ & \quad \Longrightarrow \quad k=\frac{1}{5730}\ln \left(\frac{1}{2}\right) \end{aligned}$

Therefore, we find that $P(t)=100e^{\frac{t}{5730}\ln \left(1/2\right)}=100\left(e^{\ln (1/2)}\right)^{t/5730}=100\left(\frac{1}{2}\right)^{t/5730}$.

We now wish to determine the value of t such that $P(t)=20$ percent. We have 

$\begin{aligned} P(t)=20 & \quad \Longrightarrow \quad 100\left(\frac{1}{2}\right)^{t/5730}=20\\ & \quad \Longrightarrow \quad \left(\frac{1}{2}\right)^{t/5730}=\frac{1}{5}\\ & \quad \Longrightarrow \quad \frac{t}{5730}=\log _{\frac{1}{2}}\left(\frac{1}{5}\right)\\ & \quad \Longrightarrow \quad t=5730\log _{\frac{1}{2}}\left(\frac{1}{5}\right)\approx 13304.65 \end{aligned}$Thus, the bone is approximately 13300 years old!

**2.4.6 The Logistic DE and its Solutions** 

Let $M$ denote the carrying capacity of a population. The solutions to the logistic DE $\frac{dP}{dt}=kP(1−\frac{P}{M})$ are given by  $P(t) = \frac{M}{1 + A e^{-kt}}$, where $A$ is a constant. Furthermore, if $P(0)$ is the initial population, then $A = \frac{M - P(0)}{P(0)}$.

e.g. Scientists placed 100 geese in an enclosed nature preserve. After 11 year, the population increased to 150. Assume the population grows logistically with a carrying capacity of 1500 geese.

1. Determine the population function, P(t).

The population function P(t) is a solution to the initial value problem 

$\frac{dP}{dt}=kP\left(1-\frac{P}{1500}\right),\quad P(0)=100,\quad P(1)=150$.

From the preceding theorem, we have $P(t)=\frac{1500}{1+Ae^{-kt}}$where, with $M=1500$ and $P(0)=100$, we calculate $A=\frac{M-P(0)}{P(0)}=\frac{1500-100}{100}=14$. 

Using $P(1)=150$, we find that $150=\frac{1500}{1+14e^{-k(1)}}$, hence, $1+14e^{-k}=\frac{1500}{150}=10$. 

It then follows that $e^{-k}=\frac{9}{14}$, so $k=-\ln \left(\frac{9}{14}\right)$. Therefore, $P(t)=\frac{1500}{1+14e^{\ln (9/14)t}}=\frac{1500}{1+14\left(\frac{9}{14}\right)^ t}$.

b. After how many years will the population reach 500 geese?

We wish to find t such that $P(t)=500$. Using our solution from (a), we solve $500=\frac{1500}{1+14\left(\frac{9}{14}\right)^ t}$, or, equivalently, $1+14\left(\frac{9}{14}\right)^ t=\frac{1500}{500}=3$. 

It follows that $\left(\frac{9}{14}\right)^ t=\frac{3-1}{14}=\frac{1}{7}$, hence $t=\log _{\frac{9}{14}}\left(\frac{1}{7}\right)=\frac{\ln \left(\frac{1}{7}\right)}{\ln \left(\frac{9}{14}\right)}\approx 4.4$. 

Thus, it will take approximately 4.4 years for the population to reach 500500 geese.