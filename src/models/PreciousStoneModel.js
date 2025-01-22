// Load the mongoose module
const mongoose = require('mongoose');

// Use the schemas
const { Schema } = mongoose;

// Create the object of the schema and their attributes
const preciousStoneSchema = new Schema({
    id: String,
    name: String,
    description: String,
    value: Number,
}, { collection : 'precious_stones' });

// Export the model to use on other files
module.exports = mongoose.model('PreciousStone', preciousStoneSchema)
