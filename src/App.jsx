import Navbar from "./Components/navbar";
import HomeSearch from "./HomePage/homeSearch";
import HomeProducts from "./HomePage/homeProducts";
import HomeHelp from "./HomePage/homeHelp";
import HomeFooter from "./Components/homeFooter";
import SinglePage from "./SinglePost/singlePost";
import "./layout.scss";
import NewPost from "./NewPost/newPost";
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