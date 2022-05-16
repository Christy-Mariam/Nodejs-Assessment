const mongoose = require( 'mongoose' );


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
};

const getArticleById = (id) => {
    return articles.find(
        article => article.id === id
    );
};

const createArticle = ( article ) => {
    return Article.create( article );
};

module.exports = {
    getArticles,
    getArticleById,
    createArticle
};