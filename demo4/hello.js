var Hello = function( name ) {
	var getHello = function( callback ) {
		var err = null;
		if ( name === null || name === "" ) {
			callback( new Error( "You must provide a valid name!" ) );
		} else {
			callback( null, "Hello, " + name + "!" );
		}
	};

	return {
		version: 2,
		getHello: getHello
	};
};

module.exports = Hello;
