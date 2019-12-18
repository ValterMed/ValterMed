import { createReducer } from "redux-starter-kit";
import { updateDate } from "../actions/moviesActions";

const initialState = {
  message: "Start Redux",
  date: new Date()
};

export default createReducer(initialState, {
  [updateDate]: (state, action) => {
    state.date = action.payload.newDate;
    state.message = action.payload.newMessage;
  }
});
