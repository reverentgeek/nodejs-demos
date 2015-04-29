var Hello = {
	version: 1,
	getHello: function( name, callback ) {
		var err = null;
		if ( name === null || name === "" ) {
			callback( new Error( "You must provide a valid name!" ) );
		} else {
			callback( null, "Hello, " + name + "!" );
		}
	}
};

module.exports = Hello;
