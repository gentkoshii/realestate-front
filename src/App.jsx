import Navbar from "./Components/navbar";
import HomeSearch from "./HomePage/homeSearch";
import HomeProducts from "./HomePage/homeProducts";
import HomeHelp from "./HomePage/homeHelp";
import HomeFooter from "./Components/homeFooter";
import "./layout.scss";




function App() {
    return (
        <div className="layout">
            <Navbar/>
            <HomeSearch/>
            <HomeProducts/>
            <HomeHelp/>
            <HomeFooter/>
        </div>
    )
  }
  
  export default App