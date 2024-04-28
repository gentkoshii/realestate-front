// import { BsFillBagFill } from "react-icons/bs";
import "./card.scss"
import { Link } from "react-router-dom";

const Card = ({ property }) => {
  return (
    <Link to={`/property/${property.id}`} className="card-link">
      <section className="card">
        <img src={property?.propertyImage ? property.propertyImage : "/house"} alt={property.title} className="card-img" />
        <div className="card-details">
          <h3 className="card-title">{property.title}</h3>
          <p className="card-description">{property.description}</p>
          <div className="card-location">
            <p className="card-address">{property.address}, {property.city}, {property.country}, {property.zipCode}</p>
          </div>
          <div className="card-info">
            <p className="card-price">
              Price: ${property.price}
              <del>{property.oldPrice && `$${property.oldPrice}`}</del>
            </p>
            <p className="card-bed-bath">
              <span>{property.bedrooms} BD</span> | <span>{property.bathrooms} BA</span>
            </p>
            <p className="card-size">Size: {property.squareMeters} sqm</p>
          </div>
          <div className="card-footer">
            <div className="card-status">{property.status}</div>
            
          </div>
        </div>
      </section>
    </Link>
  );
};

export default Card;