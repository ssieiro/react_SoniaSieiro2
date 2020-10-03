import {connect} from 'react-redux';
import View from './view';
import {moviesActions} from '../../../redux/movies';

const mapStateToProps = (state) => {
  //console.log('State', state);
  return {
    moviesList: state.search.list,
    moviedetail: state.movies.list,
    search: state.search.search,
    loading: state.movies.loading,
    movieID: state.movies.movieID,
    actualPage: state.movies.actualPage,
    numPages: state.movies.numPages,
  };
};

const mapDispatchToProps = (dispatch, props) => {
  return {
    refreshMovies: () => dispatch(moviesActions.refreshMovies()),
    getMoviesPage: (page) => dispatch(moviesActions.fetchMoviesByPage(page)),
    setSelectedMovie: (movieID) =>
      dispatch(moviesActions.fetchMovieDetail(movieID)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(View);
