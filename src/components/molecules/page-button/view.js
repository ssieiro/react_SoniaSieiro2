import React from 'react';
import {View, Button, FlatList} from 'react-native';
import styles from '../../pages/movies/styles';
import colors from '../../../assets/colors';

const PageButton = (props) => {
  const {nextHide, backHide, page, getMoviesPage} = props;

  _goNext = () => {
    getMoviesPage(page + 1);
  };

  _goBack = () => {
    getMoviesPage(page - 1);
  };

  if (nextHide && backHide) {
    return null;
  }

  if (nextHide && !backHide) {
    return (
      <Button
        title="Back"
        color={colors.light_grey}
        onPress={this._goBack}
        style={styles.button}
      />
    );
  }

  if (!nextHide && backHide) {
    return (
      <Button
        title="Next"
        color={colors.light_grey}
        onPress={this._goNext}
        style={styles.button}
      />
    );
  }

  if (!nextHide && !backHide) {
    return (
      <View style={styles.pageButtonsContainer}>
        <Button
          title="Back"
          color={colors.light_grey}
          onPress={this._goBack}
          style={styles.button}
        />
        <Button
          title="Next"
          color={colors.light_grey}
          onPress={this._goNext}
          style={styles.button}
        />
      </View>
    );
  }
};

export default PageButton;
