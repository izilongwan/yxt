let cityInfo = {
  cityName: '全部',
  cityInfo: 0,
  field: 'all'
}

;(function () {
  try {
    if (localStorage.cityInfo) {
      cityInfo = JSON.parse(localStorage.cityInfo);
    }
  }
  catch (e) {}
})();

const state = {
  cityName: cityInfo.cityName,
  cityId: cityInfo.cityId,
  field: cityInfo.field
}

export default state;