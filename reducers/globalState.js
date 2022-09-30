import { LOADING, LOADING_HALT } from "../constants/globalConstants";

export const loadingReducer = (state = false, action) => {
  switch (action.type) {
    case LOADING:
      return true;
    case LOADING_HALT:
      return false;
    default:
      return state;
  }
};
