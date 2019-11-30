import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import Home from './views/Home';
import Task from './views/Task';
import CreateTask from './views/CreateTask';
import Login from './views/Login';

const AppStack = createStackNavigator(
  {
    Login: {
      screen: Login,
      path: 'Login',
      navigationOptions: {
        header: null,
      }
    },
    Home: {
      screen: Home,
      path: 'Home',
      navigationOptions: {
        header: null,
      },
    },
    CreateTask: {
      screen: CreateTask,
      path: 'CreateTask',
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
    initialRouteName: 'Login',
  },
);

export default createAppContainer(AppStack);
