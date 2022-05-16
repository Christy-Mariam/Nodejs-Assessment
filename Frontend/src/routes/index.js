const express = require( 'express' );
const {
    getHome,
    getArticles
} = require( '../controllers/index' );

const router = express.Router();

router.get( '/', getHome );
router.get( '/articles', getArticles );

module.exports = router;