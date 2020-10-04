import React, {Component} from 'react';
import {View, Image, Dimensions, Text} from 'react-native';
import PropType from 'prop-types';

class MovieDetail extends Component {
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
      const imageWidth = totalWidth;
      const totalHeight = Dimensions.get('window').height;
      const imageHeight = totalHeight / 2;
      this.setState({height: imageHeight, width: imageWidth});
    };
    Image.getSize(this.props.movieDetail.Poster, callback);
  }

  render() {
    const {movieDetail} = this.props;
    const {height, width, poster} = this.state;
    return (
      <View>
        <Image
          resizeMode={'cover'}
          source={{uri: movieDetail.Poster}}
          style={{width: width, height: height}}
        />
        <Text>{movieDetail.Title}</Text>
        <Text>{movieDetail.Plot}</Text>
      </View>
    );
  }
}

MovieDetail.propTypes = {
  movieDetail: PropType.object.isRequired,
};

export default MovieDetail;
