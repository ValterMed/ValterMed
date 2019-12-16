import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import MovieDetail from '../pages/MovieDetail';
import { createGlobalStyle } from 'styled-components';
import Footer from './Footer';
import {connect} from 'react-redux';
import {updateDate} from '../redux/actions/testAction';

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Acme|Rock+Salt|Cinzel&display=swap');
  body {
    margin: 0px;
  }
`;

class App extends Component {
  componentDidMount() {
    setInterval(this.props.updateDate,1000)
  }
  render() {
    return (
      <BrowserRouter>
        <GlobalStyle />
        <div>
          <Route exact path="/" component={HomePage} />
          <Route path="/details/:movieID" component={MovieDetail}></Route>
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

function mapStateToProps({test}) {
  return {test}
}

export default connect(mapStateToProps, {
  updateDate: updateDate
})(App);
