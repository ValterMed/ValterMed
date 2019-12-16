import type from "../actions/type";

const initialState = {
  data: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case type.GET_PREMIERES_FULFILLED:
      const {results} = action.payload.data
      const outstandMovie = results[Math.floor(Math.random() * results.length)];
      return Object.assign({}, state, {
        data: results,
        outstandMovie
      });

    default:
      return state;
  }
};
