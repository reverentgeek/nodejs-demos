var edge = require('edge');

var getUsers = edge.func({
    assemblyFile: '../edge-demos/bin/Debug/edge-demos.dll',
    typeName: 'edgedemos.DapperTests',
    methodName: 'QueryUsers'
  });

var page = { currentPage: 1, pageSize: 3 };

getUsers(page, function(err, res) {
    if (err) throw err;
    console.log(res);
});
