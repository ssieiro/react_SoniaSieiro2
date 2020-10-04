import React, {Component} from 'react';
import {View, Image, Dimensions, Text} from 'react-native';
import PropType from 'prop-types';
import styles from '../../pages/detail/styles';

class MovieDetail extends Component {
  render() {
    const {movieDetail} = this.props;
    const image = movieDetail.Poster
      ? {uri: movieDetail.Poster}
      : require('../../../assets/images/placeholder.png');
    return (
      <View>
        <Image
          resizeMode={'cover'}
          source={image}
          style={{width: '100%', height: '80%'}}
        />
        <Text style={styles.titleText}>{movieDetail.Title}</Text>
        <Text style={styles.plotText}>{movieDetail.Plot}</Text>
      </View>
    );
  }
}

MovieDetail.propTypes = {
  movieDetail: PropType.object.isRequired,
};

export default MovieDetail;
