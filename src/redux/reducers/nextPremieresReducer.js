import type from "../actions/type";

const initialState = {
  data: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case type.GET_NEXT_PREMIERES_FULFILLED:
      const {results} = action.payload.data
      return Object.assign({}, state, {
        data: results,
      });

    default:
      return state;
  }
};
