import "./SpecialMenu.css";

const Card = ({ image, title, price, description }) => (
    <div className="special-menu-card">
        <div className="image-container">
            <img src={image} alt={title} />
        </div>

        <div className="card-title">
            <h3>{title}</h3>
            <p>Price: {price}</p>
        </div>
        <div>
            <p>{description}</p>
        </div>
        <button className="order-now-button">Order Now</button>
    </div>
);

export default Card;
