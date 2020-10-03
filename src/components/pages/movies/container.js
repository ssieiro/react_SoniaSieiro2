import {connect} from 'react-redux';
import View from './view';
import {moviesActions} from '../../../redux/movies';
import {searchActions} from '../../../redux/search';

const mapStateToProps = (state) => {
  //console.log('State', state);
  return {
    moviesList: state.search.list,
    moviedetail: state.movies.list,
    loading: state.movies.loading,
    movieID: state.movies.movieID,
  };
};

const mapDispatchToProps = (dispatch, props) => {
  return {
    getMovies: () => dispatch(searchActions.fetchMovies(state.search.search)),
    setSelectedMovie: (movieID) =>
      dispatch(moviesActions.fetchMovieDetail(movieID)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(View);
