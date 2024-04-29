import React from "react";
import Navbar from "../Components/navbar";
import HomeFooter from "../Components/homeFooter";
import "./help.scss"


function NeedHelp(){
    return(
        <><Navbar></Navbar>
            <div className="NeedHelpSection">
                <div className="Text">
                    <h1>Advice on Buying a House</h1>
                    <h3>Buying a home is a significant and exciting decision. This section provides professional real estate advice and helpful home buying tips.</h3>
                </div>
                <div className="Options">
                    <div>
                        <a href="./homeOYO">
                            <img src="/Img/home-of-your-own.jpg" alt="" />
                            <p>A Home Of Your Own</p>
                        </a>
                    </div>
                    <div>
                        <a href="./buyingYH">
                            <img src="/Img/buying-your-home.jpg" alt="" />                  
                            <p>Buying Your Home</p>
                        </a>
                    </div>
                    <div>
                        <a href="./beyondC">
                            <img src="/Img/beyond-closing.jpg" alt="" />
                            <p>Beyond Closing</p>
                        </a>
                    </div>            
                </div>
            </div>
        <HomeFooter></HomeFooter></>
    )
}

export default NeedHelp