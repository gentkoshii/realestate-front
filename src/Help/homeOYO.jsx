import React, { useState, useEffect } from "react";
import Navbar from "../Components/navbar";
import HomeFooter from "../Components/homeFooter";
import "./helpOptions.scss";

function HomeOYO() {
    const [activeButton, setActiveButton] = useState("button1");

    const handleButtonClick = (buttonId) => {
        setActiveButton(buttonId);
    };

    return (
        <div className="homeOption">
            <Navbar />
            <div className="homeOptionSection">
                <div id="text">
                    {activeButton === "button1" && (
                        <>
                            <h1>What's Right for You?</h1>
                            <p>Looking for a house to buy? This section will help you create a prioritized list of features to narrow your search.</p>
                            <h2>What's the Right Home for You?</h2>
                            <p>Before deciding which house to buy, consider your lifestyle, current and anticipated housing needs and budget. It’s a good idea to create a prioritized list of features you want in your new home; you'll quickly discover finding the right house involves striking a balance between your "must-haves" and your "nice-to-haves."</p>
                            <p>If you love to cook, you'll appreciate a well-equipped kitchen. If you're into gardening, you'll want a yard. If a home office is a must, you’ll need a room that will provide you adequate work space. If you have several cars, you may require a larger garage. Use this list as your search guide.</p>
                            <p>Next, think about what you might need in the future, and how long you are likely to live in this particular home. If you're newly married, you might not be concerned with a school district right now, but you could be in a few years. If you have aging parents, you may want to look at homes that offer living arrangements that could accommodate them as well.</p>
                            <p>It’s important to think about your new home’s location just as carefully as its features. In addition to considering the distance to work, evaluate what matters to you in terms of services, convenience and accessibility, such as shopping, police and fire protection, medical facilities, school and daycare, traffic and parking, trash and garbage collection, even recreational facilities.</p>
                            <p>Be sure to talk to your real estate professional about where you want to live and what’s most important to you. While buyers frequently use the Internet to gain access to listings or available properties for sale, an agent brings value to the entire home buying process. He or she is available to analyze data, answer questions, share their professional expertise, and handle all the paperwork and legwork that is involved in any real estate transaction. CENTURY 21® professionals can help their clients narrow their choices by sharing market trends and local information.</p>
                            <p><span>Tip:</span> It’s also important to consider the type of home that suits you best. Is it a condominium or a co-op? A townhouse or detached single-family home? Do you want brick, stone, stucco, wood, vinyl siding, or something else? Do you prefer a new home or an older one?</p>
                        </>
                    )}
                    {activeButton === "button2" && (
                        <>
                            <h1>What Can You Afford?</h1>
                            <p>How much home can you afford? Review your income, savings, and debt to figure out how much home you can afford.</p>
                            <h2>How Much Can You Afford?</h2>
                            <p>Now that you know what you're looking for, the next step is figuring out what type of home you can afford. A review of your income, savings, monthly expenses and debt will be necessary.</p>
                            <p>Early in the process, you'll want to get pre-qualified for a mortgage loan. It enables you to move swiftly when you find the right home, especially when there are other interested buyers. It also indicates to the seller that you are serious and can afford to buy the property. A pre-approval is a simple calculation done by a mortgage lender that tells you the amount you'll be able to finance through a loan and what your monthly payment will be.</p>
                            <ul>
                                <li>Gross income</li>
                                <li>The funds you have available for the down payment, closing costs and cash reserves required by the lender</li>
                                <li>Your debt</li>
                                <li>Your credit history</li>
                                <li>The type of mortgage you select</li>
                                <li>Current interest rates</li>
                            </ul>
                            <p>The price you can afford to pay for a home will depend on several factors, such as:</p>
                            <p>Another figure that lenders use to evaluate how much you can afford is the housing expense-to-income ratio. It is determined by calculating your projected monthly housing expense, which consists of the principal and interest payment, property tax payments and insurance premiums on your new home loan (also known as PITI).</p>
                        </>
                    )}
                    {activeButton === "button3" && (
                        <>
                            <h1>Know Your Neighborhood</h1>
                            <p>Evaluating a neighborhood and surrounding areas thoroughly is essential.</p>
                            <p>When you buy a home, you're investing in a community. You'll spend a significant amount of time and money supporting the schools, community organizations and commercial centers in the area. Before you make the final decision, take a good look at the location and make sure it fits your lifestyle. For example:</p>
                            <ul>
                                <li>Evaluate the property’s proximity to other important locations in your life. How long will your commute time be? Is there a hospital or doctor's office nearby? What about schools, childcare, shopping, family and friends?</li>
                                <li>Consider all of your transportation options. A new home could lend itself to public transportation options or carpooling. Depending on the type of community, you may be able to find alternative methods of transportation. Take the time to drive from the new home to your commuting destinations, to get a sense of what your daily life will be like.</li>
                                <li>Make sure you feel comfortable in the area. Drive around the neighborhood at different times of the day and night on multiple days of the week to observe activity and noise levels. An educated buyer is a happy one!</li>
                            </ul>
                            <p>CENTURY 21® real estate professionals are a tremendous resource. Ask your agent for a list of schools, shopping centers, parks or other amenities that are important to you. Buying a new home is about more than the structure and property. It's about your new lifestyle as well.</p>
                            <p><span>TIP:</span>  Visit and understand the school district. Even if you don't have children in the school system now, you may some day. The district reputation could positively or negatively impact the selling price of your future home as well.</p>
                        </>
                    )}
                    {activeButton === "button4" && (
                        <>
                            <h1>Shopping For A Home</h1>
                            <p>Buying a home is one of the most important decisions you will make. That's why it's in your best interest to choose an experienced real estate agent who listens to and understands your needs, and has detailed knowledge of the area in which you want to want to live.</p>
                            <p>When you choose a CENTURY 21® agent, you're dealing with a professional who understands your concerns and will provide you with the personalized service that makes all the difference.</p>
                            <p>What should you expect in your first meeting with a real estate agent? A CENTURY 21 Agent will typically talk to you about the neighborhood where you want to live, home prices, schools, transportation, and the surrounding commercial and residential areas. They can also address the pros and cons of using a buyer's agent versus a sales or dual agent.</p>
                            <p>When you're ready to visit houses, ask your CENTURY 21® Agent to help you with:</p>
                            <ul>
                                <li>Arranging showings</li>
                                <li>Tracking the properties you've seen</li>
                                <li>Identifying homes that meet your criteria and keep track of your "what's right for you" list</li>
                            </ul>
                            <p><span>TIP:</span> After touring each home, write down what you liked and didn't like. Your CENTURY 21® Agent can help you develop a rating system to narrow the field. For example, pick the house you like best on day one and compare all other houses to it. When you find a better one, use the new favorite as your standard.</p>
                        </>
                    )}
                </div>
                <div id="options">
                    <h3>On This Page</h3>
                    <button onClick={() => handleButtonClick("button1")} className={activeButton === "button1" ? "active" : ""}>Whats Right For You?</button>
                    <button onClick={() => handleButtonClick("button2")} className={activeButton === "button2" ? "active" : ""}>What Can You Afford?</button>
                    <button onClick={() => handleButtonClick("button3")} className={activeButton === "button3" ? "active" : ""}>Know Your Neighborhood</button>
                    <button onClick={() => handleButtonClick("button4")} className={activeButton === "button4" ? "active" : ""}>Shopping For A Home</button>
                </div>
            </div>
            <HomeFooter />
        </div>
    );
}

export default HomeOYO

