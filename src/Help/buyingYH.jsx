import React, { useState, useEffect } from "react";
import Navbar from "../Components/navbar";
import HomeFooter from "../Components/homeFooter";
import "./helpOptions.scss";

function BuyingYH() {
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
                            <h1>Making An Offer</h1>
                            <p>Making an offer to purchase a home has its own set of factors. Rely on a CENTURY 21® Agent’s experience and knowledge to make a successful home buying offer.</p>
                            <h2>Making a Home Buyer Offer</h2>
                            <p>Once you’ve found your ideal house, it’s time to get started with the financial and contractual side of the purchase. Let your CENTURY 21® professional guide you through this process. Purchase contracts vary in length and terms from state to state, and sometimes within a state.</p>
                            <p>Multiple offers on the same home are not uncommon, so you may only get one chance to make an offer that the seller will consider. That's why it's important to think carefully about your strategy. In most cases it is better to have your real estate professional present the offer. If you have any personal interaction with the homeowner, avoid sharing any information about your move, your current housing status, financial status or your feelings about their property - positive or negative. This could work against you in future negotiations.</p>
                            <p><span>TIP:</span> You and the seller have different goals, so it’s important to consult with your CENTURY 21® Agent. He or she can bring order to the process, and will know what questions to ask to help you reach a desirable outcome.</p>
                        </>
                    )}
                    {activeButton === "button2" && (
                        <>
                            <h1>Lease Options</h1>
                            <p>Looking to buy home through a lease option? Learn about lease options here, or contact a CENTURY 21® Agent for complete support.</p>
                            <p>A lease option is an arrangement between the buyer and the seller to purchase a house after renting it for a specific period of time. A portion of the rent would be applied toward the purchase if the option is exercised. This is referred to as rent credit. Most institutional lenders will accept rent credit as part of the down payment, if rental payments exceed the market rent and if a valid lease-purchase agreement is in effect. A copy of the valid lease-purchase agreement must be attached to the loan application. Read any lease option arrangement carefully for details about transferring the option and other important concerns.</p>
                        </>
                    )}
                    {activeButton === "button3" && (
                        <>
                            <h1>All Cash</h1>
                            <p>If you are planning to buy a home with cash, this section provides some useful information to make your transaction a success.</p>
                            <h2>Buying a Home With Cash</h2>
                            <p>Though most buyers don't buy a home with all cash, anyone considering such a move may be wondering how it’s done. Because all cash buyers sidestep the time-consuming loan qualification process, the deal can close very quickly. The primary advantage of buying a home with cash is completely avoiding mortgage interest. Buyers also save money that would be spent on loan origination fees, required appraisal, some closing costs and various other charges imposed by the lender.</p>
                            <p><span>TIP:</span> Take a look at other investments that are doing well, and determine if spending cash on a home is your best investment option.</p>
                        </>
                    )}
                </div>
                <div id="options">
                    <h3>On This Page</h3>
                    <button onClick={() => handleButtonClick("button1")} className={activeButton === "button1" ? "active" : ""}>Making An Offer</button>
                    <button onClick={() => handleButtonClick("button2")} className={activeButton === "button3" ? "active" : ""}>Lease Options</button>
                    <button onClick={() => handleButtonClick("button3")} className={activeButton === "button4" ? "active" : ""}>All Cash</button>
                </div>
            </div>
            <HomeFooter />
        </div>
    );
}

export default BuyingYH;
