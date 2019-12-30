import Outstand from "../components/Outstand";
import Premiere from "../components/Premiere";
import ShowSearchResults from "../components/ShowSearchResults";
import React, { useEffect } from "react";
import StyledTitle from "../components/StyledTitle";
import Header from "../components/Header";
import {
  updatePremiere,
  updateNextPremieres
} from "../redux/creators/moviesActionsCreators";
import { useDispatch, useSelector } from "react-redux";
import { premiereSelector } from "../redux/selectors/premiereSelector";
import { nextPremiereSelector } from "../redux/selectors/nextPremiereSelector";
import { searchSelector } from "../redux/selectors/searchSelector";

export default props => {
  const dispatch = useDispatch();
  const premiereHandler = useSelector(premiereSelector);
  const nextPremiereHandler = useSelector(nextPremiereSelector);
  const searchHandler = useSelector(searchSelector);

  useEffect(() => {
    dispatch(updatePremiere());
    dispatch(updateNextPremieres());
  }, []);
  
  const renderSearchResults = () => {
    if (searchHandler.data.length === 0) {
      return (
        <div>
          <Outstand movie={premiereHandler.outstandMovie} />
          <StyledTitle>Premieres:</StyledTitle>
          <Premiere movies={premiereHandler.data} />
          <StyledTitle>Upcomming:</StyledTitle>
          <Premiere movies={nextPremiereHandler.data} />
        </div>
      );
    } else {
      return <ShowSearchResults data={searchHandler.data} />;
    }
  };
  return (
    <div>
      <Header path={props.match.path} />
      {renderSearchResults()}
    </div>
  );
};
