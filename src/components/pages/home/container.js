import {connect} from 'react-redux';
import View from './view';
import {searchActions} from '../../../redux/search';

const mapStateProps = (state) => {
  return {
    moviesList: state.search.moviesList,
    loading: state.search.loading,
    search: state.search.search,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getMovies: (search) => dispatch(searchActions.fetchMovies(search)),
  };
};

export default connect(mapStateProps, mapDispatchToProps)(View);
