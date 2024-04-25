import React, { useState } from 'react';
import "./homeProducts.scss";

function HomeProducts() {
    const [products, setProducts] = useState([
        {
            image: "./public/House img/House8.jpg",
            title: "Location",
            price: "24.99",
            description: "Hola"
        }
    ]);

    const [sortBy, setSortBy] = useState("Exclusive");
    const [currentPage, setCurrentPage] = useState(1);
    const productsPerPage = 6; // Change this number as needed

    // Function to handle sorting
    const handleSortChange = (e) => {
        setSortBy(e.target.value);
        // Add sorting logic here based on the selected value
    };

    // Function to handle pagination
    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    // Calculate the index of the first and last product on the current page
    const indexOfLastProduct = currentPage * productsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
    const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);

    return (
        <div className="homeProducts">
            <select name="Sort" id="Sort" onChange={handleSortChange} value={sortBy}>
                <option value="Exclusive">SORT: EXCLUSIVE (DEFAULT)</option>
                <option value="Affordable">SORT: AFFORDABLE</option>
                <option value="Cheap">SORT: CHEAP</option>
            </select>

            <div className="homeProductsP">
                {currentProducts.map((p, index) => (
                    <div className="Product" key={index}>
                        <a href="">
                            <img src={p.image} alt="House Image" />
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
