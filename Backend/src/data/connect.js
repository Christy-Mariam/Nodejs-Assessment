const mongoose = require('mongoose');

// require( '../models/User' );
require( '../models/Article' );
// require( '../models/Topic' );

mongoose.set( 'returnOriginal', false );
mongoose.set( 'runValidators', true );

const connect = () => {
    const { DB_HOST, DB_PORT, DB_NAME } = process.env;
    // console.log(`mongodb://${DB_HOST}:${DB_PORT}/${DB_NAME}`);

    mongoose.connect(`mongodb://${DB_HOST}:${DB_PORT}/${DB_NAME}`)
        .then(() => {
            console.log('connected to the DB')
        })
        .catch(error => {
            console.error(error.message);
        });
};

module.exports = connect;