import "./Header.css";
import Logo from "../../assets/icons/Logo.png";
import Basket from "../../assets/icons/Basket.svg";
import Nav from "./Nav";

const Header = () => {
    return (
        <header className="header">
            <div className="logo">
                <img src={Logo} alt="Lemon Logo" />
            </div>
            <Nav />
            <div className="header-actions">
                <button className="order-button">Order Online</button>
                <button className="cart-icon">
                    <img src={Basket} alt="Basket" className="basket" />
                </button>
            </div>
        </header>
    );
};

export default Header;
