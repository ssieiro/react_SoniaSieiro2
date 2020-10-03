import {StyleSheet} from 'react-native';
import colors from '../../../assets/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.main,
  },

  button: {marginTop: 20, marginHorizontal: 20, textDecorationColor: 'white'},

  pageButtonsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
});

export default styles;
