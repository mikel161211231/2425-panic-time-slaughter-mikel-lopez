const Character = require("../models/CharacterModel");
const mongoose = require("mongoose");


const getAllPlayers = async () => {
    try {
        const playersPopulated = await Character.find();
        // Poblamos el equipo
        return playersPopulated;
    } catch (error) {
        throw error;
    }
}

const populateAllPlayers = async (players) => {

    for (let i = 0; i < players.length; i++) {
        const playerPopulated = players[i];
        await playerPopulated.populate({path:'equipment.saddlebag', options: { strictPopulate: false }});
        await playerPopulated.populate({path:'equipment.weapons', options: { strictPopulate: false }});
        await playerPopulated.populate({path:'equipment.pouch.precious_stones', options: { strictPopulate: false }});
        players[i] = playerPopulated;
    }

    return players;
}

const morningActions = async () => {
    const allPlayers = await Character.find();

    console.log("Morning (05:00)");

    allPlayers.map(async (player) => {



        const values = [{ dex: 0, str: 2 }, { dex: 1, str: 1 }, { dex: 2, str: 0 }];
        const index = Math.floor(Math.random() * values.length);

        player.stats.dexterity += values[index].dex;
        console.log("   -->" + player.name + " dexterity increases by " + values[index].dex + " points and now is " + player.stats.dexterity);

        player.stats.strength += values[index].str;
        console.log("   -->" + player.name + " strength increases by " + values[index].str + " points and now is " + player.stats.strength);
        console.log("----------------------------------------------------------------------------------------");
        await Character.findOneAndUpdate({ name: player.name }, { $set: { stats: player.stats } }, { new: true });


    })
}


module.exports = {
    getAllPlayers,
    populateAllPlayers,
    morningActions
}