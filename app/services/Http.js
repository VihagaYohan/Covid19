export default class Http {
  constructor(baseUrl, headers = {}) {
    this.baseUrl = baseUrl;
    this.headers = headers;
  }

  addHeader = (name, value) => {
    this.headers[name] = value;
  };

  jsonGet = (action, payload = {}) => {
    // return promise
    new Promise((resolve, reject) => {
      // get request with header properties
      fetch(this.baseUrl + action, {
        method: 'GET',
        header: {
          ...this.headers,
          Accept: 'application/json',
          'Content-type': 'application/json',
        },
      })
        .then(response => {
          console.log(response); // print response
          switch (response.status) {
            case 404:
              reject({
                code: response.status,
                error: 'Oh no! Content not found',
              });
            case 400:
              reject({
                code: response.status,
                error: 'Bad request',
              });
            case 403:
              reject({
                code: response.status,
                error: 'Access forbidden',
              });
            case 500:
              reject({
                code: response.status,
                error: 'Unauthorized',
              });
            default:
              return response.json();
          }
        })
        .then(responseJson => {
          console.log(responseJson);
          if (0 == responseJson.status) {
            resolve(responseJson.Data);
          } else {
            reject({
              code: responseJson.status,
              error: responseJson.error,
            });
          }
        })
        .catch(exception => {
          console.log(exception);
          if (exception.toString() == 'TypeError : Network request failed') {
            reject({
              code: 0,
              error: 'No Internet Connection',
            });
          } else {
            reject({
              code: 0,
              error: exception.toString(),
            });
          }
        });
    });
  };
}
