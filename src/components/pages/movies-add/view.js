import React from 'react';
import PropTypes from 'prop-types';
import {SafeAreaView, View} from 'react-native';
import {Input, Button} from '../../atoms';
import styles from './styles';
import _ from 'lodash';

class MoviesAdd extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      image: null,
      errors: {},
    };
  }

  _onSubmit = () => {
    const {title} = this.state;

    const data = {
      Title: title,
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

  render() {
    const {title, image, errors} = this.state;
    const {loading} = this.props;
    return (
      <SafeAreaView style={styles.container}>
        <View>
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

MoviesAdd.PropTypes = {
  loading: PropTypes.bool,
  addMovie: PropTypes.func,
};

export default MoviesAdd;
