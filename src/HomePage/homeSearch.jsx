import React, { useState } from "react";
import "./homeSearch.scss";

function HomeSearch() {
  const [formData, setFormData] = useState({
    location: "",
    minPrice: "",
    maxPrice: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can use the formData state to perform search or any other action
    console.log(formData);
  };

  return (
    <div className="homeSearch">
      <p>SO EASY ...</p>
      <p className="just">just</p>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="location"
          value={formData.location}
          onChange={handleChange}
          placeholder="City Location"
          id="location"
        />
        <input
          type="number"
          name="minPrice"
          value={formData.minPrice}
          onChange={handleChange}
          min={0}
          max={10000000}
          placeholder="Min Price"
          id="minPrice"
        />
        <input
          type="number"
          name="maxPrice"
          value={formData.maxPrice}
          onChange={handleChange}
          min={0}
          max={10000000}
          placeholder="Max Price"
          id="maxPrice"
        />
        <input
          type="text"
          name="amenities"
          value={formData.Amenities}
          onChange={handleChange}
          placeholder="Amenities"
          id="amenities"
        />
        <button type="submit">
          <img src="./public/Icons/search-icon.png" alt="Search Icon" />
        </button>
      </form>
    </div>
  );
}

export default HomeSearch;
