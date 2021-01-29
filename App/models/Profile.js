const mongoose = require('mongoose')
const Schema = mongoose.Schema
const profileSchema = new Schema({
    fullname : {
        type : String,
        required : true
    },
    
    email : {
        type : String,
        required : true
    }, 
    
    mobile : {
        type : Number,
        required : true
    },
    course : {
        type : String,
        required : true
    },
    location : {
        type : String,
        required : true
    },
    
    referralCode : {
        type : String,
     },
    createdAt : {
        type : Date,
        default : Date.now
    },
    user  : {
        type : Schema.Types.ObjectId,
        ref  : 'User',
        required : true
    }
})
 
const Profile = mongoose.model('Profile', profileSchema)
 module.exports = Profile

 