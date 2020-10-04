import {StyleSheet} from 'react-native';
import colors from '../../../assets/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.main,
  },
  image: {
    width: '100%',
    height: '70%',
  },
  titleText: {
    textAlign: 'center',
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 20,
  },
  plotText: {
    textAlign: 'center',
    fontSize: 18,
    marginHorizontal: 20,
  },
});

export default styles;
