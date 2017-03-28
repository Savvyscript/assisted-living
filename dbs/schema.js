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


var UsersSchema = new Schema({
    first_name: String,
    last_name: String,
    email: String,
    username: String,
    password: String,
    facilities:[FacilitiesSchema]

});

UsersSchema.pre('save', function(next){
    now = new Date();
    this.updated_at = now;
    if ( !this.created_at ) {
        this.created_at = now;
    }
    next();
});

// UsersSchema.virtual('fullName').get(function () {
//     return this.first_name + ' ' + this.last_name;
// });

var UsersModel = mongoose.model('User', UsersSchema);
var FacilitiesModel = mongoose.model('Facilities', FacilitiesSchema);


module.exports =  {
         Users: UsersModel,
         Facilities: FacilitiesModel 

       };  

