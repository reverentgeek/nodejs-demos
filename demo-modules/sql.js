const sql = require( "seriate" );

// Read from environment variables or local config file
const config = { server: "127.0.0.1", user: "user1", password: "mypass", database: "mydb" };
sql.setDefaultConfig( config );

sql.execute( {
	query: "SELECT userId, email FROM accounts"
} ).then( function( results ) {
	// Do something with the results
	console.log( results );
} ).catch( function( err ) {
	console.log( "Something bad happened:", err );
} );

