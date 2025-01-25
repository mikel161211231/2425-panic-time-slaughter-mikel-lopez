// Load the mongoose module
const mongoose = require('mongoose');
const SaddleBag = require('./SaddleBagModel');
const Weapon = require('./WeaponModel');
const PreciousStone = require('./PreciousStoneModel');
// Use the schemas
const { Schema } = mongoose;


// Create the object of the schema and their attributes
const characterSchema = new Schema({
    _id: String,
    name: String,
    occupation: String,
    description: String,
    stats: {
        strength: Number,
        dexterity: Number,
        stamina: Number
    },
    equipment: {
        saddlebag:  [ {type:mongoose.Schema.Types.ObjectId, ref: SaddleBag }],
        quiver: Number,
        weapons: [{ type: mongoose.Schema.Types.ObjectId, ref: Weapon }],
        pouch: {
            coins: Number,
            gold: Number,
            precious_stones: [{ type: mongoose.Schema.Types.ObjectId, ref: PreciousStone }]
        },
        miscellaneous: [],
    },

    
}, { collection : 'characters' });

// Export the model to use on other files
module.exports = mongoose.model('Character', characterSchema)


