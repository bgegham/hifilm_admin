
module.exports = function(app, multipart) {
    var ResponseUtils           = require('../../utils/utils');

    var adminPanelController          = require('../controllers/adminPanel/adminPanelController');

    // login page
    app.get('/cpanel/admin/login',       multipart.array(), function(req, res){ adminPanelController.get_login(req, res); });

    // create user session on login
    app.post('/cpanel/admin/login',      multipart.array(), function(req, res){ adminPanelController.CREATE_SESSION(req, res); });

    // destroy session and log out
    app.post('/cpanel/admin/logout',     multipart.array(), function(req, res){ adminPanelController.DESTROY_SESSION(req, res); });


    // PRIVATE PAGES
    // dashboard
    app.get('/cpanel/admin/dashboard',   multipart.array(), function(req, res){ adminPanelController.get_dashboard(req, res); });

};