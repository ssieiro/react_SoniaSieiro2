import {connect} from 'react-redux';
import View from './view';

const mapStateToProps = (state) => {
  //console.log('State', state);
  return {
    movieDetail: state.detail.movieDetail,
  };
};

const mapDispatchToProps = (dispatch, props) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(View);
