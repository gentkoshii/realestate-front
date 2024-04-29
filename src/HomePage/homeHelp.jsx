import "./homeHelp.scss"
import { Link } from "react-router-dom";

function homeHelp(){
    return(
        <div className="homeHelp">
            <div className="HelpCenter">
                <h2>
                Advice on Buying a House
                </h2>
                <img src="./Img/NeedHelp.jpg" alt="This is a picture" />
                <p>
                Buying a home is a significant and exciting decision. This section provides professional real estate advice and helpful home buying tips.
                </p>
                <Link to="/needhelp" id="NeedHelpButton" >
                    Need Help?
                </Link>
            </div>
        </div>
    )
}

export default homeHelp;