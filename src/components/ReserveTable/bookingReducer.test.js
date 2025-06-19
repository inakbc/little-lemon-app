import { updateTimes, initializeTimes } from "../../reducers/bookingReducer";

// Mock fetchAPI globally
global.fetchAPI = jest.fn();

describe("Booking Reducer and Initializer", () => {
    beforeEach(() => {
        // eslint-disable-next-line no-undef
        fetchAPI.mockReset(); // Clear mock before each test
    });

    test("initializeTimes returns times from fetchAPI", () => {
        const mockTimes = ["17:00", "18:00", "19:00"];
        // eslint-disable-next-line no-undef
        fetchAPI.mockReturnValue(mockTimes);

        const result = initializeTimes();

        // eslint-disable-next-line no-undef
        expect(fetchAPI).toHaveBeenCalledWith(expect.any(Date));
        expect(result).toEqual({ times: mockTimes });
    });

    test("updateTimes handles UPDATE_DATE action", () => {
        const mockDate = new Date("2025-06-20");
        const mockTimes = ["18:00", "20:00"];
        // eslint-disable-next-line no-undef
        fetchAPI.mockReturnValue(mockTimes);

        const initialState = { times: [] };
        const action = { type: "UPDATE_DATE", date: mockDate };

        const newState = updateTimes(initialState, action);

        // eslint-disable-next-line no-undef
        expect(fetchAPI).toHaveBeenCalledWith(mockDate);
        expect(newState).toEqual({ times: mockTimes });
    });

    test("updateTimes handles UPDATE_TIMES action", () => {
        const initialState = { times: ["17:00"] };
        const newTimes = ["18:00", "19:00"];

        const action = { type: "UPDATE_TIMES", times: newTimes };
        const newState = updateTimes(initialState, action);

        expect(newState).toEqual({ times: newTimes });
    });

    test("updateTimes handles unknown action type", () => {
        const initialState = { times: ["17:00"] };
        const action = { type: "UNKNOWN_ACTION" };

        const newState = updateTimes(initialState, action);

        expect(newState).toEqual(initialState); // unchanged
    });
});
