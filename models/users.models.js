const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    Email: String,
    Lastname : String,
    Firstname: String,
    Role: String,
    Address: String,
    phone: Number
}, {timestamps: true})
module.exports = mongoose.model('users', UserSchema)
