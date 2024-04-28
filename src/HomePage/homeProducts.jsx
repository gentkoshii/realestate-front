import React, { useEffect, useState } from 'react';
import "./homeProducts.scss";
import axios from "axios";

function HomeProducts() {
  const [products, setProducts] = useState([]);



  const [formData, setFormData] = useState({
    minPrice: "",
    maxPrice: "",

  });

  console.log('formData', formData)
  useEffect(() => {
    const fetchData = async (formData) => {
      try {
        const response = await axios.get(`https://localhost:7172/api/search`, {
          params: {
            minPrice: formData.minPrice,
            maxPrice: formData.maxPrice,
            location: formData.location,
            amenities: formData.amenities
          }
        });
        console.log('responseA', response)

        // Map the response data and set it to products state
        setProducts(response.data.map(item => ({
          id: item.id,
          propertyImage: item.propertyImage ?? '', // Assuming propertyImages is an array of image URLs
          title: item.title,
          price: item.price,
          description: item.description,
          location: { address: item.address, city: item.city, country: item.country },
          amenities: item.propertyAmenities
        })));

      } catch (error) {
        console.error(error);
      }
    };

    fetchData(formData); // Call fetchData here

  }, [formData]);

  console.log('products', products)


  const handleChange = (e) => {
    const { name, value } = e.target;
    // Check if the changed input field is for location or amenities
    if (name === "location" || name === "amenities") {
      // Update location or amenities directly
      setFormData({
        ...formData,
        [name]: value
      });
    } else {
      // Convert minPrice and maxPrice to numbers
      const numericValue = name === "minPrice" || name === "maxPrice" ? parseInt(value, 10) : value;
      setFormData({
        ...formData,
        [name]: numericValue
      });
    }
  };



  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can use the formData state to perform search or any other action
    console.log(formData);
  };




  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 6;


  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);
  console.log('currentProducts', currentProducts)

  return (
    <>
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

        </form>
      </div>



      <div className="homeProducts">
        <div className="homeProductsP">
          {currentProducts.map((p, index) => (
            <div className="Product" key={index}>
              <a href={`http://localhost:5173/property/${p.id}`}>
                <img src={p.propertyImage} alt="House Image" />
                <h2>{p.title}</h2>
                <h4>{p.price}</h4>
                <p>Description: {p.description}</p>
                <p>Address:  {p.location.address}</p>
                <p>City:  {p.location.city}</p>
                <p>Country:  {p.location.country}</p>


              </a>
            </div>
          ))}
        </div>
        <div className="pageSelector">
          <button onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1}>&lt;</button>
          <button>{currentPage}</button>
          <button onClick={() => handlePageChange(currentPage + 1)} disabled={indexOfLastProduct >= products.length}>&gt;</button>
        </div>
      </div>
    </>
  )
}

export default HomeProducts;
