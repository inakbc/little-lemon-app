const Card = ({ image, title, price, description }) => (
    <div className="special-menu-card">
        <img src={image} alt={title} />
        <div>
            <h3>{title}</h3>
            <p>Price: {price}</p>
            <p>{description}</p>
        </div>
    </div>
);

export default Card;
