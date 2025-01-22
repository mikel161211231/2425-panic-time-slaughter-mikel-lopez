const Character = require("../models/CharacterModel");
const mongoose = require("mongoose");


const getAllPlayers = async () => {
    try {
        const playersPopulated = await Character.find();
        // Poblamos el equipo
        playersPopulated.map(async (playerPopulated) => {
            await playerPopulated.equipment.populate('Saddlebag');
            await playerPopulated.equipment.populate('Weapon');
            await playerPopulated.equipment.pouch.populate('precious_stones');
        });

        return playersPopulated;
    } catch (error) {
        throw error;
    }
}

const populateAllPlayers = async (players) => {

    // players.map(async (playerPopulated) => {
    //     await playerPopulated.equipment.populate('saddlebag');
    //     await playerPopulated.equipment.populate('weapons');
    //     await playerPopulated.equipment.pouch.populate('precious_stones');
    //     console.log(playerPopulated.equipment);
    // });
    return players;
}


module.exports = {
    getAllPlayers,
    populateAllPlayers,
}