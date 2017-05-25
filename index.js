"use strict";

class EloRank {
  constructor(k) {
    this.k = k || 32;
  }

  setKFactor(k) {
    this.k = k;
  }
  getKFactor() {
    return this.k;
  }

  getExpected(a, b) {
    return 1/(1+Math.pow(10,((b-a)/400)));
  }
  updateRating(expected, actual, current) {
    return Math.round(current+ this.k*(actual-expected));
  }
}

module.exports = EloRank;
