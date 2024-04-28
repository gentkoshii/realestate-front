import React, { useState, useEffect } from "react";
import axios from 'axios';
import Navbar from "../Components/navbar";
import HomeFooter from "../Components/homeFooter";
import "./properties.scss";
import Card from "../Components/card";

function Properties() {

    const [properties, setProperties] = useState([]);
    const [error, setError] = useState(null);
    const [activeButton, setActiveButton] = useState("");

    const handleButtonClick = async (buttonId) => {
        setActiveButton(buttonId);
        try {
            // Get the token from local storage
            const token = localStorage.getItem('token');

            // Set the status based on the button clicked
            let status = "ALL";
            if (buttonId === "buy") {
                status = "buy";
            } else if (buttonId === "rent") {
                status = "rent";
            }

            // Make the API call to fetch filtered properties
            const response = await axios.get(`https://localhost:7172/api/Properties/GetFiltered`, {
                params: { status: status },
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });

            // Handle the response data
            setProperties(response.data);
        } catch (error) {
            console.error('Error fetching properties:', error);
            setError(error.message);
        }
    };

    useEffect(() => {
        // Fetch properties initially
        handleButtonClick(activeButton);
    }, []);

    return (
        <div className="properties">
            <Navbar />
            <div className="filter">
                <button onClick={() => handleButtonClick("buy")} className={activeButton === "buy" ? "active" : ""}>Buy</button>
                <button onClick={() => handleButtonClick("rent")} className={activeButton === "rent" ? "active" : ""}>Rent</button>
            </div>
            <div className="grid">
                {
                    properties.map(property => (
                        <Card key={property.id} property={property} />
                    ))
                }
            </div>
            <HomeFooter />
        </div>
    );
}

export default Properties;
