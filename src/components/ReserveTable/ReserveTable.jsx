import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./ReserveTable.css";
import Image1 from "../../assets/icons/restaurant.jpg";
import Image2 from "../../assets/icons/restaurant-chef.jpg";

const ReserveTable = ({ availableTimes, dispatch }) => {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        name: "",
        date: "",
        time: "",
        guests: "",
        occasion: "",
        seating: "standard",
    });

    // Helper to format date as YYYY-MM-DD
    const formatDate = (dateObj) => {
        const year = dateObj.getFullYear();
        const month = String(dateObj.getMonth() + 1).padStart(2, "0");
        const day = String(dateObj.getDate()).padStart(2, "0");
        return `${year}-${month}-${day}`;
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;

        setFormData((prev) => {
            // Reset time when date changes
            if (name === "date") {
                return { ...prev, date: value, time: "" };
            }

            return { ...prev, [name]: value };
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Re-fetch times to ensure up-to-date
        const selectedDate = new Date(formData.date);
        // eslint-disable-next-line no-undef
        const latestAvailableTimes = fetchAPI(selectedDate);

        if (!latestAvailableTimes.includes(formData.time)) {
            alert(
                "Selected time is no longer available. Please choose another."
            );
            return;
        }

        // eslint-disable-next-line no-undef
        const success = submitAPI(formData);

        if (success) {
            const queryParams = new URLSearchParams({
                date: formData.date,
                time: formData.time,
                guests: formData.guests,
                occasion: formData.occasion,
            });
            navigate(`/confirmation?${queryParams.toString()}`);
            dispatch({ type: "UPDATE_TIMES", times: [] });
        } else {
            alert("Reservation failed. Please try again.");
        }
    };

    return (
        <div className="reservation-container">
            <div className="reservation-card">
                <div className="reservation-content">
                    <div className="header-title">
                        <h2 className="title">Little Lemon</h2>
                        <h3 className="title-chicago">Chicago</h3>
                    </div>
                    <p className="res-subtitle">
                        Find a table for any occasion
                    </p>
                    <div className="image-container">
                        <img
                            src={Image1}
                            alt="restaurant-image"
                            className="image"
                        />
                        <img src={Image2} alt="chef-image" className="image" />
                    </div>

                    <form onSubmit={handleSubmit} className="form">
                        <label htmlFor="name" className="label">
                            First/Last Name
                        </label>
                        <input
                            id="name"
                            type="text"
                            name="name"
                            placeholder="First Name / Last Name"
                            className="input"
                            required
                            onChange={handleInputChange}
                            value={formData.name}
                        />
                        <label htmlFor="date" className="label">
                            Choose Date
                        </label>
                        <input
                            id="date"
                            type="date"
                            name="date"
                            placeholder="Date"
                            className="input"
                            required
                            onChange={(e) => {
                                handleInputChange(e);
                                dispatch({
                                    type: "UPDATE_DATE",
                                    date: new Date(e.target.value),
                                });
                            }}
                            value={formData.date}
                            min={formatDate(new Date())} // Disable the past dates.
                        />
                        <label htmlFor="res-time" className="label">
                            Choose time
                        </label>
                        <select
                            id="res-time"
                            name="time"
                            className="input"
                            onChange={handleInputChange}
                            value={formData.time}
                            required
                        >
                            <option value="" disabled>
                                {availableTimes.length
                                    ? "Select time"
                                    : "Select a date to view available times"}
                            </option>
                            {availableTimes.map((time) => (
                                <option key={time} value={time}>
                                    {time}
                                </option>
                            ))}
                        </select>
                        <label htmlFor="guests" className="label">
                            Number of guests
                        </label>
                        <input
                            id="guests"
                            type="number"
                            name="guests"
                            placeholder="0"
                            className="input"
                            min="1"
                            max="10"
                            required
                            onChange={handleInputChange}
                            value={formData.guests}
                        ></input>

                        <label className="label">Occasion</label>
                        <select
                            name="occasion"
                            className="input"
                            onChange={handleInputChange}
                            value={formData.occasion}
                            required
                        >
                            <option value="" disabled hidden>
                                Select occasion
                            </option>
                            <option value="anniversary">Anniversary</option>
                            <option value="birthday">Birthday</option>
                            <option value="business meal">Business Meal</option>
                            <option value="casual">Casual</option>
                            <option value="date">Date</option>
                        </select>
                        <label className="label">Seating Options</label>
                        <div className="radio-group">
                            <label>
                                <input
                                    type="radio"
                                    name="seating"
                                    value="standard"
                                    checked={formData.seating === "standard"}
                                    onChange={handleInputChange}
                                />
                                Standard
                            </label>
                            <label>
                                <input
                                    type="radio"
                                    name="seating"
                                    value="outside"
                                    checked={formData.seating === "outside"}
                                    onChange={handleInputChange}
                                />
                                Outside
                            </label>
                        </div>
                        <button
                            className="reserve-button"
                            aria-label="Confirm Reservation"
                        >
                            Confirm Reservation
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ReserveTable;
