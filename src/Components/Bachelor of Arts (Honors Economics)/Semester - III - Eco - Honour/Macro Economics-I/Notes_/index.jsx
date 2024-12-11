import React, { useState } from 'react';
import './index.css';
import FlowChart from './FlowChart.jsx';
import Formula from './Formula.jsx';

const MacroEconomicsNotes = () => {
    const [activeUnit, setActiveUnit] = useState(null);
    const [showFlowCharts, setShowFlowCharts] = useState(false);
    const [showFormulas, setShowFormulas] = useState(false);

    const toggleUnit = (unit) => {
        setActiveUnit(activeUnit === unit ? null : unit);
    };

    const toggleFlowCharts = () => {
        setShowFlowCharts(!showFlowCharts);
    };

    const toggleFormulas = () => {
        setShowFormulas(!showFormulas);
    };

    return (
        <div className="notes-container">
            <div className="units-accordion">
                <div className="unit-button" onClick={() => toggleUnit(1)}>
                    Unit I - Introduction and National Income
                    <span className="plus-icon">+</span>
                </div>
                {activeUnit === 1 && (
                    <div className="unit-content">
                        {/* Toggle Buttons - Only show Flow Charts in Unit 1 */}
                        <div className="toggle-buttons">
                            <button 
                                className={`toggle-button ${showFlowCharts ? 'active' : ''}`}
                                onClick={toggleFlowCharts}
                            >
                                Show Flow Charts 📊
                            </button>
                            <button 
                                className={`toggle-button ${showFormulas ? 'active' : ''}`}
                                onClick={toggleFormulas}
                            >
                                Show Formulas 📝
                            </button>
                        </div>

                        {/* Show FlowChart component only in Unit 1 */}
                        {showFlowCharts && <FlowChart unit={1} />}
                        {showFormulas && <Formula unit={activeUnit} />}

                        {/* Hide Notes Button */}
                        <button className="hide-notes-button" onClick={() => setActiveUnit(null)}>
                            Hide Notes
                        </button>

                        {/* Existing Notes Content */}
                        <div className="notes-section">
                            {/* Section 1 */}
                            <h3>1. Introduction: Nature & Scope of Macro Economics 🌍</h3>
                            <div className="sub-section">
                                <h4>What is Macro Economics? 🧐</h4>
                                <p>Macro Economics = Study of the whole economy.</p>
                                <p>It looks at big things like:</p>
                                <ul>
                                    <li>National Income 💰</li>
                                    <li>Inflation 📈 (Rising Prices)</li>
                                    <li>Unemployment 👷‍♂️ (No Jobs)</li>
                                </ul>

                                <h4>Scope of Macro Economics 🔍:</h4>
                                <ul>
                                    <li>National Income: Total earnings of a country 💵</li>
                                    <li>Employment: Jobs available for people 👨‍👩‍👧‍👦</li>
                                    <li>Economic Growth: How fast the economy grows 🌱</li>
                                    <li>Inflation/Deflation: Rise or fall in prices 📊</li>
                                    <li>Government Policies: Steps taken to manage the economy 🏛️</li>
                                </ul>
                            </div>

                            {/* Section 2 */}
                            <div className="sub-section">
                                <h3>2. Difference between Micro & Macro Economics 🧩</h3>
                                <div className="comparison-table">
                                    <table>
                                        <thead>
                                            <tr>
                                                <th>Micro Economics 🏠</th>
                                                <th>Macro Economics 🌍</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>Small Picture → Individual markets 🛒</td>
                                                <td>Big Picture → Entire economy 🌍</td>
                                            </tr>
                                            <tr>
                                                <td>Example: Price of a phone 📱</td>
                                                <td>Example: Average price of all goods 📊</td>
                                            </tr>
                                            <tr>
                                                <td>Focus: Individual buyers/sellers 👨‍👩‍👧‍👦</td>
                                                <td>Focus: National income, unemployment, inflation 📈</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <p className="fun-tip">👣 Fun Tip: Micro = Small, Macro = Big! 🖼️</p>
                            </div>

                            {/* Section 3 */}
                            <div className="sub-section">
                                <h3>3. Classical Theory of Income & Employment 🏛️</h3>
                                <h4>Main Idea 🧐</h4>
                                <ul>
                                    <li>The economy can fix itself.</li>
                                    <li>If there is unemployment, wages and prices fall, and jobs are created.</li>
                                    <li>Full employment happens automatically. 🌞</li>
                                </ul>

                                <h4>Key Points</h4>
                                <div className="key-points">
                                    <h5>Say's Law 🗣️ → "Supply creates its own demand"</h5>
                                    <ul>
                                        <li>If goods are produced → Buyers will buy them.</li>
                                        <li>Example: A shop bakes 100 cakes 🍰 → Enough people will buy all the cakes.</li>
                                    </ul>

                                    <h5>Wages and Prices are Flexible 💃</h5>
                                    <ul>
                                        <li>If workers can't find jobs → Wages go down → More workers get hired.</li>
                                        <li>Example: If a factory pays less salary, it can hire more people.</li>
                                    </ul>

                                    <h5>Full Employment is Natural 🌞</h5>
                                    <ul>
                                        <li>Unemployment is temporary.</li>
                                        <li>The economy will always balance itself (like magic!).</li>
                                    </ul>
                                </div>

                                <div className="summary-box">
                                    <h5>Super Easy Summary 📝:</h5>
                                    <p>The market is like a self-fixing machine. If there's a problem, it fixes itself. 🛠️</p>
                                </div>
                            </div>

                            {/* Section 4 */}
                            <div className="sub-section">
                                <h3>4. National Income 💰</h3>
                                <h4>What is National Income? 🧐</h4>
                                <p>Total value of all goods & services produced in a country.</p>
                                
                                <div className="key-concepts">
                                    <h4>Key Concepts of National Income 📝:</h4>
                                    
                                    <div className="concept-item">
                                        <h5>GDP (Gross Domestic Product) 🏭:</h5>
                                        <p>What? Value of goods/services produced within a country.</p>
                                        <div className="formula-box">
                                            <h6>Formula:</h6>
                                            <p>GDP = C + I + G + (X - M)</p>
                                            <ul>
                                                <li>C = Consumption 🛍️</li>
                                                <li>I = Investment 🏗️</li>
                                                <li>G = Government Spending 🏛️</li>
                                                <li>X - M = Exports - Imports 🚢</li>
                                            </ul>
                                            <p>Example: India makes ₹100 crore worth of cars, clothes, food → That's GDP!</p>
                                        </div>
                                    </div>

                                    <div className="concept-item">
                                        <h5>GNP (Gross National Product) 🌍:</h5>
                                        <p>What? GDP + Money earned by people working abroad - Money sent to foreigners.</p>
                                        <p>Example: An Indian earns ₹5 lakh in the USA → Add it to GNP.</p>
                                    </div>

                                    <div className="concept-item">
                                        <h5>NNP (Net National Product) 🛠️:</h5>
                                        <p>What? GNP - Depreciation (Value lost when machines get old).</p>
                                        <p>Example: GNP = ₹100 crore, Depreciation = ₹10 crore → NNP = ₹90 crore.</p>
                                    </div>

                                    <div className="concept-item">
                                        <h5>Personal Income (PI) 👨‍��‍👧‍👦:</h5>
                                        <p>What? Total income received by people.</p>
                                    </div>

                                    <div className="concept-item">
                                        <h5>Disposable Income (DI) 💸:</h5>
                                        <p>What? Income left after paying taxes.</p>
                                        <p>Example: If you earn ₹50,000 and pay ₹5,000 as tax → DI = ₹45,000.</p>
                                    </div>
                                </div>
                            </div>

                            {/* Section 5 */}
                            <div className="sub-section">
                                <h3>5. Measurement of National Income 📊</h3>
                                <h4>Methods to Measure National Income:</h4>
                                <ul>
                                    <li>Production Method 🏭: Add the value of all goods & services produced</li>
                                    <li>Income Method 💵: Add all incomes earned (wages, rent, interest, profits)</li>
                                    <li>Expenditure Method 🛒: Add all spending done by people, businesses, and the government</li>
                                </ul>
                                
                                <div className="formula-box">
                                    <h5>Simple Formula (Expenditure Method):</h5>
                                    <p>National Income = C + I + G + (X - M)</p>
                                    <p>Example: C = ₹1000, I = ₹500, G = ₹700, X - M = ₹100 → National Income = ₹2300</p>
                                </div>
                            </div>

                            {/* Section 6 */}
                            <div className="sub-section">
                                <h3>6. Limitations of National Income Statistics 🚫</h3>
                                <ul>
                                    <li>Ignores Household Work 👩‍🍳: Example → Cooking food at home isn't counted</li>
                                    <li>Inflation Affects Values 📈: Rising prices may make GDP look bigger</li>
                                    <li>Unequal Distribution of Income 💡: A high GDP doesn't mean everyone is rich</li>
                                </ul>
                                <p className="summary">Summary: National Income isn't perfect, but it's still a good tool! 🛠️</p>
                            </div>

                            {/* Section 7 */}
                            <div className="sub-section">
                                <h3>7. Circular Flow of Income 🔄</h3>
                                <h4>What is Circular Flow?</h4>
                                <p>Money moves in a circle between households, firms, government, and the foreign sector.</p>

                                <div className="economy-types">
                                    <div className="economy-type">
                                        <h5>1. Two-Sector Economy 🔄</h5>
                                        <p>Who? Households 👨‍👩‍👧‍👦 and Firms 🏭</p>
                                        <p>How it Works:</p>
                                        <ul>
                                            <li>Households provide labor → Firms pay wages</li>
                                            <li>Households spend wages → Firms sell goods/services</li>
                                        </ul>
                                        <p className="flowchart">Households → Labor → Firms → Goods/Wages → Households 🔄</p>
                                    </div>

                                    <div className="economy-type">
                                        <h5>2. Three-Sector Economy 🏛️</h5>
                                        <p>Who Joins? Government 🏛️</p>
                                        <p>How it Works:</p>
                                        <p>Govt collects taxes and provides public goods (roads, schools)</p>
                                        <p className="flowchart">Households → Taxes → Govt → Public Goods → Households/Firms 🔄</p>
                                    </div>

                                    <div className="economy-type">
                                        <h5>3. Four-Sector Economy 🌍</h5>
                                        <p>Who Joins? Foreign Sector 🚢</p>
                                        <p>How it Works:</p>
                                        <ul>
                                            <li>Exports → Goods sold to other countries</li>
                                            <li>Imports → Goods bought from other countries</li>
                                        </ul>
                                        <p className="flowchart">Households/Firms → Exports → Foreign Sector → Imports → Households/Firms 🔄</p>
                                    </div>
                                </div>
                            </div>

                            {/* Section 8 */}
                            <div className="sub-section">
                                <h3>8. Super Quick Recap with Emojis 👣</h3>
                                <ul>
                                    <li>👣 Macro Economics → Study of the whole economy 🌍</li>
                                    <li>👣 Micro vs Macro → Micro = Small 🏠; Macro = Big 🌏</li>
                                    <li>👣 National Income → GDP, GNP, NNP 💰</li>
                                    <li>👣 Circular Flow → Money moves in circles 🔄</li>
                                    <li>👣 Formula → AD = C + I + G + (X - M) 🛒</li>
                                </ul>
                            </div>

                            {/* Section 9 */}
                            <div className="sub-section">
                                <h3>9. Fun Tip to Remember 🎓</h3>
                                <p>Think of the economy like a game of catch:</p>
                                <p>Households throw money → Firms catch it → Govt joins → Foreign sector plays too! 🎯🔄</p>
                            </div>
                        </div>
                    </div>
                )}

                <div className="unit-button" onClick={() => toggleUnit(2)}>
                    Unit II - Income and Employment
                    <span className="plus-icon">+</span>
                    
                </div>
                {activeUnit === 2 && (
                    <div className="unit-content">
                        {/* Toggle Buttons - Show both Flow Charts and Formulas in Unit 2 */}
                        <div className="toggle-buttons">
                            <button 
                                className={`toggle-button ${showFlowCharts ? 'active' : ''}`}
                                onClick={toggleFlowCharts}
                            >
                                Show Flow Charts 📊
                            </button>
                            <button 
                                className={`toggle-button ${showFormulas ? 'active' : ''}`}
                                onClick={toggleFormulas}
                            >
                                Show Formulas 📝
                            </button>
                        </div>

                        {/* Show both FlowChart and Formula components */}
                        {showFlowCharts && <FlowChart unit={2} />}
                        {showFormulas && <Formula unit={activeUnit} />}

                        {/* Hide Notes Button */}
                        <button className="hide-notes-button" onClick={() => setActiveUnit(null)}>
                            Hide Notes
                        </button>

                        <div className="unit-sections">
                            {/* Section 1: Classical Theory */}
                            <div className="sub-section">
                                <h3>1. Classical Theory of Income & Employment 🏛️</h3>
                                <h4>Main Idea 🧐</h4>
                                <ul>
                                    <li>The economy can fix itself.</li>
                                    <li>If there is unemployment, wages and prices fall, and jobs are created.</li>
                                    <li>Full employment happens automatically. 🌞</li>
                                </ul>

                                <h4>Key Points</h4>
                                <div className="key-points">
                                    <h5>Say's Law 🗣️ → "Supply creates its own demand"</h5>
                                    <ul>
                                        <li>If goods are produced → Buyers will buy them.</li>
                                        <li>Example: A shop bakes 100 cakes 🍰 → Enough people will buy all the cakes.</li>
                                    </ul>

                                    <h5>Wages and Prices are Flexible 💃</h5>
                                    <ul>
                                        <li>If workers can't find jobs → Wages go down → More workers get hired.</li>
                                        <li>Example: If a factory pays less salary, it can hire more people.</li>
                                    </ul>

                                    <h5>Full Employment is Natural 🌞</h5>
                                    <ul>
                                        <li>Unemployment is temporary.</li>
                                        <li>The economy will always balance itself (like magic!).</li>
                                    </ul>
                                </div>

                                <div className="summary-box">
                                    <h5>Super Easy Summary 📝:</h5>
                                    <p>The market is like a self-fixing machine. If there's a problem, it fixes itself. 🛠️</p>
                                </div>
                            </div>

                            {/* Section 2: Keynes' Objections */}
                            <div className="sub-section">
                                <h3>2. Keynes' Objections to Classical Theory 🚫</h3>
                                <h4>Keynes Disagreed because:</h4>
                                <div className="objections">
                                    <h5>Demand is Important 🛒</h5>
                                    <ul>
                                        <li>If people don't buy → Businesses won't produce → No jobs!</li>
                                        <li>Example: If no one buys cakes, the bakery will stop baking and fire workers.</li>
                                    </ul>

                                    <h5>Wages are "Sticky" 🍬</h5>
                                    <ul>
                                        <li>Wages don't fall easily because workers don't like salary cuts.</li>
                                        <li>Example: Workers protest when salaries are reduced.</li>
                                    </ul>

                                    <h5>Unemployment Can Stay for a Long Time 😞</h5>
                                    <ul>
                                        <li>The economy cannot fix itself during a recession (bad times).</li>
                                    </ul>
                                </div>

                                <div className="summary-box">
                                    <h5>Super Easy Summary 📝:</h5>
                                    <p>Keynes said, "No buyers = No jobs. The government must help!" 🏛️</p>
                                </div>
                            </div>

                            {/* Section 3: Keynesian Theory */}
                            <div className="sub-section">
                                <h3>3. Keynesian Theory of Income & Employment 📈</h3>
                                <h4>Main Idea 🛒</h4>
                                <ul>
                                    <li>Jobs and income depend on how much people spend (Demand).</li>
                                    <li>If people spend more → Businesses produce more → More jobs are created. 🎉</li>
                                </ul>

                                <h4>Key Terms 📝</h4>
                                <div className="key-terms">
                                    <h5>Aggregate Demand (AD) 🛒</h5>
                                    <p>Total money people spend in the economy.</p>
                                    <div className="formula">
                                        <p>Formula: AD = C + I + G + (X - M)</p>
                                        <ul>
                                            <li>C = Consumption (Spending by people) 🛍️</li>
                                            <li>I = Investment (Businesses buying machines) 🏗️</li>
                                            <li>G = Government spending (Building schools, hospitals) 🏛️</li>
                                            <li>X - M = Exports (goods sold abroad) - Imports (goods bought)</li>
                                        </ul>
                                    </div>

                                    <h5>Aggregate Supply (AS) 🏭</h5>
                                    <p>Total goods and services businesses produce.</p>

                                    <h5>Effective Demand ⚖️</h5>
                                    <p>When AD = AS, the economy is balanced, and jobs are created.</p>
                                </div>

                                <h4>Keynes' Solution → Govt Must Help! 🏛️</h4>
                                <ul>
                                    <li>Increase Govt Spending 💰
                                        <ul>
                                            <li>Build schools, roads, and hospitals → More jobs created. 🏫</li>
                                        </ul>
                                    </li>
                                    <li>Cut Taxes 🏦
                                        <ul>
                                            <li>People have more money to spend → Demand increases.</li>
                                        </ul>
                                    </li>
                                    <li>Create Jobs 👷‍♂️
                                        <ul>
                                            <li>Hire people for public works (building parks, bridges). 🛠️</li>
                                        </ul>
                                    </li>
                                </ul>
                            </div>

                            {/* Section 4: Comparison */}
                            <div className="sub-section">
                                <h3>4. Classical vs Keynesian Theory 🏁</h3>
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
                                                <td>Economy fixes itself 🛠️</td>
                                                <td>Govt must help 🏛️</td>
                                            </tr>
                                            <tr>
                                                <td>Supply creates demand 🛒</td>
                                                <td>Demand creates jobs 💼</td>
                                            </tr>
                                            <tr>
                                                <td>Wages and prices fall easily 💃</td>
                                                <td>Wages don't fall easily ("Sticky") 🍬</td>
                                            </tr>
                                            <tr>
                                                <td>Full employment happens automatically 🌞</td>
                                                <td>Unemployment can last for a long time 😴</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>

                            {/* Section 5: Fun Example */}
                            <div className="sub-section">
                                <h3>5. Fun Example 🍰</h3>
                                <p>Imagine a bakery during a recession (bad economic time):</p>
                                
                                <div className="theory-examples">
                                    <h4>Classical Theory:</h4>
                                    <p>"If the bakery lowers wages, it can hire more workers, and people will start buying cakes."</p>

                                    <h4>Keynesian Theory:</h4>
                                    <p>"No one has money to buy cakes. So the government helps:</p>
                                    <ul>
                                        <li>Gives money to people → They buy cakes 🛒.</li>
                                        <li>Builds a road → Hires bakers to work on the road 👷‍♂️."</li>
                                    </ul>
                                    <p>Result: More demand → More production → More jobs! 🎉</p>
                                </div>
                            </div>

                            {/* Section 6: Quick Recap */}
                            <div className="sub-section">
                                <h3>6. Super Quick Recap with Feet Emojis 👣</h3>
                                <ul>
                                    <li>👣 Classical Theory:
                                        <p>Supply creates demand. Economy fixes itself. 🌞</p>
                                    </li>
                                    <li>👣 Keynes' Objections:
                                        <p>Demand matters. Wages don't fall easily. Govt must help! 🚦</p>
                                    </li>
                                    <li>👣 Keynesian Theory:
                                        <p>Jobs depend on spending (AD) → Govt boosts demand by spending and cutting taxes. 🏛️</p>
                                    </li>
                                    <li>👣 Simple Formula:
                                        <p>AD = C + I + G + (X - M)</p>
                                    </li>
                                </ul>
                            </div>

                            {/* Section 7: Fun Tip */}
                            <div className="sub-section">
                                <h3>7. Fun Tip to Remember 🎓</h3>
                                <p>Think of a game:</p>
                                <p>👣 No Demand → No Jobs → Govt Joins the Game to Fix It! 🏛️🎯</p>
                            </div>
                        </div>
                    </div>
                )}

                <div className="unit-button" onClick={() => toggleUnit(3)}>
                    Unit III - Consumption
                    <span className="plus-icon">+</span>
                </div>
                {activeUnit === 3 && (
                    <div className="unit-content">
                        {/* Toggle Buttons */}
                        <div className="toggle-buttons">
                            <button 
                                className={`toggle-button ${showFlowCharts ? 'active' : ''}`}
                                onClick={toggleFlowCharts}
                            >
                                Show Flow Charts 📊
                            </button>
                            <button 
                                className={`toggle-button ${showFormulas ? 'active' : ''}`}
                                onClick={toggleFormulas}
                            >
                                Show Formulas 📝
                            </button>
                        </div>

                        {/* Show Components */}
                        {showFlowCharts && <FlowChart unit={3} />}
                        {showFormulas && <Formula unit={3} />}

                        {/* Hide Notes Button */}
                        <button className="hide-notes-button" onClick={() => setActiveUnit(null)}>
                            Hide Notes
                        </button>

                        {/* Unit Content */}
                        <div className="unit-sections">
                            <h3>Unit III - Consumption Theory 🛍️</h3>
                            
                            {/* Section 1: What is Consumption */}
                            <div className="sub-section">
                                <h4>1. What is Consumption? 🤔</h4>
                                <div className="definition-box">
                                    <p><strong>Meaning:</strong> Consumption means spending money on goods and services to satisfy needs.</p>
                                    <p><strong>Example:</strong> Buying food, clothes, or toys 🛒</p>
                                </div>
                            </div>

                            {/* Section 2: Consumption Function */}
                            <div className="sub-section">
                                <h4>2. Consumption Function 📈</h4>
                                <div className="formula-box">
                                    <h5>Formula:</h5>
                                    <p>C = C₀ + MPC × Y</p>
                                    <ul>
                                        <li>C → Total Consumption 🛍️</li>
                                        <li>C₀ → Basic Consumption (Spending even without income 💡)</li>
                                        <li>MPC → Marginal Propensity to Consume</li>
                                        <li>Y → Income 💵</li>
                                    </ul>
                                    <div className="simple-idea">
                                        <h5>Simple Idea:</h5>
                                        <ul>
                                            <li>People spend a basic amount even if they have no income.</li>
                                            <li>As income increases → They spend more, but not all of it.</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            {/* Section 3: Technical Attributes */}
                            <div className="sub-section">
                                <h4>3. Technical Attributes of Consumption 🛠️</h4>
                                
                                <div className="attribute-box">
                                    <h5>(a) Marginal Propensity to Consume (MPC):</h5>
                                    <ul>
                                        <li><strong>Definition:</strong> How much of extra income people spend.</li>
                                        <li><strong>Formula:</strong> MPC = ΔC / ΔY</li>
                                        <li><strong>Example:</strong> Earn ₹100 extra → Spend ₹80 → MPC = 0.8</li>
                                    </ul>
                                </div>

                                <div className="attribute-box">
                                    <h5>(b) Average Propensity to Consume (APC):</h5>
                                    <ul>
                                        <li><strong>Definition:</strong> Proportion of total income spent.</li>
                                        <li><strong>Formula:</strong> APC = C / Y</li>
                                        <li><strong>Example:</strong> Income ₹1000, Spend ₹800 → APC = 0.8</li>
                                    </ul>
                                </div>

                                <div className="key-points">
                                    <h5>Key Points:</h5>
                                    <ul>
                                        <li>APC ↓ (Decreases) as Income ↑ (Increases)</li>
                                        <li>MPC stays constant in the short run</li>
                                    </ul>
                                </div>
                            </div>

                            {/* Section 4: Keynesian Law */}
                            <div className="sub-section">
                                <h4>4. Keynesian Psychological Law of Consumption 🧠</h4>
                                <div className="main-idea">
                                    <h5>Main Idea:</h5>
                                    <p>People spend less and save more as their income increases.</p>
                                </div>

                                <div className="features">
                                    <h5>Key Features 📝:</h5>
                                    <ul>
                                        <li>Consumption rises, but slower than income 📉</li>
                                        <li>MPC is between 0 and 1 → People split extra income into spending & saving</li>
                                        <li>Savings ↑ as people get richer</li>
                                    </ul>
                                </div>

                                <div className="implications">
                                    <h5>Implications:</h5>
                                    <ul>
                                        <li>Consumption depends on income</li>
                                        <li>Govt must boost spending in the economy during recessions</li>
                                        <li>Saving too much reduces demand and jobs</li>
                                    </ul>
                                </div>
                            </div>

                            {/* Section 5: Income-Consumption Relationship */}
                            <div className="sub-section">
                                <h4>5. Income–Consumption Relationship 📊</h4>
                                
                                <div className="hypothesis-box">
                                    <h5>(a) Absolute Income Hypothesis 📈</h5>
                                    <ul>
                                        <li><strong>Idea:</strong> Consumption depends on current income</li>
                                        <li>More Income → More Spending, but savings grow faster</li>
                                    </ul>
                                </div>

                                <div className="hypothesis-box">
                                    <h5>(b) Relative Income Hypothesis 👀</h5>
                                    <ul>
                                        <li><strong>Idea:</strong> People spend based on their income compared to others</li>
                                        <li>Even if income ↓ → People keep spending to look equal to others</li>
                                        <li><strong>Example:</strong> A person spends money on branded clothes to match friends</li>
                                    </ul>
                                </div>

                                <div className="hypothesis-box">
                                    <h5>(c) Permanent Income Hypothesis 🏦</h5>
                                    <ul>
                                        <li><strong>Idea:</strong> Consumption depends on expected long-term income</li>
                                        <li>Temporary income ↑ → Saved more, spent less</li>
                                        <li>Permanent income ↑ → Spent steadily</li>
                                        <li><strong>Example:</strong> Bonus ₹10,000 → Most of it is saved, not spent</li>
                                    </ul>
                                </div>
                            </div>

                            {/* Section 6: Quick Recap */}
                            <div className="sub-section">
                                <h4>6. Quick Recap 👣</h4>
                                
                                <div className="recap-box">
                                    <h5>Consumption Function 🛍️:</h5>
                                    <p>Formula → C = C₀ + MPC × Y</p>
                                </div>

                                <div className="recap-box">
                                    <h5>Technical Terms:</h5>
                                    <ul>
                                        <li>MPC → Extra income spent</li>
                                        <li>APC → Total income spent</li>
                                    </ul>
                                </div>

                                <div className="recap-box">
                                    <h5>Keynesian Law 🧠:</h5>
                                    <p>Income ↑ → Consumption ↑ (Slowly) → Savings ↑</p>
                                </div>

                                <div className="hypothesis-table">
                                    <h5>Income–Consumption Hypotheses:</h5>
                                    <table>
                                        <thead>
                                            <tr>
                                                <th>Hypothesis</th>
                                                <th>Key Idea</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>Absolute Income 📈</td>
                                                <td>Spending depends on current income</td>
                                            </tr>
                                            <tr>
                                                <td>Relative Income 👀</td>
                                                <td>Spending depends on others' income (status)</td>
                                            </tr>
                                            <tr>
                                                <td>Permanent Income 🏦</td>
                                                <td>Spending depends on lifetime expected income</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>

                                <div className="fun-tip">
                                    <h5>Super-Fun Recall Tip 🎯</h5>
                                    <p>"When income changes, spending changes too – slowly for big savers, but quickly for status lovers!" 🛍️👟💰</p>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                <div className="unit-button" onClick={() => toggleUnit(4)}>
                    Unit IV - Investment
                    <span className="plus-icon">+</span>
                </div>
                {activeUnit === 4 && (
                    <div className="unit-content">
                        {/* Unit 4 content */}
                    </div>
                )}
            </div>
        </div>
    );
};

export default MacroEconomicsNotes;