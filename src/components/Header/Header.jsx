import "./Header.css";
import Logo from "../../assets/icons/Logo.png";
import Nav from "./Nav";

const Header = () => {
    return (
        <header>
            <div className="logo">
                <img src={Logo} alt="Lemon Logo" />
            </div>
            <Nav />
        </header>
    );
};

export default Header;
