import { configureStore } from "redux-starter-kit";
import creditsReducer from "../reducers/creditsReducer";
import movieDetailReducer from "../reducers/movieDetailReducer";
import nextPremieresReducer from "../reducers/nextPremieresReducer";
import premieresReducer from "../reducers/premieresReducer";
import searchReducer from "../reducers/searchReducer";
import testReducer from "../reducers/testReducer";

export default configureStore({
  reducer: {
    credits: creditsReducer,
    movie_details: movieDetailReducer,
    next_premieres: nextPremieresReducer,
    premieres: premieresReducer,
    search: searchReducer,
    test: testReducer
  }
});
