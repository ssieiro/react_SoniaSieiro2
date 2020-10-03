import React, {Component} from 'react';
import {StatusBar} from 'react-native';
import {Router, Scene, Stack, Actions} from 'react-native-router-flux';
import {Home, Movies} from '../../pages';
import {Provider} from 'react-redux';
import store from '../../../config/redux';

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
              hideNavBar
              title={'Movies'}
            />
          </Stack>
        </Router>
      </Provider>
    );
  }
}

export default App;
