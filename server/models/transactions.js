const mongoose = require('mongoose')
const { Schema } = mongoose;

const AdminSchema = new Schema({
    name: String,
    description: String,
    price: Number,
    datetime: { type: Date },
}, {
    timestamps: true
});

const TranscationModel = mongoose.model('Transcaction', AdminSchema);
module.exports = TranscationModel;
