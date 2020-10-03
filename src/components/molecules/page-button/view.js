import React from 'react';
import {View, Button, FlatList} from 'react-native';
import styles from '../../pages/movies/styles';

const PageButton = (props) => {
  const {nextHide, backHide, page, getMoviesPage} = props;

  _goNext = () => {
    getMoviesPage(page + 1);
  };

  _goBack = () => {
    getMoviesPage(page - 1);
  };

  console.log('nextHide', nextHide);
  console.log('backHide', backHide);

  if (nextHide && backHide) {
    console.log('Caso 1');
    return null;
  }

  if (nextHide && !backHide) {
    console.log('Caso 2');
    return <Button title="Back" onPress={this._goBack} style={styles.button} />;
  }

  if (!nextHide && backHide) {
    console.log('Caso 3');
    return <Button title="Next" onPress={this._goNext} style={styles.button} />;
  }

  if (!nextHide && !backHide) {
    console.log('Caso 4');
    return (
      <View style={styles.pageButtonsContainer}>
        <Button title="Back" onPress={this._goBack} style={styles.button} />
        <Button title="Next" onPress={this._goNext} style={styles.button} />
      </View>
    );
  }
};

export default PageButton;
