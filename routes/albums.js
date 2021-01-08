const express = require('express');
const router = express.Router();
let dataFile = require('../data/data.json');



router.get('/albums', (req, res) => {
    
    let pageAlbums = dataFile.albums;

    
    
    let bandName = [];
    let shortName = [];
    let albumCovers = [];
    let albumNameArr = [];
    let summariesArr = [];
    let tracklistArr = [];
    let appleLinks = [];
    let spotifyLinks = [];

    pageAlbums.forEach(albumObj =>{
        bandName = bandName.concat(albumObj.name)
    })
    pageAlbums.forEach(albumObj =>{
        shortName = shortName.concat(albumObj.shortname)
    })
    pageAlbums.forEach(albumObj =>{
        albumCovers = albumCovers.concat(albumObj.artwork)
    })
    pageAlbums.forEach(albumObj =>{
        albumNameArr = albumNameArr.concat(albumObj.albumName)
    })
    pageAlbums.forEach(albumObj =>{
        summariesArr = summariesArr.concat(albumObj.summary)
    })
    pageAlbums.forEach(albumObj =>{
        tracklistArr = tracklistArr.concat(albumObj.tracklist)
    })
    pageAlbums.forEach(albumObj =>{
        appleLinks = appleLinks.concat(albumObj.albumAM)
    })
    pageAlbums.forEach(albumObj =>{
        spotifyLinks = spotifyLinks.concat(albumObj.albumSM)
    })



    res.render('albums', {

        covers: albumCovers,
        bandName: bandName,
        shortName: shortName,
        albumNameArr: albumNameArr,
        summariesArr: summariesArr,
        tracklistArr: tracklistArr,
        appleLinks: appleLinks,
        spotifyLinks: spotifyLinks,
        data: dataFile.albums

        


    })
})






module.exports = router;