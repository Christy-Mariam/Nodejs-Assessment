const path = require( 'path' );
const { getArticles : getArticlesSvc } = require( '../services/articles' );

const getHome = ( req, res ) => {
    res.render( 'index', {
        nav: {
            activeLink: req.url
        },
        title: 'Blog App'
    });
};

const getArticles = ( req, res ) => {
    const articles = getArticlesSvc();
    res.render( 'articles', {
        nav: {
            activeLink: req.url
        },
        title: 'List of Articles | Blog App',
        articles
    });
}

module.exports = {
    getHome,
    getArticles,
};