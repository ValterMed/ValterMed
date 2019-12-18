import { configureStore } from "redux-starter-kit";
import creditsReducer from "../reducers/creditsReducer";
import movieDetailReducer from "../reducers/movieDetailReducer";
import nextPremieresReducer from "../reducers/nextPremieresReducer";
import premieresReducer from "../reducers/premieresReducer";
import searchReducer from "../reducers/searchReducer";
import updateDateReducer from "../reducers/updateDateReducer";

export default configureStore({
  reducer: {
    credits: creditsReducer,
    movieDetails: movieDetailReducer,
    nextPremieres: nextPremieresReducer,
    premieres: premieresReducer,
    search: searchReducer,
    date: updateDateReducer
  }
});
