// set up the server
const express = require( "express" );
const app = express();
const port = 3000;

// start the server
app.listen( port, () => {
    console.log(`App server listening on ${ port }. (Go to http://localhost:${ port })` );
} );

// define a route for the default home page
app.get( "/", ( req, res ) => {
    res.sendFile( __dirname + "/views/index.html" );
} );

// define a route for the main list page
app.get( "/list", ( req, res ) => {
    res.sendFile( __dirname + "/views/list.html" );
} );

// define a route for the list detail page
app.get( "/list/details", ( req, res ) => {
    res.sendFile( __dirname + "/views/details.html" );
} );

// ended at 2.3.3