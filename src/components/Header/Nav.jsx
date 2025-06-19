import { HashLink } from "react-router-hash-link";
import "./Header.css";
import { DEFAULT_TABS } from "./tabs-list";
import { Link } from "react-router-dom";

const Nav = ({ isMenuOpen }) => {
    return (
        <nav className={`nav ${isMenuOpen ? "open" : ""}`}>
            <ul>
                {DEFAULT_TABS.map(({ title, url }) => (
                    <li key={url}>
                        <HashLink smooth to={url}>
                            {title}
                        </HashLink>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default Nav;
