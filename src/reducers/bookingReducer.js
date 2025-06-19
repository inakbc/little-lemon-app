export const updateTimes = (state, action) => {
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

export const initializeTimes = () => {
    // eslint-disable-next-line no-undef
    return { times: fetchAPI(new Date()) };
};
