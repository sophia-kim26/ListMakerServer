const logger = require("morgan");

// set up the server
const express = require( "express" );
const app = express();
const port = 3000;

// start the server
app.listen( port, () => {
    console.log(`App server listening on ${ port }. (Go to http://localhost:${ port })` );
} );

// define middleware that logs all incoming requests
app.use((req, res, next) => {
    app.use(logger("dev"));
    // define middleware that serves static resources in the public directory
    app.use(express.static(__dirname + '/public'));
    next();
} );

// define a route for the default home page
app.get( "/", ( req, res ) => {
    console.log("GET /");
    res.sendFile( __dirname + "/views/index.html" );
} );

// define a route for the main list page
app.get( "/list", ( req, res ) => {
    console.log("GET /list");
    res.sendFile( __dirname + "/views/list.html" );
} );

// define a route for the list detail page
app.get( "/list/details", ( req, res ) => {
    console.log("GET /list/details");
    res.sendFile( __dirname + "/views/details.html" );
} );

// define a route for the create page
app.get( "/create", ( req, res ) => {
    console.log("GET /create");
    res.sendFile( __dirname + "/views/create.html" );
} );

// ended at 2.3.3