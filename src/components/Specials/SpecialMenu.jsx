import "./SpecialMenu.css";
import { DEFAULT_MENU } from "./menu-list";
import Card from "./Card";

const SpecialMenuSection = () => {
    return (
        <div className="special-menu-section">
            <div className="menu-section-title">
                <h1>This week's specials</h1>
            </div>
            <div className="special-menu-container">
                {DEFAULT_MENU.map((item, index) => (
                    <Card key={index} {...item} />
                ))}
            </div>
        </div>
    );
};

export default SpecialMenuSection;
