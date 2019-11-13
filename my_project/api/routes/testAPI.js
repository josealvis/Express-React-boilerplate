var express = require('express');
const path = require('path');
const fs = require('fs');

let ruta = "C:\\";

const directoryPath = path.join(ruta, 'media');
//passsing directoryPath and callback function
fs.readdir(directoryPath, function (err, files) {
    //handling error
    if (err) {
        return console.log('Unable to scan directory: ' + err);
    } 
    //listing all files using forEach
    files.forEach(function (file) {
        // Do whatever you want to do with the file
        console.log(file); 
    });
});


var router = express.Router();


router.get('/', function(req, res){
    res.send('API is working properly');
});

module.exports = router;
