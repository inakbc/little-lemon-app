import "./Header.css";
import Logo from "../../assets/icons/Logo.png";
import Basket from "../../assets/icons/Basket.svg";
import Nav from "./Nav";
import { useEffect, useState } from "react";
import HamburgerMenu from "../../assets/icons/hamburger-menu.svg";
import { HashLink } from "react-router-hash-link";

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [showHeader, setShowHeader] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            if (currentScrollY > lastScrollY && currentScrollY > 50) {
                setShowHeader(false); // Scroll down
            } else {
                setShowHeader(true); // Scroll up
            }

            setLastScrollY(currentScrollY);
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [lastScrollY]);

    return (
        <div>
            <header className={`header ${showHeader ? "show" : "hide"}`}>
                <button
                    className="hamburger"
                    aria-label="On Click"
                    onClick={toggleMenu}
                >
                    <img src={HamburgerMenu} alt="Hamburger Menu" />
                </button>
                <div className="logo">
                    <img src={Logo} alt="Lemon Logo" />
                </div>
                <Nav isMenuOpen={isMenuOpen} />
                <div className="header-actions">
                    <HashLink smooth to="/#menu">
                        <button className="order-button" aria-label="On Click">
                            Order Online
                        </button>
                    </HashLink>
                    <button className="cart-icon" aria-label="On Click">
                        <img src={Basket} alt="Basket" className="basket" />
                    </button>
                </div>
            </header>
        </div>
    );
};

export default Header;
