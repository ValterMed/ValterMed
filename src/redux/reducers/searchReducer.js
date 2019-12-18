import { createReducer } from "redux-starter-kit";
import { getSearch } from "../actions/moviesActions";

const initialState = {
  data: []
};

export default createReducer(initialState, {
  [getSearch]: (state, action) => {
    const { results } = action.payload.data;
    state.data = results;
  }
});
