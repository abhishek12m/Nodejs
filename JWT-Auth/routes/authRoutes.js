require('dotenv').config();
const express = require('express');
const jwt = require('jsonwebtoken');
const router = express.Router();

router.post('/login', (req, res) => {
    
    const { username, password } = req.body;


    if (username === 'abhishek' && password === 'maheshwari') {
        
        const token = jwt.sign({ username }, process.env.JWT_SECRET, { expiresIn: '1h' });

        
        res.json({ token });
    } else {
        res.status(401).json({ error: 'Unauthorized' });
    }
});

module.exports = router;
