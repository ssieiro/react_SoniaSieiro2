import React from 'react';
import PropTypes from 'prop-types';
import {SafeAreaView, Text} from 'react-native';
import styles from './styles';
import {MovieDetail} from '../../molecules';

class Detail extends React.Component {
  render() {
    const {movieDetail} = this.props;
    return (
      <SafeAreaView style={styles.container}>
        <MovieDetail movieDetail={movieDetail} />
      </SafeAreaView>
    );
  }
}

Detail.propTypes = {
  movieDetail: PropTypes.object,
};

export default Detail;
