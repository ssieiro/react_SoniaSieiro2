import {connect} from 'react-redux';
import View from './view';
import {searchActions} from '../../../redux/search';

const mapStateToProps = (state) => {
  console.log('State', state);
  return {
    list: state.search.list,
    loading: state.search.loading,
    search: state.search.search,
  };
};

const mapDispatchToProps = (dispatch, props) => {
  return {
    getMovies: (search) => dispatch(searchActions.fetchMovies(search)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(View);
