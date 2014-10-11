var edge = require('edge');

var hello = edge.func(function () {/*
async (input) =>
{
  return "I tell you what I need... " + input.ToString();
}
*/});

hello('MORE CAFFEINE!!', function (err, result) {
  if (err) throw err;
  console.log(result);
});
