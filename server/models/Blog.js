const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const BlogSchema = new Schema(
   {
    title: {type: String}
   }
)

module.exports = mongoose.model('Blog',BlogSchema)