import { HTTP } from 'utils/http';
import { API } from 'utils/config';

class SearchModel extends HTTP {
  searchAction (keyword, cityId) {
    return new Promise((resolve, reject) => {
      this.axiosPost({
        url: API.SEARCH_ACTION,
        data: {
          keyword,
          cityId
        },
        success (data) {
          resolve({
            data: data.data,
            status: 0
          })
        },
        error (error) {
          resolve({
            error,
            status: -1
          })
        }
      })
    })
  }
}

export { SearchModel }