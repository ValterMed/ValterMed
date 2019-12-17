import { createReducer } from "redux-starter-kit";
import { GET_NEXT_PREMIERES_FULFILLED } from "../actions/moviesActions";

const initialState = {
  data: []
};

export default createReducer(initialState, {
  [GET_NEXT_PREMIERES_FULFILLED]: (state, action) => {
    const { results } = action.payload.data;
    state.data = results;
  }
});
