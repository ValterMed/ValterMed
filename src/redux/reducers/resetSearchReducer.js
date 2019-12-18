import { createReducer } from "redux-starter-kit";
import { clearSearch } from "../actions/moviesActions";

const initialState = {
  data: []
};

export default createReducer(initialState, {
  [clearSearch]: () => {
    state.data = [];
  }
});