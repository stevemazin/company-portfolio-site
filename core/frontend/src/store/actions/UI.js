import * as actionTypes from "./actionTypes";

// actionCreators
export const openSideBar = () => {
  return {
    type: actionTypes.OPEN_SIDEBAR,
  };
};

export const closeSideBar = () => {
  return {
    type: actionTypes.CLOSE_SIDEBAR,
  };
};
