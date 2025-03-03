import "./App.css";
import Header from "./components/Header/Header";
import Homepage from "./components/HomeSection/Homepage";
import SpecialMenuSection from "./components/Specials/SpecialMenu";
// import { Routes, Route, Link } from "react-router-dom";

function App() {
    return (
        <>
            <Header />;
            <Homepage />;
            <SpecialMenuSection />
        </>
    );
}

export default App;
