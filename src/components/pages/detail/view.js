import React from 'react';
import PropTypes from 'prop-types';
import {SafeAreaView, Text} from 'react-native';
import styles from './styles';
//import {MovieCard, PageButton} from '../../molecules';

class Detail extends React.Component {
  render() {
    const {movieDetail} = this.props;
    console.log('movieDetail', movieDetail);
    return (
      <SafeAreaView style={styles.container}>
        <Text>hola</Text>
      </SafeAreaView>
    );
  }
}

Detail.propTypes = {
  movieDetail: PropTypes.object,
};

export default Detail;
