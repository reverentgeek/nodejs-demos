var Hello = require( "./hello" );

// console.log( "Hello module:", Hello );

var hello1 = Hello( "Code PaLOUsa 2015" );

// console.log( "hello1 instance:", hello1 );

hello1.getHello( function( err, response ) {
	if ( err )
		throw err;
	console.log( "Version:", hello1.version );
	console.log( response );
} );

// var hello2 = Hello( "y'all" );

// hello2.getHello( function( err, response ) {
// 	if ( err )
// 		throw err;
// 	console.log( "Version:", hello2.version );
// 	console.log( response );
// } );
