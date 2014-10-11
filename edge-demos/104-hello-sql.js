var edge = require('edge');

var getUsers = edge.func('./sql-demo.cs');

var page = { currentPage: 1, pageSize: 3 };

getUsers(page, function (err, result) {
  if (err) throw err;
  console.log(result);
  console.log('FirstName', result[0].FirstName)
});
