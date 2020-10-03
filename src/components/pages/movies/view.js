import React from 'react';
import PropTypes from 'prop-types';
import {SafeAreaView, Text, FlatList, RefreshControl} from 'react-native';
import styles from './styles';
import {MovieCard} from '../../molecules';
//import {Actions} from 'react-native-router-flux';

class Movies extends React.Component {
  _onMoviePress = (movie) => {
    this.props.setSelectedMovie(movie);
    //Actions.push('Characters', {title: house.nombre});
  };
  //probar si lo del item.index funciona
  _renderItem = ({item}) => (
    <MovieCard movie={item} onPress={this._onMoviePress} />
  );

  render() {
    const {moviesList, loading} = this.props;
    return (
      <SafeAreaView style={styles.container}>
        <Text>Hola</Text>
        {/* <FlatList
          data={moviesList}
          keyExtractor={(item, index) => `card-${item.imdbID}`}
          numColumns={2}
          renderItem={this._renderItem}
          refreshControl={
            <RefreshControl
              colors={['red']}
              tintColor={'red'}
              refreshing={loading}
              onRefresh={this.props.getMovies}
              title={'Cargando...'}
              titleColor={'red'}
            />
          }
        /> */}
      </SafeAreaView>
    );
  }
}

Movies.propTypes = {
  moviesList: PropTypes.arrayOf(PropTypes.object),
  loading: PropTypes.bool,
  getMovies: PropTypes.func,
  setSelectedMovie: PropTypes.func,
};

export default Movies;
