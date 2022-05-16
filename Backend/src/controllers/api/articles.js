const {
    getArticles: getArticlesSvc,
    getArticleById: getArticleByIdSvc,
    createArticle,
    updateArticle,
    removeArticle
} = require('../../services/articles');

const getArticles = async (req, res) => {
    const {
        comments
    } = req.query;

    const articles = await getArticlesSvc({
        filter: {
            comments: comments
        }
    });

    res.json({
        data: articles
    });
};

const getArticleById = async (req, res) => {
    const { id } = req.params;

    const article = await getArticleByIdSvc(id);

    if (!article) {
        return res.status(404).json({
            status: 'error',
            message: 'Not found'
        });
    }

    res.json({
        data: article
    });

};

const postArticle = async (req, res) => {
    const article = req.body;

    try {
        const updatedArticle = await createArticle(article);
        res.status(201).json({
            data: updatedArticle
        });
    } catch (error) {
        if (error.name === 'ValidationError') {
            res.status(400).json({
                message: error.message
            });
        } else {
            res.status(500).json({
                message: 'Internal Server Error'
            });
        }
    }
};

const patchArticle = async (req, res) => {
    const article = req.body;
    const { id } = req.params;

    try {
        const updatedArticle = await updateArticle(id, article);
        res.json({
            data: updatedArticle
        });
    } catch (error) {
        if (error.name === 'ValidationError' || error.name === 'CastError') {
            res.status(400).json({
                message: error.message
            });
        } else {
            res.status(500).json({
                message: 'Internal Server Error'
            });
        }
    }
};

const deleteArticle = async (req, res) => {
    const { id } = req.params;

    try {
        const article = await removeArticle(id);

        if (!article) {
            return res.status(404).json({
                status: 'error',
                message: 'Not found'
            });
        }

        res.status(204).json();
    } catch (error) {
        res.status(500).json({
            message: 'Internal Server Error'
        });
    }
};

module.exports = {
    getArticles,
    getArticleById,
    postArticle,
    patchArticle,
    deleteArticle
};