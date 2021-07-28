import { resolve } from 'any-promise';
import axios from 'axios';
class SafeRequest {
  static fetch (url) {
    let result = {
      code: 0,
      message: '',
      data: null
    };
    return new Promise((resolve) => {
      axios(url).then(data => {
        result.data = data.data;
        resolve(result);
      }).catch(e => {
        result.code = 1;
        result.message = e.message;
        result.data = [{
          id: 1,
          name: '《JS权威指南》'
        },
        {
          id: 2,
          name: '《JS语言精粹》'
        }];
        resolve(result);
      });
    });
  }
}

export default SafeRequest