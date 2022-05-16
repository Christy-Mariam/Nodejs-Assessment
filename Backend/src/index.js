require( 'dotenv' ).config();
const connect = require( './data/connect' );

const express = require('express');
const path = require( 'path' );
const indexRouter = require('./routes/index');
const apiArticlesRouter = require( './routes/api/articles' );


const app = express();


app.use( indexRouter );
app.use( '/api/articles', apiArticlesRouter );

app.set( 'view engine', 'ejs' );
app.set( 'views', path.join( process.cwd(), 'views' ) );


app.use( express.static( path.join( process.cwd(), 'public' ) ) );

app.use( express.json() );
app.use( express.urlencoded( { extended: false } ) );

const PORT = process.env.PORT || 4201;

app.listen( PORT, () => {
    console.log( `Check http://localhost:${PORT}` );
    connect();
});


// require( 'dotenv' ).config();

// // this registers the models and needs to be on top
// const connect = require( './data/connect' );

// const express = require( 'express' );
// const path = require( 'path' );

// const logger = require( './middleware/logger' );
// const { notFound, errorHandler } = require( './middleware/error' );
// const indexRouter = require( './routes/index' );
// const apiWorkshopsRouter = require( './routes/api/workshops' );
// const apiTopicsRouter = require( './routes/api/topics' );
// const apiAuthRouter = require( './routes/api/auth' );

// const app = express();

// app.set( 'view engine', 'ejs' );
// app.set( 'views', path.join( process.cwd(), 'views' ) );

// // we can also provide a filtering URL as first argument to app.use()
// app.use( /*'/api', */ logger );

// // this is the first "middleware" (we will see what middleware is later) - when a request comes in, this checks if the requested file can be found in public folder
// app.use( express.static( path.join( process.cwd(), 'public' ) ) );


// app.use( indexRouter );
// app.use( '/api/workshops', apiWorkshopsRouter );
// app.use( '/api/topics', apiTopicsRouter );
// app.use( '/api/auth', apiAuthRouter );

// app.use( notFound );
// app.use( errorHandler );

// const PORT = process.env.PORT || 3000;

// app.listen( PORT, () => {
//     console.log( `Check http://localhost:${PORT}` );
//     connect();
// });