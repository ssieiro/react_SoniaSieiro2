import React from 'react';
import PropTypes from 'prop-types';
import {SafeAreaView, View, TouchableOpacity} from 'react-native';
import {Input, Button} from '../../atoms';
import styles from './styles';
import _ from 'lodash';
import {Actions} from 'react-native-router-flux';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      search: '',
      errors: {},
    };
  }

  _onSubmit = () => {
    console.log('this.props', this.props);
    const {search} = this.state;
    const {getMovies} = this.props;

    const errors = {};
    if (!search) {
      errors.search = 'Campo obligatorio';
    }

    this.setState({errors});
    if (_.size(errors)) {
      return;
    }
    getMovies(search);
    Actions.push('Movies', {title: search});
  };

  render() {
    const {search, errors} = this.state;
    const {loading} = this.props;
    return (
      <SafeAreaView style={styles.container}>
        <TouchableOpacity>
          <Input
            label={'Search'}
            value={search}
            onChangeText={(v) => this.setState({search: v})}
            placeholder={'Introduce el nombre de una película'}
            style={styles.input}
            error={errors.search}
          />

          <Button
            label={'Buscar'}
            loading={loading}
            onPress={() => this._onSubmit()}
            style={styles.button}
          />
        </TouchableOpacity>
      </SafeAreaView>
    );
  }
}

Home.propTypes = {
  loading: PropTypes.bool,
  search: PropTypes.string,
  getMovies: PropTypes.func,
};

export default Home;
