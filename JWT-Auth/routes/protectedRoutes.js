const express = require('express');
const router = express.Router();
const verifyToken = require('../middleware/tokenAuthMiddleware');


router.get('/', verifyToken, (req, res) => {
    
    const user = req.user;

    res.json({ message: 'Protected route accessed', user });
});

module.exports = router;
