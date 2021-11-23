import http from '../../services/HttpService';
import {constants} from '../../util';

const getFeedList = payload => {
  debugger;
  let result = http.request(payload.action, payload, constants.http.GET);
  return result;
};

export {getFeedList};
