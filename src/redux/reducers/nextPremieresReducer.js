import { createReducer } from "redux-starter-kit";
import { getNextPremieres } from "../actions/moviesActions";

const initialState = {
  data: []
};

export default createReducer(initialState, {
  [getNextPremieres]: (state, action) => {
    const { results } = action.payload.data;
    state.data = results;
  }
});
