import React from 'react';
// import axios from 'axios';
import Outstand from '../components/Outstand';
import Cast from '../components/Cast';
import {connect} from 'react-redux';
import Header from '../components/Header';

//Actions:
import {getCredits, getMovieDetails} from '../redux/actions/MoviesActions';

class MovieDetail extends React.Component {
  state = {
    movie: "",
    cast: "",
  };
  componentDidMount() {
    const { movieID } = this.props.match.params;
    this.props.getMovieDetails(movieID);
    this.props.getCredits(movieID);
  }
  // getMovieDetail = async movieID => {
  //   try {
  //     const result = await axios.get(
  //       `https://api.themoviedb.org/3/movie/${movieID}?api_key=f5b812340cf6ce25dc4cf8d4722c5f56&language=es`
  //     );
  //     console.log(result);
  //     this.setState({
  //       movie: result.data
  //     });
  //   } catch (error) {
  //     console.log(error.message);
  //   }
  // };
  // getCredits = async movieID => {
  //   try {
  //     const result = await axios.get(
  //       `https://api.themoviedb.org/3/movie/${movieID}/credits?api_key=f5b812340cf6ce25dc4cf8d4722c5f56&language=es`
  //     );
  //     console.log(result);
  //     this.setState({
  //       cast: result.data.cast
  //     });
  //   } catch (error) {
  //     console.log(error.message);
  //   }
  // };
  render() {
    return (
      <div>
        <Header date={this.props.test.date} />
        <Outstand movie={this.props.movie_details.data}></Outstand>
        <Cast cast={this.props.credits.data}></Cast>
      </div>

    )
  }
}

function mapStateToProps({credits, movie_details, test}) {
  return {credits, movie_details, test}
}

export default connect(mapStateToProps,{
  getCredits,
  getMovieDetails
})(MovieDetail);
