var edge = require('edge');

var hello = edge.func('./file-demo.cs');

hello('MORE CAFFEINE!!', function (err, result) {
  if (err) throw err;
  console.log(result);
});
