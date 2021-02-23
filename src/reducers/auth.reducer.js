export const actionTypes = {
  setCurrentUser: "SET_CURRENT_USER",
};

export const reducer = (state, action) => {
  switch (action.type) {
    case actionTypes.setCurrentUser:
      return {
        ...state,
        currentUser: action.payload,
      };

    default:
      return state;
  }
};
