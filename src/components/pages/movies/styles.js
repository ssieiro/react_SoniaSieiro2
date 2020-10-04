import {StyleSheet} from 'react-native';
import colors from '../../../assets/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.main,
  },

  button: {marginTop: 20, marginHorizontal: 20, backgroundColor: 'white'},

  pageButtonsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  titleText: {
    textAlign: 'center',
    marginHorizontal: 10,
    color: 'black',
    fontSize: 16,
    marginTop: 10,
    marginBottom: 10,
  },

  cardView: {
    alignItems: 'center',
  },
});

export default styles;
