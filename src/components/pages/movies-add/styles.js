import {StyleSheet} from 'react-native';
import colors from '../../../assets/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.main,
  },
  input: {
    marginTop: 20,
    marginHorizontal: 20,
  },

  button: {
    marginTop: 20,
    marginHorizontal: 20,
    width: 150,
    alignSelf: 'center',
  },

  titleLabel: {
    marginLeft: 20,
    color: colors.light_grey,
    marginBottom: 10,
    marginTop: 20,
    fontSize: 14,
    fontWeight: '500',
    textTransform: 'uppercase',
  },
});

export default styles;
