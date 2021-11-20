import {StyleSheet, Dimensions, Platform} from 'react-native';
import colors from './colors';
import constants from '../constants';
import fonts from './fonts';
import {responsiveScreenHeight} from 'react-native-responsive-dimensions';

const widthUnit = Dimensions.get('screen').width / 100;
const heightUnit = Dimensions.get('screen').height / 100;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },

  rbsheetContainer: {
    paddingTop: constants.gap * 2.5,
    paddingHorizontal: constants.gap,
    alignItems: 'center',
    borderTopLeftRadius: constants.rbSheetRadius,
    borderTopRightRadius: constants.rbSheetRadius,
  },
});

export default styles;
