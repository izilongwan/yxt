import { HTTP } from 'utils/http';
import { API } from 'utils/config';

class DetailModel extends HTTP {
  getDetail (field, id) {
    return new Promise((resolve, reject) => {
      this.axiosPost({
        url: API.GET_DETAIL,
        data: { 
          field,
          id
        },
        success (data) {
          resolve({
            data: data.data,
            status: 0
          })
        },
        error (error) {
          reject({
            status: -1,
            error
          })
        }
      })
    })
  }
}

export { DetailModel }