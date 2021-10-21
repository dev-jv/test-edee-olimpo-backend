const { Schema, model } = require('mongoose');

const recordSchema = Schema({
    name: {
        type: String,
        required: [true, 'A name is required']
    },
    email: {
        type: String,
        required: [true, 'A email is required']
    },
    movie: {
        type: String,
        required: [true, 'A movie is required']
    },
    rating: {
        type: String,
        required: [true, 'A rating is required'],
        enum: ['1', '2', '3', '4', '5']
    }
})

recordSchema.methods.toJSON = function () {
    const { __v, ...record } = this.toObject();
    return record;
}

module.exports = model( 'Record', recordSchema );
