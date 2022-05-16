const express = require( 'express' );
const {
    getArticles,
    getArticleById,
    postArticle,
    patchArticle,
    deleteArticle
} = require( '../../controllers/api/articles' );


const router = express.Router();

router.get( '/', getArticles );
router.get( '/:id', getArticleById );
router.post( '/', postArticle );
router.patch( '/:id', patchArticle );
router.delete( '/:id', deleteArticle );

module.exports = router;