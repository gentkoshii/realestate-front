import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Navbar from '../Components/navbar';
import HomeFooter from '../Components/homeFooter';
import "./singlePost.scss";

const SinglePost = () => {
  const { id } = useParams();
  const [property, setProperty] = useState(null);
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  useEffect(() => {
    const fetchProperty = async () => {
      try {
        // Get the token from local storage
        const token = localStorage.getItem('token');

        // Make the API call to fetch the single property
        const response = await axios.get(`https://localhost:7172/api/Properties/${id}`, {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });

        // Handle the response data
        if (response.status === 200) {
          setProperty(response.data);
        } else {
          console.error('Failed to fetch property:', response.statusText);
          setError('Failed to fetch property');
        }
      } catch (error) {
        console.error('Error fetching property:', error);
        setError('Error fetching property');
      }
    };

    fetchProperty();
  }, [id]);

  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Get the token from local storage
      const token = localStorage.getItem('token');

      // Create the data object to be sent in the request body
      const requestData = {
        propertyId: property.id, // Assuming property id is available in the property object
        userId: 0, // Replace with the actual user id
        message: message
      };

      // Make the API call to post the message
      const response = await axios.post('https://localhost:7172/api/contact/inquiries', requestData, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });

      // Handle the response
      if (response.status === 200) {
        console.log('Message sent successfully');
        // Optionally, you can reset the email and message fields after successful submission
        setEmail("");
        setMessage("");
      } else {
        console.error('Failed to send message:', response.statusText);
        // Handle the error condition
      }
    } catch (error) {
      console.error('Error sending message:', error);
      // Handle the error condition
    }
  };

return (
<div>
      <Navbar />
      <div className="single-post">
        {property && (
          <div className="property-details">
                            <img src={property.propertyImage} alt="House Image" />
            <h1>{property.title}</h1>
            <p>{property.description}</p>
            <div>
              <p>{property.address}, {property.city}, {property.country}, {property.zipCode}</p>
            </div>
            <div>
              <p>Price: ${property.price}</p>
            </div>
            <div>
              <p>{property.bedrooms} Bedrooms | {property.bathrooms} Bathrooms</p>
              <p>Size: {property.squareMeters} sqm</p>
            </div>
            <div>
              <p>Status: {property.status}</p>
              <p>Type: {property.type}</p>
            </div>
            {/* Form for email and message */}
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="email">Email:</label>
                <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message:</label>
                <textarea id="message" value={message} onChange={(e) => setMessage(e.target.value)} />
              </div>
              <button className="btn-send">Send</button>
            </form>
          </div>
        )}
      </div>
      <HomeFooter />
    </div>
  );
};

export default SinglePost;