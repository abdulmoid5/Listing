import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {screenKeys} from '../utils/Constants';
import UserList from '../views/UserList';
import UserDetail from '../views/UserDetail';
const {Initial} = screenKeys;
const navigation = createStackNavigator(
  {
    UserList: {
      screen: UserList,
    },
    UserDetail: {
      screen: UserDetail,
    },
  },
  {
    initialRouteName: Initial,
    headerMode: 'none',
  },
);

export default Router = createAppContainer(navigation);
