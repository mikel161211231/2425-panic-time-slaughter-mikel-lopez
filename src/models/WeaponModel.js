// Load the mongoose module
const mongoose = require('mongoose');

// Use the schemas
const { Schema } = mongoose;

// Create the object of the schema and their attributes
const weaponSchema = new Schema({
    id: mongoose.Schema.Types.ObjectId,
    name: String,
    description: String,
    num_die_damage: Number,
    type: String,
    quality: Number
}, { collection : 'weapons' });

// Export the model to use on other files
module.exports = mongoose.model('Weapon', weaponSchema)
