import {
  FETCH_ASTRO_PROFILE_REQUEST,
  FETCH_ASTRO_PROFILE_SUCCESS,
  FETCH_ASTRO_PROFILE_FAILURE,
} from "../types";

const initialState = {
  profile: null,
  isloading: false,
  error: null,
};

const astrologerReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ASTRO_PROFILE_REQUEST:
      return { ...state, isloading: true, error: null };
    case FETCH_ASTRO_PROFILE_SUCCESS:
      return { ...state, isloading: false, profile: action.payload };
    case FETCH_ASTRO_PROFILE_FAILURE:
      return { ...state, isloading: false, error: action.payload };
    default:
      return state;
  }
};

export default astrologerReducer;
