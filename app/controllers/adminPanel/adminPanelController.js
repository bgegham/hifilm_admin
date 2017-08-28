var config                  = require('../../../config')[APP_ENV],
    session                 = require('express-session'),
    ResponseUtils           = require('../../utils/utils'),
    md5                     = require('MD5'),
    path                    = require('path'),
    Admin                   = require('../../models/Admin'),
    Transaction             = require('../../models/Transaction'),
    async                   = require("async"),
    fs                      = require('fs');


var AdminPanelController = function() {};
// login flow
AdminPanelController.prototype.get_login        = function (request, response) {
    response.render( path.resolve('public/views/adminPages/auth/login.jade'), {
        title       : "HIFILM: admin login page"
    });
    response.end();
};
AdminPanelController.prototype.CREATE_SESSION   = function (request, response) {

    var errorMessage    = 'Login failed, please try again.',
        username        = request.body.username,
        password        = request.body.password;

    Admin.findOne({ username: username }).exec( function (err, admin) {
        console.log(err);
        if (admin == null) {
            ResponseUtils.badRequest(response, errorMessage);
        } else {
            if (admin.password === md5(password)) {
                request.session.admin = admin;
                ResponseUtils.send(response, { url: '/cpanel/admin/dashboard' });

            } else {
                ResponseUtils.badRequest(response, errorMessage);
            }
        }
    });

};
AdminPanelController.prototype.DESTROY_SESSION  = function (request, response) {

    if(request.session.admin){
        request.session.destroy();
        ResponseUtils.send(response, { url: '/cpanel/admin/login' });
    } else {
        ResponseUtils.send(response, { url: '/cpanel/admin/login' });
    }

};

// private pages

// dashboard
AdminPanelController.prototype.get_dashboard    = function (request, response) {
    if(request.session.admin){

        var allRequests          = 0,
            totalSuccess          = 0,
            allFails          = 0,
            totalAmount        = 0;

        response.render( path.resolve('public/views/adminPages/dashboard/view.jade'), {
            title               : "HIFILM: admin dashboard",
            active_menu         : "dashboard",
            username            : request.session.admin.username,
            allRequests          : allRequests,
            totalSuccess         : totalSuccess,
            allFails        : allFails,
            totalAmount       : totalAmount
        });
        response.end();

    } else {
        response.redirect('/cpanel/admin/login');
        response.end();
    }
};

AdminPanelController.prototype.get_transactions    = function (request, response) {
    if(request.session.admin){

        var allRequests             = 0,
            totalSuccess            = 0,
            allFails                = 0,
            totalAmount             = 0;

        Transaction.find({})
            .sort({'created_at': -1})
            .exec(function (err, _transactions) {
                if(err){
                    response.redirect('/404');
                    response.end();
                } else {
                    response.render( path.resolve('public/views/adminPages/transactions/view.jade'), {
                        title               : "HIFILM: admin transactions",
                        active_menu         : "transactions",
                        username            : request.session.admin.username,
                        data                : _transactions,
                        allRequests             : allRequests,
                        totalSuccess            : totalSuccess,
                        allFails                : allFails,
                        totalAmount             : totalAmount
                    });
                    response.end();
                }
            });


    } else {
        response.redirect('/cpanel/admin/login');
        response.end();
    }
};

AdminPanelController.prototype.get_graphics    = function (request, response) {
    if(request.session.admin){


        response.render( path.resolve('public/views/adminPages/graphics/view.jade'), {
            title               : "HIFILM: admin graphics",
            active_menu         : "graphics",
            username            : request.session.admin.username
        });
        response.end();


    } else {
        response.redirect('/cpanel/admin/login');
        response.end();
    }
};


module.exports = new AdminPanelController();