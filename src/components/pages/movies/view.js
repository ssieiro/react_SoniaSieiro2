import React from 'react';
import PropTypes from 'prop-types';
import {SafeAreaView, FlatList, RefreshControl, Button} from 'react-native';
import styles from './styles';
import {MovieCard, PageButton} from '../../molecules';
import {Actions} from 'react-native-router-flux';

class Movies extends React.Component {
  _onMoviePress = (movie) => {
    this.props.setSelectedMovie(movie);
    Actions.push('Detail', {title: movie.Title});
  };
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
    const {moviesList, loading, actualPage} = this.props;
    return (
      <SafeAreaView style={styles.container}>
        <FlatList
          data={moviesList}
          keyExtractor={(item, index) => `card-${item.imdbID}`}
          numColumns={1}
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
