import {connect} from 'react-redux';
import View from './view';
//import {CharactersForm} from '../../organisms';
import {moviesActions} from '../../../redux/movies';

const mapStateToProps = (state) => {
  return {
    loading: state.movies.loading,
  };
};

const mapDispatchToProps = (dispatch, props) => {
  return {
    addMovie: (data) => dispatch(moviesActions.addMovie(data)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(View);
