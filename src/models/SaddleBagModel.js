// Load the mongoose module
const mongoose = require('mongoose');

// Use the schemas
const { Schema } = mongoose;

// Create the object of the schema and their attributes
const saddlebagSchema = new Schema({
    id: String,
    name: String,
    description: String,
    recover_stamina: Number,
});

// Export the model to use on other files
module.exports = mongoose.model('Saddlebag', saddlebagSchema)
