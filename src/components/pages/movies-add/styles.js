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

  imageContainer: {
    marginTop: 40,
    marginBottom: 20,
    borderRadius: 8,
    marginHorizontal: 20,
    height: 200,
    borderWidth: 1,
    borderColor: 'grey',
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
  },

  imageLabel: {
    textAlign: 'center',
    color: 'white',
    textTransform: 'uppercase',
    fontWeight: '500',
  },

  imageBackground: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    resizeMode: 'cover',
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
