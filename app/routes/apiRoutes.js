var config                  = require('../../config')[APP_ENV],
    jwt                     = require('jsonwebtoken'),
    ResponseUtils           = require('../utils/utils'),
    path                    = require('path');



module.exports = function(app, multipart) {

    var apiController             = require('../controllers/api/apiController');

    // Create user
    app.get('/api/1.0/hifilm/callback/', function(req, res) { apiController.authorizeInstagram(req, res); });

    // object images
    app.get('/api/1.0/hifilm/:id', function(req, res) { apiController.imageShow(req, res); });

    app.get('/api/1.0/hifilm/:id', function(req, res) { apiController.imageShow(req, res); });
    // GET USER LAST IMAGE
    app.get('/api/1.0/hifilm/:id',   function(req, res) { apiController.userLastImage(req, res); });

};