var config                  = require('../../../config')[APP_ENV],
    session                 = require('express-session'),
    ResponseUtils           = require('../../utils/utils'),
    md5                     = require('MD5'),
    path                    = require('path'),
    Admin                   = require('../../models/Admin'),
    User                    = require('../../models/Transaction'),
    async                   = require("async"),
    emailHelper             = require('sendgrid').mail,
    fs                      = require('fs');


var API_Controller = function() {};

API_Controller.prototype.sendEmail    = function (request, response) {

    if((request.body.email || request.body.phone)){
        //sending process
        response.render(path.resolve(global.ROOT_DIR+'public/views/email_templates/subscribe.jade'), {
            _name_           : request.body.name || " ",
            _email_           : request.body.email || " ",
            _phone_           : request.body.phone || " "
        }, function(err, html){

            var from_email  = new emailHelper.Email("reserve@ticket");
            var to_email    = new emailHelper.Email(config.EMAIL_FROM);
            var subject     = "Ticket reservation";
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
    } else {
        ResponseUtils.badRequest(response, "error");
    }

};


module.exports = new API_Controller();