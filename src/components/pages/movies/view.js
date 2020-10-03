import React from 'react';
import PropTypes from 'prop-types';
import {SafeAreaView, FlatList, RefreshControl, Button} from 'react-native';
import styles from './styles';
import {MovieCard, PageButton} from '../../molecules';
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

  _isNextHidden() {
    return this.props.actualPage >= this.props.numPages;
  }

  _isBackHidden() {
    return this.props.actualPage === 1;
  }

  render() {
    console.log('actualPage', this.props.actualPage);
    console.log('numPages', this.props.numPages);
    const {moviesList, loading, actualPage} = this.props;
    return (
      <SafeAreaView style={styles.container}>
        <FlatList
          data={moviesList}
          keyExtractor={(item, index) => `card-${item.imdbID}`}
          numColumns={2}
          renderItem={this._renderItem}
          refreshControl={
            <RefreshControl
              colors={['white']}
              tintColor={'white'}
              refreshing={loading}
              onRefresh={this.props.refreshMovies}
              title={'Cargando...'}
              titleColor={'white'}
            />
          }
        />
        <PageButton
          nextHide={this._isNextHidden()}
          backHide={this._isBackHidden()}
          page={actualPage}
          getMoviesPage={this.props.getMoviesPage}
        />
      </SafeAreaView>
    );
  }
}

Movies.propTypes = {
  moviesList: PropTypes.arrayOf(PropTypes.object),
  loading: PropTypes.bool,
  actualPage: PropTypes.number,
  refreshMovies: PropTypes.func,
  getMoviesPage: PropTypes.func,
  setSelectedMovie: PropTypes.func,
};

export default Movies;
