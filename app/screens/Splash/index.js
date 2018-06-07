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
import ContainerView from './components/ContainerView';
import Utils from '../../utils/utils';
import StatusBar from '../../components/StatusBar';
const { width, height } = Dimensions.get('window');
import NavigationBar from '../../components/NavigationBar';

export let navigatorObject = null;

class Splash extends Component {
  constructor(props) {
    super(props);
    navigatorObject = props.navigation;
  }

  componentDidMount() {

  }

  render() {
    return (
      <View style={{ flex: 1 }}>
      <NavigationBar
        title='testing world'
        showBackButton={Boolean(true)}
        // backButtonImage={images.backbutton}
        backButtonAction={() => this.popBack()}
        hideRightView={true}
      />
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
