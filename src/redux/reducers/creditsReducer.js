import { createReducer } from "redux-starter-kit";
import { getCredits } from "../actions/moviesActions";

const initialState = {
  data: []
};

export default createReducer(initialState, {
  [getCredits]: (state, action) => {
    const { cast } = action.payload.data;
    state.data = cast;
  }
});
