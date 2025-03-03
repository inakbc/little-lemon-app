import specialMenu from "./Menu-items";

const SpecialsCard = specialMenu.map((menu) => {
    const image = menu.image;
    const title = menu.title;
    const price = menu.price;
    const description = menu.description;
    const order = menu.order;
    return (
        <div>
            <div className="special-card-container">
                <div className="image-container">
                    <img src={image} alt="Special dessert" />
                </div>
                <div className="special-card-text">
                    <div className="special-card-title">
                        <h3>{title}</h3>
                        <h3 className="price-tag">{price}</h3>
                    </div>
                    <p>{description}</p>
                    {/* <NavLink to="#"> */}
                    <h4>
                        {order}
                        {
                            // <MdDeliveryDining
                            //     size={30}
                            //     style={{
                            //         color: "#333333",
                            //         marginLeft: "10px",
                            //     }}
                            // />
                        }
                    </h4>
                    {/* </NavLink> */}
                </div>
            </div>
        </div>
    );
});

export default SpecialsCard;
