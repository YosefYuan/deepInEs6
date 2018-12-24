let fs = require('fs');

function readFile(filename) {
  fs.readFile(filename, (err, data) => {
    if (!err) {
      console.log(data)
    }
  })
}
readFile("01.js")