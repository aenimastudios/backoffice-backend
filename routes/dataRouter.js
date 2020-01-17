var express = require('express');
const router = express.Router();
const handler = require('../handlers/dataHandler.js');


router.post('/operation-in', (req, res, next) => {
    
    handler.inOp(req.body).catch(() => {
        res.status(400).send('internal server error');    
    })
    
    res.status(200).send('OK');
});

router.post('/operation-out', (req, res, next) => {
    
    handler.outOp(req.body).catch(() => {
        res.status(400).send('internal server error');    
    });
    
    res.status(200).send('OK');
});

router.post('/cash', (req, res, next) => {
    
    handler.cashOp(req.body).catch(() => {
        res.status(400).send('internal server error');    
    });

    res.status(200).send('OK');
});

module.exports = router;
