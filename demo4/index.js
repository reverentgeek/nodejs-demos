var Hello = require('./hello');

var hello1 = Hello('Atlanta Code Camp');

hello1.getHello(function(err, response){
  if (err) throw err;
  console.log("Version:", hello1.version);
  console.log(response);
});

var hello2 = Hello('y\'all');

hello2.getHello(function(err, response){
  if (err) throw err;
  console.log("Version:", hello2.version);
  console.log(response);
});
