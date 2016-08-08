function convertToCelcius( f ) {
	return ( f - 32 ) * ( 5 / 9 );
}

function convertToFarenheit( c ) {
	return ( c * ( 9 / 5 ) ) + 32;
}

const temp = {
	freezingCelcius: 0,
	freezingFarenheit: 32,
	boilingCelcius: 100,
	boilingFarenheit: 212,
	convertToCelcius,
	convertToFarenheit
};

module.exports = temp;
