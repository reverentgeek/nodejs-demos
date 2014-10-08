var hello = require('./hello');

hello.getHello('Atlanta Code Camp', function(err, response){
  if (err) throw err;
  console.log("Version:", hello.version);
  console.log(response);
});

hello.getHello(null, function(err, response){
  if (err) throw err;
  console.log(response);
});
