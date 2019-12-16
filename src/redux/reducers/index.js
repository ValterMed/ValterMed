import {combineReducers} from 'redux';
import test from './testReducer';
import premieres from './PremieresReducer';
import next_premieres from './nextPremieresReducer';
import credits from './CreditsReducer';
import movie_details from './movieDetailReducer';
import search from './searchReducer'

export default combineReducers({
  test, 
  premieres,
  next_premieres,
  credits,
  movie_details,
  search
})