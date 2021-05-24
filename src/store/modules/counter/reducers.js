import { ADD_NUMBER, REMOVE_NUMBER } from "./actionsTypes";

const reducerCounter = (state = 0, action) => {
  switch (action.type) {
    case ADD_NUMBER:
      return state + action.number;
    case REMOVE_NUMBER:
      return state - action.number;
    default:
      return state;
  }
};

export default reducerCounter;
