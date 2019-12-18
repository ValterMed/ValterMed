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
