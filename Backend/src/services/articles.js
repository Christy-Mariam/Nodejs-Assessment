const mongoose = require( 'mongoose' );

const Article = mongoose.model('Article');
const articles = require('../data/articles.json');

const getArticles = (options = {}) => {
    const { filter } = options;

    if (filter && filter.comment) {
        return articles.filter(
            article => article.comments[filter.comment]
        );
    }
    else {
        return articles;
    }

    //return Article.find(filter);
};

const getArticleById = (id) => {
    return Article.findById( id );
};

const createArticle = ( article ) => {
    return Article.create( article );
};


const updateArticle = ( id, article ) => {
    return Article.findByIdAndUpdate( id, article);
    }
    
    const removeArticle = ( id ) => {
        return Article.findByIdAndDelete( id );
    };

module.exports = {
    getArticles,
    getArticleById,
    createArticle,
    updateArticle,
    removeArticle
};
