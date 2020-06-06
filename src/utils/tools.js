const tools = {
  formatJSON (arr, key) {
    arr.filter(val => {
      if (val[key]) {
        val[key] = val[key].split(',');
      }
    })

    return arr;
  },

  josnToArray (str) {
    return JSON.parse(str);
  },

  replaceToSpace (str) {
    return str.replace(/,/g, ' ');
  },

  strToArray (str) {
    return str.split(',');
  },

  replaceSpace (str) {
    return str.replace(/\s+/g, '');
  },

  throttle (fn, delay = 500) {
    var fTime = Date.now(),
        res = null,
        t = null;

    return function () {
      var curTime = Date.now(),
          args = arguments;

      t && clearTimeout(t);
      t = null;

      if (curTime - fTime >= delay) {
        res = fn.apply(this, args);
        fTime = curTime;
      } else {
        t = setTimeout(function () {
          res = fn.apply(this, args);
        }.bind(this), delay);
      }

      return res;
    }
  }
}

export default tools;
