export enum ScoreType {
  Lose = 0,
  Draw = 0.5,
  Win = 1
}

class EloRank {
  k: number;

  constructor(k: number = 32) {
    this.k = k;
  }

  setKFactor(k: number) {
    this.k = k;
  }
  getKFactor() {
    return this.k;
  }

  getExpected(a: number, b: number) {
    return 1 / (1 + Math.pow(10, (b - a) / 400));
  }
  updateRating(expected: number, actual: ScoreType, current: number) {
    return Math.round(current + this.k * (actual - expected));
  }
}

export default EloRank;
