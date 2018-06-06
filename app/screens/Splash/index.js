/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  Text,
  View,
  Animated,
  Dimensions,
} from 'react-native';
import { NavigationActions } from 'react-navigation';
// import ContainerView from './components/ContainerView';
import Utils from '../../utils/utils';
import constant from '../../utils/constant';
// import StatusBar from '../../components/StatusBar';
const { width, height } = Dimensions.get('window');

export let navigatorObject = null;

class Splash extends Component {
  constructor(props) {
    super(props);
    navigatorObject = props.navigation;
    this.state = {
      fadeAnim: new Animated.Value(0),
      fadeWidth: new Animated.Value(width - 50),
      fadeHeight: new Animated.Value(100),
    };
  }

  componentDidMount() {

    Animated.parallel([
      Animated.timing(this.state.fadeAnim, { toValue: 1, duration: 2000 }),
      Animated.timing(this.state.fadeWidth, { toValue: width - 45, duration: 2000 }),
      Animated.timing(this.state.fadeHeight, { toValue: 105, duration: 2000 }),
    ]).start(() => {
      Animated.parallel([
        Animated.timing(this.state.fadeAnim, { toValue: 0, duration: 2000 }),
        Animated.timing(this.state.fadeWidth, { toValue: width - 50, duration: 2000 }),
        Animated.timing(this.state.fadeHeight, { toValue: 100, duration: 2500 }),
      ]).start(() => this.checkAppState());
    });
  }

  checkAppState() {
    new Utils().getItemWithKey(constant.USER_DETAILS, (response) => {
      if (response && response.access_token) {
        this.goToScreen('DrawerStack');
      } else {
        this.checkAppOpenedFirstTime();
      }
  });
  }

  checkAppOpenedFirstTime() {
    new Utils().getItemWithKey(constant.OPEN_APP_FIRST_TIME, (response) => {
      if (response) {
        this.goToScreen('Login');
      } else {
        this.goToScreen('OnBoarding');
      }
    })
  }

  goToScreen(screenName) {
    // setTimeout(() => {
    //   const resetAction = NavigationActions.reset({
    //     index: 0,
    //     actions: [
    //       NavigationActions.navigate({ routeName: screenName }),
    //     ],
    //   });
    //   this.props.navigation.dispatch(resetAction);
    // }, 1500);
    const resetAction = NavigationActions.reset({
      index: 0,
      actions: [
        NavigationActions.navigate({ routeName: screenName }),
      ],
    });
    this.props.navigation.dispatch(resetAction);
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <Text> hello there..??</Text>
      </View>
    );
  }
}

Splash.propTypes = {
  navigation: PropTypes.objectOf(PropTypes.any),
};

Splash.defaultProps = {
  navigation: {},
};

export default Splash;
