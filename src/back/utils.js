class Utilx {
  static times(n) {
    let result = [];

    for (let i = 0, len = n; i < len; ++i) {
      result.push(i);
    }

    return result;
  }
}

module.exports = Utilx;
