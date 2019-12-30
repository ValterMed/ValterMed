import React, { useEffect } from "react";
import Outstand from "../components/Outstand";
import Cast from "../components/Cast";
import Header from "../components/Header";
import { useDispatch, useSelector } from "react-redux";
import { obtainCredits, obtainMovieDetails } from "../redux/creators/moviesActionsCreators";
import { movieDetailSelector } from "../redux/selectors/movieDetailSelector";
import { creditSelector } from "../redux/selectors/creditSelector";

export default props => {
  const dispatch = useDispatch();
  const movieDetailHandler = useSelector(movieDetailSelector);
  const creditHandler = useSelector(creditSelector);
  useEffect(() => {
    const { movieID } = props.match.params;
    dispatch(obtainMovieDetails(movieID));
    dispatch(obtainCredits(movieID));
  }, []);
  return (
    <div>
      <Header path={props.match.path} />
      <Outstand movie={movieDetailHandler.data}></Outstand>
      <Cast cast={creditHandler.data}></Cast>
    </div>
  );
};
