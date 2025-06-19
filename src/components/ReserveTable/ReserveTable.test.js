import React from "react";
import { render, screen } from "@testing-library/react";
import ReserveTable from "./ReserveTable";

const mockNavigate = jest.fn();

jest.mock("react-router-dom", () => ({
    ...jest.requireActual("react-router-dom"),
    useNavigate: () => mockNavigate,
}));

const mockDispatch = jest.fn();
const availableTimes = [
    "17:00",
    "17:30",
    "19:30",
    "20:00",
    "21:30",
    "22:30",
    "23:00",
    "23:30",
];

describe("ReserveTable Component", () => {
    test("renders static headings correctly", () => {
        render(
            <ReserveTable
                availableTimes={availableTimes}
                dispatch={mockDispatch}
            />
        );

        // Check for heading text
        expect(screen.getByText("Little Lemon")).toBeInTheDocument();
        expect(screen.getByText("Chicago")).toBeInTheDocument();
        expect(
            screen.getByText("Find a table for any occasion")
        ).toBeInTheDocument();
    });

    test("renders form labels correctly", () => {
        render(
            <ReserveTable
                availableTimes={availableTimes}
                dispatch={mockDispatch}
            />
        );

        expect(screen.getByLabelText("First/Last Name")).toBeInTheDocument();
        expect(screen.getByLabelText("Choose Date")).toBeInTheDocument();
        expect(screen.getByLabelText("Choose time")).toBeInTheDocument();
        expect(screen.getByLabelText("Number of guests")).toBeInTheDocument();
        expect(screen.getByText("Occasion")).toBeInTheDocument();
        expect(screen.getByText("Seating Options")).toBeInTheDocument();
    });

    test("renders confirm button", () => {
        render(
            <ReserveTable
                availableTimes={availableTimes}
                dispatch={mockDispatch}
            />
        );
        expect(
            screen.getByRole("button", { name: "Confirm Reservation" })
        ).toBeInTheDocument();
    });
});
