import {
  responsiveScreenWidth,
  responsiveScreenHeight,
} from 'react-native-responsive-dimensions';

const urls = {
  help: 'http://wikipedia.com',
  terms: 'http://google.com',
};

const http = {
  POST: 'POST',
  GET: 'GET',
  PUT: 'PUT',
  DELETE: 'DELETE',
  MULTIPART: 'MULTIPART',
};

const gap = responsiveScreenWidth(5);
const ineerGap = responsiveScreenWidth(2);
const headerHeight = responsiveScreenHeight(8);
const footerHeight = 105;
const bottomBorderWidth = responsiveScreenWidth(0.2);
const buttonRadius = responsiveScreenWidth(2);
const buttonHeight = responsiveScreenHeight(6);
const smallbuttonHeight = responsiveScreenHeight(4.5);
const buttonShadow = {
  width: responsiveScreenWidth(1),
  height: responsiveScreenWidth(1),
};
const buttonShadowOpacity = 0.08;
const activeOpacity = 0.7;
const DEFAULT_TIMEOUT = 20;
const FAP_COUNT = 2;
const rbSheetRadius = responsiveScreenWidth(5);
const rbsheetOpenDuration = 250;
const flashDuration = 2000;
const cameraButtonHeight = 112;
// const voteContainerWidth = 217;
const voteContainerWidth = responsiveScreenWidth(55);
// const voteContainerHeight = 48;
const voteContainerHeight = responsiveScreenHeight(6.5);
const followImgHeight = responsiveScreenWidth(8);
const postImageHeight = responsiveScreenHeight(55);

const emptyPageLabel = {
  search: {
    title: 'No result found',
    description: "Sorry, We couldn't find what you are looking for",
  },
  myProfile: {
    title: 'Share photos of your outfits',
    description: 'When you add a new outfit, It appears on your profile',
  },
  otherProfile: {
    title: 'No Posts Yet',
    description: 'When this person posts a new outfit, It appears here.',
  },
  store: {
    title: 'No Results found',
    description: 'When you tag this shop for your outfit, It appears here.',
  },
  notification: {
    title: 'No Notifications Found',
    description: 'Try following other users or stores.',
  },
  followers: {
    title: 'No Followers, Yet!',
    description: '',
  },
  following: {
    title: 'Follows None, Yet!',
    description: '',
  },
  followingStores: {
    title: 'You Are Not Following Any Store, Yet!',
    description: 'Try searching for your favorite store to follow them.',
  },
  blockedUsers: {
    title: 'No Blocked Users',
    description:
      'If you want to avoid all interactions with another user, select "Block User"',
  },
  postLocations: {
    title: 'No Nearby Stores Found',
    description: "Sorry, we couldn't find any stores near your location.",
  },
};

export default {
  urls,
  http,
  gap,
  innerGap,
  headerHeight,
  footerHeight,
  actionTypes,
  storageKey,
  DEFAULT_TIMEOUT,
  buttonBorderWidth,
  buttonRadius,
  buttonHeight,
  smallbuttonHeight,
  buttonShadow,
  buttonShadowOpacity,
  activeOpacity,
  FAP_COUNT,
  rbSheetRadius,
  rbsheetOpenDuration,
  flashDuration,
  cameraButtonHeight,
  followImgHeight,
  postImageHeight,
  emptyPageLabel,
};
