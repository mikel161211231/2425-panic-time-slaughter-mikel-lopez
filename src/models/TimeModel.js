// Load the mongoose module
const mongoose = require('mongoose');

// Use the schemas
const { Schema } = mongoose;

// Create the object of the schema and their attributes
const timeSchema = new Schema({
    id: String,
    day_number: Number,
    day_week: String,
    km_traveled: Number,
    km_total: Number
}, { collection : 'time' });

// Export the model to use on other files
module.exports = mongoose.model('Time', timeSchema)