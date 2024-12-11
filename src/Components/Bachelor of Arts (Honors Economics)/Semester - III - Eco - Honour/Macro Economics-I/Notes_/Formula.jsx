import React from 'react';
import './Formula.css';

const Formula = ({ unit }) => {
    if(unit === 1){ 
        return (
            <div className="formula-container">
                <h2>National Income Formulas & Concepts 📊</h2>

                {/* Section 1: National Income Concepts & Flow */}
                <div className="formula-section">
                    <h3>1. National Income Concepts & Flow 📊💰</h3>
                    <p className="concept-intro">
                        Think of National Income as steps moving down a staircase.
                        Each step shows what happens to money as we calculate different levels of income.
                    </p>
                    <div className="flow-sequence">
                        GDP → GNP → NNP → NI → PI → DI
                    </div>

                    {/* Step 1: GDP */}
                    <div className="step-box">
                        <h4>Step 1: GDP (Gross Domestic Product) 🏭</h4>
                        <div className="formula-box">
                            <p className="concept-description">
                                👉 It is the total value of goods and services produced within the country.
                            </p>
                            <p className="main-formula">GDP = C + I + G + (X - M)</p>
                            <ul className="formula-breakdown">
                                <li>C → Consumption 🛒 (What households spend)</li>
                                <li>I → Investment 🏗️ (What businesses spend to grow)</li>
                                <li>G → Government Spending 🏛️ (Public goods like schools, roads)</li>
                                <li>X → Exports 🚢 (Goods sold to other countries)</li>
                                <li>M → Imports 🚚 (Goods bought from other countries)</li>
                            </ul>
                            <p className="fun-tip">
                                👣 Easy Tip: Remember CIG-EXIM → Cigarette Export-Import! 🚬🌍
                            </p>
                        </div>
                    </div>

                    {/* Step 2: GNP */}
                    <div className="step-box">
                        <h4>Step 2: GNP (Gross National Product) 🌍</h4>
                        <div className="formula-box">
                            <p className="concept-description">
                                👉 It is GDP plus income earned from abroad (like wages, profits) minus payments made to foreigners.
                            </p>
                            <p className="main-formula">GNP = GDP + Net Factor Income from Abroad (NFIA)</p>
                            <p className="sub-formula">NFIA = Income earned from abroad - Income paid to foreigners 🌍💰</p>
                            <p className="fun-tip">
                                👣 Easy Tip: "GNP adds the world 🌍 → GDP + income from abroad!"
                            </p>
                        </div>
                    </div>

                    {/* Step 3: NNP */}
                    <div className="step-box">
                        <h4>Step 3: NNP (Net National Product) 🛠️</h4>
                        <div className="formula-box">
                            <p className="concept-description">
                                👉 When machines and tools get old, they lose value. This is called depreciation.
                            </p>
                            <p className="main-formula">NNP = GNP - Depreciation</p>
                            <p className="fun-tip">
                                👣 Easy Tip: "Think of GNP losing value like an old phone 📱📉"
                            </p>
                        </div>
                    </div>

                    {/* Step 4: NI */}
                    <div className="step-box">
                        <h4>Step 4: NI (National Income) 💵</h4>
                        <div className="formula-box">
                            <p className="concept-description">
                                👉 To get the real income of the country, we subtract indirect taxes (GST, VAT) and add subsidies.
                            </p>
                            <p className="main-formula">NI = NNP - Indirect Taxes + Subsidies</p>
                            <ul className="formula-breakdown">
                                <li>Indirect Taxes: Taxes paid on goods & services 🛒</li>
                                <li>Subsidies: Help given by the government to reduce prices 🍚💰</li>
                            </ul>
                            <p className="fun-tip">
                                👣 Easy Tip: "Taxes reduce, subsidies add up to the final income! 💵"
                            </p>
                        </div>
                    </div>

                    {/* Step 5: PI */}
                    <div className="step-box">
                        <h4>Step 5: PI (Personal Income) 👨‍👩‍👧‍👦</h4>
                        <div className="formula-box">
                            <p className="concept-description">
                                👉 This shows the income of individuals after removing company profits and taxes but adding benefits.
                            </p>
                            <p className="main-formula">PI = NI - Corporate Taxes - Undistributed Profits + Transfer Payments</p>
                            <ul className="formula-breakdown">
                                <li>Corporate Taxes → Taxes paid by businesses 🏛️💼</li>
                                <li>Undistributed Profits → Profit not given as dividends 📊</li>
                                <li>Transfer Payments → Benefits like pensions, scholarships 🎓💰</li>
                            </ul>
                            <p className="fun-tip">
                                👣 Easy Tip: "Troubles like taxes get deducted, but benefits like pensions are added! 🎉"
                            </p>
                        </div>
                    </div>

                    {/* Step 6: DI */}
                    <div className="step-box">
                        <h4>Step 6: DI (Disposable Income) 💸</h4>
                        <div className="formula-box">
                            <p className="concept-description">
                                👉 The final income you can spend or save after paying personal taxes.
                            </p>
                            <p className="main-formula">DI = PI - Personal Taxes</p>
                            <p className="fun-tip">
                                👣 Easy Tip: "DI = Ready-to-use money after taxes! 🛍️💰"
                            </p>
                        </div>
                    </div>
                </div>

                {/* Section 2: National Income Measurement Methods */}
                <div className="formula-section">
                    <h3>2. National Income Measurement Methods 🧮</h3>
                    <div className="measurement-methods">
                        <div className="method-box">
                            <h4>Income Method 🧑‍💼</h4>
                            <p className="concept-description">
                                👉 Add up all incomes earned in a year.
                            </p>
                            <p className="main-formula">Wages + Rent + Interest + Profits = Total Income 💵</p>
                        </div>

                        <div className="method-box">
                            <h4>Expenditure Method 💸</h4>
                            <p className="concept-description">
                                👉 Add up total spending in a year.
                            </p>
                            <p className="main-formula">C + I + G + (X - M)</p>
                            <p>Consumption, Investment, Government spending, Net Exports</p>
                        </div>

                        <div className="method-box">
                            <h4>Output Method 🏗️</h4>
                            <p className="concept-description">
                                👉 Add up the value of goods and services produced in a year.
                            </p>
                        </div>
                        <p className="fun-tip">
                            👣 Easy Tip: Remember "I-E-O" → Income, Expenditure, Output!
                        </p>
                    </div>
                </div>

                {/* Section 3: Circular Flow of Income */}
                <div className="formula-section">
                    <h3>3. Circular Flow of Income 🔄💰</h3>
                    <p className="section-intro">The circular flow explains how money moves in an economy.</p>

                    <div className="circular-flow-box">
                        <h4>(1) Two-Sector Economy 🏠🏭</h4>
                        <p>Only Households and Firms:</p>
                        <div className="flow-diagram">
                            <p>Households → Give labor → Firms</p>
                            <p>Firms → Pay wages & goods → Households</p>
                        </div>
                        <p className="fun-tip">👣 Tip: "Ping-pong of money between households and businesses! 🏓"</p>
                    </div>

                    <div className="circular-flow-box">
                        <h4>(2) Three-Sector Economy 🏛️</h4>
                        <p>Government joins the flow:</p>
                        <div className="flow-diagram">
                            <p>Households & Firms → Pay Taxes → Government</p>
                            <p>Government → Provides public services → Households & Firms</p>
                        </div>
                        <p className="fun-tip">👣 Tip: "Taxes go in 🏛️, public services come out! 🚦🏠"</p>
                    </div>

                    <div className="circular-flow-box">
                        <h4>(3) Four-Sector Economy 🌍</h4>
                        <p>Foreign Sector (Global Economy) joins:</p>
                        <div className="flow-diagram">
                            <p>Exports → Money comes in 🚢</p>
                            <p>Imports → Money goes out 🚚</p>
                        </div>
                        <p className="fun-tip">👣 Tip: "Exports bring cash 💰, imports send it out 🌍."</p>
                    </div>
                </div>

                {/* Section 4: Easy Formulas Recap */}
                <div className="formula-section">
                    <h3>4. Easy Formulas Recap 📋✨</h3>
                    <div className="formula-recap-box">
                        <ul className="formula-list">
                            <li>GDP = C + I + G + (X - M)</li>
                            <li>GNP = GDP + Income from Abroad</li>
                            <li>NNP = GNP - Depreciation</li>
                            <li>NI = NNP - Indirect Taxes + Subsidies</li>
                            <li>PI = NI - Corporate Taxes - Undistributed Profits + Transfer Payments</li>
                            <li>DI = PI - Personal Taxes</li>
                        </ul>
                    </div>
                </div>

                {/* Section 5: Fun One-Liner Recap */}
                <div className="formula-section">
                    <h3>5. Fun One-Liner Recap 🌟</h3>
                    <div className="one-liner-box">
                        <ul className="one-liner-list">
                            <li>GDP → "Total production inside the country 🏭"</li>
                            <li>GNP → "GDP + Income earned abroad 🌍"</li>
                            <li>NNP → "GNP after tools get old 🛠️📉"</li>
                            <li>NI → "Income after taxes and subsidies 💵"</li>
                            <li>PI → "What people get after company deductions 🎓💰"</li>
                            <li>DI → "What you take home after taxes 🛍️💸"</li>
                        </ul>
                    </div>

                    <div className="super-tip-box">
                        <h4>👣 Super Tip: Imagine money as a flow of water 💧</h4>
                        <p className="water-flow">
                            Starts as GDP (big pool 💧) → Adds world earnings (GNP) 🌍 → 
                            Removes old tools (NNP) 🛠️ → Adjusts taxes & subsidies (NI) 💰 → 
                            Reaches individuals (PI) 👨‍👩‍👧‍👦 → Ready to spend/save (DI) 💸
                        </p>
                    </div>
                </div>

                {/* Quick Visual Recap */}
                <div className="formula-section">
                    <h3>Quick Visual Recap 🔄</h3>
                    <div className="visual-flow-box">
                        <div className="flow-step">GDP → Production inside the country 🏭</div>
                        <div className="flow-arrow">↓</div>
                        <div className="flow-step">GNP → Adds income from other countries 🌍</div>
                        <div className="flow-arrow">↓</div>
                        <div className="flow-step">NNP → Subtracts depreciation (old tools) 🛠️</div>
                        <div className="flow-arrow">↓</div>
                        <div className="flow-step">NI → Adjusts taxes & subsidies 💵</div>
                        <div className="flow-arrow">↓</div>
                        <div className="flow-step">PI → Individual income 🎓💰</div>
                        <div className="flow-arrow">↓</div>
                        <div className="flow-step">DI → Final spendable money 🛍️💸</div>
                    </div>
                </div>

                {/* Easy Revision Checklist */}
                <div className="formula-section">
                    <h3>Easy Revision Checklist 📝</h3>
                    <div className="checklist-box">
                        <ul className="revision-list">
                            <li>Formulas: Learn step by step: GDP → GNP → NNP → NI → PI → DI</li>
                            <li>Methods: Income, Expenditure, Output</li>
                            <li>Circular Flow:
                                <ul>
                                    <li>2-Sector → Households & Firms 🏠🏭</li>
                                    <li>3-Sector → Add Government 🏛️</li>
                                    <li>4-Sector → Add Global Trade 🌍</li>
                                </ul>
                            </li>
                        </ul>
                    </div>

                    <div className="super-strategy-box">
                        <h4>Super Easy Recall Strategy 🚀</h4>
                        <p>
                            Visualize this as a "waterfall of money 💧" moving down step by step, 
                            while circular flow explains how it spins around the economy 🔄
                        </p>
                    </div>
                </div>
            </div>
        )
    }
    if(unit === 2){ 
        return (
            <div className="formula-container">
                <div className="formula-section">
                    <h2>Keynesian Economics Formulas & Concepts 📊</h2>

                    {/* 1. Aggregate Demand */}
                    <div className="formula-box">
                        <h4>1. Keynesian Aggregate Demand (AD) Formula 🛒</h4>
                        <p className="main-formula">AD = C + I + G + (X - M)</p>
                        <div className="formula-explanation">
                            <ul>
                                <li>C → Consumption (What people spend 🛍️)</li>
                                <li>I → Investment (Businesses buying machines, factories 🏗️)</li>
                                <li>G → Government Spending (Public services like roads, schools 🏛️)</li>
                                <li>X → Exports (Goods sold abroad 🚢)</li>
                                <li>M → Imports (Goods bought from abroad 🚚)</li>
                            </ul>
                            <div className="example-box">
                                <p>Example:</p>
                                <p>If:</p>
                                <p>C = ₹1000, I = ₹500, G = ₹700, X = ₹200, M = ₹100</p>
                                <p>Then:</p>
                                <p>AD = 1000 + 500 + 700 + (200 - 100)</p>
                                <p>AD = ₹2300</p>
                            </div>
                            <p>This tells us how much demand there is in the economy and helps plan economic growth. 🌱</p>
                        </div>
                    </div>

                    {/* 2. Savings and Investment */}
                    <div className="formula-box">
                        <h4>2. Savings and Investment Equality (S = I) 💰</h4>
                        <p className="main-formula">S = I</p>
                        <div className="formula-explanation">
                            <ul>
                                <li>S → Savings (Money people save)</li>
                                <li>I → Investment (Money spent by businesses on production)</li>
                            </ul>
                            <p><strong>Why?</strong></p>
                            <p>At equilibrium (balance in the economy), savings should always be equal to investment. This helps the economy stay stable. ⚖️</p>
                            <div className="example-box">
                                <p>Example:</p>
                                <p>If households save ₹500, and businesses invest ₹500 → The economy is balanced!</p>
                            </div>
                        </div>
                    </div>

                    {/* 3. Multiplier Effect */}
                    <div className="formula-box">
                        <h4>3. Multiplier Effect 🚀</h4>
                        <p className="main-formula">k = 1 / (1 - MPC)</p>
                        <div className="formula-explanation">
                            <ul>
                                <li>k → Multiplier (How much total income increases with extra spending)</li>
                                <li>MPC → Marginal Propensity to Consume (How much of extra income people spend)</li>
                            </ul>
                            <div className="example-box">
                                <p>Example:</p>
                                <p>If MPC = 0.8 (people spend 80% of extra income),</p>
                                <p>k = 1 / (1 - 0.8) = 5</p>
                                <p>If the government spends ₹100, the total income will increase by ₹500! 🎉</p>
                            </div>
                        </div>
                    </div>

                    {/* 4. Consumption Function */}
                    <div className="formula-box">
                        <h4>4. Consumption Function Formula 🛍️</h4>
                        <p className="main-formula">C = C₀ + MPC × Y</p>
                        <div className="formula-explanation">
                            <ul>
                                <li>C → Total Consumption</li>
                                <li>C₀ → Basic Consumption (Spending even without income)</li>
                                <li>MPC → Marginal Propensity to Consume</li>
                                <li>Y → Income</li>
                            </ul>
                            <div className="example-box">
                                <p>Example:</p>
                                <p>If:</p>
                                <p>C₀ = ₹200 (basic consumption),</p>
                                <p>MPC = 0.8,</p>
                                <p>Y = ₹1000 (Income):</p>
                                <p>Then,</p>
                                <p>C = 200 + 0.8 × 1000 = ₹1000</p>
                            </div>
                        </div>
                    </div>

                    {/* 5. Saving Function */}
                    <div className="formula-box">
                        <h4>5. Saving Function 💰</h4>
                        <p className="main-formula">S = Y - C</p>
                        <div className="formula-explanation">
                            <ul>
                                <li>S → Savings</li>
                                <li>Y → Income</li>
                                <li>C → Consumption</li>
                            </ul>
                            <p><strong>Why?</strong></p>
                            <p>This formula shows how much money is saved after people spend. The more people earn, the more they can save. 💸</p>
                        </div>
                    </div>

                    {/* 6. MPC and MPS Relationship */}
                    <div className="formula-box">
                        <h4>6. Relationship Between MPC and MPS 🔄</h4>
                        <p className="main-formula">MPC + MPS = 1</p>
                        <div className="formula-explanation">
                            <ul>
                                <li>MPC → Marginal Propensity to Consume</li>
                                <li>MPS → Marginal Propensity to Save</li>
                            </ul>
                            <div className="example-box">
                                <p>Example:</p>
                                <p>If MPC = 0.8, then</p>
                                <p>MPS = 1 - 0.8 = 0.2</p>
                                <p>This shows that 80% of income is spent, and 20% is saved. 💡</p>
                            </div>
                        </div>
                    </div>

                    {/* 7. Equilibrium Income */}
                    <div className="formula-box">
                        <h4>7. Equilibrium Income ⚖️</h4>
                        <p className="main-formula">Y = C + I + G</p>
                        <div className="formula-explanation">
                            <ul>
                                <li>Y → National Income (Total income in the economy)</li>
                                <li>C → Consumption (What people spend)</li>
                                <li>I → Investment (Business spending)</li>
                                <li>G → Government Spending (Public services)</li>
                            </ul>
                            <p><strong>Why?</strong></p>
                            <p>This formula shows when the economy is in equilibrium (balance). If income equals total spending, the economy is stable. 🏛️</p>
                        </div>
                    </div>

                    {/* Summary Section */}
                    <div className="summary-section">
                        <h4>Summary of Key Formulas 📝</h4>
                        <ul>
                            <li>Aggregate Demand (AD): AD = C + I + G + (X - M)</li>
                            <li>Savings & Investment: S = I</li>
                            <li>Multiplier Effect: k = 1 / (1 - MPC)</li>
                            <li>Consumption Function: C = C₀ + MPC × Y</li>
                            <li>Saving Function: S = Y - C</li>
                            <li>MPC & MPS Relationship: MPC + MPS = 1</li>
                            <li>Equilibrium Income: Y = C + I + G</li>
                        </ul>
                    </div>

                    {/* Fun Recall Tips */}
                    <div className="fun-tips-section">
                        <h4>🎉 Fun Recall Tips with Emojis 👣</h4>
                        <ul>
                            <li>AD Formula: "Think CIG-XM 🛒🚢 for Total Demand!"</li>
                            <li>Multiplier: "Magic spending grows big → 1 / (1 - MPC) 🚀!"</li>
                            <li>Consumption: "Start with C₀ and add MPC × Income 🛍️!"</li>
                            <li>Savings: "Save = Income - Spending 💰!"</li>
                            <li>MPC + MPS: "What's spent + saved = All income 🔄!"</li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
    if(unit === 3){ 
        return (
            <div className="formula-container">
                <h2>Consumption Theory Formulas 📊</h2>

                {/* 1. Consumption Function */}
                <div className="formula-box">
                    <h4>1. Consumption Function 🛍️</h4>
                    <p className="main-formula">C = C₀ + MPC × Y</p>
                    
                    <div className="formula-explanation">
                        <h5>Meaning:</h5>
                        <ul>
                            <li>C: Total consumption (how much you spend 💸)</li>
                            <li>C₀: Basic Consumption → Spending even with no income (like food, rent 🏠)</li>
                            <li>MPC: Marginal Propensity to Consume → How much of extra income you spend</li>
                            <li>Y: Total income (money earned 💵)</li>
                        </ul>

                        <div className="why-used">
                            <h5>Why is it used? 🧐</h5>
                            <ul>
                                <li>To understand how much people spend when income changes</li>
                                <li>Helps predict spending habits in the economy</li>
                            </ul>
                        </div>

                        <div className="example-box">
                            <h5>Example:</h5>
                            <p>If C₀ = ₹200 (Basic needs), MPC = 0.8, and Income = ₹1000:</p>
                            <p>→ C = 200 + 0.8 × 1000 = ₹1000</p>
                            <p>This means total spending = ₹1000</p>
                        </div>
                    </div>
                </div>

                {/* 2. Marginal Propensity to Consume */}
                <div className="formula-box">
                    <h4>2. Marginal Propensity to Consume (MPC) 💰</h4>
                    <p className="main-formula">MPC = ΔC / ΔY</p>

                    <div className="formula-explanation">
                        <ul>
                            <li>ΔC: Change in consumption (extra spending)</li>
                            <li>ΔY: Change in income (extra income)</li>
                        </ul>

                        <div className="why-used">
                            <h5>Why is it used? 🧐</h5>
                            <ul>
                                <li>To see how much of extra income people spend</li>
                                <li>Important for the multiplier effect (how spending grows the economy 🚀)</li>
                            </ul>
                        </div>

                        <div className="example-box">
                            <h5>Example:</h5>
                            <p>If income increases by ₹1000 and spending increases by ₹800 →</p>
                            <p>MPC = 800 / 1000 = 0.8</p>
                        </div>
                    </div>
                </div>

                {/* 3. Average Propensity to Consume */}
                <div className="formula-box">
                    <h4>3. Average Propensity to Consume (APC) 📊</h4>
                    <p className="main-formula">APC = C / Y</p>

                    <div className="formula-explanation">
                        <ul>
                            <li>C: Total Consumption (Total spending)</li>
                            <li>Y: Total Income</li>
                        </ul>

                        <div className="why-used">
                            <h5>Why is it used? 🧐</h5>
                            <ul>
                                <li>To find out how much of total income people spend</li>
                                <li>Helps understand spending habits at different income levels</li>
                            </ul>
                        </div>

                        <div className="example-box">
                            <h5>Example:</h5>
                            <p>If total income = ₹2000 and total spending = ₹1600:</p>
                            <p>APC = 1600 / 2000 = 0.8</p>
                            <p>This means 80% of income is spent</p>
                        </div>
                    </div>
                </div>

                {/* 4. Saving Function */}
                <div className="formula-box">
                    <h4>4. Saving Function 💰</h4>
                    <p className="main-formula">S = Y - C</p>

                    <div className="formula-explanation">
                        <ul>
                            <li>S: Savings (money kept aside 💰)</li>
                            <li>Y: Total Income</li>
                            <li>C: Total Consumption (spending)</li>
                        </ul>

                        <div className="why-used">
                            <h5>Why is it used? 🧐</h5>
                            <ul>
                                <li>To calculate how much income is saved after spending</li>
                                <li>Helps understand the saving habits of individuals</li>
                            </ul>
                        </div>

                        <div className="example-box">
                            <h5>Example:</h5>
                            <p>If Income = ₹1000, Consumption = ₹800:</p>
                            <p>S = 1000 - 800 = ₹200</p>
                            <p>So, savings = ₹200</p>
                        </div>
                    </div>
                </div>

                {/* 5. MPC and MPS Relationship */}
                <div className="formula-box">
                    <h4>5. Relationship Between MPC and MPS 🔄</h4>
                    <p className="main-formula">MPC + MPS = 1</p>

                    <div className="formula-explanation">
                        <ul>
                            <li>MPC: Marginal Propensity to Consume (spending part)</li>
                            <li>MPS: Marginal Propensity to Save (saving part)</li>
                        </ul>

                        <div className="why-used">
                            <h5>Why is it used? 🧐</h5>
                            <p>To show that income is either spent or saved → No income is wasted!</p>
                        </div>

                        <div className="example-box">
                            <h5>Example:</h5>
                            <p>If MPC = 0.8 → MPS = 1 - 0.8 = 0.2</p>
                            <p>This means:</p>
                            <ul>
                                <li>80% of extra income is spent 🛍️</li>
                                <li>20% of extra income is saved 💰</li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* 6. Multiplier Effect */}
                <div className="formula-box">
                    <h4>6. Multiplier Effect 🚀</h4>
                    <p className="main-formula">k = 1 / (1 - MPC)</p>

                    <div className="formula-explanation">
                        <ul>
                            <li>k: Multiplier (how much total income increases)</li>
                            <li>MPC: Marginal Propensity to Consume</li>
                        </ul>

                        <div className="why-used">
                            <h5>Why is it used? 🧐</h5>
                            <p>To show how one unit of spending grows into bigger income in the economy</p>
                        </div>

                        <div className="example-box">
                            <h5>Example:</h5>
                            <p>If MPC = 0.8:</p>
                            <p>k = 1 / (1 - 0.8) = 5</p>
                            <p>This means:</p>
                            <p>If Govt spends ₹100 → Total income grows by ₹500 (5 times)</p>
                        </div>
                    </div>
                </div>

                {/* 7. Equilibrium Income */}
                <div className="formula-box">
                    <h4>7. Equilibrium Income ⚖️</h4>
                    <p className="main-formula">Y = C + I + G</p>

                    <div className="formula-explanation">
                        <ul>
                            <li>Y: National Income (Total income in the economy 💵)</li>
                            <li>C: Consumption (Spending by people 🛍️)</li>
                            <li>I: Investment (Spending by businesses 🏗️)</li>
                            <li>G: Government Spending (Public services like roads, schools 🏛️)</li>
                        </ul>

                        <div className="why-used">
                            <h5>Why is it used? 🧐</h5>
                            <ul>
                                <li>To see if the economy is in balance</li>
                                <li>Helps find total income and spending levels</li>
                            </ul>
                        </div>

                        <div className="example-box">
                            <h5>Example:</h5>
                            <p>If Consumption = ₹1000, Investment = ₹500, Govt Spending = ₹700:</p>
                            <p>Y = 1000 + 500 + 700 = ₹2200</p>
                        </div>
                    </div>
                </div>

                {/* 8. Consumption vs Savings */}
                <div className="formula-box">
                    <h4>8. Consumption vs Savings 🏦</h4>
                    <div className="relationship-explanation">
                        <h5>MPC and MPS Relationship:</h5>
                        <p>MPC (Spending) + MPS (Saving) = 1</p>
                        
                        <div className="flowchart">
                            <h5>Flowchart 👣:</h5>
                            <p>Income ↑ → Part is Spent (MPC) + Part is Saved (MPS) 🔄</p>
                        </div>
                    </div>
                </div>

                {/* Super-Fun Recap */}
                <div className="recap-box">
                    <h4>Super-Fun Recap 🎯 with Formulas</h4>
                    <ul>
                        <li>Consumption Function: C = C₀ + MPC × Y 🛍️</li>
                        <li>MPC: ΔC / ΔY (Extra Income spent 💸)</li>
                        <li>APC: C / Y (Total Income spent 📊)</li>
                        <li>Saving Function: S = Y - C (What's left 💰)</li>
                        <li>MPC + MPS = 1: Spending + Saving 🔄</li>
                        <li>Multiplier: k = 1 / (1 - MPC) (Growth effect 🚀)</li>
                        <li>Equilibrium Income: Y = C + I + G (Balanced Economy ⚖️)</li>
                    </ul>

                    <div className="importance">
                        <h5>Why are these Formulas Important? 🎓</h5>
                        <ul>
                            <li>They show how people spend, save, and boost income in the economy</li>
                            <li>Helps economists and governments plan growth and stability 🚦</li>
                            <li>Makes it easy to predict how income changes affect spending and savings!</li>
                        </ul>
                    </div>

                    <div className="fun-tip">
                        <h5>Fun Tip to Remember 🎯:</h5>
                        <p>"Income flows into two buckets: Spend (MPC) 🛍️ or Save (MPS) 💰, and when the government spends, the income grows like MAGIC (Multiplier)! 🚀"</p>
                    </div>
                </div>
            </div>
        );
    }
    return null;
}

export default Formula;
