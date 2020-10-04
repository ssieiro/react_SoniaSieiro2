import React, {Component} from 'react';
import {TouchableOpacity, Image, Dimensions, Text} from 'react-native';
import PropType from 'prop-types';
import {View} from 'react-native-animatable';
import styles from '../../pages/movies/styles';

class MovieCard extends Component {
  _onPressButton = () => {
    this.props.onPress(this.props.movie);
  };

  componentDidMount() {}

  render() {
    const {movie} = this.props;
    if (movie.Poster === 'null') {
      image = require('../../../assets/images/placeholder.png');
    } else {
      image = movie.Poster
        ? {uri: movie.Poster}
        : require('../../../assets/images/placeholder.png');
    }

    return (
      <TouchableOpacity onPress={this._onPressButton}>
        <Image
          resizeMode={'cover'}
          source={image}
          style={{width: '100%', height: 350, flex: 1}}
        />
        <View style={{alignItems: 'center', width: '100%'}}>
          <Text
            style={styles.titleText}
            numberOfLines={2}
            ellipsizeMode={'tail'}>
            {movie.Title}
          </Text>
        </View>
      </TouchableOpacity>
    );
  }
}

MovieCard.defaultProps = {
  onPress: () => {},
};

MovieCard.propTypes = {
  movie: PropType.object.isRequired,
  onPress: PropType.func,
};

export default MovieCard;
