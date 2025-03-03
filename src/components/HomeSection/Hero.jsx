import HeroImage from "../../assets/icons/restauranfood.jpg";
import "./Hero.css";
// import { Link } from "react-router-dom";

const Hero = () => {
    return (
        <>
            <div className="hero-section-container">
                <div className="section-left">
                    <h1>Little Lemon</h1>
                    <h2>Chicago</h2>
                    <p>
                        We are a family owned Mediterranean restaurant, focused
                        on traditional recipes served with a modern twist.
                    </p>

                    {/* <Link to="/reservations"> */}
                    <button id="button" to="/reservations">
                        Reserve a Table
                    </button>
                    {/* </Link> */}
                </div>

                <div className="section-right">
                    <img src={HeroImage} alt="restaurantFood" />
                </div>
            </div>
        </>
    );
};

export default Hero;
