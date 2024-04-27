import "./homeFooter.scss"

function homeFooter(){
    return(
        <div className="homeFooter">
            <div className="footerLeft">
                <div className="footerLeftLogo">
                    <img src="./public/Icons\logo.png" alt="Logo" />
                    <p>Real Estate</p>
                </div>
                <h4>Making your choices easier</h4>
                <h2>Privacy policy <br />Terms & Conditions</h2>
            </div>
            <div className="footerCenter">
                <p>Contact us</p>
                <div className="footerIcons">
                <a href="https://www.facebook.com/" ><img className="icons" src="./public/Icons\facebook.png" alt="Facebook" /></a>
                <a href="https://www.instagram.com/" ><img src="./public/Icons\instagram.png" alt="Instagram" /></a>
                <a href="https://www.twitter.com/" ><img src="./public/Icons\twitter.png" alt="Twitter" /></a>
                </div>
                <p id="copyRights">Copyright 2024, All rights reserved.</p>
            </div>
            <div className="footerRight">
                <h2>Write to one of our agents</h2>
                <p id="callus">Call Us:</p>
                <p>+383 999 999</p>
            </div>
        </div>
    )
}

export default homeFooter;