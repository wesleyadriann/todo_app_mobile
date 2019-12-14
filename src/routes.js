import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import Home from './views/Home';
import Task from './views/Task';
import CreateTask from './views/CreateTask';
import Login from './views/Login';
import CreateAccount from './views/CreateAccount';
import ForgotPassword from './views/ForgotPassword';

const AuthStack = createStackNavigator({
  Login: {
    screen: Login,
    path: 'Login',
    navigationOptions: {
      header: null,
    },
  },
  CreateAccount: {
    screen: CreateAccount,
    path: 'CreateAccount',
    navigationOptions: {
      header: null,
    },
  },
  ForgotPassword: {
    screen: ForgotPassword,
    path: 'ForgotPassword',
    navigationOptions: {
      header: null,
    },
  },
})

const AppStack = createStackNavigator({
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
});

const Routes = createSwitchNavigator(
  {
    AuthStack,
    AppStack,
  },
  {
    initialRouteName: 'AuthStack',
  },
);

export default createAppContainer(Routes);
