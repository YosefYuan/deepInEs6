let set = new Set([1, 2])
let processor = {
  output(value) {
    console.log(value)
  },
  process(dataSet) {
    dataSet.forEach(function (value) {
      this.output(value);
      console.log(this)
    }, this)
  }
}

processor.process(set)