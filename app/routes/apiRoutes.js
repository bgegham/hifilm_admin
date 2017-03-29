var config                  = require('../../config')[APP_ENV],
    jwt                     = require('jsonwebtoken'),
    ResponseUtils           = require('../utils/utils'),
    path                    = require('path');



module.exports = function(app, multipart) {

    var apiController             = require('../controllers/api/apiController');

    // Send email
    app.post('/api/1.0/hifilm/send/email', function(req, res) { apiController.sendEmail(req, res); });

};