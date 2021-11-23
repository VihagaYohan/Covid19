import Http from './Http';
import {constants, EnvProd} from '../util';

const {BASE_URL} = EnvProd;
const {
  http: {POST, GET, PUT, DELETE, MULTIPART},
} = constants;

class HttpService {
  http = new Http(BASE_URL, {});

  request = async (action, payload = {}, Type) => {
    const data = {
      ...payload,
    };

    let type = Type ? Type : POST;

    debugger;
    switch (type) {
      case POST:
        return; // code goes here

      case GET:
        let r = await this.http.jsonGet(action, data);
        console.log(new Date(), 'Get response');
        return r;
    }
  };
}

const httpService = new HttpService();

export default httpService;
