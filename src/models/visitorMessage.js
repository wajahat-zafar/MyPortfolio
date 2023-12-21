const mongoose = require('mongoose');
const validator = require('validator')

const contactSchema = mongoose.Schema({
    name:{
        type: String,
        required: true,
        minLength: 3

    },
    
    email:{
        type: String,
        required: true,
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error('Invalid Email id')
            }
        }
    },
    subject:{
        type: String,
        required: true
    },
    message:{
        type: String,
        required: true,
        minLength: 3
    }
    
})


const user = mongoose.model('User', contactSchema);
module.exports = user;