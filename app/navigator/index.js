import { Dimensions } from 'react-native';
import { StackNavigator, DrawerNavigator } from 'react-navigation';
import Splash from '../screens/Splash';

const { width } = Dimensions.get('window');
// Drawer stack
// const DrawerStack = DrawerNavigator({
//   Dashboard: {
//     screen: Dashboard,
//     key: 'DashboardScreen',
//     navigationOptions: {
//       header: null,
//       gesturesEnabled: true,
//     },
//   },
// }, {
//   initialRouteName: 'Dashboard',
//   contentComponent: SideMenu,
//   drawerWidth: width - 80,
// });

const RootNavigator = StackNavigator({
  // DrawerStack: {
  //   screen: DrawerStack,
  // },
  Splash: {
    screen: Splash,
    key: 'SplashScreen',
    navigationOptions: {
      header: null,
      gesturesEnabled: false,
    },
  },
}, {
  initialRouteName: 'Splash',
  headerMode: 'none',
});

export default RootNavigator;
