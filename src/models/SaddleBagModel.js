// Load the mongoose module
const mongoose = require('mongoose');

// Use the schemas
const { Schema } = mongoose;

// Create the object of the schema and their attributes
const saddlebagSchema = new Schema({
    id: mongoose.Schema.Types.ObjectId,
    name: String,
    description: String,
    recover_stamina: Number,
}, { collection : 'saddlebag' });

// Export the model to use on other files
module.exports = mongoose.model('Saddlebag', saddlebagSchema)
