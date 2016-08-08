var fs = require( "fs" ); // Built-in Node.js module

var express = require( "express" ); // Module installed via npm

var ApiService = require( "./app/ApiService" ); // Local module

var api = new ApiService( { port: 8888 } );

api.someMethod( "val1", 22, function( err, results ) {
  if ( err ) {
    // Do something
  }
   // Do stuff with results
} );
