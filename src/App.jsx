import { useReducer } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Homepage from "./components/HomeSection/Homepage";
import SpecialMenuSection from "./components/Specials/SpecialMenu";
import ReserveTable from "./components/ReserveTable/ReserveTable";
import About from "./components/About/About";
import { Route, Routes } from "react-router-dom";
import ReservationConfirmation from "./components/ReservationConfirmation/ReservationConfirmation";

const updateTimes = (state, action) => {
    switch (action.type) {
        case "UPDATE_DATE":
            // eslint-disable-next-line no-undef
            return { ...state, times: fetchAPI(action.date) };

        case "UPDATE_TIMES":
            return { ...state, times: action.times };
        default:
            return state;
    }
};

function App() {
    const initializeTimes = () => {
        // eslint-disable-next-line no-undef
        return { times: [] };
    };

    const [{ times }, dispatch] = useReducer(updateTimes, initializeTimes());

    return (
        <>
            <Header />

            <Routes>
                {/* Root path with sections to scroll */}
                <Route
                    path="/"
                    element={
                        <>
                            <div id="home">
                                <Homepage />
                            </div>
                            <div id="menu">
                                <SpecialMenuSection />
                            </div>
                            <div id="about">
                                <About />
                            </div>
                        </>
                    }
                />

                {/* Route to Reserve Page */}
                <Route
                    path="/reserve"
                    element={
                        <ReserveTable
                            availableTimes={times}
                            dispatch={dispatch}
                        />
                    }
                />
                <Route
                    path="/confirmation"
                    element={<ReservationConfirmation />}
                />
            </Routes>
            {/* <ReservationConfirmation /> */}
        </>
    );
}

export default App;
