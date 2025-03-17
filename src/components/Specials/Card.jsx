import "./SpecialMenu.css";

const Card = ({ image, title, price, description }) => (
    <div className="special-card">
        {/* <div className="image-container"> */}
        <img className="special-image" src={image} alt={title} />
        {/* </div> */}
        <div className="special-info">
            <div className="special-header">
                <h3 className="special-name">{title}</h3>
                <span className="special-price">$ {price}</span>
            </div>

            <p className="special-description">{description}</p>
            <a href="/" className="order-now-button">
                Order Now
            </a>
        </div>
    </div>
);

export default Card;
