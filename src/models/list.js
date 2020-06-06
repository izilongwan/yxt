import { HTTP } from 'utils/http';
import { API } from 'utils/config';

class ListModel extends HTTP {
  getListDatas (field, cityId) {
    return new Promise((resolve, reject) => {
      this.axiosPost({
        url: API.GET_LIST_DATAS,
        data: { field, cityId},
        success (data) {
          resolve({
            status: 0,
            data: data.data
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

export { ListModel }