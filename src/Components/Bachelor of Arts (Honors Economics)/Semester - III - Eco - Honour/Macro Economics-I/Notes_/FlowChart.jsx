import React from 'react';
import './FlowCharts.css';

const FlowChart = ({ unit }) => {
    if(unit === 1){
        return (
            <div className="flowchart-container">
                <h2 className="main-title">Economic Flow Charts 📊</h2>

                {/* 1. What is Macro Economics */}
                <div className="chart-section">
                    <h3 className="section-title">1. What is Macro Economics? 🤔</h3>
                    <div className="definition-box">
                        <p>Macro Economics = The study of the whole economy</p>
                    </div>

                    <h4>🚀 Big Concepts in Macro Economics</h4>
                    <div className="concepts-table">
                        <table>
                            <thead>
                                <tr>
                                    <th>Concept</th>
                                    <th>What it means</th>
                                    <th>Example</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>National Income 💰</td>
                                    <td>Total money a country earns</td>
                                    <td>India earns ₹100 crore</td>
                                </tr>
                                <tr>
                                    <td>Inflation 📈</td>
                                    <td>Prices rising</td>
                                    <td>Milk price goes from ₹50 to ₹60</td>
                                </tr>
                                <tr>
                                    <td>Unemployment 👷‍♂️</td>
                                    <td>People with no jobs</td>
                                    <td>1,000 people looking for jobs</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <div className="micro-macro-comparison">
                        <h4>Difference Between Micro & Macro Economics</h4>
                        <table>
                            <thead>
                                <tr>
                                    <th>Micro Economics 🏠</th>
                                    <th>Macro Economics 🌍</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Small parts of the economy</td>
                                    <td>Entire economy as a whole</td>
                                </tr>
                                <tr>
                                    <td>Example: Price of 1 phone 📱</td>
                                    <td>Example: Average price of goods 📊</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* 2. National Income Flow */}
                <div className="chart-section">
                    <h3 className="section-title">2. National Income Flow Chart 💰</h3>
                    <div className="flow-overview">
                        <p>GDP 🏭 → GNP 🌍 → NNP 🛠️ → NI 💵 → PI 👨‍👩‍👧‍👦 → DI 💸</p>
                    </div>

                    <div className="flow-steps">
                        {/* GDP Section */}
                        <div className="flow-box">
                            <h4>1. GDP (Gross Domestic Product) 🏭</h4>
                            <p>Total value of goods & services produced inside the country</p>
                            <div className="formula">
                                <p>📊 GDP = C + I + G + (X - M)</p>
                                <ul>
                                    <li>C = Consumption → Buying food 🍔</li>
                                    <li>I = Investment → Machines for business 🏗️</li>
                                    <li>G = Government spending → Schools 🏫</li>
                                    <li>X = Exports → Selling goods abroad 🚢</li>
                                    <li>M = Imports → Buying goods from abroad 🚚</li>
                                </ul>
                            </div>
                            <div className="example">
                                <p>India makes:</p>
                                <p>Cars 🚗 → ₹50 crore</p>
                                <p>Clothes 👗 → ₹30 crore</p>
                                <p>Food 🍎 → ₹20 crore</p>
                                <p>Total GDP = ₹100 crore</p>
                            </div>
                        </div>

                        {/* GNP Section */}
                        <div className="flow-box">
                            <h4>2. GNP (Gross National Product) 🌍</h4>
                            <p>GDP + Income from abroad - Foreign earnings in your country</p>
                            <div className="formula">
                                <p>📊 GNP = GDP + Foreign Income - Foreign Earnings</p>
                                <ul>
                                    <li>Foreign Income → Indians working abroad 🛫</li>
                                    <li>Foreign Earnings → Foreigners working in India 🛬</li>
                                </ul>
                            </div>
                            <div className="example">
                                <p>Example:</p>
                                <p>GDP = ₹100 crore</p>
                                <p>Indian earns in USA → +₹5 lakh</p>
                                <p>Foreigner earns in India → -₹1 lakh</p>
                                <p>Total GNP = ₹100 crore + ₹4 lakh</p>
                            </div>
                        </div>

                        {/* NNP Section */}
                        <div className="flow-box">
                            <h4>3. NNP (Net National Product) 🛠️</h4>
                            <p>GNP minus depreciation of machines and equipment</p>
                            <div className="formula">
                                <p>📊 NNP = GNP - Depreciation</p>
                            </div>
                            <div className="example">
                                <p>GNP = ₹100 crore</p>
                                <p>Machines lose value → ₹10 crore</p>
                                <p>Total NNP = ₹90 crore</p>
                            </div>
                        </div>

                        {/* NI Section */}
                        <div className="flow-box">
                            <h4>4. National Income (NI) 💵</h4>
                            <p>NNP adjusted for taxes and subsidies</p>
                            <div className="formula">
                                <p>📊 NI = NNP - Taxes + Subsidies</p>
                            </div>
                            <div className="example">
                                <p>NNP = ₹90 crore</p>
                                <p>Taxes → -₹5 crore</p>
                                <p>Subsidies → +₹3 crore</p>
                                <p>Total NI = ₹88 crore</p>
                            </div>
                        </div>

                        {/* PI Section */}
                        <div className="flow-box">
                            <h4>5. Personal Income (PI) 👨‍👩‍👧‍👦</h4>
                            <p>Income actually received by people</p>
                            <div className="formula">
                                <p>📊 PI = NI - Corporate Taxes + Government Benefits</p>
                            </div>
                            <div className="example">
                                <p>Salary = ₹40,000</p>
                                <p>Govt Scholarship → +₹5,000</p>
                                <p>Total PI = ₹45,000</p>
                            </div>
                        </div>

                        {/* DI Section */}
                        <div className="flow-box">
                            <h4>6. Disposable Income (DI) 💸</h4>
                            <p>Income left after paying personal taxes</p>
                            <div className="formula">
                                <p>📊 DI = PI - Personal Taxes</p>
                            </div>
                            <div className="example">
                                <p>PI = ₹45,000</p>
                                <p>Personal Tax → -₹5,000</p>
                                <p>Total DI = ₹40,000</p>
                            </div>
                        </div>
                    </div>
                </div>
                

                {/* 3. Circular Flow of Income */}
                <div className="chart-section">
                    <h3 className="section-title">3. Circular Flow of Income 🔄</h3>
                    <div className="circular-flows">
                        {/* Two-Sector Economy */}
                        <div className="flow-model">
                            <h4>A. Two-Sector Economy 🔄</h4>
                            <div className="flow-path">
                                <p>Households → Firms → Goods/Wages → Back to Households</p>
                                <p className="example">Example: You work 👷‍♂️ → Company pays you 💰 → You buy company's products 🛒</p>
                            </div>
                        </div>

                        {/* Three-Sector Economy */}
                        <div className="flow-model">
                            <h4>B. Three-Sector Economy 🏛️</h4>
                            <div className="flow-path">
                                <p>Households → Firms → Govt (Taxes & Benefits) → Back to Households</p>
                                <div className="flow-details">
                                    <h5>Key Components:</h5>
                                    <ul>
                                        <li>Taxes paid by households and firms 💰</li>
                                        <li>Government spending on public services 🏫</li>
                                        <li>Social benefits and subsidies 📋</li>
                                    </ul>
                                </div>
                                <p className="example">Example: You pay taxes → Govt builds schools 🏫 → Children get education → Public benefits</p>
                            </div>
                        </div>

                        {/* Four-Sector Economy */}
                        <div className="flow-model">
                            <h4>C. Four-Sector Economy 🌍</h4>
                            <div className="flow-path">
                                <p>Households → Firms → Govt → Foreign Sector (X-M) → Back to Households</p>
                                <div className="flow-details">
                                    <h5>Added Components:</h5>
                                    <ul>
                                        <li>Exports (X): Goods sold abroad 🚢</li>
                                        <li>Imports (M): Goods bought from abroad 🛃</li>
                                        <li>Foreign investment flows 💱</li>
                                        <li>International trade balance ⚖️</li>
                                    </ul>
                                </div>
                                <div className="examples">
                                    <h5>Examples:</h5>
                                    <ul>
                                        <li>Exports: India sells tea ☕ to UK</li>
                                        <li>Imports: India buys oil ⛽ from Saudi Arabia</li>
                                        <li>Foreign Investment: US company opens factory in India 🏭</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        {/* Summary Box */}
                        <div className="summary-box">
                            <h4>Key Points to Remember 📝</h4>
                            <ul>
                                <li>Each sector adds complexity to the flow 📈</li>
                                <li>Money flows in a continuous circle 🔄</li>
                                <li>Leakages and injections affect the flow 💧</li>
                                <li>International trade impacts national income 🌐</li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* 4. Summary Table */}
                <div className="chart-section">
                    <h3 className="section-title">4. Summary Table 📝</h3>
                    <div className="summary-table">
                        <table>
                            <thead>
                                <tr>
                                    <th>Term</th>
                                    <th>What is it?</th>
                                    <th>Formula or Example</th>
                                </tr>
                                <tr>
                                    <th>Term</th>
                                    <th>What is it?</th>
                                    <th>Formula or Example</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>GDP 🏭</td>
                                    <td>Total production in the country</td>
                                    <td>Cars, clothes, food = ₹100 crore</td>
                                </tr>
                                <tr>
                                    <td>GNP 🌍</td>
                                    <td>GDP + World earnings</td>
                                    <td>Add ₹10 lakh (from abroad)</td>
                                </tr>
                                <tr>
                                    <td>NNP 🛠️</td>
                                    <td>GNP - Depreciation</td>
                                    <td>₹100 crore - ₹10 crore = ₹90 crore</td>
                                </tr>
                                <tr>
                                    <td>NI 💵</td>
                                    <td>NNP - Taxes + Subsidies</td>
                                    <td>₹90 cr - ₹5 cr + ₹2 cr = ₹87 cr</td>
                                </tr>
                                <tr>
                                    <td>PI 👨‍👩‍👧‍👦</td>
                                    <td>Income people receive</td>
                                    <td>₹45,000 (Salary + Benefits)</td>
                                </tr>
                                <tr>
                                    <td>DI 💸</td>
                                    <td>Personal Income - Taxes</td>
                                    <td>₹45,000 - ₹5,000 = ₹40,000</td>
                                </tr>
                                {/* Add other rows for GNP, NNP, NI, PI, DI */}
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* 5. Easy Recall - Bakery Example */}
                <div className="chart-section">
                    <h3 className="section-title">5. Easy Recall Diagrams 🎓</h3>
                    <div className="bakery-example">
                        <h4>1. Cake Bakery 🍰 Example:</h4>
                        <table>
                            <thead>
                                <tr>
                                    <th>Step</th>
                                    <th>Example</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>GDP</td>
                                    <td>Cakes baked in the bakery 🏠</td>
                                </tr>
                                <tr>
                                    <td>GNP</td>
                                    <td>Cakes sold abroad 🌍</td>
                                </tr>
                                <tr>
                                    <td>NNP</td>
                                    <td>Subtract old oven value 🛠️</td>
                                </tr>
                                <tr>
                                    <td>NI</td>
                                    <td>Adjust price with tax 🎟️</td>
                                </tr>
                                <tr>
                                    <td>PI</td>
                                    <td>Salary bakery workers receive 👨‍🍳</td>
                                </tr>
                                <tr>
                                    <td>DI</td>
                                    <td>Money left after tax 💸</td>
                                </tr>
                            </tbody>
                        </table>
                        <div className="visual-flowchart">
                            <p>GDP → GNP → NNP → NI → PI → DI</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
    if(unit === 2){
        return (
            <div className="flowchart-container">
                <h2 className="main-title">Income and Employment Flow Charts 📊</h2>

                {/* 1. Classical Theory */}
                <div className="chart-section">
                    <h3 className="section-title">1. Classical Theory of Income & Employment 🏛️</h3>
                    <div className="main-idea-box">
                        <h4>Main Idea: Economy fixes itself 🌞</h4>
                        <div className="flow-diagram">
                            <p className="flow-path">Unemployment → Wages Fall ↓ → Firms Hire More Workers → Jobs Created → Full Employment 🌞</p>
                        </div>
                        
                        <div className="key-points">
                            <h4>Key Points:</h4>
                            <ul>
                                <li>Say's Law 🗣️: "Supply Creates Demand" → If goods are made, buyers will appear.</li>
                                <li>Wages & Prices Flexible 💃 → Wages go down → More hiring.</li>
                                <li>Full Employment is Natural 🌞: Unemployment is only temporary.</li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* 2. Keynes' Objections */}
                <div className="chart-section">
                    <h3 className="section-title">2. Keynes' Objections to Classical Theory 🚫</h3>
                    <div className="keynes-arguments">
                        <h4>Keynes' Arguments:</h4>
                        <p className="main-argument">Low Demand → No Production → No Jobs 😞</p>
                        
                        <div className="flow-steps">
                            <h4>Flowchart:</h4>
                            <ol>
                                <li>Demand ↓ → Businesses Stop Producing → Workers Fired 😞</li>
                                <li>Wages are "Sticky" 🍬 → Wages Don't Fall → Firms Can't Hire</li>
                                <li>Unemployment Stays → Economy Needs Help (Government) 🏛️</li>
                            </ol>
                        </div>

                        <div className="summary-box">
                            <h4>Keynes' Summary 📝:</h4>
                            <p>No Buyers → No Jobs → Govt Must Intervene! 🚦</p>
                        </div>
                    </div>
                </div>

                {/* 3. Keynesian Theory */}
                <div className="chart-section">
                    <h3 className="section-title">3. Keynesian Theory of Income & Employment 📈</h3>
                    <div className="main-idea-box">
                        <h4>Main Idea: Jobs depend on spending (demand) 🛒</h4>
                        
                        <div className="flow-diagram">
                            <p className="flow-path">More Spending 🛍️ → More Production 🏭 → More Jobs 👷‍♂️ → More Income 💰 → Cycle Continues 🔄</p>
                        </div>

                        <div className="key-terms">
                            <h4>Key Terms:</h4>
                            <ul>
                                <li>Aggregate Demand (AD): Total spending → AD = C + I + G + (X - M)</li>
                                <li>Aggregate Supply (AS): Total production</li>
                                <li>Effective Demand: AD = AS → Economy Balanced ⚖️</li>
                            </ul>
                        </div>

                        <div className="govt-role">
                            <h4>Govt's Role 🏛️:</h4>
                            <ul>
                                <li>Increase Govt Spending 💰 → Build Schools, Roads 🏫</li>
                                <li>Cut Taxes ↓ → People Have More Money → Spend More 🛍️</li>
                                <li>Create Jobs 👷‍♂️ → Hire for Public Projects 🛠️</li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* 4. Theory Comparison */}
                <div className="chart-section">
                    <h3 className="section-title">4. Classical vs Keynesian Theory 🏁</h3>
                    <div className="comparison-table">
                        <table>
                            <thead>
                                <tr>
                                    <th>Classical Theory 🏛️</th>
                                    <th>Keynesian Theory 📈</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Economy Fixes Itself 🛠️</td>
                                    <td>Govt Must Help 🏛️</td>
                                </tr>
                                <tr>
                                    <td>Supply Creates Demand 🛒</td>
                                    <td>Demand Creates Jobs 💼</td>
                                </tr>
                                <tr>
                                    <td>Wages & Prices Fall Easily 💃</td>
                                    <td>Wages are Sticky 🍬</td>
                                </tr>
                                <tr>
                                    <td>Full Employment Happens Automatically 🌞</td>
                                    <td>Unemployment Can Last Long 😴</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* 5. Practical Example */}
                <div className="chart-section">
                    <h3 className="section-title">5. Fun Example 🍰</h3>
                    <div className="bakery-example">
                        <h4>Situation: Bakery during a recession</h4>
                        
                        <div className="classical-view">
                            <h5>Classical View:</h5>
                            <p className="flow-path">Lower Wages ↓ → Hire More Workers 👷 → Cakes Sold 🍰 → Economy Fixes Itself 🌞</p>
                        </div>

                        <div className="keynesian-view">
                            <h5>Keynesian View:</h5>
                            <p className="flow-path">No Buyers → Govt Steps In 🏛️:</p>
                            <ol>
                                <li>Govt Gives Money → People Buy Cakes 🛒</li>
                                <li>Govt Builds Roads → Bakers Get Jobs 👷</li>
                                <li>→ More Jobs → More Income → Economy Recovers 🎉</li>
                            </ol>
                        </div>
                    </div>
                </div>

                {/* 6. Key Formulas */}
                <div className="chart-section">
                    <h3 className="section-title">6. Key Formulas Simplified 🧮</h3>
                    <div className="formulas-container">
                        <div className="formula-box">
                            <h4>Aggregate Demand Formula (AD):</h4>
                            <p>AD = C + I + G + (X - M) 🛒</p>
                            <ul>
                                <li>C → Consumption (household spending) 🛍️</li>
                                <li>I → Investment (business spending) 🏗️</li>
                                <li>G → Government Spending 🏛️</li>
                                <li>X - M → Net Exports (Exports - Imports) 🚢</li>
                            </ul>
                        </div>

                        <div className="formula-box">
                            <h4>Other Important Formulas:</h4>
                            <ul>
                                <li>
                                    <strong>Savings & Investment:</strong>
                                    <p>S = I 💰</p>
                                    <p className="formula-explanation">Savings equals Investment in equilibrium</p>
                                </li>
                                <li>
                                    <strong>Multiplier Effect:</strong>
                                    <p>k = 1 / (1 - MPC) 🚀</p>
                                    <p className="formula-explanation">Shows how initial spending creates more income</p>
                                </li>
                                <li>
                                    <strong>Consumption Function:</strong>
                                    <p>C = C₀ + MPC × Y 🛍️</p>
                                    <p className="formula-explanation">C₀ = Basic consumption</p>
                                    <p className="formula-explanation">MPC = Extra spending from each ₹ of income</p>
                                    <p className="formula-explanation">Y = Income</p>
                                </li>
                                <li>
                                    <strong>Saving Function:</strong>
                                    <p>S = Y - C 💰</p>
                                    <p className="formula-explanation">Income minus Consumption equals Savings</p>
                                </li>
                                <li>
                                    <strong>MPC + MPS Relationship:</strong>
                                    <p>MPC + MPS = 1 🔄</p>
                                    <p className="formula-explanation">Money is either spent (MPC) or saved (MPS)</p>
                                </li>
                                <li>
                                    <strong>Equilibrium Income:</strong>
                                    <p>Y = C + I + G ⚖️</p>
                                    <p className="formula-explanation">Total Income equals Total Spending</p>
                                </li>
                            </ul>
                        </div>

                        {/* New: Examples Box */}
                        <div className="formula-box examples">
                            <h4>Quick Examples:</h4>
                            <ul>
                                <li>
                                    <strong>MPC Example:</strong>
                                    <p>Get ₹100 → Spend ₹80 → MPC = 0.8 🛍️</p>
                                </li>
                                <li>
                                    <strong>Multiplier Example:</strong>
                                    <p>If MPC = 0.8 → k = 1/(1-0.8) = 5</p>
                                    <p>₹100 spending → ₹500 total impact! 🚀</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* 7. Quick Recap */}
                <div className="chart-section">
                    <h3 className="section-title">7. Quick Recap Flowchart 👣</h3>
                    <div className="recap-steps">
                        <div className="step">
                            <h4>Classical Theory 🌞</h4>
                            <p>Unemployment → Wages ↓ → More Jobs → Full Employment 🌞</p>
                        </div>
                        
                        <div className="step">
                            <h4>Keynes Objections 🚫</h4>
                            <p>Low Demand → No Jobs → Wages "Sticky" 🍬 → Govt Must Help 🏛️</p>
                        </div>
                        
                        <div className="step">
                            <h4>Keynesian Solution 🛒</h4>
                            <p>More Spending → More Production → More Jobs 👷 → Govt Steps In! 🏛️</p>
                        </div>
                        
                        <div className="step">
                            <h4>Govt Role 🏛️</h4>
                            <ol>
                                <li>Spend More 💰 → Build Roads, Schools 🛠️</li>
                                <li>Cut Taxes 🏦 → People Spend More 🛍️</li>
                                <li>Hire Workers → Create Jobs 👷‍♂️</li>
                            </ol>
                        </div>
                    </div>

                    <div className="final-tip">
                        <h4>🎓 Final Fun Tip to Recall 👣</h4>
                        <p>Think of a Game 🎮:</p>
                        <p>No Demand → No Jobs → Govt Enters the Game 🏛️ → Creates Demand → Fixes the Economy! 🎉</p>
                    </div>
                </div>
            </div>
        );
    }
    if(unit === 3){
        return (
            <div className="flowchart-container">
                <h2 className="main-title">Consumption Theory Flow Charts 📊</h2>

                {/* 1. Consumption Flowchart */}
                <div className="chart-section">
                    <h3 className="section-title">1. Consumption Flowchart 🛍️</h3>
                    <div className="flow-diagram">
                        <div className="flow-step">
                            <p>Income (Y) 💵</p>
                            <p>↓</p>
                            <p>Spending (C) → Consumption Function 🛒</p>
                            <p>↓</p>
                            <p>Basic Spending (C₀) + Extra Spending (MPC × Y)</p>
                        </div>

                        <div className="key-formula">
                            <h4>Key Formula:</h4>
                            <p>C = C₀ + MPC × Y</p>
                        </div>

                        <div className="keywords">
                            <h4>Keywords:</h4>
                            <ul>
                                <li>C₀ = Basic needs (like food 🍎)</li>
                                <li>MPC = How much of extra income you spend (like a pizza with bonus cash 🍕)</li>
                            </ul>
                        </div>

                        <div className="importance">
                            <h4>Why is it Important?</h4>
                            <p>It shows how people spend as their income increases.</p>
                        </div>
                    </div>
                </div>

                {/* 2. Technical Attributes */}
                <div className="chart-section">
                    <h3 className="section-title">2. Technical Attributes of Consumption 🛠️</h3>
                    <div className="attributes-table">
                        <table>
                            <thead>
                                <tr>
                                    <th>Attribute</th>
                                    <th>Formula</th>
                                    <th>Meaning</th>
                                    <th>Example</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>MPC 💰</td>
                                    <td>ΔC / ΔY</td>
                                    <td>Extra income spent 💸</td>
                                    <td>₹1000 income → Spend ₹800 → MPC = 0.8</td>
                                </tr>
                                <tr>
                                    <td>APC 📊</td>
                                    <td>C / Y</td>
                                    <td>Total income spent 🛍️</td>
                                    <td>₹2000 income → Spend ₹1600 → APC = 0.8</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <div className="flow-diagram">
                        <h4>Flowchart 👣:</h4>
                        <p>Income ↑ → MPC (Spend a part) + MPS (Save a part)</p>
                    </div>

                    <div className="key-points">
                        <h4>Key Points:</h4>
                        <ul>
                            <li>MPC stays constant short term</li>
                            <li>APC decreases as income increases</li>
                        </ul>
                    </div>
                </div>

                {/* 3. Keynesian Psychological Law */}
                <div className="chart-section">
                    <h3 className="section-title">3. Keynesian Psychological Law of Consumption 🧠</h3>
                    <div className="flow-diagram">
                        <p>Income ↑ → Consumption ↑ (Slowly) → Savings ↑ 💰</p>
                    </div>

                    <div className="main-idea">
                        <h4>Main Idea:</h4>
                        <p>People spend less and save more when income rises.</p>
                    </div>

                    <div className="key-points">
                        <h4>Key Points:</h4>
                        <ul>
                            <li>MPC is between 0 and 1 (split income: spend/save)</li>
                            <li>Savings increase as people get richer</li>
                        </ul>
                    </div>

                    <div className="implications">
                        <h4>Implications 📝:</h4>
                        <ul>
                            <li>Consumption depends on income → Govt must increase spending during recessions</li>
                            <li>Too much saving reduces demand → Fewer jobs</li>
                        </ul>
                    </div>
                </div>

                {/* 4. Income-Consumption Relationship */}
                <div className="chart-section">
                    <h3 className="section-title">4. Income–Consumption Relationship 📊</h3>
                    
                    <div className="hypothesis-box">
                        <h4>(a) Absolute Income Hypothesis 📈</h4>
                        <p>Idea: Consumption depends on current income.</p>
                        <p className="flow">Income ↑ → Consumption ↑ (Slowly) → Savings ↑ 💰</p>
                    </div>

                    <div className="hypothesis-box">
                        <h4>(b) Relative Income Hypothesis 👀</h4>
                        <p>Idea: People spend to match others' status.</p>
                        <p className="flow">Income ↓ → Spending Continues (To Maintain Status 🛍️)</p>
                        <p>Example: Buy branded clothes to keep up with friends.</p>
                    </div>

                    <div className="hypothesis-box">
                        <h4>(c) Permanent Income Hypothesis 🏦</h4>
                        <p>Idea: Consumption depends on expected lifetime income.</p>
                        <div className="flow-paths">
                            <p>Temporary Income ↑ → Saved ↑ 💰</p>
                            <p>Permanent Income ↑ → Consumption ↑ Steadily 🛍️</p>
                        </div>
                        <p>Example: Bonus money → Most is saved, not spent.</p>
                    </div>
                </div>

                {/* 5. Super-Fun Summary Flowchart */}
                <div className="chart-section">
                    <h3 className="section-title">Super-Fun Summary Flowchart 🎯</h3>
                    <div className="summary-flow">
                        <p>Income 💵</p>
                        <p>↓</p>
                        <p>Consumption (C) 🛒 + Savings (S) 💰</p>
                        <p>↓</p>
                        <p>Consumption Function: C = C₀ + MPC × Y</p>
                        <p>↓</p>
                        <h4>3 Hypotheses 🧐</h4>
                        <ol>
                            <li>Absolute: Spend depends on current income 📈</li>
                            <li>Relative: Spend to match others' income 👀</li>
                            <li>Permanent: Spend based on long-term income 🏦</li>
                        </ol>
                    </div>
                </div>

                {/* 6. Technical Words Explained */}
                <div className="chart-section">
                    <h3 className="section-title">Technical Words Explained in Simple Words 🧠✨</h3>
                    
                    <div className="explanation-box">
                        <h4>Consumption Function 🛍️:</h4>
                        <p>Formula: C = C₀ + MPC × Y → Shows how people spend their income.</p>
                    </div>

                    <div className="explanation-box">
                        <h4>Technical Attributes 🛠️:</h4>
                        <ul>
                            <li>MPC: How much of extra income you spend</li>
                            <li>APC: Total income spent</li>
                        </ul>
                    </div>

                    <div className="explanation-box">
                        <h4>Keynesian Law 🧠:</h4>
                        <p>As income increases → People save more and spend less proportionally</p>
                    </div>

                    <div className="explanation-box">
                        <h4>Income-Consumption Relationship 📊:</h4>
                        <ul>
                            <li>Absolute Income: Spend based on current income</li>
                            <li>Relative Income: Spend to look equal to others (status)</li>
                            <li>Permanent Income: Spend based on expected lifetime income</li>
                        </ul>
                    </div>

                    <div className="super-tip">
                        <h4>Super-Easy Recall Tip 🎉:</h4>
                        <p>💡 "When income goes up: Spend some 🛍️, Save some 💰, but spend slowly if rich! Don't forget status lovers spend even when broke! 👀🎯"</p>
                    </div>
                </div>
            </div>
        );
    }
    // Add a default return to handle cases where unit is neither 1 nor 2
    return (
        <div>
            <h1>Please select ajf valid unit</h1>
        </div>
    );
}

export default FlowChart;