import React, { useEffect, useState } from 'react';
import "./homeProducts.scss";
import axios from "axios";

function HomeProducts() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await axios.get('https://localhost:7172/api/Properties/GetFiltered?status=ALL');
          // Assuming response.data is an array of objects as you described
          setProducts(response.data.map(item => ({
            id: item.id,
            propertyImage: item.propertyImage ?? '', // Assuming propertyImages is an array of image URLs
            title: item.title,
            price: item.price,
            description: item.description
          })));
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };
  
      fetchData();
    }, []);

    

    const [currentPage, setCurrentPage] = useState(1);
    const productsPerPage = 6; 


    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    const indexOfLastProduct = currentPage * productsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
    const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);

    return (
        <div className="homeProducts">
            <div className="homeProductsP">
                {currentProducts.map((p, index) => (
                    <div className="Product" key={index}>
                            <a href={`http://localhost:5173/property/${p.id}`}>
                            <img src={p.propertyImage} alt="House Image" />
                            <h2>{p.title}</h2>
                            <h4>{p.price}</h4>
                            <p>Description: <br /> {p.description}</p>
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
    )
}

export default HomeProducts;
