import HeroImage from "../../assets/icons/restauranfood.jpg";
import "./Hero.css";
import { Link } from "react-router-dom";

const Hero = () => {
    return (
        <>
            <div className="hero-section-container">
                <div className="hero-content">
                    <h1 className="hero-title">Little Lemon</h1>
                    <h2 className="hero-location">Chicago</h2>
                    <p className="hero-description">
                        We are a family owned Mediterranean restaurant, focused
                        on traditional recipes served with a modern twist.
                    </p>

                    <Link to="/reserve">
                        <button className="hero-button" aria-label="On Click">
                            Reserve a Table
                        </button>
                    </Link>
                </div>

                <div className="hero-image">
                    <img src={HeroImage} alt="restaurantFood" />
                </div>
            </div>
        </>
    );
};

export default Hero;
