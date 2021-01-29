const express = require('express');
const router = express.Router();
let dataFile = require('../data/data.json');


let pageAlbums = dataFile.albums;

router.get('/albums', (req, res) => {
    

    res.render('albums', {

        data: dataFile.albums,
        pageID: 'albumsID'

    })
})

router.get('/albums/:id',(req, res) =>{

    let data = [];

    pageAlbums.forEach(albObj =>{
        if(albObj.shortname === req.params.id){
            data.push(albObj)

        }
    })

    res.render('albums', {
        data: data,
        pageID: 'individAlbum'
    })
})







module.exports = router;