import { HTTP } from 'utils/http';
import { API } from 'utils/config';

class IndexModel extends HTTP {
  getHomeDatas (cityId) {
    return new Promise((resolve, reject) => {
      this.axiosPost({
        url: API.GET_HOME_DATAS,
        data: { cityId },
        success (data) {
          resolve({
            status: 0,
            data: data.data
          });
        },
        error (error) {
          reject({
            status: -1,
            error
          });
        }
      })
    })
  }
}

export { IndexModel }