import {StyleSheet} from 'react-native';
import colors from '../../../assets/colors';

export default StyleSheet.create({
  container: {},
  label: {
    marginLeft: 10,
    color: colors.light_grey,
    marginBottom: 10,
    fontSize: 14,
    fontWeight: '500',
    textTransform: 'uppercase',
  },
  input: {
    color: colors.black,
    fontSize: 16,
    minHeight: 40,
    backgroundColor: colors.white,
    borderRadius: 6,
    paddingHorizontal: 10,
  },
  error: {
    color: 'red',
    fontSize: 14,
    textAlign: 'right',
    marginTop: 6,
    textTransform: 'lowercase',
  },
});
