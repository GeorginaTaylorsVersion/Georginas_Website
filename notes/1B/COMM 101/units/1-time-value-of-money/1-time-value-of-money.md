# COMM 101

Status: Done
Professor: Peter Blake

### Unit 1: Time Value of Money

The **time value of money** refers to the concept that money has the ability to earn more money over time. This means that a dollar today is worth more than a dollar in the future because it can be invested to earn a return. To compare cash flows at different points in time, you must either compute their future value by **compounding** or their present value by **discounting**.

### Simple Interest

Simple interest is calculated solely on the **original principal amount**. The interest rate is applied to the principal, the simple interest rate, and the time the loan is outstanding.

- **Variables:**
    - **PV** (Present Value): The principal amount invested or loaned at the start of the time period (in $).
    - **r** (Interest Rate): The annual interest rate charged (in %).
    - **t** (Time): The time period the loan is outstanding (in years).
    - **I** (Interest): The interest charged or earned over the time period (in $).
    - **FV** (Future Value): The amount due by the end of the time period (in $).
- **Formulas:**
    - Interest Charged:
        
        ```
        I = PV * r * t
        
        ```
        
    - Future Value:
        
        ```
        FV = PV + I
        FV = PV * (1 + r * t)
        
        ```
        
- **Calculating the Number of Days:** In Canada, interest is charged for the day the loan was made **OR** the day it was repaid, but never both. The exact number of days is determined by reference to the calendar.

### Compound Interest - Single Payment

Compound interest is the type of investment where the investor earns (or borrower pays) interest on their **principal PLUS the accumulated interest**. This is also known as "interest on interest". The rate published by the bank is typically an **annual nominal rate**, which is then divided by the number of compounding periods per year to get the periodic rate.

- **Compounding Periods:** Different instruments use different compounding periods, such as semi-annually (twice per year), quarterly, monthly, or even daily.
- **Variables:**
    - **PV**: Present Value or Principal, the amount invested or lent.
    - **FV**: Future Value or Accumulated Value.
    - **m**: Number of compounding periods per year.
    - **n**: Total number of compounding periods (`n = m * number of years`).
    - **jm**: Nominal rate or yearly interest rate.
    - **i**: Interest rate per compounding period (`i = jm/m`).
- **Formulas:**
    - Future Value of a Single Payment:
        
        ```
        FV = PV * (1 + i)^n
        
        ```
        
    - Present Value of a Single Payment:
        
        ```
        PV = FV * (1 + i)^-n
        
        ```
        
- **Impact of Compounding Frequency:** The **more often** interest is compounded at the same nominal interest rate, the **higher the future value** will be. Conversely, the **lower the present value** will be for a given future amount.
- **Determining Rate or Time for a Single Payment:**
    - Solving for `i` (rate):
        
        ```
        i = (FV/PV)^(1/n) - 1
        
        ```
        
    - Solving for `n` (time):
        
        ```
        n = log(FV/PV) / log(1+i)
        
        ```
        

### Compound Interest - Simple Annuity

A **simple annuity** is an annuity where the **payment interval and the interest compounding period are the same**.

- **Types of Annuities:**
    - **Ordinary Annuity (Annuity-Immediate)**: Payments are made at the **end** of the payment interval.
    - **Annuity Due**: Payments are made at the **beginning** of the payment interval.
- **Variables:**
    - **FV**: Future or Accumulated Value.
    - **PV**: Present or Discounted Value.
    - **PMT**: Periodic payment made every interval.
    - **n**: Total number of compounding periods (also number of payments for a simple annuity).
    - **i**: Interest rate per compounding period.
- **Formulas:**
    - Future Value of a Simple Ordinary Annuity:
        
        ```
        FV = PMT * ((1+i)^n - 1) / i
        
        ```
        
    - Present Value of a Simple Ordinary Annuity:
        
        ```
        PV = PMT * (1 - (1+i)^-n) / i
        
        ```
        
    - Future Value of a Simple Annuity Due:
        
        ```
        FV = PMT * ((1+i)^n - 1) / i * (1+i)
        FV = (1+i) * sne
        
        ```
        
    - Present Value of a Simple Annuity Due:
        
        ```
        PV = PMT * (1 - (1+i)^-n) / i * (1+i)
        PV = (1+i) * ane
        
        ```
        
- **Applications:** The present value of an annuity has many useful applications, such as calculating the initial amount of a loan (PV of all payments must equal the loan amount), the cost of an annuity sold by an insurance company, or comparing cash vs. lease options for an asset.

### Perpetuities

A **perpetuity** is an annuity where the **equal payments continue forever**. The **accumulated value** of a perpetuity is meaningless as there is no end to payments, but its **present value does have meaning**. Examples include scholarship endowment funds and, theoretically, some common and preferred shares of corporations due to their infinite life.

- **Formula for Present Value of a Perpetuity (payments at the end of each period):**
    
    ```
    PV = PMT / i
    
    ```
    
- **Formula for Present Value of a Perpetuity (first payment immediately):**
    
    ```
    PV = PMT + (PMT / i)
    
    ```
    

### Growing Perpetuities

In some cases, such as with many common shares, the amount of the payment is expected to **grow by a constant percentage**. This is still an infinite geometric progression.

- **Formula for Present Value of a Growing Perpetuity:**
Where **PMT** is the amount of the **first payment**, **g** is the **growth rate** per period, and **i** is the **interest rate** per period. This formula applies as long as `i > g`.
    
    ```
    PV = PMT / (i - g)
    
    ```
    

### Growing Annuities

A **growing annuity** is an annuity where the **payments vary by a common percentage**. This is mathematically referred to as a geometric progression. It's used to value a series of future cash flows that are expected to grow at a consistent rate.

- **Key Variables**:
    - **PV** (Present Value): The present value or worth of the growing annuity today.
    - **PVA**: The present value of the annuity or the value of the first payment.
    - **n**: The number of periods or length of the annuity.
    - **r**: The discount or interest rate per period. A higher `r` decreases the present value.
    - **g**: The growth rate of the annuity or payments over time. A higher `g` increases the present value.
- **Formulas for Present Value of a Growing Annuity:**
(Note: The sources also mention `PV = C * ((1 - ((1+r)/(1+g))^n) / (r-g))` and for continuous compounding `PV = C * ((1 - e^(n * (r - g))) / (r - g))`).
    
    ```
    PV = PVA * ((1 - (1+g)^n) / (r-g))
    
    ```
    
- **Formula for Future Value of a Growing Annuity:**
    
    ```
    FV = PVA * (((1+r)^n - (1+g)^n) / (r-g))
    
    ```
    
- **Compounding:** Refers to the process where an investment's value increases as interest is earned on both the principal and previously earned interest.
- **Applications:** Crucial in corporate finance for evaluating investment projects, pricing financial assets (like bonds with growing coupon payments), and calculating foreseeable returns. Also used in personal finance for mortgage payments, retirement planning, and evaluating regular investments. 