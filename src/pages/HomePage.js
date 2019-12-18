// import Outstand from "../components/Outstand";
// import Premiere from "../components/Premiere";
// import { connect } from "react-redux";
// import { getPremieres, getNextPremieres } from "../redux/creators/moviesActionsCreators";
// import ShowSearchResults from "../components/ShowSearchResults";
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

export default () => {
  const dispatch = useDispatch();
  const premiereHandler = useSelector(premiereSelector);
  const nextPremiereHandler = useSelector(nextPremiereSelector)
  const searchHandler = useSelector(searchSelector);

  useEffect(() => {
    dispatch(updatePremiere());
    dispatch(updateNextPremieres());
  }, []);

  const renderSearchResults = () => {
    if (searchHandler.data.length === 0) {
      return (
        <div>
          <p>no hay resultados de busqueda</p>
          {/* <Outstand movie={this.props.premieres.outstandMovie} />
          <StyledTitle>Premieres:</StyledTitle>
          <Premiere movies={this.props.premieres.data} />
          <StyledTitle>Upcomming:</StyledTitle>
          <Premiere movies={this.props.next_premieres.data} /> */}
        </div>
      );
    } else {
      // return <ShowSearchResults data={data} />;
      return <p>Mostrando Resultados</p>
    }
  }

  return (
    <div>
      <StyledTitle>Pruebas</StyledTitle>
      {renderSearchResults()}
    </div>
  );
};

// class HomePage extends React.Component {
//   componentDidMount() {
//     this.props.getPremieres();
//     this.props.getNextPremieres();
//   }

//   renderSearchResults() {
//     const { data } = this.props.search;
//     if (data.length === 0) {
//       return (
//         <div>
//           <Outstand movie={this.props.premieres.outstandMovie} />
//           <StyledTitle>Premieres:</StyledTitle>
//           <Premiere movies={this.props.premieres.data} />
//           <StyledTitle>Upcomming:</StyledTitle>
//           <Premiere movies={this.props.next_premieres.data} />
//         </div>
//       );
//     } else {
//       return <ShowSearchResults data={data} />;
//     }
//   }

//   render() {
//     return (
//       <div>
//         <Header path={this.props.match.path} />
//         {this.renderSearchResults()}
//       </div>
//     );
//   }
// }
