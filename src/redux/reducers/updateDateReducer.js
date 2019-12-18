import { createReducer } from "redux-starter-kit";
import { updateDate } from "../actions/moviesActions";

// const firstDate = new Date();
const initialState = {
  date: new Date()
};

export default createReducer(initialState, {
  [updateDate]: (state, action) => {
    state.date = action.payload.newDate;
  }
});
