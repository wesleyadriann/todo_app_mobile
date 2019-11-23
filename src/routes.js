import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import Home from './views/Home';
import Task from './views/Task';

const AppStack = createStackNavigator(
  {
    Home: {
      screen: Home,
      path: 'Home',
      navigationOptions: {
        header: null,
      },
    },
    Task: {
      screen: Task,
      path: 'Task',
      navigationOptions: {
        header: null,
      },
    },
  },
  {
    initialRouteName: 'Home',
  },
);

export default createAppContainer(AppStack);
