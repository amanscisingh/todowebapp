const express = require('express');
const apiRouter = express.Router();

apiRouter.get('/', (req, res) => {
    res.json({
        message: 'Welcome to the API'
    });
});

module.exports = apiRouter;