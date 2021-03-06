import * as actionTypes from "../actions/actionTypes";
import { updateObject } from "../utility";

const initialState = {
  isOpen: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.OPEN_SIDEBAR:
      console.log("clicked");
      return updateObject(state, { isOpen: true });
    case actionTypes.CLOSE_SIDEBAR:
      return updateObject(state, { isOpen: false });
    default:
      return state;
  }
};

export default reducer;
