import React, {Component} from 'react';
import {TouchableOpacity, Image, Dimensions, Text} from 'react-native';
import PropType from 'prop-types';

class MovieCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      width: 0,
      height: 0,
    };
  }

  async componentDidMount() {
    const callback = (width, height) => {
      const totalWidth = Dimensions.get('window').width;
      const cardWidth = totalWidth / 2;
      //const cardHeight = (cardWidth * height) / width;
      const cardHeight = 280;
      this.setState({height: cardHeight, width: cardWidth});
    };

    Image.getSize(this.props.movie.Poster, callback);
  }

  _onPressButton = () => {
    this.props.onPress(this.props.movie);
  };

  render() {
    const {movie} = this.props;
    const {height, width} = this.state;
    return (
      <TouchableOpacity onPress={this._onPressButton}>
        <Image
          resizeMode={'cover'}
          source={{uri: movie.Poster}}
          style={{width: width, height: height}}
        />
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
