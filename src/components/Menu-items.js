import Special1 from "./icons_assets/greek salad.jpg";
import Special2 from "./icons_assets/bruchetta.svg";
import Special3 from "./icons_assets/lemon dessert.jpg";

const specialMenu = [
    {
        image: Special1,
        title: "Greek Salad",
        price: 14.99,
        description:
            "The famous greek slad of crispy lettuce, peppers, olives amd our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.",
        order: "Order a delivery",
    },
    {
        image: Special2,
        title: "Bruchetta",
        price: 5.99,
        description:
            "Our Bruchetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.",
        order: "Order a delivery",
    },
    {
        image: Special3,
        title: "Lemon Dessert",
        price: 10.99,
        description:
            "This comes straight from grandma's recipe book, every last ingredient has been sourced and is as authentic as can be imagined",
        order: "Order a delivery",
    },
];

export default specialMenu;
