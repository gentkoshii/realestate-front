import React from "react";
import Navbar from "../Components/navbar";
import HomeFooter from "../Components/homeFooter";
import "./properties.scss";

function properties() {
    return (
        <div className="properties">
            <Navbar></Navbar>
            <div className="filter">
                <select name="Sort" id="Sort">
                    <option value="Exclusive">SORT: EXCLUSIVE (DEFAULT)</option>
                    <option value="Affordable">SORT: AFFORDABLE</option>
                    <option value="Cheap">SORT: CHEAP</option>
                </select>
            </div>
            <div className="grid">
                <div className="Property">
                    <a href="">
                        <img src="./House img\House1.jpg" alt="House Image" />
                        <h2>Location</h2>
                        <h4>Price$$$</h4>
                        <p>Descripton: <br /> Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    </a>
                </div>
                <div className="Property">
                    <a href="">
                        <img src="./House img\House2.jpg" alt="House Image" />
                        <h2>Location</h2>
                        <h4>Price$$$</h4>
                        <p>Descripton: <br /> Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    </a>
                </div>
                <div className="Property">
                    <a href="">
                        <img src="./House img\House3.jpg" alt="House Image" />
                        <h2>Location</h2>
                        <h4>Price$$$</h4>
                        <p>Descripton: <br /> Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    </a>
                </div>
                <div className="Property">
                    <a href="">
                        <img src="./House img\House4.jpg" alt="House Image" />
                        <h2>Location</h2>
                        <h4>Price$$$</h4>
                        <p>Descripton: <br /> Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    </a>
                </div>
                <div className="Property">
                    <a href="">
                        <img src="./House img\House5.jpg" alt="House Image" />
                        <h2>Location</h2>
                        <h4>Price$$$</h4>
                        <p>Descripton: <br /> Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    </a>
                </div>
                <div className="Property">
                    <a href="">
                        <img src="./House img\House6.jpg" alt="House Image" />
                        <h2>Location</h2>
                        <h4>Price$$$</h4>
                        <p>Descripton: <br /> Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    </a>
                </div>
                <div className="Property">
                    <a href="">
                        <img src="./House img\House7.jpg" alt="House Image" />
                        <h2>Location</h2>
                        <h4>Price$$$</h4>
                        <p>Descripton: <br /> Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    </a>
                </div>
                <div className="Property">
                    <a href="">
                        <img src="./House img\House8.jpg" alt="House Image" />
                        <h2>Location</h2>
                        <h4>Price$$$</h4>
                        <p>Descripton: <br /> Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    </a>
                </div>
                <div className="Property">
                    <a href="">
                        <img src="./House img\House9.jpg" alt="House Image" />
                        <h2>Location</h2>
                        <h4>Price$$$</h4>
                        <p>Descripton: <br /> Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    </a>
                </div>

            </div>
            <HomeFooter></HomeFooter>
        </div>
    )
}
export default properties