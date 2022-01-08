// const fs = require('fs');
// const fs = require('fs').promises;
const fs = require('fs');
// const bluebird = require('bluebird');
const util = require('./util');

// fs.readFile('./data/user.json', 'utf8', function (err, data) {
//   if (err) {
//     console.log(err);
//     return;
//   }

//   console.log(data);
// })
 
// fs.readFile('./data/user.json', 'utf8').then((res) => {
//   console.log(res);
// }, (err) => {
//   console.log(err);
// })

// const readFile = bluebird.promisify(fs.readFile);

// readFile('./data/user.json', 'utf8').then((res) => {
//   console.log(res);
// }, (err) => {
//   console.log(err);
// })

const fsFunctions = util.promisifyAll(fs);

// console.log(fsFunctions);

fsFunctions.readFileAsync('./data/user.json', 'utf8').then((res) => {
  console.log(res);
}, (err) => {
  console.log(err);
})