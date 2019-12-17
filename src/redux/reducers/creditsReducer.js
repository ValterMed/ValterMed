import { createReducer } from "redux-starter-kit";
import { GET_CREDITS_FULFILLED } from "../actions/moviesActions";

const initialState = {
  data: []
};

export default createReducer(initialState, {
  [GET_CREDITS_FULFILLED]: (state, action) => {
    const { cast } = action.payload.data;
    state.data = cast;
  }
});
