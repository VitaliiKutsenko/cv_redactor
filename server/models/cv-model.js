const { Schema, model } = require('mongoose');

const CvSchema = new Schema({
    user: { type: Schema.Types.ObjectId, ref: 'User' },
    image: { data: Buffer, contentType: String },
});

module.exports = model('CvModel', CvSchema);
