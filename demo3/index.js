var hello = require( "./hello" );

// console.log(hello);

hello.getHello( "Microsoft MVP V-Conf", function( err, response ) {
	if ( err )
		throw err;
	console.log( "Version:", hello.version );
	console.log( response );
} );

// hello.getHello( null, function( err, response ) {
// 	if ( err )
// 		throw err;
// 	console.log( response );
// } );
