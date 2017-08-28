var config              = require('../../config')[APP_ENV],
    mongoose            = require('mongoose'),
    Schema              = mongoose.Schema;

var transactionSchema = new Schema({
    user_id : {
        type: String,
        index: true,
        default:""
    },
    method : {
        type: String,
        index: true,
        default:""
    },
    status : {
        type: String,
        index: true,
        default:""
    },
    id_schedule : {
        type: String,
        default:""
    },
    date_time : {
        type: String,
        index: true,
        default:""
    },
    theatre_name : {
        type: String,
        default:""
    },
    movie_name : {
        type: String,
        default:""
    },
    email : {
        type: String,
        default:""
    },
    price : {
        type: String,
        default:""
    },
    phone : {
        type: String,
        default:""
    },
    address : {
        type: String,
        default:""
    },
    totalPrice : {
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