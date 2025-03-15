import { useState } from "react";
import "./ReserveTable.css";
import Image1 from "../../assets/icons/restaurant.jpg";
import Image2 from "../../assets/icons/restaurant-chef.jpg";

const ReserveTable = () => {
    const [formData, setFormData] = useState({
        Name: "",
        date: "",
        time: "",
        dinners: "",
        occasion: "",
        seating: "standard",
    });

    const handleInputChange = (e) => {
        setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form Submitted:", formData);
        alert("Table reserved successfully!");
    };

    return (
        <div className="reservation-container">
            <div className="reservation-card">
                <div className="reservation-content">
                    <div className="header">
                        <h2 className="title">Little Lemon</h2>
                        <h3 className="title-chicago">Chicago</h3>
                    </div>
                    <p className="subtitle">Find a table for any occasion</p>
                    <div className="image-container">
                        <img
                            src={Image1}
                            alt="restaurant-image"
                            className="image"
                        />
                        <img src={Image2} alt="chef-image" className="image" />
                    </div>

                    <form onSubmit={handleSubmit} className="form">
                        {/* <label className="label">First/Last Name</label> */}
                        <input
                            type="text"
                            name="firstName/lastName"
                            placeholder="First Name / Last Name"
                            className="input"
                            required
                            onChange={handleInputChange}
                        />
                        <div className="date-time-container">
                            {/* <label className="label">Date</label> */}
                            <input
                                type="date"
                                name="date"
                                placeholder="Date"
                                className="input"
                                required
                                onChange={handleInputChange}
                            />
                            {/* <label className="label">Time</label> */}
                            <input
                                type="time"
                                name="time"
                                placeholder="Time"
                                className="input"
                                required
                                onChange={handleInputChange}
                            />
                        </div>
                        <select
                            name="diners"
                            placeholder="Number of Diners"
                            className="input"
                            required
                            onChange={handleInputChange}
                        >
                            <option value="">Number of Diners</option>
                            <option value="1">1 People</option>
                            <option value="2">2 People</option>
                            <option value="3">3 People</option>
                            <option value="4">4 People</option>
                            <option value="5">5 People</option>
                            <option value="6">6 People</option>
                        </select>

                        {/* <label className="label">Occasion</label> */}
                        <select
                            name="occasion"
                            className="input"
                            onChange={handleInputChange}
                        >
                            <option value="none">Select occasion</option>
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
                        <button className="reserve-button">
                            Confirm Reservation
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ReserveTable;
