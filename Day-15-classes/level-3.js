//Question 1
const ages = [
  31, 26, 34, 37, 27, 26, 32, 32, 26, 27, 27, 24, 32, 33, 27, 25, 26, 38, 37,
  31, 34, 24, 33, 29, 26,
];
class Statistics {
  constructor(values) {
    this.values = values.sort();
  }
  count() {
    return this.values.length;
  }
  sum() {
    return this.values.reduce((sum, age) => sum + age);
  }
  min() {
    return Math.min(...this.values);
  }
  max() {
    return Math.max(...this.values);
  }
  range() {
    return this.max() - this.min();
  }
  mean() {
    return Math.round(this.sum() / this.count());
  }
  median() {
    const mid = Math.floor(this.count() / 2);
    return this.count() % 2 !== 0
      ? this.values[mid]
      : (this.values[mid - 1] + this.values[mid]) / 2;
  }
  mode() {
    const mode = {};
    let max = 0,
      count = 0;

    for (let i = 0; i < this.values.length; i++) {
      const item = this.values[i];

      if (mode[item]) {
        mode[item]++;
      } else {
        mode[item] = 1;
      }

      if (count < mode[item]) {
        max = item;
        count = mode[item];
      }
    }

    return max;
  }
  var() {
    let diffSqrd = this.values.map((value) => {
      let diff = value - this.mean();
      return diff ** 2;
    });
    let variance = diffSqrd.reduce((sum, cur) => sum + cur) / diffSqrd.length;
    return variance;
  }
  std() {
    return Math.sqrt(this.var()).toFixed(1);
  }
}
const statistics = new Statistics(ages);
console.log("Count:", statistics.count());
console.log("Sum: ", statistics.sum());
console.log("Min: ", statistics.min());
console.log("Max: ", statistics.max());
console.log("Range: ", statistics.range());
console.log("Mean: ", statistics.mean());
console.log("Median: ", statistics.median());
console.log("Mode: ", statistics.mode());
console.log("Variance: ", statistics.var());
console.log("Standard Deviation: ", statistics.std());
//console.log("Frequency Distribution: ", statistics.freqDist()); // [(20.0, 26), (16.0, 27), (12.0, 32), (8.0, 37), (8.0, 34), (8.0, 33), (8.0, 31), (8.0, 24), (4.0, 38), (4.0, 29), (4.0, 25)]
