import Navbar from "./Components/navbar";
import HomeProducts from "./HomePage/homeProducts";
import HomeHelp from "./HomePage/homeHelp";
import HomeFooter from "./Components/homeFooter";
import "./layout.scss";
import { useState } from "react";
//import Card from "./Components/card";




function App() {
    return (
        <div className="layout">
            <Navbar />
            <HomeProducts />
            <HomeHelp />
            <HomeFooter />
        </div>
    )
}

export default App