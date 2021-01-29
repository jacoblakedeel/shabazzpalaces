const express = require('express');
const router = express.Router();
let dataFile = require('../data/data.json');


router.use(express.urlencoded({extended: false}));
router.use(express.json());


router.get('/', (req, res) =>{

    res.render('index', {
        pageID: 'indexID'
    })
})

router.post('/', (req, res) => {
    res.status(200).json({name: req.body.name, message: req.body.comment})
})


module.exports = router;