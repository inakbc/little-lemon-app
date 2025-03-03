import "./Header.css";
import { DEFAULT_TABS } from "./tabs-list";

const Nav = () => {
    return (
        <nav className="nav">
            <ul>
                {DEFAULT_TABS.map(({ title, url }) => (
                    <li key={url}>
                        <a href={url}>{title}</a>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default Nav;
