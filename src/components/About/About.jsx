import React from "react";
import "./About.css";
import chefImage1 from "../../assets/icons/Mario-Adrian-A.jpg";
import chefImage2 from "../../assets/icons/Mario-Adrian-b.jpg";

const About = () => {
    return (
        <div className="about-container">
            <div className="text-section">
                <h1 className="about-title">Little Lemon</h1>
                <h2 className="location">Chicago</h2>
                <p className="description">
                    Little Lemon is owned by two Italian brothers, Mario and
                    Adrian, who moved to the United States to pursue their
                    shared dream of owning a restaurant.
                </p>
                <p className="description">
                    To craft the menu, Mario relies on family recipes and his
                    experience as a chef in Italy. Adrian does all the marketing
                    for the restaurant and led the effort to expand the menu
                    beyond classic Italian to incorporate additional cuisines
                    from the Mediterranean region.
                </p>
            </div>
            <div className="image-section">
                <img
                    src={chefImage1}
                    alt="Chefs in the kitchen"
                    className="image image1"
                />
                <img
                    src={chefImage2}
                    alt="Chefs smiling"
                    className="image image2"
                />
            </div>
        </div>
    );
};

export default About;
