import React, { useEffect, useState } from 'react';
import "./homeProducts.scss";
import axios from "axios"
function HomeProducts() {
    const [products, setProducts] = useState([
        {
            image: "./public/House img/House8.jpg",
            title: "Location",
            price: "24.99",
            description: "Hola"
        }
    ]);

    useEffect(() => {
     axios.post("https://localhost:7172/api/Property/Filtered?status=ALL")
        .then(res => {
            if(res.success) {
                setProducts(res.data)
            } else {
                console.error("error");
            }
        })

    },[])

    const [sortBy, setSortBy] = useState("Exclusive");
    const [currentPage, setCurrentPage] = useState(1);
    const productsPerPage = 6; 

    const handleSortChange = (e) => {
        setSortBy(e.target.value);
    };

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

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
