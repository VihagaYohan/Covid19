import {
  responsiveFontSize,
  responsiveScreenFontSize,
} from 'react-native-responsive-dimensions';

export default {
  boldFont: 'Poppins-Bold',
  regularFont: 'Poppins-Regular',
  fiveExtraLarge: responsiveFontSize(3.5),
  fourExtraLarge: responsiveFontSize(3.3),
  threeExtraLarge: responsiveFontSize(3),
  doubleExtraLarge: responsiveFontSize(2.8),
  extraLarge: responsiveFontSize(2.6),
  large: responsiveFontSize(2.4),
  medium: responsiveFontSize(2.3),
  regular: responsiveScreenFontSize(2),
  small: responsiveFontSize(1.75),
  extraSmall: responsiveFontSize(1.65),
  doubleExtraSmall: responsiveFontSize(1.4),
};
