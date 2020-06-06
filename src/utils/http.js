import qs from 'qs';
import axios from 'axios';

class HTTP {
  axiosPost (options) {
    axios({
      url: options.url,
      method: 'POST',
      header: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      data: qs.stringify(options.data)
    })
    .then(res => options.success(res))
    .catch(err => options.error(err));
  }
}

export { HTTP }