/* eslint react/forbid-prop-types: 0 */
import React from 'react';
import PropTypes from 'prop-types';
import {
  Image,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import { images } from '../assets/images';
import { NavBarHeight, isIOS, isIphoneX } from '../utils/platformSpecific';
import colors from '../theme/colors';

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flexDirection: 'row',
    height: isIOS ? (isIphoneX ? 84 : 64) : 54,
    alignSelf: 'stretch',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  headerView: {
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  titleText: {
    color: colors.appRedColor,
    fontSize: 20,
    textAlign: 'center',
    // fontFamily: 'RobotoCondensed-Bold',
  },
  leftView: {
    flex: 0.18,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingLeft: 10,
  },
  navImage: {
    width: 25,
    height: 30,
  },
  rightView: {
    flex: 0.25,
    alignItems: 'flex-end',
    justifyContent: 'center',
    paddingRight: 10,
  },
  rightInfoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
    marginVertical: 2,
  },
  walletAmountText: {
    color: 'black',
    fontSize: 14,
    textAlign: 'center',
    // fontFamily: 'RobotoCondensed-Regular',
  },
  rightInfoIcon: {
    width: 20,
    height: 20,
    marginLeft: 5,
  },
});

const NavBar = ({
  title,
  showBackButton,
  backButtonImage,
  backButtonAction,
  showRightButton,
  rightButtonImage,
  rightButtonAction,
  hideRightView,
}) => (
  <View style={styles.container}>
    <View style={styles.leftView}>
      {showBackButton ?
        <TouchableOpacity
          onPress={() => backButtonAction()}
        >
          <Image style={styles.navImage} source={backButtonImage} />
        </TouchableOpacity>
        : null }
    </View>
    <View style={styles.headerView}>
      <Text style={styles.titleText}>{title}</Text>
    </View>
    {!hideRightView && <View style={styles.rightView}>
      <View style={styles.rightInfoContainer}>
        <Text style={styles.walletAmountText}>11500</Text>
        <Image source={images.walletIcon} style={styles.rightInfoIcon} resizeMode="contain" />
      </View>
      <View style={styles.rightInfoContainer}>
        <Text style={styles.walletAmountText}>30</Text>
        <Image source={images.diamondIcon} style={styles.rightInfoIcon} resizeMode="contain" />
      </View>
    </View>}
  </View>
);

NavBar.propTypes = {
  title: PropTypes.string,
  leftView: PropTypes.element,
  rightView: PropTypes.element,
  showBackButton: PropTypes.bool,
  showRightButton: PropTypes.bool,
  backButtonImage: PropTypes.any,
  backButtonAction: PropTypes.func,
  rightButtonImage: PropTypes.any,
  rightButtonAction: PropTypes.func,
  hideRightView: PropTypes.bool,
};

NavBar.defaultProps = {
  title: '',
  leftView: null,
  rightView: null,
  showBackButton: false,
  showRightButton: false,
  backButtonImage: null,
  backButtonAction: () => {},
  rightButtonImage: null,
  rightButtonAction: () => {},
  hideRightView: false,
};
export default NavBar;
