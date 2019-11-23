import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import Home from './views/Home';

const AppStack = createStackNavigator({
  Home: {
    screen: Home,
    path: 'Home',
    navigationOptions: {
      header: null,
    },
  },
});

export default createAppContainer(AppStack);
