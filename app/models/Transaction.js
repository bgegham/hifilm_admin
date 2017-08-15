var config              = require('../../config')[APP_ENV],
    mongoose            = require('mongoose'),
    Schema              = mongoose.Schema;

var transactionSchema = new Schema({
    body : {
        type: String,
        index: true,
        default:""
    },
    created_at: {
        type: Date,
        default: Date.now,
        required: true
    }
});

module.exports = mongoose.model('Transaction', transactionSchema);