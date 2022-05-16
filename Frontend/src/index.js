require( 'dotenv' ).config();

const express = require('express');
const path = require( 'path' );
const indexRouter = require('./routes/index');

const app = express();

app.use( indexRouter );

app.set( 'view engine', 'ejs' );
app.set( 'views', path.join( process.cwd(), 'views' ) );


app.use( express.static( path.join( process.cwd(), 'public' ) ) );

app.use( express.json() );
app.use( express.urlencoded( { extended: false } ) );

const PORT = process.env.PORT || 4201;

app.listen( PORT, () => {
    console.log( `Check http://localhost:${PORT}` );
});


