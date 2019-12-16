import React from "react";
// import axios from "axios";
import Outstand from "../components/Outstand";
import Premiere from "../components/Premiere";
import StyledTitle from "../components/StyledTitle";
import { connect } from "react-redux";
import { getPremieres, getNextPremieres } from "../redux/actions/MoviesActions";
import Header from "../components/Header";
import ShowSearchResults from "../components/ShowSearchResults";
class HomePage extends React.Component {
  // state = {
  //   outstandMovie: "",
  //   next_premieres: []
  // };

  componentDidMount() {
    this.props.getPremieres();
    this.props.getNextPremieres();
    // this.getData();
  }
  // getNextPremieres = async () => {
  //   try {
  //     const results = await axios.get(
  //       "https://api.themoviedb.org/3/movie/upcoming?api_key=f5b812340cf6ce25dc4cf8d4722c5f56&language=es"
  //     );
  //     this.setState({
  //       next_premieres: results.data.results
  //     });
  //   } catch (error) {
  //     console.log(error.message);
  //   }
  // };
  // getData = async () => {
  //   try {
  //     const results = await axios.get(
  //       "https://api.themoviedb.org/3/movie/now_playing?api_key=f5b812340cf6ce25dc4cf8d4722c5f56&language=es"
  //     );
  //     this.setOutstandMovie(results.data.results);
  //     this.setState({
  //       movies: results.data.results
  //     });
  //   } catch (error) {
  //     console.log(error.message);
  //   }
  // };
  // setOutstandMovie(movies) {
  //   const outstandMovie = movies[Math.floor(Math.random() * movies.length)];
  //   this.setState({
  //     outstandMovie
  //   });
  // }

  renderSearchResults() {
    const { data } = this.props.search;
    if (data.length === 0) {
      return (
        <div>
          <Outstand movie={this.props.premieres.outstandMovie} />
          <StyledTitle>Premieres:</StyledTitle>
          <Premiere movies={this.props.premieres.data} />
          <StyledTitle>Upcomming:</StyledTitle>
          <Premiere movies={this.props.next_premieres.data} />
        </div>
      );
    } else {
      return <ShowSearchResults data={data} />;
    }
  }

  render() {
    return (
      <div>
        <Header path={this.props.match.path} />
        {this.renderSearchResults()}
      </div>
    );
  }
}

function mapStateToProps({ premieres, next_premieres, search }) {
  //comunicacion con el almacen central de redux
  return {
    premieres,
    next_premieres,
    search
  };
}

export default connect(mapStateToProps, {
  getPremieres,
  getNextPremieres
})(HomePage);
