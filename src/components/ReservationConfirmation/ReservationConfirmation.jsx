import React from "react";
import { useNavigate } from "react-router-dom";
import "./ReservationConfirmation.css";

const ReservationConfirmation = () => {
    const navigate = useNavigate();
    const params = new URLSearchParams(window.location.search);

    const date = params.get("date");
    const time = params.get("time");
    const guests = params.get("guests");
    const occasion = params.get("occasion");

    return (
        <div className="reservation-container">
            <h1 className="thank-you">Thank you for your reservation!</h1>
            <p className="subtitle">
                WE LOOK FORWARD TO SEEING YOU AT LITTLE LEMON.
            </p>

            <div className="confirmation-card">
                <h2 className="confirmation-title">Confirmation details</h2>
                <p>
                    <strong>Occasion:</strong> {occasion}
                </p>
                <p>
                    <strong>Guests:</strong> {guests}
                </p>
                <p>
                    <strong>Date:</strong> {date}
                </p>
                <p>
                    <strong>Time:</strong> {time}
                </p>
            </div>

            <button
                className="back-home-btn"
                aria-label="On Click"
                onClick={() => navigate("/")}
            >
                Back to home
            </button>
        </div>
    );
};

export default ReservationConfirmation;
