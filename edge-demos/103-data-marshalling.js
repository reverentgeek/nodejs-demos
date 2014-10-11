var edge = require( 'edge' );

var dataToSendToDotNET = {
    anInteger: 1,
    aNumber: 3.1415,
    aString: 'String from Node.js',
    aBool: true,
    anObject: { a: '1' },
    anArray: [ 'a', 1, true ],
    aBuffer: new Buffer(1024)
}

var testMarshalling = edge.func('./data-marshalling.cs');

testMarshalling(dataToSendToDotNET, function (err, result) {
  if (err) throw err;
  console.log('Data from .NET to Node.js')
  console.log('=========================')
  console.log(result);
});