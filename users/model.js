const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    //username: { type: String, unique: true, required: true },
    hash: { type: String, required: true },
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true },
    year: {type: String},
    picture: {type: String},
    phone: { type: String },
    twitter: { type: String },
    linkedIn: { type: String },
    github: { type: String },
    portfolio: { type: String },
    language: { type: String },
    project: { type: String },
    currentJob: { type: String },
    companySite: { type: String },
    lookingForWork: { type: Boolean },
    lookingToHire: { type: String },
    hobby:{ type: String },
    createdDate: { type: Date, default: Date.now }
});

schema.set('toJSON', { virtuals: true });

module.exports = mongoose.model('User', schema);