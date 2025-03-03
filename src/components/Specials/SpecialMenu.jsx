import { DEFAULT_MENU } from "./menu-list";
import Card from "./Card";

const SpecialMenuSection = () => {
    return (
        <div className="special-menu-section">
            {DEFAULT_MENU.map((item, index) => (
                <Card key={index} {...item} />
            ))}
        </div>
    );
};

export default SpecialMenuSection;
