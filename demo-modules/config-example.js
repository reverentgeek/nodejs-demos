const Config = require( "./config" );
const appConfig = new Config( "./app.json" );

const mw = appConfig.get( "minWidth", 100 );

console.log( mw );
// output: 250
