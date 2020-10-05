import React from 'react';
import PropTypes from 'prop-types';
import {SafeAreaView, View, TouchableOpacity, Text, Image} from 'react-native';
import {Input, Button} from '../../atoms';
import styles from './styles';
import _ from 'lodash';
import ImagePicker from 'react-native-image-picker';
import {IMAGE_OPTIONS} from '../../../config/images';

class MoviesAdd extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      image: null,
      imageURL: '',
      errors: {},
    };
  }

  _onSubmit = () => {
    const {title, imageURL} = this.state;

    const data = {
      Title: title,
      Poster: imageURL,
    };

    const errors = {};
    if (!title) {
      errors.title = 'Campo obligatorio';
    }

    this.setState({errors});
    if (_.size(errors)) {
      return;
    }
    this.props.addMovie(data);
  };

  _onSelectImage = () => {
    ImagePicker.showImagePicker(IMAGE_OPTIONS, (response) => {
      if (response.uri) {
        this.setState({image: response});
        this.setState({imageURL: response.uri});
      }
    });
  };

  render() {
    const {title, image, errors} = this.state;
    const {loading} = this.props;
    return (
      <SafeAreaView style={styles.container}>
        <View>
          <TouchableOpacity
            onPress={this._onSelectImage}
            style={styles.imageContainer}>
            <Image
              source={image ? {uri: image.uri} : null}
              style={styles.imageBackground}
            />

            <Text style={styles.imageLabel}>
              {image
                ? 'Pulsa para editar la imagen'
                : 'Pulsa para seleccionar una imagen'}
            </Text>
          </TouchableOpacity>
          <Input
            label={'Título'}
            underlineColorAndroid={'transparent'}
            style={styles.input}
            placeholder={'Introduce el título de la película'}
            onChangeText={(text) => this.setState({title: text})}
            value={title}
            error={errors.title}
          />
          <Button
            label={'Añadir'}
            loading={loading}
            onPress={() => this._onSubmit()}
            style={styles.button}
          />
        </View>
      </SafeAreaView>
    );
  }
}

MoviesAdd.propTypes = {
  loading: PropTypes.bool,
  addMovie: PropTypes.func,
};

export default MoviesAdd;
