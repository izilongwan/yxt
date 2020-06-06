const mutations = {
  changeCity (state, info) {
    state.cityName = info.cityName;
    state.cityId = info.cityId;

    setLocal(state);
  },

  changeField (state, field) {
    state.field = field;

    setLocal(state);
  }
}

function setLocal (state) {
  try {
    localStorage.cityInfo = JSON.stringify(state);
  }
  catch (e) {}
}

export default mutations;