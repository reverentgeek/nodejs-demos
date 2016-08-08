const t = require( "./temperature" );

const c = t.boilingCelcius;
const f = t.convertToFarenheit( c );

console.log( `${c} C is ${f} F` );
// output: 100 C is 212 F
