var mongoose = require('mongoose');
var Schema = mongoose.Schema;

mongoose.promise = global.Promise;

var FacilitiesSchema = new Schema({
    name: String,
    street: String,
    city: String,
    state: String,
    contact: String
});

  FacilitiesSchema.pre('save', function(next){
    now = new Date();
    this.updated_at = now;
    if ( !this.created_at ) {
        this.created_at = now;
    }
    next();
});

FaccilitiesSchema.virtual('fullName').get(function () {
    return this.first_name + ' ' + this.last_name;
});

module.exports = mongoose.model("Facilities", FacilitiesSchema);


