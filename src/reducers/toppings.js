import { BASE } from "../actions/types";

const initialState = {
  profile: null
};

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_PROFILE:
      return {
        ...state,
        profile: payload
      };
    default:
      return state;
  }
}
