const fs = require( "fs" );

const configModule = function( path ) {
	const configData = fs.readFileSync( path, "utf8" );
	const config = JSON.parse( configData );

	const get = function( property, defaultValue ) {
		return config[ property ] || defaultValue;
	};
	const set = function( property, value ) {
		config[ property ] = value;
	};
	const internalFunction = function() {
		/* stuff */
	};
	const save = function( callback ) {
		internalFunction();
		callback();
	};

	return {
		get,
		set,
		save
	};
};

module.exports = configModule;
