import React, {Component} from 'react';
import {StatusBar} from 'react-native';
import {Router, Scene, Stack, Actions} from 'react-native-router-flux';
import {Home, Movies, Detail, MoviesAdd} from '../../pages';
import {Provider} from 'react-redux';
import store from '../../../config/redux';
import colors from '../../../assets/colors';

class App extends Component {
  constructor(props) {
    super(props);
    StatusBar.setBarStyle('light-content', true);
  }

  render() {
    console.log('store', store.getState());
    return (
      <Provider store={store}>
        <Router>
          <Stack key="root">
            <Scene key={'Home'} component={Home} hideNavBar title={'Home'} />
            <Scene
              key={'Movies'}
              component={Movies}
              title={'Movies'}
              navigationBarStyle={{backgroundColor: colors.main}}
              titleStyle={{color: colors.light_grey}}
              backButtonTextStyle={{color: colors.light_grey}}
              backButtonTintColor={colors.light_grey}
              rightTitle={'Añadir'}
              onRight={() => Actions.push('MoviesAdd')}
              rightButtonTextStyle={{color: colors.light_grey}}
            />
            <Scene
              key={'Detail'}
              component={Detail}
              navigationBarStyle={{backgroundColor: colors.main}}
              titleStyle={{color: colors.light_grey}}
              backButtonTextStyle={{color: colors.light_grey}}
              backButtonTintColor={colors.light_grey}
            />
            <Scene
              key={'MoviesAdd'}
              component={MoviesAdd}
              navigationBarStyle={{backgroundColor: colors.main}}
              titleStyle={{color: colors.light_grey}}
              backButtonTextStyle={{color: colors.light_grey}}
              backButtonTintColor={colors.light_grey}
              title={'Añadir película'}
            />
          </Stack>
        </Router>
      </Provider>
    );
  }
}

export default App;
