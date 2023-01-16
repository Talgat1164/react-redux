import { INPUT_TEXT } from "./types";

const initialState = {
  text: "",
};

export const inputReducer = (state = initialState, action) => {
  console.log("input text reducer > ", action);
  switch (action.type) {
    case INPUT_TEXT:
      return {
        ...state,
        // text: state.likes + 1,
      };

    default:
      return state;
  }
};
