var config                  = require('../../../config')[APP_ENV],
    session                 = require('express-session'),
    ResponseUtils           = require('../../utils/utils'),
    md5                     = require('MD5'),
    path                    = require('path'),
    Admin                   = require('../../models/Admin'),
    User                    = require('../../models/Transaction'),
    async                   = require("async"),
    emailHelper             = require('sendgrid').mail,
    fs                      = require('fs'),
    moment                  = require('moment');
    Transaction             = require('../../models/Transaction');


var API_Controller = function() {};

API_Controller.prototype.sendEmail    = function (request, response) {

    if((request.body.email || request.body.phone)){
        //sending process
        response.render(path.resolve(global.ROOT_DIR+'public/views/email_templates/subscribe.jade'), {
            _name_            : request.body.name  || " ",
            _email_           : request.body.email || " ",
            _phone_           : request.body.phone || " ",
            _date_time_       : request.body.date_time || " ",
            _theatre_name_    : request.body.theatre_name || " ",
            _movie_name_      : request.body.movie_name || " ",
            _price_           : request.body.price || " "
        }, function(err, html){

            var from_email  = new emailHelper.Email("reserve@ticket");
            var to_email    = new emailHelper.Email(config.EMAIL_FROM);
            var subject     = "Ticket reservation by:"+moment().format("DD-MM-YYYY HH:mm:ss");
            var content     = new emailHelper.Content('text/html', html);
            var mail        = new emailHelper.Mail(from_email, subject, to_email, content);
            var sg          = require('sendgrid')(config.SENDGRID_API_KEY);
            var request     = sg.emptyRequest({
                method: 'POST',
                path: '/v3/mail/send',
                body: mail.toJSON()
            });

            sg.API(request, function(error, responseEmail) {});
        });

        setTimeout(function () {


            response.render(path.resolve(global.ROOT_DIR+'public/views/email_templates/subscribe.jade'), {
                _name_            : request.body.name  || " ",
                _email_           : request.body.email || " ",
                _phone_           : request.body.phone || " ",
                _date_time_       : request.body.date_time || " ",
                _theatre_name_    : request.body.theatre_name || " ",
                _movie_name_      : request.body.movie_name || " ",
                _price_           : request.body.price || " "
            }, function(err, html){

                var from_email  = new emailHelper.Email("reserve@ticket");
                var to_email    = new emailHelper.Email(config.EMAIL_FROM2);
                var subject     = "Ticket reservation by:"+moment().format("DD-MM-YYYY HH:mm:ss");
                var content     = new emailHelper.Content('text/html', html);
                var mail        = new emailHelper.Mail(from_email, subject, to_email, content);
                var sg          = require('sendgrid')(config.SENDGRID_API_KEY);
                var request     = sg.emptyRequest({
                    method: 'POST',
                    path: '/v3/mail/send',
                    body: mail.toJSON()
                });

                sg.API(request, function(error, responseEmail) {
                    if(error){
                        ResponseUtils.badRequest(response, "error");
                    } else {
                        ResponseUtils.send(response, { status: 'success' });
                    }

                });
            });

        }, 500);

    } else {
        ResponseUtils.badRequest(response, "error");
    }

};

API_Controller.prototype.logApp       = function (request, response) {
    console.log("------log------");
    console.log(request.body);
    console.log("------log------");

    var _transaction                = new Transaction();
        _transaction.user_id        = request.body.hfu;
        _transaction.method         = request.body.method;
        _transaction.status         = request.body.status;
        _transaction.totalPrice     = request.body.totalPrice;
        _transaction.email          = request.body.email;
        _transaction.phone          = request.body.phone;
        _transaction.address        = request.body.address;
        _transaction.id_schedule    = request.body.id_schedule;
        _transaction.date_time      = request.body.date_time;
        _transaction.theatre_name   = request.body.theatre_name;
        _transaction.movie_name     = request.body.movie_name;
        _transaction.price          = request.body.price;

    _transaction.save(function(err) {
        console.log(err);
        ResponseUtils.send(response, { status: 'success' });
    });

};

API_Controller.prototype.logAppCall       = function (request, response) {
    console.log("------log------");
    console.log(request.body);
    console.log("------log------");
    console.log("------log------");
    console.log(Object.keys(request.body));
    console.log("------log------");



};


module.exports = new API_Controller();