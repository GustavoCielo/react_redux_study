import { ADD_NUMBER, REMOVE_NUMBER } from "./actionsTypes";

export const addNumber = (number) => {
  return {
    type: ADD_NUMBER,
    number,
  };
};

export const removeNumber = (number) => {
  return {
    type: REMOVE_NUMBER,
    number,
  };
};
