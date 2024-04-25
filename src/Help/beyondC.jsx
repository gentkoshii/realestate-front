import React, { useState, useEffect } from "react";
import Navbar from "../Components/navbar";
import HomeFooter from "../Components/homeFooter";
import "./helpOptions.scss";



function BeyondC() {
    const [activeButton, setActiveButton] = useState("button1");

    const handleButtonClick = (buttonId) => {
        setActiveButton(buttonId);
    };

    return (
        <div className="homeOption">
            <Navbar/>
            <div className="homeOptionSection">
                <div id="text">
                    {activeButton === "button1" && (
                        <>
                            <h1>Inspection</h1>
                            <p>Home inspection is an important step in the buying process. This section offers helpful information that can help to avoid potential problems after the purchase is complete.</p>
                            <h2>Home Inspections</h2>
                            <p>Congratulations! You've made an offer, and reviewed all the documents the seller has provided regarding the condition of the home. But, one important step before you finalize your real estate offer could help you avoid costly home buying mistakes. Hire a professional home inspector to give the house a standard inspection that includes:</p>
                            <p>Once you have arranged for a home inspection, plan to accompany the inspector for the entire procedure. You have the right to be there, and leading home inspection companies will encourage your presence. It helps you to better understand the findings in the report and will reduce post-closing surprises. Don't forget your list of questions and items of concern.</p>
                            <p>A thorough home inspection covers more than 1,000 items, everything from foundation to roof, and takes two to three hours depending on the size and age of the property. The report should reflect the condition of about 400 items. A typical inspection can range from $300-$600</p>
                            <p>Some common items a home inspection could uncover are:</p>
                            <ul>
                                <li>Maintenance problems such as rotting decks, paint chips, water damaged ceilings, etc.</li>
                                <li>Electrical problems (even faulty fuses can lead to bigger difficulties in the future)</li>
                                <li>Drainage problems, which could include water intrusions below the home</li>
                                <li>Roof leaks and defects from aging</li>
                                <li>Poor ventilation, especially in an attic; this is the time to assure that all vents are clean and working properly</li>
                                <li>Excess air leakage due to poor weather stripping and subpar caulking around fixtures</li>
                                <li>Failed window seals, which are routinely found with dual pane windows</li>
                            </ul>
                            <p><span>TIP:</span> TIP: Structural damage caused by water seepage into the foundation, floor joists, and door headers should be discovered at the source, and can be easily identified with a home inspection.</p>
                        </>
                    )}
                    {activeButton === "button2" && (
                        <>
                            <h1>Insurance</h1>
                            <p>This section explains how homeowners’ insurance protects your interests in the event of  natural disasters and catastrophic events.</p>
                            <h2>Homeowners’ Insurance</h2>
                            <p>Protecting your new home with insurance is a must. How well you do that depends on the details of your policy. And while you are not required by law to have homeowners' insurance, mortgage lenders require that you do.</p>
                            <p>A standard policy will suffice in most instances. It protects against several natural disasters and catastrophic events. However, it will not guard against earthquakes, floods, war and nuclear accidents. The policy can be expanded to include these disasters as well as coverage for such things as workers' compensation. In fact, the lender may require that you purchase flood or earthquake insurance if the house is in a flood zone or a region susceptible to earthquakes.</p>
                            <h2>Replacement-Cost Endorsement</h2>
                            <p>You can also cover the depreciated value of personal property, such as televisions and furniture, by purchasing a replacement-cost endorsement. This is an extension of coverage that can enable you to replace the item with one of comparable material and quality.</p>
                        </>
                    )}
                    {activeButton === "button3" && (
                        <>
                            <h1>Timeline and Paperwork</h1>
                            <p>In the home buying process, ownership of the home is officially transferred to you at the closing meeting. Know what to expect when you close on your new home.</p>
                            <h2>Home Buying Process - Timeline and Paperwork</h2>
                            <p>Closing can also be referred to as settlement or escrow. Your CENTURY 21® Agent will guide you through the closing process, since local/state laws vary.</p>
                            <p>In general, ownership of the home is officially transferred from the seller at the closing meeting. Most of the people involved with the purchase of your home will attend your loan closing.</p>
                            <p>In advance, a title company is usually hired to conduct a search for any recorded documents that affect the deed to the property. Examples include easements, liens, tax assessments, covenants, conditions and restrictions, and homeowner association bylaws. The buyer and lender must approve the preliminary title report prior to closing.</p>
                            <p>Once the conditions of sale have been met and the preliminary title report has been approved, all parties will agree to sign closing documents. The preliminary title report then becomes the final title report, on which any applicable title insurance is based.</p>
                            <p>If everyone agrees that the papers are in order, the buyer submits payment to cover the closing. If the lender will be paying your annual property taxes and homeowners' insurance for you, a new escrow account (or reserve) is established at this point.</p>
                            <p><span>TIP:</span> After the documents have been signed, notarized copies will be forwarded to the lender, funds will be released, and the sale will be recorded at the local recorder's office. This legal transfer of the property may take a few days. It is at the point of deed recordation that you become the official owner of the home.</p>
                        </>
                    )}
                    
                </div>
                <div id="options">
                    <h3>On This Page</h3>
                    <button onClick={() => handleButtonClick("button1")} className={activeButton === "button1" ? "active" : ""}>Inspection</button>
                    <button onClick={() => handleButtonClick("button2")} className={activeButton === "button2" ? "active" : ""}>Insurance</button>
                    <button onClick={() => handleButtonClick("button3")} className={activeButton === "button3" ? "active" : ""}>Timeline and Paperwork</button>
                </div>
            </div>
            <HomeFooter />
        </div>
    );
}

export default BeyondC
